let e,t;function n(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function r(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},l={},a=o.parcelRequire9615;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in l){var t=l[e];delete l[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){l[e]=t},o.parcelRequire9615=a),a.register("gC69E",function(e,t){"use strict";n(e.exports,"register",function(){return r},function(e){return r=e}),n(e.exports,"resolve",function(){return o},function(e){return o=e});var r,o,i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a("gC69E").register(JSON.parse('{"cu639":"card.242f9ff4.js","dm11G":"giphy.356b0fc8.gif","434qa":"card.b522f4fe.js","4qXve":"card.28829073.js"}'));var s=a("9uoNE"),d=a("acoRl"),c=a("7ivES"),u=a("l5irA"),f=a("d1QTn"),p=a("SFK1V"),h=a("60uXz"),m=a("jmleC"),g=a("hM909"),v=a("lmh9o"),b=a("2VBiW");m.config.searchPseudoElements=!0,(0,m.library).add(g.faFacebook,g.faInstagram,g.faSnapchat,g.faMastodon,g.faTwitter,g.faYoutube,g.faTelegram,g.faSkype,g.faVk,g.faWhatsapp,v.faEnvelope,v.faUser,v.faPhone,v.faKey),(0,m.dom).i2svg(),(0,m.dom).watch(),window.Sharer=d,c.selectors.filter=".stretchy",c.init(document.querySelector(".form1"));var y={};y=new URL(a("gC69E").resolve("dm11G"),import.meta.url).toString();const E=new URL(y),_=document.querySelector(".form1");let w="0".repeat(h.__supportedSocials.length),S=!1,A=[],C=(0,h.__envPath).split("card.html")[1]||(0,h.__envPath).split("card")[1],L="0"!==C.charAt(C.length-1);C=C.slice(0,-1);const T=C.slice(1).hashCode();let H=(0,h.__reverse)(C,w);t=H[0],w=H[1],S=void 0===t||1===t.length;const R=new u.SocialLinks;function x(e){"ar"===e.value?document.dir="rtl":document.dir="ltr",r(s).setLocale(e.value)}!function(){let e=["user",...h.__supportedSocials,"envelope","phone"];A=[];for(let n=0;n<e.length;n++){let r=e[n],o=t[n];if("user"==r)A.push([0,r,o]);else if("envelope"==r)A.push([e.length-2,r,o]);else if("phone"==r)A.push([e.length-1,r,o]);else{let e=parseInt(w[n-1]);A.push([e,r,t[e]])}}for(let n=e.length;n<t.length;n++)A.push([e.length,-1,t[n]]);A.sort()}(),window.addEventListener("DOMContentLoaded",()=>{x(Array.from(document.querySelector("#lang-select").options).filter(e=>!0==e.defaultSelected)[0])}),document.getElementById("lang-select").addEventListener("change",function(){x(this)},!1);const M=document.getElementById("decrypt-button");M.addEventListener("click",function(){let t=prompt("This social card seems encrypted. Enter in the key!")||"";if(t){if(t.length<4||t.length>8)k(!0);else{for(e of A)e[2]&&(e[2]=(0,f.XORCipher).decode(t,e[2]));document.getElementsByClassName("form1")[0].innerHTML="",O(A)}}});let j=0;function O(t){for(e of t){let t,n=e[1],r=e[2];if(""!=r){if(R.isValid(n,r)&&(t=R.getLink(n,r)),j+=1,"envelope"===n){_.insertAdjacentHTML("beforeend",`<div id="mail-id"><a href="mailto:${r}">${r}</a></div>`);continue}if("phone"===n){_.insertAdjacentHTML("beforeend",`<div id="phone-id"><a href="tel:${r}">${r}</a></div>`);continue}"user"===n&&document.querySelectorAll(".user").forEach(e=>{e.innerHTML=r});let e=document.createElement("I");(0,h.__supportedSocials).indexOf(n)>=0?e.setAttribute("class",`fa-brands fa-${n} icon`):e.setAttribute("class",`fa fa-${n} icon`),_.appendChild(e);let o=document.createElement("INPUT");if(o.setAttribute("name",n),o.setAttribute("class","input-field stretchy"),o.setAttribute("value",r),o.setAttribute("type","text"),o.setAttribute("readonly","readonly"),_.appendChild(o),t){o.style="cursor: pointer;";let e=document.createElement("a");e.style="display: contents;",e.setAttribute("href",t),(0,h.wrap)(o,e)}}}}function k(e){if(!e)return;_.innerHTML="";let t=document.createElement("img");t.src=E,_.appendChild(t);let n=document.createElement("h2");n.innerText="QR code or URL is probably wrong",_.appendChild(n)}if(k(S),!S){O(A),j=j>7?7:j;let e=_.getBoundingClientRect().top+window.scrollY;window.scroll({top:e,behavior:"smooth"}),(0,b.join)(!1,T,L)}document.body.hidden=!1,r(s).enableDomScan(!0),r(s).addCatalogs(p.stoneJsCatalogs);