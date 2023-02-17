import{v as A,T as U,c as oe,e as ae,d as re,r as j}from"./index-808871c1.js";import{k as O,u as q,_ as Z,w as le,m as y,p as ie,o as ue,A as ce}from"./plugin-vue_export-helper-dddd70e4.js";import{p as de,i as pe,T as H,E as R,b as me,e as fe,y as ge,I as ye}from"./index-10f6af84.js";import{d as h,c as m,b as f,e as x,g as _,x as $,l as S,m as G,f as z,n as g,u as o,v as J,w as K,bb as ve,r as B,o as be,k as C,h as Ce,q as w,p as he,F as Te,y as V,a4 as Q,S as E}from"./runtime-core.esm-bundler-4761d9e9.js";import{a as I,i as W,c as Ne}from"./index-368da730.js";const we=O({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),Se=["textContent"],ke=h({name:"ElBadge"}),Be=h({...ke,props:we,setup(s,{expose:t}){const e=s,n=q("badge"),a=m(()=>e.isDot?"":I(e.value)&&I(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return t({content:a}),(l,u)=>(f(),x("div",{class:g(o(n).b())},[_(l.$slots,"default"),$(U,{name:`${o(n).namespace.value}-zoom-in-center`,persisted:""},{default:S(()=>[G(z("sup",{class:g([o(n).e("content"),o(n).em("content",l.type),o(n).is("fixed",!!l.$slots.default),o(n).is("dot",l.isDot)]),textContent:J(o(a))},null,10,Se),[[A,!l.hidden&&(o(a)||l.isDot)]])]),_:1},8,["name"])],2))}});var xe=Z(Be,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const ze=le(xe),M={},Ee=O({a11y:{type:Boolean,default:!0},locale:{type:y(Object)},size:de,button:{type:y(Object)},experimentalFeatures:{type:y(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:y(Object)},zIndex:Number,namespace:{type:String,default:"el"}}),Qe=h({name:"ElConfigProvider",props:Ee,setup(s,{slots:t}){K(()=>s.message,n=>{Object.assign(M,n??{})},{immediate:!0,deep:!0});const e=ie(s);return()=>_(t,"default",{config:e==null?void 0:e.value})}}),X=["success","info","warning","error"],i=ue({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:W?document.body:void 0}),Ie=O({customClass:{type:String,default:i.customClass},center:{type:Boolean,default:i.center},dangerouslyUseHTMLString:{type:Boolean,default:i.dangerouslyUseHTMLString},duration:{type:Number,default:i.duration},icon:{type:pe,default:i.icon},id:{type:String,default:i.id},message:{type:y([String,Object,Function]),default:i.message},onClose:{type:y(Function),required:!1},showClose:{type:Boolean,default:i.showClose},type:{type:String,values:X,default:i.type},offset:{type:Number,default:i.offset},zIndex:{type:Number,default:i.zIndex},grouping:{type:Boolean,default:i.grouping},repeatNum:{type:Number,default:i.repeatNum}}),Me={destroy:()=>!0},c=ve([]),Oe=s=>{const t=c.findIndex(a=>a.id===s),e=c[t];let n;return t>0&&(n=c[t-1]),{current:e,prev:n}},_e=s=>{const{prev:t}=Oe(s);return t?t.vm.exposed.bottom.value:0},$e=(s,t)=>c.findIndex(n=>n.id===s)>0?20:t,Le=["id"],De=["innerHTML"],Pe=h({name:"ElMessage"}),Fe=h({...Pe,props:Ie,emits:Me,setup(s,{expose:t}){const e=s,{Close:n}=me,a=q("message"),l=B(),u=B(!1),d=B(0);let p;const T=m(()=>e.type?e.type==="error"?"danger":e.type:"info"),L=m(()=>{const r=e.type;return{[a.bm("icon",r)]:r&&H[r]}}),b=m(()=>e.icon||H[e.type]||""),ee=m(()=>_e(e.id)),D=m(()=>$e(e.id,e.offset)+ee.value),se=m(()=>d.value+D.value),te=m(()=>({top:`${D.value}px`,zIndex:e.zIndex}));function k(){e.duration!==0&&({stop:p}=Ne(()=>{N()},e.duration))}function P(){p==null||p()}function N(){u.value=!1}function ne({code:r}){r===fe.esc&&N()}return be(()=>{k(),u.value=!0}),K(()=>e.repeatNum,()=>{P(),k()}),oe(document,"keydown",ne),ae(l,()=>{d.value=l.value.getBoundingClientRect().height}),t({visible:u,bottom:se,close:N}),(r,F)=>(f(),C(U,{name:o(a).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:F[0]||(F[0]=Ue=>r.$emit("destroy")),persisted:""},{default:S(()=>[G(z("div",{id:r.id,ref_key:"messageRef",ref:l,class:g([o(a).b(),{[o(a).m(r.type)]:r.type&&!r.icon},o(a).is("center",r.center),o(a).is("closable",r.showClose),r.customClass]),style:Ce(o(te)),role:"alert",onMouseenter:P,onMouseleave:k},[r.repeatNum>1?(f(),C(o(ze),{key:0,value:r.repeatNum,type:o(T),class:g(o(a).e("badge"))},null,8,["value","type","class"])):w("v-if",!0),o(b)?(f(),C(o(R),{key:1,class:g([o(a).e("icon"),o(L)])},{default:S(()=>[(f(),C(he(o(b))))]),_:1},8,["class"])):w("v-if",!0),_(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(f(),x(Te,{key:1},[w(" Caution here, message could've been compromised, never use user's input as message "),z("p",{class:g(o(a).e("content")),innerHTML:r.message},null,10,De)],2112)):(f(),x("p",{key:0,class:g(o(a).e("content"))},J(r.message),3))]),r.showClose?(f(),C(o(R),{key:2,class:g(o(a).e("closeBtn")),onClick:re(N,["stop"])},{default:S(()=>[$(o(n))]),_:1},8,["class","onClick"])):w("v-if",!0)],46,Le),[[A,u.value]])]),_:3},8,["name","onBeforeLeave"]))}});var je=Z(Fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let He=1;const Y=s=>{const t=!s||V(s)||Q(s)||E(s)?{message:s}:s,e={...i,...t};if(!e.appendTo)e.appendTo=document.body;else if(V(e.appendTo)){let n=document.querySelector(e.appendTo);ye(n)||(n=document.body),e.appendTo=n}return e},Re=s=>{const t=c.indexOf(s);if(t===-1)return;c.splice(t,1);const{handler:e}=s;e.close()},Ve=({appendTo:s,...t},e)=>{const{nextZIndex:n}=ge(),a=`message_${He++}`,l=t.onClose,u=document.createElement("div"),d={...t,zIndex:n()+t.zIndex,id:a,onClose:()=>{l==null||l(),Re(b)},onDestroy:()=>{j(null,u)}},p=$(je,d,E(d.message)||Q(d.message)?{default:E(d.message)?d.message:()=>d.message}:null);p.appContext=e||v._context,j(p,u),s.appendChild(u.firstElementChild);const T=p.component,b={id:a,vnode:p,vm:T,handler:{close:()=>{T.exposed.visible.value=!1}},props:p.component.props};return b},v=(s={},t)=>{if(!W)return{close:()=>{}};if(I(M.max)&&c.length>=M.max)return{close:()=>{}};const e=Y(s);if(e.grouping&&c.length){const a=c.find(({vnode:l})=>{var u;return((u=l.props)==null?void 0:u.message)===e.message});if(a)return a.props.repeatNum+=1,a.props.type=e.type,a.handler}const n=Ve(e,t);return c.push(n),n.handler};X.forEach(s=>{v[s]=(t={},e)=>{const n=Y(t);return v({...n,type:s},e)}});function Ae(s){for(const t of c)(!s||s===t.props.type)&&t.handler.close()}v.closeAll=Ae;v._context=null;const We=ce(v,"$message");export{Qe as C,ze as E,We as a};
