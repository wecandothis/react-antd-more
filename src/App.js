import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router,Route,Link,Switch} from "react-router-dom"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Home from "./contains/home"
import About from "./contains/about"
import Contact from "./contains/contact"
import Issue from "./contains/issue"
import Delit from "./components/about/delit"
class App extends Component {
  render(){
    return <Router>
			  <div>
			    <Header />
			   
	                <Route exact path="/" component={Home} />
				    <Route exact path="/about" component={About} />
				    <Route path="/contact" component={Contact} />
				    <Route path="/issue" component={Issue} />
				    <Route path="/about/:id" component={Delit} />
                      

				   
				   

			   
			   
			    <Footer />
              </div>


           </Router>
   
      

 
  }
}

export default App;
