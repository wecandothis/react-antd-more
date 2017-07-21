/*
   1.

*/
import React,{Component} from "react"
import "./homeComponentb.css"
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim'; 
import TweenOne from "rc-tween-one"
import li3 from "./../../images/li3.jpg"
import {Link} from "react-router-dom"
import homedata from "./../../data/homedata.json"


export default class Componentb extends Component{
	render(){
      return <OverPack className="home-containb" id="home-containb" component="div" replay={true} style={{height:this.props.currentheight}}>
                <Link to="/about/3">
                
                <QueueAnim>
                  <TweenOne className="home-containb-img" animation={{x:"-30",duration:1000,type:"from",opacity:0}}>
                    <img src={li3} alt="img" />
                   </TweenOne >
                   <TweenOne className="home-containb-text" animation={{x:"30",duration:1000,type:"from",opacity:0}}>
                     <h2>{homedata.componentb.title}</h2>
                    <p>{homedata.componentb.content}</p>
                   </TweenOne >
                </QueueAnim>                                                           
                </Link>
             </OverPack>

	}
}