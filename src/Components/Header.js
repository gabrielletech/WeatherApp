import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="weather" />
                <h1>Welcome to the Weather App!</h1>
            </div>
        )
    }
}