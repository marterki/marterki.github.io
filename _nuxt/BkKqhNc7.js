import{m,aq as f,ar as I,A as r,as as d,o as x,c as v,y as _,_ as S}from"./KaTgO7Az.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){f(e=>({efdb04fa:p.value}));const s=I(),t=u,l=r(()=>{var e,n;return(n=(e=s.nuxtIcon)==null?void 0:e.aliases)!=null&&n[t.name]?s.nuxtIcon.aliases[t.name]:t.name}),c=r(()=>d(l.value)),p=r(()=>{var o,a;const e=(a=(o=s.nuxtIcon)==null?void 0:o.iconifyApiOptions)==null?void 0:a.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${c.value.prefix}/${c.value.name}.svg')`}),i=r(()=>{var n,o,a;if(!t.size&&typeof((n=s.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((o=s.nuxtIcon)!=null&&o.size))return;const e=t.size||((a=s.nuxtIcon)==null?void 0:a.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(x(),v("span",{style:_({width:i.value,height:i.value})},null,4))}}),C=S(y,[["__scopeId","data-v-41e8d397"]]);export{C as default};
