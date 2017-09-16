import React from 'react';
import PropTypes from 'prop-types';

class ErrorModal extends React.Component {
    render() {
        var {title, message} = this.props;
        return (
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
    }

    // runs after the component output has been rendered to the DOM. 
    componentDidMount() {
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