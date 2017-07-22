/*
   1.此组件需要从父组件拿到props值，无法使用无状态组件
   2.当props值不变时，就不需要重新渲染，使用immutable.js做比较


*/


import React,{Component} from "react"
import "./homeComponente.css"
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {Link} from "react-router-dom"
import {is} from "immutable"
import li1 from "./../../images/li1.jpg"
import li2 from "./../../images/li2.jpg"
import li3 from "./../../images/li3.jpg"
import li4 from "./../../images/li9.jpg"
import li5 from "./../../images/li5.jpg"
import li6 from "./../../images/li6.jpg"
import li7 from "./../../images/li7.jpg"
import li8 from "./../../images/li8.jpg"
import homedata from "./../../data/homedata.json"

export default class Componente extends Component{
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
  
  getChildtorender=(item)=>{
  	return (<li key={item.index} > 
             <div>
                 <span><img className="home-containe-img" src={item.img} alt=" "/></span>
                 
             </div>


  		</li>)
  }
 getanimation=(e)=>{
   const index = e.index;
    const delay = index % 4 * 100 + Math.floor(index / 4) * 100 + 300;
    return { y: '+=30', opacity: 0, type: 'from', delay };


 }
  render(){
  	const dataArray=[
      { img: li1, index:'1' },
      { img: li2, index:'2' },
      { img: li3, index:'3' },
      { img: li4, index:'4' },
      { img: li5, index:'5' },
      { img: li6, index:'6' },
      { img: li7, index:'7' },
      { img: li8, index:'8' }


  	]
  	const childtorender=dataArray.map(this.getChildtorender);
  	return(<OverPack className="home-containe" key="home-containe" style={{height:this.props.currentheight}}>
             
            <TweenOne className="home-containe-text"  animation={{ y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' }} key="h1" reverseDelay={300}  >
         
                <h1>{this.state.homedata.componente.title}</h1>
                
          </TweenOne>
          <TweenOneGroup
           className="home-containe-ul"
            component="ul"
            key="ul"
            enter={(e) => {
              return this.getanimation(e)
            }}
            leave={{ y: '+=30', opacity: 0, ease: 'easeOutQuad' }}>
            {childtorender}
          </TweenOneGroup>
          <TweenOne className="home-containe-button" component="button"  animation={{scale:1.1,repeat:-1,yoyo:true}} reverseDelay={300}>
             <Link to="/issue">more</Link>

          </TweenOne>
            </OverPack>


  		)
  }




}
