import{d as e,r as t,c as a,z as n,G as l,H as d,at as o}from"./vendor.464c5deb.js";import{a as r}from"./index.5883e170.js";var i=e({name:"DemoEditor",setup(){const e=t({});return{editorRef:e,handleGetHTML:function(){const t=e.value.editor.txt.html();o.info(t)},handleGetTXT:function(){const t=e.value.editor.txt.text();o.info(t)},handleClear:function(){e.value.editor.txt.clear()}}},render(){return a("div",{class:"demo-editor-view"},[a("div",{class:"btns-wrap"},[a(n,null,{default:()=>[a(l,{onClick:this.handleGetHTML},{default:()=>[d("获取 HTML")]}),a(l,{onClick:this.handleGetTXT},{default:()=>[d("获取 TXT")]}),a(l,{onClick:this.handleClear},{default:()=>[d("清除内容")]})]})]),a(r,{ref:"editorRef"},null)])}});export{i as default};
