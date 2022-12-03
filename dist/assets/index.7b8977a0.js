import{W as g,X as p,r as d,p as h,m as R,o as v,f as y,Y as l,Z as f,$ as s,a0 as x,a1 as A,g as u,a2 as E,s as b,B as C,k as S}from"./index.df394c16.js";function H(e,a,i){return e==null?e:g(e,a,i)}const T={getList(e){return p.get("/demo/list",{params:e})}};function D(e){const a=d(0),i=h(()=>a.value+"px"),r=R();function o(){const t=document.querySelector("#page");a.value=t.scrollHeight-(r.fixedHeader?20:110)-((e==null?void 0:e.extraHeight)||0)}return v(()=>{o()}),{pageHeight:a,pageHeightPx:i}}function I(e){const a=d({});function i(n){const c=e.value.formConfig.items.find(m=>m.field===n.field);H(c,n.key,n.value)}function r(){e.value.loading=!0}function o(){e.value.loading=!1}async function t(n){try{r(),await(n==null?void 0:n()),await a.value.commitProxy("query")}finally{o()}}return{tableRef:a,updateFormItem:i,showLoading:r,hideLoading:o,refresh:t}}const P=y({name:"DemoTable",setup(){const e=d({showOverflow:!0,border:!0,loading:!1,keepSource:!0,height:"auto",toolbarConfig:{perfect:!0,custom:!0,refresh:!0,zoom:!0,slots:{buttons:"toolbar_buttons"}},editConfig:{trigger:"click",showStatus:!0},customConfig:{storage:!0},formConfig:{items:[{title:"\u8D26\u53F7",field:"account",itemRender:{name:l.AInput,props:{placeholder:"\u8BF7\u8F93\u5165"}}},{title:"\u6635\u79F0",field:"nickname",itemRender:{name:l.AInput,props:{placeholder:"\u8BF7\u8F93\u5165"}}},{title:"\u89D2\u8272",field:"role",itemRender:{name:l.ASelect,props:{placeholder:"\u8BF7\u9009\u62E9"},options:[{label:"admin",value:"admin"},{label:"normal",value:"normal"}]}},{title:"\u72B6\u6001",field:"status",itemRender:{name:l.ASelect,props:{placeholder:"\u8BF7\u9009\u62E9"},options:[{label:"\u7981\u7528",value:"0"},{label:"\u542F\u7528",value:"1"}]}},{title:"\u65F6\u95F4",field:"date",itemRender:{name:f.FormItemDate,props:{type:"range",placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"],valueFormat:"YYYY-MM-DD HH:mm:ss"}}},{itemRender:{name:f.FormItemBtns}}]},columns:[{type:"checkbox",width:50},{title:"ID",field:"id"},{title:"\u8D26\u53F7",field:"account"},{title:"\u90AE\u7BB1",field:"email"},{title:"\u6635\u79F0",field:"nickname",editRender:{name:s.AInput}},{title:"\u89D2\u8272",field:"role"},{title:"\u72B6\u6001",field:"status",editRender:{name:s.ASelect,options:[{label:"\u7981\u7528",value:"0"},{label:"\u542F\u7528",value:"1"}]}},{title:"\u5907\u6CE8",field:"remark",editRender:{name:s.AInput}},{title:"\u521B\u5EFA\u65F6\u95F4",field:"createTs",formatter:x.Date}],pagerConfig:{pageSize:15},proxyConfig:{seq:!0,form:!0,props:{result:"content",total:"total"},ajax:{query:async({page:o,form:t})=>(t.date&&(t.start=t.date[0],t.end=t.date[1],t=A(t,["date"])),await T.getList({pageSize:o.pageSize,current:o.currentPage,...t}))}}}),{tableRef:a}=I(e),{pageHeightPx:i}=D();function r(){a.value.commitProxy("query")}return{tableRef:a,tableConfig:e,pageHeightPx:i,handleCustomRefresh:r}},render(){return u("div",{style:{height:this.pageHeightPx}},[u(E,b({ref:"tableRef"},this.tableConfig),{toolbar_buttons:()=>u(C,{type:"link",onClick:this.handleCustomRefresh},{default:()=>[S("\u81EA\u5B9A\u4E49\u5237\u65B0")]})})])}});export{P as default};
