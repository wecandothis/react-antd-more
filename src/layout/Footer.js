/*
  1.布局组件（尾部），因其内容单一不变，不需要生命周期、props、state,使用无状态组件.
  2.本组件提供与本网页内容的基本信息与提供外部网页的链接。
*/
import React from "react"
import "./Footer.css"
import data from "./../data/layoutdata.json"

const Footer=()=>{
 const linkData=data.footer.linkData
  
 return (
           <div className="Footer">
              <ul>
                 <li>
                      <h2>相关链接</h2>
                       <h3><a href={linkData[0].href} target="_blank">{linkData[0].name}</a></h3>
                       <h3><a href={linkData[1].href}target="_blank">{linkData[1].name}</a></h3>
                       <h3><a href={linkData[2].href} target="_blank">{linkData[2].name}</a></h3>
             

                 </li>
                 <li>
                     <h2>相关链接</h2>
                       <h3><a href={linkData[0].href} target="_blank">{linkData[0].name}</a></h3>
                       <h3><a href={linkData[1].href}target="_blank">{linkData[1].name}</a></h3>
                       <h3><a href={linkData[2].href} target="_blank">{linkData[2].name}</a></h3>
             


                 </li>
                  <li>
                     <h2>相关链接</h2>
                       <h3><a href={linkData[0].href} target="_blank">{linkData[0].name}</a></h3>
                       <h3><a href={linkData[1].href}target="_blank">{linkData[1].name}</a></h3>
                       <h3><a href={linkData[2].href} target="_blank">{linkData[2].name}</a></h3>
             


                 </li>


              </ul>
            
             
             <h3 className="footer-contain-bottom"> Copyright © 2017 The Project by feng.</h3>


           </div>


  )


}

	export default Footer