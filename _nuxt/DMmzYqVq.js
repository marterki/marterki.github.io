import{u as s}from"./Dx8ACb27.js";import{au as f,v as i,A as r,r as m}from"./Fj0ETvyU.js";const d={current:{type:String,default:""},parent:{type:Boolean,default:!0}};function C(t,n,u,a){if(!t.parent)return{};const c=f(t,"parent"),e=i(t.current||""),{exposeState:o}=s(t,u,a);return o({current:e,parent:c}),r(e,()=>{n.emit("currentChanged",e.value)}),r(()=>t.current,()=>{t.current&&(e.value=t.current)}),{attr:m(()=>({"data-bv-current":e.value}))}}export{d as C,C as u};
