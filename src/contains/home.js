import React,{Component} from "react"
import Componenta from "./../components/home/homeComponenta"
import Componentb from "./../components/home/homeComponentb"
import Componentc from "./../components/home/homeComponentc"
import Componentd from "./../components/home/homeComponentd"
import Componente from "./../components/home/homeComponente"
export default class Home extends Component{
  render(){
  	const currentheight=document.documentElement.clientHeight
    return (<div>
               <Componenta currentheight={currentheight} />
               <Componentb currentheight={currentheight/2}/>
               <Componentc currentheight={currentheight/2} />
               <Componentd currentheight={currentheight/2} />
               <Componente currentheight={currentheight} />
    	   </div>
    	
           
    	)


  }


}