import{c as P,a as Y,b as _,v as T,u as Z,C as A}from"./index-bc9ac8d3.js";import{T as ee,G as te}from"./index-f403bd98.js";import{R as ne,u as C,b as I}from"./vue-router-cbdf6480.js";import{d as h,c as r,x as e,aL as ae,F as $,R as le,O,a2 as B,$ as L,a4 as w,t as g,w as K,E as oe,o as se}from"./runtime-core.esm-bundler-487be079.js";import{I as u}from"./iconify-d80899a8.js";import{w as ie,B as re,v as ue,c as ce,A as de,t as V,s as v,r as J,j as he,k as W,y as me,z as fe,n as pe,m as D,p as be,q as ge}from"./index-55705184.js";import{a as ve}from"./index-4c378dbd.js";import{E as ye}from"./index-4fd97b01.js";import{E as x}from"./index-e213d9a8.js";import"./ajax-7ef056e0.js";import"./index-deddad90.js";import"./_baseClone-d814ff28.js";import"./plugin-vue_export-helper-f8bac1eb.js";import"./isObjectLike-46b91259.js";import"./index-b5d40b0a.js";import"./index-6fda5fc3.js";const Te=h({name:"Content",setup(){const t=P();return{cachedTabs:r(()=>t.cachedTabs)}},render(){return e(ne,null,{default:({Component:t,route:n})=>e(ee,{name:"fade-slide",mode:"out-in",appear:!0},{default:()=>[e(ae,{max:20,include:this.cachedTabs},[e(t,{key:n.fullPath},null)])]})})}}),Me="logo__0Fb31",Se="logoIcon__OnHtK",F={logo:Me,logoIcon:Se},_e=h({name:"Logo",render(){return e("div",{class:F.logo},[e(u,{class:F.logoIcon,icon:"logos:element"},null)])}}),k=h({name:"MainMenu",props:{item:{type:Object,required:!0}},setup(t){const n=C(),a=I(),l=r(()=>t.item.meta?!t.item.meta.hidden:!1);function c(){n.path!==t.item.path&&a.push(t.item.path).catch(i=>{console.error(i)})}return{show:l,handleJump:c}},render(){return this.show?e(ie,{index:this.item.path,onClick:this.handleJump},{title:()=>e($,null,[this.item.meta.icon?e(u,{class:"el-icon",icon:this.item.meta.icon},null):null,e("span",null,[this.item.meta.title])])}):null}}),Ce="menu__AgF98",Oe={menu:Ce},H=h({name:"SubMenu",props:{item:{type:Object,required:!0}},setup(t){return{onlyOneChild:r(()=>t.item.children.length===1?t.item.meta?!t.item.meta.alwaysShow:!0:!1)}},render(){return this.onlyOneChild?e(k,{item:this.item.children[0]},null):e(re,{index:this.item.path},{default:()=>{var t;return[(t=this.item.children)==null?void 0:t.map(n=>n.children?e(le("sub-menu"),{item:n},null):e(k,{item:n},null))]},title:()=>e($,null,[this.item.meta.icon?e(u,{class:"el-icon",icon:this.item.meta.icon},null):null,e("span",null,[this.item.meta.title])])})}});function we(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!w(t)}const Ee=h({name:"Menu",components:{SubMenu:H},setup(){const t=O({list:[]}),n=C(),a=Y(),l=_(),c=r(()=>ce(a.routes)),i=r(()=>l.$state),o=r(()=>n.path);function M(p,S=""){for(const d of p)if(d.path=S+(d.path.startsWith("/")?d.path:`/${d.path}`),delete d.component,delete d.redirect,d.children){if(d.children.length===0)continue;M(d.children,d.path)}return p}function E(){const p=M(c.value);t.list=p}return B(()=>{E()}),{...L(t),activeMenu:o,setting:i}},render(){let t;const n=a=>a.children?e(H,{item:a},null):e(k,{item:a},null);return e(ue,{class:Oe.menu,defaultActive:this.activeMenu,mode:"vertical",backgroundColor:T.menuBg,textColor:T.menuText,activeTextColor:T.menuActiveText,collapse:!this.setting.sideOpened,collapseTransition:!1,uniqueOpened:!0},we(t=this.list.map(n))?t:{default:()=>[t]})}}),De="navbar__FTOIk",xe="left__VJQck",Re="trigger__P08L-",ke="breadcrumb__MUGy0",Ie="right__qfruu",Le="avatarWrapper__jqgTM",je="avatar__-r1JW",Ae="avatarDropdownMenu__cXMSI",m={navbar:De,left:xe,trigger:Re,breadcrumb:ke,right:Ie,avatarWrapper:Le,avatar:je,avatarDropdownMenu:Ae},We=h({name:"Avatar",setup(){const t=O({commandMap:{logout:()=>l()}}),n=I(),a=Z();function l(){de.confirm("确认退出登录？","提示").then(async()=>{await a.logout(),n.replace({path:"/login"})}).catch(()=>{})}function c(i){t.commandMap[i]()}return{handleCommand:c}},render(){return e(J,{onCommand:this.handleCommand,placement:"bottom"},{default:()=>e("div",{class:m.avatarWrapper},[e(u,{class:m.avatar,icon:"custom:avatar",inline:!0},null)]),dropdown:()=>e(V,{class:m.avatarDropdownMenu},{default:()=>[e(v,{command:"logout"},{default:()=>[e(u,{icon:"ant-design:logout-outlined",inline:!0},null),e("span",null,[g("退出登录")])]})]})})}});function Fe(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!w(t)}const He=h({name:"Breadcrumb",setup(){const t=O({breadcrumbs:[]}),n=C();function a(){var i;const l=n.matched,c=[];for(const o of l)o.path!=="/"&&c.push({path:o.path.startsWith("/")?o.path:`/${o.path}`,title:((i=o.meta)==null?void 0:i.title)||"-"});t.breadcrumbs=c}return K(()=>n.path,l=>{l.startsWith("/redirect/")||a()}),B(()=>{a()}),{...L(t)}},render(){let t;const n=(a,l)=>l===this.breadcrumbs.length-1?e(W,null,{default:()=>[a.title]}):e(W,{to:{path:a.path}},{default:()=>[a.title]});return e(he,{class:m.breadcrumb},Fe(t=this.breadcrumbs.map(n))?t:{default:()=>[t]})}}),Pe=h({name:"ScreenFull",setup(){const{isFullscreen:t,isSupported:n,toggle:a}=te();function l(){n?a():ve.warning("浏览器不支持全屏")}return{isFullscreen:t,handleClick:l}},render(){return e("div",{title:"全屏",onClick:this.handleClick},[this.isFullscreen?e(u,{icon:"ant-design:fullscreen-exit-outlined",inline:!0},null):e(u,{icon:"ant-design:fullscreen-outlined",inline:!0},null)])}}),$e=h({name:"Trigger",setup(){const t=_(),n=r(()=>!t.sideOpened);function a(){t.change({key:"sideOpened",value:n.value})}return{collapsed:n,handleClick:a}},render(){return e(u,{class:m.trigger,icon:this.collapsed?"ant-design:menu-unfold-outlined":"ant-design:menu-fold-outlined",onClick:this.handleClick},null)}}),Be=h({name:"Navbar",render(){return e("div",{class:m.navbar},[e("div",{class:m.left},[e($e,null,null),e(He,null,null)]),e("div",{class:m.right},[e(ye,{size:15},{default:()=>[e(Pe,null,null),e(We,null,null)]})])])}}),Ke="tabbar__34JHT",Ve="tabsMenu__RvJvM",Je="tabsDropdownMenu__N4HIk",R={tabbar:Ke,tabsMenu:Ve,tabsDropdownMenu:Je};function Ne(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!w(t)}const qe=h({name:"Tabbar",setup(){const t=O({activeKey:"",commandMap:{refresh:()=>d(),closeLeft:()=>q(),closeRight:()=>U(),closeOther:()=>z(),closeAll:()=>G()}}),n=C(),a=I(),l=P(),c=_(),i=r(()=>l.visitedTabs),o=r(()=>i.value.findIndex(s=>s.fullPath===t.activeKey)===0),M=r(()=>i.value.findIndex(s=>s.fullPath===t.activeKey)===i.value.length-1),E=r(()=>i.value.length<=1);function p(s){return t.activeKey===s.fullPath}function S(){const{name:s,path:f,fullPath:y}=n;return s&&[A.LOGIN,A.ERROR].indexOf(f)===-1&&(l.addTab(n),t.activeKey=y),!1}function d(){l.delCachedTab(n).then(()=>{const{fullPath:s}=n;oe(()=>{a.replace({path:"/redirect"+s})})})}function N(s){const f=i.value.find(y=>y.fullPath===s);l.delTab(f).then(({visitedTabs:y})=>{p(f)&&j(y)})}function q(){l.delLeftTabs(n)}function U(){l.delRightTabs(n)}function z(){l.delOthersTabs(n)}function G(){l.delAllTabs().then(({visitedTabs:s})=>{j(s)})}function X(s){a.push(s)}function j(s){const f=s.slice(-1)[0];f?a.push(f.fullPath):n.name===c.homeRoute.name?a.replace({path:"/redirect"+n.fullPath}):a.replace("/")}function Q(s){t.commandMap[s]()}return K(()=>n.path,()=>{S()}),se(()=>{S()}),{...L(t),visitedTabs:i,closeLeftDisabled:o,closeRightDisabled:M,closeOtherDisabled:E,handleCloseTab:N,handleSelectTab:X,handleCommand:Q}},render(){let t;return e("div",{class:R.tabbar},[e(me,{modelValue:this.activeKey,"onUpdate:modelValue":n=>this.activeKey=n,onTabChange:this.handleSelectTab,onTabRemove:this.handleCloseTab},Ne(t=this.visitedTabs.map(n=>e(fe,{name:n.fullPath,label:n.meta.title,closable:!0,key:n.fullPath},null)))?t:{default:()=>[t]}),e(J,{onCommand:this.handleCommand,placement:"bottom-end"},{default:()=>e("div",{class:R.tabsMenu},[e(u,{icon:"ant-design:down-outlined",inline:!0},null)]),dropdown:()=>e(V,{class:R.tabsDropdownMenu},{default:()=>[e(v,{command:"refresh"},{default:()=>[e(u,{icon:"ant-design:reload-outlined",inline:!0},null),g("刷新页面")]}),e(v,{command:"closeLeft",disabled:this.closeLeftDisabled,divided:!0},{default:()=>[e(u,{icon:"ant-design:vertical-right-outlined",inline:!0},null),g("关闭左侧")]}),e(v,{command:"closeRight",disabled:this.closeRightDisabled},{default:()=>[e(u,{icon:"ant-design:vertical-left-outlined",inline:!0},null),g("关闭右侧")]}),e(v,{command:"closeOther",disabled:this.closeOtherDisabled,divided:!0},{default:()=>[e(u,{icon:"ant-design:close-outlined",inline:!0},null),g("关闭其它")]}),e(v,{command:"closeAll"},{default:()=>[e(u,{icon:"ant-design:close-circle-outlined",inline:!0},null),g("关闭所有")]})]})})])}}),Ue="layout__Ja1DU",ze="layoutSide__JeVKe",Ge="layoutMain__Mz8tS",Xe="layoutHeader__6vOlv",Qe="layoutContent__6MXuy",b={layout:Ue,layoutSide:ze,layoutMain:Ge,layoutHeader:Xe,layoutContent:Qe};function Ye(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!w(t)}const pt=h({name:"DefaultLayout",setup(){const t=_(),n=r(()=>t.$state),a=r(()=>n.value.sideOpened?n.value.sideOpenedWidth:n.value.sideClosedWidth),l=r(()=>{const o={};return n.value.sideOpened?(o.marginLeft=n.value.sideOpenedWidth,o.width=`calc(100vw - ${n.value.sideOpenedWidth})`):(o.marginLeft=n.value.sideClosedWidth,o.width=`calc(100vw - ${n.value.sideClosedWidth})`),o}),c=r(()=>{const o={height:T.headerHeight};return n.value.fixedHeader&&(o.position="sticky",o.top="0px"),o}),i=r(()=>{const o={};return n.value.fixedHeader&&(o.position="sticky",o.top=T.headerHeight),o});return{setting:n,asideWidth:a,mainStyle:l,headerStyle:c,tabbarStyle:i}},render(){let t;const n=()=>e(be,{class:b.layoutHeader,style:this.headerStyle},{default:()=>[e(Be,null,null)]}),a=()=>e(qe,{style:this.tabbarStyle},null),l=()=>e(ge,{class:b.layoutContent},{default:()=>[e(Te,null,null)]});return e(D,{class:b.layout},{default:()=>[e(pe,{class:b.layoutSide,width:this.asideWidth},{default:()=>[e(_e,null,null),e(x,null,{default:()=>[e(Ee,null,null)]})]}),this.setting.fixedHeader?e(D,{class:b.layoutMain,style:this.mainStyle},{default:()=>[n(),a(),e(x,{id:"page"},Ye(t=l())?t:{default:()=>[t]})]}):e(x,null,{default:()=>[e(D,{class:b.layoutMain,style:this.mainStyle},{default:()=>[n(),a(),l()]})]})]})}});export{pt as default};
