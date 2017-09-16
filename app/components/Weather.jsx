var React = require('react');

import { browserHistory } from 'react-router';

var QueryString = require('query-string');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            location: '',
            temp: 0,
            isLoading: false,
        };
    }

    componentDidMount() {
        var location = QueryString.parse(this.props.location.search).location;
        if (location && location.length > 0) {
            this.handleSearch(location);
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(newProps){
        var location = QueryString.parse(this.props.location.search).location;
        if (location && location.length > 0){
          this.handleSearch(location);
          this.props.history.push('/');
        }
      }

    handleSearch(location) {
        var that = this;

        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });

        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(e) {
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });
    }

    render() {
        var {location, temp, isLoading, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center page-title">Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                );
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
};

module.exports = Weather;