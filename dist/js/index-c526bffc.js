import{_,c as $}from"./index-28b7f4a5.js";import{av as d,aF as p,d as C,r as v,ah as x,au as n,aB as e,ax as o,az as c,aA as l,aK as u}from"./chunk-libs-c3002d95.js";const q={ref:"qrRef"};function F(t,i,f,m,g,h){return d(),p("canvas",q,null,512)}const b=_($,[["render",F]]),B="/admin-next-template/svg/logo-81f4abbc.svg",P=C({components:{ProQr:b},setup(){const t=v({qr1Config:{text:"http://www.baidu.com"},qr2Config:{text:"http://www.baidu.com",options:{color:{dark:"#43d08c"}}},qr3Config:{text:"http://www.baidu.com",logo:B}});return{...x(t)}}}),k=u("span",null,"基础示例",-1),A=u("span",null,"配置样式",-1),E=u("span",null,"集成图标",-1);function Q(t,i,f,m,g,h){const a=n("ProQr"),s=n("el-card"),r=n("el-col"),w=n("el-row");return d(),p("div",null,[e(w,{gutter:15},{default:o(()=>[e(r,{span:8},{default:o(()=>[e(s,null,{header:o(()=>[k]),default:o(()=>[e(a,c(l(t.qr1Config)),null,16)]),_:1})]),_:1}),e(r,{span:8},{default:o(()=>[e(s,null,{header:o(()=>[A]),default:o(()=>[e(a,c(l(t.qr2Config)),null,16)]),_:1})]),_:1}),e(r,{span:8},{default:o(()=>[e(s,null,{header:o(()=>[E]),default:o(()=>[e(a,c(l(t.qr3Config)),null,16)]),_:1})]),_:1})]),_:1})])}const N=_(P,[["render",Q]]);export{N as default};
