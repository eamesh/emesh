import{F as $n,V as Fn}from"./VirtualList.02b97eb1.js";import{d as D,m as o,r as O,dz as kn,M as ze,a0 as Re,aq as In,p,s as w,q,H as _n,I as U,dM as En,C as Se,ab as Nn,D as P,T as B,V as Oe,y as Be,L as we,a8 as Ln,cX as G,F as _,G as Ce,cY as Bn,x as I,dJ as An,Q as te,aB as Dn,U as Me,R as $e,W as Wn,A as Vn,X as Hn,z as Kn,a3 as jn,dP as qn,P as Gn,Y as Fe}from"./index.78c09cee.js";import{i as Pe,c as Un}from"./Follower.d919f920.js";import{f as Zn,h as ye,N as ke}from"./Tag.9b989cfb.js";import{u as Yn}from"./use-locale.c29a83eb.js";import{h as Ie}from"./happens-in.f44eb706.js";import{N as Xn}from"./Input.d62ae2d3.js";import{c as Jn,a as Qn}from"./cssr.7e31f5cb.js";function et(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}var nt=D({name:"Checkmark",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},o("g",{fill:"none"},o("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),tt=D({name:"Empty",render(){return o("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),o("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}});const H="v-hidden",ot=Qn("[v-hidden]",{display:"none!important"});var _e=D({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:i}){const r=O(null),d=O(null);function g(){const{value:c}=r,{getCounter:a,getTail:R}=e;let f;if(a!==void 0?f=a():f=d.value,!c||!f)return;f.hasAttribute(H)&&f.removeAttribute(H);const{children:b}=c,m=c.offsetWidth,x=[],v=i.tail?R==null?void 0:R():null;let h=v?v.offsetWidth:0,C=!1;const T=c.children.length-(i.tail?1:0);for(let $=0;$<T-1;++$){if($<0)continue;const F=b[$];if(C){F.hasAttribute(H)||F.setAttribute(H,"");continue}else F.hasAttribute(H)&&F.removeAttribute(H);const E=F.offsetWidth;if(h+=E,x[$]=E,h>m){const{updateCounter:N}=e;for(let k=$;k>=0;--k){const L=T-1-k;N!==void 0?N(L):f.textContent=`${L}`;const W=f.offsetWidth;if(h-=x[k],h+W<=m||k===0){C=!0,$=k-1,v&&($===-1?(v.style.maxWidth=`${m-W}px`,v.style.boxSizing="border-box"):v.style.maxWidth="");break}}}}const{onUpdateOverflow:S}=e;C?S!==void 0&&S(!0):(S!==void 0&&S(!1),f.setAttribute(H,""))}const u=kn();return ot.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Jn,ssr:u}),ze(g),{selfRef:r,counterRef:d,sync:g}},render(){const{$slots:e}=this;return Re(this.sync),o("div",{class:"v-overflow",ref:"selfRef"},[In(e,"default"),e.counter?e.counter():o("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}}),it=p("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[w("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[q("+",[w("description",`
 margin-top: 8px;
 `)])]),w("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),w("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]);const rt=Object.assign(Object.assign({},U.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function});var lt=D({name:"Empty",props:rt,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:r}=_n(e),d=U("Empty","-empty",it,En,e,i),{localeRef:g}=Yn("Empty"),u=Se(Nn,null),c=P(()=>{var b,m,x;return(b=e.description)!==null&&b!==void 0?b:(x=(m=u==null?void 0:u.mergedComponentPropsRef.value)===null||m===void 0?void 0:m.Empty)===null||x===void 0?void 0:x.description}),a=P(()=>{var b,m;return((m=(b=u==null?void 0:u.mergedComponentPropsRef.value)===null||b===void 0?void 0:b.Empty)===null||m===void 0?void 0:m.renderIcon)||(()=>o(tt,null))}),R=P(()=>{const{size:b}=e,{common:{cubicBezierEaseInOut:m},self:{[B("iconSize",b)]:x,[B("fontSize",b)]:v,textColor:h,iconColor:C,extraTextColor:T}}=d.value;return{"--n-icon-size":x,"--n-font-size":v,"--n-bezier":m,"--n-text-color":h,"--n-icon-color":C,"--n-extra-text-color":T}}),f=r?Oe("empty",P(()=>{let b="";const{size:m}=e;return b+=m[0],b}),R,e):void 0;return{mergedClsPrefix:i,mergedRenderIcon:a,localizedDescription:P(()=>c.value||g.value.description),cssVars:r?void 0:R,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){const{$slots:e,mergedClsPrefix:i,onRender:r}=this;return r==null||r(),o("div",{class:[`${i}-empty`,this.themeClass],style:this.cssVars},this.showIcon?o("div",{class:`${i}-empty__icon`},e.icon?e.icon():o(Be,{clsPrefix:i},{default:this.mergedRenderIcon})):null,this.showDescription?o("div",{class:`${i}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?o("div",{class:`${i}-empty__extra`},e.extra()):null)}});const at=o(nt);function st(e,i){return o(Ln,{name:"fade-in-scale-up-transition"},{default:()=>e?o(Be,{clsPrefix:i,class:`${i}-base-select-option__check`},{default:()=>at}):null})}var Ee=D({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:i,pendingTmNodeRef:r,multipleRef:d,valueSetRef:g,renderLabelRef:u,renderOptionRef:c,handleOptionClick:a,handleOptionMouseEnter:R}=Se(Pe),f=we(()=>{const{value:v}=r;return v?e.tmNode.key===v.key:!1});function b(v){const{tmNode:h}=e;h.disabled||a(v,h)}function m(v){const{tmNode:h}=e;h.disabled||R(v,h)}function x(v){const{tmNode:h}=e,{value:C}=f;h.disabled||C||R(v,h)}return{multiple:d,isGrouped:we(()=>{const{tmNode:v}=e,{parent:h}=v;return h&&h.rawNode.type==="group"}),isPending:f,isSelected:we(()=>{const{value:v}=i,{value:h}=d;if(v===null)return!1;const C=e.tmNode.rawNode.value;if(h){const{value:T}=g;return T.has(C)}else return v===C}),renderLabel:u,renderOption:c,handleMouseMove:x,handleMouseEnter:m,handleClick:b}},render(){const{clsPrefix:e,tmNode:{rawNode:i},isSelected:r,isPending:d,isGrouped:g,multiple:u,renderOption:c,renderLabel:a,handleClick:R,handleMouseEnter:f,handleMouseMove:b}=this,x=st(u&&r,e),v=a?[a(i,r),x]:[G(i.label,i,r),x],h=o("div",{class:[`${e}-base-select-option`,i.class,{[`${e}-base-select-option--disabled`]:i.disabled,[`${e}-base-select-option--selected`]:r,[`${e}-base-select-option--grouped`]:g,[`${e}-base-select-option--pending`]:d}],style:i.style,onClick:R,onMouseenter:f,onMousemove:b},o("div",{class:`${e}-base-select-option__content`},v));return i.render?i.render({node:h,option:i,selected:r}):c?c({node:h,option:i,selected:r}):h}}),Ne=D({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:i}=Se(Pe);return{renderLabel:e,renderOption:i}},render(){const{clsPrefix:e,renderLabel:i,renderOption:r,tmNode:{rawNode:d}}=this,g=i?i(d,!1):G(d.label,d,!1),u=o("div",{class:`${e}-base-select-group-header`},g);return d.render?d.render({node:u,option:d}):r?r({node:u,option:d,selected:!1}):u}}),dt=p("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[_("multiple",[p("base-select-option",`
 padding-right: 28px;
 `)]),p("scrollbar",`
 max-height: var(--n-height);
 `),p("virtual-list",`
 max-height: var(--n-height);
 `),p("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[w("content",`
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),p("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),p("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),w("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),w("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),w("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier);
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),p("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),p("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[q("&:active",`
 color: var(--n-option-text-color-pressed);
 `),_("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),_("pending",`
 background-color: var(--n-option-color-pending);
 `),_("selected",`
 color: var(--n-option-text-color-active);
 background-color: var(--n-option-color-active);
 `),_("disabled",`
 cursor: not-allowed;
 `,[Ce("selected",`
 color: var(--n-option-text-color-disabled);
 `),_("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),w("check",`
 font-size: 16px;
 position: absolute;
 right: 8px;
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Bn({enterScale:"0.5"})])])]),wt=D({name:"InternalSelectMenu",props:Object.assign(Object.assign({},U.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},width:[Number,String],autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const i=U("InternalSelectMenu","-internal-select-menu",dt,An,e,I(e,"clsPrefix")),r=O(null),d=O(null),g=O(null),u=P(()=>e.treeMate.getFlattenedNodes()),c=P(()=>Zn(u.value)),a=O(null);function R(){const{treeMate:t}=e;let l=null;if(e.autoPending){const{value:z}=e;z===null?l=t.getFirstAvailableNode():(e.multiple?l=t.getNode((z||[])[(z||[]).length-1]):l=t.getNode(z),(!l||l.disabled)&&(l=t.getFirstAvailableNode())),l&&y(l)}}let f;te(I(e,"show"),t=>{t?f=te(e.resetMenuOnOptionsChange?[I(e,"treeMate"),I(e,"multiple")]:[I(e,"multiple")],()=>{R(),Re(J)},{immediate:!0}):f==null||f()},{immediate:!0});const b=P(()=>Dn(i.value.self[B("optionHeight",e.size)])),m=P(()=>Me(i.value.self[B("padding",e.size)])),x=P(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),v=P(()=>{const t=u.value;return t&&t.length===0});function h(t){const{onToggle:l}=e;l&&l(t)}function C(t){const{onScroll:l}=e;l&&l(t)}function T(t){var l;(l=g.value)===null||l===void 0||l.sync(),C(t)}function S(){var t;(t=g.value)===null||t===void 0||t.sync()}function $(){const{value:t}=a;return t||null}function F(t,l){l.disabled||y(l,!1)}function E(t,l){l.disabled||h(l)}function N(t){var l;Ie(t,"action")||(l=e.onKeyup)===null||l===void 0||l.call(e,t)}function k(t){var l;Ie(t,"action")||(l=e.onKeydown)===null||l===void 0||l.call(e,t)}function L(t){var l;(l=e.onMousedown)===null||l===void 0||l.call(e,t),!e.focusable&&t.preventDefault()}function W(){const{value:t}=a;t&&y(t.getNext({loop:!0}),!0)}function K(){const{value:t}=a;t&&y(t.getPrev({loop:!0}),!0)}function y(t,l=!1){a.value=t,l&&J()}function J(){var t,l;const z=a.value;if(!z)return;const V=c.value(z.key);V!==null&&(e.virtualScroll?(t=d.value)===null||t===void 0||t.scrollTo({index:V}):(l=g.value)===null||l===void 0||l.scrollTo({index:V,elSize:b.value}))}function ie(t){var l,z;!((l=r.value)===null||l===void 0)&&l.contains(t.target)&&((z=e.onFocus)===null||z===void 0||z.call(e,t))}function re(t){var l,z;!((l=r.value)===null||l===void 0)&&l.contains(t.relatedTarget)||(z=e.onBlur)===null||z===void 0||z.call(e,t)}$e(Pe,{handleOptionMouseEnter:F,handleOptionClick:E,valueSetRef:x,multipleRef:I(e,"multiple"),valueRef:I(e,"value"),renderLabelRef:I(e,"renderLabel"),renderOptionRef:I(e,"renderOption"),pendingTmNodeRef:a}),$e(Un,r),ze(()=>{const{value:t}=g;t&&t.sync()});const Q=P(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:l},self:{height:z,borderRadius:V,color:le,groupHeaderTextColor:ae,actionDividerColor:se,optionTextColorPressed:de,optionTextColor:ce,optionTextColorDisabled:ue,optionTextColorActive:fe,optionOpacityDisabled:ve,optionCheckColor:he,actionTextColor:be,optionColorPending:pe,optionColorActive:Z,loadingColor:Y,loadingSize:ge,[B("optionFontSize",t)]:me,[B("optionHeight",t)]:xe,[B("optionPadding",t)]:X}}=i.value;return{"--n-height":z,"--n-action-divider-color":se,"--n-action-text-color":be,"--n-bezier":l,"--n-border-radius":V,"--n-color":le,"--n-option-font-size":me,"--n-group-header-text-color":ae,"--n-option-check-color":he,"--n-option-color-pending":pe,"--n-option-color-active":Z,"--n-option-height":xe,"--n-option-opacity-disabled":ve,"--n-option-text-color":ce,"--n-option-text-color-active":fe,"--n-option-text-color-disabled":ue,"--n-option-text-color-pressed":de,"--n-option-padding":X,"--n-option-padding-left":Me(X,"left"),"--n-loading-color":Y,"--n-loading-size":ge}}),{inlineThemeDisabled:ee}=e,A=ee?Oe("internal-select-menu",P(()=>e.size[0]),Q,e):void 0,ne={selfRef:r,next:W,prev:K,getPendingTmNode:$};return Object.assign({mergedTheme:i,virtualListRef:d,scrollbarRef:g,itemSize:b,padding:m,flattenedNodes:u,empty:v,virtualListContainer(){const{value:t}=d;return t==null?void 0:t.listElRef},virtualListContent(){const{value:t}=d;return t==null?void 0:t.itemsElRef},doScroll:C,handleFocusin:ie,handleFocusout:re,handleKeyUp:N,handleKeyDown:k,handleMouseDown:L,handleVirtualListResize:S,handleVirtualListScroll:T,cssVars:ee?void 0:Q,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender},ne)},render(){const{$slots:e,virtualScroll:i,clsPrefix:r,mergedTheme:d,themeClass:g,onRender:u}=this;return u==null||u(),o("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${r}-base-select-menu`,g,this.multiple&&`${r}-base-select-menu--multiple`],style:[{width:jn(this.width)},this.cssVars],onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?o("div",{class:`${r}-base-select-menu__loading`},o(Vn,{clsPrefix:r,strokeWidth:20})):this.empty?o("div",{class:`${r}-base-select-menu__empty`},Kn(e.empty,()=>[o(lt,{theme:d.peers.Empty,themeOverrides:d.peerOverrides.Empty})])):o(Hn,{ref:"scrollbarRef",theme:d.peers.Scrollbar,themeOverrides:d.peerOverrides.Scrollbar,scrollable:this.scrollable,container:i?this.virtualListContainer:void 0,content:i?this.virtualListContent:void 0,onScroll:i?void 0:this.doScroll},{default:()=>i?o(Fn,{ref:"virtualListRef",class:`${r}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:c})=>c.isGroup?o(Ne,{key:c.key,clsPrefix:r,tmNode:c}):c.ignored?null:o(Ee,{clsPrefix:r,key:c.key,tmNode:c})}):o("div",{class:`${r}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(c=>c.isGroup?o(Ne,{key:c.key,clsPrefix:r,tmNode:c}):o(Ee,{clsPrefix:r,key:c.key,tmNode:c})))}),Wn(e.action,c=>c&&[o("div",{class:`${r}-base-select-menu__action`,"data-action":!0,key:"action"},c),o($n,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),ct=q([p("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[p("base-loading",`
 color: var(--n-loading-color);
 `),p("base-selection-tags","min-height: var(--n-height);"),w("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),w("state-border",`
 z-index: 1;
 border-color: #0000;
 `),p("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[w("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),p("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[w("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),p("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `),p("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),p("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[p("base-selection-input",`
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[w("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),w("render-label",`
 color: var(--n-text-color);
 `)]),Ce("disabled",[q("&:hover",[w("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),_("focus",[w("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),_("active",[w("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),p("base-selection-label","background-color: var(--n-color-active);"),p("base-selection-tags","background-color: var(--n-color-active);")])]),_("disabled","cursor: not-allowed;",[w("arrow",`
 color: var(--n-arrow-color-disabled);
 `),p("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[p("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),w("render-label",`
 color: var(--n-text-color-disabled);
 `)]),p("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),p("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),p("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[w("input",`
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),w("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>_(`${e}-status`,[w("state-border",`border: var(--n-border-${e});`),Ce("disabled",[q("&:hover",[w("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),_("active",[w("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),p("base-selection-label",`background-color: var(--n-color-active-${e});`),p("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),_("focus",[w("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),p("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 `),p("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[q("&:last-child","padding-right: 0;"),p("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[w("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),yt=D({name:"InternalSelection",props:Object.assign(Object.assign({},U.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeyup:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean}),setup(e){const i=O(null),r=O(null),d=O(null),g=O(null),u=O(null),c=O(null),a=O(null),R=O(null),f=O(null),b=O(null),m=O(!1),x=O(!1),v=O(!1),h=U("InternalSelection","-internal-selection",ct,qn,e,I(e,"clsPrefix")),C=P(()=>e.clearable&&!e.disabled&&(v.value||e.active)),T=P(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):G(e.selectedOption.label,e.selectedOption,!0):e.placeholder),S=P(()=>{const n=e.selectedOption;if(!!n)return n.label}),$=P(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function F(){var n;const{value:s}=i;if(s){const{value:M}=r;M&&(M.style.width=`${s.offsetWidth}px`,e.maxTagCount!=="responsive"&&((n=f.value)===null||n===void 0||n.sync()))}}function E(){const{value:n}=b;n&&(n.style.display="none")}function N(){const{value:n}=b;n&&(n.style.display="inline-block")}te(I(e,"active"),n=>{n||E()}),te(I(e,"pattern"),()=>{e.multiple&&Re(F)});function k(n){const{onFocus:s}=e;s&&s(n)}function L(n){const{onBlur:s}=e;s&&s(n)}function W(n){const{onDeleteOption:s}=e;s&&s(n)}function K(n){const{onClear:s}=e;s&&s(n)}function y(n){const{onPatternInput:s}=e;s&&s(n)}function J(n){var s;(!n.relatedTarget||!(!((s=d.value)===null||s===void 0)&&s.contains(n.relatedTarget)))&&k(n)}function ie(n){var s;!((s=d.value)===null||s===void 0)&&s.contains(n.relatedTarget)||L(n)}function re(n){K(n)}function Q(){v.value=!0}function ee(){v.value=!1}function A(n){!e.active||!e.filterable||n.target!==r.value&&n.preventDefault()}function ne(n){W(n)}function t(n){if(n.code==="Backspace"&&!l.value&&!e.pattern.length){const{selectedOptions:s}=e;s!=null&&s.length&&ne(s[s.length-1])}}const l=O(!1);let z=null;function V(n){const{value:s}=i;if(s){const M=n.target.value;s.textContent=M,F()}l.value?z=n:y(n)}function le(){l.value=!0}function ae(){l.value=!1,y(z),z=null}function se(n){var s;x.value=!0,(s=e.onPatternFocus)===null||s===void 0||s.call(e,n)}function de(n){var s;x.value=!1,(s=e.onPatternBlur)===null||s===void 0||s.call(e,n)}function ce(){var n,s;if(e.filterable)x.value=!1,(n=c.value)===null||n===void 0||n.blur(),(s=r.value)===null||s===void 0||s.blur();else if(e.multiple){const{value:M}=g;M==null||M.blur()}else{const{value:M}=u;M==null||M.blur()}}function ue(){var n,s,M;e.filterable?(x.value=!1,(n=c.value)===null||n===void 0||n.focus()):e.multiple?(s=g.value)===null||s===void 0||s.focus():(M=u.value)===null||M===void 0||M.focus()}function fe(){const{value:n}=r;n&&(N(),n.focus())}function ve(){const{value:n}=r;n&&n.blur()}function he(n){const{value:s}=a;s&&s.setTextContent(`+${n}`)}function be(){const{value:n}=R;return n}function pe(){return r.value}let Z=null;function Y(){Z!==null&&window.clearTimeout(Z)}function ge(){e.disabled||e.active||(Y(),Z=window.setTimeout(()=>{m.value=!0},100))}function me(){Y()}function xe(n){n||(Y(),m.value=!1)}ze(()=>{Gn(()=>{const n=c.value;!n||(n.tabIndex=e.disabled||x.value?-1:0)})});const{inlineThemeDisabled:X}=e,Te=P(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:s},self:{borderRadius:M,color:De,placeholderColor:We,textColor:Ve,paddingSingle:He,paddingMultiple:Ke,caretColor:je,colorDisabled:qe,textColorDisabled:Ge,placeholderColorDisabled:Ue,colorActive:Ze,boxShadowFocus:Ye,boxShadowActive:Xe,boxShadowHover:Je,border:Qe,borderFocus:en,borderHover:nn,borderActive:tn,arrowColor:on,arrowColorDisabled:rn,loadingColor:ln,colorActiveWarning:an,boxShadowFocusWarning:sn,boxShadowActiveWarning:dn,boxShadowHoverWarning:cn,borderWarning:un,borderFocusWarning:fn,borderHoverWarning:vn,borderActiveWarning:hn,colorActiveError:bn,boxShadowFocusError:pn,boxShadowActiveError:gn,boxShadowHoverError:mn,borderError:xn,borderFocusError:wn,borderHoverError:yn,borderActiveError:Cn,clearColor:zn,clearColorHover:Rn,clearColorPressed:Sn,clearSize:On,arrowSize:Pn,[B("height",n)]:Tn,[B("fontSize",n)]:Mn}}=h.value;return{"--n-bezier":s,"--n-border":Qe,"--n-border-active":tn,"--n-border-focus":en,"--n-border-hover":nn,"--n-border-radius":M,"--n-box-shadow-active":Xe,"--n-box-shadow-focus":Ye,"--n-box-shadow-hover":Je,"--n-caret-color":je,"--n-color":De,"--n-color-active":Ze,"--n-color-disabled":qe,"--n-font-size":Mn,"--n-height":Tn,"--n-padding-single":He,"--n-padding-multiple":Ke,"--n-placeholder-color":We,"--n-placeholder-color-disabled":Ue,"--n-text-color":Ve,"--n-text-color-disabled":Ge,"--n-arrow-color":on,"--n-arrow-color-disabled":rn,"--n-loading-color":ln,"--n-color-active-warning":an,"--n-box-shadow-focus-warning":sn,"--n-box-shadow-active-warning":dn,"--n-box-shadow-hover-warning":cn,"--n-border-warning":un,"--n-border-focus-warning":fn,"--n-border-hover-warning":vn,"--n-border-active-warning":hn,"--n-color-active-error":bn,"--n-box-shadow-focus-error":pn,"--n-box-shadow-active-error":gn,"--n-box-shadow-hover-error":mn,"--n-border-error":xn,"--n-border-focus-error":wn,"--n-border-hover-error":yn,"--n-border-active-error":Cn,"--n-clear-size":On,"--n-clear-color":zn,"--n-clear-color-hover":Rn,"--n-clear-color-pressed":Sn,"--n-arrow-size":Pn}}),j=X?Oe("internal-selection",P(()=>e.size[0]),Te,e):void 0;return{mergedTheme:h,mergedClearable:C,patternInputFocused:x,filterablePlaceholder:T,label:S,selected:$,showTagsPanel:m,isCompositing:l,counterRef:a,counterWrapperRef:R,patternInputMirrorRef:i,patternInputRef:r,selfRef:d,multipleElRef:g,singleElRef:u,patternInputWrapperRef:c,overflowRef:f,inputTagElRef:b,handleMouseDown:A,handleFocusin:J,handleClear:re,handleMouseEnter:Q,handleMouseLeave:ee,handleDeleteOption:ne,handlePatternKeyDown:t,handlePatternInputInput:V,handlePatternInputBlur:de,handlePatternInputFocus:se,handleMouseEnterCounter:ge,handleMouseLeaveCounter:me,handleFocusout:ie,handleCompositionEnd:ae,handleCompositionStart:le,onPopoverUpdateShow:xe,focus:ue,focusInput:fe,blur:ce,blurInput:ve,updateCounter:he,getCounter:be,getTail:pe,renderLabel:e.renderLabel,cssVars:X?void 0:Te,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender}},render(){const{status:e,multiple:i,size:r,disabled:d,filterable:g,maxTagCount:u,bordered:c,clsPrefix:a,onRender:R,renderTag:f,renderLabel:b}=this;R==null||R();const m=u==="responsive",x=typeof u=="number",v=m||x,h=o(Xn,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var T,S;return(S=(T=this.$slots).arrow)===null||S===void 0?void 0:S.call(T)}});let C;if(i){const T=y=>o("div",{class:`${a}-base-selection-tag-wrapper`,key:y.value},f?f({option:y,handleClose:()=>this.handleDeleteOption(y)}):o(ye,{size:r,closable:!y.disabled,disabled:d,internalStopClickPropagation:!0,onClose:()=>this.handleDeleteOption(y)},{default:()=>b?b(y,!0):G(y.label,y,!0)})),S=(x?this.selectedOptions.slice(0,u):this.selectedOptions).map(T),$=g?o("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},o("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:d,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),o("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,F=m?()=>o("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},o(ye,{size:r,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:d})):void 0;let E;if(x){const y=this.selectedOptions.length-u;y>0&&(E=o("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},o(ye,{size:r,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:d},{default:()=>`+${y}`})))}const N=m?g?o(_e,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>S,counter:F,tail:()=>$}):o(_e,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>S,counter:F}):x?S.concat(E):S,k=v?()=>o("div",{class:`${a}-base-selection-popover`},m?S:this.selectedOptions.map(T)):void 0,L=v?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,K=(this.selected?!1:this.active?!this.pattern&&!this.isCompositing:!0)?o("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},this.placeholder):null;if(g){const y=o("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},N,m?null:$,h);C=o(Fe,null,v?o(ke,Object.assign({},L),{trigger:()=>y,default:k}):y,K)}else{const y=o("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:d?void 0:0},N,h);C=o(Fe,null,v?o(ke,Object.assign({},L),{trigger:()=>y,default:k}):y,K)}}else if(g){const T=this.pattern||this.isCompositing,S=this.active?!T:!this.selected,$=this.active?!1:this.selected;C=o("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`},o("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:d,disabled:d,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),$?o("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},o("div",{class:`${a}-base-selection-overlay__wrapper`},f?f({option:this.selectedOption,handleClose:()=>{}}):b?b(this.selectedOption,!0):G(this.label,this.selectedOption,!0))):null,S?o("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},o("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,h)}else C=o("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?o("div",{class:`${a}-base-selection-input`,title:et(this.label),key:"input"},o("div",{class:`${a}-base-selection-input__content`},f?f({option:this.selectedOption,handleClose:()=>{}}):b?b(this.selectedOption,!0):G(this.label,this.selectedOption,!0))):o("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},this.placeholder),h);return o("div",{ref:"selfRef",class:[`${a}-base-selection`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeyup:this.onKeyup,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},C,c?o("div",{class:`${a}-base-selection__border`}):null,c?o("div",{class:`${a}-base-selection__state-border`}):null)}});function ut(e){return oe(e)?e.name||e.key||"key-required":e.value}function oe(e){return e.type==="group"}function Ae(e){return e.type==="ignored"}const Ct={getKey:ut,getIsGroup:oe,getIgnored:Ae};function Le(e,i){try{return!!(1+i.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function zt(e,i,r){if(!i)return e;function d(g){if(!Array.isArray(g))return[];const u=[];for(const c of g)if(oe(c)){const a=d(c.children);a.length&&u.push(Object.assign({},c,{children:a}))}else{if(Ae(c))continue;i(r,c)&&u.push(c)}return u}return d(e)}function Rt(e){const i=new Map;return e.forEach(r=>{oe(r)?r.children.forEach(d=>{i.set(d.value,d)}):i.set(r.value,r)}),i}function St(e,i){return i?typeof i.label=="string"?Le(e,i.label):i.value!==void 0?Le(e,String(i.value)):!1:!1}export{nt as F,lt as N,_e as V,yt as a,wt as b,Rt as c,St as d,zt as f,Ct as t};
