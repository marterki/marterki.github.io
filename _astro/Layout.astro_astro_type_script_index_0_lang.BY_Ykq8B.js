import{t as e}from"./rolldown-runtime.BpQH8Ho1.js";e(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).bootstrap=r()})(e,function(){let e=new Map,t={set(t,n,r){e.has(t)||e.set(t,new Map);let i=e.get(t);i.has(n)||i.size===0?i.set(n,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get:(t,n)=>e.has(t)&&e.get(t).get(n)||null,remove(t,n){if(!e.has(t))return;let r=e.get(t);r.delete(n),r.size===0&&e.delete(t)}},n=`transitionend`,r=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),e),i=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),a=e=>{e.dispatchEvent(new Event(n))},o=e=>!(!e||typeof e!=`object`)&&(e.jquery!==void 0&&(e=e[0]),e.nodeType!==void 0),s=e=>o(e)?e.jquery?e[0]:e:typeof e==`string`&&e.length>0?document.querySelector(r(e)):null,c=e=>{if(!o(e)||e.getClientRects().length===0)return!1;let t=getComputedStyle(e).getPropertyValue(`visibility`)===`visible`,n=e.closest(`details:not([open])`);if(!n)return t;if(n!==e){let t=e.closest(`summary`);if(t&&t.parentNode!==n||t===null)return!1}return t},l=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains(`disabled`)||(e.disabled===void 0?e.hasAttribute(`disabled`)&&e.getAttribute(`disabled`)!==`false`:e.disabled),u=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode==`function`){let t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?u(e.parentNode):null},d=()=>{},f=e=>{e.offsetHeight},p=()=>window.jQuery&&!document.body.hasAttribute(`data-bs-no-jquery`)?window.jQuery:null,m=[],h=()=>document.documentElement.dir===`rtl`,g=e=>{var t=()=>{let t=p();if(t){let n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}};document.readyState===`loading`?(m.length||document.addEventListener(`DOMContentLoaded`,()=>{for(let e of m)e()}),m.push(t)):t()},_=(e,t=[],n=e)=>typeof e==`function`?e.call(...t):n,v=(e,t,r=!0)=>{if(!r)return void _(e);let i=(e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);return Number.parseFloat(t)||Number.parseFloat(n)?(t=t.split(`,`)[0],n=n.split(`,`)[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0})(t)+5,o=!1,s=({target:r})=>{r===t&&(o=!0,t.removeEventListener(n,s),_(e))};t.addEventListener(n,s),setTimeout(()=>{o||a(t)},i)},y=(e,t,n,r)=>{let i=e.length,a=e.indexOf(t);return a===-1?!n&&r?e[i-1]:e[0]:(a+=n?1:-1,r&&(a=(a+i)%i),e[Math.max(0,Math.min(a,i-1))])},b=/[^.]*(?=\..*)\.|.*/,x=/\..*/,S=/::\d+$/,C={},w=1,T={mouseenter:`mouseover`,mouseleave:`mouseout`},E=new Set(`click.dblclick.mouseup.mousedown.contextmenu.mousewheel.DOMMouseScroll.mouseover.mouseout.mousemove.selectstart.selectend.keydown.keypress.keyup.orientationchange.touchstart.touchmove.touchend.touchcancel.pointerdown.pointermove.pointerup.pointerleave.pointercancel.gesturestart.gesturechange.gestureend.focus.blur.change.reset.select.submit.focusin.focusout.load.unload.beforeunload.resize.move.DOMContentLoaded.readystatechange.error.abort.scroll`.split(`.`));function D(e,t){return t&&`${t}::${w++}`||e.uidEvent||w++}function ee(e){let t=D(e);return e.uidEvent=t,C[t]=C[t]||{},C[t]}function te(e,t,n=null){return Object.values(e).find(e=>e.callable===t&&e.delegationSelector===n)}function ne(e,t,n){let r=typeof t==`string`,i=r?n:t||n,a=A(e);return E.has(a)||(a=e),[r,i,a]}function O(e,t,n,r,i){if(typeof t!=`string`||!e)return;let[a,o,s]=ne(t,n,r);t in T&&(o=(e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)})(o));let c=ee(e),l=c[s]||(c[s]={}),u=te(l,o,a?n:null);if(u)return void(u.oneOff=u.oneOff&&i);let d=D(o,t.replace(b,``)),f=a?function(e,t,n){return function r(i){let a=e.querySelectorAll(t);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(let s of a)if(s===o)return ie(i,{delegateTarget:o}),r.oneOff&&j.off(e,i.type,t,n),n.apply(o,[i])}}(e,n,o):function(e,t){return function n(r){return ie(r,{delegateTarget:e}),n.oneOff&&j.off(e,r.type,t),t.apply(e,[r])}}(e,o);f.delegationSelector=a?n:null,f.callable=o,f.oneOff=i,f.uidEvent=d,l[d]=f,e.addEventListener(s,f,a)}function k(e,t,n,r,i){let a=te(t[n],r,i);a&&(e.removeEventListener(n,a,!!i),delete t[n][a.uidEvent])}function re(e,t,n,r){let i=t[n]||{};for(let[a,o]of Object.entries(i))a.includes(r)&&k(e,t,n,o.callable,o.delegationSelector)}function A(e){return e=e.replace(x,``),T[e]||e}let j={on(e,t,n,r){O(e,t,n,r,!1)},one(e,t,n,r){O(e,t,n,r,!0)},off(e,t,n,r){if(typeof t!=`string`||!e)return;let[i,a,o]=ne(t,n,r),s=o!==t,c=ee(e),l=c[o]||{},u=t.startsWith(`.`);if(a===void 0){if(u)for(let n of Object.keys(c))re(e,c,n,t.slice(1));for(let[n,r]of Object.entries(l)){let i=n.replace(S,``);s&&!t.includes(i)||k(e,c,o,r.callable,r.delegationSelector)}}else{if(!Object.keys(l).length)return;k(e,c,o,a,i?n:null)}},trigger(e,t,n){if(typeof t!=`string`||!e)return null;let r=p(),i=null,a=!0,o=!0,s=!1;t!==A(t)&&r&&(i=r.Event(t,n),r(e).trigger(i),a=!i.isPropagationStopped(),o=!i.isImmediatePropagationStopped(),s=i.isDefaultPrevented());let c=ie(new Event(t,{bubbles:a,cancelable:!0}),n);return s&&c.preventDefault(),o&&e.dispatchEvent(c),c.defaultPrevented&&i&&i.preventDefault(),c}};function ie(e,t={}){for(let[n,r]of Object.entries(t))try{e[n]=r}catch{Object.defineProperty(e,n,{configurable:!0,get:()=>r})}return e}function ae(e){if(e===`true`)return!0;if(e===`false`)return!1;if(e===Number(e).toString())return Number(e);if(e===``||e===`null`)return null;if(typeof e!=`string`)return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function oe(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}let M={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${oe(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${oe(t)}`)},getDataAttributes(e){if(!e)return{};let t={},n=Object.keys(e.dataset).filter(e=>e.startsWith(`bs`)&&!e.startsWith(`bsConfig`));for(let r of n){let n=r.replace(/^bs/,``);n=n.charAt(0).toLowerCase()+n.slice(1),t[n]=ae(e.dataset[r])}return t},getDataAttribute:(e,t)=>ae(e.getAttribute(`data-bs-${oe(t)}`))};class se{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw Error(`You have to implement the static method "NAME", for each component!`)}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){let n=o(t)?M.getDataAttribute(t,`config`):{};return{...this.constructor.Default,...typeof n==`object`?n:{},...o(t)?M.getDataAttributes(t):{},...typeof e==`object`?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(let[n,r]of Object.entries(t)){let t=e[n],a=o(t)?`element`:i(t);if(!new RegExp(r).test(a))throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${r}".`)}}}class N extends se{constructor(e,n){super(),(e=s(e))&&(this._element=e,this._config=this._getConfig(n),t.set(this._element,this.constructor.DATA_KEY,this))}dispose(){t.remove(this._element,this.constructor.DATA_KEY),j.off(this._element,this.constructor.EVENT_KEY);for(let e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){v(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return t.get(s(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,typeof t==`object`?t:null)}static get VERSION(){return`5.3.8`}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}let ce=e=>{let t=e.getAttribute(`data-bs-target`);if(!t||t===`#`){let n=e.getAttribute(`href`);if(!n||!n.includes(`#`)&&!n.startsWith(`.`))return null;n.includes(`#`)&&!n.startsWith(`#`)&&(n=`#${n.split(`#`)[1]}`),t=n&&n!==`#`?n.trim():null}return t?t.split(`,`).map(e=>r(e)).join(`,`):null},P={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter(e=>e.matches(t)),parents(e,t){let n=[],r=e.parentNode.closest(t);for(;r;)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){let t=[`a`,`button`,`input`,`textarea`,`select`,`details`,`[tabindex]`,`[contenteditable="true"]`].map(e=>`${e}:not([tabindex^="-"])`).join(`,`);return this.find(t,e).filter(e=>!l(e)&&c(e))},getSelectorFromElement(e){let t=ce(e);return t&&P.findOne(t)?t:null},getElementFromSelector(e){let t=ce(e);return t?P.findOne(t):null},getMultipleElementsFromSelector(e){let t=ce(e);return t?P.find(t):[]}},le=(e,t=`hide`)=>{let n=`click.dismiss${e.EVENT_KEY}`,r=e.NAME;j.on(document,n,`[data-bs-dismiss="${r}"]`,function(n){if([`A`,`AREA`].includes(this.tagName)&&n.preventDefault(),l(this))return;let i=P.getElementFromSelector(this)||this.closest(`.${r}`);e.getOrCreateInstance(i)[t]()})},ue=`.bs.alert`,de=`close${ue}`,fe=`closed${ue}`;class pe extends N{static get NAME(){return`alert`}close(){if(j.trigger(this._element,de).defaultPrevented)return;this._element.classList.remove(`show`);let e=this._element.classList.contains(`fade`);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),j.trigger(this._element,fe),this.dispose()}static jQueryInterface(e){return this.each(function(){let t=pe.getOrCreateInstance(this);if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e](this)}})}}le(pe,`close`),g(pe);let me=`[data-bs-toggle="button"]`;class he extends N{static get NAME(){return`button`}toggle(){this._element.setAttribute(`aria-pressed`,this._element.classList.toggle(`active`))}static jQueryInterface(e){return this.each(function(){let t=he.getOrCreateInstance(this);e===`toggle`&&t[e]()})}}j.on(document,`click.bs.button.data-api`,me,e=>{e.preventDefault();let t=e.target.closest(me);he.getOrCreateInstance(t).toggle()}),g(he);let ge=`.bs.swipe`,_e=`touchstart${ge}`,ve=`touchmove${ge}`,ye=`touchend${ge}`,be=`pointerdown${ge}`,xe=`pointerup${ge}`,Se={endCallback:null,leftCallback:null,rightCallback:null},Ce={endCallback:`(function|null)`,leftCallback:`(function|null)`,rightCallback:`(function|null)`};class we extends se{constructor(e,t){super(),this._element=e,e&&we.isSupported()&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Se}static get DefaultType(){return Ce}static get NAME(){return`swipe`}dispose(){j.off(this._element,ge)}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),_(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){let e=Math.abs(this._deltaX);if(e<=40)return;let t=e/this._deltaX;this._deltaX=0,t&&_(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(j.on(this._element,be,e=>this._start(e)),j.on(this._element,xe,e=>this._end(e)),this._element.classList.add(`pointer-event`)):(j.on(this._element,_e,e=>this._start(e)),j.on(this._element,ve,e=>this._move(e)),j.on(this._element,ye,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===`pen`||e.pointerType===`touch`)}static isSupported(){return`ontouchstart`in document.documentElement||navigator.maxTouchPoints>0}}let F=`.bs.carousel`,Te=`.data-api`,Ee=`next`,De=`prev`,Oe=`left`,ke=`right`,Ae=`slide${F}`,je=`slid${F}`,Me=`keydown${F}`,Ne=`mouseenter${F}`,Pe=`mouseleave${F}`,Fe=`dragstart${F}`,Ie=`load${F}${Te}`,Le=`click${F}${Te}`,Re=`carousel`,ze=`active`,Be={ArrowLeft:ke,ArrowRight:Oe},Ve={interval:5e3,keyboard:!0,pause:`hover`,ride:!1,touch:!0,wrap:!0},He={interval:`(number|boolean)`,keyboard:`boolean`,pause:`(string|boolean)`,ride:`(boolean|string)`,touch:`boolean`,wrap:`boolean`};class Ue extends N{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=P.findOne(`.carousel-indicators`,this._element),this._addEventListeners(),this._config.ride===Re&&this.cycle()}static get Default(){return Ve}static get DefaultType(){return He}static get NAME(){return`carousel`}next(){this._slide(Ee)}nextWhenVisible(){!document.hidden&&c(this._element)&&this.next()}prev(){this._slide(De)}pause(){this._isSliding&&a(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?j.one(this._element,je,()=>this.cycle()):this.cycle())}to(e){let t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding)return void j.one(this._element,je,()=>this.to(e));let n=this._getItemIndex(this._getActive());if(n===e)return;let r=e>n?Ee:De;this._slide(r,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&j.on(this._element,Me,e=>this._keydown(e)),this._config.pause===`hover`&&(j.on(this._element,Ne,()=>this.pause()),j.on(this._element,Pe,()=>this._maybeEnableCycle())),this._config.touch&&we.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(let e of P.find(`.carousel-item img`,this._element))j.on(e,Fe,e=>e.preventDefault());let e={leftCallback:()=>this._slide(this._directionToOrder(Oe)),rightCallback:()=>this._slide(this._directionToOrder(ke)),endCallback:()=>{this._config.pause===`hover`&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new we(this._element,e)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;let t=Be[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;let t=P.findOne(`.active`,this._indicatorsElement);t.classList.remove(ze),t.removeAttribute(`aria-current`);let n=P.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(ze),n.setAttribute(`aria-current`,`true`))}_updateInterval(){let e=this._activeElement||this._getActive();if(!e)return;let t=Number.parseInt(e.getAttribute(`data-bs-interval`),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;let n=this._getActive(),r=e===Ee,i=t||y(this._getItems(),n,r,this._config.wrap);if(i===n)return;let a=this._getItemIndex(i),o=t=>j.trigger(this._element,t,{relatedTarget:i,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:a});if(o(Ae).defaultPrevented||!n||!i)return;let s=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(a),this._activeElement=i;let c=r?`carousel-item-start`:`carousel-item-end`,l=r?`carousel-item-next`:`carousel-item-prev`;i.classList.add(l),f(i),n.classList.add(c),i.classList.add(c),this._queueCallback(()=>{i.classList.remove(c,l),i.classList.add(ze),n.classList.remove(ze,l,c),this._isSliding=!1,o(je)},n,this._isAnimated()),s&&this.cycle()}_isAnimated(){return this._element.classList.contains(`slide`)}_getActive(){return P.findOne(`.active.carousel-item`,this._element)}_getItems(){return P.find(`.carousel-item`,this._element)}_clearInterval(){this._interval&&=(clearInterval(this._interval),null)}_directionToOrder(e){return h()?e===Oe?De:Ee:e===Oe?Ee:De}_orderToDirection(e){return h()?e===De?Oe:ke:e===De?ke:Oe}static jQueryInterface(e){return this.each(function(){let t=Ue.getOrCreateInstance(this,e);if(typeof e!=`number`){if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)})}}j.on(document,Le,`[data-bs-slide], [data-bs-slide-to]`,function(e){let t=P.getElementFromSelector(this);if(!t||!t.classList.contains(Re))return;e.preventDefault();let n=Ue.getOrCreateInstance(t),r=this.getAttribute(`data-bs-slide-to`);r?(n.to(r),n._maybeEnableCycle()):M.getDataAttribute(this,`slide`)===`next`?(n.next(),n._maybeEnableCycle()):(n.prev(),n._maybeEnableCycle())}),j.on(window,Ie,()=>{let e=P.find(`[data-bs-ride="carousel"]`);for(let t of e)Ue.getOrCreateInstance(t)}),g(Ue);let We=`.bs.collapse`,Ge=`show${We}`,Ke=`shown${We}`,qe=`hide${We}`,Je=`hidden${We}`,Ye=`click${We}.data-api`,Xe=`show`,Ze=`collapse`,Qe=`collapsing`,$e=`:scope .${Ze} .${Ze}`,et=`[data-bs-toggle="collapse"]`,tt={parent:null,toggle:!0},nt={parent:`(null|element)`,toggle:`boolean`};class rt extends N{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];let n=P.find(et);for(let e of n){let t=P.getSelectorFromElement(e),n=P.find(t).filter(e=>e===this._element);t!==null&&n.length&&this._triggerArray.push(e)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return tt}static get DefaultType(){return nt}static get NAME(){return`collapse`}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(`.collapse.show, .collapse.collapsing`).filter(e=>e!==this._element).map(e=>rt.getOrCreateInstance(e,{toggle:!1}))),e.length&&e[0]._isTransitioning||j.trigger(this._element,Ge).defaultPrevented)return;for(let t of e)t.hide();let t=this._getDimension();this._element.classList.remove(Ze),this._element.classList.add(Qe),this._element.style[t]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;let n=`scroll${t[0].toUpperCase()+t.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Qe),this._element.classList.add(Ze,Xe),this._element.style[t]=``,j.trigger(this._element,Ke)},this._element,!0),this._element.style[t]=`${this._element[n]}px`}hide(){if(this._isTransitioning||!this._isShown()||j.trigger(this._element,qe).defaultPrevented)return;let e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,f(this._element),this._element.classList.add(Qe),this._element.classList.remove(Ze,Xe);for(let e of this._triggerArray){let t=P.getElementFromSelector(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0,this._element.style[e]=``,this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Qe),this._element.classList.add(Ze),j.trigger(this._element,Je)},this._element,!0)}_isShown(e=this._element){return e.classList.contains(Xe)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=s(e.parent),e}_getDimension(){return this._element.classList.contains(`collapse-horizontal`)?`width`:`height`}_initializeChildren(){if(!this._config.parent)return;let e=this._getFirstLevelChildren(et);for(let t of e){let e=P.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){let t=P.find($e,this._config.parent);return P.find(e,this._config.parent).filter(e=>!t.includes(e))}_addAriaAndCollapsedClass(e,t){if(e.length)for(let n of e)n.classList.toggle(`collapsed`,!t),n.setAttribute(`aria-expanded`,t)}static jQueryInterface(e){let t={};return typeof e==`string`&&/show|hide/.test(e)&&(t.toggle=!1),this.each(function(){let n=rt.getOrCreateInstance(this,t);if(typeof e==`string`){if(n[e]===void 0)throw TypeError(`No method named "${e}"`);n[e]()}})}}j.on(document,Ye,et,function(e){(e.target.tagName===`A`||e.delegateTarget&&e.delegateTarget.tagName===`A`)&&e.preventDefault();for(let e of P.getMultipleElementsFromSelector(this))rt.getOrCreateInstance(e,{toggle:!1}).toggle()}),g(rt);var I=`top`,L=`bottom`,R=`right`,z=`left`,it=`auto`,at=[I,L,R,z],ot=`start`,st=`end`,ct=`clippingParents`,lt=`viewport`,ut=`popper`,dt=`reference`,ft=at.reduce(function(e,t){return e.concat([t+`-`+ot,t+`-`+st])},[]),pt=[].concat(at,[it]).reduce(function(e,t){return e.concat([t,t+`-`+ot,t+`-`+st])},[]),mt=`beforeRead`,ht=`read`,gt=`afterRead`,_t=`beforeMain`,vt=`main`,yt=`afterMain`,bt=`beforeWrite`,B=`write`,xt=`afterWrite`,St=[mt,ht,gt,_t,vt,yt,bt,B,xt];function V(e){return e?(e.nodeName||``).toLowerCase():null}function H(e){if(e==null)return window;if(e.toString()!==`[object Window]`){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Ct(e){return e instanceof H(e).Element||e instanceof Element}function U(e){return e instanceof H(e).HTMLElement||e instanceof HTMLElement}function wt(e){return typeof ShadowRoot<`u`&&(e instanceof H(e).ShadowRoot||e instanceof ShadowRoot)}let Tt={name:`applyStyles`,enabled:!0,phase:`write`,fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];U(i)&&V(i)&&(Object.assign(i.style,n),Object.keys(r).forEach(function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?``:t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:`0`,top:`0`,margin:`0`},arrow:{position:`absolute`},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]=``,e},{});U(r)&&V(r)&&(Object.assign(r.style,a),Object.keys(i).forEach(function(e){r.removeAttribute(e)}))})}},requires:[`computeStyles`]};function W(e){return e.split(`-`)[0]}var Et=Math.max,Dt=Math.min,Ot=Math.round;function kt(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+`/`+e.version}).join(` `):navigator.userAgent}function At(){return!/^((?!chrome|android).)*safari/i.test(kt())}function jt(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),i=1,a=1;t&&U(e)&&(i=e.offsetWidth>0&&Ot(r.width)/e.offsetWidth||1,a=e.offsetHeight>0&&Ot(r.height)/e.offsetHeight||1);var o=(Ct(e)?H(e):window).visualViewport,s=!At()&&n,c=(r.left+(s&&o?o.offsetLeft:0))/i,l=(r.top+(s&&o?o.offsetTop:0))/a,u=r.width/i,d=r.height/a;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c,x:c,y:l}}function Mt(e){var t=jt(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Nt(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&wt(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function G(e){return H(e).getComputedStyle(e)}function Pt(e){return[`table`,`td`,`th`].indexOf(V(e))>=0}function K(e){return((Ct(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ft(e){return V(e)===`html`?e:e.assignedSlot||e.parentNode||(wt(e)?e.host:null)||K(e)}function It(e){return U(e)&&G(e).position!==`fixed`?e.offsetParent:null}function Lt(e){for(var t=H(e),n=It(e);n&&Pt(n)&&G(n).position===`static`;)n=It(n);return n&&(V(n)===`html`||V(n)===`body`&&G(n).position===`static`)?t:n||function(e){var t=/firefox/i.test(kt());if(/Trident/i.test(kt())&&U(e)&&G(e).position===`fixed`)return null;var n=Ft(e);for(wt(n)&&(n=n.host);U(n)&&[`html`,`body`].indexOf(V(n))<0;){var r=G(n);if(r.transform!==`none`||r.perspective!==`none`||r.contain===`paint`||[`transform`,`perspective`].indexOf(r.willChange)!==-1||t&&r.willChange===`filter`||t&&r.filter&&r.filter!==`none`)return n;n=n.parentNode}return null}(e)||t}function Rt(e){return[`top`,`bottom`].indexOf(e)>=0?`x`:`y`}function zt(e,t,n){return Et(e,Dt(t,n))}function Bt(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Vt(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}let Ht={name:`arrow`,enabled:!0,phase:`main`,fn:function(e){var t,n=e.state,r=e.name,i=e.options,a=n.elements.arrow,o=n.modifiersData.popperOffsets,s=W(n.placement),c=Rt(s),l=[z,R].indexOf(s)>=0?`height`:`width`;if(a&&o){var u=function(e,t){return Bt(typeof(e=typeof e==`function`?e(Object.assign({},t.rects,{placement:t.placement})):e)==`number`?Vt(e,at):e)}(i.padding,n),d=Mt(a),f=c===`y`?I:z,p=c===`y`?L:R,m=n.rects.reference[l]+n.rects.reference[c]-o[c]-n.rects.popper[l],h=o[c]-n.rects.reference[c],g=Lt(a),_=g?c===`y`?g.clientHeight||0:g.clientWidth||0:0,v=m/2-h/2,y=u[f],b=_-d[l]-u[p],x=_/2-d[l]/2+v,S=zt(y,x,b),C=c;n.modifiersData[r]=((t={})[C]=S,t.centerOffset=S-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=n===void 0?`[data-popper-arrow]`:n;r!=null&&(typeof r!=`string`||(r=t.elements.popper.querySelector(r)))&&Nt(t.elements.popper,r)&&(t.elements.arrow=r)},requires:[`popperOffsets`],requiresIfExists:[`preventOverflow`]};function Ut(e){return e.split(`-`)[1]}var Wt={top:`auto`,right:`auto`,bottom:`auto`,left:`auto`};function Gt(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.variation,o=e.offsets,s=e.position,c=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,d=e.isFixed,f=o.x,p=f===void 0?0:f,m=o.y,h=m===void 0?0:m,g=typeof u==`function`?u({x:p,y:h}):{x:p,y:h};p=g.x,h=g.y;var _=o.hasOwnProperty(`x`),v=o.hasOwnProperty(`y`),y=z,b=I,x=window;if(l){var S=Lt(n),C=`clientHeight`,w=`clientWidth`;S===H(n)&&G(S=K(n)).position!==`static`&&s===`absolute`&&(C=`scrollHeight`,w=`scrollWidth`),(i===I||(i===z||i===R)&&a===st)&&(b=L,h-=(d&&S===x&&x.visualViewport?x.visualViewport.height:S[C])-r.height,h*=c?1:-1),i!==z&&(i!==I&&i!==L||a!==st)||(y=R,p-=(d&&S===x&&x.visualViewport?x.visualViewport.width:S[w])-r.width,p*=c?1:-1)}var T,E=Object.assign({position:s},l&&Wt),D=!0===u?function(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:Ot(n*i)/i||0,y:Ot(r*i)/i||0}}({x:p,y:h},H(n)):{x:p,y:h};return p=D.x,h=D.y,c?Object.assign({},E,((T={})[b]=v?`0`:``,T[y]=_?`0`:``,T.transform=(x.devicePixelRatio||1)<=1?`translate(`+p+`px, `+h+`px)`:`translate3d(`+p+`px, `+h+`px, 0)`,T)):Object.assign({},E,((t={})[b]=v?h+`px`:``,t[y]=_?p+`px`:``,t.transform=``,t))}let Kt={name:`computeStyles`,enabled:!0,phase:`beforeWrite`,fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=r===void 0||r,a=n.adaptive,o=a===void 0||a,s=n.roundOffsets,c=s===void 0||s,l={placement:W(t.placement),variation:Ut(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy===`fixed`};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Gt(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Gt(Object.assign({},l,{offsets:t.modifiersData.arrow,position:`absolute`,adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var q={passive:!0};let qt={name:`eventListeners`,enabled:!0,phase:`write`,fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=i===void 0||i,o=r.resize,s=o===void 0||o,c=H(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(e){e.addEventListener(`scroll`,n.update,q)}),s&&c.addEventListener(`resize`,n.update,q),function(){a&&l.forEach(function(e){e.removeEventListener(`scroll`,n.update,q)}),s&&c.removeEventListener(`resize`,n.update,q)}},data:{}};var Jt={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function J(e){return e.replace(/left|right|bottom|top/g,function(e){return Jt[e]})}var Yt={start:`end`,end:`start`};function Xt(e){return e.replace(/start|end/g,function(e){return Yt[e]})}function Zt(e){var t=H(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Qt(e){return jt(K(e)).left+Zt(e).scrollLeft}function $t(e){var t=G(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function en(e){return[`html`,`body`,`#document`].indexOf(V(e))>=0?e.ownerDocument.body:U(e)&&$t(e)?e:en(Ft(e))}function tn(e,t){t===void 0&&(t=[]);var n=en(e),r=n===e.ownerDocument?.body,i=H(n),a=r?[i].concat(i.visualViewport||[],$t(n)?n:[]):n,o=t.concat(a);return r?o:o.concat(tn(Ft(a)))}function nn(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function rn(e,t,n){return t===lt?nn(function(e,t){var n=H(e),r=K(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;var l=At();(l||!l&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}return{width:a,height:o,x:s+Qt(e),y:c}}(e,n)):Ct(t)?function(e,t){var n=jt(e,!1,t===`fixed`);return n.top+=e.clientTop,n.left+=e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):nn(function(e){var t=K(e),n=Zt(e),r=e.ownerDocument?.body,i=Et(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=Et(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),o=-n.scrollLeft+Qt(e),s=-n.scrollTop;return G(r||t).direction===`rtl`&&(o+=Et(t.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:o,y:s}}(K(e)))}function an(e){var t,n=e.reference,r=e.element,i=e.placement,a=i?W(i):null,o=i?Ut(i):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(a){case I:t={x:s,y:n.y-r.height};break;case L:t={x:s,y:n.y+n.height};break;case R:t={x:n.x+n.width,y:c};break;case z:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var l=a?Rt(a):null;if(l!=null){var u=l===`y`?`height`:`width`;switch(o){case ot:t[l]=t[l]-(n[u]/2-r[u]/2);break;case st:t[l]=t[l]+(n[u]/2-r[u]/2)}}return t}function on(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=r===void 0?e.placement:r,a=n.strategy,o=a===void 0?e.strategy:a,s=n.boundary,c=s===void 0?ct:s,l=n.rootBoundary,u=l===void 0?lt:l,d=n.elementContext,f=d===void 0?ut:d,p=n.altBoundary,m=p!==void 0&&p,h=n.padding,g=h===void 0?0:h,_=Bt(typeof g==`number`?Vt(g,at):g),v=f===ut?dt:ut,y=e.rects.popper,b=e.elements[m?v:f],x=function(e,t,n,r){var i=t===`clippingParents`?function(e){var t=tn(Ft(e)),n=[`absolute`,`fixed`].indexOf(G(e).position)>=0&&U(e)?Lt(e):e;return Ct(n)?t.filter(function(e){return Ct(e)&&Nt(e,n)&&V(e)!==`body`}):[]}(e):[].concat(t),a=[].concat(i,[n]),o=a[0],s=a.reduce(function(t,n){var i=rn(e,n,r);return t.top=Et(i.top,t.top),t.right=Dt(i.right,t.right),t.bottom=Dt(i.bottom,t.bottom),t.left=Et(i.left,t.left),t},rn(e,o,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(Ct(b)?b:b.contextElement||K(e.elements.popper),c,u,o),S=jt(e.elements.reference),C=an({reference:S,element:y,placement:i}),w=nn(Object.assign({},y,C)),T=f===ut?w:S,E={top:x.top-T.top+_.top,bottom:T.bottom-x.bottom+_.bottom,left:x.left-T.left+_.left,right:T.right-x.right+_.right},D=e.modifiersData.offset;if(f===ut&&D){var ee=D[i];Object.keys(E).forEach(function(e){var t=[R,L].indexOf(e)>=0?1:-1,n=[I,L].indexOf(e)>=0?`y`:`x`;E[e]+=ee[n]*t})}return E}function sn(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=n.boundary,a=n.rootBoundary,o=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?pt:c,u=Ut(r),d=u?s?ft:ft.filter(function(e){return Ut(e)===u}):at,f=d.filter(function(e){return l.indexOf(e)>=0});f.length===0&&(f=d);var p=f.reduce(function(t,n){return t[n]=on(e,{placement:n,boundary:i,rootBoundary:a,padding:o})[W(n)],t},{});return Object.keys(p).sort(function(e,t){return p[e]-p[t]})}let cn={name:`flip`,enabled:!0,phase:`main`,fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,a=i===void 0||i,o=n.altAxis,s=o===void 0||o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,d=n.rootBoundary,f=n.altBoundary,p=n.flipVariations,m=p===void 0||p,h=n.allowedAutoPlacements,g=t.options.placement,_=W(g),v=c||(_!==g&&m?function(e){if(W(e)===it)return[];var t=J(e);return[Xt(e),t,Xt(t)]}(g):[J(g)]),y=[g].concat(v).reduce(function(e,n){return e.concat(W(n)===it?sn(t,{placement:n,boundary:u,rootBoundary:d,padding:l,flipVariations:m,allowedAutoPlacements:h}):n)},[]),b=t.rects.reference,x=t.rects.popper,S=new Map,C=!0,w=y[0],T=0;T<y.length;T++){var E=y[T],D=W(E),ee=Ut(E)===ot,te=[I,L].indexOf(D)>=0,ne=te?`width`:`height`,O=on(t,{placement:E,boundary:u,rootBoundary:d,altBoundary:f,padding:l}),k=te?ee?R:z:ee?L:I;b[ne]>x[ne]&&(k=J(k));var re=J(k),A=[];if(a&&A.push(O[D]<=0),s&&A.push(O[k]<=0,O[re]<=0),A.every(function(e){return e})){w=E,C=!1;break}S.set(E,A)}if(C)for(var j=function(e){var t=y.find(function(t){var n=S.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return w=t,`break`},ie=m?3:1;ie>0&&j(ie)!==`break`;ie--);t.placement!==w&&(t.modifiersData[r]._skip=!0,t.placement=w,t.reset=!0)}},requiresIfExists:[`offset`],data:{_skip:!1}};function ln(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function un(e){return[I,R,L,z].some(function(t){return e[t]>=0})}let dn={name:`hide`,enabled:!0,phase:`main`,requiresIfExists:[`preventOverflow`],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,a=t.modifiersData.preventOverflow,o=on(t,{elementContext:`reference`}),s=on(t,{altBoundary:!0}),c=ln(o,r),l=ln(s,i,a),u=un(c),d=un(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}},fn={name:`offset`,enabled:!0,phase:`main`,requires:[`popperOffsets`],fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.offset,a=i===void 0?[0,0]:i,o=pt.reduce(function(e,n){return e[n]=function(e,t,n){var r=W(e),i=[z,I].indexOf(r)>=0?-1:1,a=typeof n==`function`?n(Object.assign({},t,{placement:e})):n,o=a[0],s=a[1];return o||=0,s=(s||0)*i,[z,R].indexOf(r)>=0?{x:s,y:o}:{x:o,y:s}}(n,t.rects,a),e},{}),s=o[t.placement],c=s.x,l=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=o}},Y={name:`popperOffsets`,enabled:!0,phase:`read`,fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=an({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})},data:{}},X={name:`preventOverflow`,enabled:!0,phase:`main`,fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,a=i===void 0||i,o=n.altAxis,s=o!==void 0&&o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.padding,f=n.tether,p=f===void 0||f,m=n.tetherOffset,h=m===void 0?0:m,g=on(t,{boundary:c,rootBoundary:l,padding:d,altBoundary:u}),_=W(t.placement),v=Ut(t.placement),y=!v,b=Rt(_),x=b===`x`?`y`:`x`,S=t.modifiersData.popperOffsets,C=t.rects.reference,w=t.rects.popper,T=typeof h==`function`?h(Object.assign({},t.rects,{placement:t.placement})):h,E=typeof T==`number`?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,ee={x:0,y:0};if(S){if(a){var te=b===`y`?I:z,ne=b===`y`?L:R,O=b===`y`?`height`:`width`,k=S[b],re=k+g[te],A=k-g[ne],j=p?-w[O]/2:0,ie=v===ot?C[O]:w[O],ae=v===ot?-w[O]:-C[O],oe=t.elements.arrow,M=p&&oe?Mt(oe):{width:0,height:0},se=t.modifiersData[`arrow#persistent`]?t.modifiersData[`arrow#persistent`].padding:{top:0,right:0,bottom:0,left:0},N=se[te],ce=se[ne],P=zt(0,C[O],M[O]),le=y?C[O]/2-j-P-N-E.mainAxis:ie-P-N-E.mainAxis,ue=y?-C[O]/2+j+P+ce+E.mainAxis:ae+P+ce+E.mainAxis,de=t.elements.arrow&&Lt(t.elements.arrow),fe=de?b===`y`?de.clientTop||0:de.clientLeft||0:0,pe=D?.[b]??0,me=k+ue-pe,he=zt(p?Dt(re,k+le-pe-fe):re,k,p?Et(A,me):A);S[b]=he,ee[b]=he-k}if(s){var ge=b===`x`?I:z,_e=b===`x`?L:R,ve=S[x],ye=x===`y`?`height`:`width`,be=ve+g[ge],xe=ve-g[_e],Se=[I,z].indexOf(_)!==-1,Ce=D?.[x]??0,we=Se?be:ve-C[ye]-w[ye]-Ce+E.altAxis,F=Se?ve+C[ye]+w[ye]-Ce-E.altAxis:xe,Te=p&&Se?function(e,t,n){var r=zt(e,t,n);return r>n?n:r}(we,ve,F):zt(p?we:be,ve,p?F:xe);S[x]=Te,ee[x]=Te-ve}t.modifiersData[r]=ee}},requiresIfExists:[`offset`]};function pn(e,t,n){n===void 0&&(n=!1);var r,i,a=U(t),o=U(t)&&function(e){var t=e.getBoundingClientRect(),n=Ot(t.width)/e.offsetWidth||1,r=Ot(t.height)/e.offsetHeight||1;return n!==1||r!==1}(t),s=K(t),c=jt(e,o,n),l={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(a||!a&&!n)&&((V(t)!==`body`||$t(s))&&(l=(r=t)!==H(r)&&U(r)?{scrollLeft:(i=r).scrollLeft,scrollTop:i.scrollTop}:Zt(r)),U(t)?((u=jt(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):s&&(u.x=Qt(s))),{x:c.left+l.scrollLeft-u.x,y:c.top+l.scrollTop-u.y,width:c.width,height:c.height}}function mn(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}}),r.push(e)}return e.forEach(function(e){t.set(e.name,e)}),e.forEach(function(e){n.has(e.name)||i(e)}),r}var hn={placement:`bottom`,modifiers:[],strategy:`absolute`};function gn(){return![...arguments].some(function(e){return!(e&&typeof e.getBoundingClientRect==`function`)})}function _n(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,i=t.defaultOptions,a=i===void 0?hn:i;return function(e,t,n){n===void 0&&(n=a);var i,o,s={placement:`bottom`,orderedModifiers:[],options:Object.assign({},hn,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],l=!1,u={state:s,setOptions:function(n){var i=typeof n==`function`?n(s.options):n;d(),s.options=Object.assign({},a,s.options,i),s.scrollParents={reference:Ct(e)?tn(e):e.contextElement?tn(e.contextElement):[],popper:tn(t)};var o,l,f=function(e){var t=mn(e);return St.reduce(function(e,n){return e.concat(t.filter(function(e){return e.phase===n}))},[])}((o=[].concat(r,s.options.modifiers),l=o.reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{}),Object.keys(l).map(function(e){return l[e]})));return s.orderedModifiers=f.filter(function(e){return e.enabled}),s.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=n===void 0?{}:n,i=e.effect;if(typeof i==`function`){var a=i({state:s,name:t,instance:u,options:r});c.push(a||function(){})}}),u.update()},forceUpdate:function(){if(!l){var e=s.elements,t=e.reference,n=e.popper;if(gn(t,n)){s.rects={reference:pn(t,Lt(n),s.options.strategy===`fixed`),popper:Mt(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach(function(e){return s.modifiersData[e.name]=Object.assign({},e.data)});for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var i=s.orderedModifiers[r],a=i.fn,o=i.options,c=o===void 0?{}:o,d=i.name;typeof a==`function`&&(s=a({state:s,options:c,name:d,instance:u})||s)}else s.reset=!1,r=-1}}},update:(i=function(){return new Promise(function(e){u.forceUpdate(),e(s)})},function(){return o||=new Promise(function(e){Promise.resolve().then(function(){o=void 0,e(i())})}),o}),destroy:function(){d(),l=!0}};if(!gn(e,t))return u;function d(){c.forEach(function(e){return e()}),c=[]}return u.setOptions(n).then(function(e){!l&&n.onFirstUpdate&&n.onFirstUpdate(e)}),u}}var vn=_n(),yn=_n({defaultModifiers:[qt,Y,Kt,Tt]}),bn=_n({defaultModifiers:[qt,Y,Kt,Tt,fn,cn,X,Ht,dn]});let xn=Object.freeze(Object.defineProperty({__proto__:null,afterMain:yt,afterRead:gt,afterWrite:xt,applyStyles:Tt,arrow:Ht,auto:it,basePlacements:at,beforeMain:_t,beforeRead:mt,beforeWrite:bt,bottom:L,clippingParents:ct,computeStyles:Kt,createPopper:bn,createPopperBase:vn,createPopperLite:yn,detectOverflow:on,end:st,eventListeners:qt,flip:cn,hide:dn,left:z,main:vt,modifierPhases:St,offset:fn,placements:pt,popper:ut,popperGenerator:_n,popperOffsets:Y,preventOverflow:X,read:ht,reference:dt,right:R,start:ot,top:I,variationPlacements:ft,viewport:lt,write:B},Symbol.toStringTag,{value:`Module`})),Sn=`.bs.dropdown`,Cn=`.data-api`,wn=`ArrowDown`,Tn=`hide${Sn}`,En=`hidden${Sn}`,Dn=`show${Sn}`,On=`shown${Sn}`,kn=`click${Sn}${Cn}`,An=`keydown${Sn}${Cn}`,jn=`keyup${Sn}${Cn}`,Mn=`show`,Nn=`[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)`,Pn=`${Nn}.${Mn}`,Fn=`.dropdown-menu`,In=h()?`top-end`:`top-start`,Ln=h()?`top-start`:`top-end`,Rn=h()?`bottom-end`:`bottom-start`,zn=h()?`bottom-start`:`bottom-end`,Bn=h()?`left-start`:`right-start`,Vn=h()?`right-start`:`left-start`,Hn={autoClose:!0,boundary:`clippingParents`,display:`dynamic`,offset:[0,2],popperConfig:null,reference:`toggle`},Un={autoClose:`(boolean|string)`,boundary:`(string|element)`,display:`string`,offset:`(array|string|function)`,popperConfig:`(null|object|function)`,reference:`(string|element|object)`};class Wn extends N{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=P.next(this._element,Fn)[0]||P.prev(this._element,Fn)[0]||P.findOne(Fn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Hn}static get DefaultType(){return Un}static get NAME(){return`dropdown`}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;let e={relatedTarget:this._element};if(!j.trigger(this._element,Dn,e).defaultPrevented){if(this._createPopper(),`ontouchstart`in document.documentElement&&!this._parent.closest(`.navbar-nav`))for(let e of[].concat(...document.body.children))j.on(e,`mouseover`,d);this._element.focus(),this._element.setAttribute(`aria-expanded`,!0),this._menu.classList.add(Mn),this._element.classList.add(Mn),j.trigger(this._element,On,e)}}hide(){if(l(this._element)||!this._isShown())return;let e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!j.trigger(this._element,Tn,e).defaultPrevented){if(`ontouchstart`in document.documentElement)for(let e of[].concat(...document.body.children))j.off(e,`mouseover`,d);this._popper&&this._popper.destroy(),this._menu.classList.remove(Mn),this._element.classList.remove(Mn),this._element.setAttribute(`aria-expanded`,`false`),M.removeDataAttribute(this._menu,`popper`),j.trigger(this._element,En,e)}}_getConfig(e){if(typeof(e=super._getConfig(e)).reference==`object`&&!o(e.reference)&&typeof e.reference.getBoundingClientRect!=`function`)throw TypeError(`DROPDOWN: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(xn===void 0)throw TypeError(`Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)`);let e=this._element;this._config.reference===`parent`?e=this._parent:o(this._config.reference)?e=s(this._config.reference):typeof this._config.reference==`object`&&(e=this._config.reference);let t=this._getPopperConfig();this._popper=bn(e,this._menu,t)}_isShown(){return this._menu.classList.contains(Mn)}_getPlacement(){let e=this._parent;if(e.classList.contains(`dropend`))return Bn;if(e.classList.contains(`dropstart`))return Vn;if(e.classList.contains(`dropup-center`))return`top`;if(e.classList.contains(`dropdown-center`))return`bottom`;let t=getComputedStyle(this._menu).getPropertyValue(`--bs-position`).trim()===`end`;return e.classList.contains(`dropup`)?t?Ln:In:t?zn:Rn}_detectNavbar(){return this._element.closest(`.navbar`)!==null}_getOffset(){let{offset:e}=this._config;return typeof e==`string`?e.split(`,`).map(e=>Number.parseInt(e,10)):typeof e==`function`?t=>e(t,this._element):e}_getPopperConfig(){let e={placement:this._getPlacement(),modifiers:[{name:`preventOverflow`,options:{boundary:this._config.boundary}},{name:`offset`,options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display===`static`)&&(M.setDataAttribute(this._menu,`popper`,`static`),e.modifiers=[{name:`applyStyles`,enabled:!1}]),{...e,..._(this._config.popperConfig,[void 0,e])}}_selectMenuItem({key:e,target:t}){let n=P.find(`.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)`,this._menu).filter(e=>c(e));n.length&&y(n,t,e===wn,!n.includes(t)).focus()}static jQueryInterface(e){return this.each(function(){let t=Wn.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0)throw TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(e){if(e.button===2||e.type===`keyup`&&e.key!==`Tab`)return;let t=P.find(Pn);for(let n of t){let t=Wn.getInstance(n);if(!t||!1===t._config.autoClose)continue;let r=e.composedPath(),i=r.includes(t._menu);if(r.includes(t._element)||t._config.autoClose===`inside`&&!i||t._config.autoClose===`outside`&&i||t._menu.contains(e.target)&&(e.type===`keyup`&&e.key===`Tab`||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;let a={relatedTarget:t._element};e.type===`click`&&(a.clickEvent=e),t._completeHide(a)}}static dataApiKeydownHandler(e){let t=/input|textarea/i.test(e.target.tagName),n=e.key===`Escape`,r=[`ArrowUp`,wn].includes(e.key);if(!r&&!n||t&&!n)return;e.preventDefault();let i=this.matches(Nn)?this:P.prev(this,Nn)[0]||P.next(this,Nn)[0]||P.findOne(Nn,e.delegateTarget.parentNode),a=Wn.getOrCreateInstance(i);if(r)return e.stopPropagation(),a.show(),void a._selectMenuItem(e);a._isShown()&&(e.stopPropagation(),a.hide(),i.focus())}}j.on(document,An,Nn,Wn.dataApiKeydownHandler),j.on(document,An,Fn,Wn.dataApiKeydownHandler),j.on(document,kn,Wn.clearMenus),j.on(document,jn,Wn.clearMenus),j.on(document,kn,Nn,function(e){e.preventDefault(),Wn.getOrCreateInstance(this).toggle()}),g(Wn);let Gn=`backdrop`,Kn=`show`,qn=`mousedown.bs.${Gn}`,Jn={className:`modal-backdrop`,clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:`body`},Yn={className:`string`,clickCallback:`(function|null)`,isAnimated:`boolean`,isVisible:`boolean`,rootElement:`(element|string)`};class Xn extends se{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return Jn}static get DefaultType(){return Yn}static get NAME(){return Gn}show(e){if(!this._config.isVisible)return void _(e);this._append();let t=this._getElement();this._config.isAnimated&&f(t),t.classList.add(Kn),this._emulateAnimation(()=>{_(e)})}hide(e){this._config.isVisible?(this._getElement().classList.remove(Kn),this._emulateAnimation(()=>{this.dispose(),_(e)})):_(e)}dispose(){this._isAppended&&=(j.off(this._element,qn),this._element.remove(),!1)}_getElement(){if(!this._element){let e=document.createElement(`div`);e.className=this._config.className,this._config.isAnimated&&e.classList.add(`fade`),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=s(e.rootElement),e}_append(){if(this._isAppended)return;let e=this._getElement();this._config.rootElement.append(e),j.on(e,qn,()=>{_(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){v(e,this._getElement(),this._config.isAnimated)}}let Zn=`.bs.focustrap`,Qn=`focusin${Zn}`,$n=`keydown.tab${Zn}`,er=`backward`,tr={autofocus:!0,trapElement:null},nr={autofocus:`boolean`,trapElement:`element`};class rr extends se{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return tr}static get DefaultType(){return nr}static get NAME(){return`focustrap`}activate(){this._isActive||=(this._config.autofocus&&this._config.trapElement.focus(),j.off(document,Zn),j.on(document,Qn,e=>this._handleFocusin(e)),j.on(document,$n,e=>this._handleKeydown(e)),!0)}deactivate(){this._isActive&&(this._isActive=!1,j.off(document,Zn))}_handleFocusin(e){let{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;let n=P.focusableChildren(t);n.length===0?t.focus():this._lastTabNavDirection===er?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){e.key===`Tab`&&(this._lastTabNavDirection=e.shiftKey?er:`forward`)}}let ir=`.fixed-top, .fixed-bottom, .is-fixed, .sticky-top`,ar=`.sticky-top`,or=`padding-right`,sr=`margin-right`;class cr{constructor(){this._element=document.body}getWidth(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){let e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,or,t=>t+e),this._setElementAttributes(ir,or,t=>t+e),this._setElementAttributes(ar,sr,t=>t-e)}reset(){this._resetElementAttributes(this._element,`overflow`),this._resetElementAttributes(this._element,or),this._resetElementAttributes(ir,or),this._resetElementAttributes(ar,sr)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,`overflow`),this._element.style.overflow=`hidden`}_setElementAttributes(e,t,n){let r=this.getWidth();this._applyManipulationCallback(e,e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+r)return;this._saveInitialAttribute(e,t);let i=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${n(Number.parseFloat(i))}px`)})}_saveInitialAttribute(e,t){let n=e.style.getPropertyValue(t);n&&M.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){this._applyManipulationCallback(e,e=>{let n=M.getDataAttribute(e,t);n===null?e.style.removeProperty(t):(M.removeDataAttribute(e,t),e.style.setProperty(t,n))})}_applyManipulationCallback(e,t){if(o(e))t(e);else for(let n of P.find(e,this._element))t(n)}}let Z=`.bs.modal`,lr=`hide${Z}`,Q=`hidePrevented${Z}`,ur=`hidden${Z}`,dr=`show${Z}`,fr=`shown${Z}`,pr=`resize${Z}`,mr=`click.dismiss${Z}`,hr=`mousedown.dismiss${Z}`,gr=`keydown.dismiss${Z}`,_r=`click${Z}.data-api`,vr=`modal-open`,yr=`show`,br=`modal-static`,xr={backdrop:!0,focus:!0,keyboard:!0},Sr={backdrop:`(boolean|string)`,focus:`boolean`,keyboard:`boolean`};class Cr extends N{constructor(e,t){super(e,t),this._dialog=P.findOne(`.modal-dialog`,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new cr,this._addEventListeners()}static get Default(){return xr}static get DefaultType(){return Sr}static get NAME(){return`modal`}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||j.trigger(this._element,dr,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(vr),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){this._isShown&&!this._isTransitioning&&(j.trigger(this._element,lr).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(yr),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){j.off(window,Z),j.off(this._dialog,Z),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Xn({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new rr({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display=`block`,this._element.removeAttribute(`aria-hidden`),this._element.setAttribute(`aria-modal`,!0),this._element.setAttribute(`role`,`dialog`),this._element.scrollTop=0;let t=P.findOne(`.modal-body`,this._dialog);t&&(t.scrollTop=0),f(this._element),this._element.classList.add(yr),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,j.trigger(this._element,fr,{relatedTarget:e})},this._dialog,this._isAnimated())}_addEventListeners(){j.on(this._element,gr,e=>{e.key===`Escape`&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),j.on(window,pr,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),j.on(this._element,hr,e=>{j.one(this._element,mr,t=>{this._element===e.target&&this._element===t.target&&(this._config.backdrop===`static`?this._triggerBackdropTransition():this._config.backdrop&&this.hide())})})}_hideModal(){this._element.style.display=`none`,this._element.setAttribute(`aria-hidden`,!0),this._element.removeAttribute(`aria-modal`),this._element.removeAttribute(`role`),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(vr),this._resetAdjustments(),this._scrollBar.reset(),j.trigger(this._element,ur)})}_isAnimated(){return this._element.classList.contains(`fade`)}_triggerBackdropTransition(){if(j.trigger(this._element,Q).defaultPrevented)return;let e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._element.style.overflowY;t===`hidden`||this._element.classList.contains(br)||(e||(this._element.style.overflowY=`hidden`),this._element.classList.add(br),this._queueCallback(()=>{this._element.classList.remove(br),this._queueCallback(()=>{this._element.style.overflowY=t},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){let e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){let e=h()?`paddingLeft`:`paddingRight`;this._element.style[e]=`${t}px`}if(!n&&e){let e=h()?`paddingRight`:`paddingLeft`;this._element.style[e]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft=``,this._element.style.paddingRight=``}static jQueryInterface(e,t){return this.each(function(){let n=Cr.getOrCreateInstance(this,e);if(typeof e==`string`){if(n[e]===void 0)throw TypeError(`No method named "${e}"`);n[e](t)}})}}j.on(document,_r,`[data-bs-toggle="modal"]`,function(e){let t=P.getElementFromSelector(this);[`A`,`AREA`].includes(this.tagName)&&e.preventDefault(),j.one(t,dr,e=>{e.defaultPrevented||j.one(t,ur,()=>{c(this)&&this.focus()})});let n=P.findOne(`.modal.show`);n&&Cr.getInstance(n).hide(),Cr.getOrCreateInstance(t).toggle(this)}),le(Cr),g(Cr);let $=`.bs.offcanvas`,wr=`.data-api`,Tr=`load${$}${wr}`,Er=`show`,Dr=`showing`,Or=`hiding`,kr=`.offcanvas.show`,Ar=`show${$}`,jr=`shown${$}`,Mr=`hide${$}`,Nr=`hidePrevented${$}`,Pr=`hidden${$}`,Fr=`resize${$}`,Ir=`click${$}${wr}`,Lr=`keydown.dismiss${$}`,Rr={backdrop:!0,keyboard:!0,scroll:!1},zr={backdrop:`(boolean|string)`,keyboard:`boolean`,scroll:`boolean`};class Br extends N{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Rr}static get DefaultType(){return zr}static get NAME(){return`offcanvas`}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||j.trigger(this._element,Ar,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new cr().hide(),this._element.setAttribute(`aria-modal`,!0),this._element.setAttribute(`role`,`dialog`),this._element.classList.add(Dr),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Er),this._element.classList.remove(Dr),j.trigger(this._element,jr,{relatedTarget:e})},this._element,!0))}hide(){this._isShown&&(j.trigger(this._element,Mr).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Or),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Er,Or),this._element.removeAttribute(`aria-modal`),this._element.removeAttribute(`role`),this._config.scroll||new cr().reset(),j.trigger(this._element,Pr)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){let e=!!this._config.backdrop;return new Xn({className:`offcanvas-backdrop`,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?()=>{this._config.backdrop===`static`?j.trigger(this._element,Nr):this.hide()}:null})}_initializeFocusTrap(){return new rr({trapElement:this._element})}_addEventListeners(){j.on(this._element,Lr,e=>{e.key===`Escape`&&(this._config.keyboard?this.hide():j.trigger(this._element,Nr))})}static jQueryInterface(e){return this.each(function(){let t=Br.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e](this)}})}}j.on(document,Ir,`[data-bs-toggle="offcanvas"]`,function(e){let t=P.getElementFromSelector(this);if([`A`,`AREA`].includes(this.tagName)&&e.preventDefault(),l(this))return;j.one(t,Pr,()=>{c(this)&&this.focus()});let n=P.findOne(kr);n&&n!==t&&Br.getInstance(n).hide(),Br.getOrCreateInstance(t).toggle(this)}),j.on(window,Tr,()=>{for(let e of P.find(kr))Br.getOrCreateInstance(e).show()}),j.on(window,Fr,()=>{for(let e of P.find(`[aria-modal][class*=show][class*=offcanvas-]`))getComputedStyle(e).position!==`fixed`&&Br.getOrCreateInstance(e).hide()}),le(Br),g(Br);let Vr={"*":[`class`,`dir`,`id`,`lang`,`role`,/^aria-[\w-]*$/i],a:[`target`,`href`,`title`,`rel`],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:[`src`,`srcset`,`alt`,`title`,`width`,`height`],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Hr=new Set([`background`,`cite`,`href`,`itemtype`,`longdesc`,`poster`,`src`,`xlink:href`]),Ur=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Wr=(e,t)=>{let n=e.nodeName.toLowerCase();return t.includes(n)?!Hr.has(n)||!!Ur.test(e.nodeValue):t.filter(e=>e instanceof RegExp).some(e=>e.test(n))},Gr={allowList:Vr,content:{},extraClass:``,html:!1,sanitize:!0,sanitizeFn:null,template:`<div></div>`},Kr={allowList:`object`,content:`object`,extraClass:`(string|function)`,html:`boolean`,sanitize:`boolean`,sanitizeFn:`(null|function)`,template:`string`},qr={entry:`(string|element|function|null)`,selector:`(string|element)`};class Jr extends se{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return Gr}static get DefaultType(){return Kr}static get NAME(){return`TemplateFactory`}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){let e=document.createElement(`div`);e.innerHTML=this._maybeSanitize(this._config.template);for(let[t,n]of Object.entries(this._config.content))this._setContent(e,n,t);let t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(` `)),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(let[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},qr)}_setContent(e,t,n){let r=P.findOne(n,e);r&&((t=this._resolvePossibleFunction(t))?o(t)?this._putElementInTemplate(s(t),r):this._config.html?r.innerHTML=this._maybeSanitize(t):r.textContent=t:r.remove())}_maybeSanitize(e){return this._config.sanitize?function(e,t,n){if(!e.length)return e;if(n&&typeof n==`function`)return n(e);let r=new window.DOMParser().parseFromString(e,`text/html`),i=[].concat(...r.body.querySelectorAll(`*`));for(let e of i){let n=e.nodeName.toLowerCase();if(!Object.keys(t).includes(n)){e.remove();continue}let r=[].concat(...e.attributes),i=[].concat(t[`*`]||[],t[n]||[]);for(let t of r)Wr(t,i)||e.removeAttribute(t.nodeName)}return r.body.innerHTML}(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return _(e,[void 0,this])}_putElementInTemplate(e,t){if(this._config.html)return t.innerHTML=``,void t.append(e);t.textContent=e.textContent}}let Yr=new Set([`sanitize`,`allowList`,`sanitizeFn`]),Xr=`fade`,Zr=`show`,Qr=`.modal`,$r=`hide.bs.modal`,ei=`hover`,ti=`focus`,ni=`click`,ri={AUTO:`auto`,TOP:`top`,RIGHT:h()?`left`:`right`,BOTTOM:`bottom`,LEFT:h()?`right`:`left`},ii={allowList:Vr,animation:!0,boundary:`clippingParents`,container:!1,customClass:``,delay:0,fallbackPlacements:[`top`,`right`,`bottom`,`left`],html:!1,offset:[0,6],placement:`top`,popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:`<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>`,title:``,trigger:`hover focus`},ai={allowList:`object`,animation:`boolean`,boundary:`(string|element)`,container:`(string|element|boolean)`,customClass:`(string|function)`,delay:`(number|object)`,fallbackPlacements:`array`,html:`boolean`,offset:`(array|string|function)`,placement:`(string|function)`,popperConfig:`(null|object|function)`,sanitize:`boolean`,sanitizeFn:`(null|function)`,selector:`(string|boolean)`,template:`string`,title:`(string|element|function)`,trigger:`string`};class oi extends N{constructor(e,t){if(xn===void 0)throw TypeError(`Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)`);super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return ii}static get DefaultType(){return ai}static get NAME(){return`tooltip`}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),j.off(this._element.closest(Qr),$r,this._hideModalHandler),this._element.getAttribute(`data-bs-original-title`)&&this._element.setAttribute(`title`,this._element.getAttribute(`data-bs-original-title`)),this._disposePopper(),super.dispose()}show(){if(this._element.style.display===`none`)throw Error(`Please use show on visible elements`);if(!this._isWithContent()||!this._isEnabled)return;let e=j.trigger(this._element,this.constructor.eventName(`show`)),t=(u(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!t)return;this._disposePopper();let n=this._getTipElement();this._element.setAttribute(`aria-describedby`,n.getAttribute(`id`));let{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(n),j.trigger(this._element,this.constructor.eventName(`inserted`))),this._popper=this._createPopper(n),n.classList.add(Zr),`ontouchstart`in document.documentElement)for(let e of[].concat(...document.body.children))j.on(e,`mouseover`,d);this._queueCallback(()=>{j.trigger(this._element,this.constructor.eventName(`shown`)),!1===this._isHovered&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!j.trigger(this._element,this.constructor.eventName(`hide`)).defaultPrevented){if(this._getTipElement().classList.remove(Zr),`ontouchstart`in document.documentElement)for(let e of[].concat(...document.body.children))j.off(e,`mouseover`,d);this._activeTrigger[ni]=!1,this._activeTrigger[ti]=!1,this._activeTrigger[ei]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute(`aria-describedby`),j.trigger(this._element,this.constructor.eventName(`hidden`)))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||=this._createTipElement(this._newContent||this._getContentForTemplate()),this.tip}_createTipElement(e){let t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(Xr,Zr),t.classList.add(`bs-${this.constructor.NAME}-auto`);let n=(e=>{do e+=Math.floor(1e6*Math.random());while(document.getElementById(e));return e})(this.constructor.NAME).toString();return t.setAttribute(`id`,n),this._isAnimated()&&t.classList.add(Xr),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new Jr({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute(`data-bs-original-title`)}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Xr)}_isShown(){return this.tip&&this.tip.classList.contains(Zr)}_createPopper(e){let t=_(this._config.placement,[this,e,this._element]),n=ri[t.toUpperCase()];return bn(this._element,e,this._getPopperConfig(n))}_getOffset(){let{offset:e}=this._config;return typeof e==`string`?e.split(`,`).map(e=>Number.parseInt(e,10)):typeof e==`function`?t=>e(t,this._element):e}_resolvePossibleFunction(e){return _(e,[this._element,this._element])}_getPopperConfig(e){let t={placement:e,modifiers:[{name:`flip`,options:{fallbackPlacements:this._config.fallbackPlacements}},{name:`offset`,options:{offset:this._getOffset()}},{name:`preventOverflow`,options:{boundary:this._config.boundary}},{name:`arrow`,options:{element:`.${this.constructor.NAME}-arrow`}},{name:`preSetPlacement`,enabled:!0,phase:`beforeMain`,fn:e=>{this._getTipElement().setAttribute(`data-popper-placement`,e.state.placement)}}]};return{...t,..._(this._config.popperConfig,[void 0,t])}}_setListeners(){let e=this._config.trigger.split(` `);for(let t of e)if(t===`click`)j.on(this._element,this.constructor.eventName(`click`),this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger[ni]=!(t._isShown()&&t._activeTrigger[ni]),t.toggle()});else if(t!==`manual`){let e=t===ei?this.constructor.eventName(`mouseenter`):this.constructor.eventName(`focusin`),n=t===ei?this.constructor.eventName(`mouseleave`):this.constructor.eventName(`focusout`);j.on(this._element,e,this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger[e.type===`focusin`?ti:ei]=!0,t._enter()}),j.on(this._element,n,this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger[e.type===`focusout`?ti:ei]=t._element.contains(e.relatedTarget),t._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},j.on(this._element.closest(Qr),$r,this._hideModalHandler)}_fixTitle(){let e=this._element.getAttribute(`title`);e&&(this._element.getAttribute(`aria-label`)||this._element.textContent.trim()||this._element.setAttribute(`aria-label`,e),this._element.setAttribute(`data-bs-original-title`,e),this._element.removeAttribute(`title`))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){let t=M.getDataAttributes(this._element);for(let e of Object.keys(t))Yr.has(e)&&delete t[e];return e={...t,...typeof e==`object`&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=!1===e.container?document.body:s(e.container),typeof e.delay==`number`&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title==`number`&&(e.title=e.title.toString()),typeof e.content==`number`&&(e.content=e.content.toString()),e}_getDelegateConfig(){let e={};for(let[t,n]of Object.entries(this._config))this.constructor.Default[t]!==n&&(e[t]=n);return e.selector=!1,e.trigger=`manual`,e}_disposePopper(){this._popper&&=(this._popper.destroy(),null),this.tip&&=(this.tip.remove(),null)}static jQueryInterface(e){return this.each(function(){let t=oi.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0)throw TypeError(`No method named "${e}"`);t[e]()}})}}g(oi);let si={...oi.Default,content:``,offset:[0,8],placement:`right`,template:`<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>`,trigger:`click`},ci={...oi.DefaultType,content:`(null|string|element|function)`};class li extends oi{static get Default(){return si}static get DefaultType(){return ci}static get NAME(){return`popover`}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){let t=li.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0)throw TypeError(`No method named "${e}"`);t[e]()}})}}g(li);let ui=`.bs.scrollspy`,di=`activate${ui}`,fi=`click${ui}`,pi=`load${ui}.data-api`,mi=`active`,hi=`[href]`,gi=`.nav-link`,_i=`${gi}, .nav-item > ${gi}, .list-group-item`,vi={offset:null,rootMargin:`0px 0px -25%`,smoothScroll:!1,target:null,threshold:[.1,.5,1]},yi={offset:`(number|null)`,rootMargin:`string`,smoothScroll:`boolean`,target:`element`,threshold:`array`};class bi extends N{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY===`visible`?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return vi}static get DefaultType(){return yi}static get NAME(){return`scrollspy`}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(let e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=s(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold==`string`&&(e.threshold=e.threshold.split(`,`).map(e=>Number.parseFloat(e))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(j.off(this._config.target,fi),j.on(this._config.target,fi,hi,e=>{let t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();let n=this._rootElement||window,r=t.offsetTop-this._element.offsetTop;if(n.scrollTo)return void n.scrollTo({top:r,behavior:`smooth`});n.scrollTop=r}}))}_getNewObserver(){let e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),e)}_observerCallback(e){let t=e=>this._targetLinks.get(`#${e.target.id}`),n=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(t(e))},r=(this._rootElement||document.documentElement).scrollTop,i=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(let a of e){if(!a.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(a));continue}let e=a.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&e){if(n(a),!r)return}else i||e||n(a)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;let e=P.find(hi,this._config.target);for(let t of e){if(!t.hash||l(t))continue;let e=P.findOne(decodeURI(t.hash),this._element);c(e)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,e))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(mi),this._activateParents(e),j.trigger(this._element,di,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(`dropdown-item`))P.findOne(`.dropdown-toggle`,e.closest(`.dropdown`)).classList.add(mi);else for(let t of P.parents(e,`.nav, .list-group`))for(let e of P.prev(t,_i))e.classList.add(mi)}_clearActiveClass(e){e.classList.remove(mi);let t=P.find(`${hi}.${mi}`,e);for(let e of t)e.classList.remove(mi)}static jQueryInterface(e){return this.each(function(){let t=bi.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e]()}})}}j.on(window,pi,()=>{for(let e of P.find(`[data-bs-spy="scroll"]`))bi.getOrCreateInstance(e)}),g(bi);let xi=`.bs.tab`,Si=`hide${xi}`,Ci=`hidden${xi}`,wi=`show${xi}`,Ti=`shown${xi}`,Ei=`click${xi}`,Di=`keydown${xi}`,Oi=`load${xi}`,ki=`ArrowRight`,Ai=`ArrowDown`,ji=`Home`,Mi=`active`,Ni=`fade`,Pi=`show`,Fi=`.dropdown-toggle`,Ii=`:not(${Fi})`,Li=`[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]`,Ri=`.nav-link${Ii}, .list-group-item${Ii}, [role="tab"]${Ii}, ${Li}`,zi=`.${Mi}[data-bs-toggle="tab"], .${Mi}[data-bs-toggle="pill"], .${Mi}[data-bs-toggle="list"]`;class Bi extends N{constructor(e){super(e),this._parent=this._element.closest(`.list-group, .nav, [role="tablist"]`),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),j.on(this._element,Di,e=>this._keydown(e)))}static get NAME(){return`tab`}show(){let e=this._element;if(this._elemIsActive(e))return;let t=this._getActiveElem(),n=t?j.trigger(t,Si,{relatedTarget:e}):null;j.trigger(e,wi,{relatedTarget:t}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){e&&(e.classList.add(Mi),this._activate(P.getElementFromSelector(e)),this._queueCallback(()=>{e.getAttribute(`role`)===`tab`?(e.removeAttribute(`tabindex`),e.setAttribute(`aria-selected`,!0),this._toggleDropDown(e,!0),j.trigger(e,Ti,{relatedTarget:t})):e.classList.add(Pi)},e,e.classList.contains(Ni)))}_deactivate(e,t){e&&(e.classList.remove(Mi),e.blur(),this._deactivate(P.getElementFromSelector(e)),this._queueCallback(()=>{e.getAttribute(`role`)===`tab`?(e.setAttribute(`aria-selected`,!1),e.setAttribute(`tabindex`,`-1`),this._toggleDropDown(e,!1),j.trigger(e,Ci,{relatedTarget:t})):e.classList.remove(Pi)},e,e.classList.contains(Ni)))}_keydown(e){if(![`ArrowLeft`,ki,`ArrowUp`,Ai,ji,`End`].includes(e.key))return;e.stopPropagation(),e.preventDefault();let t=this._getChildren().filter(e=>!l(e)),n;if([ji,`End`].includes(e.key))n=t[e.key===ji?0:t.length-1];else{let r=[ki,Ai].includes(e.key);n=y(t,e.target,r,!0)}n&&(n.focus({preventScroll:!0}),Bi.getOrCreateInstance(n).show())}_getChildren(){return P.find(Ri,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,`role`,`tablist`);for(let e of t)this._setInitialAttributesOnChild(e)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);let t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute(`aria-selected`,t),n!==e&&this._setAttributeIfNotExists(n,`role`,`presentation`),t||e.setAttribute(`tabindex`,`-1`),this._setAttributeIfNotExists(e,`role`,`tab`),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){let t=P.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,`role`,`tabpanel`),e.id&&this._setAttributeIfNotExists(t,`aria-labelledby`,`${e.id}`))}_toggleDropDown(e,t){let n=this._getOuterElement(e);if(!n.classList.contains(`dropdown`))return;let r=(e,r)=>{let i=P.findOne(e,n);i&&i.classList.toggle(r,t)};r(Fi,Mi),r(`.dropdown-menu`,Pi),n.setAttribute(`aria-expanded`,t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(Mi)}_getInnerElement(e){return e.matches(Ri)?e:P.findOne(Ri,e)}_getOuterElement(e){return e.closest(`.nav-item, .list-group-item`)||e}static jQueryInterface(e){return this.each(function(){let t=Bi.getOrCreateInstance(this);if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e]()}})}}j.on(document,Ei,Li,function(e){[`A`,`AREA`].includes(this.tagName)&&e.preventDefault(),l(this)||Bi.getOrCreateInstance(this).show()}),j.on(window,Oi,()=>{for(let e of P.find(zi))Bi.getOrCreateInstance(e)}),g(Bi);let Vi=`.bs.toast`,Hi=`mouseover${Vi}`,Ui=`mouseout${Vi}`,Wi=`focusin${Vi}`,Gi=`focusout${Vi}`,Ki=`hide${Vi}`,qi=`hidden${Vi}`,Ji=`show${Vi}`,Yi=`shown${Vi}`,Xi=`hide`,Zi=`show`,Qi=`showing`,$i={animation:`boolean`,autohide:`boolean`,delay:`number`},ea={animation:!0,autohide:!0,delay:5e3};class ta extends N{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return ea}static get DefaultType(){return $i}static get NAME(){return`toast`}show(){j.trigger(this._element,Ji).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add(`fade`),this._element.classList.remove(Xi),f(this._element),this._element.classList.add(Zi,Qi),this._queueCallback(()=>{this._element.classList.remove(Qi),j.trigger(this._element,Yi),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(j.trigger(this._element,Ki).defaultPrevented||(this._element.classList.add(Qi),this._queueCallback(()=>{this._element.classList.add(Xi),this._element.classList.remove(Qi,Zi),j.trigger(this._element,qi)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Zi),super.dispose()}isShown(){return this._element.classList.contains(Zi)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case`mouseover`:case`mouseout`:this._hasMouseInteraction=t;break;case`focusin`:case`focusout`:this._hasKeyboardInteraction=t}if(t)return void this._clearTimeout();let n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){j.on(this._element,Hi,e=>this._onInteraction(e,!0)),j.on(this._element,Ui,e=>this._onInteraction(e,!1)),j.on(this._element,Wi,e=>this._onInteraction(e,!0)),j.on(this._element,Gi,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){let t=ta.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0)throw TypeError(`No method named "${e}"`);t[e](this)}})}}return le(ta),g(ta),{Alert:pe,Button:he,Carousel:Ue,Collapse:rt,Dropdown:Wn,Modal:Cr,Offcanvas:Br,Popover:li,ScrollSpy:bi,Tab:Bi,Toast:ta,Tooltip:oi}})}))();var t=`preferredLang`;function n(){return typeof window>`u`?`et`:localStorage.getItem(`preferredLang`)==null?(localStorage.setItem(t,`et`),`et`):localStorage.getItem(t)}function r(){return n()}function i(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function a(e){if(Array.isArray(e))return e}function o(e){if(Array.isArray(e))return i(e)}function s(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,x(r.key),r)}}function l(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=C(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function d(e,t,n){return(t=x(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function p(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function m(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?g(Object(n),!0).forEach(function(t){d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function v(e,t){return a(e)||p(e,t)||C(e,t)||m()}function y(e){return o(e)||f(e)||C(e)||h()}function b(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function x(e){var t=b(e,`string`);return typeof t==`symbol`?t:t+``}function S(e){"@babel/helpers - typeof";return S=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},S(e)}function C(e,t){if(e){if(typeof e==`string`)return i(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}var w=function(){},T={},E={},D=null,ee={mark:w,measure:w};try{typeof window<`u`&&(T=window),typeof document<`u`&&(E=document),typeof MutationObserver<`u`&&(D=MutationObserver),typeof performance<`u`&&(ee=performance)}catch{}var te=(T.navigator||{}).userAgent,ne=te===void 0?``:te,O=T,k=E,re=D,A=ee;O.document;var j=!!k.documentElement&&!!k.head&&typeof k.addEventListener==`function`&&typeof k.createElement==`function`,ie=~ne.indexOf(`MSIE`)||~ne.indexOf(`Trident/`),ae,oe=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,M=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,se={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},N={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ce=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],P=`classic`,le=`duotone`,ue=`sharp`,de=`sharp-duotone`,fe=`chisel`,pe=`etch`,me=`graphite`,he=`jelly`,ge=`jelly-duo`,_e=`jelly-fill`,ve=`mosaic`,ye=`notdog`,be=`notdog-duo`,xe=`pixel`,Se=`slab`,Ce=`slab-duo`,we=`slab-press`,F=`slab-press-duo`,Te=`thumbprint`,Ee=`utility`,De=`utility-duo`,Oe=`utility-fill`,ke=`vellum`,Ae=`whiteboard`,je=`Classic`,Me=`Duotone`,Ne=`Sharp`,Pe=`Sharp Duotone`,Fe=`Chisel`,Ie=`Etch`,Le=`Graphite`,Re=`Jelly`,ze=`Jelly Duo`,Be=`Jelly Fill`,Ve=`Mosaic`,He=`Notdog`,Ue=`Notdog Duo`,We=`Pixel`,Ge=`Slab`,Ke=`Slab Duo`,qe=`Slab Press`,Je=`Slab Press Duo`,Ye=`Thumbprint`,Xe=`Utility`,Ze=`Utility Duo`,Qe=`Utility Fill`,$e=`Vellum`,et=`Whiteboard`,tt=[P,le,ue,de,fe,pe,me,he,ge,_e,ve,ye,be,xe,Se,Ce,we,F,Te,Ee,De,Oe,ke,Ae];ae={},d(d(d(d(d(d(d(d(d(d(ae,P,je),le,Me),ue,Ne),de,Pe),fe,Fe),pe,Ie),me,Le),he,Re),ge,ze),_e,Be),d(d(d(d(d(d(d(d(d(d(ae,ve,Ve),ye,He),be,Ue),xe,We),Se,Ge),Ce,Ke),we,qe),F,Je),Te,Ye),Ee,Xe),d(d(d(d(ae,De,Ze),Oe,Qe),ke,$e),Ae,et);var nt={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},rt={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},I=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),L={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},R=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],z={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},it=[`kit`];d(d({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var at={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},ot={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},st={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},ct={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},lt,ut={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},dt=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];lt={},d(d(d(d(d(d(d(d(d(d(lt,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),d(d(d(d(d(d(d(d(d(d(lt,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),d(d(d(d(lt,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),d(d({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var ft={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},pt={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},mt={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},ht=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(dt,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),gt=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],_t=[1,2,3,4,5,6,7,8,9,10],vt=_t.concat([11,12,13,14,15,16,17,18,19,20]),yt=[].concat(y(Object.keys(pt)),gt,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,ut.GROUP,ut.SWAP_OPACITY,ut.PRIMARY,ut.SECONDARY],_t.map(function(e){return`${e}x`}),vt.map(function(e){return`w-${e}`})),bt={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},B=`___FONT_AWESOME___`,xt=16,St=`fa`,V=`svg-inline--fa`,H=`data-fa-i2svg`,Ct=`data-fa-pseudo-element`,U=`data-fa-pseudo-element-pending`,wt=`data-prefix`,Tt=`data-icon`,W=`fontawesome-i2svg`,Et=`async`,Dt=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Ot=[`::before`,`::after`,`:before`,`:after`],kt=function(){try{return!0}catch{return!1}}();function At(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[P]}})}var jt=_({},se);jt[P]=_(_(_(_({},{"fa-duotone":`duotone`}),se[P]),z.kit),z[`kit-duotone`]);var Mt=At(jt),Nt=_({},L);Nt[P]=_(_(_(_({},{duotone:`fad`}),Nt[P]),ct.kit),ct[`kit-duotone`]);var G=At(Nt),Pt=_({},mt);Pt[P]=_(_({},Pt[P]),st.kit);var K=At(Pt),Ft=_({},ft);Ft[P]=_(_({},Ft[P]),at.kit),At(Ft);var It=oe,Lt=`fa-layers-text`,Rt=M;At(_({},nt));var zt=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Bt=N,Vt=[].concat(y(it),y(yt)),Ht=O.FontAwesomeConfig||{};function Ut(e){var t=k.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Wt(e){return e===``?!0:e===`false`?!1:e===`true`||e}k&&typeof k.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=v(e,2),n=t[0],r=t[1],i=Wt(Ut(n));i!=null&&(Ht[r]=i)});var Gt={styleDefault:`solid`,familyDefault:P,cssPrefix:St,replacementClass:V,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ht.familyPrefix&&(Ht.cssPrefix=Ht.familyPrefix);var Kt=_(_({},Gt),Ht);Kt.autoReplaceSvg||(Kt.observeMutations=!1);var q={};Object.keys(Gt).forEach(function(e){Object.defineProperty(q,e,{enumerable:!0,set:function(t){Kt[e]=t,qt.forEach(function(e){return e(q)})},get:function(){return Kt[e]}})}),Object.defineProperty(q,"familyPrefix",{enumerable:!0,set:function(e){Kt.cssPrefix=e,qt.forEach(function(e){return e(q)})},get:function(){return Kt.cssPrefix}}),O.FontAwesomeConfig=q;var qt=[];function Jt(e){return qt.push(e),function(){qt.splice(qt.indexOf(e),1)}}var J=xt,Yt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Xt(e){if(e&&j){var t=k.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=k.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return k.head.insertBefore(t,r),e}}var Zt=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function Qt(){for(var e=12,t=``;e-->0;)t+=Zt[Math.random()*62|0];return t}function $t(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function en(e){return e.classList?$t(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function tn(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function nn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${tn(e[n])}" `},``).trim()}function rn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function an(e){return e.size!==Yt.size||e.x!==Yt.x||e.y!==Yt.y||e.rotate!==Yt.rotate||e.flipX||e.flipY}function on(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function sn(e){var t=e.transform,n=e.width,r=n===void 0?xt:n,i=e.height,a=i===void 0?xt:i,o=e.startCentered,s=o!==void 0&&o,c=``;return c+=s&&ie?`translate(${t.x/J-r/2}em, ${t.y/J-a/2}em) `:s?`translate(calc(-50% + ${t.x/J}em), calc(-50% + ${t.y/J}em)) `:`translate(${t.x/J}em, ${t.y/J}em) `,c+=`scale(${t.size/J*(t.flipX?-1:1)}, ${t.size/J*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var cn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function ln(){var e=St,t=V,n=q.cssPrefix,r=q.replacementClass,i=cn;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var un=!1;function dn(){q.autoAddCss&&!un&&(Xt(ln()),un=!0)}var fn={mixout:function(){return{dom:{css:ln,insertCss:dn}}},hooks:function(){return{beforeDOMElementCreation:function(){dn()},beforeI2svg:function(){dn()}}}},Y=O||{};Y[B]||(Y[B]={}),Y[B].styles||(Y[B].styles={}),Y[B].hooks||(Y[B].hooks={}),Y[B].shims||(Y[B].shims=[]);var X=Y[B],pn=[],mn=function(){k.removeEventListener(`DOMContentLoaded`,mn),hn=1,pn.map(function(e){return e()})},hn=!1;j&&(hn=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),hn||k.addEventListener(`DOMContentLoaded`,mn));function gn(e){j&&(hn?setTimeout(e,0):pn.push(e))}function _n(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?tn(e):`<${t} ${nn(r)}>${a.map(_n).join(``)}</${t}>`}function vn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var yn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},bn=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:yn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function xn(e){return y(e).length===1?e.codePointAt(0).toString(16):null}function Sn(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Cn(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=Sn(t);typeof X.hooks.addPack==`function`&&!r?X.hooks.addPack(e,Sn(t)):X.styles[e]=_(_({},X.styles[e]||{}),i),e===`fas`&&Cn(`fa`,t)}var wn=X.styles,Tn=X.shims,En=Object.keys(K),Dn=En.reduce(function(e,t){return e[t]=Object.keys(K[t]),e},{}),On=null,kn={},An={},jn={},Mn={},Nn={};function Pn(e){return~Vt.indexOf(e)}function Fn(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Pn(i)?i:null}var In=function(){var e=function(e){return bn(wn,function(t,n,r){return t[r]=bn(n,e,{}),t},{})};kn=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),An=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Nn=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in wn||q.autoFetchSvg,n=bn(Tn,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});jn=n.names,Mn=n.unicodes,On=Gn(q.styleDefault,{family:q.familyDefault})};Jt(function(e){On=Gn(e.styleDefault,{family:q.familyDefault})}),In();function Ln(e,t){return(kn[e]||{})[t]}function Rn(e,t){return(An[e]||{})[t]}function zn(e,t){return(Nn[e]||{})[t]}function Bn(e){return jn[e]||{prefix:null,iconName:null}}function Vn(e){var t=Mn[e],n=Ln(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function Hn(){return On}var Un=function(){return{prefix:null,iconName:null,rest:[]}};function Wn(e){var t=P,n=En.reduce(function(e,t){return e[t]=`${q.cssPrefix}-${t}`,e},{});return tt.forEach(function(r){(e.includes(n[r])||e.some(function(e){return Dn[r].includes(e)}))&&(t=r)}),t}function Gn(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?P:t,r=Mt[n][e];if(n===le&&!e)return`fad`;var i=G[n][e]||G[n][r],a=e in X.styles?e:null;return i||a||null}function Kn(e){var t=[],n=null;return e.forEach(function(e){var r=Fn(q.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function qn(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var Jn=ht.concat(R);function Yn(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=qn(e.filter(function(e){return Jn.includes(e)})),a=qn(e.filter(function(e){return!Jn.includes(e)})),o=v(i.filter(function(e){return r=e,!ce.includes(e)}),1)[0],s=o===void 0?null:o,c=Wn(i),l=_(_({},Kn(a)),{},{prefix:Gn(s,{family:c})});return _(_(_({},l),$n({values:e,family:c,styles:wn,config:q,canonical:l,givenPrefix:r})),Xn(n,r,l))}function Xn(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Bn(i):{},o=zn(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!wn.far&&wn.fas&&!q.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var Zn=tt.filter(function(e){return e!==P||e!==le}),Qn=Object.keys(mt).filter(function(e){return e!==P}).map(function(e){return Object.keys(mt[e])}).flat();function $n(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===le,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Zn.includes(n)&&(Object.keys(s).find(function(e){return Qn.includes(e)})||l.autoFetchSvg)&&(r.prefix=I.get(n).defaultShortPrefixId,r.iconName=zn(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=Hn()||`fas`),r}var er=function(){function e(){s(this,e),this.definitions={}}return l(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=_(_({},e.definitions[n]||{}),t[n]),Cn(n,t[n]);var r=K[P][n];r&&Cn(r,t[n]),In()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),tr=[],nr={},rr={},ir=Object.keys(rr);function ar(e,t){var n=t.mixoutsTo;return tr=e,nr={},Object.keys(rr).forEach(function(e){ir.indexOf(e)===-1&&delete rr[e]}),tr.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),S(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){nr[e]||(nr[e]=[]),nr[e].push(r[e])})}e.provides&&e.provides(rr)}),n}function or(e,t){var n=[...arguments].slice(2);return(nr[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function sr(e){var t=[...arguments].slice(1);(nr[e]||[]).forEach(function(e){e.apply(null,t)})}function cr(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return rr[e]?rr[e].apply(null,t):void 0}function Z(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||Hn();if(t)return t=zn(n,t)||t,vn(lr.definitions,n,t)||vn(X.styles,n,t)}var lr=new er,Q={noAuto:function(){q.autoReplaceSvg=!1,q.observeMutations=!1,sr(`noAuto`)},config:q,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(sr(`beforeI2svg`,e),cr(`pseudoElements2svg`,e),cr(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;q.autoReplaceSvg===!1&&(q.autoReplaceSvg=!0),q.observeMutations=!0,gn(function(){ur({autoReplaceSvgRoot:t}),sr(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(S(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:zn(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Gn(e[0]);return{prefix:n,iconName:zn(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${q.cssPrefix}-`)>-1||e.match(It))){var r=Yn(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||Hn(),iconName:zn(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=Hn();return{prefix:i,iconName:zn(i,e)||e}}}},library:lr,findIconDefinition:Z,toHtml:_n},ur=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?k:e;(Object.keys(X.styles).length>0||q.autoFetchSvg)&&j&&q.autoReplaceSvg&&Q.dom.i2svg({node:t})};function dr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return _n(e)})}}),Object.defineProperty(e,"node",{get:function(){if(j){var t=k.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function fr(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(an(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=rn(_(_({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function pr(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${q.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:_(_({},i),{},{id:o}),children:r}]}]}function mr(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function hr(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[q.replacementClass,a?`${q.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:_(_({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!mr(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[H]=``);var v=_(_({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:_({},l.styles)}),y=r.found&&n.found?cr(`generateAbstractMask`,v)||{children:[],attributes:{}}:cr(`generateAbstractIcon`,v)||{children:[],attributes:{}},b=y.children,x=y.attributes;return v.children=b,v.attributes=x,s?pr(v):fr(v)}function gr(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=_(_({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[H]=``);var l=_({},a.styles);an(i)&&(l.transform=sn({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=rn(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function _r(e){var t=e.content,n=e.extra,r=_(_({},n.attributes),{},{class:n.classes.join(` `)}),i=rn(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var vr=X.styles;function yr(e){var t=e[0],n=e[1],r=v(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${q.cssPrefix}-${Bt.GROUP}`},children:[{tag:`path`,attributes:{class:`${q.cssPrefix}-${Bt.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${q.cssPrefix}-${Bt.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var br={found:!1,width:512,height:512};function xr(e,t){!kt&&!q.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Sr(e,t){var n=t;return t===`fa`&&q.styleDefault!==null&&(t=Hn()),new Promise(function(r,i){if(n===`fa`){var a=Bn(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&vr[t]&&vr[t][e]){var o=vr[t][e];return r(yr(o))}xr(e,t),r(_(_({},br),{},{icon:q.showMissingIcons&&e&&cr(`missingIconAbstract`)||{}}))})}var Cr=function(){},$=q.measurePerformance&&A&&A.mark&&A.measure?A:{mark:Cr,measure:Cr},wr=`FA "7.3.1"`,Tr=function(e){return $.mark(`${wr} ${e} begins`),function(){return Er(e)}},Er=function(e){$.mark(`${wr} ${e} ends`),$.measure(`${wr} ${e}`,`${wr} ${e} begins`,`${wr} ${e} ends`)},Dr={begin:Tr,end:Er},Or=function(){};function kr(e){return typeof(e.getAttribute?e.getAttribute(H):null)==`string`}function Ar(e){var t=e.getAttribute?e.getAttribute(wt):null,n=e.getAttribute?e.getAttribute(Tt):null;return t&&n}function jr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(q.replacementClass)}function Mr(){return q.autoReplaceSvg===!0?Lr.replace:Lr[q.autoReplaceSvg]||Lr.replace}function Nr(e){return k.createElementNS(`http://www.w3.org/2000/svg`,e)}function Pr(e){return k.createElement(e)}function Fr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Nr:Pr:t;if(typeof e==`string`)return k.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Fr(e,{ceFn:n}))}),r}function Ir(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Lr={replace:function(e){var t=e[0];if(t.parentNode){if(e[1].forEach(function(e){t.parentNode.insertBefore(Fr(e),t)}),t.getAttribute(H)===null&&q.keepOriginalSource){var n=k.createComment(Ir(t));t.parentNode.replaceChild(n,t)}else t.remove()}},nest:function(e){var t=e[0],n=e[1];if(~en(t).indexOf(q.replacementClass))return Lr.replace(e);var r=RegExp(`${q.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===q.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return _n(e)}).join(`
`);t.setAttribute(H,``),t.innerHTML=a}};function Rr(e){e()}function zr(e,t){var n=typeof t==`function`?t:Or;if(e.length===0)n();else{var r=Rr;q.mutateApproach===Et&&(r=O.requestAnimationFrame||Rr),r(function(){var t=Mr(),r=Dr.begin(`mutate`);e.map(t),r(),n()})}}var Br=!1;function Vr(){Br=!0}function Hr(){Br=!1}var Ur=null;function Wr(e){if(re&&q.observeMutations){var t=e.treeCallback,n=t===void 0?Or:t,r=e.nodeCallback,i=r===void 0?Or:r,a=e.pseudoElementsCallback,o=a===void 0?Or:a,s=e.observeMutationsRoot,c=s===void 0?k:s;Ur=new re(function(e){if(!Br){var t=Hn();$t(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!kr(e.addedNodes[0])&&(q.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&q.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&kr(e.target)&&~zt.indexOf(e.attributeName)){if(e.attributeName===`class`&&Ar(e.target)){var r=Yn(en(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(wt,a||t),s&&e.target.setAttribute(Tt,s)}else jr(e.target)&&i(e.target)}})}}),j&&Ur.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Gr(){Ur&&Ur.disconnect()}function Kr(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function qr(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Yn(en(e));return i.prefix||=Hn(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Rn(i.prefix,e.innerText)||Ln(i.prefix,xn(e.innerText))),!i.iconName&&q.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function Jr(e){return $t(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Yr(){return{iconName:null,prefix:null,transform:Yt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Xr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=qr(e),r=n.iconName,i=n.prefix,a=n.rest,o=Jr(e),s=or(`parseNodeAttributes`,{},e);return _({iconName:r,prefix:i,transform:Yt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?Kr(e):[],attributes:o}},s)}var Zr=X.styles;function Qr(e){var t=q.autoReplaceSvg===`nest`?Xr(e,{styleParser:!1}):Xr(e);return~t.extra.classes.indexOf(Lt)?cr(`generateLayersText`,e,t):cr(`generateSvgReplacementMutation`,e,t)}function $r(){return[].concat(y(R),y(ht))}function ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();var n=k.documentElement.classList,r=function(e){return n.add(`${W}-${e}`)},i=function(e){return n.remove(`${W}-${e}`)},a=q.autoFetchSvg?$r():ce.concat(Object.keys(Zr));a.includes(`fa`)||a.push(`fa`);var o=[`.${Lt}:not([${H}])`].concat(a.map(function(e){return`.${e}:not([${H}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=$t(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Dr.begin(`onTree`),l=s.reduce(function(e,t){try{var n=Qr(t);n&&e.push(n)}catch(e){kt||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){zr(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function ti(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Qr(e).then(function(e){e&&zr([e],t)})}function ni(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Z(t||{}),i=n.mask;return i&&=(i||{}).icon?i:Z(i||{}),e(r,_(_({},n),{},{mask:i}))}}var ri=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?Yt:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,v=e.iconName,y=e.icon;return dr(_({type:`icon`},e),function(){return sr(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),hr({icons:{main:yr(y),mask:s?yr(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:v,transform:_(_({},Yt),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},ii={mixout:function(){return{icon:ni(ri)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=ei,e.nodeCallback=ti,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?k:t,r=e.callback;return ei(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([Sr(n,r),o.iconName?Sr(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=v(o,2),u=l[0],d=l[1];t([e,hr({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=rn(a);o.length>0&&(n.style=o);var s;return an(i)&&(s=cr(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},ai={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return dr({type:`layer`},function(){sr(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${q.cssPrefix}-layers`].concat(y(r)).join(` `)},children:n}]})}}}},oi={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return dr({type:`counter`,content:e},function(){return sr(`beforeDOMElementCreation`,{content:e,params:t}),_r({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${q.cssPrefix}-layers-counter`].concat(y(a))}})})}}}},si={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?Yt:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return dr({type:`text`,content:e},function(){return sr(`beforeDOMElementCreation`,{content:e,params:t}),gr({content:e,transform:_(_({},Yt),r),extra:{attributes:s,styles:l,classes:[`${q.cssPrefix}-layers-text`].concat(y(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(ie){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,gr({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},ci=RegExp(`"`,`ug`),li=[1105920,1112319],ui=_(_(_(_({},{FontAwesome:{normal:`fas`,400:`fas`}}),rt),bt),ot),di=Object.keys(ui).reduce(function(e,t){return e[t.toLowerCase()]=ui[t],e},{}),fi=Object.keys(di).reduce(function(e,t){var n=di[t];return e[t]=n[900]||y(Object.entries(n))[0][1],e},{});function pi(e){return xn(y(e.replace(ci,``))[0]||``)}function mi(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(ci,``),r=n.codePointAt(0),i=r>=li[0]&&r<=li[1],a=n.length===2&&n[0]===n[1];return i||a||t}function hi(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(di[n]||{})[i]||fi[n]}function gi(e,t){var n=`${U}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=$t(e.children).filter(function(e){return e.getAttribute(Ct)===t})[0],o=O.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Rt),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=hi(s,l),p=pi(d),m=c[0].startsWith(`FontAwesome`),h=mi(o),g=Ln(f,p),v=g;if(m){var y=Vn(p);y.iconName&&y.prefix&&(g=y.iconName,f=y.prefix)}if(g&&!h&&(!a||a.getAttribute(wt)!==f||a.getAttribute(Tt)!==v)){e.setAttribute(n,v),a&&e.removeChild(a);var b=Yr(),x=b.extra;x.attributes[Ct]=t,Sr(g,f).then(function(i){var a=hr(_(_({},b),{},{icons:{main:i,mask:Un()},prefix:f,iconName:v,extra:x,watchable:!0})),o=k.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return _n(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function _i(e){return Promise.all([gi(e,`::before`),gi(e,`::after`)])}function vi(e){return e.parentNode!==document.head&&!~Dt.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ct)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var yi=function(e){return!!e&&Ot.some(function(t){return e.includes(t)})},bi=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=u(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(yi(a)){var o=Ot.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function xi(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(j){var n;if(t)n=e;else if(q.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=u(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=u(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,d=u(bi(l.selectorText)),f;try{for(d.s();!(f=d.n()).done;){var p=f.value;r.add(p)}}catch(e){d.e(e)}finally{d.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){q.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var m=Array.from(r).join(`, `);try{n=e.querySelectorAll(m)}catch{}}return new Promise(function(e,t){var r=$t(n).filter(vi).map(_i),i=Dr.begin(`searchPseudoElements`);Vr(),Promise.all(r).then(function(){i(),Hr(),e()}).catch(function(){i(),Hr(),t()})})}}var Si={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=xi,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?k:t;q.searchPseudoElements&&xi(n)}}},Ci=!1,wi={mixout:function(){return{dom:{unwatch:function(){Vr(),Ci=!0}}}},hooks:function(){return{bootstrap:function(){Wr(or(`mutationObserverCallbacks`,{}))},noAuto:function(){Gr()},watch:function(e){var t=e.observeMutationsRoot;Ci?Hr():Wr(or(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Ti=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Ei={mixout:function(){return{parse:{transform:function(e){return Ti(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Ti(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:_({},a.outer),children:[{tag:`g`,attributes:_({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:_(_({},t.icon.attributes),a.path)}]}]}}}},Di={x:0,y:0,width:`100%`,height:`100%`};function Oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function ki(e){return e.tag===`g`?e.children:[e]}ar([fn,ii,ai,oi,si,Si,wi,Ei,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Yn(n.split(` `).map(function(e){return e.trim()})):Un();return r.prefix||=Hn(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=on({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:_(_({},Di),{},{fill:`white`})},p=c.children?{children:c.children.map(Oi)}:{},m={tag:`g`,attributes:_({},d.inner),children:[Oi(_({tag:c.tag,attributes:_(_({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:_({},d.outer),children:[m]},g=`mask-${a||Qt()}`,v=`clip-${a||Qt()}`,y={tag:`mask`,attributes:_(_({},Di),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},b={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:v},children:ki(u)},y]};return t.push(b,{tag:`rect`,attributes:_({fill:`currentColor`,"clip-path":`url(#${v})`,mask:`url(#${g})`},Di)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;O.matchMedia&&(t=O.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:_(_({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=_(_({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:_(_({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:_(_({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:_(_({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:_(_({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:_(_({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:_(_({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:_(_({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:Q}),Q.noAuto;var Ai=Q.config,ji=Q.library,Mi=Q.dom;Q.parse,Q.findIconDefinition,Q.toHtml,Q.icon,Q.layer,Q.text,Q.counter;var Ni=[{prefix:`fab`,iconName:`instagram`,icon:[448,512,[],`f16d`,`M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`]},{prefix:`fab`,iconName:`square-facebook`,icon:[448,512,[`facebook-square`],`f082`,`M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l98.2 0 0-145.8-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 145.8 129 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z`]},{prefix:`fab`,iconName:`tiktok`,icon:[448,512,[],`e07b`,`M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z`]},{prefix:`fab`,iconName:`spotify`,icon:[512,512,[],`f1bc`,`M256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM356.7 372.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z`]},{prefix:`fab`,iconName:`youtube`,icon:[576,512,[61802],`f167`,`M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z`]}],Pi=.6;function Fi(){Ai.autoAddCss=!1,ji.add(Ni),Mi.watch()}function Ii(){document.documentElement.lang=r()}function Li(){document.documentElement.hasAttribute(`data-no-parallax`)||window.addEventListener(`scroll`,()=>{document.documentElement.style.backgroundPositionY=`calc(-0% + ${window.scrollY*Pi}px)`},{passive:!0})}function Ri(){let e=document.getElementById(`site-header`),t=-1;window.addEventListener(`scroll`,()=>{let n=window.scrollY;if(t<0){t=n;return}n>t&&n>200?e.classList.add(`header--hidden`):e.classList.remove(`header--hidden`),t=n},{passive:!0})}function zi(){let e=document.getElementById(`site-header`),t=()=>document.documentElement.style.setProperty(`--header-height`,`${e.offsetHeight}px`);t(),window.addEventListener(`resize`,t,{passive:!0})}Fi(),Ii(),Li(),Ri(),zi();