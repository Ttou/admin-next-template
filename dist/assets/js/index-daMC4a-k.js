import{N as p,f as _,h as x,aU as v,r as E,aV as y,t as C,v as b,d as P,al as H,am as S,aq as k,j as f,ao as g,au as D,p as T,aW as w,V as B}from"./chunk-libs-C7zGgaOX.js";import{b as I,u as N,o as A,d as L,T as l,e as z,f as O,h as u,i as j,_ as q}from"./index-i85ONG-S.js";const M={getList(e){return I.get("/demo/list",{params:e})}};function V(e){const o=p(0),n=_(()=>o.value+"px"),a=N();function t(){const s=document.querySelector(".el-scrollbar__wrap.page");o.value=s.scrollHeight-(a.fixedHeader?24:114)-((e==null?void 0:e.extraHeight)||0)}return x(()=>{t()}),{pageHeight:o,pageHeightPx:n}}function F(e){const o=p();function n(r){var d,c;const i=(c=(d=e.value.formConfig)==null?void 0:d.items)==null?void 0:c.find(R=>R.field===r.field);v(i,r.key,r.value)}function a(){e.value.loading=!0}function t(){e.value.loading=!1}async function s(r){var i;try{a(),await(r==null?void 0:r()),await((i=o.value)==null?void 0:i.commitProxy("query"))}finally{t()}}return{gridRef:o,updateFormItem:n,showLoading:a,hideLoading:t,refresh:s}}const h=[{label:"管理员",value:"admin"},{label:"普通用户",value:"normal"}],m=[{label:"禁用",value:"0"},{label:"启用",value:"1"}],J=A(h);function Y(){const e=E({gridConfig:{id:L(),showOverflow:!0,border:!0,loading:!1,keepSource:!0,height:"auto",resizeConfig:{refreshDelay:10},toolbarConfig:{perfect:!0,custom:!0,refresh:!0,zoom:!0,slots:{buttons:"toolbar_buttons"}},editConfig:{trigger:"click",showStatus:!0},customConfig:{storage:!0},formConfig:{items:[{title:"账号",field:"account",itemRender:{name:l.Input,props:{placeholder:"请输入"}}},{title:"昵称",field:"nickname",itemRender:{name:l.Input,props:{placeholder:"请输入"}}},{title:"角色",field:"role",itemRender:{name:l.Select,options:h,props:{placeholder:"请选择"}}},{title:"状态",field:"status",itemRender:{name:l.Select,options:m,props:{placeholder:"请选择"}}},{title:"时间",field:"date",itemRender:{name:l.DatePicker,props:{type:"datetimerange",startPlaceholder:"开始时间",endPlaceholder:"结束时间",format:"YYYY-MM-DD HH:mm:ss"},defaultValue:[z(6),new Date]}},{itemRender:{name:O.FormItemBtns}}]},columns:[{type:"checkbox",width:50},{title:"ID",field:"id"},{title:"账号",field:"account"},{title:"邮箱",field:"email"},{title:"昵称",field:"nickname",editRender:{name:u.Input}},{title:"角色",field:"role",formatter({cellValue:a}){return J[a]}},{title:"状态",field:"status",editRender:{name:u.Select,options:m}},{title:"备注",field:"remark",editRender:{name:u.Input}},{title:"创建时间",field:"createTs",formatter:j.Date}],pagerConfig:{background:!0,layouts:["PrevJump","PrevPage","JumpNumber","NextPage","NextJump","Sizes","FullJump","Total"],pageSize:15},proxyConfig:{seq:!0,form:!0,props:{result:"content",total:"total"},ajax:{query:async({page:a,form:t})=>(t.date&&(t.start=t.date[0],t.end=t.date[1],t=y(t,["date"])),await M.getList({pageSize:a.pageSize,current:a.currentPage,...t}))}}}}),o=F(C(e,"gridConfig"));function n(){o.refresh()}return{...b(e),gridExtHook:o,handleCustomRefresh:n}}const $=P({setup(){const{gridExtHook:e,...o}=Y(),{pageHeightPx:n}=V();return{...o,gridRef:e.gridRef,pageHeightPx:n}}});function G(e,o,n,a,t,s){const r=B,i=H("vxe-grid");return S(),k("div",{style:w({height:e.pageHeightPx})},[f(i,T({ref:"gridRef"},e.gridConfig),{toolbar_buttons:g(()=>[f(r,{type:"primary",link:"",onClick:e.handleCustomRefresh},{default:g(()=>[D(" 自定义刷新 ")]),_:1},8,["onClick"])]),_:1},16)],4)}const K=q($,[["render",G]]);export{K as default};
