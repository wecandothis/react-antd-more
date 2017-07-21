import React,{Component} from "react"
import Componenta from "./../components/home/homeComponenta"
import Componentb from "./../components/home/homeComponentb"
import Componentc from "./../components/home/homeComponentc"
import Componentd from "./../components/home/homeComponentd"
import Componente from "./../components/home/homeComponente"
export default class Home extends Component{
  render(){
    let componenta=0,componentb=0,componentc=0,componentd=0,componente=0;
  	const currentheight=document.documentElement.clientHeight;
    const currentwidth=document.documentElement.clientWidth;
     if(currentwidth>760){
      componenta=currentheight;
      componentb=currentheight/2;
      componentc=currentheight/2;
      componentd=currentheight/2;
      componente=currentheight

     }else{
      componenta=currentheight;
      componentb=currentheight/4;
      componentc=currentheight/4;
      componentd=currentheight/4;
      componente=currentheight/2
     }
     console.log(componenta)
     console.log(componentb)
     console.log(componentc)
     console.log(componentd)
     console.log(componente)
    return (<div>
               <Componenta currentheight={componenta} />
               <Componentb currentheight={componentb}/>
               <Componentc currentheight={componentc} />
               <Componentd currentheight={componentd} />
               <Componente currentheight={componente} />
    	   </div>
    	
           
    	)


  }


}