import{d as c,aO as d,r as p,ah as _,aP as f,aQ as h,aR as m,aS as g,aT as y,aU as v,aV as x,aW as C,aX as S,aY as F,au as r,av as $,aF as b,aB as a,ax as s,aZ as o,aM as w,aN as A,aK as l}from"./chunk-libs-acac76b8.js";import{_ as B}from"./index-d79228ea.js";f([h,m,g,y,v,x,C,S,F]);const E=c({components:{VChart:d},setup(){const e=p({lineConfig:{option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:"line"}]}},barConfig:{option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}]}},scatterConfig:{option:{xAxis:{},yAxis:{},series:[{symbolSize:20,data:[[10,8.04],[8.07,6.95],[13,7.58],[9.05,8.81],[11,8.33],[14,7.66],[13.4,6.81],[10,6.33],[14,8.96],[12.5,6.82],[9.15,7.2],[11.5,7.2],[3.03,4.23],[12.2,7.83],[2.02,4.47],[1.05,3.33],[4.05,4.96],[6.03,7.24],[12,6.26],[12,8.84],[7.08,5.82],[5.02,5.68]],type:"scatter"}]}},pieConfig:{option:{title:{text:"Referer of a Website",subtext:"Fake Data",left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"Access From",type:"pie",radius:"50%",data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}});return{..._(e)}}});const i=e=>(w("data-v-d0988de7"),e=e(),A(),e),V={class:"view"},k=i(()=>l("h3",null,"折线图",-1)),T=i(()=>l("h3",null,"柱状图",-1)),I=i(()=>l("h3",null,"散点图",-1)),W=i(()=>l("h3",null,"面积图",-1));function M(e,N,R,D,O,P){const t=r("el-col"),n=r("VChart"),u=r("el-row");return $(),b("div",V,[a(u,{gutter:20},{default:s(()=>[a(t,{span:1}),a(t,{span:10},{default:s(()=>[k,a(n,o({class:"chart"},e.lineConfig),null,16)]),_:1}),a(t,{span:2}),a(t,{span:10},{default:s(()=>[T,a(n,o({class:"chart"},e.barConfig),null,16)]),_:1}),a(t,{span:1})]),_:1}),a(u,{gutter:20},{default:s(()=>[a(t,{span:1}),a(t,{span:10},{default:s(()=>[I,a(n,o({class:"chart"},e.scatterConfig),null,16)]),_:1}),a(t,{span:2}),a(t,{span:10},{default:s(()=>[W,a(n,o({class:"chart"},e.pieConfig),null,16)]),_:1}),a(t,{span:1})]),_:1})])}const z=B(E,[["render",M],["__scopeId","data-v-d0988de7"]]);export{z as default};
