import{d as s,r as u,c as e,z as f,G as n,H as d,at as r}from"./vendor.7d16df0f.js";import{d as c}from"./index.ea0562f2.js";var v="_1e73mcq1",m="_1e73mcq0",x=s({name:"DemoEditor",setup(){const t=u({});function l(){const a=t.value.editor.txt.html();r.info(a)}function o(){const a=t.value.editor.txt.text();r.info(a)}function i(){t.value.editor.txt.clear()}return{editorRef:t,handleGetHTML:l,handleGetTXT:o,handleClear:i}},render(){return e("div",{class:m},[e("div",{class:v},[e(f,null,{default:()=>[e(n,{onClick:this.handleGetHTML},{default:()=>[d("\u83B7\u53D6 HTML")]}),e(n,{onClick:this.handleGetTXT},{default:()=>[d("\u83B7\u53D6 TXT")]}),e(n,{onClick:this.handleClear},{default:()=>[d("\u6E05\u9664\u5185\u5BB9")]})]})]),e(c,{ref:"editorRef"},null)])}});export{x as default};
