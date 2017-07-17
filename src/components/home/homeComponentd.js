import React,{Component} from "react"
import "./homeComponentd.css"
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim'; 
import TweenOne from "rc-tween-one"
import li5 from "./../../images/li5.jpg"
import {Link} from "react-router-dom"
export default class Componentd extends Component{
	render(){
      return <OverPack className="home-containd" id="home-containd" component="div" replay={true} style={{height:this.props.currentheight}}>
              
               <Link to="/about/5">

              <QueueAnim className="home-containd-text" type={['left','right']}>
                 
                  <h2> 爱你就像爱生命</h2>
                  <p> 我把我整个灵魂都给你，连同它的怪癖，耍小脾气，忽明忽暗，一千八百种坏毛病.</p>

                </QueueAnim>
                  <TweenOne className="home-containd-img">
                   <img src={li5} alt="img" />

                </TweenOne>



               </Link>
                


             </OverPack>

	}
}