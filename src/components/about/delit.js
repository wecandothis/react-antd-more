/*
   1.此组件需要从父组件拿到props值，无法使用无状态组件
   2.当props值不变时，就不需要重新渲染，使用immutable.js做比较


*/

import React,{Component} from "react"
import {is} from "immutable"
import li1 from "./../../images/li1.jpg"
import li2 from "./../../images/li2.jpg"
import li3 from "./../../images/li3.jpg"
import li4 from "./../../images/li4.jpg"
import li5 from "./../../images/li5.jpg"
import li6 from "./../../images/li6.jpg"
import li7 from "./../../images/li7.jpg"
import li8 from "./../../images/li8.jpg"
import li9 from "./../../images/li9.jpg"
import aboutdata from "./../../data/aboutdata.json"
import "./delit.css"






 	
export default class Delit extends Component{
	 constructor(props){
       super(props);
       this.state={
        aboutdata:aboutdata
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

		const dataArray=[
		{img:li1,index:1},
		{img:li2,index:2},
		{img:li3,index:3},
		{img:li4,index:4},
		{img:li5,index:5},
		{img:li6,index:6},
		{img:li7,index:7},
		{img:li8,index:8},
		{img:li9,index:9}]
		const matchdata=this.props.match.params.id;
		return <div>
				   <span>
                        <img src={dataArray[matchdata-1].img} alt=" " />
				   </span>
				   <h2>{this.state.aboutdata[matchdata].title}</h2>
				   <p>{this.state.aboutdata[matchdata].content}</p>
				</div>
	}
}