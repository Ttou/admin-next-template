System.register(["./chunk-libs-legacy-cdeaa629.js","./index-legacy-277aa4f5.js"],(function(e,a){"use strict";var o,r,t,l,i,n,d,s,c,u,p,m,g,f,h,v,b,w,x,y,_,k,I,q,M,V,R;return{setters:[e=>{o=e.d,r=e.I,t=e.r,l=e.aX,i=e.aY,n=e.f,d=e.h,s=e.a_,c=e.E,u=e.n,p=e.p,m=e.q,g=e.s,f=e.B,h=e.aq,v=e.al,b=e.aN,w=e.a$,x=e.ar,y=e.ax,_=e.ay,k=e.L,I=e.aK,q=e.R},e=>{M=e.u,V=e.i,R=e._}],execute:function(){var a=document.createElement("style");a.textContent=".view[data-v-3e77cba1]{padding:110px 0 144px;height:100%;box-sizing:border-box}.view .headerWrap[data-v-3e77cba1]{text-align:center}.view .headerWrap .header[data-v-3e77cba1]{height:55px}.view .headerWrap .header .logoIcon[data-v-3e77cba1]{width:55px;height:55px;vertical-align:top;margin-right:16px;border-style:none}.view .headerWrap .header .title[data-v-3e77cba1]{position:relative;top:2px;font-size:33px;font-weight:700;font-family:Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;color:rgba(0,0,0,.85)}.view .headerWrap .desc[data-v-3e77cba1]{margin-top:12px;margin-bottom:40px;color:rgba(0,0,0,.45);font-size:14px}.view .loginForm[data-v-3e77cba1]{width:368px;min-width:260px;margin:0 auto}.view .backgroundIcon[data-v-3e77cba1]{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;background-color:#f0f2f5;z-index:-1}\n",document.head.appendChild(a);const W=o({name:"LoginView",components:{Icon:r},setup(){const e=t({loading:!1,redirect:null,otherQuery:{},formRef:{},formModel:{username:"",password:""},formRules:{username:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}),a=l(),o=i(),r=M(),u=V(),p=n((()=>r.title));return d((()=>{const{query:o}=a;if(o){const a=o.redirect;if(a){const{url:o,query:r}=s.parseUrl(a);e.redirect=o,e.otherQuery=r}}})),{...c(e),title:p,handleSubmit:function(){e.formRef.validate((a=>{a&&(e.loading=!0,u.login(e.formModel).then((()=>{o.replace({path:e.redirect||"/",query:e.otherQuery})})).finally((()=>{e.loading=!1})))}))}}}}),z={class:"view"},C={class:"headerWrap"},S={class:"header"},E={class:"title"},K=(e=>(y("data-v-3e77cba1"),e=e(),_(),e))((()=>g("div",{class:"desc"},"基于 Element Plus 的后台管理系统",-1)));e("default",R(W,[["render",function(e,a,o,r,t,l){const i=u("Icon"),n=k,d=I,s=q,c=b;return p(),m("div",z,[g("div",C,[g("div",S,[f(i,{class:"logoIcon",icon:"@local:custom:logo"}),g("span",E,h(e.title),1)]),K]),f(c,{ref:"formRef",class:"loginForm",model:e.formModel,rules:e.formRules,size:"large"},{default:v((()=>[f(d,{prop:"username"},{default:v((()=>[f(n,{modelValue:e.formModel.username,"onUpdate:modelValue":a[0]||(a[0]=a=>e.formModel.username=a),placeholder:"账号：admin"},{prefix:v((()=>[f(i,{icon:"@local:icon-park-outline:user",inline:!0})])),_:1},8,["modelValue"])])),_:1}),f(d,{prop:"password"},{default:v((()=>[f(n,{modelValue:e.formModel.password,"onUpdate:modelValue":a[1]||(a[1]=a=>e.formModel.password=a),placeholder:"密码：任意",type:"password",onKeydown:w(e.handleSubmit,["enter"])},{prefix:v((()=>[f(i,{icon:"@local:icon-park-outline:lock",inline:!0})])),_:1},8,["modelValue","onKeydown"])])),_:1}),f(d,null,{default:v((()=>[f(s,{type:"primary",loading:e.loading,style:{width:"100%"},onClick:e.handleSubmit},{default:v((()=>[x(" 登录 ")])),_:1},8,["loading","onClick"])])),_:1})])),_:1},8,["model","rules"]),f(i,{class:"backgroundIcon",icon:"@local:custom:background"})])}],["__scopeId","data-v-3e77cba1"]]))}}}));
