import{ar as Xe,cs as de,B as qe,d as Q,C as ce,ew as Ge,m as i,D as H,az as Ke,Y as Je,y as Qe,cX as Ye,dv as Ze,ey as et,p as f,F as C,q as P,s as E,G as tt,H as at,I as be,el as nt,r as _,ax as X,Q as rt,R as it,x as j,P as ot,T as W,V as st,W as ae,Z as ne,a1 as M,a0 as lt,c7 as dt,cq as ct,ca as bt,ay as ft}from"./index.78c09cee.js";import{A as ut}from"./Add.ad5e1d51.js";import{u as re}from"./use-compitable.3d828e2e.js";import{u as vt}from"./use-merged-state.c2667ee5.js";import{t as ie}from"./toNumber.eeee2b3e.js";import{o as pt}from"./on-fonts-ready.ae35f6df.js";import{V as ht}from"./index.8c3a953a.js";var gt=function(){return Xe.Date.now()},q=gt,mt="Expected a function",xt=Math.max,yt=Math.min;function wt(e,n,r){var s,v,x,c,o,g,m=0,y=!1,p=!1,u=!0;if(typeof e!="function")throw new TypeError(mt);n=ie(n)||0,de(r)&&(y=!!r.leading,p="maxWait"in r,x=p?xt(ie(r.maxWait)||0,n):x,u="trailing"in r?!!r.trailing:u);function w(h){var A=s,L=v;return s=v=void 0,m=h,c=e.apply(L,A),c}function R(h){return m=h,o=setTimeout(T,n),y?w(h):c}function z(h){var A=h-g,L=h-m,k=n-A;return p?yt(k,x-L):k}function l(h){var A=h-g,L=h-m;return g===void 0||A>=n||A<0||p&&L>=x}function T(){var h=q();if(l(h))return S(h);o=setTimeout(T,z(h))}function S(h){return o=void 0,u&&s?w(h):(s=v=void 0,c)}function $(){o!==void 0&&clearTimeout(o),m=0,s=g=v=o=void 0}function O(){return o===void 0?c:S(q())}function I(){var h=q(),A=l(h);if(s=arguments,v=this,g=h,A){if(o===void 0)return R(g);if(p)return clearTimeout(o),o=setTimeout(T,n),w(g)}return o===void 0&&(o=setTimeout(T,n)),c}return I.cancel=$,I.flush=O,I}var Ct="Expected a function";function G(e,n,r){var s=!0,v=!0;if(typeof e!="function")throw new TypeError(Ct);return de(r)&&(s="leading"in r?!!r.leading:s,v="trailing"in r?!!r.trailing:v),wt(e,n,{leading:s,maxWait:n,trailing:v})}const Y=qe("n-tabs"),fe={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]};var Et=Q({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:fe,setup(e){const n=ce(Y,null);return n||Ge("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return i("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}});const Rt=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},et(fe,["displayDirective"]));var J=Q({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Rt,setup(e){const{mergedClsPrefixRef:n,valueRef:r,typeRef:s,closableRef:v,tabStyleRef:x,tabChangeIdRef:c,onBeforeLeaveRef:o,triggerRef:g,handleAdd:m,activateTab:y,handleClose:p}=ce(Y);return{trigger:g,mergedClosable:H(()=>{if(e.internalAddable)return!1;const{closable:u}=e;return u===void 0?v.value:u}),style:x,clsPrefix:n,value:r,type:s,handleClose(u){u.stopPropagation(),!e.disabled&&p(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){m();return}const{name:u}=e,w=++c.id;if(u!==r.value){const{value:R}=o;R?Promise.resolve(R(e.name,r.value)).then(z=>{z&&c.id===w&&y(u)}):y(u)}}}},render(){const{internalAddable:e,clsPrefix:n,name:r,disabled:s,label:v,tab:x,value:c,mergedClosable:o,style:g,trigger:m,$slots:{default:y}}=this,p=v!=null?v:x;return i("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?i("div",{class:`${n}-tabs-tab-pad`}):null,i("div",Object.assign({key:r,"data-name":r,"data-disabled":s?!0:void 0},Ke({class:[`${n}-tabs-tab`,c===r&&`${n}-tabs-tab--active`,s&&`${n}-tabs-tab--disabled`,o&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`],onClick:m==="click"?this.activateTab:void 0,onMouseenter:m==="hover"?this.activateTab:void 0,style:e?void 0:g},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),i("span",{class:`${n}-tabs-tab__label`},e?i(Je,null,i("div",{class:`${n}-tabs-tab__height-placeholder`},"\xA0"),i(Qe,{clsPrefix:n},{default:()=>i(ut,null)})):y?y():typeof p=="object"?p:Ye(p!=null?p:r)),o&&this.type==="card"?i(Ze,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:s}):null))}}),Tt=f("tabs",`
 box-sizing: border-box;
 width: 100%;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[f("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[f("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[f("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[C("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),P("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),C("flex",[f("tabs-nav",{width:"100%"},[f("tabs-wrapper",{width:"100%"},[f("tabs-tab",{marginRight:0})])])]),f("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[E("prefix, suffix",`
 display: flex;
 align-items: center;
 `),E("prefix","padding-right: 16px;"),E("suffix","padding-left: 16px;")]),f("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[C("shadow-before",[P("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),C("shadow-after",[P("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),P("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),P("&::before",`
 left: 0;
 `),P("&::after",`
 right: 0;
 `)]),f("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),f("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),f("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),f("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[C("disabled",{cursor:"not-allowed"}),E("close",`
 margin-left: 8px;
 font-size: 14px;
 transition: color .3s var(--n-bezier);
 `),E("label",`
 display: flex;
 align-items: center;
 `)]),f("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[C("transition-disabled",`
 transition: none;
 `),C("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),f("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),f("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier),
 transform .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[P("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),P("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),P("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),P("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),f("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),C("line-type, bar-type",[f("tabs-tab",`
 font-weight: var(--n-tab-font-weight-active);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[P("&:hover",{color:"var(--n-tab-text-color-hover)"}),C("active",{color:"var(--n-tab-text-color-active)"}),C("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),f("tabs-nav",[C("line-type",[E("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),f("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),f("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),C("card-type",[E("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),f("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),f("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),f("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[C("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[E("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),tt("disabled",[P("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),C("closable","padding-right: 6px;"),C("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),C("disabled","color: var(--n-tab-text-color-disabled);")]),f("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")])])]);const St=Object.assign(Object.assign({},be.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]});var Wt=Q({name:"Tabs",props:St,setup(e,{slots:n}){var r,s,v,x;const{mergedClsPrefixRef:c,inlineThemeDisabled:o}=at(e),g=be("Tabs","-tabs",Tt,nt,e,c),m=_(null),y=_(null),p=_(null),u=_(null),w=_(null),R=_(!0),z=_(!0),l=re(e,["labelSize","size"]),T=re(e,["activeName","value"]),S=_((s=(r=T.value)!==null&&r!==void 0?r:e.defaultValue)!==null&&s!==void 0?s:n.default?(x=(v=X(n.default())[0])===null||v===void 0?void 0:v.props)===null||x===void 0?void 0:x.name:null),$=vt(T,S),O={id:0},I=H(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});rt($,()=>{O.id=0,L()});function h(){var t;const{value:a}=$;return a===null?null:(t=m.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function A(t){if(e.type==="card")return;const{value:a}=y;if(!!a&&t){const d=`${c.value}-tabs-bar--disabled`,{barWidth:b}=e;if(t.dataset.disabled==="true"?a.classList.add(d):a.classList.remove(d),b&&t.offsetWidth>=b){const B=Math.floor((t.offsetWidth-b)/2)+t.offsetLeft;a.style.left=`${B}px`,a.style.maxWidth=`${b}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px"}}function L(){if(e.type==="card")return;const t=h();t&&A(t)}const k=_(null);let V=0;function ue(){const t=k.value;if(t){V=t.getBoundingClientRect().height;const a=`${V}px`;t.style.height=a,t.style.maxHeight=a}}function ve(t){const a=k.value;if(a){const d=t.getBoundingClientRect().height;a.style.maxHeight=`${d}px`,a.style.height=`${Math.max(V,d)}px`}}function pe(){const t=k.value;t&&(t.style.maxHeight="",t.style.height="")}const Z={value:[]},ee=_("next");function he(t){const a=$.value;let d="next";for(const b of Z.value){if(b===a)break;if(b===t){d="prev";break}}ee.value=d,ge(t)}function ge(t){const{onActiveNameChange:a,onUpdateValue:d,"onUpdate:value":b}=e;a&&M(a,t),d&&M(d,t),b&&M(b,t),S.value=t}function me(t){const{onClose:a}=e;a&&M(a,t)}let xe=!0;const ye=G(function(){var a;const{type:d}=e;if((d==="line"||d==="bar")&&xe){const{value:b}=y;if(!b)return;const B=`${c.value}-tabs-bar--transition-disabled`;b.classList.add(B),L(),b.classList.remove(B)}d!=="segment"&&U((a=w.value)===null||a===void 0?void 0:a.$el)},64),D=_(!1);function we(t){var a;const{target:d,contentRect:{width:b}}=t,B=d.parentElement.offsetWidth;if(!D.value)B<b&&(D.value=!0);else{const{value:N}=u;if(!N)return;B-b>N.$el.offsetWidth&&(D.value=!1)}U((a=w.value)===null||a===void 0?void 0:a.$el)}const Ce=G(we,64);function Re(){const{onAdd:t}=e;t&&t(),lt(()=>{const a=h(),{value:d}=w;!a||!d||d.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function U(t){if(!t)return;const{scrollLeft:a,scrollWidth:d,offsetWidth:b}=t;R.value=a<=0,z.value=a+b>=d}const Te=G(t=>{U(t.target)},64);it(Y,{triggerRef:j(e,"trigger"),tabStyleRef:j(e,"tabStyle"),paneClassRef:j(e,"paneClass"),paneStyleRef:j(e,"paneStyle"),mergedClsPrefixRef:c,typeRef:j(e,"type"),closableRef:j(e,"closable"),valueRef:$,tabChangeIdRef:O,onBeforeLeaveRef:j(e,"onBeforeLeave"),activateTab:he,handleClose:me,handleAdd:Re}),pt(()=>{L()}),ot(()=>{const{value:t}=p;if(!t)return;const{value:a}=c,d=`${a}-tabs-nav-scroll-wrapper--shadow-before`,b=`${a}-tabs-nav-scroll-wrapper--shadow-after`;R.value?t.classList.remove(d):t.classList.add(d),z.value?t.classList.remove(b):t.classList.add(b)});const Se={syncBarPosition:()=>{L()}},te=H(()=>{const{value:t}=l,{type:a}=e,d={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],b=`${t}${d}`,{self:{barColor:B,closeColor:N,closeColorHover:ze,closeColorPressed:Pe,tabColor:$e,tabBorderColor:_e,paneTextColor:Ae,tabFontWeight:Le,tabBorderRadius:Be,tabFontWeightActive:Ee,colorSegment:We,fontWeightStrong:ke,tabColorSegment:je,[W("panePadding",t)]:Fe,[W("tabPadding",b)]:Ie,[W("tabGap",b)]:Oe,[W("tabTextColor",a)]:De,[W("tabTextColorActive",a)]:Ne,[W("tabTextColorHover",a)]:Me,[W("tabTextColorDisabled",a)]:He,[W("tabFontSize",t)]:Ve},common:{cubicBezierEaseInOut:Ue}}=g.value;return{"--n-bezier":Ue,"--n-color-segment":We,"--n-bar-color":B,"--n-tab-font-size":Ve,"--n-tab-text-color":De,"--n-tab-text-color-active":Ne,"--n-tab-text-color-disabled":He,"--n-tab-text-color-hover":Me,"--n-pane-text-color":Ae,"--n-tab-border-color":_e,"--n-tab-border-radius":Be,"--n-close-color":N,"--n-close-color-hover":ze,"--n-close-color-pressed":Pe,"--n-tab-color":$e,"--n-tab-font-weight":Le,"--n-tab-font-weight-active":Ee,"--n-tab-padding":Ie,"--n-tab-gap":Oe,"--n-pane-padding":Fe,"--n-font-weight-strong":ke,"--n-tab-color-segment":je}}),F=o?st("tabs",H(()=>`${l.value[0]}${e.type[0]}`),te,e):void 0;return Object.assign({mergedClsPrefix:c,mergedValue:$,renderedNames:new Set,tabsPaneWrapperRef:k,tabsElRef:m,barElRef:y,addTabInstRef:u,xScrollInstRef:w,scrollWrapperElRef:p,addTabFixed:D,tabWrapperStyle:I,handleNavResize:ye,mergedSize:l,handleScroll:Te,handleTabsResize:Ce,cssVars:o?void 0:te,themeClass:F==null?void 0:F.themeClass,animationDirection:ee,renderNameListRef:Z,onAnimationBeforeLeave:ue,onAnimationEnter:ve,onAnimationAfterEnter:pe,onRender:F==null?void 0:F.onRender},Se)},render(){const{mergedClsPrefix:e,type:n,addTabFixed:r,addable:s,mergedSize:v,renderNameListRef:x,onRender:c,$slots:{default:o,prefix:g,suffix:m}}=this;c==null||c();const y=o?X(o()).filter(l=>l.type.__TAB_PANE__===!0):[],p=o?X(o()).filter(l=>l.type.__TAB__===!0):[],u=!p.length,w=n==="card",R=n==="segment",z=!w&&!R&&this.justifyContent;return x.value=[],i("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${v}-size`,z&&`${e}-tabs--flex`],style:this.cssVars},i("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav`]},ae(g,l=>l&&i("div",{class:`${e}-tabs-nav__prefix`},l)),R?i("div",{class:`${e}-tabs-rail`},u?y.map((l,T)=>(x.value.push(l.props.name),i(J,Object.assign({},l.props,{internalCreatedByPane:!0,internalLeftPadded:T!==0}),l.children?{default:l.children.tab}:void 0))):p.map((l,T)=>(x.value.push(l.props.name),T===0?l:le(l)))):i(ne,{onResize:this.handleNavResize},{default:()=>i("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},i(ht,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:()=>{const l=i("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},z?null:i("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),u?y.map((S,$)=>(x.value.push(S.props.name),K(i(J,Object.assign({},S.props,{internalCreatedByPane:!0,internalLeftPadded:$!==0&&!z}),S.children?{default:S.children.tab}:void 0)))):p.map((S,$)=>(x.value.push(S.props.name),K($!==0&&!z?le(S):S))),!r&&s&&w?se(s,(u?y.length:p.length)!==0):null,z?null:i("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));let T=l;return w&&s&&(T=i(ne,{onResize:this.handleTabsResize},{default:()=>l})),i("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},T,w?i("div",{class:`${e}-tabs-pad`}):null,w?null:i("div",{ref:"barElRef",class:`${e}-tabs-bar`}))}}))}),r&&s&&w?se(s,!0):null,ae(m,l=>l&&i("div",{class:`${e}-tabs-nav__suffix`},l))),u&&(this.animated?i("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},oe(y,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):oe(y,this.mergedValue,this.renderedNames)))}});function oe(e,n,r,s,v,x,c){const o=[];return e.forEach(g=>{const{name:m,displayDirective:y,"display-directive":p}=g.props,u=R=>y===R||p===R,w=n===m;if(g.key!==void 0&&(g.key=m),w||u("show")||u("show:lazy")&&r.has(m)){r.has(m)||r.add(m);const R=!u("if");o.push(R?dt(g,[[ct,w]]):g)}}),c?i(bt,{name:`${c}-transition`,onBeforeLeave:s,onEnter:v,onAfterEnter:x},{default:()=>o}):o}function se(e,n){return i(J,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function le(e){const n=ft(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function K(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{J as N,Et as _,Wt as a};
