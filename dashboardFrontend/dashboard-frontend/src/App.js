import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {LineChart, BarChart, DoughnutChart, getData, getRandomArray, getRandomDateArray} from "./Component/Dashboard/index.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getData()
    };
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState({
        data: getData()
      })
    }, 5000)
  }
  render() {
    return (
        <div className="App">
          <div className="main chart-wrapper">
            <LineChart
              data={this.state.data[0].data}
              title={this.state.data[0].title}
              color="#3E517A"
            />
          </div>
          <div className="sub chart-wrapper">
            <BarChart
              data={this.state.data[1].data}
              title={this.state.data[1].title}
              color="#70CAD1"
            />
          </div>
          <div className="sub chart-wrapper">
            <BarChart
              data={this.state.data[2].data}
              title={this.state.data[2].title}
              color="#B08EA2"
            />
          </div>
          <div className="sub chart-wrapper">
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
