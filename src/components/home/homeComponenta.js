import React,{Component} from "react"
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import jiantou from "./../../images/jiantou.png"
import "./homeComponenta.css"
export default class Componenta extends Component{



   render(){ 	
   	   return (<OverPack className="home-containa" id="home-containa" key="home-containa" replay={true} playScale={[0.3,0.5]} component="div" style={{height:this.props.currentheight}} >
                    <QueueAnim className="home-containa-text" type={['buttom','top']} delay={200} duration={500} key="home-containa-text">
                          <h2>
                             just it 
                          </h2>
                          <ul>
	                          <li> 有美一人兮，见之不忘。</li>
	                          <li>一日不见兮，思之如狂。</li>
	                          <li> 凤飞翱翔兮，四海求凰。</li>
	                          <li>无奈佳人兮，不在东墙。</li>
	                          <li>将琴代语兮，聊写衷肠。</li>
	                          <li>何时见许兮，慰我彷徨。</li>
	                          <li>愿言配德兮，携手相将。</li>
	                          <li>不得於飞兮，使我沦亡。</li>
                             
                              
                             
                              
                              
                              
                              
                              

                          </ul>
                    </QueueAnim>
                    <TweenOne className="home-containa-img" animation={{y:"10",type:"to" ,duration:1000, repeat:-1, yoyo:true}}>
                     <img src={jiantou} alt="img" />
                    </TweenOne>

   	          </OverPack>


   	   	) 







   	         
   }

}