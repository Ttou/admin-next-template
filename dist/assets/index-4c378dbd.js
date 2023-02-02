import{v as U,T as q,c as oe,e as ae,d as re,r as j}from"./index-f403bd98.js";import{e as _,u as A,_ as G,w as le,f as y,p as ie,m as ue,v as ce}from"./plugin-vue_export-helper-f8bac1eb.js";import{t as de,i as pe,T as H,E as R,b as me,e as fe,y as ge,I as ye}from"./index-b5d40b0a.js";import{d as h,c as m,b as f,e as z,g as $,x as O,l as S,m as Z,f as E,n as g,u as n,v as J,w as K,aG as ve,r as B,o as Ce,k as b,h as be,q as w,p as he,F as Te,y as V,a4 as Q,S as I}from"./runtime-core.esm-bundler-487be079.js";import{a as M,i as W,c as Ne}from"./index-deddad90.js";const we=_({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),Se=["textContent"],ke=h({name:"ElBadge"}),Be=h({...ke,props:we,setup(s,{expose:t}){const e=s,o=A("badge"),a=m(()=>e.isDot?"":M(e.value)&&M(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return t({content:a}),(l,u)=>(f(),z("div",{class:g(n(o).b())},[$(l.$slots,"default"),O(q,{name:`${n(o).namespace.value}-zoom-in-center`,persisted:""},{default:S(()=>[Z(E("sup",{class:g([n(o).e("content"),n(o).em("content",l.type),n(o).is("fixed",!!l.$slots.default),n(o).is("dot",l.isDot)]),textContent:J(n(a))},null,10,Se),[[U,!l.hidden&&(n(a)||l.isDot)]])]),_:1},8,["name"])],2))}});var ze=G(Be,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const Ee=le(ze),x={},Ie=_({a11y:{type:Boolean,default:!0},locale:{type:y(Object)},size:de,button:{type:y(Object)},experimentalFeatures:{type:y(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:y(Object)},zIndex:Number,namespace:{type:String,default:"el"}}),Ke=h({name:"ElConfigProvider",props:Ie,setup(s,{slots:t}){K(()=>s.message,o=>{Object.assign(x,o??{})},{immediate:!0,deep:!0});const e=ie(s);return()=>$(t,"default",{config:e==null?void 0:e.value})}}),X=["success","info","warning","error"],i=ue({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:W?document.body:void 0}),Me=_({customClass:{type:String,default:i.customClass},center:{type:Boolean,default:i.center},dangerouslyUseHTMLString:{type:Boolean,default:i.dangerouslyUseHTMLString},duration:{type:Number,default:i.duration},icon:{type:pe,default:i.icon},id:{type:String,default:i.id},message:{type:y([String,Object,Function]),default:i.message},onClose:{type:y(Function),required:!1},showClose:{type:Boolean,default:i.showClose},type:{type:String,values:X,default:i.type},offset:{type:Number,default:i.offset},zIndex:{type:Number,default:i.zIndex},grouping:{type:Boolean,default:i.grouping},repeatNum:{type:Number,default:i.repeatNum}}),xe={destroy:()=>!0},c=ve([]),_e=s=>{const t=c.findIndex(a=>a.id===s),e=c[t];let o;return t>0&&(o=c[t-1]),{current:e,prev:o}},$e=s=>{const{prev:t}=_e(s);return t?t.vm.exposed.bottom.value:0},Oe=["id"],Le=["innerHTML"],De=h({name:"ElMessage"}),Pe=h({...De,props:Me,emits:xe,setup(s,{expose:t}){const e=s,{Close:o}=me,a=A("message"),l=B(),u=B(!1),d=B(0);let p;const T=m(()=>e.type?e.type==="error"?"danger":e.type:"info"),L=m(()=>{const r=e.type;return{[a.bm("icon",r)]:r&&H[r]}}),C=m(()=>e.icon||H[e.type]||""),ee=m(()=>$e(e.id)),D=m(()=>e.offset+ee.value),se=m(()=>d.value+D.value),te=m(()=>({top:`${D.value}px`,zIndex:e.zIndex}));function k(){e.duration!==0&&({stop:p}=Ne(()=>{N()},e.duration))}function P(){p==null||p()}function N(){u.value=!1}function ne({code:r}){r===fe.esc&&N()}return Ce(()=>{k(),u.value=!0}),K(()=>e.repeatNum,()=>{P(),k()}),oe(document,"keydown",ne),ae(l,()=>{d.value=l.value.getBoundingClientRect().height}),t({visible:u,bottom:se,close:N}),(r,F)=>(f(),b(q,{name:n(a).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:F[0]||(F[0]=Ue=>r.$emit("destroy")),persisted:""},{default:S(()=>[Z(E("div",{id:r.id,ref_key:"messageRef",ref:l,class:g([n(a).b(),{[n(a).m(r.type)]:r.type&&!r.icon},n(a).is("center",r.center),n(a).is("closable",r.showClose),r.customClass]),style:be(n(te)),role:"alert",onMouseenter:P,onMouseleave:k},[r.repeatNum>1?(f(),b(n(Ee),{key:0,value:r.repeatNum,type:n(T),class:g(n(a).e("badge"))},null,8,["value","type","class"])):w("v-if",!0),n(C)?(f(),b(n(R),{key:1,class:g([n(a).e("icon"),n(L)])},{default:S(()=>[(f(),b(he(n(C))))]),_:1},8,["class"])):w("v-if",!0),$(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(f(),z(Te,{key:1},[w(" Caution here, message could've been compromised, never use user's input as message "),E("p",{class:g(n(a).e("content")),innerHTML:r.message},null,10,Le)],2112)):(f(),z("p",{key:0,class:g(n(a).e("content"))},J(r.message),3))]),r.showClose?(f(),b(n(R),{key:2,class:g(n(a).e("closeBtn")),onClick:re(N,["stop"])},{default:S(()=>[O(n(o))]),_:1},8,["class","onClick"])):w("v-if",!0)],46,Oe),[[U,u.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Fe=G(Pe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let je=1;const Y=s=>{const t=!s||V(s)||Q(s)||I(s)?{message:s}:s,e={...i,...t};if(!e.appendTo)e.appendTo=document.body;else if(V(e.appendTo)){let o=document.querySelector(e.appendTo);ye(o)||(o=document.body),e.appendTo=o}return e},He=s=>{const t=c.indexOf(s);if(t===-1)return;c.splice(t,1);const{handler:e}=s;e.close()},Re=({appendTo:s,...t},e)=>{const{nextZIndex:o}=ge(),a=`message_${je++}`,l=t.onClose,u=document.createElement("div"),d={...t,zIndex:o()+t.zIndex,id:a,onClose:()=>{l==null||l(),He(C)},onDestroy:()=>{j(null,u)}},p=O(Fe,d,I(d.message)||Q(d.message)?{default:I(d.message)?d.message:()=>d.message}:null);p.appContext=e||v._context,j(p,u),s.appendChild(u.firstElementChild);const T=p.component,C={id:a,vnode:p,vm:T,handler:{close:()=>{T.exposed.visible.value=!1}},props:p.component.props};return C},v=(s={},t)=>{if(!W)return{close:()=>{}};if(M(x.max)&&c.length>=x.max)return{close:()=>{}};const e=Y(s);if(e.grouping&&c.length){const a=c.find(({vnode:l})=>{var u;return((u=l.props)==null?void 0:u.message)===e.message});if(a)return a.props.repeatNum+=1,a.props.type=e.type,a.handler}const o=Re(e,t);return c.push(o),o.handler};X.forEach(s=>{v[s]=(t={},e)=>{const o=Y(t);return v({...o,type:s},e)}});function Ve(s){for(const t of c)(!s||s===t.props.type)&&t.handler.close()}v.closeAll=Ve;v._context=null;const Qe=ce(v,"$message");export{Ke as C,Ee as E,Qe as a};
