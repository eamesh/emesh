import{eH as e}from"./index.78c09cee.js";const s=t=>e.request({url:"/mall/goods",method:"POST",data:t}),u=(t,o)=>e.request({url:`/mall/goods/${t}`,method:"PUT",data:o}),a=(t={})=>e.request({url:"/mall/goods",method:"GET",params:t}),l=t=>e.request({url:`/mall/goods/${t}`,method:"GET"});export{a,s as c,l as g,u};