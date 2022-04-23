import{d as K,m as s,B as V,C as M,D as x,R as k,cX as T,Y as me,y as ve,r as B,L as oe,c$ as he,aa as D,c_ as j,q as g,p as d,F as C,s as m,G as Z,d0 as pe,H as fe,I as te,d1 as ge,P as J,x as Q,a1 as H,V as xe}from"./index.78c09cee.js";import{N as be}from"./Dropdown.27fcf2f4.js";import{K as ze}from"./Tooltip.32e62f75.js";import{l as Ce}from"./interface.08cd48a1.js";import{e as ye}from"./Tag.9b989cfb.js";import{u as ee}from"./use-merged-state.c2667ee5.js";import{u as Ie}from"./use-compitable.3d828e2e.js";var we=K({name:"ChevronDownFilled",render(){return s("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});const O=V("n-menu"),_=V("n-submenu"),U=V("n-menu-item-group"),L=8;function G(e){const r=M(O),{props:n,mergedCollapsedRef:i}=r,l=M(_,null),h=M(U,null),u=x(()=>n.mode==="horizontal"),b=x(()=>u.value?n.dropdownPlacement:"tmNodes"in e?"right-start":"right"),f=x(()=>{var a;return Math.max((a=n.collapsedIconSize)!==null&&a!==void 0?a:n.iconSize,n.iconSize)}),y=x(()=>{var a;return!u.value&&e.root&&i.value&&(a=n.collapsedIconSize)!==null&&a!==void 0?a:n.iconSize}),N=x(()=>{if(u.value)return;const{collapsedWidth:a,indent:w,rootIndent:R}=n,{root:S,isGroup:A}=e,P=R===void 0?w:R;if(S)return i.value?a/2-f.value/2:P;if(h)return w/2+h.paddingLeftRef.value;if(l)return(A?w/2:w)+l.paddingLeftRef.value}),z=x(()=>{const{collapsedWidth:a,indent:w,rootIndent:R}=n,{value:S}=f,{root:A}=e;return u.value||!A||!i.value?L:(R===void 0?w:R)+S+L-(a+S)/2});return{dropdownPlacement:b,activeIconSize:y,maxIconSize:f,paddingLeft:N,iconMarginRight:z,NMenu:r,NSubmenu:l}}const q={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},ne=Object.assign(Object.assign({},q),{tmNodes:{type:Array,required:!0}}),Se=K({name:"MenuOptionGroup",props:ne,setup(e){k(_,null);const r=G(e);k(U,{paddingLeftRef:r.paddingLeft});const{mergedClsPrefixRef:n,props:i}=M(O);return function(){const{value:l}=n,h=r.paddingLeft.value;return s("div",{class:`${l}-menu-item-group`,role:"group"},s("span",{class:`${l}-menu-item-group-title`,style:h!==void 0?`padding-left: ${h}px;`:void 0},T(e.title),e.extra?s(me,null," ",T(e.extra)):null),s("div",null,e.tmNodes.map(u=>W(u,i))))}}});var re=K({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:r}=M(O);return{menuProps:r,style:x(()=>{const{paddingLeft:n}=e;return{paddingLeft:n&&`${n}px`}}),iconStyle:x(()=>{const{maxIconSize:n,activeIconSize:i,iconMarginRight:l}=e;return{width:`${n}px`,height:`${n}px`,fontSize:`${i}px`,marginRight:`${l}px`}})}},render(){const{clsPrefix:e,tmNode:r,menuProps:{renderIcon:n,renderLabel:i,renderExtra:l,expandIcon:h}}=this,u=n?n(r.rawNode):T(this.icon);return s("div",{onClick:this.onClick,role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},u&&s("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[u]),s("div",{class:`${e}-menu-item-content-header`,role:"none"},i?i(r.rawNode):T(this.title),this.extra||l?s("span",{class:`${e}-menu-item-content-header__extra`}," ",l?l(r.rawNode):T(this.extra)):null),this.showArrow?s(ve,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>h?h(r.rawNode):s(we,null)}):null)}});const ie=Object.assign(Object.assign({},q),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Re=K({name:"Submenu",props:ie,setup(e){const r=G(e),{NMenu:n,NSubmenu:i}=r,{props:l,mergedCollapsedRef:h,mergedThemeRef:u}=n,b=x(()=>{const{disabled:a}=e;return i!=null&&i.mergedDisabledRef.value||l.disabled?!0:a}),f=B(!1);k(_,{paddingLeftRef:r.paddingLeft,mergedDisabledRef:b}),k(U,null);function y(){const{onClick:a}=e;a&&a()}function N(){b.value||(h.value||n.toggleExpand(e.internalKey),y())}function z(a){f.value=a}return{menuProps:l,mergedTheme:u,doSelect:n.doSelect,inverted:n.invertedRef,isHorizontal:n.isHorizontalRef,mergedClsPrefix:n.mergedClsPrefixRef,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,iconMarginRight:r.iconMarginRight,dropdownPlacement:r.dropdownPlacement,dropdownShow:f,paddingLeft:r.paddingLeft,mergedDisabled:b,mergedValue:n.mergedValueRef,childActive:oe(()=>n.activePathRef.value.includes(e.internalKey)),collapsed:x(()=>l.mode==="horizontal"?!1:h.value?!0:!n.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:x(()=>!b.value&&(l.mode==="horizontal"||h.value)),handlePopoverShowChange:z,handleClick:N}},render(){var e;const{mergedClsPrefix:r,menuProps:{renderIcon:n,renderLabel:i}}=this,l=()=>{const{isHorizontal:u,paddingLeft:b,collapsed:f,mergedDisabled:y,maxIconSize:N,activeIconSize:z,title:a,childActive:w,icon:R,handleClick:S,dropdownShow:A,iconMarginRight:P,tmNode:$}=this;return s(re,{tmNode:$,paddingLeft:b,collapsed:f,disabled:y,iconMarginRight:P,maxIconSize:N,activeIconSize:z,title:a,showArrow:!u,childActive:w,clsPrefix:r,icon:R,hover:A,onClick:S})},h=()=>s(he,null,{default:()=>{const{tmNodes:u,collapsed:b}=this;return b?null:s("div",{class:`${r}-submenu-children`,role:"menu"},u.map(f=>W(f,this.menuProps)))}});return this.root?s(be,Object.assign({},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,size:"large",trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:n,renderLabel:i}),{default:()=>s("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),this.isHorizontal?null:h())}):s("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),h())}}),le=Object.assign(Object.assign({},q),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Ne=K({name:"MenuOption",props:le,setup(e){const r=G(e),{NSubmenu:n,NMenu:i}=r,{props:l,mergedClsPrefixRef:h,mergedCollapsedRef:u}=i,b=n?n.mergedDisabledRef:{value:!1},f=x(()=>b.value||e.disabled);function y(z){const{onClick:a}=e;a&&a(z)}function N(z){f.value||(i.doSelect(e.internalKey,e.tmNode.rawNode),y(z))}return{mergedClsPrefix:h,dropdownPlacement:r.dropdownPlacement,paddingLeft:r.paddingLeft,iconMarginRight:r.iconMarginRight,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,mergedTheme:i.mergedThemeRef,menuProps:l,dropdownEnabled:oe(()=>e.root&&u.value&&l.mode!=="horizontal"&&!f.value),selected:x(()=>i.mergedValueRef.value===e.internalKey),mergedDisabled:f,handleClick:N}},render(){const{mergedClsPrefix:e,mergedTheme:r,tmNode:n,menuProps:{renderLabel:i}}=this;return s("div",{role:"menuitem",class:[`${e}-menu-item`]},s(ze,{theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>i?i(n.rawNode):T(this.title),trigger:()=>s(re,{tmNode:n,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}});var Ae=K({name:"MenuDivider",setup(){const e=M(O),{mergedClsPrefixRef:r,isHorizontalRef:n}=e;return()=>n.value?null:s("div",{class:`${r.value}-menu-divider`})}});const Pe=D(ne),He=D(le),Me=D(ie);function Ke(e){return e.type==="divider"||e.type==="render"}function Ee(e){return e.type==="divider"}function W(e,r){const{rawNode:n}=e;if(Ke(n))return Ee(n)?s(Ae,Object.assign({key:e.key},n.props)):void 0;const{labelField:i}=r,{key:l,level:h,isGroup:u}=e,b=Object.assign(Object.assign({},n),{title:n.title||n[i],extra:n.titleExtra||n.extra,key:l,internalKey:l,level:h,root:h===0,isGroup:u});return e.children?e.isGroup?s(Se,j(b,Pe,{tmNodes:e.children,key:l})):s(Re,j(b,Me,{key:l,rawNodes:n[r.childrenField],tmNodes:e.children,tmNode:e})):s(Ne,j(b,He,{key:l,tmNode:e}))}var Te=g([d("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[C("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[d("submenu","margin: 0;"),d("menu-item","margin: 0;"),d("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[g("&::before","display: none;"),C("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),d("menu-item-content",[C("selected",[m("icon","color: var(--n-item-icon-color-active-horizontal);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[g("a","color: var(--n-item-text-color-active-horizontal);"),m("extra","color: var(--n-item-text-color-active-horizontal);")])]),C("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[d("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[g("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),m("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),Z("disabled",[C("selected, child-active",[F(null,[m("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[g("a","color: var(--n-item-text-color-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),F("border-bottom: 2px solid var(--n-border-color-horizontal);",[m("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),d("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[g("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])])]),d("menu-item-content-header",[g("a","color: var(--n-item-text-color-horizontal);")])])]),C("collapsed",[d("menu-item",[C("selected",[g("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)])]),d("menu-item-content",[d("menu-item-content-header","opacity: 0;"),m("arrow","opacity: 0;"),m("icon","color: var(--n-item-icon-color-collapsed);")])]),d("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),d("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[g("> *","z-index: 1;"),g("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),C("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),C("collapsed",[m("arrow","transform: rotate(0);")]),C("selected",[g("&::before","background-color: var(--n-item-color-active);"),m("arrow","color: var(--n-arrow-color-active);"),m("icon","color: var(--n-item-icon-color-active);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[g("a","color: var(--n-item-text-color-active);"),m("extra","color: var(--n-item-text-color-active);")])]),C("child-active",[d("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[g("a",`
 color: var(--n-item-text-color-child-active);
 `),m("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),m("arrow",`
 color: var(--n-arrow-color-child-active);
 `),m("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),Z("disabled",[C("selected, child-active",[F(null,[m("arrow","color: var(--n-arrow-color-active-hover);"),m("icon","color: var(--n-item-icon-color-active-hover);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[g("a","color: var(--n-item-text-color-active-hover);"),m("extra","color: var(--n-item-text-color-active-hover);")])])]),C("selected",[F(null,[g("&::before","background-color: var(--n-item-color-active-hover);")])]),F(null,[g("&::before","background-color: var(--n-item-color-hover);"),m("arrow",`
 color: var(--n-arrow-color-hover);
 `),m("icon",`
 color: var(--n-item-icon-color-hover);
 `),d("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[g("a",`
 color: var(--n-item-text-color-hover);
 `),m("extra",`
 color: var(--n-item-text-color-hover);
 `)])])]),m("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),m("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),d("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[g("a",`
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[g("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),m("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),d("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[d("menu-item-content",`
 height: var(--n-item-height);
 `),d("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[pe({duration:".2s"})])]),d("menu-item-group",[d("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),d("menu-tooltip",[g("a",`
 color: inherit;
 text-decoration: none;
 `)]),d("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function F(e,r){return[C("hover",e,r),g("&:hover",e,r)]}const Fe=Object.assign(Object.assign({},te.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownPlacement:{type:String,default:"bottom"},dropdownProps:Object,accordion:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array});var De=K({name:"Menu",props:Fe,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=fe(e),i=te("Menu","-menu",Te,ge,e,r),l=M(Ce,null),h=x(()=>{var c;const{collapsed:v}=e;if(v!==void 0)return v;if(l){const{collapseModeRef:o,collapsedRef:p}=l;if(o.value==="width")return(c=p.value)!==null&&c!==void 0?c:!1}return!1}),u=x(()=>{const{keyField:c,childrenField:v}=e;return ye(e.items||e.options,{getChildren(o){return o[v]},getKey(o){var p;return(p=o[c])!==null&&p!==void 0?p:o.name}})}),b=x(()=>new Set(u.value.treeNodes.map(c=>c.key))),{watchProps:f}=e,y=B(null);f!=null&&f.includes("defaultValue")?J(()=>{y.value=e.defaultValue}):y.value=e.defaultValue;const N=Q(e,"value"),z=ee(N,y),a=B([]),w=()=>{a.value=e.defaultExpandAll?u.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||u.value.getPath(z.value,{includeSelf:!1}).keyPath};f!=null&&f.includes("defaultExpandedKeys")?J(w):w();const R=Ie(e,["expandedNames","expandedKeys"]),S=ee(R,a),A=x(()=>u.value.treeNodes),P=x(()=>u.value.getPath(z.value).keyPath);k(O,{props:e,mergedCollapsedRef:h,mergedThemeRef:i,mergedValueRef:z,mergedExpandedKeysRef:S,activePathRef:P,mergedClsPrefixRef:r,isHorizontalRef:x(()=>e.mode==="horizontal"),invertedRef:Q(e,"inverted"),doSelect:$,toggleExpand:ae});function $(c,v){const{"onUpdate:value":o,onUpdateValue:p,onSelect:I}=e;p&&H(p,c,v),o&&H(o,c,v),I&&H(I,c,v),y.value=c}function X(c){const{"onUpdate:expandedKeys":v,onUpdateExpandedKeys:o,onExpandedNamesChange:p,onOpenNamesChange:I}=e;v&&H(v,c),o&&H(o,c),p&&H(p,c),I&&H(I,c),a.value=c}function ae(c){const v=Array.from(S.value),o=v.findIndex(p=>p===c);if(~o)v.splice(o,1);else{if(e.accordion&&b.value.has(c)){const p=v.findIndex(I=>b.value.has(I));p>-1&&v.splice(p,1)}v.push(c)}X(v)}const ce=c=>{const v=u.value.getPath(c!=null?c:z.value,{includeSelf:!1}).keyPath;if(!v.length)return;const o=Array.from(S.value),p=new Set([...o,...v]);e.accordion&&b.value.forEach(I=>{p.has(I)&&!v.includes(I)&&p.delete(I)}),X(Array.from(p))},Y=x(()=>{const{inverted:c}=e,{common:{cubicBezierEaseInOut:v},self:o}=i.value,{borderRadius:p,borderColorHorizontal:I,fontSize:de,itemHeight:se,dividerColor:ue}=o,t={"--n-divider-color":ue,"--n-bezier":v,"--n-font-size":de,"--n-border-color-horizontal":I,"--n-border-radius":p,"--n-item-height":se};return c?(t["--n-group-text-color"]=o.groupTextColorInverted,t["--n-color"]=o.colorInverted,t["--n-item-text-color"]=o.itemTextColorInverted,t["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,t["--n-item-text-color-active"]=o.itemTextColorActiveInverted,t["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,t["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,t["--n-item-icon-color"]=o.itemIconColorInverted,t["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,t["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,t["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,t["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,t["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,t["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,t["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,t["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,t["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,t["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,t["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,t["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,t["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,t["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,t["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,t["--n-arrow-color"]=o.arrowColorInverted,t["--n-arrow-color-hover"]=o.arrowColorHoverInverted,t["--n-arrow-color-active"]=o.arrowColorActiveInverted,t["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,t["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,t["--n-item-color-hover"]=o.itemColorHoverInverted,t["--n-item-color-active"]=o.itemColorActiveInverted,t["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,t["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(t["--n-group-text-color"]=o.groupTextColor,t["--n-color"]=o.color,t["--n-item-text-color"]=o.itemTextColor,t["--n-item-text-color-hover"]=o.itemTextColorHover,t["--n-item-text-color-active"]=o.itemTextColorActive,t["--n-item-text-color-child-active"]=o.itemTextColorChildActive,t["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,t["--n-item-icon-color"]=o.itemIconColor,t["--n-item-icon-color-hover"]=o.itemIconColorHover,t["--n-item-icon-color-active"]=o.itemIconColorActive,t["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,t["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,t["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,t["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,t["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,t["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,t["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,t["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,t["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,t["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,t["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,t["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,t["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,t["--n-arrow-color"]=o.arrowColor,t["--n-arrow-color-hover"]=o.arrowColorHover,t["--n-arrow-color-active"]=o.arrowColorActive,t["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,t["--n-arrow-color-child-active"]=o.arrowColorChildActive,t["--n-item-color-hover"]=o.itemColorHover,t["--n-item-color-active"]=o.itemColorActive,t["--n-item-color-active-hover"]=o.itemColorActiveHover,t["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),t}),E=n?xe("menu",x(()=>e.inverted?"a":"b"),Y,e):void 0;return{mergedClsPrefix:r,controlledExpandedKeys:R,uncontrolledExpanededKeys:a,mergedExpandedKeys:S,uncontrolledValue:y,mergedValue:z,activePath:P,tmNodes:A,mergedTheme:i,mergedCollapsed:h,cssVars:n?void 0:Y,themeClass:E==null?void 0:E.themeClass,onRender:E==null?void 0:E.onRender,showOption:ce}},render(){const{mergedClsPrefix:e,mode:r,themeClass:n,onRender:i}=this;return i==null||i(),s("div",{role:r==="horizontal"?"menubar":"menu",class:[`${e}-menu`,n,`${e}-menu--${r}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(l=>W(l,this.$props)))}});export{De as N};
