import React,{Component} from "react"
import "./issueComponenta.css"
import issuedata from "./../../data/issuedata.json"



export default class Componenta extends Component{


	render(){     
          const issuedataShow=Object.keys(issuedata).map(item=>(<li>
          	<h2>{issuedata[item].question}</h2>
          	<h2>{issuedata[item].anwser}</h2>


          	</li>))
	 
     return (<div>
        <ul>
           {issuedataShow}
        </ul>

     	</div>)
	}
}