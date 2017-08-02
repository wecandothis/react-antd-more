/*
   1.此组件需要从父组件拿到props值，无法使用无状态组件
   2.当props值不变时，就不需要重新渲染，使用immutable.js做比较


*/

import React,{Component} from "react"
import "./homeComponentd.css"
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim'; 
import TweenOne from "rc-tween-one"
import {is} from "immutable"
import li5 from "./../../images/li5.jpg"
import {Link} from "react-router-dom"
import homedata from "./../../data/homedata.json"
export default class Componentd extends Component{
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
      return <OverPack className="home-containd" id="home-containd" key="home-containd" component="div" replay={true} style={{height:this.props.currentheight}}>
              
               <Link to="/about/5">

              <QueueAnim  type={['left','right']}>
                 
               <TweenOne className="home-containd-text" key="home-containd-text" animation={{x:30,type:'from',opacity:0,duration:1000}}>
                    <h2>{this.state.homedata.componentd.title}</h2>
                  <p>{this.state.homedata.componentd.content} </p>

                </TweenOne>
                   <TweenOne className="home-containd-img" animation={{x:-30,type:'from',opacity:0,duration:1000}}>
                   <img src={li5} alt="img" />

                </TweenOne>

                </QueueAnim>
                



               </Link>
                


             </OverPack>

	}
}