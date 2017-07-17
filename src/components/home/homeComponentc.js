import React,{Component} from "react"
import "./homeComponentc.css"
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim'; 
import TweenOne from "rc-tween-one"
import li4 from "./../../images/li4.jpg"
import {Link} from "react-router-dom"
export default class Componentc extends Component{
	render(){
      return <OverPack className="home-containc" id="home-containc" component="div" replay={true} style={{height:this.props.currentheight}}>
              
                    <Link to="/about/4">
                       <QueueAnim className="home-containc-text" type={['left','right']}>
                 
                  <h2> 爱你就像爱生命</h2>
                  <p> 我把我整个灵魂都给你，连同它的怪癖，耍小脾气，忽明忽暗，一千八百种坏毛病.</p>

                </QueueAnim>
                  <TweenOne className="home-containc-img">
                   <img src={li4} alt="img" />

                </TweenOne>


                    </Link>
                



             </OverPack>

	}
}