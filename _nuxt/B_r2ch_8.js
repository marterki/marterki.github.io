function u(e,t){let n;return function(...o){clearTimeout(n),n=setTimeout(()=>{e.apply(this,o)},t)}}async function i(e){return new Promise(t=>setTimeout(t,e))}export{u as d,i as s};
