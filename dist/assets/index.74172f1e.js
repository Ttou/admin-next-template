import{d as o,P as n,U as u,c}from"./vendor.44f2919d.js";var p=o({name:"Redirect",setup(){const t=n(),r=u(),{params:s,query:a}=t,e=s.path;r.replace({path:e.startsWith("/")?e:`/${e}`,query:a})},render(){return c("section",null,null)}});export{p as default};
