import{R as _}from"./RouterButton.da045cbd.js";import{d as f,r as l,at as g,o as y,e as v,w as e,f as a,j as s,k as C,m as i,es as k,au as N}from"./index.78c09cee.js";import{l as h}from"./group.455a86c7.js";import{S as F}from"./SpaceView.70eccce1.js";import{h as x}from"./Tag.9b989cfb.js";import{N as B}from"./a.73502112.js";import{N as b}from"./Space.df1d9265.js";import{N as w}from"./DataTable.bec52785.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./get.05c76103.js";import"./Follower.d919f920.js";import"./next-frame-once.3f36dc6b.js";import"./cssr.7e31f5cb.js";import"./on-fonts-ready.ae35f6df.js";import"./use-merged-state.c2667ee5.js";import"./use-compitable.3d828e2e.js";import"./light.8df066b9.js";import"./light.e6bd6d56.js";import"./Checkbox.2c370ad3.js";import"./RadioGroup.dac88e26.js";import"./Input.d62ae2d3.js";import"./use-locale.c29a83eb.js";import"./index.31a54536.js";import"./Dropdown.27fcf2f4.js";import"./index.a288f029.js";import"./ChevronRight.f56fbeda.js";import"./happens-in.f44eb706.js";import"./use-keyboard.56e3994d.js";import"./Tooltip.32e62f75.js";import"./VirtualList.02b97eb1.js";import"./utils.660e96e0.js";import"./Pagination.6db75b25.js";import"./Select.d28ef4cc.js";import"./Forward.2f76308d.js";const E=C(" \u65B0\u5EFA\u5546\u54C1\u5206\u7EC4 "),nt=f({setup(S){const o=l(!1),p=[{title:"\u5206\u7EC4\u540D\u79F0",key:"name"},{title:"\u5206\u7EC4\u522B\u540D",key:"alias",render(t){return i(x,{size:"small",type:"primary"},{default:()=>t.alias})}},{title:"\u5546\u54C1\u6570",key:"goods_count"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"created_at"},{title:"\u64CD\u4F5C",key:"actions",render(t){return i(k,{to:`/mall/group/${t.id}/edit`},{default:()=>i(B,{},{default:()=>"\u7F16\u8F91"})})}}],m=g({page:2,pageSize:5,showSizePicker:!0,onChange:t=>{m.page=t}}),r=l([]);async function n(){o.value=!0;try{r.value=await h({}),console.log(r.value)}catch(t){console.log(t)}o.value=!1}return n(),(t,z)=>{const u=b,c=w,d=N;return y(),v(s(F),null,{default:e(()=>[a(d,{size:"small"},{default:e(()=>[a(u,{vertical:"",class:"mb-3"},{default:e(()=>[a(u,null,{default:e(()=>[a(s(_),{to:"/mall/group/create",type:"primary"},{default:e(()=>[E]),_:1})]),_:1}),a(c,{ref:"table",columns:p,data:r.value,"single-line":!0,bordered:!1,loading:o.value},null,8,["data","loading"])]),_:1})]),_:1})]),_:1})}}});export{nt as default};