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

              <QueueAnim  type={['left','right']}>
                 
               <TweenOne className="home-containd-text" animation={{x:30,type:'from',opacity:0,duration:1000}}>
                    <h2>{homedata.componentd.title}</h2>
                  <p>{homedata.componentd.content} </p>

                </TweenOne>
                   <TweenOne className="home-containd-img" animation={{x:-30,type:'from',opacity:0,duration:1000}}>
                   <img src={li5} alt="img" />

                </TweenOne>

                </QueueAnim>
                



               </Link>
                


             </OverPack>

	}
}