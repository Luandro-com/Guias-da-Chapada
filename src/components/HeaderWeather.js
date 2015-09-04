import React from 'react';
import __fetch from "isomorphic-fetch";

export default class extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      temperature: " ",
      weather: " ",
      icon: "http://openweathermap.org/img/w/01d.png"
    }
  }

  loadData() {
    const url = '//api.openweathermap.org/data/2.5/weather?lat=-14.13359&lon=-47.52079&units=metric&lang=pt'
    fetch(url)
      .then((resp) => {
        return resp.json()
      })
      .then((json) => {
        const temperature = (parseInt(json.main.temp));
        const weather = (json.weather[0].description);
        const icon = (json.weather[0].icon);
        const iconUrl = "http://openweathermap.org/img/w/"+icon+".png";
        this.setState({
          temperature: temperature,
          weather: weather,
          icon: iconUrl
        })
      })
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    const {icon, temperature, weather} = this.state
    return (
      <div>
        <img src={icon} /> {temperature}&deg; com {weather} na Chapada dos Veadeiros
      </div>
    );
  }

}
