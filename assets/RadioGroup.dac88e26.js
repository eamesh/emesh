import{H,B as ne,K as G,r as _,C as ae,x as U,L as j,a9 as ie,a1 as F,p as B,s as u,q as R,F as g,G as P,d as N,I as V,ef as O,D as $,T as D,S as K,V as M,m as y,W as de,R as se,ax as le}from"./index.78c09cee.js";import{u as L}from"./use-merged-state.c2667ee5.js";import{g as ue}from"./Space.df1d9265.js";const ce={name:String,value:{type:[String,Number],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,validator:()=>(ie("radio","`checked-value` is deprecated, please use `checked` instead."),!0),default:void 0}},W=ne("n-radio-group");function A(e){const o=G(e,{mergedSize(n){const{size:s}=e;if(s!==void 0)return s;if(r){const{mergedSizeRef:{value:b}}=r;if(b!==void 0)return b}return n?n.mergedSize.value:"medium"},mergedDisabled(n){return!!(e.disabled||r!=null&&r.disabledRef.value||n!=null&&n.disabled.value)}}),{mergedSizeRef:t,mergedDisabledRef:a}=o,d=_(null),v=_(null),r=ae(W,null),c=_(e.defaultChecked),i=U(e,"checked"),p=L(i,c),m=j(()=>r?r.valueRef.value===e.value:p.value),C=j(()=>{const{name:n}=e;if(n!==void 0)return n;if(r)return r.nameRef.value}),f=_(!1);function w(){if(r){const{doUpdateValue:n}=r,{value:s}=e;F(n,s)}else{const{onUpdateChecked:n,"onUpdate:checked":s}=e,{nTriggerFormInput:b,nTriggerFormChange:l}=o;n&&F(n,!0),s&&F(s,!0),b(),l(),c.value=!0}}function x(){a.value||m.value||w()}function k(){x()}function z(){f.value=!1}function S(){f.value=!0}return{mergedClsPrefix:r?r.mergedClsPrefixRef:H(e).mergedClsPrefixRef,inputRef:d,labelRef:v,mergedName:C,mergedDisabled:a,uncontrolledChecked:c,renderSafeChecked:m,focus:f,mergedSize:t,handleRadioInputChange:k,handleRadioInputBlur:z,handleRadioInputFocus:S}}A.props=ce;var be=B("radio",`
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`,[u("dot-wrapper",`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),B("radio-input",`
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 cursor: pointer;
 `),u("dot",`
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[R("&::before",`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),g("checked",{boxShadow:"var(--n-box-shadow-active)"},[R("&::before",`
 opacity: 1;
 transform: scale(1);
 `)])]),u("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),P("disabled",`
 cursor: pointer;
 `,[R("&:hover",[u("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),g("focus",[R("&:not(:active)",[u("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),g("disabled",`
 cursor: not-allowed;
 `,[u("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[R("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),g("checked",`
 opacity: 1;
 `)]),u("label",{color:"var(--n-text-color-disabled)"}),B("radio-input",`
 cursor: not-allowed;
 `)])]),xe=N({name:"Radio",props:Object.assign(Object.assign({},V.props),A.props),setup(e){const o=A(e),t=V("Radio","-radio",be,O,e,o.mergedClsPrefix),a=$(()=>{const{mergedSize:{value:p}}=o,{common:{cubicBezierEaseInOut:m},self:{boxShadow:C,boxShadowActive:f,boxShadowDisabled:w,boxShadowFocus:x,boxShadowHover:k,color:z,colorDisabled:S,textColor:n,textColorDisabled:s,dotColorActive:b,dotColorDisabled:l,labelPadding:h,labelLineHeight:I,[D("fontSize",p)]:T,[D("radioSize",p)]:E}}=t.value;return{"--n-bezier":m,"--n-label-line-height":I,"--n-box-shadow":C,"--n-box-shadow-active":f,"--n-box-shadow-disabled":w,"--n-box-shadow-focus":x,"--n-box-shadow-hover":k,"--n-color":z,"--n-color-disabled":S,"--n-dot-color-active":b,"--n-dot-color-disabled":l,"--n-font-size":T,"--n-radio-size":E,"--n-text-color":n,"--n-text-color-disabled":s,"--n-label-padding":h}}),{inlineThemeDisabled:d,mergedClsPrefixRef:v,mergedRtlRef:r}=H(e),c=K("Radio",r,v),i=d?M("radio",$(()=>o.mergedSize.value[0]),a,e):void 0;return Object.assign(o,{rtlEnabled:c,cssVars:d?void 0:a,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender})},render(){const{$slots:e,mergedClsPrefix:o,onRender:t}=this;return t==null||t(),y("label",{class:[`${o}-radio`,this.themeClass,{[`${o}-radio--rtl`]:this.rtlEnabled,[`${o}-radio--disabled`]:this.mergedDisabled,[`${o}-radio--checked`]:this.renderSafeChecked,[`${o}-radio--focus`]:this.focus}],style:this.cssVars},y("input",{ref:"inputRef",type:"radio",class:`${o}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),y("div",{class:`${o}-radio__dot-wrapper`},"\xA0",y("div",{class:[`${o}-radio__dot`,this.renderSafeChecked&&`${o}-radio__dot--checked`]})),de(e.default,a=>a?y("div",{ref:"labelRef",class:`${o}-radio__label`},a):null))}}),he=B("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[u("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[g("checked",{backgroundColor:"var(--n-button-border-color-active)"}),g("disabled",{opacity:"var(--n-opacity-disabled)"})]),g("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[B("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),u("splitor",{height:"var(--n-height)"})]),B("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[B("radio-input",`
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),u("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),R("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[u("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),R("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[u("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),P("disabled",`
 cursor: pointer;
 `,[R("&:hover",[u("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),P("checked",{color:"var(--n-button-text-color-hover)"})]),g("focus",[R("&:not(:active)",[u("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),g("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),g("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function fe(e,o,t){var a;const d=[];let v=!1;for(let r=0;r<e.length;++r){const c=e[r],i=(a=c.type)===null||a===void 0?void 0:a.name;i==="RadioButton"&&(v=!0);const p=c.props;if(i!=="RadioButton"){d.push(c);continue}if(r===0)d.push(c);else{const m=d[d.length-1].props,C=o===m.value,f=m.disabled,w=o===p.value,x=p.disabled,k=(C?2:0)+(f?0:1),z=(w?2:0)+(x?0:1),S={[`${t}-radio-group__splitor--disabled`]:f,[`${t}-radio-group__splitor--checked`]:C},n={[`${t}-radio-group__splitor--disabled`]:x,[`${t}-radio-group__splitor--checked`]:w},s=k<z?n:S;d.push(y("div",{class:[`${t}-radio-group__splitor`,s]}),c)}}return{children:d,isButtonGroup:v}}const ve=Object.assign(Object.assign({},V.props),{name:String,value:[String,Number],defaultValue:{type:[String,Number],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]});var Re=N({name:"RadioGroup",props:ve,setup(e){const o=_(null),{mergedSizeRef:t,mergedDisabledRef:a,nTriggerFormChange:d,nTriggerFormInput:v,nTriggerFormBlur:r,nTriggerFormFocus:c}=G(e),{mergedClsPrefixRef:i,inlineThemeDisabled:p,mergedRtlRef:m}=H(e),C=V("Radio","-radio-group",he,O,e,i),f=_(e.defaultValue),w=U(e,"value"),x=L(w,f);function k(l){const{onUpdateValue:h,"onUpdate:value":I}=e;h&&F(h,l),I&&F(I,l),f.value=l,d(),v()}function z(l){const{value:h}=o;!h||h.contains(l.relatedTarget)||c()}function S(l){const{value:h}=o;!h||h.contains(l.relatedTarget)||r()}se(W,{mergedClsPrefixRef:i,nameRef:U(e,"name"),valueRef:x,disabledRef:a,mergedSizeRef:t,doUpdateValue:k});const n=K("Radio",m,i),s=$(()=>{const{value:l}=t,{common:{cubicBezierEaseInOut:h},self:{buttonBorderColor:I,buttonBorderColorActive:T,buttonBorderRadius:E,buttonBoxShadow:q,buttonBoxShadowFocus:Y,buttonBoxShadowHover:J,buttonColorActive:Q,buttonTextColor:X,buttonTextColorActive:Z,buttonTextColorHover:ee,opacityDisabled:oe,[D("buttonHeight",l)]:re,[D("fontSize",l)]:te}}=C.value;return{"--n-font-size":te,"--n-bezier":h,"--n-button-border-color":I,"--n-button-border-color-active":T,"--n-button-border-radius":E,"--n-button-box-shadow":q,"--n-button-box-shadow-focus":Y,"--n-button-box-shadow-hover":J,"--n-button-color-active":Q,"--n-button-text-color":X,"--n-button-text-color-hover":ee,"--n-button-text-color-active":Z,"--n-height":re,"--n-opacity-disabled":oe}}),b=p?M("radio-group",$(()=>t.value[0]),s,e):void 0;return{selfElRef:o,rtlEnabled:n,mergedClsPrefix:i,mergedValue:x,handleFocusout:S,handleFocusin:z,cssVars:p?void 0:s,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){var e;const{mergedValue:o,mergedClsPrefix:t,handleFocusin:a,handleFocusout:d}=this,{children:v,isButtonGroup:r}=fe(le(ue(this)),o,t);return(e=this.onRender)===null||e===void 0||e.call(this),y("div",{onFocusin:a,onFocusout:d,ref:"selfElRef",class:[`${t}-radio-group`,this.rtlEnabled&&`${t}-radio-group--rtl`,this.themeClass,r&&`${t}-radio-group--button-group`],style:this.cssVars},v)}});export{Re as N,xe as a,A as s};
