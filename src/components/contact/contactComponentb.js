//相关内容区域


import React,{Component} from "react"
import "./contactComponentb.css"
import contactdata from  "./../../data/contactdata.json"
export default class Componentb extends Component{
	render(){
       return <h2>{contactdata.data}</h2>

	}
}
