import './App.css';

import React, { Component } from 'react';

import About from '../src/components/header/header_components/about';
import Bloggers from '../src/components/header/header_components/bloggers';
import Django from '../src/components/footer/footer_componrnts/django';
import Footer from '../src/components/footer/footer';
import Header from '../src/components/header/header';
import Home from '../src/components/home/home';
import Login from '../src/components/auth/login/login';
import MERN from '../src/components/footer/footer_componrnts/mern';
import ML from '../src/components/footer/footer_componrnts/ml';
import Node from '../src/components/footer/footer_componrnts/nodejs';
import Pricing from '../src/components/header/header_components/pricing';
import Python from '../src/components/footer/footer_componrnts/python';
import Reactjs from '../src/components/footer/footer_componrnts/reactjs';
import Route from 'react-router-dom/Route';
import { BrowserRouter as Router } from 'react-router-dom';
import Signup from '../src/components/auth/signup/signup';
import js from '../src/images/js.png';
import logo from './logo.svg';
import ml from '../src/images/ml.jpg';
import python from '../src/images/python.jpg';
import scriptphile from '../src/images/ScriptPhile.jpg';
import tf from '../src/images/tensorflow.jpg';

class App extends Component {
  render() {
    return (
      <Router>
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
          <Route path='/home' component={Home} />
          
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/django' component={Django} />
          <Route path='/python' component={Python} />
          <Route path='/reactjs' component={Reactjs} />
          <Route path='/nodejs' component={Node} />
          <Route path='/ml' component={ML} />
          <Route path='/mern' component={MERN} />
          <Route path='/about' component={About} />
          <Route path='/pricing' component={Pricing} />
          <Route path='/bloggers' component={Bloggers} />
         

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
