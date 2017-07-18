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
          <TweenOne className="home-containb-img">
                   <img src={li3} alt="img" />

                </TweenOne>

                <QueueAnim className="home-containb-text" type={['left','right']}>
                 
                  <h2>{homedata.componentb.title}</h2>
                  <p>{homedata.componentb.content}</p>

                </QueueAnim>




                </Link>

             </OverPack>

	}
}