import React,{Component} from "react"
import "./homeComponentc.css"
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim'; 
import TweenOne from "rc-tween-one"
import li4 from "./../../images/li4.jpg"
import {Link} from "react-router-dom"
import homedata from "./../../data/homedata.json"
export default class Componentc extends Component{
	render(){
      return <OverPack className="home-containc" id="home-containc" component="div" replay={true} style={{height:this.props.currentheight}}>
              
                    <Link to="/about/4">
         <QueueAnim  type={['left','right']}>
                    <TweenOne className="home-containc-text"  animation={{x:-30,duration:1000, type:"from",opacity:0}}>
                  
                  <h2>{homedata.componentc.title}</h2>
                  <p> {homedata.componentc.content}</p>
                </TweenOne>
                   <TweenOne className="home-containc-img" animation={{x:30,duration:1000, type:"from",opacity:0}}>
                   <img src={li4} alt="img" />

                </TweenOne>

         </QueueAnim>
                


                    </Link>
                



             </OverPack>

	}
}