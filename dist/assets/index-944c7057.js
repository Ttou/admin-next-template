import{ab as C,aQ as b,aR as T,aS as v,aq as c,aT as S,ad as s,ae as m,av as y,ak as a,aU as i,aA as _,Z as h,a9 as E,_ as B,ag as f,aB as p,aP as k}from"./chunk-libs-56e19005.js";import{_ as g,g as $}from"./index-2c75c197.js";const H=()=>({wrapStyle:{type:Object,default:()=>({})},toolbarConfig:{type:Object,default:()=>({})},toolbarStyle:{type:Object,default:()=>({})},editorConfig:{type:Object,default:()=>({})},editorStyle:{type:Object,default:()=>({})},editorHtml:{type:String,default:""},editorVisible:{type:Boolean,default:!0}}),R=C({name:"ProEditor",components:{Editor:b,Toolbar:T},props:H(),setup(e){const t=v(),r=c(()=>({border:"1px solid #ccc",zIndex:9999,...e.wrapStyle})),d=c(()=>({borderBottom:"1px solid #ccc",...e.toolbarStyle})),l=c(()=>({height:"500px",...e.editorStyle}));function o(n){t.value=n}return S(()=>{t.value&&t.value.destroy()}),{editor:t,computedWrapStyle:r,computedToolbarStyle:d,computedEditorStyle:l,handleCreated:o}}});function O(e,t,r,d,l,o){const n=s("Toolbar"),u=s("Editor");return e.editorVisible?(m(),y("div",{key:0,style:i(e.computedWrapStyle)},[a(n,{editor:e.editor,defaultConfig:e.toolbarConfig,style:i(e.computedToolbarStyle)},null,8,["editor","defaultConfig","style"]),a(u,{defaultConfig:e.editorConfig,defaultHtml:e.editorHtml,style:i(e.computedEditorStyle),onOnCreated:e.handleCreated},null,8,["defaultConfig","defaultHtml","style","onOnCreated"])],4)):(m(),y("div",{key:1,style:i(e.computedWrapStyle)},[_("div",{style:i([e.computedEditorStyle,{display:"flex",justifyContent:"center",alignItems:"center"}])}," 编辑器正在初始化... ",4)],4))}const P=g(R,[["render",O]]),V=C({components:{ProEditor:P},setup(){const e=h({editorConfig:{editorHtml:"",editorVisible:!1},editorRef:{}}),{$message:t}=$();function r(){const o=e.editorRef.editor.getHtml();t.info(o)}function d(){const o=e.editorRef.editor.getText();t.info(o)}function l(){e.editorRef.editor.clear()}return E(()=>{setTimeout(()=>{e.editorConfig.editorHtml="<p><strong>哈哈</strong></p>",e.editorConfig.editorVisible=!0},1500)}),{...B(e),handleGetHTML:r,handleGetTXT:d,handleClear:l}}});const j={class:"view"},w={class:"btnsWrap"};function F(e,t,r,d,l,o){const n=s("el-button"),u=s("ProEditor");return m(),y("div",j,[_("div",w,[a(n,{onClick:e.handleGetHTML},{default:f(()=>[p("获取 HTML")]),_:1},8,["onClick"]),a(n,{onClick:e.handleGetTXT},{default:f(()=>[p("获取 TXT")]),_:1},8,["onClick"]),a(n,{onClick:e.handleClear},{default:f(()=>[p("清除内容")]),_:1},8,["onClick"])]),a(u,k({ref:"editorRef"},e.editorConfig),null,16)])}const M=g(V,[["render",F],["__scopeId","data-v-1ccf6684"]]);export{M as default};
