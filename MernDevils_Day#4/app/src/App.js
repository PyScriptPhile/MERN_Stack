import './App.css';

import React, { Component } from 'react';

import Footer from '../src/components/footer/footer';
import Header from '../src/components/header/header';
import js from '../src/images/js.png';
import logo from './logo.svg';
import ml from '../src/images/ml.jpg';
import python from '../src/images/python.jpg';
import scriptphile from '../src/images/ScriptPhile.jpg';
import tf from '../src/images/tensorflow.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <img src={js} className="App-logo" alt="logo" />
          <img src={ml} className="App-logo" alt="logo" />
          <img src={python} className="App-logo" alt="logo" />
          <img src={scriptphile} className="App-logo" alt="logo" />
          <img src={tf} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MernDevils</h1>
        </header>
        <Footer />
      </div>
    );
  }
}

export default App;
