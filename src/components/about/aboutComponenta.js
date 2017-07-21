import React,{Component} from 'react'
import "./aboutComponenta.css"
import QueueAnim from "rc-queue-anim"
import TweenOne,{TweenOneGroup} from "rc-tween-one"
import {HashRouter as Router,Link,Route} from "react-router-dom"
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
export default class Componenta extends Component{

   getanimationdata=(e)=>{
         const index=e.index;
         const delay = Math.random()*1000 + 300;
         return { y: '+=30', opacity: 0, type: 'from', delay };

   }
    getChildtorender=(item,index)=>{
  	return (<li key={item.index} >
  	            <Link to={`/about/${item.index}`}>
	             <div>
	                 <span><img className="about-containe-img" src={item.img} alt=" "/></span>
	                 <TweenOne component="h3">
                    {aboutdata[item.index].title}


                   </TweenOne>
	             </div>
                </Link>
          

  		</li>)
  }
    render(){
    	const dataAarry=[
    	{img:li1,index:"1"},
    	{img:li2,index:"2"},
    	{img:li3,index:"3"},
    	{img:li4,index:"4"},
    	{img:li5,index:"5"},
    	{img:li6,index:"6"},
    	{img:li7,index:"7"},
    	{img:li8,index:"8"},
    	{img:li9,index:"9"}
    	]
        const childgorender=dataAarry.map(this.getChildtorender)
    	return (  <QueueAnim className="about-containa">
                     <TweenOne className="about-containa-text">
                      <h3>this is demo </h3>
                     </TweenOne>

                     <TweenOneGroup className="about-containa-ul" component="ul" enter={(e)=>{return this.getanimationdata(e)}} leave={{ y: '+=30', opacity: 0, ease: 'easeOutQuad' }}>

                       {childgorender}

                     </TweenOneGroup>




    		      </QueueAnim>



    		)
    }
   


}