var n=Object.defineProperty;var a=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;var l=(r,e,t)=>e in r?n(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,i=(r,e)=>{for(var t in e||(e={}))d.call(e,t)&&l(r,t,e[t]);if(a)for(var t of a(e))s.call(e,t)&&l(r,t,e[t]);return r};import{f as u,g as m}from"./index.5b5aff95.js";import{d as p,r as f,b as o}from"./vendor.cf969843.js";var c={getList(r){return u.get("/demo/list",{params:r})}},C=p({name:"DemoTable",setup(){return{tableConfig:f({options:{showOverflow:!0,border:!0,keepSource:!0,toolbarConfig:{perfect:!0,custom:!0,refresh:!0,zoom:!0},editConfig:{trigger:"click",showStatus:!0},customConfig:{storage:!0},formConfig:{items:[{title:"\u8D26\u53F7",field:"account",itemRender:{name:"AInput",props:{placeholder:"\u8BF7\u8F93\u5165"}}},{title:"\u6635\u79F0",field:"nickname",itemRender:{name:"AInput",props:{placeholder:"\u8BF7\u8F93\u5165"}}},{title:"\u89D2\u8272",field:"role",itemRender:{name:"ASelect",props:{placeholder:"\u8BF7\u9009\u62E9"},options:[{label:"admin",value:"admin"},{label:"normal",value:"normal"}]}},{title:"\u72B6\u6001",field:"status",itemRender:{name:"ASelect",props:{placeholder:"\u8BF7\u9009\u62E9"},options:[{label:"\u7981\u7528",value:"0"},{label:"\u542F\u7528",value:"1"}]}},{itemRender:{name:"FormItemBtns"}}]},columns:[{type:"checkbox",width:50},{title:"ID",field:"id"},{title:"\u8D26\u53F7",field:"account"},{title:"\u90AE\u7BB1",field:"email"},{title:"\u6635\u79F0",field:"nickname",editRender:{name:"AInput"}},{title:"\u89D2\u8272",field:"role"},{title:"\u72B6\u6001",field:"status",editRender:{name:"ASelect",options:[{label:"\u7981\u7528",value:"0"},{label:"\u542F\u7528",value:"1"}]}},{title:"\u5907\u6CE8",field:"remark",editRender:{name:"AInput"}},{title:"\u521B\u5EFA\u65F6\u95F4",field:"createTs"}],pagerConfig:{pageSize:15},proxyConfig:{seq:!0,form:!0,props:{result:"content",total:"total"},ajax:{query:async({page:e,form:t})=>await c.getList(i({pageSize:e.pageSize,current:e.currentPage},t))}}}})}},render(){return o("div",null,[o(m,this.tableConfig,null)])}});export{C as default};
