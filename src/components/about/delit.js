import React,{Component} from "react"
import li1 from "./../../images/li1.jpg"
import li2 from "./../../images/li2.jpg"
import li3 from "./../../images/li3.jpg"
import li4 from "./../../images/li4.jpg"
import li5 from "./../../images/li5.jpg"
import li6 from "./../../images/li6.jpg"
import li7 from "./../../images/li7.jpg"
import li8 from "./../../images/li8.jpg"
import li9 from "./../../images/li9.jpg"

export default class Delit extends Component{
	render(){

		const dataArray=[
		{img:li1,index:1,content:"this is demo"},
		{img:li2,index:2,content:"this is demo"},
		{img:li3,index:3,content:"this is demo"},
		{img:li4,index:4,content:"this is demo"},
		{img:li5,index:5,content:"this is demo"},
		{img:li6,index:6,content:"this is demo"},
		{img:li7,index:7,content:"this is demo"},
		{img:li8,index:8,content:"this is demo"},
		{img:li9,index:9,content:"this is demo"}]
		const matchdata=this.props.match.params.id-1;
		return <div><img src={dataArray[matchdata].img} alt=" " /></div>
	}
}