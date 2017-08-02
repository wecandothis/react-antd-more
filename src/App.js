/*
    1.根据路由器实现代码拆分，按需加载，import()

*/


import React, { Component } from 'react';
import {HashRouter as Router,Route} from "react-router-dom"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Home from "./contains/home"
import Delit from "./components/about/delit"
import Bundle from "./bundle"


const About =()=>(
   <Bundle load={()=>import('./contains/about')}>
   {(About)=><About />}
     
   </Bundle>

	)
const Contact =()=>(
   <Bundle load={()=>import('./contains/contact')}>
   {(Contact)=><Contact />}
     
   </Bundle>

	)
const Issue =()=>(
   <Bundle load={()=>import('./contains/issue')}>
   {(Issue)=><Issue />}
     
   </Bundle>

	)
   
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
