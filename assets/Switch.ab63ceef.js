import{p as H,s as t,t as I,q as T,F as c,G as U,d as le,H as se,I as j,K as ce,r as W,x as de,D as B,T as h,aw as N,aB as o,V as ue,dr as D,m as a,W as f,N as he,A as fe,a1 as K}from"./index.78c09cee.js";import{s as be}from"./light.dd2251a5.js";import{u as ve}from"./use-merged-state.c2667ee5.js";var ge=H("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),H("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[I({originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),T("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),c("round",[t("rail",{borderRadius:"calc(var(--n-rail-height) / 2)"},[t("button",{borderRadius:"calc(var(--n-button-height) / 2)"})])]),U("disabled",[U("icon",[c("pressed",[t("rail",[t("button",{maxWidth:"var(--n-button-width-pressed)"})])]),t("rail",[T("&:active",[t("button",{maxWidth:"var(--n-button-width-pressed)"})])]),c("active",[c("pressed",[t("rail",[t("button",{left:"calc(100% - var(--n-offset) - var(--n-button-width-pressed))"})])]),t("rail",[T("&:active",[t("button",{left:"calc(100% - var(--n-offset) - var(--n-button-width-pressed))"})])])])])]),c("active",[t("rail",[t("button",{left:"calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)"})])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[I()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-width);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),c("active",[t("rail","background-color: var(--n-rail-color-active);")]),c("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)]),c("loading",[t("rail",`
 pointer-events: none;
 `)])]);const we=Object.assign(Object.assign({},j.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,onChange:[Function,Array]});var ke=le({name:"Switch",props:we,setup(e){const{mergedClsPrefixRef:k,inlineThemeDisabled:g}=se(e),C=j("Switch","-switch",ge,be,e,k),r=ce(e),{mergedSizeRef:x,mergedDisabledRef:d}=r,w=W(e.defaultValue),S=de(e,"value"),u=ve(S,w),m=B(()=>u.value===e.checkedValue),b=W(!1),i=W(!1),l=B(()=>{const{railStyle:n}=e;if(!!n)return n({focused:i.value,checked:m.value})});function s(n){const{"onUpdate:value":R,onChange:V,onUpdateValue:_}=e,{nTriggerFormInput:z,nTriggerFormChange:$}=r;R&&K(R,n),_&&K(_,n),V&&K(V,n),w.value=n,z(),$()}function A(){const{nTriggerFormFocus:n}=r;n()}function M(){const{nTriggerFormBlur:n}=r;n()}function E(){e.loading||d.value||(u.value!==e.checkedValue?s(e.checkedValue):s(e.uncheckedValue))}function O(){i.value=!0,A()}function L(){i.value=!1,M(),b.value=!1}function X(n){e.loading||d.value||n.code==="Space"&&(u.value!==e.checkedValue?s(e.checkedValue):s(e.uncheckedValue),b.value=!1)}function Y(n){e.loading||d.value||n.code==="Space"&&(n.preventDefault(),b.value=!0)}const P=B(()=>{const{value:n}=x,{self:{opacityDisabled:R,railColor:V,railColorActive:_,buttonBoxShadow:z,buttonColor:$,boxShadowFocus:q,loadingColor:G,textColor:J,iconColor:Q,[h("buttonHeight",n)]:p,[h("buttonWidth",n)]:Z,[h("buttonWidthPressed",n)]:ee,[h("railHeight",n)]:y,[h("railWidth",n)]:F,[h("railBorderRadius",n)]:te,[h("buttonBorderRadius",n)]:ne},common:{cubicBezierEaseInOut:ie}}=C.value,ae=N((o(y)-o(p))/2),oe=N(Math.max(o(y),o(p))),re=o(y)>o(p)?F:N(o(F)+o(p)-o(y));return{"--n-bezier":ie,"--n-button-border-radius":ne,"--n-button-box-shadow":z,"--n-button-color":$,"--n-button-width":Z,"--n-button-width-pressed":ee,"--n-button-height":p,"--n-height":oe,"--n-offset":ae,"--n-opacity-disabled":R,"--n-rail-border-radius":te,"--n-rail-color":V,"--n-rail-color-active":_,"--n-rail-height":y,"--n-rail-width":F,"--n-width":re,"--n-box-shadow-focus":q,"--n-loading-color":G,"--n-text-color":J,"--n-icon-color":Q}}),v=g?ue("switch",B(()=>x.value[0]),P,e):void 0;return{handleClick:E,handleBlur:L,handleFocus:O,handleKeyup:X,handleKeydown:Y,mergedRailStyle:l,pressed:b,mergedClsPrefix:k,mergedValue:u,checked:m,mergedDisabled:d,cssVars:g?void 0:P,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:k,checked:g,mergedRailStyle:C,onRender:r,$slots:x}=this;r==null||r();const{checked:d,unchecked:w,icon:S,"checked-icon":u,"unchecked-icon":m}=x,b=!(D(S)&&D(u)&&D(m));return a("div",{role:"switch","aria-checked":g,class:[`${e}-switch`,this.themeClass,b&&`${e}-switch--icon`,g&&`${e}-switch--active`,k&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},a("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:C},f(d,i=>f(w,l=>i||l?a("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},a("div",{class:`${e}-switch__rail-placeholder`},a("div",{class:`${e}-switch__button-placeholder`}),i),a("div",{class:`${e}-switch__rail-placeholder`},a("div",{class:`${e}-switch__button-placeholder`}),l)):null)),a("div",{class:`${e}-switch__button`},f(S,i=>f(u,l=>f(m,s=>a(he,null,{default:()=>this.loading?a(fe,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(l||i)?a("div",{class:`${e}-switch__button-icon`,key:l?"checked-icon":"icon"},l||i):!this.checked&&(s||i)?a("div",{class:`${e}-switch__button-icon`,key:s?"unchecked-icon":"icon"},s||i):null})))),f(d,i=>i&&a("div",{key:"checked",class:`${e}-switch__checked`},i)),f(w,i=>i&&a("div",{key:"unchecked",class:`${e}-switch__unchecked`},i)))))}});export{ke as N};
