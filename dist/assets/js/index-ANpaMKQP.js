import{g as p,_ as i}from"./index-4P4Bd9pT.js";import{c}from"./util-ZHfOb3Zw.js";import{d as m,r as d,v as f,ai as _,am as V,j as o,ak as a,aq as y,M as x,z as C}from"./chunk-libs-KvkTKWDQ.js";const g=m({setup(){const e=d({inputValue:"http://www.baidu.com"}),{$message:t}=p();async function n(){await c(e.inputValue)?t.success("复制成功"):t.error("复制失败")}return{...f(e),handleCopy:n}}});function k(e,t,n,s,w,$){const r=x,u=C;return _(),V("div",null,[o(u,{modelValue:e.inputValue,"onUpdate:modelValue":t[0]||(t[0]=l=>e.inputValue=l)},{suffix:a(()=>[o(r,{type:"primary",style:{"margin-right":"-11px"},onClick:e.handleCopy},{default:a(()=>[y(" 复制 ")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])])}const B=i(g,[["render",k]]);export{B as default};
