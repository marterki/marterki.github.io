import{_ as x}from"./DVb0cA2_.js";import{B as p,u as _,_ as y,a as C,b as S}from"./4n0sn8la.js";import{q as m,v as g,X as P,r as j,s as f,u as k,E as I,_ as R,c as V,b as a,w as e,o as M,d as s,p as w,e as E,a as h}from"./Fj0ETvyU.js";import{T as H,I as B,a as K,c as L,A as N,b as $}from"./Dx8ACb27.js";import{B as D,u as F}from"./DOJzx0D9.js";import{C as q,u as O}from"./DADztRSP.js";import{C as X,u as z}from"./DMmzYqVq.js";const G=m({name:"BsAccordionButton",props:{...p,...H,...B,...D,tag:{type:String,default:"button"},toggle:{type:String,default:"collapse"}},setup(t,r){const d=g(),o=_(t),l=F(t),n=K(t,"accordion-button"),u=L(t,d),i=P("active.collapse",g(!1)),c={class:j(()=>({"accordion-button":!0,collapsed:i&&!(i!=null&&i.value)})),ref:d};return()=>f("button",k(c,n,l,o,u),r.slots)}}),J=m({name:"BsAccordionHeader",props:{...p,tag:{type:String,default:"div"}},setup(t,r){const d=_(t),o={class:{"accordion-header":!0}};return()=>f(t.tag,k(o,d),r.slots)}}),Q=m({name:"BsAccordionBody",props:{...p,tag:{type:String,default:"div"}},setup(t,r){const d=_(t),o={class:{"accordion-body":!0}};return()=>f(t.tag,k(o,d),r.slots)}}),U=m({name:"BsAccordionCollapse",props:{...p,...q,tag:{type:String,default:"div"}},setup(t,r){const d=g(),o=_(t),l=O(t,r,d),n={class:{"accordion-collapse":!0},ref:d};return()=>f(t.tag,k(n,o,l),r.slots)}}),W=m({name:"BsAccordionItem",props:{...p,...N,...B,tag:{type:String,default:"div"}},setup(t,r){const d=_(t),o=K(t,"accordion-item"),l=g(),n=$(t,"collapse",l),u={class:{"accordion-item":!0},ref:l};return()=>f(t.tag,k(o,u,n,d),r.slots)}}),Y={flush:{type:Boolean}};function Z(t){return{class:j(()=>({accordion:!0,"accordion-flush":t.flush}))}}const aa=m({name:"BsAccordion",props:{...p,...Y,...X,tag:{type:String,default:"div"},parent:{type:Boolean,default:!1}},setup(t,r){const d=g(),o=_(t),l=Z(t),n=z(t,r,d,"collapse");I(r,l,n,o);const u={ref:d};return()=>f(t.tag,k(l,n,o,u),r.slots)}}),ea={},b=t=>(w("data-v-4c8d4371"),t=t(),E(),t),ta={class:"section-py"},sa=b(()=>h("div",{class:"subheading color-purple"},"Tasumine",-1)),la=b(()=>h("div",{class:"subheading color-purple"},"Teraapia läbiviimine",-1)),na=b(()=>h("div",{class:"subheading color-purple"},"Aja broneerimine",-1)),oa=b(()=>h("div",{class:"subheading color-purple"},"Asukoht",-1));function ua(t,r){const d=x,o=C,l=G,n=J,u=Q,i=U,c=W,v=aa,T=S,A=y;return M(),V("section",ta,[a(A,{class:"section"},{default:e(()=>[a(d,{level:"1"},{default:e(()=>[s(" KKK ")]),_:1}),a(T,null,{default:e(()=>[a(o,{col:"12 md-4"},{default:e(()=>[sa]),_:1}),a(o,{col:"12 md-8",margin:"b-7 b-md-9"},{default:e(()=>[a(v,{parent:"",flush:""},{default:e(()=>[a(c,null,{default:e(()=>[a(n,{level:"2"},{default:e(()=>[a(l,{class:"fs-lg"},{default:e(()=>[s("Kuidas toimub teraapia eest tasumine?")]),_:1})]),_:1}),a(i,null,{default:e(()=>[a(u,{padding:"t-0"},{default:e(()=>[s(" Kui Te soovite ühekordset teraapiat/konsultatsiooni, siis toimub maksmine peale teraapiat kas sularahas või ülekandega. Pikemaajalise teraapia korral tavaliselt arve alusel kuu lõpus ülekandega või sularahas. ")]),_:1})]),_:1})]),_:1}),a(c,null,{default:e(()=>[a(n,{level:"2"},{default:e(()=>[a(l,{class:"fs-lg"},{default:e(()=>[s("Kas Tervisekassa rahastab kodust füsioteraapiat? ")]),_:1})]),_:1}),a(i,null,{default:e(()=>[a(u,{padding:"t-0"},{default:e(()=>[s(" Perearsti saatekirja alusel teostame Tervisekassa teenust koodiga 7060 Füsioteraapia igapäevaelu keskkonnas. Teeme koostööd kindlustustega. Liiklusõnnetuse korral on kokkuleppel kindlustusfirmaga võimalik nende poolne finantseerimine. ")]),_:1})]),_:1})]),_:1}),a(c,null,{default:e(()=>[a(n,{level:"2"},{default:e(()=>[a(l,{class:"fs-lg"},{default:e(()=>[s("Kas on vaja saatekirja ise makstes?")]),_:1})]),_:1}),a(i,null,{default:e(()=>[a(u,{padding:"t-0"},{default:e(()=>[s(" Teraapia tegemiseks pole arsti saatekirja vaja, sest enne teraapiaga alustamist teostab füsioterapeut füsioterapeutilise hinnangu ja vastavalt sellele toimub teraapia teostus. Kui kodus on olemas varasemalt saadud ravi kohta dokumendid on need anamneesi koostamisel suureks abiks. ")]),_:1})]),_:1})]),_:1}),a(c,null,{default:e(()=>[a(n,{level:"2"},{default:e(()=>[a(l,{class:"fs-lg"},{default:e(()=>[s("Kas ma pean maksma kui tühistan teraapia aja? ")]),_:1})]),_:1}),a(i,null,{default:e(()=>[a(u,{padding:"t-0"},{default:e(()=>[s(" Kui Te teatate hiljemalt eelmisel päeval siis ei pea maksma. Kui samal päeval siis 50% teraapia maksumusest. Kui terapeut on juba kohale tulnud aga teraapiat ei saa teostada ( pole kedagi kodus, halb on olla, laps magab jne.) siis kuulub tasumisele kogu kokkulepitud teraapia maksumus. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(o,{col:"12 md-4"},{default:e(()=>[la]),_:1}),a(o,{col:"12 md-8",margin:"b-7 b-md-9"},{default:e(()=>[a(v,{parent:"",flush:""},{default:e(()=>[a(c,null,{default:e(()=>[a(n,{level:"2"},{default:e(()=>[a(l,{class:"fs-lg"},{default:e(()=>[s("Mis vahendid peavad kodus olema?")]),_:1})]),_:1}),a(i,null,{default:e(()=>[a(u,{padding:"t-0"},{default:e(()=>[s(" Täiskasvanute puhul on väga suureks abiks funktsionaalne voodi, mille kõrgust saab puldist reguleerida. Ülejäänud abivahendid sõltuvad konkreetsest kliendist ja selguvad esimesel kohtumisel. Laste teraapiaks pole tavaliselt midagi erilist vaja. ")]),_:1})]),_:1})]),_:1}),a(c,null,{default:e(()=>[a(n,{level:"2"},{default:e(()=>[a(l,{class:"fs-lg"},{default:e(()=>[s("Kui vanalt on veel mõtet teraapiaks?")]),_:1})]),_:1}),a(i,null,{default:e(()=>[a(u,{padding:"t-0"},{default:e(()=>[s(" Vanusepiirangut pole. Oluline on, et inimene tahab tegutseda ja oma tervislikku seisundit parandada/ säilitada. ")]),_:1})]),_:1})]),_:1}),a(c,null,{default:e(()=>[a(n,{level:"2"},{default:e(()=>[a(l,{class:"fs-lg"},{default:e(()=>[s("Kui kaua kestab teraapia sessioon? Mitu korda on vaja? ")]),_:1})]),_:1}),a(i,null,{default:e(()=>[a(u,{padding:"t-0"},{default:e(()=>[s(" Esmakohtumine on tavaliselt 1h, hiljem vastavalt kuni 12 md-55min. Teraapia korduste arv sõltub väga palju kliendi seisundist ja motivatsioonist ise harjutada. ")]),_:1})]),_:1})]),_:1}),a(c,null,{default:e(()=>[a(n,{level:"2"},{default:e(()=>[a(l,{class:"fs-lg"},{default:e(()=>[s("Kas keegi peab kodus olema ja aitama teraapia ajal? ")]),_:1})]),_:1}),a(i,null,{default:e(()=>[a(u,{padding:"t-0"},{default:e(()=>[s(" Täiskasvanute puhul ei pea peale kliendi kedagi kodus olema. Kui aga klient ja lähedased soovivad võivad nad teraapias osaleda. Tuleb aga arvestada, et tähelepanu ei hajuks ja klient suudaks keskenduda tegevusele. ")]),_:1})]),_:1})]),_:1}),a(c,null,{default:e(()=>[a(n,{level:"2"},{default:e(()=>[a(l,{class:"fs-lg"},{default:e(()=>[s("Kas teraapiat teeb ikka meesterahvas, sest jõudu on ju vaja kui ma ei saa ise kõndida?")]),_:1})]),_:1}),a(i,null,{default:e(()=>[a(u,{padding:"t-0"},{default:e(()=>[s(" Teades õigeid teraapia võtteid on väga vähe jõudu vaja. Füüsiliselt pingutama peab treenitav mitte terapeut. Senimaani on kõigi klientide jaoks mu jõust piisanud. Tihti on pigem probleemiks, et õpetades pereliikmeid oma lähedast aitama kas istuma, püsti tõusma või kõndima tahetakse liiga palju toetada. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(o,{col:"12 md-4"},{default:e(()=>[na]),_:1}),a(o,{col:"12 md-8",margin:"b-7 b-md-9"},{default:e(()=>[a(v,{parent:"",flush:""},{default:e(()=>[a(c,null,{default:e(()=>[a(n,{level:"2"},{default:e(()=>[a(l,{class:"fs-lg"},{default:e(()=>[s("Mis päevadel ja kellaaegadel Te töötate?")]),_:1})]),_:1}),a(i,null,{default:e(()=>[a(u,{padding:"t-0"},{default:e(()=>[s(" Reeglina töötan E-R. Kellaajad on vastavalt kokkuleppele kliendiga. ")]),_:1})]),_:1})]),_:1}),a(c,null,{default:e(()=>[a(n,{level:"2"},{default:e(()=>[a(l,{class:"fs-lg"},{default:e(()=>[s("Kui pikk on ooteaeg?")]),_:1})]),_:1}),a(i,null,{default:e(()=>[a(u,{padding:"t-0"},{default:e(()=>[s(" Kui kellaaegade suhtes pole suuri piiranguid siis nädala jooksul alates esmakontaktist. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(o,{col:"12 md-4"},{default:e(()=>[oa]),_:1}),a(o,{col:"12 md-8"},{default:e(()=>[a(v,{parent:"",flush:""},{default:e(()=>[a(c,null,{default:e(()=>[a(n,{level:"2"},{default:e(()=>[a(l,{class:"fs-lg"},{default:e(()=>[s("Mis piirkonnas Te teenust osutate?")]),_:1})]),_:1}),a(i,null,{default:e(()=>[a(u,{padding:"t-0"},{default:e(()=>[s(" Reeglina Harjumaa piires. ")]),_:1})]),_:1})]),_:1}),a(c,null,{default:e(()=>[a(n,{level:"2"},{default:e(()=>[a(l,{class:"fs-lg"},{default:e(()=>[s("Kui palju lisandub transporditasu kui soovin teraapiat Sakus, Tabasalus, Laagris jne?")]),_:1})]),_:1}),a(i,null,{default:e(()=>[a(u,{padding:"t-0"},{default:e(()=>[s(" Tallinnast 10 km raadiuses lisandub teraapia hinnale 10 eurot transporditasu. V.a. Viimsi. Kaugemal vastavalt kokkuleppele. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const fa=R(ea,[["render",ua],["__scopeId","data-v-4c8d4371"]]);export{fa as default};
