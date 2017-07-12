import React from "react"
import TweenOne from "rc-tween-one"
import "./Header.css"
import Title from "./../images/title.ico"


 const Header=()=>( 
 	    <TweenOne component="div" className="Header">
            <img src={Title} alt="title-img" />
            <h2>I like you whatever and wherever</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Issues</li>
              <li>Contact</li>
            </ul>
        </TweenOne>
         	)
 export default Header