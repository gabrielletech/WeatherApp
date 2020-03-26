import React, { Component } from 'react';

export default class Display extends Component {
    render() {
        return (
            <div className="display">
            {this.props.city && <p>City: {this.props.city}</p> }
            {this.props.country && <p>Country: {this.props.country}</p> }
            {this.props.temperature && <p>Temperature: {this.props.temperature} (Degrees Celcius) </p>}
            {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
            {this.props.description && <p>Description: {this.props.description}</p>}
            {this.props.error && <p>Error: {this.props.error} </p>}
            </div>
        )
    }
}