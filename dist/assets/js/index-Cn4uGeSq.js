import{g as p,c,_ as i}from"./index-BVy1FSbd.js";import{d as m,r as d,v as f,am as _,aq as V,j as a,ao as o,av as y,V as x,z as C}from"./chunk-libs-DtgR5I1o.js";const g=m({setup(){const e=d({inputValue:"http://www.baidu.com"}),{$message:t}=p();async function n(){await c(e.inputValue)?t.success("复制成功"):t.error("复制失败")}return{...f(e),handleCopy:n}}});function w(e,t,n,s,$,h){const u=x,l=C;return _(),V("div",null,[a(l,{modelValue:e.inputValue,"onUpdate:modelValue":t[0]||(t[0]=r=>e.inputValue=r)},{suffix:o(()=>[a(u,{type:"primary",style:{"margin-right":"-11px"},onClick:e.handleCopy},{default:o(()=>[y(" 复制 ")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])])}const E=i(g,[["render",w]]);export{E as default};
