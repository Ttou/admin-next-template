import{d as g,G as h,J as _,r as a,c as e,a0 as w,O as i,j as y,o as x,a1 as C,m as S}from"./vendor.4ce04a3c.js";import{a as F,c as P,S as o,P as b}from"./index.71cf5536.js";var E="_2fvodf7",k="_2fvodf5",q="_2fvodf2",B="_2fvodf6",R="_2fvodf3",j="_2fvodf4",z="_2fvodf1",A="_2fvodf0",$=g({name:"Login",setup(){const c=h(),d=_(),p=F(),f=P(),s=a(!1),n=a(null),l=a({}),t=a(null),v=a({items:[{name:"username",type:"input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7",trigger:"blur"}],props:{wrapperCol:{span:24}},componentProps:{placeholder:"\u8D26\u53F7\uFF1Aadmin",prefix:e(o,{name:"view-user"},null),size:"large"}},{name:"password",type:"input-password",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"}],props:{wrapperCol:{span:24}},componentProps:{placeholder:"\u5BC6\u7801\uFF1A\u4EFB\u610F",prefix:e(o,{name:"view-lock"},null),size:"large",onPressEnter:()=>u()}},{render:()=>e(w,{size:"large",type:"primary",loading:s.value,onClick:u,style:{width:"100%"}},{default:()=>[i("\u767B\u5F55")]}),props:{wrapperCol:{span:24}}}]}),m=y(()=>p.title);function u(){var r;(r=t.value)==null||r.form.validate().then(()=>{s.value=!0,f.login(t.value.formModel).then(()=>{d.replace({path:n.value||"/",query:l.value})}).finally(()=>{s.value=!1})}).catch(()=>{})}return x(()=>{const{query:r}=c;r&&(n.value=r.redirect,l.value=C(r,["redirect"]))}),{title:m,formRef:t,formConfig:v}},render(){return e("div",{class:A},[e("div",{class:z},[e("div",{class:q},[e(o,{class:R,name:"logo"},null),e("span",{class:j},[this.title])]),e("div",{class:k},[i("\u57FA\u4E8E Ant Design \u7684\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF")])]),e(b,S({ref:"formRef",class:B},this.formConfig),null),e(o,{class:E,name:"background"},null)])}});export{$ as default};
