import React,{Component} from "react"
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import homedata from "./../../data/homedata.json"
import jiantou from "./../../images/jiantou.png"
import "./homeComponenta.css"
  


export default class Componenta extends Component{
   
  

   render(){ 

   	   return (<OverPack className="home-containa" id="home-containa" key="home-containa" replay={true} playScale={[0.3,0.5]} component="div" style={{height:this.props.currentheight}}>
                    <QueueAnim className="home-containa-text" type={['buttom','top']} delay={200} duration={500} key="home-containa-text">
                          <h2>
                             just it 
                          </h2>
                          <ul>
	                           <li>{homedata.componenta.text[0].content}</li>
	                           <li>{homedata.componenta.text[1].content}</li>
                             <li>{homedata.componenta.text[2].content}</li>
                             <li>{homedata.componenta.text[3].content}</li>
                             <li>{homedata.componenta.text[4].content}</li>
                             <li>{homedata.componenta.text[5].content}</li>
                             <li>{homedata.componenta.text[6].content}</li>
                             <li>{homedata.componenta.text[7].content}</li>                                                                                                                                                                                                                                                                </ul>
                    </QueueAnim>
                    <TweenOne className="home-containa-img" animation={{y:"10",type:"to" ,duration:500, repeat:-1, yoyo:true}}>
                     <img src={jiantou} alt="img" />
                    </TweenOne>

   	          </OverPack>


   	   	) 







   	         
   }

}