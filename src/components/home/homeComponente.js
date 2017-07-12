import React,{Component} from "react"
import "./homeComponente.css"
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import li1 from "./../../images/li1.jpg"
import li2 from "./../../images/li2.jpg"
import li3 from "./../../images/li3.jpg"
import li4 from "./../../images/li9.jpg"
import li5 from "./../../images/li5.jpg"
import li6 from "./../../images/li6.jpg"
import li7 from "./../../images/li7.jpg"
import li8 from "./../../images/li8.jpg"

export default class Componente extends Component{
  getChildtorender=(item)=>{
  	return (<li key={item.index} > 
             <div>
                 <span><img className="home-containe-img" src={item.img} alt=" "/></span>
                 <p>{item.content}</p>
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
      { img: li1, content: '风华正茂',index:'1' },
      { img: li2, content: '风华正茂',index:'2' },
      { img: li3, content: '风华正茂',index:'3' },
      { img: li4, content: '风华正茂',index:'4' },
      { img: li5, content: '器宇轩昂',index:'5' },
      { img: li6, content: '器宇轩昂',index:'6' },
      { img: li7, content: '器宇轩昂',index:'7' },
      { img: li8, content: '器宇轩昂',index:'8' }


  	]
  	const childtorender=dataArray.map(this.getChildtorender);
  	return(<OverPack className="home-containe" style={{height:this.props.currentheight}}>
             
            <TweenOne className="home-containe-text"  animation={{ y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' }} key="h1" reverseDelay={300}  >
            <h2 id="threemao">HI</h2>
                <h1>那些花儿一样的人</h1>
                
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
            </OverPack>


  		)
  }




}
