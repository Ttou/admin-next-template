import{_,b as g,g as y}from"./index-28b7f4a5.js";import{au as r,av as p,aF as m,aB as n,a_ as a,aK as C,d as v,r as T,g as h,ah as b,ax as c,aL as f,aZ as $}from"./chunk-libs-c3002d95.js";function k(e,i,d,s,l,o){const t=r("Toolbar"),u=r("Editor");return e.editorVisible?(p(),m("div",{key:0,style:a(e.computedWrapStyle)},[n(t,{editor:e.editor,defaultConfig:e.toolbarConfig,style:a(e.computedToolbarStyle)},null,8,["editor","defaultConfig","style"]),n(u,{defaultConfig:e.editorConfig,defaultHtml:e.editorHtml,style:a(e.computedEditorStyle),onOnCreated:e.handleCreated},null,8,["defaultConfig","defaultHtml","style","onOnCreated"])],4)):(p(),m("div",{key:1,style:a(e.computedWrapStyle)},[C("div",{style:a([e.computedEditorStyle,{display:"flex",justifyContent:"center",alignItems:"center"}])}," 编辑器正在初始化... ",4)],4))}const B=_(g,[["render",k]]),E=v({components:{ProEditor:B},setup(){const e=T({editorConfig:{editorHtml:"",editorVisible:!1},editorRef:void 0}),{$message:i}=y();function d(){var t;const o=(t=e.editorRef)==null?void 0:t.editor.getHtml();i.info(o)}function s(){var t;const o=(t=e.editorRef)==null?void 0:t.editor.getText();i.info(o)}function l(){var o;(o=e.editorRef)==null||o.editor.clear()}return h(()=>{setTimeout(()=>{e.editorConfig.editorHtml="<p><strong>哈哈</strong></p>",e.editorConfig.editorVisible=!0},1500)}),{...b(e),handleGetHTML:d,handleGetTXT:s,handleClear:l}}});const H={class:"view"},R={class:"btnsWrap"};function S(e,i,d,s,l,o){const t=r("el-button"),u=r("ProEditor");return p(),m("div",H,[C("div",R,[n(t,{onClick:e.handleGetHTML},{default:c(()=>[f("获取 HTML")]),_:1},8,["onClick"]),n(t,{onClick:e.handleGetTXT},{default:c(()=>[f("获取 TXT")]),_:1},8,["onClick"]),n(t,{onClick:e.handleClear},{default:c(()=>[f("清除内容")]),_:1},8,["onClick"])]),n(u,$({ref:"editorRef"},e.editorConfig),null,16)])}const G=_(E,[["render",S],["__scopeId","data-v-a9995676"]]);export{G as default};
