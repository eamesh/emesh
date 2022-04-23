import{q as S,p as c,eI as R,F as w,d as y,H as _,I as C,ei as k,D as f,aw as T,T as $,V,m,A as B,a8 as N,f as n,b as D,r as d,R as I,c7 as P,cq as j,_ as z,k as x}from"./index.78c09cee.js";import{S as W}from"./SpaceView.70eccce1.js";import A from"./base.5a343059.js";import{g as E}from"./goods.46df7371.js";import{g as O}from"./goods.a25341f2.js";import{u as H}from"./use-compitable.3d828e2e.js";import{_ as K}from"./LayoutFooter.d42b17af.js";import{N as q}from"./Space.df1d9265.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./TitleDivider.a3e8ca71.js";import"./text.70ab020c.js";import"./types.a5dce7d2.js";import"./entity.ba077857.js";import"./base.0b561946.js";import"./FormItem.03d633ee.js";import"./index.c8e95861.js";import"./index.c7bfc907.js";import"./vue.runtime.esm-bundler.831b3aa7.js";import"./on-fonts-ready.ae35f6df.js";import"./use-merged-state.c2667ee5.js";import"./use-breakpoints.4d1d91ba.js";import"./use-keyboard.56e3994d.js";import"./index.31a54536.js";import"./next-frame-once.3f36dc6b.js";import"./happens-in.f44eb706.js";import"./responsive.3b03a350.js";import"./get.05c76103.js";import"./UploadVideo.386c3299.js";import"./Image.74f11219.js";import"./light.4ca07ad7.js";import"./use-locale.c29a83eb.js";import"./Tooltip.32e62f75.js";import"./Tag.9b989cfb.js";import"./Follower.d919f920.js";import"./cssr.7e31f5cb.js";import"./light.8df066b9.js";import"./Input.d62ae2d3.js";import"./Menu.c43a6a15.js";import"./Dropdown.27fcf2f4.js";import"./index.a288f029.js";import"./ChevronRight.f56fbeda.js";import"./interface.08cd48a1.js";import"./a.4fd84402.js";import"./Grid.2d03393b.js";import"./index.8c3a953a.js";import"./VirtualList.02b97eb1.js";import"./utils.660e96e0.js";import"./Select.d28ef4cc.js";import"./Upload.a9897365.js";import"./Add.ad5e1d51.js";import"./FormItem.e60f1735.js";import"./RadioGroup.dac88e26.js";import"./Divider.b4cc6bcb.js";import"./Pagination.6db75b25.js";import"./Forward.2f76308d.js";import"./group.455a86c7.js";import"./DynamicTags.33a4a9b7.js";import"./light.d72ed5cc.js";import"./light.e6bd6d56.js";import"./data.61f7fb91.js";import"./Checkbox.2c370ad3.js";import"./DataTable.bec52785.js";import"./p.b34469bb.js";import"./isNumber.f50198c7.js";import"./Switch.ab63ceef.js";import"./light.dd2251a5.js";import"./InputNumber.0ca9e3eb.js";import"./light.48abd972.js";import"./delivery.1744d940.js";import"./other.ef060116.js";import"./DatePicker.263d4db8.js";import"./TimePicker.fc269c33.js";import"./virtual.99c324fa.js";import"./card.8dccf65a.js";import"./Tabs.aa0eac50.js";import"./toNumber.eeee2b3e.js";import"./light.2fd34146.js";var F=S([S("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),c("spin-container",{position:"relative"},[c("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[R()])]),c("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),c("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[w("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),c("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),c("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[w("spinning",`
 user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]);const G={small:20,medium:18,large:16},L=Object.assign(Object.assign({},C.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}});var M=y({name:"Spin",props:L,setup(i){const{mergedClsPrefixRef:s,inlineThemeDisabled:t}=_(i),o=C("Spin","-spin",F,k,i,s),r=f(()=>{const{size:e}=i,{common:{cubicBezierEaseInOut:l},self:u}=o.value,{opacitySpinning:v,color:g,textColor:p}=u,h=typeof e=="number"?T(e):u[$("size",e)];return{"--n-bezier":l,"--n-opacity-spinning":v,"--n-size":h,"--n-color":g,"--n-text-color":p}}),a=t?V("spin",f(()=>{const{size:e}=i;return typeof e=="number"?String(e):e[0]}),r,i):void 0;return{mergedClsPrefix:s,compitableShow:H(i,["spinning","show"]),mergedStrokeWidth:f(()=>{const{strokeWidth:e}=i;if(e!==void 0)return e;const{size:l}=i;return G[typeof l=="number"?"medium":l]}),cssVars:t?void 0:r,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var i,s;const{$slots:t,mergedClsPrefix:o,description:r}=this,a=t.icon&&this.rotate,e=(r||t.description)&&m("div",{class:`${o}-spin-description`},r||((i=t.description)===null||i===void 0?void 0:i.call(t))),l=t.icon?m("div",{class:[`${o}-spin-body`,this.themeClass]},m("div",{class:[`${o}-spin`,a&&`${o}-spin--rotate`],style:t.default?"":this.cssVars},t.icon()),e):m("div",{class:[`${o}-spin-body`,this.themeClass]},m(B,{clsPrefix:o,style:t.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${o}-spin`}),e);return(s=this.onRender)===null||s===void 0||s.call(this),t.default?m("div",{class:[`${o}-spin-container`,this.themeClass],style:this.cssVars},m("div",{class:[`${o}-spin-content`,this.compitableShow&&`${o}-spin-content--spinning`]},t),m(N,{name:"fade-in-transition"},{default:()=>this.compitableShow?l:null})):l}});var X=y({name:"SpinView",render(){return n("div",{class:"spin-view"},[n(M,{size:"small"},null)])}});var ye=y({name:"Goods",setup(){const i=D(),s=d(),t=d(!1),o=d(!1),r=d({}),a=()=>{const p=parseInt(s.value.tabRef)+1;s.value.tabRef=(p>1?0:p).toString(),console.log(s.value.tabRef)},{params:{id:e}}=i;function l(){return new Promise(async(p,h)=>{try{r.value=await E(e),console.log(r.value),console.log("\u8BBE\u7F6E\u5546\u54C1Type"),s.value.handleTypeTrigger(r.value.type),p(!0)}catch(b){console.log(b),h(b)}})}const u=f(()=>(console.log(e),!!e));async function v(){t.value=!0;try{await s.value.submit()}catch(p){console.log(p)}t.value=!1}async function g(){o.value=!0,t.value=!0,console.log("\u83B7\u53D6\u5546\u54C1id:",e),await l(),o.value=!1,t.value=!1}return e&&g(),I(O,{goodsModelRef:r,isAction:u}),{baseRef:s,submit:v,next:a,loading:t,showSpin:o}},render(){const{submit:i,next:s,loading:t}=this;return n("div",{class:"goods-action"},[n(W,null,{default:()=>[this.showSpin&&n(X,null,null),P(n("div",null,[n(A,{ref:"baseRef"},null),n(K,{position:"absolute",bordered:!0},{default:()=>[n("div",{class:"goods-action__footer"},[n(q,{justify:"space-around",size:"large"},{default:()=>[n(z,{type:"success",onClick:i,loading:t},{default:()=>[x("\u4FDD\u5B58")]}),n(z,{secondary:!0,onClick:s},{default:()=>[x("\u4E0B\u4E00\u6B65")]})]})])]})]),[[j,!this.showSpin]])]})])}});export{ye as default};
