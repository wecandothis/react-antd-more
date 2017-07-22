/*
   1.此组件需要从父组件拿到props值，无法使用无状态组件
   2.当props值不变时，就不需要重新渲染，使用immutable.js做比较


*/
import React,{Component} from "react"
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {is} from "immutable"
import homedata from "./../../data/homedata.json"
import jiantou from "./../../images/jiantou.png"
import "./homeComponenta.css"
  


export default class Componenta extends Component{

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

   	   return (<OverPack className="home-containa" id="home-containa" key="home-containa" replay={true} playScale={[0.3,0.5]} component="div" style={{height:this.props.currentheight}}>
                    <QueueAnim className="home-containa-text" type={['buttom','top']} delay={200} duration={500} key="home-containa-text">
                          <h2>
                            {this.state.homedata.componenta.title}
                          </h2>
                          <ul>
	                           <li>{this.state.homedata.componenta.text[0].content}</li>
	                           <li>{this.state.homedata.componenta.text[1].content}</li>
                             <li>{this.state.homedata.componenta.text[2].content}</li>
                             <li>{this.state.homedata.componenta.text[3].content}</li>
                             <li>{this.state.homedata.componenta.text[4].content}</li>
                             <li>{this.state.homedata.componenta.text[5].content}</li>
                             <li>{this.state.homedata.componenta.text[6].content}</li>
                             <li>{this.state.homedata.componenta.text[7].content}</li>                                                                                                                                                                                                                                                                </ul>
                    </QueueAnim>
                    <TweenOne className="home-containa-img" animation={{y:"10",type:"to" ,duration:500, repeat:-1, yoyo:true}}>
                     <img src={jiantou} alt="img" />
                    </TweenOne>

   	          </OverPack>


   	   	) 







   	         
   }

}