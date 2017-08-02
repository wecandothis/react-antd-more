/*
   1.此组件需要从父组件拿到props值，无法使用无状态组件
   2.当props值不变时，就不需要重新渲染，使用immutable.js做比较


*/


import React,{Component} from "react"
import "./homeComponente.css"
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {Link} from "react-router-dom"
import {is} from "immutable"
import issuedata from "./../../data/issuedata.json"
import homedata from "./../../data/homedata.json"

export default class Componente extends Component{
    constructor(props){
       super(props);
       this.state={
        issuedata:issuedata,
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
  
  getChildtorender=(item)=>{
  	return (<li key={item.index} > 
             
                 <span>{item.question}</span>
                 
           


  		</li>)
  }

  render(){
    let dataArray=[{},{},{},{},{},{},{},{}];
   for(let i=0;i<8;i++){
      dataArray[i].question=this.state.issuedata[i+2].question
   }
 const childerender=dataArray.map(this.getChildtorender)
  	return(<OverPack className="home-containe" key="home-containe" style={{height:this.props.currentheight}}>
             
            <TweenOne className="home-containe-text"  animation={{ y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' }} key="h1" reverseDelay={300}  >
         
                <h1>{this.state.homedata.componente.title}</h1>
                
          </TweenOne>
          <ul className="home-containe-ul">
           {childerender}
          </ul>
          
         
          <TweenOne className="home-containe-button" component="button"  animation={{scale:1.1,repeat:-1,yoyo:true}} reverseDelay={300}>
             <Link to="/issue">more</Link>

          </TweenOne>
            </OverPack>


  		)
  }




}
