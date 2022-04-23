import{p as h,d as l,I as a,H as m,eo as u,D as _,V as p,m as v,o as f,ap as g,f as i,w as b,k as x,b4 as C,aq as y}from"./index.78c09cee.js";import{N as T}from"./text.70ab020c.js";var R=h("hr",`
 margin: 12px 0;
 transition: border-color .3s var(--n-bezier);
 border-left: none;
 border-right: none;
 border-bottom: none;
 border-top: 1px solid var(--n-color);
`),V=l({name:"Hr",props:Object.assign({},a.props),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=m(e),o=a("Typography","-hr",R,u,e,t),r=_(()=>{const{common:{cubicBezierEaseInOut:d},self:{hrColor:c}}=o.value;return{"--n-bezier":d,"--n-color":c}}),s=n?p("hr",void 0,r,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:r,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),v("hr",{class:[`${this.mergedClsPrefix}-hr`,this.themeClass],style:this.cssVars})}});const D={class:"title-divider"},B=l({props:{title:null},setup(e){return(t,n)=>{const o=T,r=V;return f(),g("div",D,[i(o,{class:"text-title"},{default:b(()=>[x(C(e.title),1)]),_:1}),i(r,{class:"title-divider__hr"}),y(t.$slots,"default")])}}});var z=B;export{z as T};
