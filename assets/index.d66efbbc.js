import{R as N}from"./RouterButton.da045cbd.js";import{S as h}from"./SpaceView.70eccce1.js";import b from"./Tabs.2cdcdd08.js";import{g as k,s as v}from"./decorate.cd6eaeb8.js";import{d as x,r as f,a as w,f as t,k as p,au as S,_ as B,cT as T,fn as C,m as a,es as L}from"./index.78c09cee.js";import{N as i}from"./Space.df1d9265.js";import{_ as z}from"./index.c8e95861.js";import{_ as d}from"./FormItem.e60f1735.js";import{_ as E}from"./Input.d62ae2d3.js";import{N as g}from"./Select.d28ef4cc.js";import{N as u}from"./a.73502112.js";import{N as F}from"./DataTable.bec52785.js";import{h as V}from"./Tag.9b989cfb.js";import{N as y}from"./Divider.b4cc6bcb.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Tabs.aa0eac50.js";import"./Add.ad5e1d51.js";import"./use-compitable.3d828e2e.js";import"./use-merged-state.c2667ee5.js";import"./toNumber.eeee2b3e.js";import"./on-fonts-ready.ae35f6df.js";import"./index.8c3a953a.js";import"./cssr.7e31f5cb.js";import"./light.e6bd6d56.js";import"./get.05c76103.js";import"./index.a288f029.js";import"./use-locale.c29a83eb.js";import"./index.31a54536.js";import"./utils.660e96e0.js";import"./VirtualList.02b97eb1.js";import"./next-frame-once.3f36dc6b.js";import"./Follower.d919f920.js";import"./happens-in.f44eb706.js";import"./Checkbox.2c370ad3.js";import"./RadioGroup.dac88e26.js";import"./Dropdown.27fcf2f4.js";import"./ChevronRight.f56fbeda.js";import"./use-keyboard.56e3994d.js";import"./Tooltip.32e62f75.js";import"./Pagination.6db75b25.js";import"./Forward.2f76308d.js";import"./light.8df066b9.js";var xt=x({name:"StorePage",setup(){const r=f({}),o=f(!1),s=w(),n=[{label:"\u5FAE\u9875\u9762",key:"page"}];async function c(){o.value=!0;try{r.value=await k(),console.log(r.value)}catch(e){console.log(e)}o.value=!1}c();async function _(e,l){try{await v(l),s.success("\u5E97\u94FA\u9996\u9875\u8BBE\u7F6E\u5B8C\u6210"),c()}catch(m){console.log(m),s.error("\u5E97\u94FA\u9996\u9875\u8BBE\u7F6E\u5931\u8D25")}}return{loading:o,columns:[{type:"selection"},{title:"\u6807\u9898",key:"title",width:"300px",render(e){return t("div",{class:"flex items-center"},[e.title,e.is_home?t(T,{class:"ml-2",color:"red",size:16},{default:()=>[t(C,null,null)]}):null])}},{title:"\u53D1\u5E03\u72B6\u6001",key:"status",render(e){return a(V,{size:"small",type:e.status?"success":"info"},{default:()=>e.status?"\u5DF2\u53D1\u5E03":"\u672A\u53D1\u5E03"})}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"created_at"},{title:"\u8BBF\u5BA2\u6570/\u6D4F\u89C8\u91CF",key:"views"},{title:"\u64CD\u4F5C",key:"action",width:"200px",render(e){return a(i,{},{default:()=>[a(L,{custom:!0,to:`/diy/decorate/${e.id}`},{default:({href:l,navigate:m})=>a(u,{href:l,onClick:m},{default:()=>"\u7F16\u8F91"})}),a(y,{vertical:!0,style:{margin:0}}),a(u,{onClick:l=>_(l,e.id)},{default:()=>"\u8BBE\u4E3A\u4E3B\u9875"}),a(y,{vertical:!0,style:{margin:0}}),a(u,{},{default:()=>"\u5220\u9664"})]})}}],pageLists:r,menuOptions:n}},render(){const{loading:r,columns:o,pageLists:s}=this;return t(h,{style:{paddingTop:0}},{default:()=>[t(i,{vertical:!0,size:[0,16]},{default:()=>[t(b,{defaultValue:"page"},null),t(i,null,{default:()=>[t(N,{target:"_blank",type:"primary",to:"/diy"},{default:()=>[p("\u65B0\u5EFA\u5FAE\u9875\u9762")]})]}),t(S,{embedded:!0,bordered:!1},{default:()=>[t(z,{labelPlacement:"left",labelWidth:70},{default:()=>[t(i,{size:[40,0]},{default:()=>[t(d,{label:"\u5FAE\u9875\u9762\u6807\u9898"},{default:()=>[t(E,{style:{width:"240px"}},null)]}),t(d,{label:"\u53D1\u5E03\u72B6\u6001"},{default:()=>[t(g,{style:{width:"200px"}},null)]}),t(d,{label:"\u5206\u7C7B"},{default:()=>[t(g,{style:{width:"200px"}},null)]})]}),t(i,{align:"center"},{default:()=>[t(B,{type:"primary",style:"margin-left: 70px;"},{default:()=>[p("\u7B5B\u9009")]}),t(u,null,{default:()=>[p("\u91CD\u7F6E\u7B5B\u9009\u6761\u4EF6")]})]})]})]}),t(F,{loading:r,rowKey:n=>n.id,data:s.data,columns:o},null)]})]})}});export{xt as default};
