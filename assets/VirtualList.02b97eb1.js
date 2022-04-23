import{d as V,m as b,dz as P,M as $,by as D,D as w,r as R,L as K,aB as N,aw as x,az as q,Z as H}from"./index.78c09cee.js";import{c as C,a as M}from"./cssr.7e31f5cb.js";import{b as G}from"./next-frame-once.3f36dc6b.js";var ee=V({props:{onFocus:Function,onBlur:Function},setup(i){return()=>b("div",{style:"width: 0; height: 0",tabindex:0,onFocus:i.onFocus,onBlur:i.onBlur})}});function O(i){return i&-i}class U{constructor(n,o){this.l=n,this.min=o;const s=new Array(n+1);for(let l=0;l<n+1;++l)s[l]=0;this.ft=s}add(n,o){if(o===0)return;const{l:s,ft:l}=this;for(n+=1;n<=s;)l[n]+=o,n+=O(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===0)return 0;const{ft:o,min:s,l}=this;if(n===void 0&&(n=l),n>l)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let f=n*s;for(;n>0;)f+=o[n],n-=O(n);return f}getBound(n){let o=0,s=this.l;for(;s>o;){const l=Math.floor((o+s)/2),f=this.sum(l);if(f>n){s=l;continue}else if(f<n){if(o===l)return this.sum(o+1)<=n?o+1:l;o=l}else return l}return o}}const X=M(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[M("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[M("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]);var te=V({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(i){const n=P();X.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:C,ssr:n}),$(()=>{const{defaultScrollIndex:e,defaultScrollKey:t}=i;e!=null?I({index:e}):t!=null&&I({key:t})}),D(()=>{I({top:y.value})});const o=w(()=>{const e=new Map,{keyField:t}=i;return i.items.forEach((a,r)=>{e.set(a[t],r)}),e}),s=R(null),l=R(void 0),f=new Map,m=w(()=>{const{items:e,itemSize:t,keyField:a}=i,r=new U(e.length,t);return e.forEach((c,d)=>{const u=c[a],h=f.get(u);h!==void 0&&r.add(d,h)}),r}),v=R(0),y=R(0),g=K(()=>Math.max(m.value.getBound(y.value-N(i.paddingTop))-1,0)),z=w(()=>{const{value:e}=l;if(e===void 0)return[];const{items:t,itemSize:a}=i,r=g.value,c=Math.min(r+Math.ceil(e/a+1),t.length-1),d=[];for(let u=r;u<=c;++u)d.push(t[u]);return d}),I=e=>{const{left:t,top:a,index:r,key:c,position:d,behavior:u,debounce:h=!0}=e;if(t!==void 0||a!==void 0)k(t,a,u);else if(r!==void 0)E(r,u,h);else if(c!==void 0){const S=o.value.get(c);S!==void 0&&E(S,u,h)}else d==="bottom"?k(0,Number.MAX_SAFE_INTEGER,u):d==="top"&&k(0,0,u)};function E(e,t,a){const{value:r}=m,c=r.sum(e)+N(i.paddingTop);if(!a)s.value.scrollTo({left:0,top:c,behavior:t});else{const{scrollTop:d,offsetHeight:u}=s.value;if(c>d){const h=r.get(e);c+h<=d+u||s.value.scrollTo({left:0,top:c+h-u,behavior:t})}else s.value.scrollTo({left:0,top:c,behavior:t})}p=e}function k(e,t,a){s.value.scrollTo({left:e,top:t,behavior:a})}function _(e,t){var a,r,c,d;if(i.ignoreItemResize||A(t.target))return;const{value:u}=m,h=o.value.get(e),S=u.get(h),T=(c=(r=(a=t.borderBoxSize)===null||a===void 0?void 0:a[0])===null||r===void 0?void 0:r.blockSize)!==null&&c!==void 0?c:t.contentRect.height;if(T===S)return;T-i.itemSize===0?f.delete(e):f.set(e,T-i.itemSize);const B=T-S;B!==0&&(F!==void 0&&h<=F&&((d=s.value)===null||d===void 0||d.scrollBy(0,B)),u.add(h,B),v.value++)}function L(e){G(j);const{onScroll:t}=i;t!==void 0&&t(e)}function W(e){if(A(e.target)||e.contentRect.height===l.value)return;l.value=e.contentRect.height;const{onResize:t}=i;t!==void 0&&t(e)}let p,F;function j(){const{value:e}=s;e!=null&&(F=p!=null?p:g.value,p=void 0,y.value=s.value.scrollTop)}function A(e){let t=e;for(;t!==null;){if(t.style.display==="none")return!0;t=t.parentElement}return!1}return{listHeight:l,listStyle:{overflow:"auto"},keyToIndex:o,itemsStyle:w(()=>{const{itemResizable:e}=i,t=x(m.value.sum());return v.value,[i.itemsStyle,{boxSizing:"content-box",height:e?"":t,minHeight:e?t:"",paddingTop:x(i.paddingTop),paddingBottom:x(i.paddingBottom)}]}),visibleItemsStyle:w(()=>(v.value,{transform:`translateY(${x(m.value.sum(g.value))})`})),viewportItems:z,listElRef:s,itemsElRef:R(null),scrollTo:I,handleListResize:W,handleListScroll:L,handleItemResize:_}},render(){const{itemResizable:i,keyField:n,keyToIndex:o,visibleItemsTag:s}=this;return b(H,{onResize:this.handleListResize},{default:()=>{var l,f;return b("div",q(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.onWheel,ref:"listElRef"}),[this.items.length!==0?b("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[b(s,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(m=>{const v=m[n],y=o.get(v),g=this.$slots.default({item:m,index:y})[0];return i?b(H,{key:v,onResize:z=>this.handleItemResize(v,z)},{default:()=>g}):(g.key=v,g)})})]):(f=(l=this.$slots).empty)===null||f===void 0?void 0:f.call(l)])}})}});export{ee as F,te as V};
