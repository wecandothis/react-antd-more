import React,{Component}  from "react"
import "./issueComponenta.css"
import issuedata from "./../../data/issuedata.json"
import jiantoutop from "./../../images/jiantoutop.png"
import jiantoubuttom from "./../../images/jiantoubuttom.png"

export default class Componenta extends Component{
   constructor(props){
   	super(props);
   	let starta={};
   	for(let i=1;i<=Object.keys(issuedata).length;i++){
         starta[i]=false;
   	}  
 	this.state=starta
 	
  	
 
}
changestate(ind){

   this.setState({[ind]:!this.state[ind]})
   console.log(this.state)

}
   render(){
  console.log(this.state)
    const issuedataShow=Object.keys(issuedata).map(item=>(
  <Single index={item}   changestate={this.changestate.bind(this)}>
    
           <div className="issue-containa-li"  style={{height:this.state[item]?"auto":30}}>
		          <h2>{item}:{issuedata[item].question}</h2>
		          <span value={item}><img src={this.state[item]?jiantoutop:jiantoubuttom} alt=" " /></span>
		          <h4>{issuedata[item].anwser}</h4>
           </div>
          


  </Single>
          	
   ))
     return (<div className="issue-containa-div">
        <ul className="issue-containa-ul">
           {issuedataShow}
        </ul>

     	</div>)

   }





}
class Single extends Component{

	chilckchange(e){
      e.preventDefault();
     this.props.changestate(this.props.index)

	}
	render(){

		return <li onClick={this.chilckchange.bind(this)}>
         {this.props.children}
		</li>
	}
}