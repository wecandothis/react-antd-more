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
export default class Componenta extends Component{

   getanimationdata=(e)=>{
         const index=e.index;
         const delay = index % 4 * 100 + Math.floor(index / 4) * 100 + 300;
         return { y: '+=30', opacity: 0, type: 'from', delay };

   }
    getChildtorender=(item)=>{
  	return (<li key={item.index} >
  	            <Link to={`/about/${item.index}`}>
	             <div>
	                 <span><img className="home-containe-img" src={item.img} alt=" "/></span>
	                 <p>{item.content}</p>
	             </div>
                </Link>
          

  		</li>)
  }
    render(){
    	const dataAarry=[
    	{img:li1,content:"test1",index:"1"},
    	{img:li2,content:"test2",index:"2"},
    	{img:li3,content:"test3",index:"3"},
    	{img:li4,content:"test4",index:"4"},
    	{img:li5,content:"test5",index:"5"},
    	{img:li6,content:"test6",index:"6"},
    	{img:li7,content:"test7",index:"7"},
    	{img:li8,content:"test8",index:"8"},
    	{img:li9,content:"test9",index:"9"}
    	]
        const childgorender=dataAarry.map(this.getChildtorender)
    	return (  <QueueAnim className="about-containa">
                     <TweenOne className="about-containa-text">
                      <h3>this is demo </h3>
                     </TweenOne>

                     <TweenOneGroup component="ul" enter={(e)=>{return this.getanimationdata(e)}} leave={{ y: '+=30', opacity: 0, ease: 'easeOutQuad' }}>

                       {childgorender}

                     </TweenOneGroup>




    		      </QueueAnim>



    		)
    }
   


}