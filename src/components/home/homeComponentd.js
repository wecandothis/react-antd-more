import React,{Component} from "react"
import "./homeComponentd.css"
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim'; 
import TweenOne from "rc-tween-one"
import li5 from "./../../images/li5.jpg"
import {Link} from "react-router-dom"
import homedata from "./../../data/homedata.json"
export default class Componentd extends Component{
	render(){
      return <OverPack className="home-containd" id="home-containd" component="div" replay={true} style={{height:this.props.currentheight}}>
              
               <Link to="/about/5">

              <QueueAnim className="home-containd-text" type={['left','right']}>
                 
                  <h2>{homedata.componentd.title}</h2>
                  <p>{homedata.componentd.content} </p>

                </QueueAnim>
                  <TweenOne className="home-containd-img">
                   <img src={li5} alt="img" />

                </TweenOne>



               </Link>
                


             </OverPack>

	}
}