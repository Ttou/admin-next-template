import{e as Le,v as Re,d as De}from"./index-808871c1.js";import{p as Oe,i as be,q as He,w as Ke,r as je,u as Ue,a1 as We,ai as Xe,aj as Ye,v as qe,E as A,s as Ge}from"./index-10f6af84.js";import{i as Ce,a as xe}from"./index-368da730.js";import{c as d,L as Ze,r as N,y as J,d as Ie,A as Je,j as Qe,s as Q,w as ee,E as M,o as et,a1 as tt,m as at,b as f,e as b,q as m,F as te,n as h,u as t,g as K,f as P,k as w,l as B,p as j,C as ae,x as ot,N as st,v as U,h as nt,z as we}from"./runtime-core.esm-bundler-4761d9e9.js";import{E as lt,k as rt,m as oe,o as it,u as Se,_ as ut,w as ct}from"./plugin-vue_export-helper-dddd70e4.js";class dt extends Error{constructor(u){super(u),this.name="ElementPlusError"}}function $t(o,u){throw new dt(`[${o}] ${u}`)}function At(o,u){}const se="update:modelValue",Mt="change",Bt="input",pt=()=>Ce&&/firefox/i.test(window.navigator.userAgent),ft=o=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(o),vt=["class","style"],mt=/^on[A-Z]/,ht=(o={})=>{const{excludeListeners:u=!1,excludeKeys:n}=o,a=d(()=>((n==null?void 0:n.value)||[]).concat(vt)),l=Ze();return l?d(()=>{var r;return lt(Object.entries((r=l.proxy)==null?void 0:r.$attrs).filter(([c])=>!a.value.includes(c)&&!(u&&mt.test(c))))}):d(()=>({}))};function yt(o){const u=N();function n(){if(o.value==null)return;const{selectionStart:l,selectionEnd:r,value:c}=o.value;if(l==null||r==null)return;const x=c.slice(0,Math.max(0,l)),p=c.slice(Math.max(0,r));u.value={selectionStart:l,selectionEnd:r,value:c,beforeTxt:x,afterTxt:p}}function a(){if(o.value==null||u.value==null)return;const{value:l}=o.value,{beforeTxt:r,afterTxt:c,selectionStart:x}=u.value;if(r==null||c==null||x==null)return;let p=l.length;if(l.endsWith(c))p=l.length-c.length;else if(l.startsWith(r))p=r.length;else{const y=r[x-1],S=l.indexOf(y,x-1);S!==-1&&(p=S+1)}o.value.setSelectionRange(p,p)}return[n,a]}let g;const gt=`
  height:0 !important;
  visibility:hidden !important;
  ${pt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,bt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function xt(o){const u=window.getComputedStyle(o),n=u.getPropertyValue("box-sizing"),a=Number.parseFloat(u.getPropertyValue("padding-bottom"))+Number.parseFloat(u.getPropertyValue("padding-top")),l=Number.parseFloat(u.getPropertyValue("border-bottom-width"))+Number.parseFloat(u.getPropertyValue("border-top-width"));return{contextStyle:bt.map(c=>`${c}:${u.getPropertyValue(c)}`).join(";"),paddingSize:a,borderSize:l,boxSizing:n}}function Ee(o,u=1,n){var a;g||(g=document.createElement("textarea"),document.body.appendChild(g));const{paddingSize:l,borderSize:r,boxSizing:c,contextStyle:x}=xt(o);g.setAttribute("style",`${x};${gt}`),g.value=o.value||o.placeholder||"";let p=g.scrollHeight;const y={};c==="border-box"?p=p+r:c==="content-box"&&(p=p-l),g.value="";const S=g.scrollHeight-l;if(xe(u)){let v=S*u;c==="border-box"&&(v=v+l+r),p=Math.max(v,p),y.minHeight=`${v}px`}if(xe(n)){let v=S*n;c==="border-box"&&(v=v+l+r),p=Math.min(v,p)}return y.height=`${p}px`,(a=g.parentNode)==null||a.removeChild(g),g=void 0,y}const wt=rt({id:{type:String,default:void 0},size:Oe,disabled:Boolean,modelValue:{type:oe([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:oe([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:be},prefixIcon:{type:be},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:oe([Object,Array,String]),default:()=>it({})}}),St={[se]:o=>J(o),input:o=>J(o),change:o=>J(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},Et=["role"],Ct=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],It=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],kt=Ie({name:"ElInput",inheritAttrs:!1}),zt=Ie({...kt,props:wt,emits:St,setup(o,{expose:u,emit:n}){const a=o,l=Je(),r=Qe(),c=d(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=l["aria-haspopup"],e["aria-owns"]=l["aria-owns"],e["aria-expanded"]=l["aria-expanded"]),e}),x=d(()=>[a.type==="textarea"?le.b():s.b(),s.m(ke.value),s.is("disabled",k.value),s.is("exceed",Ne.value),{[s.b("group")]:r.prepend||r.append,[s.bm("group","append")]:r.append,[s.bm("group","prepend")]:r.prepend,[s.m("prefix")]:r.prefix||a.prefixIcon,[s.m("suffix")]:r.suffix||a.suffixIcon||a.clearable||a.showPassword,[s.bm("suffix","password-clear")]:D.value&&Y.value},l.class]),p=d(()=>[s.e("wrapper"),s.is("focus",V.value)]),y=ht({excludeKeys:d(()=>Object.keys(c.value))}),{form:S,formItem:v}=He(),{inputId:ne}=Ke(a,{formItemContext:v}),ke=je(),k=Ue(),s=Se("input"),le=Se("textarea"),L=Q(),C=Q(),V=N(!1),W=N(!1),T=N(!1),R=N(!1),re=N(),X=Q(a.inputStyle),F=d(()=>L.value||C.value),ie=d(()=>{var e;return(e=S==null?void 0:S.statusIcon)!=null?e:!1}),_=d(()=>(v==null?void 0:v.validateState)||""),ue=d(()=>_.value&&We[_.value]),ze=d(()=>R.value?Xe:Ye),Pe=d(()=>[l.style,a.inputStyle]),ce=d(()=>[a.inputStyle,X.value,{resize:a.resize}]),E=d(()=>qe(a.modelValue)?"":String(a.modelValue)),D=d(()=>a.clearable&&!k.value&&!a.readonly&&!!E.value&&(V.value||W.value)),Y=d(()=>a.showPassword&&!k.value&&!a.readonly&&!!E.value&&(!!E.value||V.value)),z=d(()=>a.showWordLimit&&!!y.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!k.value&&!a.readonly&&!a.showPassword),q=d(()=>Array.from(E.value).length),Ne=d(()=>!!z.value&&q.value>Number(y.value.maxlength)),Ve=d(()=>!!r.suffix||!!a.suffixIcon||D.value||a.showPassword||z.value||!!_.value&&ie.value),[Te,Fe]=yt(L);Le(C,e=>{if(!z.value||a.resize!=="both")return;const i=e[0],{width:I}=i.contentRect;re.value={right:`calc(100% - ${I+15+6}px)`}});const O=()=>{const{type:e,autosize:i}=a;if(!(!Ce||e!=="textarea"||!C.value))if(i){const I=we(i)?i.minRows:void 0,Z=we(i)?i.maxRows:void 0;X.value={...Ee(C.value,I,Z)}}else X.value={minHeight:Ee(C.value).minHeight}},$=()=>{const e=F.value;!e||e.value===E.value||(e.value=E.value)},G=async e=>{Te();let{value:i}=e.target;if(a.formatter&&(i=a.parser?a.parser(i):i,i=a.formatter(i)),!T.value){if(i===E.value){$();return}n(se,i),n("input",i),await M(),$(),Fe()}},de=e=>{n("change",e.target.value)},pe=e=>{n("compositionstart",e),T.value=!0},fe=e=>{var i;n("compositionupdate",e);const I=(i=e.target)==null?void 0:i.value,Z=I[I.length-1]||"";T.value=!ft(Z)},ve=e=>{n("compositionend",e),T.value&&(T.value=!1,G(e))},_e=()=>{R.value=!R.value,H()},H=async()=>{var e;await M(),(e=F.value)==null||e.focus()},$e=()=>{var e;return(e=F.value)==null?void 0:e.blur()},me=e=>{V.value=!0,n("focus",e)},he=e=>{var i;V.value=!1,n("blur",e),a.validateEvent&&((i=v==null?void 0:v.validate)==null||i.call(v,"blur").catch(I=>void 0))},Ae=e=>{W.value=!1,n("mouseleave",e)},Me=e=>{W.value=!0,n("mouseenter",e)},ye=e=>{n("keydown",e)},Be=()=>{var e;(e=F.value)==null||e.select()},ge=()=>{n(se,""),n("change",""),n("clear"),n("input","")};return ee(()=>a.modelValue,()=>{var e;M(()=>O()),a.validateEvent&&((e=v==null?void 0:v.validate)==null||e.call(v,"change").catch(i=>void 0))}),ee(E,()=>$()),ee(()=>a.type,async()=>{await M(),$(),O()}),et(()=>{!a.formatter&&a.parser,$(),M(O)}),u({input:L,textarea:C,ref:F,textareaStyle:ce,autosize:tt(a,"autosize"),focus:H,blur:$e,select:Be,clear:ge,resizeTextarea:O}),(e,i)=>at((f(),b("div",ae(t(c),{class:t(x),style:t(Pe),role:e.containerRole,onMouseenter:Me,onMouseleave:Ae}),[m(" input "),e.type!=="textarea"?(f(),b(te,{key:0},[m(" prepend slot "),e.$slots.prepend?(f(),b("div",{key:0,class:h(t(s).be("group","prepend"))},[K(e.$slots,"prepend")],2)):m("v-if",!0),P("div",{class:h(t(p))},[m(" prefix slot "),e.$slots.prefix||e.prefixIcon?(f(),b("span",{key:0,class:h(t(s).e("prefix"))},[P("span",{class:h(t(s).e("prefix-inner")),onClick:H},[K(e.$slots,"prefix"),e.prefixIcon?(f(),w(t(A),{key:0,class:h(t(s).e("icon"))},{default:B(()=>[(f(),w(j(e.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),P("input",ae({id:t(ne),ref_key:"input",ref:L,class:t(s).e("inner")},t(y),{type:e.showPassword?R.value?"text":"password":e.type,disabled:t(k),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:a.form,onCompositionstart:pe,onCompositionupdate:fe,onCompositionend:ve,onInput:G,onFocus:me,onBlur:he,onChange:de,onKeydown:ye}),null,16,Ct),m(" suffix slot "),t(Ve)?(f(),b("span",{key:1,class:h(t(s).e("suffix"))},[P("span",{class:h(t(s).e("suffix-inner")),onClick:H},[!t(D)||!t(Y)||!t(z)?(f(),b(te,{key:0},[K(e.$slots,"suffix"),e.suffixIcon?(f(),w(t(A),{key:0,class:h(t(s).e("icon"))},{default:B(()=>[(f(),w(j(e.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),t(D)?(f(),w(t(A),{key:1,class:h([t(s).e("icon"),t(s).e("clear")]),onMousedown:De(t(st),["prevent"]),onClick:ge},{default:B(()=>[ot(t(Ge))]),_:1},8,["class","onMousedown"])):m("v-if",!0),t(Y)?(f(),w(t(A),{key:2,class:h([t(s).e("icon"),t(s).e("password")]),onClick:_e},{default:B(()=>[(f(),w(j(t(ze))))]),_:1},8,["class"])):m("v-if",!0),t(z)?(f(),b("span",{key:3,class:h(t(s).e("count"))},[P("span",{class:h(t(s).e("count-inner"))},U(t(q))+" / "+U(t(y).maxlength),3)],2)):m("v-if",!0),t(_)&&t(ue)&&t(ie)?(f(),w(t(A),{key:4,class:h([t(s).e("icon"),t(s).e("validateIcon"),t(s).is("loading",t(_)==="validating")])},{default:B(()=>[(f(),w(j(t(ue))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),e.$slots.append?(f(),b("div",{key:1,class:h(t(s).be("group","append"))},[K(e.$slots,"append")],2)):m("v-if",!0)],64)):(f(),b(te,{key:1},[m(" textarea "),P("textarea",ae({id:t(ne),ref_key:"textarea",ref:C,class:t(le).e("inner")},t(y),{tabindex:e.tabindex,disabled:t(k),readonly:e.readonly,autocomplete:e.autocomplete,style:t(ce),"aria-label":e.label,placeholder:e.placeholder,form:a.form,onCompositionstart:pe,onCompositionupdate:fe,onCompositionend:ve,onInput:G,onFocus:me,onBlur:he,onChange:de,onKeydown:ye}),null,16,It),t(z)?(f(),b("span",{key:0,style:nt(re.value),class:h(t(s).e("count"))},U(t(q))+" / "+U(t(y).maxlength),7)):m("v-if",!0)],64))],16,Et)),[[Re,e.type!=="hidden"]])}});var Pt=ut(zt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const Lt=ct(Pt);export{Mt as C,Lt as E,Bt as I,se as U,pt as a,At as d,ft as i,$t as t,ht as u};
