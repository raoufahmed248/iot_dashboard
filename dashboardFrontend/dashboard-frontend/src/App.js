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
    data: getRandomDateArray(150)
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
    axios.get("http://localhost:8000/temperatures/")
      .then( (response) =>{
        console.log(response.data)
        this.setState({temperatures:response.data})
      });
  }
  
  componentDidMount() {
    this.getTemperatureData();
    window.setInterval(() => {
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
              data={this.state.data[0].data}
              title={this.state.data[0].title}
              color="#3E517A"
            />
          </div>
          <div className="sub chart-wrapper">
            <LineChart
              data={this.state.data[0].data}
              title={this.state.data[0].title}
              color="#3E517A"
            />
          </div>
          <div className="sub chart-wrapper">
            <LineChart
              data={this.state.data[0].data}
              title={this.state.data[0].title}
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
