import{C as s,S as i}from"./index.69761d11.js";import{d as r,r as l,o as u,b as t,af as c,j as d,ag as v,ah as f,ai as x,aj as b}from"./vendor.8caec6d0.js";const C="view__bk1iL",m="cardContent__tnLfI",p="text__2ezCG",w="icon__1ECP8";var a={view:C,cardContent:m,text:p,icon:w};function g(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!d(e)}var j=r({name:"AnalysisView",setup(){const e=l(!1),n=l([{title:"\u8BBF\u95EE\u6570",subText:"\u6708",subColor:"blue",valPrefix:"\uFFE5",valNum:2e3,icon:"view-visit-count"},{title:"\u6210\u4EA4\u989D",subText:"\u6708",subColor:"green",valPrefix:"\uFFE5",valNum:2e3,icon:"view-total-sales"},{title:"\u4E0B\u8F7D\u6570",subText:"\u5468",subColor:"blue",valPrefix:"",valNum:2e3,icon:"view-download-count"},{title:"\u6210\u4EA4\u6570",subText:"\u5E74",subColor:"green",valPrefix:"",valNum:2e3,icon:"view-transaction"}]);function o(){e.value=!0,setTimeout(()=>{e.value=!1},1500)}return u(()=>{o()}),{loading:e,list:n}},render(){let e;const n=o=>t(v,{span:6},{default:()=>[t(f,{title:o.title,size:"small"},{extra:()=>t(x,{color:o.subColor},{default:()=>[o.subText]}),default:()=>t(b,{loading:this.loading,active:!0},{default:()=>[t("div",{class:a.cardContent},[t(s,{class:a.text,prefix:o.valPrefix,endVal:o.valNum},null),t(i,{class:a.icon,name:o.icon},null)])]})})]});return t("div",{class:a.view},[t(c,{gutter:10},g(e=this.list.map(n))?e:{default:()=>[e]})])}});export{j as default};
