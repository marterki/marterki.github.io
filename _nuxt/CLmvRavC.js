import{_ as Ve}from"./CpQC1GFo.js";import{_ as De,a as Fe}from"./DoU6ryFv.js";import{B as L,u as B,a as We,b as ze,_ as He}from"./BpnoJP4Q.js";import{f as ie,i as Ke,S as ue,g as Ze,h as Ye,j as Je,k as J,l as qe,m as Ge,n as Qe,q as M,r as y,s as A,u as I,v as _,x as Xe,y as ea,z as W,A as aa,B as C,C as H,D as ta,E as _e,F as ne,G as Y,H as sa,I as ia,J as oe,K as ua,L as na,M as oa,N as Z,O as la,P as ra,T as da,Q as ca,R as fa,o as le,c as ma,U as ga,w as i,b as s,d as j,V as pa,p as va,e as ka,a as m,_ as _a}from"./DdW8waKO.js";import{_ as ba,a as ha}from"./DFlx86H8.js";import{_ as xa}from"./CZ4xHmFL.js";import{C as ja,u as ya,_ as wa}from"./BL78KuHa.js";import{u as ee,w as U,I as ae,a as te,A as Sa,b as Ra}from"./BhPQPKgy.js";import{C as Ca,u as Aa}from"./Bxc-rnIT.js";import"./CG40jIUu.js";import"./BhPOCLO3.js";import"./D1SRlrCx.js";import"./BFfeFvNW.js";import"./yzsV6gLC.js";import"./LcCv0sRD.js";function Ma(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}var Ta=800,Ea=16,Oa=Date.now;function $a(e){var t=0,a=0;return function(){var u=Oa(),n=Ea-(u-a);if(a=u,n>0){if(++t>=Ta)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function La(e){return function(){return e}}var Ba=ie?function(e,t){return ie(e,"toString",{configurable:!0,enumerable:!1,value:La(t),writable:!0})}:Ke,Ia=$a(Ba),re=Math.max;function Pa(e,t,a){return t=re(t===void 0?e.length-1:t,0),function(){for(var u=arguments,n=-1,o=re(u.length-t,0),p=Array(o);++n<o;)p[n]=u[t+n];n=-1;for(var d=Array(t+1);++n<t;)d[n]=u[n];return d[t]=a(p),Ma(e,this,d)}}var de=ue?ue.isConcatSpreadable:void 0;function Na(e){return Ze(e)||Ye(e)||!!(de&&e&&e[de])}function Ua(e,t,a,u,n){var o=-1,p=e.length;for(a||(a=Na),n||(n=[]);++o<p;){var d=e[o];a(d)?Je(n,d):n[n.length]=d}return n}function Va(e){var t=e==null?0:e.length;return t?Ua(e):[]}function Da(e){return Ia(Pa(e,void 0,Va),e+"")}function Fa(e,t,a){var u=-1,n=e.length;t<0&&(t=-t>n?0:n+t),a=a>n?n:a,a<0&&(a+=n),n=t>a?0:a-t>>>0,t>>>=0;for(var o=Array(n);++u<n;)o[u]=e[u+t];return o}function Wa(e,t,a){var u=e.length;return a=a===void 0?u:a,!t&&a>=u?e:Fa(e,t,a)}var za="\\ud800-\\udfff",Ha="\\u0300-\\u036f",Ka="\\ufe20-\\ufe2f",Za="\\u20d0-\\u20ff",Ya=Ha+Ka+Za,Ja="\\ufe0e\\ufe0f",qa="\\u200d",Ga=RegExp("["+qa+za+Ya+Ja+"]");function be(e){return Ga.test(e)}function Qa(e){return e.split("")}var he="\\ud800-\\udfff",Xa="\\u0300-\\u036f",et="\\ufe20-\\ufe2f",at="\\u20d0-\\u20ff",tt=Xa+et+at,st="\\ufe0e\\ufe0f",it="["+he+"]",Q="["+tt+"]",X="\\ud83c[\\udffb-\\udfff]",ut="(?:"+Q+"|"+X+")",xe="[^"+he+"]",je="(?:\\ud83c[\\udde6-\\uddff]){2}",ye="[\\ud800-\\udbff][\\udc00-\\udfff]",nt="\\u200d",we=ut+"?",Se="["+st+"]?",ot="(?:"+nt+"(?:"+[xe,je,ye].join("|")+")"+Se+we+")*",lt=Se+we+ot,rt="(?:"+[xe+Q+"?",Q,je,ye,it].join("|")+")",dt=RegExp(X+"(?="+X+")|"+rt+lt,"g");function ct(e){return e.match(dt)||[]}function ft(e){return be(e)?ct(e):Qa(e)}function mt(e){return function(t){t=J(t);var a=be(t)?ft(t):void 0,u=a?a[0]:t.charAt(0),n=a?Wa(a,1).join(""):t.slice(1);return u[e]()+n}}var gt=mt("toUpperCase");function pt(e){return gt(J(e).toLowerCase())}function vt(e,t,a,u){for(var n=-1,o=e==null?0:e.length;++n<o;)a=t(a,e[n],n,e);return a}function kt(e){return function(t){return e==null?void 0:e[t]}}var _t={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},bt=kt(_t),ht=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,xt="\\u0300-\\u036f",jt="\\ufe20-\\ufe2f",yt="\\u20d0-\\u20ff",wt=xt+jt+yt,St="["+wt+"]",Rt=RegExp(St,"g");function Ct(e){return e=J(e),e&&e.replace(ht,bt).replace(Rt,"")}var At=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Mt(e){return e.match(At)||[]}var Tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Et(e){return Tt.test(e)}var Re="\\ud800-\\udfff",Ot="\\u0300-\\u036f",$t="\\ufe20-\\ufe2f",Lt="\\u20d0-\\u20ff",Bt=Ot+$t+Lt,Ce="\\u2700-\\u27bf",Ae="a-z\\xdf-\\xf6\\xf8-\\xff",It="\\xac\\xb1\\xd7\\xf7",Pt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Nt="\\u2000-\\u206f",Ut=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Me="A-Z\\xc0-\\xd6\\xd8-\\xde",Vt="\\ufe0e\\ufe0f",Te=It+Pt+Nt+Ut,Ee="['’]",ce="["+Te+"]",Dt="["+Bt+"]",Oe="\\d+",Ft="["+Ce+"]",$e="["+Ae+"]",Le="[^"+Re+Te+Oe+Ce+Ae+Me+"]",Wt="\\ud83c[\\udffb-\\udfff]",zt="(?:"+Dt+"|"+Wt+")",Ht="[^"+Re+"]",Be="(?:\\ud83c[\\udde6-\\uddff]){2}",Ie="[\\ud800-\\udbff][\\udc00-\\udfff]",D="["+Me+"]",Kt="\\u200d",fe="(?:"+$e+"|"+Le+")",Zt="(?:"+D+"|"+Le+")",me="(?:"+Ee+"(?:d|ll|m|re|s|t|ve))?",ge="(?:"+Ee+"(?:D|LL|M|RE|S|T|VE))?",Pe=zt+"?",Ne="["+Vt+"]?",Yt="(?:"+Kt+"(?:"+[Ht,Be,Ie].join("|")+")"+Ne+Pe+")*",Jt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",qt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Gt=Ne+Pe+Yt,Qt="(?:"+[Ft,Be,Ie].join("|")+")"+Gt,Xt=RegExp([D+"?"+$e+"+"+me+"(?="+[ce,D,"$"].join("|")+")",Zt+"+"+ge+"(?="+[ce,D+fe,"$"].join("|")+")",D+"?"+fe+"+"+me,D+"+"+ge,qt,Jt,Oe,Qt].join("|"),"g");function es(e){return e.match(Xt)||[]}function as(e,t,a){return e=J(e),t=t,t===void 0?Et(e)?es(e):Mt(e):e.match(t)||[]}var ts="['’]",ss=RegExp(ts,"g");function is(e){return function(t){return vt(as(Ct(t).replace(ss,"")),e,"")}}var us=is(function(e,t,a){return t=t.toLowerCase(),e+(a?pt(t):t)}),ns=Object.prototype,os=ns.hasOwnProperty;function ls(e,t){return e!=null&&os.call(e,t)}function rs(e,t){return e!=null&&qe(e,t,ls)}function ds(e,t){return Ge(e,t,function(a,u){return Qe(e,u)})}var cs=Da(function(e,t){return e==null?{}:ds(e,t)});const fs=M({name:"BsNavItem",props:{...L,tag:{type:String,default:"li"},inline:{type:Boolean}},setup(e,t){const a=B(e),u={class:y(()=>({"nav-item":!0,"list-inline-item":e.inline}))};return()=>A(e.tag,I(u,a),t.slots)}}),ms=M({name:"BsCloseButton",props:{...L,...ja,tag:{type:String,default:"button"},type:{type:String,default:"button"},white:{type:Boolean},ariaLabel:{type:String,default:"Close"}},setup(e,t){const a=_(),u=B(e),n=ya(e,a),o={class:y(()=>({"btn-close":!0,"btn-close-white":e.white})),attr:{type:e.type,"aria-label":e.ariaLabel},ref:a};return()=>A(e.tag,I(o,n,u),t.slots)}}),gs=M({name:"BsModalBody",props:{...L,tag:{type:String,default:"div"}},setup(e,t){const a=B(e),u={class:{"modal-body":!0}};return()=>A(e.tag,I(u,a),t.slots)}}),ps=M({name:"BsModalFooter",props:{...L,tag:{type:String,default:"div"}},setup(e,t){const a=B(e),u={class:{"modal-footer":!0}};return()=>A(e.tag,I(u,a),t.slots)}}),vs=M({name:"BsModalContent",props:{...L,tag:{type:String,default:"div"}},setup(e,t){const a=B(e),u={class:{"modal-content":!0}};return()=>A(e.tag,I(u,a),t.slots)}}),ks=M({name:"BsModalDialog",props:{...L,tag:{type:String,default:"div"},scrollable:{type:Boolean,default:!1},centered:{type:Boolean,default:!1},size:{type:String,default:void 0},fullscreen:{type:String,default:void 0}},setup(e,t){const a=B(e),u={class:{"modal-dialog":!0,"modal-dialog-scrollable":e.scrollable,"modal-dialog-centered":e.centered,[`modal-${e.size}`]:e.size,[`modal-fullscreen${Xe(e.fullscreen)?`-${e.fullscreen}`:""}`]:ea(e.fullscreen)}};return()=>A(e.tag,I(u,a),t.slots)}});function _s(e,t){const a=_(""),{exposeState:u}=ee(e,t,"label");return u({areaLabel:a}),{attr:y(()=>({"aria-labelledby":a.value}))}}function bs(e,t={}){var u;const{element:a=(u=W)==null?void 0:u.body}=t;if(a)return aa(e,(n,o)=>{const p=C(n);H(p.class,(d,l)=>{d&&!a.classList.contains(l)&&a.classList.add(l),!d&&a.classList.contains(l)&&a.classList.remove(l)}),H(p.style,(d,l)=>{a.style&&cs(a.style,l)!=d&&ta(a.style,l,d)}),H(p.attr,(d,l)=>{a.getAttribute(l)!=d&&a.setAttribute(l,d)}),a.classList.length==0&&a.removeAttribute("class"),a.style.length==0&&a.removeAttribute("style"),o&&H(C(o).attr,(d,l)=>{const b=C(p.attr);b&&!rs(b,l)&&a.removeAttribute(l)})},{immediate:!0})}const pe=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ve=".sticky-top",K="padding-right",ke="margin-right";function Ue(e={}){var w;const{document:t=W,element:a=(w=W)==null?void 0:w.body}=e;if(!a||!t)return;const u=()=>{const r=t.documentElement.clientWidth;return Math.abs(window.innerWidth-r)},n=()=>{const r=u();d(),l(a,K,c=>c+r),t.querySelectorAll(pe).forEach(c=>{l(c,K,f=>f+r)}),t.querySelectorAll(ve).forEach(c=>{l(c,ke,f=>f-r)})},o=()=>{h(a,"overflow"),h(a,K),t.querySelectorAll(pe).forEach(r=>{h(r,K)}),t.querySelectorAll(ve).forEach(r=>{h(r,ke)})},p=()=>u()>0,d=()=>{v(a,"overflow"),a.style.overflow="hidden"};function l(r,c,f){if(r!==a&&window.innerWidth>r.clientWidth+u())return;v(r,c);const x=window.getComputedStyle(r).getPropertyValue(c);r.style.setProperty(c,`${f(Number.parseFloat(x))}px`)}function b(r){return us(`bs-${r}`)}function v(r,c){const f=r.style.getPropertyValue(c);f&&(r.dataset[b(c)]=f)}function h(r,c){const f=r.dataset[b(c)];if(f===void 0){r.style.removeProperty(c),r.style.length==0&&r.removeAttribute("style");return}delete r.dataset[c],r.style.setProperty(c,f)}return{getWidth:u,hide:n,reset:o,isOverflowing:p}}function hs(e={}){const{document:t=W}=e;return{isRTL:()=>(t==null?void 0:t.documentElement.dir)==="rtl"}}const xs=M({name:"BsBackdrop",props:{tag:{type:String,default:"div"},fade:{type:Boolean,default:!0},backdrop:{type:String,default:void 0},scroll:{type:Boolean,default:!1}},setup(e,t){const a=_(!1),u=Ue(),n=_();return _e(t,{method:{show:async()=>{const l=ne(n);e.scroll||u==null||u.hide(),a.value=!0,await U(l,e.fade)},hide:async()=>{const l=ne(n);a.value=!1,await U(l,e.fade),u==null||u.reset(),await Y()}}}),()=>A(e.tag,{class:{[`${e.backdrop}-backdrop`]:!0,fade:e.fade,show:a.value},ref:n},t.slots)}}),js={fade:{type:Boolean,default:!0},backdrop:{type:[Boolean,String],default:!0},keyboard:{type:Boolean,default:!0},focus:{type:Boolean,default:!0}};function ys(e,t,a,u={}){const{document:n=W}=u,o=_(),{expose:p,exposeState:d}=ee(e,a,"modal"),l=Ue(),{isRTL:b}=hs(),v=_(!1),h=_(!1),w=_(!1),r=_(!1),c=_(!1),{focused:f}=sa(a),x=ia(),T=oe(x.height,()=>{$()},{eventFilter:ua(500)});T.pause();const S=na().Escape,E=oe(S,()=>{R(),F()});E.pause(),oa(a,async()=>{v.value&&(e.backdrop!="static"?R():(c.value=!1,await la(50),c.value=!0))});const O=async()=>{var k;v.value||(t.emit("show.modal"),v.value=!0,h.value=!0,$(),E.resume(),T.resume(),r.value=!0,await Y(),await((k=o.value)==null?void 0:k.show()),w.value=!0,f.value=e.focus||!1,h.value=!1)},R=async()=>{var k;t.emit("hide.modal"),E.pause,T.pause(),w.value=!1,h.value=!0,await U(a,e.fade),await((k=o.value)==null?void 0:k.hide()),r.value=!1,v.value=!1,h.value=!1,await Y()},P=async()=>{v.value?await R():await O()};function $(){const k=C(a);if(!k||!n)return;const z=k.scrollHeight>n.documentElement.clientHeight,V=(l==null?void 0:l.getWidth())||0,se=V>0;if(se&&!z){const G=b()?"paddingLeft":"paddingRight";k.style[G]=`${V}px`}if(!se&&z){const G=b()?"paddingRight":"paddingLeft";k.style[G]=`${V}px`}}async function F(){const k=C(a);if(!k||!n)return;const z=k.scrollHeight>n.documentElement.clientHeight,V=k.style.overflowY;V==="hidden"||c.value||(z||(k.style.overflowY="hidden"),c.value=!0,await U(a),c.value=!1,await U(a),k.style.overflowY=V,k.focus())}bs(y(()=>({class:{"modal-open":v.value}})));const q=p({show:O,hide:R,toggle:P,dismiss:R});return d({isShown:v}),{class:y(()=>({modal:!0,show:w.value,fade:e.fade,"pe-none":!0,"modal-static":c.value})),style:y(()=>({display:v.value?"block":"none"})),attr:y(()=>({...Z(v.value,"aria-modal","true"),...Z(!v.value,"aria-hidden","true"),...Z(v.value,"role","dialog"),tabindex:-1})),render:()=>{if(r.value)return A(xs,{backdrop:"modal",fade:e.fade,ref:o},void 0)},method:q}}const ws=M({name:"BsModal",props:{...L,...ae,...js,tag:{type:String,default:"div"}},setup(e,t){const a=_(),u=B(e),n=te(e,"model"),o=ys(e,t,a),p=_s(e,a);_e(t,o,u);const d={ref:a};return()=>A(da,{to:"body"},[A(e.tag,I(d,o,p,u,n),ra(t.slots.default)),o.render()])}}),Ss={fade:{type:Boolean,default:!0},show:{type:Boolean},dismissible:{type:Boolean}};function Rs(e,t,a,u,n={}){const{enabled:o=!1}=n;if(!o)return{};const{expose:p,exposeState:d}=ee(e,a,u),l=_(e.show||e.dismissible),b=_(!1),v=_(e.show||e.dismissible),h=async()=>{l.value||b.value||(t.emit("show"),l.value=!0,b.value=!0,await U(a,e.fade),v.value=!0,b.value=!1)},w=async()=>{!l.value||b.value||(t.emit("hide"),v.value=!1,b.value=!0,await U(a,e.fade),l.value=!1,b.value=!1,await Y())},c=p({show:h,hide:w,toggle:async()=>{l.value?await w():await h()},dismiss:w});return d({isShown:l}),{class:y(()=>({show:v.value,fade:e.fade})),style:y(()=>({display:l.value?"block":"none"})),attr:y(()=>({...Z(!l.value,"aria-hidden","true")})),method:c}}const Cs=M({name:"BsTabPane",props:{...L,...Sa,...ae,...Ss,tag:{type:String,default:"div"}},setup(e,t){const a=_(),u=B(e),n=te(e,"tab-pane"),o=Ra(e,"tab",a),p=Rs(e,t,a,"tab"),d={class:{"tab-pane":!0},ref:a};return()=>A(e.tag,I(d,u,n,o,p),t.slots)}}),As=M({name:"BsTabContent",props:{...L,...ae,...Ca,tag:{type:String,default:"div"}},setup(e,t){const a=_(),u=B(e),n=te(e,"tab-content"),o=Aa(e,t,a,"tab"),p={class:{"tab-content":!0},ref:a};return()=>A(e.tag,I(p,o,n,u),t.slots)}}),g=e=>(va("data-v-6bc1643e"),e=e(),ka(),e),Ms={class:"section-bg-gradient-opacity-lighter"},Ts=g(()=>m("br",null,null,-1)),Es=g(()=>m("br",null,null,-1)),Os=g(()=>m("p",{class:"subheading"},"Insult",-1)),$s=g(()=>m("p",null," Kliendil on oluline teada, et insuldi tõttu hävib osa tema ajust ja see ei taastu. Insult pole gripp, millest saab taastuda voodis lamades ja oodates. Lamades langeb lisaks alles jäänud lihasjõule ka aeroobne võimekus ja taastumine muutub veelgi keerulisemaks, sest lihtsalt pole jaksu harjutusi sooritada. ",-1)),Ls=g(()=>m("p",null," Teaduslikud uuringud on aga tõestanud, et kui varakult alustada aktiivse taastusraviga ning sooritada õige liigutusmustriga palju kordusi on aju teised alad võimelised ära õppima need liigutused, mis peale insulti puuduvad. ",-1)),Bs=g(()=>m("p",null," Minu poolt kasutatav NDT teraapia kontseptsioon põhineb meie igapäevaste liigutuste uurimisel ja nende taastamisel, mitte kompenseerimisel. Sellest tulenevalt on tegevus väga praktiline ning kliendi jaoks nõuab aktiivset osalust. Seda sellepärast, et aju lülitab lihased palju paremini tööle kui mingi tegevus on meie jaoks oluline. Seepärast kasutatakse NDT teraapias harjutuste sooritamiseks igapäevaseid, kodus leiduvaid vahendeid ja tegevusi. ",-1)),Is=g(()=>m("p",null," Väga oluline on kehaskeemi taastamisel varajane vertikaliseerimine – istuma ja seisma tulek. Varajases insuldi taastusravis kasutan palju harjutusi, kus klient viib keharaskust nõrgemale keha poolele, et suurendada lihasjõudlust ja kehatunnetust. Kui varasemalt sooritati füsioterapeudi poolt palju passiivseid harjutusi kahjustatud kehapoolega ( liigutades näiteks jalga nii nagu ta peaks liikuma) siis nüüdseks on praktika näidanud, et parim viis lihaste tööle lülitamiseks on nende töö gravitasioonijõule vastu. Istudes ja seistes peavad meie kehalihased väga palju tööd tegema, et võidelda gravitasioonijõuga. ",-1)),Ps=g(()=>m("p",null,"Esmakohtumiseks tuleb arvestada 1,5h. Hea oleks, kui on kodus olemas haiglast kaasa antud paberid. Kui kliendil on afaasia siis on abiks, kui keegi lähedastest oleks teraapia ajal kodus, et aidata vastata küsimustele.",-1)),Ns=g(()=>m("p",null,"Esmalt hindab füsioterapeut kliendi funktsionaalseid oskusi ja võimekust. Samuti lihasjõudlust ja liigesliikuvust. Seejärel kui on kliendiga läbi arutatud teraapia eesmärgid, alustatakse teraapiaga.",-1)),Us=g(()=>m("p",null,"Esimesel kohtumisel annan nõu abivahendite osas, kuidas tuba peaks olema paigutatud, milliseid harjutusi saab klient iseseisvalt teha ja kuidas lähedased saavad teda aidata.",-1)),Vs=g(()=>m("p",null,"Ravi kestus sõltub sellest, kui suur ala ajust on kahjustatud, kui ruttu sai klient meditsiinilist abi peale insulti ( mida hiljem jõudis kiirabi seda halvem on prognoos) ja kõige olulisem: kui motiveeritud on klient kaasa töötama, iseseisvalt harjutama. Minu eesmärgiks pole jääda eluks ajaks Teie juures kodus käima, vaid treenida,õpetada ja julgustada klienti võimalikult ruttu iseseisvalt tegutsema. Kui taastumise alguses on väga vajalik teostada harjutusi füsioterapeudiga koos ja ideaalis toimub teraapia 5 korda nädalas 1h- 1,5h korraga, siis hiljem piisab tihtipeale mõnest korrast nädalas, et harjutusi ja tegevusi korrigeerida ja uuendada.",-1)),Ds=g(()=>m("p",null,"Teraapia efektiivsust ja kestust mõjutavad veel tekkida võivad põletikud, südame- või neerupuudulikkus, diabeet, mäluhäired, kukkumised, väga tugev spastika.",-1)),Fs=g(()=>m("p",{class:"subheading mb-1 mt-5 mt-md-0"},"Millised võivad olla tagajärjed, kui ei saada füsioteraapilist abi? ",-1)),Ws=g(()=>m("p",null,"Olenevalt insuldi raskusastmest võib inimene jääda voodis hooldatatavaks või kergema insuldi puhul teostab liigutusi kompensatoorsete mustritega. Tihtipeale on siis ka kukkumisoht suurem. Kui valed liigutusmustrid on kinnistunud on väga keeruline õigeid õppida.",-1)),zs=g(()=>m("p",{class:"subheading mb-1 mt-5 mt-md-0"},"Mida eeldab kodune teraapia kliendilt?",-1)),Hs=g(()=>m("p",null,"Insuldi puhul on väga suureks abiks kui on võimalik rentida funktsionaalvoodi (voodi mille kõrgust saab puldist reguleerida). See kergendab igapäevast hooldust ning seda saab ka ideaalselt teraapialaua asemel kasutada. Tavaliselt läheb vaja ka madalat rulaatorit ( kindlasti mitte kõrget, mida tavaliselt abivahendi laenutustest soovitatakse), kuid selle vajadus selgub esmasel kohtumisel.",-1)),Ks=g(()=>m("p",{class:"subheading"},"Luumurrud, liigese vahetus",-1)),Zs=g(()=>m("p",null,"Täiskasvanute füsioteraapia antud olukordades tähendab spetsiaalsete harjutuste õpetamist, mis säilitavad immobliseeritud jalas lihasjõudluse ja liigesliikuvuse arsti poolt lubatud piirides. Väga oluline on karkudega kõnni õpetamine nii toas, õues kui trepil.",-1)),Ys=g(()=>m("p",null,"Teraapia efektiivsust ja kestust mõjutavad veel tekkida võivad põletikud, südame- või neerupuudulikkus, diabeet, mäluhäired, kukkumised, väga tugev spastika.",-1)),Js=g(()=>m("p",null,"Ravi kestus sõltub murrust. Tavaliselt piisab noorel inimesel luumurru korral paarist teraapia sessioonist või senikaua kuni jõuab kätte haigekassa rahastatud taastusravi aeg ambulatoorses raviasutuses. Vanuse suurenedes pikeneb ka taastumine, sest kõrges eas kaasnevad tihtipeale ka kroonilised haigused, mis mõjutavad ravi perioodi(liigeste probleemid jms). Ravitulemusi võivad veel mõjutada põletikud, kukkumine, kroonilised haigused, motivatsioon taastuda ning mäluhäired. Luumurdudest ja liigeste vahetusest on võimalik täielikult terveneda ja tööle naasta.",-1)),qs=g(()=>m("p",null,"Füsioteraapiast loobumisel võib patsient hakata kõndima vale kõnnimustriga (longates), taastusmise aeg pikeneb, kuna lihasjõudlus on langenud või liigesliikuvus märgatavalt vähenenud.",-1)),Gs=g(()=>m("p",null,"Füsioteraapia läbiviimine kodus võimaldab alustada raviga koheselt. Tihtipeale on järjekorrad ambulatoorses raviasutuses 1-2 kuud (esmalt arsti vastuvõtt ja alles siis tuleb oodata füsioterapeudi aega) ja see pikendab oluliselt taastumisperioodi.",-1)),Qs=g(()=>m("p",{class:"subheading mb-1 mt-5 mt-md-0"},"Mida eeldab kodune teraapia kliendilt?",-1)),Xs=g(()=>m("p",null,"Karkude või madala rulaatori olemasolu.",-1)),ei=g(()=>m("p",null,[m("p",{class:"subheading"},"Funktsionaalset võimekust säilitav teraapia"),j(" Vastavalt kliendi funktsionaalsele võimekusele koostab füsioterapeut harjutuste kava, arvestades kaasuvaid haigusi ja neist tulenevaid piiranguid. Vajalikke harjutusi korratakse niikaua kuni klient suudab neid iseseisvalt sooritada. Kui kliendil pole mäluprobleeme ja kukkumise ohtu, piisab tavaliselt kahest sessioonist. Vastasel korral on aga vajalik regulaarne harjutamine koos terapeudiga. ")],-1)),ai=g(()=>m("p",null,"Ravi jätkub sellega, et patsient teeb füsioterapeudiga kokkulepitud harjutusi iseseisvalt iga päev. Siin tulebki välja koduse taastusravi eelis, mis võimaldab kliendil harjutusi sooritada tuttavas keskkonnas ja koduste abivahenditega.",-1)),ti=M({__name:"diagnoosid",setup(e){const t=ca(),a=_(),u=_(!1);fa(()=>{a.value=t.currentRoute.value.hash,u.value=!0});const n=y(()=>a.value=="#pills-luumurrud"),o=y(()=>a.value==""||a.value=="#pills-insult"),p=y(()=>a.value=="#pills-voimekust-sailitav-teraapia");return(d,l)=>{const b=Ve,v=De,h=fs,w=Fe,r=ba,c=ha,f=We,x=xa,T=wa,N=ms,S=ze,E=gs,O=ps,R=vs,P=ks,$=ws,F=Cs,q=As,k=He;return le(),ma("section",Ms,[C(u)?(le(),ga(k,{key:0,class:"section"},{default:i(()=>[s(S,{gutter:"x-xxl-8",padding:"t-7"},{default:i(()=>[s(b,{level:"2"},{default:i(()=>[j("Levinumad"),Ts,j("diagnoosid")]),_:1}),s(f,{col:"12 xxl-auto"},{default:i(()=>[s(c,{class:"h-auto",shadow:""},{default:i(()=>[s(r,null,{default:i(()=>[s(w,{nav:"pills",margin:"xxl-0",tablist:"","flex-direction":"column",gap:"2"},{default:i(()=>[s(h,{role:"presentation"},{default:i(()=>[s(v,{active:C(o),toggle:"nav",tab:"#pills-insult",class:"fs-lg navlink",margin:"b-2"},{default:i(()=>[j(" Insult ")]),_:1},8,["active"])]),_:1}),s(h,null,{default:i(()=>[s(v,{active:C(n),toggle:"nav",tab:"#pills-luumurrud",class:"fs-lg navlink",margin:"b-2"},{default:i(()=>[j(" Luumurrud, liigese vahetus ")]),_:1},8,["active"])]),_:1}),s(h,null,{default:i(()=>[s(v,{active:C(p),toggle:"nav",tab:"#pills-voimekust-sailitav-teraapia",class:"fs-lg navlink"},{default:i(()=>[j(" Funktsionaalset võimekust"),Es,j("säilitav teraapia ")]),_:1},8,["active"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(f,null,{default:i(()=>[s(q,{margin:"t-5 xxl-0"},{default:i(()=>[s(F,{id:"pills-insult",active:C(o)},{default:i(()=>[Os,$s,Ls,s(S,{columns:"2",padding:"y-2"},{default:i(()=>[s(f,{col:"6"},{default:i(()=>[s(T,{button:"primary",toggle:"modal",target:"#Modal1",padding:"0",margin:"b-3",border:"0"},{default:i(()=>[s(x,{src:"/img/siret-2.jpg",fluid:"",rounded:"",alt:"Responsive image"})]),_:1}),s($,{id:"Modal1"},{default:i(()=>[s(P,{centered:""},{default:i(()=>[s(R,null,{default:i(()=>[s(E,null,{default:i(()=>[s(S,{"justify-content":"end"},{default:i(()=>[s(f,{col:"auto",padding:"e-4"},{default:i(()=>[s(N,{dismiss:"modal","text-alignment":"end"})]),_:1})]),_:1}),s(x,{src:"/img/siret-2.jpg",fluid:"",rounded:"top",alt:"Responsive image"})]),_:1}),s(O,{padding:"3",rounded:"bottom"},{default:i(()=>[j(" Seistes käe välisrotatsioon, seisutasakaalu treenimine koos tegevusega. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(f,{col:"6"},{default:i(()=>[s(T,{button:"primary",toggle:"modal",target:"#Modal2",padding:"0",margin:"b-3",border:"0"},{default:i(()=>[s(x,{src:"/img/siret-3.jpg",fluid:"",rounded:"",alt:"Responsive image"})]),_:1}),s($,{id:"Modal2"},{default:i(()=>[s(P,{centered:""},{default:i(()=>[s(R,null,{default:i(()=>[s(E,null,{default:i(()=>[s(S,{"justify-content":"end"},{default:i(()=>[s(f,{col:"auto",padding:"e-4"},{default:i(()=>[s(N,{dismiss:"modal","text-alignment":"end"})]),_:1})]),_:1}),s(x,{src:"/img/siret-3.jpg",fluid:"",rounded:"top",alt:"Responsive image"})]),_:1}),s(O,{padding:"3",rounded:"bottom"},{default:i(()=>[j(" Käeteraapia, randme dorsaalfleksiooni treenimine - vajalik haaramiseks. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),Bs,Is,s(S,{columns:"2",padding:"y-2"},{default:i(()=>[s(f,{col:"6"},{default:i(()=>[s(T,{button:"primary",toggle:"modal",target:"#Modal3",padding:"0",margin:"b-3",border:"0"},{default:i(()=>[s(x,{src:"/img/siret-6.jpg",fluid:"",rounded:"",alt:"Responsive image"})]),_:1}),s($,{id:"Modal3"},{default:i(()=>[s(P,{centered:""},{default:i(()=>[s(R,null,{default:i(()=>[s(E,null,{default:i(()=>[s(S,{"justify-content":"end"},{default:i(()=>[s(f,{col:"auto",padding:"e-4"},{default:i(()=>[s(N,{dismiss:"modal","text-alignment":"end"})]),_:1})]),_:1}),s(x,{src:"/img/siret-6.jpg",fluid:"",rounded:"top",alt:"Responsive image"})]),_:1}),s(O,{padding:"3",rounded:"bottom"},{default:i(()=>[j(" Püsti tõusmise harjutamine, terapeut toetab käega nõrgema jala reiele, et lihas paremini tööle lülitada. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(f,{col:"6"},{default:i(()=>[s(T,{button:"primary",toggle:"modal",target:"#Modal4",padding:"0",margin:"b-3",border:"0"},{default:i(()=>[s(x,{src:"/img/siret-5.jpg",fluid:"",rounded:"",alt:"Responsive image"})]),_:1}),s($,{id:"Modal4"},{default:i(()=>[s(P,{centered:""},{default:i(()=>[s(R,null,{default:i(()=>[s(E,null,{default:i(()=>[s(S,{"justify-content":"end"},{default:i(()=>[s(f,{col:"auto",padding:"e-4"},{default:i(()=>[s(N,{dismiss:"modal","text-alignment":"end"})]),_:1})]),_:1}),s(x,{src:"/img/siret-5.jpg",fluid:"",rounded:"top",alt:"Responsive image"})]),_:1}),s(O,{padding:"3",rounded:"bottom"},{default:i(()=>[j(" Voodis istumast siirdumine ratastooli. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),Ps,Ns,Us,s(S,{columns:"2",padding:"y-2"},{default:i(()=>[s(f,{col:"6"},{default:i(()=>[s(T,{button:"primary",toggle:"modal",target:"#Modal5",padding:"0",margin:"b-3",border:"0"},{default:i(()=>[s(x,{src:"/img/siret-4.jpg",fluid:"",rounded:"",alt:"Responsive image"})]),_:1}),s($,{id:"Modal5"},{default:i(()=>[s(P,{centered:""},{default:i(()=>[s(R,null,{default:i(()=>[s(E,null,{default:i(()=>[s(S,{"justify-content":"end"},{default:i(()=>[s(f,{col:"auto",padding:"e-4"},{default:i(()=>[s(N,{dismiss:"modal","text-alignment":"end"})]),_:1})]),_:1}),s(x,{src:"/img/siret-4.jpg",fluid:"",rounded:"top",alt:"Responsive image"})]),_:1}),s(O,{padding:"3",rounded:"bottom"},{default:i(()=>[j(" Astumine alusele terve jalaga - nõrgema jala toefaasi treenimine - kõnniks ette valmistus ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(f,{col:"6"},{default:i(()=>[s(T,{button:"primary",toggle:"modal",target:"#Modal6",padding:"0",margin:"b-3",border:"0"},{default:i(()=>[s(x,{src:"/img/siret-7.jpg",fluid:"",rounded:"",alt:"Responsive image"})]),_:1}),s($,{id:"Modal6"},{default:i(()=>[s(P,{centered:""},{default:i(()=>[s(R,null,{default:i(()=>[s(E,null,{default:i(()=>[s(S,{"justify-content":"end"},{default:i(()=>[s(f,{col:"auto",padding:"e-4"},{default:i(()=>[s(N,{dismiss:"modal","text-alignment":"end"})]),_:1})]),_:1}),s(x,{src:"/img/siret-7.jpg",fluid:"",rounded:"top",alt:"Responsive image"})]),_:1}),s(O,{padding:"3",rounded:"bottom"},{default:i(()=>[j(" Kõnd kepiga, terapeut toetab nõrgemat kehapoolt. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),Vs,Ds,Fs,Ws,zs,Hs]),_:1},8,["active"]),s(F,{id:"pills-luumurrud",active:C(n)},{default:i(()=>[Ks,Zs,Ys,Js,qs,Gs,Qs,Xs]),_:1},8,["active"]),s(F,{id:"pills-voimekust-sailitav-teraapia",active:C(p)},{default:i(()=>[ei,ai]),_:1},8,["active"])]),_:1})]),_:1})]),_:1})]),_:1})):pa("",!0)])}}}),_i=_a(ti,[["__scopeId","data-v-6bc1643e"]]);export{_i as default};
