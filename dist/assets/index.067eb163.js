import{d as n,a1 as i,a3 as c,c as u,b as e,ai as l,B as d,y as p}from"./vendor.cf969843.js";const f={403:"\u6743\u9650\u4E0D\u591F",404:"\u9875\u9762\u4E0D\u5B58\u5728",500:"\u670D\u52A1\u5668\u5F02\u5E38"};var m=n({name:"Error",setup(){const s=i(),a=c(),t=u(()=>s.query.status),r=u(()=>f[t.value]);function o(){a.replace("/")}return{status:t,subTitle:r,handleClick:o}},render(){return e(l,{status:this.status,title:this.status,subTitle:this.subTitle},{extra:()=>e(d,{type:"primary",onClick:this.handleClick},{default:()=>[p("\u8FD4\u56DE\u9996\u9875")]})})}});export{m as default};
