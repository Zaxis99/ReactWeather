var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This is a weather application built in React. I have built this for The Complete React Web Developer Course.</p>
            <p>Here are some of the tools I used</p>
            <ul>
                <li><a href="https://facebook.github.io/react">React</a></li> - Javascript framework
                <li><a href="https://openweathermap.org">Open Weather Map</a></li> - Used to search Weather data by city name
            </ul>
        </div>
    );
}

module.exports = About;