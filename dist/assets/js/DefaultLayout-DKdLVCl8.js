import{d as h,f as u,j as e,b1 as ne,b2 as ae,b3 as le,I as c,aY as _,aZ as j,b4 as oe,ar as se,al as ie,b5 as ue,r as C,b6 as re,aj as K,v as $,b7 as ce,A as T,b8 as N,b9 as b,av as g,ba as q,g as G,bb as W,bc as de,bd as he,be as pe,ag as me,B as fe,h as be,x as ge,y as ye,bf as ve,bg as Se,bh as k,bi as O,bj as F,bk as B,bl as _e}from"./chunk-libs-DtgR5I1o.js";import{k as J,l as Ce,u as M,m as R,j as Te,g as U,n as I}from"./index-BVy1FSbd.js";const Me=h({name:"Content",setup(){const t=J();return{cachedTabs:u(()=>t.cachedTabs)}},render(){return e(le,null,{default:({Component:t,route:n})=>e(ne,{name:"fade-slide",mode:"out-in",appear:!0},{default:()=>[e(ae,{max:20,include:this.cachedTabs},[e(t,{key:n.fullPath},null)])]})})}}),we="logo__guxAe",ke="logoIcon__RpGcC",P={logo:we,logoIcon:ke},Oe=h({name:"Logo",render(){return e("div",{class:P.logo},[e(c,{class:P.logoIcon,icon:"@local:custom:logo"},null)])}}),A=h({name:"MainMenu",props:{item:{type:Object,required:!0}},setup(t){const n=_(),o=j(),l=u(()=>t.item.meta?!t.item.meta.hidden:!1);function r(){n.path!==t.item.path&&o.push(t.item.path).catch(s=>{console.error(s)})}return{show:l,handleJump:r}},render(){return this.show?e(oe,{index:this.item.path,onClick:this.handleJump},{default:()=>this.item.meta.icon?e(c,{icon:this.item.meta.icon},null):null,title:()=>e("span",null,[this.item.meta.title])}):null}}),De="menu__7wVZi",Ee={menu:De},xe="popper__6mcFT",Re={popper:xe},H=h({name:"SubMenu",props:{item:{type:Object,required:!0}},setup(t){return{onlyOneChild:u(()=>t.item.children.length===1?t.item.meta?!t.item.meta.alwaysShow:!0:!1)}},render(){return this.onlyOneChild?e(A,{item:this.item.children[0]},null):e(ue,{index:this.item.path,popperClass:Re.popper},{title:()=>e(se,null,[this.item.meta.icon?e(c,{icon:this.item.meta.icon},null):null,e("span",null,[this.item.meta.title])]),default:()=>this.item.children.map(t=>t.children?e(ie("sub-menu"),{item:t,key:t.path},null):e(A,{item:t,key:t.path},null))})}});function Ae(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!T(t)}const je=h({name:"Menu",components:{SubMenu:H},setup(){const t=C({list:[]}),n=_(),o=Ce(),l=M(),r=u(()=>re(o.routes)),s=u(()=>l.$state),a=u(()=>n.path);function v(m,S=""){for(const d of m)if(d.path=S+(d.path.startsWith("/")?d.path:"/".concat(d.path)),delete d.component,delete d.redirect,d.children){if(d.children.length===0)continue;v(d.children,d.path)}return m}function w(){const m=v(r.value);t.list=m}return K(()=>{w()}),{...$(t),CSS_VARS:R,activeMenu:a,setting:s}},render(){let t;return e(ce,{mode:"vertical",class:Ee.menu,defaultActive:this.activeMenu,backgroundColor:this.CSS_VARS.menuBg,textColor:this.CSS_VARS.menuText,activeTextColor:this.CSS_VARS.menuActiveText,collapse:!this.setting.sideOpened,collapseTransition:!1,uniqueOpened:!0},Ae(t=this.list.map(n=>n.children?e(H,{item:n,key:n.path},null):e(A,{item:n,key:n.path},null)))?t:{default:()=>[t]})}}),$e="avatarWrapper__fSpCT",Le="avatar__thdiM",We="avatarDropdownMenu__QS9oQ",D={avatarWrapper:$e,avatar:Le,avatarDropdownMenu:We},Fe=h({name:"Avatar",setup(){const t=C({commandMap:{logout:()=>r()}}),n=j(),o=Te(),{$msgbox:l}=U();function r(){l.confirm("确认退出登录？","提示",{type:"warning"}).then(async()=>{await o.logout(),n.replace({path:"/login"})}).catch(()=>{})}function s(a){t.commandMap[a]()}return{handleCommand:s}},render(){return e(q,{onCommand:this.handleCommand},{default:()=>e("div",{class:D.avatarWrapper},[e(c,{class:D.avatar,icon:"@local:custom:avatar",inline:!0},null)]),dropdown:()=>e(N,{class:D.avatarDropdownMenu},{default:()=>[e(b,{command:"logout"},{default:()=>[e(c,{icon:"@local:icon-park-outline:logout",inline:!0},null),e("span",null,[g("退出登录")])]})]})})}}),Be="breadcrumb__X6SBW",Ie={breadcrumb:Be};function Pe(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!T(t)}const He=h({name:"Breadcrumb",setup(){const t=C({breadcrumbs:[]}),n=_();function o(){var s;const l=n.matched,r=[];for(const a of l)a.path!=="/"&&r.push({path:a.path.startsWith("/")?a.path:"/".concat(a.path),title:((s=a.meta)==null?void 0:s.title)||"-"});t.breadcrumbs=r}return G(()=>n.path,l=>{l.startsWith("/redirect/")||o()}),K(()=>{o()}),{...$(t)}},render(){let t;return e(de,{class:Ie.breadcrumb},Pe(t=this.breadcrumbs.map((n,o)=>o===this.breadcrumbs.length-1?e(W,null,{default:()=>[n.title]}):e(W,{to:{path:n.path}},{default:()=>[n.title]})))?t:{default:()=>[t]})}}),Ve="navbar__oMEpT",Ke="left__32oF1",Ne="right__HxIwx",E={navbar:Ve,left:Ke,right:Ne},qe=h({name:"ScreenFull",setup(){const{isFullscreen:t,isSupported:n,toggle:o}=he(),{$message:l}=U(),r=u(()=>t.value?"@local:icon-park-outline:off-screen":"@local:icon-park-outline:full-screen");function s(){n?o():l.warning("浏览器不支持全屏")}return{icon:r,handleClick:s}},render(){return e("div",{title:"全屏",onClick:this.handleClick},[e(c,{icon:this.icon,inline:!0},null)])}}),Ge="trigger__MwLP9",Je={trigger:Ge},Ue=h({name:"Trigger",setup(){const t=M(),n=u(()=>!t.sideOpened),o=u(()=>n.value?"@local:icon-park-outline:menu-unfold":"@local:icon-park-outline:menu-fold");function l(){t.change({key:"sideOpened",value:n.value})}return{collapsed:n,icon:o,handleClick:l}},render(){return e(c,{class:Je.trigger,icon:this.icon,onClick:pe(this.handleClick,["native"])},null)}}),Qe=h({name:"Navbar",render(){return e("div",{class:E.navbar},[e("div",{class:E.left},[e(Ue,null,null),e(He,null,null)]),e("div",{class:E.right},[e(me,{size:15},{default:()=>[e(qe,null,null),e(Fe,null,null)]})])])}}),Ze="tabbar__vE4we",ze="tabsMenu__REfEi",Xe="tabsDropdownMenu__j4BGb",x={tabbar:Ze,tabsMenu:ze,tabsDropdownMenu:Xe};function Ye(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!T(t)}const V=h({name:"Tabbar",setup(){const t=C({activeKey:"",commandMap:{refresh:()=>d(),closeLeft:()=>Z(),closeRight:()=>z(),closeOther:()=>X(),closeAll:()=>Y()}}),n=_(),o=j(),l=J(),r=M(),s=u(()=>l.visitedTabs),a=u(()=>s.value.findIndex(i=>i.fullPath===t.activeKey)===0),v=u(()=>s.value.findIndex(i=>i.fullPath===t.activeKey)===s.value.length-1),w=u(()=>s.value.length<=1);function m(i){return t.activeKey===i.fullPath}function S(){const{name:i,path:p,fullPath:y}=n;return i&&[I.LOGIN,I.ERROR].indexOf(p)===-1&&(l.addTab(n),t.activeKey=y),!1}function d(){l.delCachedTab(n).then(()=>{const{fullPath:i}=n;fe(()=>{o.replace({path:"/redirect"+i})})})}function Q(i){const p=s.value.find(y=>y.fullPath===i);l.delTab(p).then(({visitedTabs:y})=>{m(p)&&L(y)})}function Z(){l.delLeftTabs(n)}function z(){l.delRightTabs(n)}function X(){l.delOthersTabs(n)}function Y(){l.delAllTabs().then(({visitedTabs:i})=>{L(i)})}function ee(i){o.push(i)}function L(i){const p=i.slice(-1)[0];p?o.push(p.fullPath):n.name===r.homeRoute.name?o.replace({path:"/redirect"+n.fullPath}):o.replace("/")}function te(i){t.commandMap[i]()}return G(()=>n.path,()=>{S()}),be(()=>{S()}),{...$(t),visitedTabs:s,closeLeftDisabled:a,closeRightDisabled:v,closeOtherDisabled:w,handleCloseTab:Q,handleSelectTab:ee,handleCommand:te}},render(){let t;return e("div",{class:x.tabbar},[e(ge,{modelValue:this.activeKey,"onUpdate:modelValue":n=>this.activeKey=n,onTabChange:this.handleSelectTab,onTabRemove:this.handleCloseTab},Ye(t=this.visitedTabs.map(n=>e(ye,{key:n.fullPath,name:n.fullPath,label:n.meta.title,closable:!0},null)))?t:{default:()=>[t]}),e(q,null,{default:()=>e("div",{class:x.tabsMenu},[e(c,{icon:"@local:icon-park-outline:down",inline:!0},null)]),dropdown:()=>e(N,{class:x.tabsDropdownMenu},{default:()=>[e(b,{command:"refresh"},{default:()=>[e(c,{icon:"@local:icon-park-outline:redo",inline:!0},null),e("span",null,[g("刷新页面")])]}),e(b,{command:"closeLeft",disabled:this.closeLeftDisabled,divided:!0},{default:()=>[e(c,{icon:"@local:icon-park-outline:to-left",inline:!0},null),e("span",null,[g("关闭左侧")])]}),e(b,{command:"closeRight",disabled:this.closeRightDisabled},{default:()=>[e(c,{icon:"@local:icon-park-outline:to-right",inline:!0},null),e("span",null,[g("关闭右侧")])]}),e(b,{command:"closeOther",disabled:this.closeOtherDisabled,divided:!0},{default:()=>[e(c,{icon:"@local:icon-park-outline:close",inline:!0},null),e("span",null,[g("关闭其它")])]}),e(b,{command:"closeAll"},{default:()=>[e(c,{icon:"@local:icon-park-outline:close-one",inline:!0},null),e("span",null,[g("关闭所有")])]})]})})])}}),et="layout__ka9hA",tt="layoutSide__Jaj8o",nt="layoutMain__7naRu",at="layoutHeader__5DDHg",lt="layoutContent__3Boka",f={layout:et,layoutSide:tt,layoutMain:nt,layoutHeader:at,layoutContent:lt};function ot(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!T(t)}const ut=h({name:"DefaultLayout",setup(){const t=M(),n=u(()=>t.$state),o=u(()=>n.value.sideOpened?n.value.sideOpenedWidth:n.value.sideClosedWidth),l=u(()=>{const a={};return n.value.sideOpened?(a.marginLeft=n.value.sideOpenedWidth,a.width="calc(100vw - ".concat(n.value.sideOpenedWidth,")")):(a.marginLeft=n.value.sideClosedWidth,a.width="calc(100vw - ".concat(n.value.sideClosedWidth,")")),a}),r=u(()=>{const a={height:R.headerHeight};return n.value.fixedHeader&&(a.position="sticky",a.top="0px"),a}),s=u(()=>{const a={};return n.value.fixedHeader&&(a.position="sticky",a.top=R.headerHeight),a});return{setting:n,asideWidth:o,mainStyle:l,headerStyle:r,tabbarStyle:s}},render(){const t=()=>e(_e,{class:f.layoutHeader,style:this.headerStyle},{default:()=>[e(Qe,null,null)]}),n=e(ve,{class:f.layoutContent},{default:()=>[e(Me,null,null)]});return e(O,{class:f.layout},{default:()=>[e(Se,{class:f.layoutSide,width:this.asideWidth},{default:()=>[e(Oe,null,null),e(k,null,{default:()=>[e(je,null,null)]})]}),this.setting.fixedHeader?e(O,{class:f.layoutMain,style:this.mainStyle,direction:"vertical"},{default:()=>[e(t,null,null),F(e(V,{style:this.tabbarStyle},null),[[B,this.setting.tabbar]]),e(k,{wrapClass:"page",wrapStyle:"flex: 1",viewStyle:"display: flex; min-height: 100%;"},ot(n)?n:{default:()=>[n]})]}):e(O,{class:f.layoutMain,style:this.mainStyle,direction:"vertical"},{default:()=>[e(k,{wrapClass:"page",wrapStyle:"flex: 1",viewStyle:"display: flex; flex-direction: column; min-height: 100%;"},{default:()=>[e(t,null,null),F(e(V,{style:this.tabbarStyle},null),[[B,this.setting.tabbar]]),n]})]})]})}});export{ut as default};
