import{m as h,a$ as _,e as v,g as C,r as y,b0 as b,t as E,ah as x,d as H,b1 as P,au as f,av as S,aF as k,aB as m,ax as g,aL as T,aZ as D,a_ as I}from"./chunk-libs-acac76b8.js";import{d as B,u as w,T as l,e as p,f as d,h as G,_ as L}from"./index-d79228ea.js";import{g as A}from"./util-6d4f164d.js";function z(e){const o=h();function a(r){var u,c;const i=(c=(u=e.value.formConfig)==null?void 0:u.items)==null?void 0:c.find(R=>R.field===r.field);_(i,r.key,r.value)}function t(){e.value.loading=!0}function n(){e.value.loading=!1}async function s(r){var i;try{t(),await(r==null?void 0:r()),await((i=o.value)==null?void 0:i.commitProxy("query"))}finally{n()}}return{gridRef:o,updateFormItem:a,showLoading:t,hideLoading:n,refresh:s}}const F={getList(e){return B.get("/demo/list",{params:e})}};function M(e){const o=h(0),a=v(()=>o.value+"px"),t=w();function n(){const s=document.querySelector("#page");o.value=s.scrollHeight-(t.fixedHeader?20:110)-((e==null?void 0:e.extraHeight)||0)}return C(()=>{n()}),{pageHeight:o,pageHeightPx:a}}function N(){const e=y({gridConfig:{id:A(),showOverflow:!0,border:!0,loading:!1,keepSource:!0,height:"auto",resizeConfig:{refreshDelay:10},toolbarConfig:{perfect:!0,custom:!0,refresh:!0,zoom:!0,slots:{buttons:"toolbar_buttons"}},editConfig:{trigger:"click",showStatus:!0},customConfig:{storage:!0},formConfig:{items:[{title:"账号",field:"account",itemRender:{name:l.Input,props:{placeholder:"请输入"}}},{title:"昵称",field:"nickname",itemRender:{name:l.Input,props:{placeholder:"请输入"}}},{title:"角色",field:"role",itemRender:{name:l.Select,props:{placeholder:"请选择"},options:[{label:"admin",value:"admin"},{label:"normal",value:"normal"}]}},{title:"状态",field:"status",itemRender:{name:l.Select,props:{placeholder:"请选择"},options:[{label:"禁用",value:"0"},{label:"启用",value:"1"}]}},{title:"时间",field:"date",itemRender:{name:p.FormItemDate,props:{type:"datetimerange",startPlaceholder:"开始时间",endPlaceholder:"结束时间",format:"YYYY-MM-DD HH:mm:ss"}}},{itemRender:{name:p.FormItemBtns}}]},columns:[{type:"checkbox",width:50},{title:"ID",field:"id"},{title:"账号",field:"account"},{title:"邮箱",field:"email"},{title:"昵称",field:"nickname",editRender:{name:d.Input}},{title:"角色",field:"role"},{title:"状态",field:"status",editRender:{name:d.Select,options:[{label:"禁用",value:"0"},{label:"启用",value:"1"}]}},{title:"备注",field:"remark",editRender:{name:d.Input}},{title:"创建时间",field:"createTs",formatter:G.Date}],pagerConfig:{pageSize:15},proxyConfig:{seq:!0,form:!0,props:{result:"content",total:"total"},ajax:{query:async({page:a,form:t})=>(t.date&&(t.start=t.date[0],t.end=t.date[1],t=b(t,["date"])),await F.getList({pageSize:a.pageSize,current:a.currentPage,...t}))}}}}),o=z(E(e,"gridConfig"));return{...x(e),proGridHook:o}}function $({proGridHook:e}){function o(){e.refresh()}return{handleCustomRefresh:o}}const q=H({components:{ProGrid:P},setup(){const{proGridHook:e,...o}=N(),a=$({proGridHook:e}),{pageHeightPx:t}=M();return{...o,...a,gridRef:e.gridRef,pageHeightPx:t}}});function Y(e,o,a,t,n,s){const r=f("el-button"),i=f("ProGrid");return S(),k("div",{style:I({height:e.pageHeightPx})},[m(i,D({ref:"gridRef"},e.gridConfig),{toolbar_buttons:g(()=>[m(r,{type:"primary",link:"",onClick:e.handleCustomRefresh},{default:g(()=>[T(" 自定义刷新 ")]),_:1},8,["onClick"])]),_:1},16)],4)}const J=L(q,[["render",Y]]);export{J as default};
