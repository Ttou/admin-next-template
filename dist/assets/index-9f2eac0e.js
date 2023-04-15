import{d as U,r as q,t as A,_ as w,a as n,b as u,c as i,e as o,w as a,F as s,f as p,g as f,j as d,i as y}from"./index-a75ac545.js";const B=U({setup(){const e=q({formRef:{},formModel:{name:"",zone:"",date:"",delivery:"",type:[],resource:"",desc:""},formRules:{name:[{required:!0,message:"请输入",trigger:"blur"},{min:3,max:5,message:"长度 3 到 5",trigger:"blur"}],zone:[{required:!0,message:"请选择",trigger:"change"}],date:[{required:!0,message:"请选择",trigger:"change",type:"object"}],type:[{type:"array",required:!0,message:"请选择",trigger:"change"}],resource:[{required:!0,message:"请选择",trigger:"change"}],desc:[{required:!0,message:"请输入",trigger:"blur"}]},zoneOptions:[{label:"ShangHai",value:"shanghai"},{label:"BeiJing",value:"beijing"}],typeOptions:[{label:"Online",value:"1"},{label:"Promotion",value:"2"},{label:"Offline",value:"3"}],resourceOptions:[{label:"Sponsor",value:"1"},{label:"Venue",value:"2"}]});function t(){e.formRef.resetFields()}function c(){e.formRef.clearValidate()}function b(){e.formRef.validate(_=>{})}return{...A(e),handleReset:t,handleCancel:c,handleSubmit:b}}});function S(e,t,c,b,_,D){const g=n("el-input"),r=n("el-form-item"),v=n("el-option"),V=n("el-select"),k=n("el-date-picker"),M=n("el-switch"),C=n("el-checkbox"),R=n("el-checkbox-group"),h=n("el-radio"),z=n("el-radio-group"),m=n("el-button"),O=n("el-form");return u(),i("div",null,[o(O,{ref:"formRef",model:e.formModel,rules:e.formRules,labelWidth:"120px",labelPosition:"right"},{default:a(()=>[o(r,{label:"Activity name",prop:"name"},{default:a(()=>[o(g,{modelValue:e.formModel.name,"onUpdate:modelValue":t[0]||(t[0]=l=>e.formModel.name=l)},null,8,["modelValue"])]),_:1}),o(r,{label:"Activity zone",prop:"zone"},{default:a(()=>[o(V,{modelValue:e.formModel.zone,"onUpdate:modelValue":t[1]||(t[1]=l=>e.formModel.zone=l)},{default:a(()=>[(u(!0),i(s,null,p(e.zoneOptions,l=>(u(),f(v,{key:l.value,label:l.value,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(r,{label:"Activity time",prop:"date"},{default:a(()=>[o(k,{modelValue:e.formModel.date,"onUpdate:modelValue":t[2]||(t[2]=l=>e.formModel.date=l),style:{width:"100%"}},null,8,["modelValue"])]),_:1}),o(r,{label:"Instant delivery",prop:"delivery"},{default:a(()=>[o(M,{modelValue:e.formModel.delivery,"onUpdate:modelValue":t[3]||(t[3]=l=>e.formModel.delivery=l)},null,8,["modelValue"])]),_:1}),o(r,{label:"Activity type",prop:"type"},{default:a(()=>[o(R,{modelValue:e.formModel.type,"onUpdate:modelValue":t[4]||(t[4]=l=>e.formModel.type=l)},{default:a(()=>[(u(!0),i(s,null,p(e.typeOptions,l=>(u(),f(C,{key:l.value,label:l.value},{default:a(()=>[d(y(l.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(r,{label:"Resource"},{default:a(()=>[o(z,{modelValue:e.formModel.resource,"onUpdate:modelValue":t[5]||(t[5]=l=>e.formModel.resource=l)},{default:a(()=>[(u(!0),i(s,null,p(e.resourceOptions,l=>(u(),f(h,{key:l.value,label:l.value},{default:a(()=>[d(y(l.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(r,{label:"Activity form"},{default:a(()=>[o(g,{modelValue:e.formModel.desc,"onUpdate:modelValue":t[6]||(t[6]=l=>e.formModel.desc=l),type:"textarea"},null,8,["modelValue"])]),_:1}),o(r,null,{default:a(()=>[o(m,{type:"danger",onClick:e.handleReset},{default:a(()=>[d("重置")]),_:1},8,["onClick"]),o(m,{onClick:e.handleCancel},{default:a(()=>[d("取消")]),_:1},8,["onClick"]),o(m,{type:"primary",onClick:e.handleSubmit},{default:a(()=>[d("确定")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])])}const $=w(B,[["render",S]]);export{$ as default};
