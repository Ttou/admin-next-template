import{d as u,az as c,r as p,E as d,aA as _,aB as f,aC as h,aD as m,aE as g,aF as y,aG as v,aH as C,aI as x,aJ as E,n as F,p as $,q as B,B as a,al as s,z as o,av as S,aw as w,ax as A,ay as b,s as l}from"./chunk-libs-0a2e70b5.js";import{_ as V}from"./index-38c72e58.js";_([f,h,m,g,y,v,C,x,E]);const k=u({components:{VChart:c},setup(){const e=p({lineConfig:{option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:"line"}]}},barConfig:{option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}]}},scatterConfig:{option:{xAxis:{},yAxis:{},series:[{symbolSize:20,data:[[10,8.04],[8.07,6.95],[13,7.58],[9.05,8.81],[11,8.33],[14,7.66],[13.4,6.81],[10,6.33],[14,8.96],[12.5,6.82],[9.15,7.2],[11.5,7.2],[3.03,4.23],[12.2,7.83],[2.02,4.47],[1.05,3.33],[4.05,4.96],[6.03,7.24],[12,6.26],[12,8.84],[7.08,5.82],[5.02,5.68]],type:"scatter"}]}},pieConfig:{option:{title:{text:"Referer of a Website",subtext:"Fake Data",left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"Access From",type:"pie",radius:"50%",data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}});return{...d(e)}}});const i=e=>(A("data-v-7919408a"),e=e(),b(),e),I={class:"view"},T=i(()=>l("h3",null,"折线图",-1)),z=i(()=>l("h3",null,"柱状图",-1)),D=i(()=>l("h3",null,"散点图",-1)),R=i(()=>l("h3",null,"面积图",-1));function W(e,M,N,q,G,H){const t=S,n=F("VChart"),r=w;return $(),B("div",I,[a(r,{gutter:20},{default:s(()=>[a(t,{span:1}),a(t,{span:10},{default:s(()=>[T,a(n,o({class:"chart"},e.lineConfig),null,16)]),_:1}),a(t,{span:2}),a(t,{span:10},{default:s(()=>[z,a(n,o({class:"chart"},e.barConfig),null,16)]),_:1}),a(t,{span:1})]),_:1}),a(r,{gutter:20},{default:s(()=>[a(t,{span:1}),a(t,{span:10},{default:s(()=>[D,a(n,o({class:"chart"},e.scatterConfig),null,16)]),_:1}),a(t,{span:2}),a(t,{span:10},{default:s(()=>[R,a(n,o({class:"chart"},e.pieConfig),null,16)]),_:1}),a(t,{span:1})]),_:1})])}const P=V(k,[["render",W],["__scopeId","data-v-7919408a"]]);export{P as default};
