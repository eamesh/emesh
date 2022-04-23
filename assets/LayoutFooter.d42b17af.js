import{p as b}from"./interface.08cd48a1.js";import{p as f,F as l,d as m,H as v,I as d,D as a,V as h,m as p}from"./index.78c09cee.js";import{l as C}from"./light.2fd34146.js";var x=f("layout-footer",`
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,[l("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `),l("bordered",`
 border-top: solid 1px var(--n-border-color);
 `)]);const g=Object.assign(Object.assign({},d.props),{inverted:Boolean,position:b,bordered:Boolean});var R=m({name:"LayoutFooter",props:g,setup(o){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=v(o),c=d("Layout","-layout-footer",x,C,o,r),i=a(()=>{const{common:{cubicBezierEaseInOut:u},self:s}=c.value,e={"--n-bezier":u};return o.inverted?(e["--n-color"]=s.footerColorInverted,e["--n-text-color"]=s.textColorInverted,e["--n-border-color"]=s.footerBorderColorInverted):(e["--n-color"]=s.footerColor,e["--n-text-color"]=s.textColor,e["--n-border-color"]=s.footerBorderColor),e}),t=n?h("layout-footer",a(()=>o.inverted?"a":"b"),i,o):void 0;return{mergedClsPrefix:r,cssVars:n?void 0:i,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var o;const{mergedClsPrefix:r}=this;return(o=this.onRender)===null||o===void 0||o.call(this),p("div",{class:[`${r}-layout-footer`,this.themeClass,this.position&&`${r}-layout-footer--${this.position}-positioned`,this.bordered&&`${r}-layout-footer--bordered`],style:this.cssVars},this.$slots)}});export{R as _};
