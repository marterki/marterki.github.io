import{d as f,r as u,q as w,u as h,s as T,x as $,a as k,b as N,y as m,c,j as x,z as d,A as E,I as C,e as o,t,i as l,D,o as n,C as I,_ as M}from"./6fDZchgU.js";import{_ as P,I as _}from"./Di_YN6tp.js";import{p as z}from"./lseC8CZk.js";import{p as B}from"./B_nAgxJw.js";import{p as S}from"./B2IN9Dip.js";import"./B_r2ch_8.js";const H=I+"#arrow-left",L={class:"container-fluid page-pt section-mb"},V={class:"link-icon link-style text-primary mb-1"},F={key:0,class:"row justify-content-center gx-1"},j={key:1,class:"col-12 col-lg-6 mt-3 mt-lg-0 ps-lg-3"},q={class:"title-mb-sm"},R={href:"/contact"},A={class:"accordion accordion-flush mb-3",id:"accordionExample"},U={class:"accordion-item"},G={class:"accordion-header"},J={class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},K={id:"collapseThree",class:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},O={class:"accordion-body"},Q={class:"accordion-item"},W={class:"accordion-header"},X={class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},Y={id:"collapseTwo",class:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},Z={class:"accordion-body"},oo=["innerHTML"],eo={class:"accordion-item"},ao={class:"accordion-header"},to={class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseFour","aria-expanded":"false","aria-controls":"collapseFour"},so={id:"collapseFour",class:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},io={class:"accordion-body"},lo=["innerHTML"],no=f({__name:"earring",setup(ro){const a=u(),i=u(),g=w(),{t:p}=h();T(()=>{var s;const e=g.currentRoute.value.params.productNameEng;if(a.value=z.getProductByName(e),!a.value||!((s=a.value)!=null&&s.onDisplay))throw $({statusCode:404,statusMessage:h().t("not-found.heading")});i.value=B.getProductDescription(a.value.id),k({title:`lioi | ${a.value.localizedName()}`,meta:[{name:"description",content:p("home.hero.body")}]}),N({ogTitle:`lioi | ${a.value.localizedName()}`,ogUrl:"https://lioi.ee",ogType:"website",ogDescription:p("home.hero.body"),ogImage:a.value.getImageSource()})});const r=m(()=>i.value?new _([...i.value.picturePaths]):new _([])),v=m(()=>{var e;return a.value?(e=S.getCategoryById(a.value.productCategoryId))==null?void 0:e.nameEng:""});return(e,s)=>{const b=D,y=P;return n(),c("div",L,[x(b,{class:"link-arrow",to:{name:"shop",query:{category:v.value},hash:a.value!=null?`#product-${a.value.id}`:void 0}},{default:E(()=>[o("span",V,[s[0]||(s[0]=o("svg",{class:"bi",width:"13",height:"13",fill:"primary"},[o("use",{"xlink:href":H})],-1)),l(" "+t(e.$t("shared.back-button-text")),1)])]),_:1},8,["to"]),a.value?(n(),c("div",F,[r.value.imagePaths&&r.value.imagePaths.length?(n(),C(y,{key:0,model:r.value},null,8,["model"])):d("",!0),i.value?(n(),c("div",j,[o("h2",null,t(a.value.localizedName()),1),o("h3",null,t(a.value.finalPrice)+" €",1),o("p",q,[o("a",R,t(e.$t("shop.single-product-view.contact-us-text")),1)]),o("p",null,t(i.value.localizedDescription())+" "+t(e.$t("shop.earring-view.handmade-earring")),1),o("div",A,[o("div",U,[o("h5",G,[o("button",J,t(e.$t("shop.earring-view.accordion.material-heading")),1)]),o("div",K,[o("div",O,[o("p",null,[l(t(e.$t("shop.earring-view.accordion.material-polymer-clay")),1),s[1]||(s[1]=o("br",null,null,-1)),l(" "+t(e.$t("shop.earring-view.accordion.material-stainless-steel")),1),s[2]||(s[2]=o("br",null,null,-1)),l(" "+t(e.$t("shop.earring-view.accordion.material-color-options")),1)])])])]),o("div",Q,[o("h5",W,[o("button",X,t(e.$t("shop.earring-view.accordion.size-heading")),1)]),o("div",Y,[o("div",Z,[o("p",{innerHTML:i.value.localizedSizeDescription()},null,8,oo)])])]),o("div",eo,[o("h5",ao,[o("button",to,t(e.$t("shop.single-product-view.accordion.delivery-heading")),1)]),o("div",so,[o("div",io,[o("p",{innerHTML:e.$t("shop.single-product-view.accordion.delivery-info-p-html")},null,8,lo)])])]),s[3]||(s[3]=o("div",{class:"hr"},null,-1))])])):d("",!0)])):d("",!0)])}}}),go=M(no,[["__scopeId","data-v-35681920"]]);export{go as default};
