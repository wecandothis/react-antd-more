import React from "react"
import TweenOne from "rc-tween-one"
import "./Header.css"
import Title from "./../images/title.ico"
import {Link} from "react-router-dom"

 const Header=()=>( 
 	    <TweenOne component="div" className="Header" >
	         <span><img src={Title} alt=" " /></span>
	         <h2>I like you all the time </h2> 
	         <ul>
	           <li><Link to="/">Home</Link></li>
	           <li><Link to="/about">About</Link></li>
	           <li><Link to="/issue">Issue</Link></li>
	           <li><Link to="/contact">Contact</Link></li>


             </ul>
        </TweenOne>
         	)
 export default Header