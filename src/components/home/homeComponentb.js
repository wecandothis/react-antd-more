import React,{Component} from "react"
import "./homeComponentb.css"
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim'; 
import TweenOne from "rc-tween-one"
import li3 from "./../../images/li3.jpg"
import {Link} from "react-router-dom"
export default class Componentb extends Component{
	render(){
      return <OverPack className="home-containb" id="home-containb" component="div" replay={true} style={{height:this.props.currentheight}}>
                <Link to="/about/3">
          <TweenOne className="home-containb-img">
                   <img src={li3} alt="img" />

                </TweenOne>

                <QueueAnim className="home-containb-text" type={['left','right']}>
                 
                  <h2>黄金时代</h2>
                  <p>那一天我二十一岁，在我一生的黄金时代，我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云，后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消逝，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己会永远生猛下去，什么也锤不了我。</p>

                </QueueAnim>




                </Link>

             </OverPack>

	}
}