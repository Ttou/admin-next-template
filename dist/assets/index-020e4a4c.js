import{t as x}from"./index.common-402e5511.js";import{d as f,r as h,w as C,o as E,x as t,O as q,$ as v,t as r}from"./runtime-core.esm-bundler-487be079.js";import"./index-bc9ac8d3.js";import{a as b,E as l}from"./index-08abd008.js";import{E as u}from"./index-9b25b758.js";import"./index-f403bd98.js";import"./index-deddad90.js";import"./dayjs.min-9b18d6c6.js";import"./vue-router-cbdf6480.js";import"./ajax-7ef056e0.js";import"./plugin-vue_export-helper-f8bac1eb.js";import"./isObjectLike-46b91259.js";const F=()=>({text:{type:String,default:"",required:!0},logo:{type:String,default:""},options:{type:Object,default:()=>({})}}),s=f({name:"ProQr",props:F(),setup(e){const o=h(null);function p(){const a=new Image;a.src=e.logo,a.onload=()=>{const d=o.value.getContext("2d");d.imageSmoothingEnabled=!1;const n=o.value.clientWidth,c=n/4,m=n/4,g=(n-c)/2,w=(n-m)/2;d.drawImage(a,g,w,c,m)}}async function i(){await x(o.value,e.text,e.options),e.logo&&p()}return C(()=>e.text,()=>{i()}),E(()=>{i()}),{qrEl:o}},render(){return t("canvas",{ref:"qrEl"},null)}}),y="/admin-next-template/assets/logo-81f4abbc.svg",B=f({name:"DemoQRCode",setup(){const e=q({qr1Config:{text:"http://www.baidu.com"},qr2Config:{text:"http://www.baidu.com",options:{color:{dark:"#43d08c"}}},qr3Config:{text:"http://www.baidu.com",logo:y}});return{...v(e)}},render(){return t("div",null,[t(b,{gutter:15},{default:()=>[t(l,{span:8},{default:()=>[t(u,null,{header:()=>t("span",null,[r("基础示例")]),default:()=>t(s,this.qr1Config,null)})]}),t(l,{span:8},{default:()=>[t(u,null,{header:()=>t("span",null,[r("配置样式")]),default:()=>t(s,this.qr2Config,null)})]}),t(l,{span:8},{default:()=>[t(u,null,{header:()=>t("span",null,[r("集成图标")]),default:()=>t(s,this.qr3Config,null)})]})]})])}});export{B as default};
