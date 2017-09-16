import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

class ErrorModal extends React.Component {
    render() {
        return (
            <div>
            </div>
        );
    }

    // runs after the component output has been rendered to the DOM. 
    componentDidMount() {
        var {title, message} = this.props;
        var modalMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal>
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">
                        OK
                    </button>
                </p>
            </div>
        );

        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    }
}

ErrorModal.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string.isRequired
};

ErrorModal.defaultProps = {
    title: 'Error'
};

module.exports = ErrorModal;