import{p as f,F as S,d as g,I as b,r as m,H as x,R as C,D as R,V as T,m as c,X as O,B as j}from"./index.78c09cee.js";import{p as z}from"./interface.08cd48a1.js";import{l as P}from"./light.2fd34146.js";var I=f("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[f("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),S("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]);const $={embedded:Boolean,position:z,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},w=j("n-layout");function B(d){return g({name:d?"LayoutContent":"Layout",props:Object.assign(Object.assign({},b.props),$),setup(e){const o=m(null),a=m(null),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=x(e),u=b("Layout","-layout",I,P,e,r);function y(n,t){if(e.nativeScrollbar){const{value:s}=o;s&&(t===void 0?s.scrollTo(n):s.scrollTo(n,t))}else{const{value:s}=a;s&&s.scrollTo(n,t)}}C(w,e);const v={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},p={scrollTo:y},h=R(()=>{const{common:{cubicBezierEaseInOut:n},self:t}=u.value;return{"--n-bezier":n,"--n-color":e.embedded?t.colorEmbedded:t.color,"--n-text-color":t.textColor}}),l=i?T("layout",void 0,h,e):void 0;return Object.assign({mergedClsPrefix:r,scrollableElRef:o,scrollbarInstRef:a,hasSiderStyle:v,mergedTheme:u,cssVars:i?void 0:h,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender},p)},render(){var e;const{mergedClsPrefix:o,hasSider:a}=this;(e=this.onRender)===null||e===void 0||e.call(this);const r=a?this.hasSiderStyle:void 0,i=[this.themeClass,d&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return c("div",{class:i,style:this.cssVars},this.nativeScrollbar?c("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,r],onScroll:this.onScroll},this.$slots):c(O,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,r]}),this.$slots))}})}var V=B(!1);export{V as _,B as c,w as l};
