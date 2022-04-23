import{D as f,C as T,a3 as W,r as L,d as U,m as g,q as V,a4 as be,p as y,s as D,F,x as j,H as ge,a5 as K,I as X,a6 as he,Q as ve,R as ke,a7 as pe,M as Re,T as x,V as ye,a8 as xe,a9 as Y}from"./index.78c09cee.js";import{f as O,a as we,S as Se}from"./index.c8e95861.js";import{g as Z}from"./get.05c76103.js";import{u as $e}from"./index.a288f029.js";function Pe(t){const e=T(O,null);return{mergedSize:f(()=>t.size!==void 0?t.size:(e==null?void 0:e.props.size)!==void 0?e.props.size:"medium")}}function ze(t){const e=T(O,null),n=f(()=>{if(a.value==="top")return;const{labelWidth:i}=t;if(i!==void 0&&i!=="auto")return W(i);if(i==="auto"||(e==null?void 0:e.props.labelWidth)==="auto"){const I=e==null?void 0:e.maxChildLabelWidthRef.value;return I!==void 0?W(I):void 0}if((e==null?void 0:e.props.labelWidth)!==void 0)return W(e.props.labelWidth)}),a=f(()=>{const{labelPlacement:i}=t;return i!==void 0?i:e!=null&&e.props.labelPlacement?e.props.labelPlacement:"top"}),s=f(()=>{const{labelAlign:i}=t;if(i)return i;if(e!=null&&e.props.labelAlign)return e.props.labelAlign}),o=f(()=>{var i;return[(i=t.labelProps)===null||i===void 0?void 0:i.style,t.labelStyle,{width:n.value}]}),r=f(()=>{const{showRequireMark:i}=t;return i!==void 0?i:e==null?void 0:e.props.showRequireMark}),u=f(()=>{const{requireMarkPlacement:i}=t;return i!==void 0?i:(e==null?void 0:e.props.requireMarkPlacement)||"right"}),m=L(!1),h=f(()=>{const{validationStatus:i}=t;if(i!==void 0)return i;if(m.value)return"error"}),d=f(()=>{const{showFeedback:i}=t;return i!==void 0?i:(e==null?void 0:e.props.showFeedback)!==void 0?e.props.showFeedback:!0}),R=f(()=>{const{showLabel:i}=t;return i!==void 0?i:(e==null?void 0:e.props.showLabel)!==void 0?e.props.showLabel:!0});return{validationErrored:m,mergedLabelStyle:o,mergedLabelPlacement:a,mergedLabelAlign:s,mergedShowRequireMark:r,mergedRequireMarkPlacement:u,mergedValidationStatus:h,mergedShowFeedback:d,mergedShowLabel:R}}function Ce(t){const e=T(O,null),n=f(()=>{const{rulePath:r}=t;if(r!==void 0)return r;const{path:u}=t;if(u!==void 0)return u}),a=f(()=>{const r=[],{rule:u}=t;if(u!==void 0&&(Array.isArray(u)?r.push(...u):r.push(u)),e){const{rules:m}=e.props,{value:h}=n;if(m!==void 0&&h!==void 0){const d=Z(m,h);d!==void 0&&(Array.isArray(d)?r.push(...d):r.push(d))}}return r}),s=f(()=>a.value.some(r=>r.required)),o=f(()=>s.value||t.required);return{mergedRules:a,mergedRequired:o}}var Ae=U({name:"FormItemFeedback",props:{clsPrefix:{type:String,required:!0},explains:Array,feedback:String},render(){var t;const{$slots:e,feedback:n,clsPrefix:a}=this;return e.default?e.default():n?g("div",{key:n,class:`${a}-form-item-feedback__line`},n):(t=this.explains)===null||t===void 0?void 0:t.map(s=>g("div",{key:s,class:`${a}-form-item-feedback__line`},s))}});const{cubicBezierEaseInOut:Q}=be;function _e({name:t="fade-down",fromOffset:e="-4px",enterDuration:n=".3s",leaveDuration:a=".3s",enterCubicBezier:s=Q,leaveCubicBezier:o=Q}={}){return[V(`&.${t}-transition-enter-from, &.${t}-transition-leave-to`,{opacity:0,transform:`translateY(${e})`}),V(`&.${t}-transition-enter-to, &.${t}-transition-leave-from`,{opacity:1,transform:"translateY(0)"}),V(`&.${t}-transition-leave-active`,{transition:`opacity ${a} ${o}, transform ${a} ${o}`}),V(`&.${t}-transition-enter-active`,{transition:`opacity ${n} ${s}, transform ${n} ${s}`})]}var Ie=y("form-item",{display:"grid",lineHeight:"var(--n-line-height)"},[y("form-item-label",`
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--n-label-text-align);
 font-size: var(--n-label-font-size);
 height: var(--n-label-height);
 padding: var(--n-label-padding);
 color: var(--n-label-text-color);
 transition: color .3s var(--n-bezier);
 box-sizing: border-box;
 `,[D("asterisk",`
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `),D("asterisk-placeholder",`
 visibility: hidden; 
 `)]),y("form-item-blank",{gridArea:"blank",minHeight:"var(--n-blank-height)"}),F("left-labelled",`
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 `,[y("form-item-label",`
 height: var(--n-blank-height);
 line-height: var(--n-blank-height);
 box-sizing: border-box;
 white-space: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `)]),F("top-labelled",`
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: var(--n-label-height) 1fr;
 grid-template-columns: minmax(0, 100%);
 `,[F("no-label",`
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `),y("form-item-label",{display:"flex",alignItems:"flex-end",justifyContent:"var(--n-label-text-align)"})]),y("form-item-blank",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `),y("form-item-feedback-wrapper",`
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `,[V("&:not(:empty)",`
 padding: var(--n-feedback-padding);
 `),y("form-item-feedback",{transition:"color .3s var(--n-bezier)",color:"var(--n-feedback-text-color)"},[F("warning",{color:"var(--n-feedback-text-color-warning)"}),F("error",{color:"var(--n-feedback-text-color-error)"}),_e({fromOffset:"-3px",enterDuration:".3s",leaveDuration:".2s"})])])]),G=globalThis&&globalThis.__awaiter||function(t,e,n,a){function s(o){return o instanceof n?o:new n(function(r){r(o)})}return new(n||(n=Promise))(function(o,r){function u(d){try{h(a.next(d))}catch(R){r(R)}}function m(d){try{h(a.throw(d))}catch(R){r(R)}}function h(d){d.done?o(d.value):s(d.value).then(u,m)}h((a=a.apply(t,e||[])).next())})};const qe=Object.assign(Object.assign({},X.props),{label:String,labelWidth:[Number,String],labelStyle:[String,Object],labelAlign:String,labelPlacement:String,path:String,first:Boolean,rulePath:String,required:Boolean,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:void 0},rule:[Object,Array],size:String,ignorePathChange:Boolean,validationStatus:String,feedback:String,showLabel:{type:Boolean,default:void 0},labelProps:Object});function J(t,e){return(...n)=>{try{const a=t(...n);return!e&&(typeof a=="boolean"||a instanceof Error||Array.isArray(a))||(a==null?void 0:a.then)?a:(a===void 0||Y("form-item/validate",`You return a ${typeof a} typed value in the validator method, which is not recommended. Please use `+(e?"`Promise`":"`boolean`, `Error` or `Promise`")+" typed value instead."),!0)}catch(a){Y("form-item/validate","An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."),console.error(a);return}}}var Te=U({name:"FormItem",props:qe,setup(t){$e(we,"formItems",j(t,"path"));const{mergedClsPrefixRef:e,inlineThemeDisabled:n}=ge(t),a=T(O,null),s=Pe(t),o=ze(t),{validationErrored:r}=o,{mergedRequired:u,mergedRules:m}=Ce(t),{mergedSize:h}=s,{mergedLabelPlacement:d,mergedLabelAlign:R}=o,i=L([]),I=L(K()),ee=f(()=>{const{feedback:l}=t;return l!=null?!0:i.value.length}),te=a?j(a.props,"disabled"):L(!1),ae=X("Form","-form-item",Ie,he,t,e);ve(j(t,"path"),()=>{t.ignorePathChange||M()});function M(){i.value=[],r.value=!1,t.feedback&&(I.value=K())}function ne(){$("blur")}function ie(){$("change")}function re(){$("focus")}function le(){$("input")}function oe(l,p){return G(this,void 0,void 0,function*(){let v,b,w,z;return typeof l=="string"?(v=l,b=p):l!==null&&typeof l=="object"&&(v=l.trigger,b=l.callback,w=l.shouldRuleBeApplied,z=l.options),yield new Promise((C,A)=>{$(v,w,z).then(({valid:_,errors:S})=>{_?(b&&b(),C()):(b&&b(S),A(S))})})})}const $=(l=null,p=()=>!0,v={suppressWarning:!0})=>G(this,void 0,void 0,function*(){const{path:b}=t;v?v.first||(v.first=t.first):v={};const{value:w}=m,z=a?Z(a.props.model,b||""):void 0,C=(l?w.filter(k=>Array.isArray(k.trigger)?k.trigger.includes(l):k.trigger===l):w).filter(p).map(k=>{const c=Object.assign({},k);return c.validator&&(c.validator=J(c.validator,!1)),c.asyncValidator&&(c.asyncValidator=J(c.asyncValidator,!0)),c});if(!C.length)return yield Promise.resolve({valid:!0});const A=b!=null?b:"__n_no_path__",_=new Se({[A]:C}),{validateMessages:S}=(a==null?void 0:a.props)||{};return S&&_.messages(S),yield new Promise(k=>{_.validate({[A]:z},v,(c,N)=>{c!=null&&c.length?(i.value=c.map(q=>(q==null?void 0:q.message)||""),r.value=!0,k({valid:!1,errors:c})):(M(),k({valid:!0}))})})});ke(pe,{path:j(t,"path"),disabled:te,mergedSize:s.mergedSize,mergedValidationStatus:o.mergedValidationStatus,restoreValidation:M,handleContentBlur:ne,handleContentChange:ie,handleContentFocus:re,handleContentInput:le});const de={validate:oe,restoreValidation:M,internalValidate:$},E=L(null);Re(()=>{E.value!==null&&(a==null||a.deriveMaxChildLabelWidth(Number(getComputedStyle(E.value).width.slice(0,-2))))});const B=f(()=>{var l;const{value:p}=h,{value:v}=d,b=v==="top"?"vertical":"horizontal",{common:{cubicBezierEaseInOut:w},self:{labelTextColor:z,asteriskColor:C,lineHeight:A,feedbackTextColor:_,feedbackTextColorWarning:S,feedbackTextColorError:k,feedbackPadding:c,[x("labelHeight",p)]:N,[x("blankHeight",p)]:q,[x("feedbackFontSize",p)]:se,[x("feedbackHeight",p)]:fe,[x("labelPadding",b)]:ue,[x("labelTextAlign",b)]:ce,[x(x("labelFontSize",v),p)]:me}}=ae.value;let H=(l=R.value)!==null&&l!==void 0?l:ce;return v==="top"&&(H=H==="right"?"flex-end":"flex-start"),{"--n-bezier":w,"--n-line-height":A,"--n-blank-height":q,"--n-label-font-size":me,"--n-label-text-align":H,"--n-label-height":N,"--n-label-padding":ue,"--n-asterisk-color":C,"--n-label-text-color":z,"--n-feedback-padding":c,"--n-feedback-font-size":se,"--n-feedback-height":fe,"--n-feedback-text-color":_,"--n-feedback-text-color-warning":S,"--n-feedback-text-color-error":k}}),P=ye("form-item",f(()=>{var l;return`${h.value[0]}${d.value[0]}${((l=R.value)===null||l===void 0?void 0:l[0])||""}`}),B,t);return Object.assign(Object.assign(Object.assign(Object.assign({labelElementRef:E,mergedClsPrefix:e,mergedRequired:u,hasFeedback:ee,feedbackId:I,explains:i},o),s),de),{cssVars:n?void 0:B,themeClass:P==null?void 0:P.themeClass,onRender:P==null?void 0:P.onRender})},render(){var t;const{$slots:e,mergedClsPrefix:n,mergedShowLabel:a,mergedShowRequireMark:s,mergedRequireMarkPlacement:o,onRender:r}=this,u=s!==void 0?s:this.mergedRequired;return r==null||r(),g("div",{class:[`${n}-form-item`,this.themeClass,`${n}-form-item--${this.mergedSize}-size`,`${n}-form-item--${this.mergedLabelPlacement}-labelled`,!a&&`${n}-form-item--no-label`],style:this.cssVars},a&&(this.label||e.label)?g("label",Object.assign({},this.labelProps,{class:[(t=this.labelProps)===null||t===void 0?void 0:t.class,`${n}-form-item-label`],style:this.mergedLabelStyle,ref:"labelElementRef"}),o!=="left"?e.label?e.label():this.label:null,u?g("span",{class:`${n}-form-item-label__asterisk`},o!=="left"?"\xA0*":"*\xA0"):o==="right-hanging"&&g("span",{class:`${n}-form-item-label__asterisk-placeholder`},"\xA0*"),o==="left"?e.label?e.label():this.label:null):null,g("div",{class:[`${n}-form-item-blank`,this.mergedValidationStatus&&`${n}-form-item-blank--${this.mergedValidationStatus}`]},e),this.mergedShowFeedback?g("div",{key:this.feedbackId,class:`${n}-form-item-feedback-wrapper`},g(xe,{name:"fade-down-transition",mode:"out-in"},{default:()=>{const m=g(Ae,{clsPrefix:n,explains:this.explains,feedback:this.feedback},{default:e.feedback}),{hasFeedback:h,mergedValidationStatus:d}=this;return h||e.feedback?d==="warning"?g("div",{key:"controlled-warning",class:`${n}-form-item-feedback ${n}-form-item-feedback--warning`},m):d==="error"?g("div",{key:"controlled-error",class:`${n}-form-item-feedback ${n}-form-item-feedback--error`},m):d==="success"?g("div",{key:"controlled-success",class:`${n}-form-item-feedback ${n}-form-item-feedback--success`},m):g("div",{key:"controlled-default",class:`${n}-form-item-feedback`},m):null}})):null)}});export{Te as _};