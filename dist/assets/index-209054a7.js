import{h as _,u as g,_ as w,w as b,o as N}from"./plugin-vue_export-helper-31939cfc.js";import{a5 as B}from"./index-66c3b01c.js";import{r as E,o as I,a as $,d as p,b as o,e as u,k as y,u as a,q as S,n as c,a4 as P,F as m,B as k,g as v,x as C,C as h,K as T}from"./runtime-core.esm-bundler-25b49e90.js";const z=(r,n=0)=>{if(n===0)return r;const s=E(!1);let t=0;const l=()=>{t&&clearTimeout(t),t=window.setTimeout(()=>{s.value=r.value},n)};return I(l),$(()=>r.value,e=>{e?l():s.value=e}),s},F=_({animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},loading:{type:Boolean,default:!0},throttle:{type:Number}}),L=_({variant:{type:String,values:["circle","rect","h1","h3","text","caption","p","image","button"],default:"text"}}),R=p({name:"ElSkeletonItem"}),V=p({...R,props:L,setup(r){const n=g("skeleton");return(s,t)=>(o(),u("div",{class:c([a(n).e("item"),a(n).e(s.variant)])},[s.variant==="image"?(o(),y(a(B),{key:0})):S("v-if",!0)],2))}});var i=w(V,[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton-item.vue"]]);const q=p({name:"ElSkeleton"}),H=p({...q,props:F,setup(r,{expose:n}){const s=r,t=g("skeleton"),l=z(P(s,"loading"),s.throttle);return n({uiLoading:l}),(e,M)=>a(l)?(o(),u("div",h({key:0,class:[a(t).b(),a(t).is("animated",e.animated)]},e.$attrs),[(o(!0),u(m,null,k(e.count,d=>(o(),u(m,{key:d},[e.loading?v(e.$slots,"template",{key:d},()=>[C(i,{class:c(a(t).is("first")),variant:"p"},null,8,["class"]),(o(!0),u(m,null,k(e.rows,f=>(o(),y(i,{key:f,class:c([a(t).e("paragraph"),a(t).is("last",f===e.rows&&e.rows>1)]),variant:"p"},null,8,["class"]))),128))]):S("v-if",!0)],64))),128))],16)):v(e.$slots,"default",T(h({key:1},e.$attrs)))}});var K=w(H,[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton.vue"]]);const G=b(K,{SkeletonItem:i}),J=N(i);export{G as E,J as a};
