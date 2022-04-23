import{p as _,l as N}from"./interface.08cd48a1.js";import{p as l,F as u,d as T,I as S,H as j,D as f,V as O,m as s,s as r,q as m,y as V,C as H,r as B,a3 as R,x as I,R as W,X as U,a1 as C}from"./index.78c09cee.js";import{l as L}from"./light.2fd34146.js";import{C as D}from"./ChevronRight.f56fbeda.js";import{l as q}from"./Layout.e12fb327.js";import{u as X}from"./use-merged-state.c2667ee5.js";var K=l("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[u("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),u("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]);const G={position:_,inverted:Boolean,bordered:{type:Boolean,default:!1}};var se=T({name:"LayoutHeader",props:Object.assign(Object.assign({},S.props),G),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:i}=j(e),h=S("Layout","-layout-header",K,L,e,t),y=f(()=>{const{common:{cubicBezierEaseInOut:z},self:b}=h.value,a={"--n-bezier":z};return e.inverted?(a["--n-color"]=b.headerColorInverted,a["--n-text-color"]=b.textColorInverted,a["--n-border-color"]=b.headerBorderColorInverted):(a["--n-color"]=b.headerColor,a["--n-text-color"]=b.textColor,a["--n-border-color"]=b.headerBorderColor),a}),g=i?O("layout-header",f(()=>e.inverted?"a":"b"),y,e):void 0;return{mergedClsPrefix:t,cssVars:i?void 0:y,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),s("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),J=l("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[u("bordered",[r("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),r("left-placement",[u("bordered",[r("border",`
 right: 0;
 `)])]),u("right-placement",`
 justify-content: flex-start;
 `,[u("bordered",[r("border",`
 left: 0;
 `)]),u("collapsed",[l("layout-toggle-button",[l("base-icon",`
 transform: rotate(180deg);
 `)]),l("layout-toggle-bar",[m("&:hover",[r("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),r("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),l("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[l("base-icon",`
 transform: rotate(0);
 `)]),l("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[m("&:hover",[r("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),r("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),u("collapsed",[l("layout-toggle-bar",[m("&:hover",[r("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),r("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),l("layout-toggle-button",[l("base-icon",`
 transform: rotate(0);
 `)])]),l("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[l("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),l("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[r("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),r("bottom",`
 position: absolute;
 top: 34px;
 `),m("&:hover",[r("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),r("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),r("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),m("&:hover",[r("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),r("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),l("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),u("show-content",[l("layout-sider-scroll-container",{opacity:1})]),u("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Q=T({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},s(V,{clsPrefix:e},{default:()=>s(D,null)}))}}),Z=T({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return s("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},s("div",{class:`${e}-layout-toggle-bar__top`}),s("div",{class:`${e}-layout-toggle-bar__bottom`}))}});const ee={position:_,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function};var ie=T({name:"LayoutSider",props:Object.assign(Object.assign({},S.props),ee),setup(e){const t=H(q),i=B(null),h=B(null),y=f(()=>R(a.value?e.collapsedWidth:e.width)),g=f(()=>e.collapseMode!=="transform"?{}:{minWidth:R(e.width)}),z=f(()=>t?t.siderPlacement:"left"),b=B(e.defaultCollapsed),a=X(I(e,"collapsed"),b);function E(d,o){if(e.nativeScrollbar){const{value:n}=i;n&&(o===void 0?n.scrollTo(d):n.scrollTo(d,o))}else{const{value:n}=h;n&&n.scrollTo(d,o)}}function F(){const{"onUpdate:collapsed":d,onUpdateCollapsed:o,onExpand:n,onCollapse:x}=e,{value:v}=a;o&&C(o,!v),d&&C(d,!v),b.value=!v,v?n&&C(n):x&&C(x)}W(N,{collapsedRef:a,collapseModeRef:I(e,"collapseMode")});const{mergedClsPrefixRef:k,inlineThemeDisabled:w}=j(e),P=S("Layout","-layout-sider",J,L,e,k);function M(d){var o,n;d.propertyName==="max-width"&&(a.value?(o=e.onAfterLeave)===null||o===void 0||o.call(e):(n=e.onAfterEnter)===null||n===void 0||n.call(e))}const Y={scrollTo:E},$=f(()=>{const{common:{cubicBezierEaseInOut:d},self:o}=P.value,{siderToggleButtonColor:n,siderToggleButtonBorder:x,siderToggleBarColor:v,siderToggleBarColorHover:A}=o,c={"--n-bezier":d,"--n-toggle-button-color":n,"--n-toggle-button-border":x,"--n-toggle-bar-color":v,"--n-toggle-bar-color-hover":A};return e.inverted?(c["--n-color"]=o.siderColorInverted,c["--n-text-color"]=o.textColorInverted,c["--n-border-color"]=o.siderBorderColorInverted,c["--n-toggle-button-icon-color"]=o.siderToggleButtonIconColorInverted,c.__invertScrollbar=o.__invertScrollbar):(c["--n-color"]=o.siderColor,c["--n-text-color"]=o.textColor,c["--n-border-color"]=o.siderBorderColor,c["--n-toggle-button-icon-color"]=o.siderToggleButtonIconColor),c}),p=w?O("layout-sider",f(()=>e.inverted?"a":"b"),$,e):void 0;return Object.assign({scrollableElRef:i,scrollbarInstRef:h,mergedClsPrefix:k,mergedTheme:P,styleMaxWidth:y,mergedCollapsed:a,scrollContainerStyle:g,siderPlacement:z,handleTransitionend:M,handleTriggerClick:F,inlineThemeDisabled:w,cssVars:$,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender},Y)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:i,showTrigger:h}=this;return(e=this.onRender)===null||e===void 0||e.call(this),s("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,i&&`${t}-layout-sider--collapsed`,(!i||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:R(this.width)}]},this.nativeScrollbar?s("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.onScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):s(U,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),h?h==="bar"?s(Z,{clsPrefix:t,style:i?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):s(Q,{clsPrefix:t,style:i?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?s("div",{class:`${t}-layout-sider__border`}):null)}});export{se as N,ie as a};
