var c=Object.defineProperty;var s=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var u=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&u(e,a,t[a]);if(s)for(var a of s(t))g.call(t,a)&&u(e,a,t[a]);return e};import{X as b,f as R,r as m,Y as r,Z as p,_ as o,$ as h,a0 as A,g as i,a1 as E,s as v,B as C,l as T}from"./index.65f8aa47.js";var D={getList(e){return b.get("/demo/list",{params:e})}},_=R({name:"DemoTable",setup(){const e=m({}),t=m({fixedHeight:!0,options:{showOverflow:!0,border:!0,loading:!1,keepSource:!0,toolbarConfig:{perfect:!0,custom:!0,refresh:!0,zoom:!0,slots:{buttons:"toolbar_buttons"}},editConfig:{trigger:"click",showStatus:!0},customConfig:{storage:!0},formConfig:{items:[{title:"\u8D26\u53F7",field:"account",itemRender:{name:r.AInput,props:{placeholder:"\u8BF7\u8F93\u5165"}}},{title:"\u6635\u79F0",field:"nickname",itemRender:{name:r.AInput,props:{placeholder:"\u8BF7\u8F93\u5165"}}},{title:"\u89D2\u8272",field:"role",itemRender:{name:r.ASelect,props:{placeholder:"\u8BF7\u9009\u62E9"},options:[{label:"admin",value:"admin"},{label:"normal",value:"normal"}]}},{title:"\u72B6\u6001",field:"status",itemRender:{name:r.ASelect,props:{placeholder:"\u8BF7\u9009\u62E9"},options:[{label:"\u7981\u7528",value:"0"},{label:"\u542F\u7528",value:"1"}]}},{title:"\u65F6\u95F4",field:"date",itemRender:{name:p.FormItemDate,props:{type:"range",placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"],valueFormat:"YYYY-MM-DD HH:mm:ss"}}},{itemRender:{name:p.FormItemBtns}}]},columns:[{type:"checkbox",width:50},{title:"ID",field:"id"},{title:"\u8D26\u53F7",field:"account"},{title:"\u90AE\u7BB1",field:"email"},{title:"\u6635\u79F0",field:"nickname",editRender:{name:o.AInput}},{title:"\u89D2\u8272",field:"role"},{title:"\u72B6\u6001",field:"status",editRender:{name:o.ASelect,options:[{label:"\u7981\u7528",value:"0"},{label:"\u542F\u7528",value:"1"}]}},{title:"\u5907\u6CE8",field:"remark",editRender:{name:o.AInput}},{title:"\u521B\u5EFA\u65F6\u95F4",field:"createTs",formatter:h.Date}],pagerConfig:{pageSize:15},proxyConfig:{seq:!0,form:!0,props:{result:"content",total:"total"},ajax:{query:async({page:n,form:l})=>(l.date&&(l.start=l.date[0],l.end=l.date[1],l=A(l,["date"])),await D.getList(d({pageSize:n.pageSize,current:n.currentPage},l)))}}}});function a(){e.value.table.commitProxy("query")}return{tableRef:e,tableConfig:t,handleCustomRefresh:a}},render(){return i("div",null,[i(E,v({ref:"tableRef"},this.tableConfig),{toolbar_buttons:()=>i(C,{type:"link",onClick:this.handleCustomRefresh},{default:()=>[T("\u81EA\u5B9A\u4E49\u5237\u65B0")]})})])}});export{_ as default};
