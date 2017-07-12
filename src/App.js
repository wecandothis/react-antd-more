import React, { Component } from 'react';
import './App.css';
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Home from "./contains/home"
class App extends Component {
  render(){
    return <div>
      <Header />
      <Home />
      <Footer />
      

    </div>
  }
}

export default App;
