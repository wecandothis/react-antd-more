import React, { Component } from 'react';
import {HashRouter as Router,Route} from "react-router-dom"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Bundle from "./bundle"
import Home from "./contains/home"
const About = () => (
  <Bundle load={()=>import('./contains/about')}>
    {(About) => <About  />}
  </Bundle>
)
const Contact = () => (
  <Bundle load={()=>import('./contains/contact')}>
    {(Contact) => <Contact />}
  </Bundle>
)
const Issue = () => (
  <Bundle load={()=>import("./contains/issue")}>
    {(Issue) => <Issue  />}
  </Bundle>
)
const Delit = () => (
  <Bundle load={()=>import("./components/about/delit")}>
    {(Delit) => <Delit  />}
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
