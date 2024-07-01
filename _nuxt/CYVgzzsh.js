var $=Object.defineProperty;var x=(l,i,o)=>i in l?$(l,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[i]=o;var n=(l,i,o)=>(x(l,typeof i!="symbol"?i+"":i,o),o);import{m as b,r as C,n as v,o as c,g as _,w as p,c as m,q as E,F as M,s as L,v as B,a as d,x as R,y as T,_ as S,t as h,d as y,j as V,b as F,i as A,h as N,z as k,A as z,B as I,C as K,D as O,k as G}from"./KaTgO7Az.js";const H=["checked","id","value"],P=["for"],U=b({__name:"ColorRadio",props:{colors:{},modelValue:{}},emits:["update:modelValue"],setup(l,{emit:i}){function o(g){return{"background-image":`url(/img/colors/${g.imageSrc})`}}const r=l,s=C(r.colors[0]),a=i;return v(()=>s.value,()=>{a("update:modelValue",s.value)}),v(()=>r.modelValue,()=>{s.value.id!=r.modelValue.id&&(s.value=r.modelValue)},{immediate:!0}),(g,D)=>{const j=L;return c(),_(j,{flex:"",margin:"b-3","justify-content":"center",class:"flex-wrap"},{default:p(()=>[(c(!0),m(M,null,E(g.colors,u=>(c(),m("div",{key:u.id,class:"selector"},[B(d("input",{checked:u.id==s.value.id,type:"radio",id:u.id,value:u,"onUpdate:modelValue":D[0]||(D[0]=f=>s.value=f)},null,8,H),[[R,s.value]]),d("label",{style:T(o(u)),class:"selector-label fabrics",for:u.id},null,12,P)]))),128))]),_:1})}}}),q=S(U,[["__scopeId","data-v-ca8b182d"]]),J=d("br",null,null,-1),Q={key:1},X=b({__name:"ColorInfo",props:{colorName:{},colorInfo:{}},setup(l){return(i,o)=>{const r=A,s=N,a=V;return c(),m(M,null,[d("h3",null,h(i.colorName),1),d("p",null,[y(h(i.colorInfo.description),1),J,y(h(i.colorInfo.weightDescription),1)]),i.colorInfo.imageSources.length?(c(),_(a,{key:0,"justify-content":"between",gutter:"x-1",class:"section-mb"},{default:p(()=>[(c(!0),m(M,null,E(i.colorInfo.imageSources,g=>(c(),_(s,{col:"6","justify-content":"center",key:g},{default:p(()=>[F(r,{class:"img-fluid",src:`/img/colors/color-guide/${g}`},null,8,["src"])]),_:2},1024))),128))]),_:1})):(c(),m("div",Q,[d("p",null,h(i.$t("color-guide.no-product-images-info")),1)]))],64)}}});class t{constructor(i,o,r,s,a=!0){n(this,"id");n(this,"nameEng");n(this,"nameEst");n(this,"isChecked");n(this,"imageSrc");n(this,"isVisible");this.id=i,this.nameEng=o,this.nameEst=r,this.imageSrc=s,this.isVisible=a}getLocalizedName(){return k.isEstonian?this.nameEst:this.nameEng}}class Y{constructor(){n(this,"colors",[new t(6,"Light rose","Heleroosa","Light_rose.jpg"),new t(28,"Light lavender","Hele lavendel","Light_lavender.jpg"),new t(7,"Lilac","Sirel","Lilac.jpg"),new t(43,"Fuchsia","Fuksia","Fuchsia.jpg"),new t(10,"Wine","Veinipunane","Wine.jpg"),new t(11,"Strawberry","Maasikas","Strawberry.jpg"),new t(2,"Cloudberry","Murakas","Cloudberry.jpg"),new t(42,"Terracotta","Terrakota","Terracotta.jpg"),new t(3,"Daffodil","Nartsiss","Daffodil.jpg"),new t(1,"Cookie","Küpsis","Cookie.jpg"),new t(25,"Dark vanilla","Beež","Dark_vanilla.jpg"),new t(33,"Natural","Naturaalne","Natural.jpg"),new t(5,"Sage","Salvei","Sage.jpg"),new t(4,"Teal","Mereroheline","Teal.jpg"),new t(24,"Dark stone blue","Kulunud sinine","Dark_stone_blue.jpg"),new t(8,"Cornflower","Rukkilill","Cornflower.jpg"),new t(9,"Sky blue","Taevasinine","Sky_blue.jpg"),new t(15,"Blue flowers","Sinised lilled","Blue_flowers.jpg"),new t(13,"Orchids","Orhidee","Orchids.jpg"),new t(36,"Natural white","Loodusvalge","Natural_white.jpg"),new t(19,"Charcoal","Kulunud must","Charcoal.jpg")])}getAllColors(){return this.colors}getAllVisible(){return this.colors.filter(i=>i.isVisible)}}const Z=new Y;class e{constructor(i,o,r,s){n(this,"id");n(this,"description");n(this,"weightDescription");n(this,"imageSources");this.id=i,this.description=o,this.weightDescription=r,this.imageSources=s}}const w=class w{constructor(){n(this,"colors",[new e(1,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(2),["color-guide-cookie/2.jpg","color-guide-cookie/1.jpg"]),new e(2,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-cloudberry/1.jpg","color-guide-cloudberry/2.jpg"]),new e(3,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-daffodil/1.jpg"]),new e(4,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-teal/color-guide-teal-1.jpg","color-guide-teal/color-guide-teal-2.jpg"]),new e(5,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-sage/color-guide-sage-1.jpg","color-guide-sage/color-guide-sage-2.jpg"]),new e(6,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-light-rose/color-guide-light-rose-1.jpg","color-guide-light-rose/color-guide-light-rose-2.jpg"]),new e(7,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-lilac/color-guide-lilac-1.jpg","color-guide-lilac/color-guide-lilac-2.jpg"]),new e(8,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-cornflower/1.jpg"]),new e(9,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-sky-blue/1.jpg","color-guide-sky-blue/2.jpg"]),new e(10,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-wine/color-guide-wine-1.jpg","color-guide-wine/color-guide-wine-2.jpg"]),new e(11,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-strawberry/color-guide-strawberry-1.jpg","color-guide-strawberry/color-guide-strawberry-2.jpg"]),new e(12,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new e(13,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-orchids/color-guide-orchids-1.jpg","color-guide-orchids/color-guide-orchids-2.jpg"]),new e(14,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new e(15,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-blue-flowers/color-guide-blue-flowers-1.jpg","color-guide-blue-flowers/color-guide-blue-flowers-2.jpg"]),new e(16,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new e(17,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new e(18,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new e(19,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-charcoal/color-guide-charcoal-1.jpg","color-guide-charcoal/color-guide-charcoal-2.jpg"]),new e(20,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new e(21,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new e(22,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new e(23,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new e(24,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-dark-stone-blue/color-guide-dark-stone-blue-1.jpg","color-guide-dark-stone-blue/color-guide-dark-stone-blue-2.jpg"]),new e(25,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-dark-vanilla/color-guide-dark-vanilla-1.jpg","color-guide-dark-vanilla/color-guide-dark-vanilla-2.jpg"]),new e(26,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new e(27,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new e(28,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-light-lavender/color-guide-light-lavender-1.jpg","color-guide-light-lavender/color-guide-light-lavender-2.jpg"]),new e(29,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new e(30,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new e(31,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new e(32,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new e(33,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-natural/color-guide-natural-1.jpg","color-guide-natural/color-guide-natural-2.jpg"]),new e(34,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new e(35,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new e(36,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-natural-white/color-guide-natural-white-1.jpg","color-guide-natural-white/color-guide-natural-white-2.jpg"]),new e(37,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new e(38,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new e(39,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new e(40,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new e(41,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new e(42,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-terracotta/1.jpg","color-guide-terracotta/2.jpg"]),new e(43,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-fuchsia/1.jpg","color-guide-fuchsia/2.jpg"])])}getAllColors(){return this.colors}getMaterialDescriptionForId(i){const o=w.materialDescriptions.find(r=>r.id===i);return k.isEstonian?o.descriptionEst:o.descriptionEng}getWeightDescriptionForId(i){const o=w.weightDescriptions.find(r=>r.id===i);return k.isEstonian?o.descriptionEst:o.descriptionEng}};n(w,"materialDescriptions",[{id:1,descriptionEng:"Soft and non-stretchy",descriptionEst:"Pehme ja mitteveniv"},{id:2,descriptionEng:"Soft and non-stretchy",descriptionEst:"Pehme ja mitteveniv"}]),n(w,"weightDescriptions",[{id:1,descriptionEng:"Medium-weight (185 g/m2)",descriptionEst:"Keskmise paksusega (185 g/m2)"},{id:2,descriptionEng:"Slightly lighter than other medium-weight fabrics (175 g/m2)",descriptionEst:"Natuke õhem kui teised keskmise paksusega kangad (175 g/m2)"}]);let W=w;const ee=new W,ie={class:"heading-mb text-center"},te=b({__name:"colorGuide",setup(l){const i=Z.getAllVisible(),o=ee.getAllColors(),r=C(i[0]),s=z(()=>o.find(a=>a.id==r.value.id));return(a,g)=>{const D=N,j=V,u=G;return c(),_(u,{type:"fluid",class:"page-pt"},{default:p(()=>[d("h1",ie,h(a.$t("color-guide.heading")),1),F(j,{"justify-content":"center",margin:"b-4"},{default:p(()=>[F(D,{col:"12 lg-10 xxl-8"},{default:p(()=>[d("p",null,h(a.$t("color-guide.paragraph-1")),1),d("p",null,h(a.$t("color-guide.paragraph-2")),1)]),_:1}),F(D,{col:"12 lg-10 xxl-8"},{default:p(()=>[F(q,{colors:I(i),modelValue:I(r),"onUpdate:modelValue":g[0]||(g[0]=f=>K(r)?r.value=f:null)},null,8,["colors","modelValue"]),I(s)?(c(),_(X,{key:0,"color-info":I(s),"color-name":I(r).getLocalizedName()},null,8,["color-info","color-name"])):O("",!0)]),_:1})]),_:1})]),_:1})}}}),se=S(te,[["__scopeId","data-v-c9f06e36"]]);export{se as default};
