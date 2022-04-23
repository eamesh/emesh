import{p as c,q as x,s as v,d as V,H as He,v as ot,m as i,eJ as T,eK as D,eL as q,eM as K,eN as z,eO as ee,eP as X,r as w,$ as te,a2 as re,D as U,B as at,C as Fe,P as Te,eQ as ie,eR as ye,eS as Se,eT as Ce,a9 as nt,cY as lt,F as De,K as it,I as qe,dY as st,R as ut,x as ke,Q as dt,T as ze,V as ct,ds as pt,a8 as ht,c7 as ft,dl as gt,a1 as ce,_ as we,a0 as bt}from"./index.78c09cee.js";import{r as Ue,a as $e,h as Re,b as Be,c as F,d as fe}from"./FormItem.03d633ee.js";import{_ as mt}from"./Input.d62ae2d3.js";import{u as vt}from"./use-locale.c29a83eb.js";import{u as Ie}from"./use-merged-state.c2667ee5.js";import{u as Ae,V as xt,a as kt,b as wt}from"./Follower.d919f920.js";var yt=c("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[x(">",[c("input",[x("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),x("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),c("button",[x("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[v("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),x("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[v("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),x("*",[x("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[x(">",[c("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),c("base-selection",[c("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),c("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),v("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),x("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[x(">",[c("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),c("base-selection",[c("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),c("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),v("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]);const St={};var Ct=V({name:"InputGroup",props:St,setup(e){const{mergedClsPrefixRef:t}=He(e);return ot("-input-group",yt,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return i("div",{class:`${e}-input-group`},this.$slots)}});function Ut(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function se(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function $t(e){return e=Math.round(e),e>=360?359:e<0?0:e}function Rt(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const At={rgb:{hex(e){return T(D(e))},hsl(e){const[t,n,o,l]=D(e);return q([...Ue(t,n,o),l])},hsv(e){const[t,n,o,l]=D(e);return K([...$e(t,n,o),l])}},hex:{rgb(e){return z(D(e))},hsl(e){const[t,n,o,l]=D(e);return q([...Ue(t,n,o),l])},hsv(e){const[t,n,o,l]=D(e);return K([...$e(t,n,o),l])}},hsl:{hex(e){const[t,n,o,l]=ee(e);return T([...Re(t,n,o),l])},rgb(e){const[t,n,o,l]=ee(e);return z([...Re(t,n,o),l])},hsv(e){const[t,n,o,l]=ee(e);return K([...Be(t,n,o),l])}},hsv:{hex(e){const[t,n,o,l]=X(e);return T([...F(t,n,o),l])},rgb(e){const[t,n,o,l]=X(e);return z([...F(t,n,o),l])},hsl(e){const[t,n,o,l]=X(e);return q([...fe(t,n,o),l])}}};function Ee(e,t,n){return n=n||se(e),n?n===t?e:At[n][t](e):null}const W="12px",Vt=12,L="6px",_t=6,Pt="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)";var Dt=V({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=w(null);function n(a){!t.value||(te("mousemove",document,o),te("mouseup",document,l),o(a))}function o(a){const{value:s}=t;if(!s)return;const{width:u,left:g}=s.getBoundingClientRect(),B=$t((a.clientX-g-_t)/(u-Vt)*360);e.onUpdateHue(B)}function l(){var a;re("mousemove",document,o),re("mouseup",document,l),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,handleMouseDown:n}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-slider`,style:{height:W,borderRadius:L}},i("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:Pt,height:W,borderRadius:L,position:"relative"},onMousedown:this.handleMouseDown},i("div",{style:{position:"absolute",left:L,right:L,top:0,bottom:0}},i("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${L})`,borderRadius:L,width:W,height:W}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:L,width:W,height:W}})))))}});const le="12px",zt=12,j="6px";var It=V({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=w(null);function n(a){!t.value||!e.rgba||(te("mousemove",document,o),te("mouseup",document,l),o(a))}function o(a){const{value:s}=t;if(!s)return;const{width:u,left:g}=s.getBoundingClientRect(),B=(a.clientX-g)/(u-zt);e.onUpdateAlpha(Rt(B))}function l(){var a;re("mousemove",document,o),re("mouseup",document,l),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,railBackgroundImage:U(()=>{const{rgba:a}=e;return a?`linear-gradient(to right, rgba(${a[0]}, ${a[1]}, ${a[2]}, 0) 0%, rgba(${a[0]}, ${a[1]}, ${a[2]}, 1) 100%)`:""}),handleMouseDown:n}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:le,borderRadius:j},onMousedown:this.handleMouseDown},i("div",{style:{borderRadius:j,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},i("div",{class:`${e}-color-picker-checkboard`}),i("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&i("div",{style:{position:"absolute",left:j,right:j,top:0,bottom:0}},i("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${j})`,borderRadius:j,width:le,height:le}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:z(this.rgba),borderRadius:j,width:le,height:le}}))))}});const pe="12px",he="6px";var Mt=V({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=w(null);function n(a){!t.value||(te("mousemove",document,o),te("mouseup",document,l),o(a))}function o(a){const{value:s}=t;if(!s)return;const{width:u,height:g,left:B,bottom:oe}=s.getBoundingClientRect(),E=(oe-a.clientY)/g,Z=(a.clientX-B)/u,ue=100*(Z>1?1:Z<0?0:Z),ae=100*(E>1?1:E<0?0:E);e.onUpdateSV(ue,ae)}function l(){var a;re("mousemove",document,o),re("mouseup",document,l),(a=e.onComplete)===null||a===void 0||a.call(e)}return{palleteRef:t,handleColor:U(()=>{const{rgba:a}=e;return a?`rgb(${a[0]}, ${a[1]}, ${a[2]})`:""}),handleMouseDown:n}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},i("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),i("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&i("div",{class:`${e}-color-picker-handle`,style:{width:pe,height:pe,borderRadius:he,left:`calc(${this.displayedSv[0]}% - ${he})`,bottom:`calc(${this.displayedSv[1]}% - ${he})`}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:he,width:pe,height:pe}})))}});const Ve=at("n-color-picker");function Ht(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),255)):!1}function Ft(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),360)):!1}function Tt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}function qt(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Bt(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}const Et={paddingSmall:"0 4px"};var Me=V({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=w(""),{themeRef:n}=Fe(Ve,null);Te(()=>{t.value=o()});function o(){const{value:s}=e;if(s===null)return"";const{label:u}=e;return u==="HEX"?s:u==="A"?`${Math.floor(s*100)}%`:String(Math.floor(s))}function l(s){t.value=s}function a(s){let u,g;switch(e.label){case"HEX":g=qt(s),g&&e.onUpdateValue(s),t.value=o();break;case"H":u=Ft(s),u===!1?t.value=o():e.onUpdateValue(u);break;case"S":case"L":case"V":u=Tt(s),u===!1?t.value=o():e.onUpdateValue(u);break;case"A":u=Bt(s),u===!1?t.value=o():e.onUpdateValue(u);break;case"R":case"G":case"B":u=Ht(s),u===!1?t.value=o():e.onUpdateValue(u);break}}return{mergedTheme:n,inputValue:t,handleInputChange:a,handleInputUpdateValue:l}},render(){const{mergedTheme:e}=this;return i(mt,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Et,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),Nt=V({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,n){const{showAlpha:o}=e;if(e.mode==="hex"){e.onUpdateValue((o?T:ie)(n));return}let l;switch(e.valueArr===null?l=[0,0,0,0]:l=Array.from(e.valueArr),e.mode){case"hsv":l[t]=n,e.onUpdateValue((o?K:Ce)(l));break;case"rgb":l[t]=n,e.onUpdateValue((o?z:Se)(l));break;case"hsl":l[t]=n,e.onUpdateValue((o?q:ye)(l));break}}}},render(){const{clsPrefix:e,modes:t}=this;return i("div",{class:`${e}-color-picker-input`},i("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),i(Ct,null,{default:()=>{const{mode:n,valueArr:o,showAlpha:l}=this;if(n==="hex"){let a=null;try{a=o===null?null:(l?T:ie)(o)}catch{}return i(Me,{label:"HEX",showAlpha:l,value:a,onUpdateValue:s=>{this.handleUnitUpdateValue(0,s)}})}return(n+(l?"a":"")).split("").map((a,s)=>i(Me,{label:a.toUpperCase(),value:o===null?null:o[s],onUpdateValue:u=>{this.handleUnitUpdateValue(s,u)}}))}}))}}),Ot=V({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:n}=Fe(Ve,null);return()=>{const{hsla:o,value:l,clsPrefix:a,onClick:s,disabled:u}=e,g=t.label||n.value;return i("div",{class:[`${a}-color-picker-trigger`,u&&`${a}-color-picker-trigger--disabled`],onClick:u?void 0:s},i("div",{class:`${a}-color-picker-trigger__fill`},i("div",{class:`${a}-color-picker-checkboard`}),i("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:o?q(o):""}}),l&&o?i("div",{class:`${a}-color-picker-trigger__value`,style:{color:o[2]>50||o[3]<.5?"black":"white"}},g?g(l):l):null))}}});function Lt(e,t){if(t==="hsv"){const[n,o,l,a]=X(e);return z([...F(n,o,l),a])}return e}function jt(e){const t=document.createElement("canvas").getContext("2d");return t.fillStyle=e,t.fillStyle}var Kt=V({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=U(()=>e.swatches.map(a=>{const s=se(a);return{value:a,mode:s,legalValue:Lt(a,s)}}));function n(a){const{mode:s}=e;let{value:u,mode:g}=a;return g||(g="hex",/^[a-zA-Z]+$/.test(u)?u=jt(u):(nt("color-picker",`color ${u} in swatches is invalid.`),u="#000000")),g===s?u:Ee(u,s,g)}function o(a){e.onUpdateColor(n(a))}function l(a,s){a.key==="Enter"&&o(s)}return{parsedSwatchesRef:t,handleSwatchSelect:o,handleSwatchKeyDown:l}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>i("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>this.handleSwatchSelect(t),onKeydown:n=>this.handleSwatchKeyDown(n,t)},i("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Xt=V({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=se(e);return Boolean(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(n){var o;const l=n.target.value;(o=e.onUpdateColor)===null||o===void 0||o.call(e,Ee(l.toUpperCase(),e.mode,"hex")),n.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-preview__preview`},i("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),i("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),Zt=x([c("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),c("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[lt(),c("input",`
 text-align: center;
 `)]),c("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[x("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),c("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[v("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),x("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),c("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[v("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),c("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[v("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[De("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),c("color-picker-preview",`
 display: flex;
 `,[v("sliders",`
 flex: 1 0 auto;
 `),v("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),v("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),v("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),c("color-picker-input",`
 display: flex;
 align-items: center;
 `,[c("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),v("mode",`
 width: 72px;
 text-align: center;
 `)]),c("color-picker-control",`
 padding: 12px;
 `),c("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[c("button","margin-left: 8px;")]),c("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[v("value",`
 white-space: nowrap;
 position: relative;
 `),v("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),De("disabled","cursor: not-allowed"),c("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[x("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),c("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[c("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[v("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),x("&:focus",`
 outline: none;
 `,[v("fill",[x("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]);const Gt=Object.assign(Object.assign({},qe.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:{type:Boolean,default:!1},defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Ae.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]});var rr=V({name:"ColorPicker",props:Gt,setup(e,{slots:t}){const n=w(null);let o=null;const l=it(e),{mergedSizeRef:a,mergedDisabledRef:s}=l,{localeRef:u}=vt("global"),{mergedClsPrefixRef:g,namespaceRef:B,inlineThemeDisabled:oe}=He(e),E=qe("ColorPicker","-color-picker",Zt,st,e,g);ut(Ve,{themeRef:E,renderLabelRef:ke(e,"renderLabel"),colorPickerSlots:t});const Z=w(e.defaultShow),ue=Ie(ke(e,"show"),Z);function ae(r){const{onUpdateShow:d,"onUpdate:show":p}=e;d&&ce(d,r),p&&ce(p,r),Z.value=r}const{defaultValue:_e}=e,Pe=w(_e===void 0?Ut(e.modes,e.showAlpha):_e),$=Ie(ke(e,"value"),Pe),G=w([$.value]),_=w(0),ge=U(()=>se($.value)),{modes:Ne}=e,A=w(se($.value)||Ne[0]||"rgb");function Oe(){const{modes:r}=e,{value:d}=A,p=r.findIndex(f=>f===d);~p?A.value=r[(p+1)%r.length]:A.value="rgb"}let y,S,Y,Q,I,M,H,C;const ne=U(()=>{const{value:r}=$;if(!r)return null;switch(ge.value){case"hsv":return X(r);case"hsl":return[y,S,Y,C]=ee(r),[...Be(y,S,Y),C];case"rgb":case"hex":return[I,M,H,C]=D(r),[...$e(I,M,H),C]}}),N=U(()=>{const{value:r}=$;if(!r)return null;switch(ge.value){case"rgb":case"hex":return D(r);case"hsv":return[y,S,Q,C]=X(r),[...F(y,S,Q),C];case"hsl":return[y,S,Y,C]=ee(r),[...Re(y,S,Y),C]}}),be=U(()=>{const{value:r}=$;if(!r)return null;switch(ge.value){case"hsl":return ee(r);case"hsv":return[y,S,Q,C]=X(r),[...fe(y,S,Q),C];case"rgb":case"hex":return[I,M,H,C]=D(r),[...Ue(I,M,H),C]}}),Le=U(()=>{switch(A.value){case"rgb":case"hex":return N.value;case"hsv":return ne.value;case"hsl":return be.value}}),de=w(0),me=w(1),ve=w([0,0]);function je(r,d){const{value:p}=ne,f=de.value,b=p?p[3]:1;ve.value=[r,d];const{showAlpha:h}=e;switch(A.value){case"hsv":m((h?K:Ce)([f,r,d,b]),"cursor");break;case"hsl":m((h?q:ye)([...fe(f,r,d),b]),"cursor");break;case"rgb":m((h?z:Se)([...F(f,r,d),b]),"cursor");break;case"hex":m((h?T:ie)([...F(f,r,d),b]),"cursor");break}}function Ke(r){de.value=r;const{value:d}=ne;if(!d)return;const[,p,f,b]=d,{showAlpha:h}=e;switch(A.value){case"hsv":m((h?K:Ce)([r,p,f,b]),"cursor");break;case"rgb":m((h?z:Se)([...F(r,p,f),b]),"cursor");break;case"hex":m((h?T:ie)([...F(r,p,f),b]),"cursor");break;case"hsl":m((h?q:ye)([...fe(r,p,f),b]),"cursor");break}}function Xe(r){switch(A.value){case"hsv":[y,S,Q]=ne.value,m(K([y,S,Q,r]),"cursor");break;case"rgb":[I,M,H]=N.value,m(z([I,M,H,r]),"cursor");break;case"hex":[I,M,H]=N.value,m(T([I,M,H,r]),"cursor");break;case"hsl":[y,S,Y]=be.value,m(q([y,S,Y,r]),"cursor");break}me.value=r}function m(r,d){d==="cursor"?o=r:o=null;const{nTriggerFormChange:p,nTriggerFormInput:f}=l,{onUpdateValue:b,"onUpdate:value":h}=e;b&&ce(b,r),h&&ce(h,r),p(),f(),Pe.value=r}function Ze(r){m(r,"input"),bt(J)}function J(r=!0){const{value:d}=$;if(d){const{nTriggerFormChange:p,nTriggerFormInput:f}=l,{onComplete:b}=e;b&&b(d);const{value:h}=G,{value:R}=_;r&&(h.splice(R+1,h.length,d),_.value=R+1),p(),f()}}function Ge(){const{value:r}=_;r-1<0||(m(G.value[r-1],"input"),J(!1),_.value=r-1)}function Ye(){const{value:r}=_;r<0||r+1>=G.value.length||(m(G.value[r+1],"input"),J(!1),_.value=r+1)}function Qe(){ae(!1)}const Je=U(()=>_.value>=1),We=U(()=>{const{value:r}=G;return r.length>1&&_.value<r.length-1});dt(ue,r=>{r||(G.value=[$.value],_.value=0)}),Te(()=>{if(!(o&&o===$.value)){const{value:r}=ne;r&&(de.value=r[0],me.value=r[3],ve.value=[r[1],r[2]])}o=null});const xe=U(()=>{const{value:r}=a,{common:{cubicBezierEaseInOut:d},self:{textColor:p,color:f,panelFontSize:b,boxShadow:h,border:R,borderRadius:k,dividerColor:O,[ze("height",r)]:tt,[ze("fontSize",r)]:rt}}=E.value;return{"--n-bezier":d,"--n-text-color":p,"--n-color":f,"--n-panel-font-size":b,"--n-font-size":rt,"--n-box-shadow":h,"--n-border":R,"--n-border-radius":k,"--n-height":tt,"--n-divider-color":O}}),P=oe?ct("color-picker",U(()=>a.value[0]),xe,e):void 0;function et(){var r;const{value:d}=N,{value:p}=de,{internalActions:f,modes:b,actions:h}=e,{value:R}=E,{value:k}=g;return i("div",{class:[`${k}-color-picker-panel`,P==null?void 0:P.themeClass.value],onDragstart:O=>{O.preventDefault()},style:oe?void 0:xe.value},i("div",{class:`${k}-color-picker-control`},i(Mt,{clsPrefix:k,rgba:d,displayedHue:p,displayedSv:ve.value,onUpdateSV:je,onComplete:J}),i("div",{class:`${k}-color-picker-preview`},i("div",{class:`${k}-color-picker-preview__sliders`},i(Dt,{clsPrefix:k,hue:p,onUpdateHue:Ke,onComplete:J}),e.showAlpha?i(It,{clsPrefix:k,rgba:d,alpha:me.value,onUpdateAlpha:Xe,onComplete:J}):null),e.showPreview?i(Xt,{clsPrefix:k,mode:A.value,color:N.value&&ie(N.value),onUpdateColor:O=>m(O,"input")}):null),i(Nt,{clsPrefix:k,showAlpha:e.showAlpha,mode:A.value,modes:b,onUpdateMode:Oe,value:$.value,valueArr:Le.value,onUpdateValue:Ze}),((r=e.swatches)===null||r===void 0?void 0:r.length)&&i(Kt,{clsPrefix:k,mode:A.value,swatches:e.swatches,onUpdateColor:O=>m(O,"input")})),h!=null&&h.length?i("div",{class:`${k}-color-picker-action`},h.includes("confirm")&&i(we,{size:"small",onClick:Qe,theme:R.peers.Button,themeOverrides:R.peerOverrides.Button},{default:()=>u.value.confirm})):null,t.action?i("div",{class:`${k}-color-picker-action`},{default:t.action}):f?i("div",{class:`${k}-color-picker-action`},f.includes("undo")&&i(we,{size:"small",onClick:Ge,disabled:!Je.value,theme:R.peers.Button,themeOverrides:R.peerOverrides.Button},{default:()=>u.value.undo}),f.includes("redo")&&i(we,{size:"small",onClick:Ye,disabled:!We.value,theme:R.peers.Button,themeOverrides:R.peerOverrides.Button},{default:()=>u.value.redo})):null)}return{mergedClsPrefix:g,namespace:B,selfRef:n,hsla:be,rgba:N,mergedShow:ue,mergedDisabled:s,isMounted:pt(),adjustedTo:Ae(e),mergedValue:$,handleTriggerClick(){ae(!0)},handleClickOutside(r){var d;!((d=n.value)===null||d===void 0)&&d.contains(r.target)||ae(!1)},renderPanel:et,cssVars:oe?void 0:xe,themeClass:P==null?void 0:P.themeClass,onRender:P==null?void 0:P.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n==null||n(),i("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},i(xt,null,{default:()=>[i(kt,null,{default:()=>i(Ot,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),i(wt,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Ae.tdkey,to:this.adjustedTo},{default:()=>i(ht,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?ft(this.renderPanel(),[[gt,this.handleClickOutside]]):null})})]}))}});export{rr as N};
