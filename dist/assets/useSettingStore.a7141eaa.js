var i=Object.defineProperty;var r=Object.getOwnPropertySymbols;var o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var s=(n,t,e)=>t in n?i(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,a=(n,t)=>{for(var e in t||(t={}))o.call(t,e)&&s(n,e,t[e]);if(r)for(var e of r(t))u.call(t,e)&&s(n,e,t[e]);return n};import{v as S,w as c}from"./index.65f8aa47.js";function h(){return S("setting",{state:()=>a({},c),actions:{change({key:n,value:t}){this.$state[n]=t}}})()}export{h as u};
