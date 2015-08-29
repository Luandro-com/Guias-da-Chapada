import React from 'react';
import __fetch from "isomorphic-fetch";

export default class extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      temperature: "24",
      weather: "sunny",
      icon: "http://openweathermap.org/img/w/50d.png"
    }
  }

  loadData() {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=-14.13359&lon=-47.52079&units=metric&lang=pt'
    fetch(url).then((resp) => {
      console.log(resp.weather[0].description);
      var temperature = (parseInt(resp.main.temp));
      var weather = (resp.weather[0].description);
      var icon = (resp.weather[0].icon);
      var iconUrl = "http://openweathermap.org/img/w/"+icon+".png";
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
    const {icon, temperature, weather} = this.props
    return (
      <div>
        <img src={icon} /> {temperature}&deg; com {weather} na Chapada dos Veadeiros
      </div>
    );
  }

}
