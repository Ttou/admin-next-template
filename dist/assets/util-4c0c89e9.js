import{F as t}from"./dayjs.min-bc4b3a60.js";import"./base-3117a520.js";import"./el-message-cf125374.js";import{E as a}from"./index-387dc701.js";let s=(o=21)=>crypto.getRandomValues(new Uint8Array(o)).reduce((e,r)=>(r&=63,r<36?e+=r.toString(36):r<62?e+=(r-26).toString(36).toUpperCase():r>62?e+="-":e+="_",e),"");async function f(o){const{copied:e,copy:r,isSupported:n}=t();return n?(await r(o),e.value):(a.warning("不支持复制到剪贴板"),!1)}function l(o){return s(o)}export{f as c,l as g};
