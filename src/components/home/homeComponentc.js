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
                       <QueueAnim className="home-containc-text" type={['left','right']}>
                 
                  <h2>{homedata.componentc.title}</h2>
                  <p> {homedata.componentc.content}</p>

                </QueueAnim>
                  <TweenOne className="home-containc-img">
                   <img src={li4} alt="img" />

                </TweenOne>


                    </Link>
                



             </OverPack>

	}
}