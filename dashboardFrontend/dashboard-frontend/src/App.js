import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import axios from 'axios';

import {LineChart, BarChart, DoughnutChart} from "./Component/Dashboard/index.js";
// Data generation
function getRandomArray(numItems) {
  // Create random array of objects
  let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let data = [];
  for(var i = 0; i < numItems; i++) {
    data.push({
      label: names[i],
      value: Math.round(20 + 80 * Math.random())
    });
  }
  return data;
}

function getRandomDateArray(numItems) {
  // Create random array of objects (with date)
  let data = [];
  let baseTime = new Date('2018-05-01T00:00:00').getTime();
  let dayMs = 24 * 60 * 60 * 1000;
  for(var i = 0; i < numItems; i++) {
    data.push({
      time: new Date(baseTime + i * dayMs),
      value: Math.round(20 + 80 * Math.random())
    });
  }
  return data;
}



function getData() {
  let data = [];

  data.push({
    title: 'Temperature (F)',
    data: getRandomDateArray(50)
  });

  data.push({
    title: 'Humidity (%)',
    data: getRandomArray(20)
  });

  data.push({
    title: 'Pressure (kPa)',
    data: getRandomArray(10)
  });

  data.push({
    title: 'Data 4',
    data: getRandomArray(6)
  });

  return data;
}
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getData(),
      temperatures: [],
      humidities: [],
      pressures: [],  
    };
  }
  getTemperatureData() {
    let outputData = [];
    axios.get("http://localhost:8000/temperaturesLimited/20")
      .then( (response) =>{
        
        var newResp = response.data;
        newResp.forEach(function (item,index) {
          var newDate = new Date(item.created);
          item.time = newDate;
          item.value = Number(item.temperature);
        })
        console.log(newResp)
        this.setState({temperatures:newResp})
      });
  }
  getHumidityData() {
    let outputData = [];
    axios.get("http://localhost:8000/humiditiesLimited/20")
      .then( (response) =>{
        
        var newResp = response.data;
        newResp.forEach(function (item,index) {
          var newDate = new Date(item.created);
          item.time = newDate;
          item.value = Number(item.humidity);
        })
        console.log(newResp)
        this.setState({humidities:newResp})
      });
  }
  getPressureData() {
    let outputData = [];
    axios.get("http://localhost:8000/pressuresLimited/20")
      .then( (response) =>{
        
        var newResp = response.data;
        newResp.forEach(function (item,index) {
          var newDate = new Date(item.created);
          item.time = newDate;
          item.value = Number(item.pressure);
        })
        console.log(newResp)
        this.setState({pressures:newResp})
      });
  }
  componentDidMount() {
    window.setInterval(() => {
      this.getTemperatureData();
      this.getHumidityData();
      this.getPressureData();
      this.setState({
        data: getData()
      })
    }, 5000)
  }
  
  render() {
    return (
        <div className="App">
          <div className="sub chart-wrapper">
            <LineChart
              data={this.state.temperatures}
              title={"Temperature (F)"}
              color="#3E517A"
            />
          </div>
          <div className="sub chart-wrapper">
            <LineChart
              data={this.state.humidities}
              title={"Humidities (%)"}
              color="#3E517A"
            />
          </div>
          <div className="sub chart-wrapper">
            <LineChart
              data={this.state.pressures}
              title={"Pressure (kPa)"}
              color="#3E517A"
            />
          </div>
          <div className="main chart-wrapper">
            <DoughnutChart
              data={this.state.data[3].data}
              title={this.state.data[3].title}
              colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a', '#b08ea2', '#BBB6DF']}
            />
          </div>
        </div>
    );
  }
}


export default App;
