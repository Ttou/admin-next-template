import{d as c,r,b as e,Q as v,O as n,P as o,m as h,ar as s}from"./vendor.b0d7ea73.js";import{d as m}from"./index.69f68150.js";const p="view__oqq5F",T="btnsWrap__20hPn";var i={view:p,btnsWrap:T},g=c({name:"DemoEditor",setup(){const d=r({}),t=r({});function l(){const a=t.value.editor.getHtml();s.info(a)}function u(){const a=t.value.editor.getText();s.info(a)}function f(){t.value.editor.clear()}return{editorConfig:d,editorRef:t,handleGetHTML:l,handleGetTXT:u,handleClear:f}},render(){return e("div",{class:i.view},[e("div",{class:i.btnsWrap},[e(v,null,{default:()=>[e(n,{onClick:this.handleGetHTML},{default:()=>[o("\u83B7\u53D6 HTML")]}),e(n,{onClick:this.handleGetTXT},{default:()=>[o("\u83B7\u53D6 TXT")]}),e(n,{onClick:this.handleClear},{default:()=>[o("\u6E05\u9664\u5185\u5BB9")]})]})]),e(m,h({ref:"editorRef"},this.editorConfig),null)])}});export{g as default};
