function a(t){if(typeof t=="number")return{"":t.toString()};const n={};return t.split(/ +/).forEach(f=>{if(f==="")return;const[u,e]=f.split(":");e===void 0?n[""]=u:n[u]=e}),n}function i(t,n){var f;if(t==null)return;const u=a(t);if(n===void 0)return u[""];if(typeof n=="string")return(f=u[n])!==null&&f!==void 0?f:u[""];if(Array.isArray(n)){for(let e=n.length-1;e>=0;--e){const r=n[e];if(r in u)return u[r]}return u[""]}else{let e,r=-1;return Object.keys(u).forEach(l=>{const s=Number(l);!Number.isNaN(s)&&n>=s&&s>=r&&(r=s,e=u[l])}),e}}export{a,i as p};
