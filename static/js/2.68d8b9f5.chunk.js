webpackJsonp([2],{378:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(1),r=e.n(a),i=e(383),o=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null))};t.default=o},383:function(n,t,e){"use strict";function a(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function r(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?n:t}function i(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}var o=e(1),A=e.n(o),l=e(391),c=(e.n(l),e(38)),u=e.n(c),p=e(18),s=e.n(p),m=e(19),d=e(163),C=e.n(d),B=e(164),b=e.n(B),g=e(107),x=e.n(g),h=e(108),f=e.n(h),y=e(109),w=e.n(y),v=e(165),E=e.n(v),k=e(166),j=e.n(k),D=e(167),O=e.n(D),_=e(168),W=e.n(_),P=e(169),T=e.n(P),q=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),N=function(n){function t(){var n,e,i,o;a(this,t);for(var l=arguments.length,c=Array(l),u=0;u<l;u++)c[u]=arguments[u];return e=i=r(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(c))),i.getanimationdata=function(n){return{y:"+=30",opacity:0,type:"from",delay:1e3*Math.random()+300}},i.getChildtorender=function(n,t){return A.a.createElement("li",{key:n.index},A.a.createElement(m.c,{to:"/about/"+n.index},A.a.createElement("div",null,A.a.createElement("span",null,A.a.createElement("img",{className:"about-containe-img",src:n.img,alt:" "})),A.a.createElement(s.a,{component:"h3"},T.a[n.index].title))))},o=e,r(i,o)}return i(t,n),q(t,[{key:"render",value:function(){var n=this,t=[{img:C.a,index:"1"},{img:b.a,index:"2"},{img:x.a,index:"3"},{img:f.a,index:"4"},{img:w.a,index:"5"},{img:E.a,index:"6"},{img:j.a,index:"7"},{img:O.a,index:"8"},{img:W.a,index:"9"}],e=t.map(this.getChildtorender);return A.a.createElement(u.a,{className:"about-containa",key:"about-containa"},A.a.createElement(s.a,{className:"about-containa-text",key:"about-containa-text"},A.a.createElement("h3",null,"\u5149\u602a\u9646\u79bb\u7684\u65f6\u5149\u4e2d\u95ea\u5149")),A.a.createElement(p.TweenOneGroup,{className:"about-containa-ul",key:"about-containa-ul",component:"ul",enter:function(t){return n.getanimationdata(t)},leave:{y:"+=30",opacity:0,ease:"easeOutQuad"}},e))}}]),t}(o.Component);t.a=N},387:function(n,t,e){t=n.exports=e(376)(!0),t.push([n.i,".about-containa{width:100%;padding-top:50px}.about-containa-text h3{text-align:center}.about-containa-ul{margin-top:50px;position:relative;width:100%;text-align:center}.about-containa-ul li{display:inline-block;position:relative;width:30%}.about-containa-ul li span img{width:80%;height:200px;border-radius:15px;margin-top:10px}.about-containa-ul li span img:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05)}@media (max-width:760px){.about-containa{width:100%;padding-top:20px}.about-containa-text h3{text-align:center}.about-containa-ul{margin-top:20px;position:relative;width:100%;text-align:center}.about-containa-ul li{display:inline-block;position:relative;width:30%}.about-containa-ul li span img{width:80%;height:100px;border-radius:10px;margin-top:10px}}","",{version:3,sources:["F:/git/app/react-antd-more/src/components/about/aboutComponenta.css"],names:[],mappings:"AAAA,gBACC,WAAY,AAET,gBAAkB,CACrB,AAED,wBACC,iBAAmB,CAEnB,AACD,mBACC,gBAAiB,AACjB,kBAAmB,AACnB,WAAY,AACZ,iBAAmB,CACnB,AACD,sBACC,qBAAsB,AACtB,kBAAmB,AACnB,SAAW,CAGX,AACD,+BACC,UAAW,AACX,aAAc,AACd,mBAAoB,AACpB,eAAiB,CACjB,AACD,qCACC,8BAA8B,AAC1B,0BAA0B,AACtB,qBAAsB,CAC9B,AAKD,yBACE,gBACD,WAAY,AAET,gBAAkB,CAErB,AAED,wBACC,iBAAmB,CAEnB,AACD,mBACC,gBAAiB,AACjB,kBAAmB,AACnB,WAAY,AACZ,iBAAmB,CACnB,AACD,sBACC,qBAAsB,AACtB,kBAAmB,AACnB,SAAW,CAGX,AACD,+BACC,UAAW,AACX,aAAc,AACd,mBAAoB,AACpB,eAAiB,CACjB,CAIA",file:"aboutComponenta.css",sourcesContent:[".about-containa{\r\n\twidth: 100%;\r\n    \r\n    padding-top: 50px;\r\n}\r\n\r\n.about-containa-text h3{\r\n\ttext-align: center;\r\n\r\n}\r\n.about-containa-ul{\r\n\tmargin-top: 50px;\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n}\r\n.about-containa-ul li{\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\twidth: 30%;\r\n\r\n\r\n}\r\n.about-containa-ul li span img{\r\n\twidth: 80%;\r\n\theight: 200px;\r\n\tborder-radius: 15px;\r\n\tmargin-top: 10px;\r\n}\r\n.about-containa-ul li span img:hover{\r\n\t-webkit-transform:scale(1.05);\r\n\t    -ms-transform:scale(1.05);\r\n\t        transform:scale(1.05);\r\n}\r\n\r\n/*\r\n  \u5c4f\u5e55\u5206\u8fa8\u7387\u5728760px\u4e0b\u7684css\u6837\u5f0f\r\n*/\r\n@media (max-width:760px){\r\n  .about-containa{\r\n\twidth: 100%;\r\n    \r\n    padding-top: 20px;\r\n\r\n}\r\n\r\n.about-containa-text h3{\r\n\ttext-align: center;\r\n\r\n}\r\n.about-containa-ul{\r\n\tmargin-top: 20px;\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n}\r\n.about-containa-ul li{\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\twidth: 30%;\r\n\r\n\r\n}\r\n.about-containa-ul li span img{\r\n\twidth: 80%;\r\n\theight: 100px;\r\n\tborder-radius: 10px;\r\n\tmargin-top: 10px;\r\n}\r\n\r\n\r\n\r\n}\r\n"],sourceRoot:""}])},391:function(n,t,e){var a=e(387);"string"===typeof a&&(a=[[n.i,a,""]]);var r={};r.transform=void 0;e(377)(a,r);a.locals&&(n.exports=a.locals)}});
//# sourceMappingURL=2.68d8b9f5.chunk.js.map