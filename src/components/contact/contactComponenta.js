//图片展示页面
import React from "react"
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import "./contactComponenta.css"
import contactdata from  "./../../data/contactdata.json"
import bg1 from "./../../images/contactbg1.jpg"
import bg2 from "./../../images/contactbg2.jpg"
import bg3 from "./../../images/contactbg3.jpg"
const BgElement = Element.BgElement;
 export default class Componenta extends React.Component {
  render(){
    return (
      <BannerAnim prefixCls="banner-user" autoPlay>
        <Element 
          prefixCls="banner-user-elem"
          key="0"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
             backgroundImage:`url(${bg1})`,
             backgroundSize:"cover",
             backgroundRepeat:"no-repeat",

            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            { contactdata[1].title}

          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
           { contactdata[1].text}
          </TweenOne>
        </Element>
               <Element 
          prefixCls="banner-user-elem"
          key="1"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
               backgroundImage:`url(${bg2})`,
             backgroundSize:"cover",
             backgroundRepeat:"no-repeat",
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
             { contactdata[2].title}
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
           { contactdata[2].text}
          </TweenOne>
        </Element>
        <Element 
          prefixCls="banner-user-elem"
          key="2" 
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage:`url(${bg3})`,
             backgroundSize:"cover",
             backgroundRepeat:"no-repeat",
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            { contactdata[3].title}
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
          { contactdata[3].text}
          </TweenOne>
        </Element>
      </BannerAnim>);
  }
}
