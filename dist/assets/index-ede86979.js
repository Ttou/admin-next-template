import{S as et,y as ne,a6 as Et,d as Ct,E as Tt,a7 as te,a5 as $,x as tt,a8 as Y,a9 as ae,aa as Ot,o as Pt,P as At,Q as Nt,ab as nt,z as Ft,ac as k,G as P,ad as se,ae as Z,af as G,M as re,F as st,ag as It,ah as Rt,_ as xt,ai as Mt,aj as Dt,ak as Pe,al as Ae,am as Lt,an as Vt,ao as $t,ap as Bt,aq as zt,ar as Ht,as as rt,at as jt,c as U,u as D,r as S,a as x,s as Ut}from"./runtime-core.esm-bundler-25b49e90.js";import{f as oe,D as pe,E as ot,F as _e,l as ce,s as it,G as X,H as Wt,C as ie,I as kt,J as Se,K as qt,L as Jt}from"./plugin-vue_export-helper-31939cfc.js";const Kt="http://www.w3.org/2000/svg",j=typeof document<"u"?document:null,Ne=j&&j.createElement("template"),Qt={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?j.createElementNS(Kt,e):j.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>j.createTextNode(e),createComment:e=>j.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>j.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,o){const i=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{Ne.innerHTML=s?`<svg>${e}</svg>`:e;const a=Ne.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Gt(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Xt(e,t,n){const s=e.style,r=ne(n);if(n&&!r){for(const o in n)de(s,o,n[o]);if(t&&!ne(t))for(const o in t)n[o]==null&&de(s,o,"")}else{const o=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=o)}}const Fe=/\s*!important$/;function de(e,t,n){if(P(n))n.forEach(s=>de(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Yt(e,t);Fe.test(n)?e.setProperty($(s),n.replace(Fe,""),"important"):e[s]=n}}const Ie=["Webkit","Moz","ms"],le={};function Yt(e,t){const n=le[t];if(n)return n;let s=te(t);if(s!=="filter"&&s in e)return le[t]=s;s=zt(s);for(let r=0;r<Ie.length;r++){const o=Ie[r]+s;if(o in e)return le[t]=o}return t}const Re="http://www.w3.org/1999/xlink";function Zt(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Re,t.slice(6,t.length)):e.setAttributeNS(Re,t,n);else{const o=Ht(t);n==null||o&&!rt(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function en(e,t,n,s,r,o,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,r,o),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=rt(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function R(e,t,n,s){e.addEventListener(t,n,s)}function tn(e,t,n,s){e.removeEventListener(t,n,s)}function nn(e,t,n,s,r=null){const o=e._vei||(e._vei={}),i=o[t];if(s&&i)i.value=s;else{const[a,l]=sn(t);if(s){const u=o[t]=an(s,r);R(e,a,u,l)}else i&&(tn(e,a,i,l),o[t]=void 0)}}const xe=/(?:Once|Passive|Capture)$/;function sn(e){let t;if(xe.test(e)){t={};let s;for(;s=e.match(xe);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$(e.slice(2)),t]}let ue=0;const rn=Promise.resolve(),on=()=>ue||(rn.then(()=>ue=0),ue=Date.now());function an(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;jt(cn(s,n.value),t,5,[s])};return n.value=e,n.attached=on(),n}function cn(e,t){if(P(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Me=/^on[a-z]/,ln=(e,t,n,s,r=!1,o,i,a,l)=>{t==="class"?Gt(e,s,r):t==="style"?Xt(e,n,s):$t(t)?Bt(t)||nn(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):un(e,t,s,r))?en(e,t,s,o,i,a,l):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Zt(e,t,s,r))};function un(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Me.test(t)&&et(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Me.test(t)&&ne(n)?!1:t in e}function fn(e,t){const n=Ct(e);class s extends ye{constructor(o){super(n,o,t)}}return s.def=n,s}const Zn=e=>fn(e,Fn),pn=typeof HTMLElement<"u"?HTMLElement:class{};class ye extends pn{constructor(t,n={},s){super(),this._def=t,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,Tt(()=>{this._connected||(We(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);new MutationObserver(s=>{for(const r of s)this._setAttr(r.attributeName)}).observe(this,{attributes:!0});const t=(s,r=!1)=>{const{props:o,styles:i}=s;let a;if(o&&!P(o))for(const l in o){const u=o[l];(u===Number||u&&u.type===Number)&&(l in this._props&&(this._props[l]=k(this._props[l])),(a||(a=Object.create(null)))[te(l)]=!0)}this._numberProps=a,r&&this._resolveProps(s),this._applyStyles(i),this._update()},n=this._def.__asyncLoader;n?n().then(s=>t(s,!0)):t(this._def)}_resolveProps(t){const{props:n}=t,s=P(n)?n:Object.keys(n||{});for(const r of Object.keys(this))r[0]!=="_"&&s.includes(r)&&this._setProp(r,this[r],!0,!1);for(const r of s.map(te))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(o){this._setProp(r,o)}})}_setAttr(t){let n=this.getAttribute(t);const s=te(t);this._numberProps&&this._numberProps[s]&&(n=k(n)),this._setProp(s,n,!1)}_getProp(t){return this._props[t]}_setProp(t,n,s=!0,r=!0){n!==this._props[t]&&(this._props[t]=n,r&&this._instance&&this._update(),s&&(n===!0?this.setAttribute($(t),""):typeof n=="string"||typeof n=="number"?this.setAttribute($(t),n+""):n||this.removeAttribute($(t))))}_update(){We(this._createVNode(),this.shadowRoot)}_createVNode(){const t=tt(this._def,Y({},this._props));return this._instance||(t.ce=n=>{this._instance=n,n.isCE=!0;const s=(o,i)=>{this.dispatchEvent(new CustomEvent(o,{detail:i}))};n.emit=(o,...i)=>{s(o,i),$(o)!==o&&s($(o),i)};let r=this;for(;r=r&&(r.parentNode||r.host);)if(r instanceof ye){n.parent=r._instance,n.provides=r._instance.provides;break}}),t}_applyStyles(t){t&&t.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function es(e="$style"){{const t=re();if(!t)return ae;const n=t.type.__cssModules;if(!n)return ae;const s=n[e];return s||ae}}function ts(e){const t=re();if(!t)return;const n=t.ut=(r=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(o=>he(o,r))},s=()=>{const r=e(t.proxy);me(t.subTree,r),n(r)};Ot(s),Pt(()=>{const r=new MutationObserver(s);r.observe(t.subTree.el.parentNode,{childList:!0}),At(()=>r.disconnect())})}function me(e,t){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{me(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)he(e.el,t);else if(e.type===st)e.children.forEach(n=>me(n,t));else if(e.type===It){let{el:n,anchor:s}=e;for(;n&&(he(n,t),n!==s);)n=n.nextSibling}}function he(e,t){if(e.nodeType===1){const n=e.style;for(const s in t)n.setProperty(`--${s}`,t[s])}}const L="transition",J="animation",at=(e,{slots:t})=>Nt(nt,lt(e),t);at.displayName="Transition";const ct={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},dn=at.props=Y({},nt.props,ct),H=(e,t=[])=>{P(e)?e.forEach(n=>n(...t)):e&&e(...t)},De=e=>e?P(e)?e.some(t=>t.length>1):e.length>1:!1;function lt(e){const t={};for(const h in e)h in ct||(t[h]=e[h]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=i,appearToClass:c=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,d=mn(r),v=d&&d[0],g=d&&d[1],{onBeforeEnter:_,onEnter:E,onEnterCancelled:O,onLeave:W,onLeaveCancelled:y,onBeforeAppear:N=_,onAppear:b=E,onAppearCancelled:w=O}=t,A=(h,T,z)=>{V(h,T?c:a),V(h,T?u:i),z&&z()},Ee=(h,T)=>{h._isLeaving=!1,V(h,f),V(h,m),V(h,p),T&&T()},Ce=h=>(T,z)=>{const Te=h?b:E,Oe=()=>A(T,h,z);H(Te,[T,Oe]),Le(()=>{V(T,h?l:o),I(T,h?c:a),De(Te)||Ve(T,s,v,Oe)})};return Y(t,{onBeforeEnter(h){H(_,[h]),I(h,o),I(h,i)},onBeforeAppear(h){H(N,[h]),I(h,l),I(h,u)},onEnter:Ce(!1),onAppear:Ce(!0),onLeave(h,T){h._isLeaving=!0;const z=()=>Ee(h,T);I(h,f),ft(),I(h,p),Le(()=>{h._isLeaving&&(V(h,f),I(h,m),De(W)||Ve(h,s,g,z))}),H(W,[h,z])},onEnterCancelled(h){A(h,!1),H(O,[h])},onAppearCancelled(h){A(h,!0),H(w,[h])},onLeaveCancelled(h){Ee(h),H(y,[h])}})}function mn(e){if(e==null)return null;if(Ft(e))return[fe(e.enter),fe(e.leave)];{const t=fe(e);return[t,t]}}function fe(e){return k(e)}function I(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function V(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Le(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let hn=0;function Ve(e,t,n,s){const r=e._endId=++hn,o=()=>{r===e._endId&&s()};if(n)return setTimeout(o,n);const{type:i,timeout:a,propCount:l}=ut(e,t);if(!i)return s();const u=i+"end";let c=0;const f=()=>{e.removeEventListener(u,p),o()},p=m=>{m.target===e&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),e.addEventListener(u,p)}function ut(e,t){const n=window.getComputedStyle(e),s=d=>(n[d]||"").split(", "),r=s(`${L}Delay`),o=s(`${L}Duration`),i=$e(r,o),a=s(`${J}Delay`),l=s(`${J}Duration`),u=$e(a,l);let c=null,f=0,p=0;t===L?i>0&&(c=L,f=i,p=o.length):t===J?u>0&&(c=J,f=u,p=l.length):(f=Math.max(i,u),c=f>0?i>u?L:J:null,p=c?c===L?o.length:l.length:0);const m=c===L&&/\b(transform|all)(,|$)/.test(s(`${L}Property`).toString());return{type:c,timeout:f,propCount:p,hasTransform:m}}function $e(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Be(n)+Be(e[s])))}function Be(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function ft(){return document.body.offsetHeight}const pt=new WeakMap,dt=new WeakMap,vn={name:"TransitionGroup",props:Y({},dn,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=re(),s=Rt();let r,o;return xt(()=>{if(!r.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!Sn(r[0].el,n.vnode.el,i))return;r.forEach(gn),r.forEach(bn);const a=r.filter(_n);ft(),a.forEach(l=>{const u=l.el,c=u.style;I(u,i),c.transform=c.webkitTransform=c.transitionDuration="";const f=u._moveCb=p=>{p&&p.target!==u||(!p||/transform$/.test(p.propertyName))&&(u.removeEventListener("transitionend",f),u._moveCb=null,V(u,i))};u.addEventListener("transitionend",f)})}),()=>{const i=Mt(e),a=lt(i);let l=i.tag||st;r=o,o=t.default?Dt(t.default()):[];for(let u=0;u<o.length;u++){const c=o[u];c.key!=null&&Pe(c,Ae(c,a,s,n))}if(r)for(let u=0;u<r.length;u++){const c=r[u];Pe(c,Ae(c,a,s,n)),pt.set(c,c.el.getBoundingClientRect())}return tt(l,null,o)}}},ns=vn;function gn(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function bn(e){dt.set(e,e.el.getBoundingClientRect())}function _n(e){const t=pt.get(e),n=dt.get(e),s=t.left-n.left,r=t.top-n.top;if(s||r){const o=e.el.style;return o.transform=o.webkitTransform=`translate(${s}px,${r}px)`,o.transitionDuration="0s",e}}function Sn(e,t,n){const s=e.cloneNode();e._vtc&&e._vtc.forEach(i=>{i.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(i=>i&&s.classList.add(i)),s.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(s);const{hasTransform:o}=ut(s);return r.removeChild(s),o}const B=e=>{const t=e.props["onUpdate:modelValue"]||!1;return P(t)?n=>Lt(t,n):t};function yn(e){e.target.composing=!0}function ze(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ve={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e._assign=B(r);const o=s||r.props&&r.props.type==="number";R(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;n&&(a=a.trim()),o&&(a=k(a)),e._assign(a)}),n&&R(e,"change",()=>{e.value=e.value.trim()}),t||(R(e,"compositionstart",yn),R(e,"compositionend",ze),R(e,"change",ze))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:r}},o){if(e._assign=B(o),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(r||e.type==="number")&&k(e.value)===t))return;const i=t??"";e.value!==i&&(e.value=i)}},mt={deep:!0,created(e,t,n){e._assign=B(n),R(e,"change",()=>{const s=e._modelValue,r=q(e),o=e.checked,i=e._assign;if(P(s)){const a=se(s,r),l=a!==-1;if(o&&!l)i(s.concat(r));else if(!o&&l){const u=[...s];u.splice(a,1),i(u)}}else if(Z(s)){const a=new Set(s);o?a.add(r):a.delete(r),i(a)}else i(vt(e,o))})},mounted:He,beforeUpdate(e,t,n){e._assign=B(n),He(e,t,n)}};function He(e,{value:t,oldValue:n},s){e._modelValue=t,P(t)?e.checked=se(t,s.props.value)>-1:Z(t)?e.checked=t.has(s.props.value):t!==n&&(e.checked=G(t,vt(e,!0)))}const ht={created(e,{value:t},n){e.checked=G(t,n.props.value),e._assign=B(n),R(e,"change",()=>{e._assign(q(e))})},beforeUpdate(e,{value:t,oldValue:n},s){e._assign=B(s),t!==n&&(e.checked=G(t,s.props.value))}},wn={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const r=Z(t);R(e,"change",()=>{const o=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>n?k(q(i)):q(i));e._assign(e.multiple?r?new Set(o):o:o[0])}),e._assign=B(s)},mounted(e,{value:t}){je(e,t)},beforeUpdate(e,t,n){e._assign=B(n)},updated(e,{value:t}){je(e,t)}};function je(e,t){const n=e.multiple;if(!(n&&!P(t)&&!Z(t))){for(let s=0,r=e.options.length;s<r;s++){const o=e.options[s],i=q(o);if(n)P(t)?o.selected=se(t,i)>-1:o.selected=t.has(i);else if(G(q(o),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function q(e){return"_value"in e?e._value:e.value}function vt(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const En={created(e,t,n){ee(e,t,n,null,"created")},mounted(e,t,n){ee(e,t,n,null,"mounted")},beforeUpdate(e,t,n,s){ee(e,t,n,s,"beforeUpdate")},updated(e,t,n,s){ee(e,t,n,s,"updated")}};function gt(e,t){switch(e){case"SELECT":return wn;case"TEXTAREA":return ve;default:switch(t){case"checkbox":return mt;case"radio":return ht;default:return ve}}}function ee(e,t,n,s,r){const i=gt(e.tagName,n.props&&n.props.type)[r];i&&i(e,t,n,s)}function Cn(){ve.getSSRProps=({value:e})=>({value:e}),ht.getSSRProps=({value:e},t)=>{if(t.props&&G(t.props.value,e))return{checked:!0}},mt.getSSRProps=({value:e},t)=>{if(P(e)){if(t.props&&se(e,t.props.value)>-1)return{checked:!0}}else if(Z(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},En.getSSRProps=(e,t)=>{if(typeof t.type!="string")return;const n=gt(t.type.toUpperCase(),t.props&&t.props.type);if(n.getSSRProps)return n.getSSRProps(e,t)}}const Tn=["ctrl","shift","alt","meta"],On={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Tn.some(n=>e[`${n}Key`]&&!t.includes(n))},ss=(e,t)=>(n,...s)=>{for(let r=0;r<t.length;r++){const o=On[t[r]];if(o&&o(n,t))return}return e(n,...s)},Pn={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},rs=(e,t)=>n=>{if(!("key"in n))return;const s=$(n.key);if(t.some(r=>r===s||Pn[r]===s))return e(n)},An={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):K(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),K(e,!0),s.enter(e)):s.leave(e,()=>{K(e,!1)}):K(e,t))},beforeUnmount(e,{value:t}){K(e,t)}};function K(e,t){e.style.display=t?e._vod:"none"}function Nn(){An.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const bt=Y({patchProp:ln},Qt);let Q,Ue=!1;function _t(){return Q||(Q=Et(bt))}function St(){return Q=Ue?Q:Vt(bt),Ue=!0,Q}const We=(...e)=>{_t().render(...e)},Fn=(...e)=>{St().hydrate(...e)},os=(...e)=>{const t=_t().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=yt(s);if(!r)return;const o=t._component;!et(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t},is=(...e)=>{const t=St().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=yt(s);if(r)return n(r,!0,r instanceof SVGElement)},t};function yt(e){return ne(e)?document.querySelector(e):e}let ke=!1;const as=()=>{ke||(ke=!0,Cn(),Nn())};function F(e){var t;const n=X(e);return(t=n==null?void 0:n.$el)!=null?t:n}const M=oe?window:void 0,wt=oe?window.document:void 0,In=oe?window.navigator:void 0;oe&&window.location;function C(...e){let t,n,s,r;if(kt(e[0])||Array.isArray(e[0])?([n,s,r]=e,t=M):[t,n,s,r]=e,!t)return pe;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const o=[],i=()=>{o.forEach(c=>c()),o.length=0},a=(c,f,p)=>(c.addEventListener(f,p,r),()=>c.removeEventListener(f,p,r)),l=x(()=>F(t),c=>{i(),c&&o.push(...n.flatMap(f=>s.map(p=>a(c,f,p))))},{immediate:!0,flush:"post"}),u=()=>{l(),i()};return ie(u),u}function cs(e,t,n={}){const{window:s=M,ignore:r,capture:o=!0,detectIframe:i=!1}=n;if(!s)return;let a=!0,l;const u=m=>{s.clearTimeout(l);const d=F(e);if(!(!d||d===m.target||m.composedPath().includes(d))){if(!a){a=!0;return}t(m)}},c=m=>r&&r.some(d=>{const v=F(d);return v&&(m.target===v||m.composedPath().includes(v))}),f=[C(s,"click",u,{passive:!0,capture:o}),C(s,"pointerdown",m=>{const d=F(e);d&&(a=!m.composedPath().includes(d)&&!c(m))},{passive:!0}),C(s,"pointerup",m=>{if(m.button===0){const d=m.composedPath();m.composedPath=()=>d,l=s.setTimeout(()=>u(m),50)}},{passive:!0}),i&&C(s,"blur",m=>{var d;const v=F(e);((d=s.document.activeElement)==null?void 0:d.tagName)==="IFRAME"&&!(v!=null&&v.contains(s.document.activeElement))&&t(m)})].filter(Boolean);return()=>f.forEach(m=>m())}function we(e,t=!1){const n=S(),s=()=>n.value=Boolean(e());return s(),Se(s,t),n}function ls(e={}){const{navigator:t=In,read:n=!1,source:s,copiedDuring:r=1500,legacy:o=!1}=e,i=["copy","cut"],a=we(()=>t&&"clipboard"in t),l=U(()=>a.value||o),u=S(""),c=S(!1),f=it(()=>c.value=!1,r);function p(){a.value?t.clipboard.readText().then(g=>{u.value=g}):u.value=v()}if(l.value&&n)for(const g of i)C(g,p);async function m(g=X(s)){l.value&&g!=null&&(a.value?await t.clipboard.writeText(g):d(g),u.value=g,c.value=!0,f.start())}function d(g){const _=document.createElement("textarea");_.value=g??"",_.style.position="absolute",_.style.opacity="0",document.body.appendChild(_),_.select(),document.execCommand("copy"),_.remove()}function v(){var g,_,E;return(E=(_=(g=document==null?void 0:document.getSelection)==null?void 0:g.call(document))==null?void 0:_.toString())!=null?E:""}return{isSupported:l,text:u,copied:c,copy:m}}function Rn(e){return JSON.parse(JSON.stringify(e))}const ge=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},be="__vueuse_ssr_handlers__";ge[be]=ge[be]||{};const xn=ge[be];function Mn(e,t){return xn[e]||t}function Dn(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Ln=Object.defineProperty,qe=Object.getOwnPropertySymbols,Vn=Object.prototype.hasOwnProperty,$n=Object.prototype.propertyIsEnumerable,Je=(e,t,n)=>t in e?Ln(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ke=(e,t)=>{for(var n in t||(t={}))Vn.call(t,n)&&Je(e,n,t[n]);if(qe)for(var n of qe(t))$n.call(t,n)&&Je(e,n,t[n]);return e};const Bn={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function us(e,t,n,s={}){var r;const{flush:o="pre",deep:i=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:u=!1,shallow:c,window:f=M,eventFilter:p,onError:m=b=>{console.error(b)}}=s,d=(c?Ut:S)(t);if(!n)try{n=Mn("getDefaultStorage",()=>{var b;return(b=M)==null?void 0:b.localStorage})()}catch(b){m(b)}if(!n)return d;const v=X(t),g=Dn(v),_=(r=s.serializer)!=null?r:Bn[g],{pause:E,resume:O}=Wt(d,()=>W(d.value),{flush:o,deep:i,eventFilter:p});return f&&a&&C(f,"storage",N),N(),d;function W(b){try{b==null?n.removeItem(e):n.setItem(e,_.write(b))}catch(w){m(w)}}function y(b){E();try{const w=b?b.newValue:n.getItem(e);if(w==null)return l&&v!==null&&n.setItem(e,_.write(v)),v;if(!b&&u){const A=_.read(w);return _e(u)?u(A,v):g==="object"&&!Array.isArray(A)?Ke(Ke({},v),A):A}else return typeof w!="string"?w:_.read(w)}catch(w){m(w)}finally{O()}}function N(b){if(!(b&&b.storageArea!==n)){if(b&&b.key===null){d.value=v;return}b&&b.key!==e||(d.value=y(b))}}}function fs(e,t,{window:n=M,initialValue:s=""}={}){const r=S(s),o=U(()=>{var i;return F(t)||((i=n==null?void 0:n.document)==null?void 0:i.documentElement)});return x([o,()=>X(e)],([i,a])=>{var l;if(i&&n){const u=(l=n.getComputedStyle(i).getPropertyValue(a))==null?void 0:l.trim();r.value=u||s}},{immediate:!0}),x(r,i=>{var a;(a=o.value)!=null&&a.style&&o.value.style.setProperty(X(e),i)}),r}function ps({document:e=wt}={}){if(!e)return S("visible");const t=S(e.visibilityState);return C(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var Qe=Object.getOwnPropertySymbols,zn=Object.prototype.hasOwnProperty,Hn=Object.prototype.propertyIsEnumerable,jn=(e,t)=>{var n={};for(var s in e)zn.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Qe)for(var s of Qe(e))t.indexOf(s)<0&&Hn.call(e,s)&&(n[s]=e[s]);return n};function Un(e,t,n={}){const s=n,{window:r=M}=s,o=jn(s,["window"]);let i;const a=we(()=>r&&"ResizeObserver"in r),l=()=>{i&&(i.disconnect(),i=void 0)},u=x(()=>F(e),f=>{l(),a.value&&r&&f&&(i=new ResizeObserver(t),i.observe(f,o))},{immediate:!0,flush:"post"}),c=()=>{l(),u()};return ie(c),{isSupported:a,stop:c}}function ds(e,t={}){const{reset:n=!0,windowResize:s=!0,windowScroll:r=!0,immediate:o=!0}=t,i=S(0),a=S(0),l=S(0),u=S(0),c=S(0),f=S(0),p=S(0),m=S(0);function d(){const v=F(e);if(!v){n&&(i.value=0,a.value=0,l.value=0,u.value=0,c.value=0,f.value=0,p.value=0,m.value=0);return}const g=v.getBoundingClientRect();i.value=g.height,a.value=g.bottom,l.value=g.left,u.value=g.right,c.value=g.top,f.value=g.width,p.value=g.x,m.value=g.y}return Un(e,d),x(()=>F(e),v=>!v&&d()),r&&C("scroll",d,{passive:!0}),s&&C("resize",d,{passive:!0}),Se(()=>{o&&d()}),{height:i,bottom:a,left:l,right:u,top:c,width:f,x:p,y:m,update:d}}function Wn(e,t={}){const{immediate:n=!0,window:s=M}=t,r=S(!1);let o=null;function i(){!r.value||!s||(e(),o=s.requestAnimationFrame(i))}function a(){!r.value&&s&&(r.value=!0,i())}function l(){r.value=!1,o!=null&&s&&(s.cancelAnimationFrame(o),o=null)}return n&&a(),ie(l),{isActive:r,pause:l,resume:a}}const Ge=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function ms(e,t={}){const{document:n=wt,autoExit:s=!1}=t,r=e||(n==null?void 0:n.querySelector("html")),o=S(!1);let i=Ge[0];const a=we(()=>{if(n){for(const v of Ge)if(v[1]in n)return i=v,!0}else return!1;return!1}),[l,u,c,,f]=i;async function p(){a.value&&(n!=null&&n[c]&&await n[u](),o.value=!1)}async function m(){if(!a.value)return;await p();const v=F(r);v&&(await v[l](),o.value=!0)}async function d(){o.value?await p():await m()}return n&&C(n,f,()=>{o.value=!!(n!=null&&n[c])},!1),s&&ie(p),{isSupported:a,isFullscreen:o,enter:m,exit:p,toggle:d}}var Xe;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Xe||(Xe={}));var kn=Object.defineProperty,Ye=Object.getOwnPropertySymbols,qn=Object.prototype.hasOwnProperty,Jn=Object.prototype.propertyIsEnumerable,Ze=(e,t,n)=>t in e?kn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Kn=(e,t)=>{for(var n in t||(t={}))qn.call(t,n)&&Ze(e,n,t[n]);if(Ye)for(var n of Ye(t))Jn.call(t,n)&&Ze(e,n,t[n]);return e};const Qn={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]},hs=Kn({linear:ot},Qn);function Gn([e,t,n,s]){const r=(c,f)=>1-3*f+3*c,o=(c,f)=>3*f-6*c,i=c=>3*c,a=(c,f,p)=>((r(f,p)*c+o(f,p))*c+i(f))*c,l=(c,f,p)=>3*r(f,p)*c*c+2*o(f,p)*c+i(f),u=c=>{let f=c;for(let p=0;p<4;++p){const m=l(f,e,n);if(m===0)return f;const d=a(f,e,n)-c;f-=d/m}return f};return c=>e===t&&n===s?c:a(u(c),t,s)}function vs(e,t={}){const{delay:n=0,disabled:s=!1,duration:r=1e3,onFinished:o=pe,onStarted:i=pe,transition:a=ot}=t,l=U(()=>{const y=D(a);return _e(y)?y:Gn(y)}),u=U(()=>{const y=D(e);return ce(y)?y:y.map(D)}),c=U(()=>ce(u.value)?[u.value]:u.value),f=S(c.value.slice(0));let p,m,d,v,g;const{resume:_,pause:E}=Wn(()=>{const y=Date.now(),N=qt(1-(d-y)/p,0,1);f.value=g.map((b,w)=>{var A;return b+((A=m[w])!=null?A:0)*l.value(N)}),N>=1&&(E(),o())},{immediate:!1}),O=()=>{E(),p=D(r),m=f.value.map((y,N)=>{var b,w;return((b=c.value[N])!=null?b:0)-((w=f.value[N])!=null?w:0)}),g=f.value.slice(0),v=Date.now(),d=v+p,_(),i()},W=it(O,n,{immediate:!1});return x(c,()=>{D(s)||(D(n)<=0?O():W.start())},{deep:!0}),x(()=>D(s),y=>{y&&(f.value=c.value.slice(0),E())}),U(()=>{const y=D(s)?c:f;return ce(u.value)?y.value[0]:y.value})}function gs(e,t,n,s={}){var r,o,i;const{clone:a=!1,passive:l=!1,eventName:u,deep:c=!1,defaultValue:f}=s,p=re(),m=n||(p==null?void 0:p.emit)||((r=p==null?void 0:p.$emit)==null?void 0:r.bind(p))||((i=(o=p==null?void 0:p.proxy)==null?void 0:o.$emit)==null?void 0:i.bind(p==null?void 0:p.proxy));let d=u;t||(t="modelValue"),d=u||d||`update:${t.toString()}`;const v=_=>a?_e(a)?a(_):Rn(_):_,g=()=>Jt(e[t])?v(e[t]):f;if(l){const _=g(),E=S(_);return x(()=>e[t],O=>E.value=v(O)),x(E,O=>{(O!==e[t]||c)&&m(d,O)},{deep:c}),E}else return U({get(){return g()},set(_){m(d,_)}})}function bs({window:e=M}={}){if(!e)return S(!1);const t=S(e.document.hasFocus());return C(e,"blur",()=>{t.value=!1}),C(e,"focus",()=>{t.value=!0}),t}function _s(e={}){const{window:t=M,initialWidth:n=1/0,initialHeight:s=1/0,listenOrientation:r=!0,includeScrollbar:o=!0}=e,i=S(n),a=S(s),l=()=>{t&&(o?(i.value=t.innerWidth,a.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,a.value=t.document.documentElement.clientHeight))};return l(),Se(l),C("resize",l,{passive:!0}),r&&C("orientationchange",l,{passive:!0}),{width:i,height:a}}export{us as A,ps as B,bs as C,vs as D,hs as E,ls as F,ms as G,at as T,ye as V,_s as a,ds as b,C as c,ss as d,Un as e,fs as f,ve as g,ns as h,gs as i,os as j,is as k,fn as l,Zn as m,Fn as n,cs as o,as as p,es as q,We as r,ts as s,mt as t,F as u,An as v,rs as w,En as x,ht as y,wn as z};
