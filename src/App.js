import React, { Component } from 'react';
import './Main.css';
import CityCountryRow from './Components/CityCountryRow';
import weather from './images/weather.jpg';
import Header from './Components/Header';
import Display from './Components/Display';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  //initial state
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  //getWeather asyncy arrow function fetches the weather data from the API
  getWeather = async (e) => {
    //to prevent it from reloading the browser which stops the data from being fetched and displayed
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=da1460882faa00dbac8420c5cb94c7b8&units=metric`;
    const api = await fetch(url); 
    const data = await api.json();
    
    if (city && country ) {
    //sets the state of our state object elements according to how they are stored as API data
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })
    //displays an error message
  } else {
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Location not found. Please enter again."
    })

  }
  }
  render () {
  return (
    <div className="App">
      <Header image={weather}/>
      <CityCountryRow getWeather={this.getWeather}/>
      <Display 
        temperature={this.state.temperature} 
        city={this.state.city} 
        country={this.state.country} 
        humidity={this.state.humidity} 
        description={this.state.description}
        error={this.state.error} 
      />

    </div>
  );
  }
}

export default App;
