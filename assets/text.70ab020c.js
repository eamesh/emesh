import{p as C,F as i,d as T,H as $,I as u,eo as B,D as c,T as z,V as R,m as l}from"./index.78c09cee.js";import{u as S}from"./use-compitable.3d828e2e.js";var V=C("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[i("strong",`
 font-weight: var(--n-font-weight-strong);
 `),i("italic",{fontStyle:"italic"}),i("underline",{textDecoration:"underline"}),i("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]);const D=Object.assign(Object.assign({},u.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}});var w=T({name:"Text",props:D,setup(e){const{mergedClsPrefixRef:s,inlineThemeDisabled:n}=$(e),o=u("Typography","-text",V,B,e,s),r=c(()=>{const{depth:a,type:d}=e,h=d==="default"?a===void 0?"textColor":`textColor${a}Depth`:z("textColor",d),{common:{fontWeightStrong:m,fontFamilyMono:f,cubicBezierEaseInOut:g},self:{codeTextColor:x,codeBorderRadius:b,codeColor:v,codeBorder:y,[h]:p}}=o.value;return{"--n-bezier":g,"--n-text-color":p,"--n-font-weight-strong":m,"--n-font-famliy-mono":f,"--n-code-border-radius":b,"--n-code-text-color":x,"--n-code-color":v,"--n-code-border":y}}),t=n?R("text",c(()=>`${e.type[0]}${e.depth||""}`),r,e):void 0;return{mergedClsPrefix:s,compitableTag:S(e,["as","tag"]),cssVars:n?void 0:r,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e,s,n;const{mergedClsPrefix:o}=this;(e=this.onRender)===null||e===void 0||e.call(this);const r=[`${o}-text`,this.themeClass,{[`${o}-text--code`]:this.code,[`${o}-text--delete`]:this.delete,[`${o}-text--strong`]:this.strong,[`${o}-text--italic`]:this.italic,[`${o}-text--underline`]:this.underline}],t=(n=(s=this.$slots).default)===null||n===void 0?void 0:n.call(s);return this.code?l("code",{class:r,style:this.cssVars},this.delete?l("del",null,t):t):this.delete?l("del",{class:r,style:this.cssVars},t):l(this.compitableTag||"span",{class:r,style:this.cssVars},t)}});export{w as N};
