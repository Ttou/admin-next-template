import{d as g,a4 as h,a6 as _,r as a,b as e,B as w,A as i,c as S,o as b,ak as y,m as x}from"./vendor.9426880b.js";import{b as C,S as o,P as F}from"./index.a43724b9.js";import{u as P}from"./useSettingStore.a8f934f6.js";var k="_2fvodf7",B="_2fvodf5",E="_2fvodf2",q="_2fvodf6",A="_2fvodf3",R="_2fvodf4",j="_2fvodf1",z="_2fvodf0",$=g({name:"LoginView",setup(){const d=h(),p=_(),c=P(),f=C(),s=a(!1),n=a(null),l=a({}),t=a(null),v=a({items:[{name:"username",type:"input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7",trigger:"blur"}],props:{wrapperCol:{span:24}},componentProps:{placeholder:"\u8D26\u53F7\uFF1Aadmin",prefix:e(o,{name:"view-user"},null),size:"large"}},{name:"password",type:"input-password",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"}],props:{wrapperCol:{span:24}},componentProps:{placeholder:"\u5BC6\u7801\uFF1A\u4EFB\u610F",prefix:e(o,{name:"view-lock"},null),size:"large",onPressEnter:()=>u()}},{render:()=>e(w,{size:"large",type:"primary",loading:s.value,onClick:u,style:{width:"100%"}},{default:()=>[i("\u767B\u5F55")]}),props:{wrapperCol:{span:24}}}]}),m=S(()=>c.title);function u(){var r;(r=t.value)==null||r.form.validate().then(()=>{s.value=!0,f.login(t.value.model).then(()=>{p.replace({path:n.value||"/",query:l.value})}).finally(()=>{s.value=!1})}).catch(()=>{})}return b(()=>{const{query:r}=d;r&&(n.value=r.redirect,l.value=y(r,["redirect"]))}),{title:m,formRef:t,formConfig:v}},render(){return e("div",{class:z},[e("div",{class:j},[e("div",{class:E},[e(o,{class:A,name:"logo"},null),e("span",{class:R},[this.title])]),e("div",{class:B},[i("\u57FA\u4E8E Ant Design \u7684\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF")])]),e(F,x({ref:"formRef",class:q},this.formConfig),null),e(o,{class:k,name:"background"},null)])}});export{$ as default};
