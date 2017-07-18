/*
  1.布局组件（头部），因其内容单一不变，不需要生命周期、props、state,使用无状态组件.
  2.本组件主要是头部展示和提供路由之间的跳转。
  3.本组件含有动效。
*/
import React from "react"
import TweenOne from "rc-tween-one"
import "./Header.css"
import Title from "./../images/title.ico"
import {Link} from "react-router-dom"
import data from "./../data/layoutdata.json"

 const Header=()=>{

 	return ( 
 	    <TweenOne component="div" animation={{x:20,type:"from"} } className="Header" >
	         <span><img src={Title} alt=" " /></span>
	         <h2>{data.header.title} </h2> 
	         <ul>
	           <li><Link to="/">Home</Link></li>
	           <li><Link to="/about">About</Link></li>
	           <li><Link to="/issue">Issue</Link></li>
	           <li><Link to="/contact">Contact</Link></li>


             </ul>
        </TweenOne>
         	)


 }
 export default Header