var React = require('react');

var {NavLink, Redirect} = require('react-router-dom');

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(event) {
        event.preventDefault();
        
        var location = this.location.value;
        var encodedLocation = encodeURIComponent(location);

        if (location.length > 0) {
            this.location = '';
            this.props.history.push('/?location='+encodedLocation);
            this.props.location.search = '?location='+encodedLocation;
        }
    }

    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li><NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink></li>
                        <li><NavLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input 
                                    type="search" 
                                    placeholder="Search weather by city" 
                                    ref={(location) => { this.location = location}} 
                                />
                            </li>
                            <li>
                                <input type="submit" className="button" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}

module.exports = Nav;