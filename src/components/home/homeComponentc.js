/*
   1.此组件需要从父组件拿到props值，无法使用无状态组件
   2.当props值不变时，就不需要重新渲染，使用immutable.js做比较


*/



import React,{Component} from "react"
import "./homeComponentc.css"
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim'; 
import TweenOne from "rc-tween-one"
import {is} from "immutable"
import li4 from "./../../images/li4.jpg"
import {Link} from "react-router-dom"
import homedata from "./../../data/homedata.json"
export default class Componentc extends Component{
   constructor(props){
       super(props);
       this.state={
        homedata:homedata
       }
    }
   shouldComponentUpdata(nextProps,nextState){
         const thisProps=this.props || {};
         const thisState=this.state ||{};
          if(Object.keys(thisProps).length!==Object.keys(nextProps).length ||
             Object.keys(thisState).length!==Object.keys(nextState).length){
            return true
          }

          for (const key in  nextProps){
              if(nextProps.hasOwnProperty(key)&&!is(thisProps[key],nextProps[key])){
                return true
              }

          }
          for (const key in  nextState){
              if(nextState.hasOwnProperty(key)&&!is(thisState[key],nextState[key])){
                return true
              }

          }
          return false 

   }
  
	render(){
      return <OverPack className="home-containc" id="home-containc" key="home-containc" component="div" replay={true} style={{height:this.props.currentheight}}>
              
                    <Link to="/about/4">
         <QueueAnim  type={['left','right']}>
                    <TweenOne className="home-containc-text"  animation={{x:-30,duration:1000, type:"from",opacity:0}}>
                  
                  <h2>{this.state.homedata.componentc.title}</h2>
                  <p> {this.state.homedata.componentc.content}</p>
                </TweenOne>
                   <TweenOne className="home-containc-img" animation={{x:30,duration:1000, type:"from",opacity:0}}>
                   <img src={li4} alt="img" />

                </TweenOne>

         </QueueAnim>
                


                    </Link>
                



             </OverPack>

	}
}