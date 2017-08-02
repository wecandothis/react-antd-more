/*
   1.此组件需要从父组件拿到props值，无法使用无状态组件
   2.当props值不变时，就不需要重新渲染，使用immutable.js做比较


*/
import React,{Component} from "react"
import "./homeComponentb.css"
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim'; 
import TweenOne from "rc-tween-one"
import  {is} from "immutable"
import li3 from "./../../images/li3.jpg"
import {Link} from "react-router-dom"
import homedata from "./../../data/homedata.json"


export default class Componentb extends Component{
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
      return <OverPack className="home-containb" id="home-containb" key="home-containb" component="div" replay={true} style={{height:this.props.currentheight}}>
                <Link to="/about/3">
                
                <QueueAnim>
                  <TweenOne className="home-containb-img" key="home-containb-img" animation={{x:"-30",duration:1000,type:"from",opacity:0}}>
                    <img src={li3} alt="img" />
                   </TweenOne >
                   <TweenOne className="home-containb-text" key="home-containb-text" animation={{x:"30",duration:1000,type:"from",opacity:0}}>
                     <h2>{this.state.homedata.componentb.title}</h2>
                    <p>{this.state.homedata.componentb.content}</p>
                   </TweenOne >
                </QueueAnim>                                                           
                </Link>
             </OverPack>

	}
}