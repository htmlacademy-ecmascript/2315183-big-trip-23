(()=>{var e={362:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var i=n(354),s=n.n(i),r=n(314),a=n.n(r)()(s());a.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=a},314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,s,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);i&&a[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),s&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=s):u[4]="".concat(s)),t.push(u))}},t}},354:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},353:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",l="month",c="quarter",u="year",d="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},_={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,l),r=n-s<0,a=t.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:u,w:o,d:a,D:d,h:r,m:s,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",g={};g[y]=m;var E="$isDayjsObject",b=function(e){return e instanceof k||!(!e||!e[E])},C=function e(t,n,i){var s;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();g[r]&&(s=r),n&&(g[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;g[o]=t,s=o}return!i&&s&&(y=s),s||!i&&y},$=function(e,t){if(b(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new k(n)},w=_;w.l=C,w.i=b,w.w=function(e,t){return $(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[E]=!0}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(h);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return w},v.isValid=function(){return!(this.$d.toString()===p)},v.isSame=function(e,t){var n=$(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return $(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<$(e)},v.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,c=!!w.u(t)||t,p=w.p(e),h=function(e,t){var i=w.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?i:i.endOf(a)},f=function(e,t){return w.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,v=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case u:return c?h(1,0):h(31,11);case l:return c?h(1,v):h(0,v+1);case o:var g=this.$locale().weekStart||0,E=(m<g?m+7:m)-g;return h(c?_-E:_+(6-E),v);case a:case d:return f(y+"Hours",0);case r:return f(y+"Minutes",1);case s:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var o,c=w.p(e),p="set"+(this.$u?"UTC":""),h=(o={},o[a]=p+"Date",o[d]=p+"Date",o[l]=p+"Month",o[u]=p+"FullYear",o[r]=p+"Hours",o[s]=p+"Minutes",o[i]=p+"Seconds",o[n]=p+"Milliseconds",o)[c],f=c===a?this.$D+(t-this.$W):t;if(c===l||c===u){var m=this.clone().set(d,1);m.$d[h](f),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[w.p(e)]()},v.add=function(n,c){var d,p=this;n=Number(n);var h=w.p(c),f=function(e){var t=$(p);return w.w(t.date(t.date()+Math.round(e*n)),p)};if(h===l)return this.set(l,this.$M+n);if(h===u)return this.set(u,this.$y+n);if(h===a)return f(1);if(h===o)return f(7);var m=(d={},d[s]=e,d[r]=t,d[i]=1e3,d)[h]||1,v=this.$d.getTime()+n*m;return w.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},h=function(e){return w.s(r%12||12,e,"0")},m=u||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(f,(function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return w.s(t.$y,4,"0");case"M":return o+1;case"MM":return w.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,c,3);case"MMMM":return d(c,o);case"D":return t.$D;case"DD":return w.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(r);case"HH":return w.s(r,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(r,a,!0);case"A":return m(r,a,!1);case"m":return String(a);case"mm":return w.s(a,2,"0");case"s":return String(t.$s);case"ss":return w.s(t.$s,2,"0");case"SSS":return w.s(t.$ms,3,"0");case"Z":return s}return null}(e)||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,p){var h,f=this,m=w.p(d),v=$(n),_=(v.utcOffset()-this.utcOffset())*e,y=this-v,g=function(){return w.m(f,v)};switch(m){case u:h=g()/12;break;case l:h=g();break;case c:h=g()/3;break;case o:h=(y-_)/6048e5;break;case a:h=(y-_)/864e5;break;case r:h=y/t;break;case s:h=y/e;break;case i:h=y/1e3;break;default:h=y}return p?h:w.a(h)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return g[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=C(e,t,!0);return i&&(n.$L=i),n},v.clone=function(){return w.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),D=k.prototype;return $.prototype=D,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",l],["$y",u],["$D",d]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),$.extend=function(e,t){return e.$i||(e(t,k,$),e.$i=!0),$},$.locale=C,$.isDayjs=b,$.unix=function(e){return $(1e3*e)},$.en=g[y],$.Ls=g,$.p={},$}()},72:e=>{"use strict";var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},a=[],o=0;o<e.length;o++){var l=e[o],c=i.base?l[0]+i.base:l[0],u=r[c]||0,d="".concat(c," ").concat(u);r[c]=u+1;var p=n(d),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=s(h,i);i.byIndex=o,t.splice(o,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var r=i(e=e||[],s=s||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var o=n(r[a]);t[o].references--}for(var l=i(e,s),c=0;c<r.length;c++){var u=n(r[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}r=l}}},659:e=>{"use strict";var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},540:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={id:i,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";function e(e,t,n="beforeend"){if(!(e instanceof g))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function t(e,t){if(!(e instanceof g&&t instanceof g))throw new Error("Can replace only components");const n=e.element,i=t.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}function i(e){if(null!==e){if(!(e instanceof g))throw new Error("Can remove only components");e.element.remove(),e.removeElement()}}var s=n(72),r=n.n(s),a=n(825),o=n.n(a),l=n(659),c=n.n(l),u=n(56),d=n.n(u),p=n(540),h=n.n(p),f=n(113),m=n.n(f),v=n(362),_={};_.styleTagTransform=m(),_.setAttributes=d(),_.insert=c().bind(null,"head"),_.domAPI=o(),_.insertStyleElement=h(),r()(v.A,_),v.A&&v.A.locals&&v.A.locals;const y="shake";class g{#e=null;constructor(){if(new.target===g)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(y),setTimeout((()=>{this.element.classList.remove(y),e?.()}),600)}}class E extends g{get template(){return'<ul class="trip-events__list"></ul>'}}class b extends g{get template(){return'\n  <p class="trip-events__msg">Click New Event to create your first point</p>'}}const C=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"],$=["Amsterdam","Chamonix","Geneva","Soul","Moscow"],w=["The mysterious ancient city of Machu Picchu: lost in the mountains of Peru, this archaeological complex leaves visitors in awe with its mystery and beauty","The idyllic beach on Bora Bora Island: with white sand, warm azure water, and palm trees, this beach is the perfect place for relaxation and leisure","The picturesque vineyards of the Tuscany region: famous for their wines and beautiful landscapes, these vineyards create a unique atmosphere inviting you to enjoy the beauty and flavors of the region","The snow-capped peaks of the Swiss Alps: majestic mountain peaks covered in snow offer a breathtaking view and a perfect location for winter sports","The mystical Yavari forest in Brazil: known for its diverse flora and fauna, this forest exudes a special aura of mystery and enigma"],k="MM/DD/YYYY HH:mm",D="HH:mm",S="everything",A="future",L="present",M="past",T="time",x="price";class F extends g{#t=null;constructor({onSortTypeChange:e}){super(),this.#t=e,this.element.addEventListener("click",this.#n)}get template(){return`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      <div class="trip-sort__item  trip-sort__item--day">\n        <input id="sort-day" class="trip-sort__input  visually-hidden"\n        type="radio" name="trip-sort" value="sort-day" checked\n        data-sort-type="day">\n        <label class="trip-sort__btn" for="sort-day">Day</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--event">\n        <input id="sort-event" class="trip-sort__input  visually-hidden"\n        type="radio" name="trip-sort" value="sort-event" disabled\n        data-sort-type="event">\n        <label class="trip-sort__btn" for="sort-event">Event</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--time">\n        <input id="sort-time" class="trip-sort__input  visually-hidden"\n        type="radio" name="trip-sort" value="sort-time"\n        data-sort-type="${T}">\n        <label class="trip-sort__btn" for="sort-time">Time</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--price">\n        <input id="sort-price" class="trip-sort__input  visually-hidden"\n        type="radio" name="trip-sort" value="sort-price"\n        data-sort-type="${x}">\n        <label class="trip-sort__btn" for="sort-price">Price</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--offer">\n        <input id="sort-offer" class="trip-sort__input  visually-hidden"\n        type="radio" name="trip-sort" value="sort-offer" disabled\n        data-sort-type="offer">\n        <label class="trip-sort__btn" for="sort-offer">Offers</label>\n      </div>\n    </form>`}#n=e=>{"INPUT"===e.target.tagName&&this.#t(e.target.dataset.sortType)}}var O=n(353),H=n.n(O);function W(e){return e[Math.floor(Math.random()*e.length)]}function j(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function I(){return Math.random()<.5}function B(e,t){return e.map((e=>e.id===t.id?t:e))}function q(e){return[e.getHours(),e.getMinutes()].map((e=>e<10?`0${e}`:e)).join(":")}function P(e,t){return e?H()(e).format(t):""}function Y(e,t){var n,i;return n=e.dueDate,i=t.dueDate,(null===n&&null===i?0:null===n?1:null===i?-1:null)??H()(e.dueDate).diff(H()(t.dueDate))}function N(e,t){return t.price-e.price}function U(e,t){return new Date(`1970/01/01 ${q(t.time.from)}`)-new Date(`1970/01/01 ${q(e.time.from)}`)}class z extends g{_state={};updateElement(e){e&&(this._setState(e),this.#i())}_restoreHandlers(){throw new Error("Abstract method not implemented: restoreHandlers")}_setState(e){this._state=structuredClone({...this._state,...e})}#i(){const e=this.element,t=e.parentElement;this.removeElement();const n=this.element;t.replaceChild(n,e),this._restoreHandlers()}}const R={dueDate:new Date,event:W(C),place:W($),time:{from:new Date,to:new Date},price:0,offers:null,isImportant:!1,description:W(w),pictures:Array.from({length:5},(()=>`https://loremflickr.com/248/152?random=${j(0,100)}`))};class V extends z{#s=null;#r=null;constructor({editFormElement:e=R,onFormSubmit:t,onCancelEditForm:n}){super(),this._setState(V.parseListElementToState(e)),this.#s=t,this.element.querySelector("form").addEventListener("submit",this.#a),this.#r=n,this._restoreHandlers()}get template(){return function(e){const{event:t,place:n,time:i,price:s,description:r,pictures:a,offers:o,isAnyOffers:l}=e,c=P(i.from,k),u=P(i.to,k);return`<li class="trip-events__item">\n    <form class="event event--edit" action="#" method="post">\n    <header class="event__header">\n    <div class="event__type-wrapper">\n    ${function(e){return`<label class="event__type  event__type-btn" for="event-type-toggle-1">\n  <span class="visually-hidden">Choose event type</span>\n  <img class="event__type-icon" width="17" height="17" src="img/icons/${e.toLowerCase()}.png" alt="Event type icon">\n  </label>`}(t)}\n      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n      <div class="event__type-list">\n        ${function(e){return`<fieldset class="event__type-group">\n  <legend class="visually-hidden">Event type</legend>\n\n  ${C.map((t=>`<div class="event__type-item">\n  <input id="event-type-${t.toLowerCase()}-1" class="event__type-input  visually-hidden"\n  type="radio" name="event-type" value="${t.toLowerCase()}"\n  ${e===t?"checked":""}>\n  <label class="event__type-label  event__type-label--${t.toLowerCase()}" for="event-type-${t.toLowerCase()}-1">${t}</label>\n  </div>`)).join("")}\n\n  </fieldset>`}(t)}\n      </div>\n    </div>\n\n    <div class="event__field-group  event__field-group--destination">\n    ${function(e,t){return`<label class="event__label  event__type-output" for="event-destination-1">\n  ${e}\n  </label>\n  <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${t}" list="destination-list-1">\n  <datalist id="destination-list-1">\n    <option value="Amsterdam"></option>\n    <option value="Geneva"></option>\n    <option value="Chamonix"></option>\n  </datalist>`}(t,n)}\n    </div>\n\n    <div class="event__field-group  event__field-group--time">\n    ${function(e,t){return`<label class="visually-hidden" for="event-start-time-1">From</label>\n  <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${e}">\n  &mdash;\n  <label class="visually-hidden" for="event-end-time-1">To</label>\n  <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${t}">`}(c,u)}\n    </div>\n\n    <div class="event__field-group  event__field-group--price">\n      <label class="event__label" for="event-price-1">\n        <span class="visually-hidden">Price</span>\n        &euro;\n      </label>\n      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${s}">\n    </div>\n\n    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n    <button class="event__reset-btn" type="reset">Delete</button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n\n    </header>\n    <section class="event__details">\n    <section class="event__section  event__section--offers">\n      <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n      ${function(e,t){let n=0;return t?`<div class="event__available-offers">\n    ${Object.entries(e).map((e=>(n++,`<div class="event__offer-selector">\n    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${n}"\n    name="event-offer-luggage" type="checkbox"  ${e[1].isChecked?"checked":""}>\n    <label class="event__offer-label" for="event-offer-${n}">\n      <span class="event__offer-title">${e[1].name}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${e[1].price}</span>\n    </label>\n  </div>`))).join("")}\n  </div>`:`<div class="event__available-offers">\n    ${Object.entries(e).map((e=>(n++,`<div class="event__offer-selector">\n    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${n}"\n    name="event-offer-luggage" type="checkbox">\n    <label class="event__offer-label" for="event-offer-${n}">\n      <span class="event__offer-title">${e[1].name}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${e[1].price}</span>\n    </label>\n  </div>`))).join("")}\n  </div>`}(o,l)}\n\n    </section>\n\n    <section class="event__section  event__section--destination">\n    ${function(e,t){return`<h3 class="event__section-title  event__section-title--destination">Destination</h3>\n  <p class="event__destination-description">${e}</p>\n  <div class="event__photos-container">\n    <div class="event__photos-tape">\n    ${Object.entries(t).map((e=>`<img class="event__photo" src="${e[1]}" alt="Event photo"></img>`)).join("")}\n    </div>\n  </div>`}(r,a)}\n    </section>\n  </section>\n  </form></li>`}(this._state)}reset(e){this.updateElement(V.parseListElementToState(e))}_restoreHandlers(){this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#o),this.element.querySelector(".event__type-group").addEventListener("click",this.#l),this.element.querySelector(".event__input--destination").addEventListener("click",(()=>{})),this.element.querySelector("#event-start-time-1").addEventListener("click",(()=>{})),this.element.querySelector("#event-end-time-1").addEventListener("click",(()=>{})),this.element.querySelector(".event__input--destination").addEventListener("input",this.#c),this.element.querySelector(".event__available-offers").addEventListener("click",this.#u)}#a=e=>{e.preventDefault(),this.#s(V.parseStateToListElement(this._state))};#o=e=>{e.preventDefault(),this.#r()};#l=e=>{this._setState({event:e.target.value})};#u=()=>{const e=this.element.querySelectorAll(".event__offer-checkbox");for(let t=0;t<this._state.offers.length;t++)e[t].checked?this._state.offers[t].isChecked=!0:this._state.offers[t].isChecked=!1;this._setState({offers:this._state.offers})};#c=e=>{e.preventDefault(),this._setState({place:e.target.value})};static parseListElementToState(e){return{...e,isAnyOffers:(t=e.offers,t.some((e=>!0===Object.values(e)[2])))};var t}static parseStateToListElement(e){const t={...e};return t.isAnyOffers||t.offers.forEach((e=>{e.isChecked=!1})),delete t.isAnyOffers,t}}class J extends g{#d=null;#p=null;#h=null;constructor({listElement:e,onEditClick:t,onFavoriteClick:n}){super(),this.#d=e,this.#p=t,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#f),this.#h=n,this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#m)}get template(){return function(e){const{dueDate:t,event:n,place:i,time:s,price:r,isFavorite:a,offers:o}=e,l=P(t,"MMM D"),c=P(s.from,D),u=P(s.to,D),d=-1*H()(s.from).diff(s.to,"d"),p=H()(s.from).diff(s.to,"h")%24*-1,h=H()(s.from).diff(s.to,"m")%60*-1,f=`${0!==d?`${d}D`:""}\n    ${0!==p?`${p}H`:""}\n    ${0!==h?`${h}M`:""}`;return`<li class="trip-events__item">\n    <div class="event">\n      <time class="event__date" datetime="${l}">${l}</time>\n      <div class="event__type">\n        <img class="event__type-icon" width="42" height="42" src="img/icons/${n.toLowerCase()}.png" alt="Event type icon">\n      </div>\n      <h3 class="event__title">${n} ${i}</h3>\n\n      ${function(e,t,n){return`\n  <div class="event__schedule">\n        <p class="event__time">\n          <time class="event__start-time" datetime="${e}">${e}</time>\n          &mdash;\n          <time class="event__end-time" datetime="${t}">${t}</time>\n        </p>\n        <p class="event__duration">${n}</p>\n      </div>`}(c,u,f)}\n\n      <p class="event__price">\n        &euro;&nbsp;<span class="event__price-value">${r}</span>\n      </p>\n      <h4 class="visually-hidden">Offers:</h4>\n\n      <ul class="event__selected-offers">\n      ${function(e){return Object.entries(e).map((e=>e[1].isChecked?`<li class="event__offer">\n    <span class="event__offer-title">${e[1].name}</span>\n    &plus;&euro;&nbsp;\n    <span class="event__offer-price">${e[1].price}</span>\n    </li>`:"")).join("")}(o)}\n      </ul>\n\n      ${function(e){return`<button class="event__favorite-btn ${e?"event__favorite-btn--active":""}" type="button">\n  <span class="visually-hidden">Add to favorite</span>\n  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n  </svg>\n</button>`}(a)}\n\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </div>\n  </li>`}(this.#d)}#f=e=>{e.preventDefault(),this.#p()};#m=()=>{this.#h()}}const X="DEFAULT",G="EDITING";class K{#v=null;#_=null;#y=null;#d=null;#g=null;#E=null;#b=X;constructor({listContainer:e,onDataChange:t,onModeChange:n}){this.#v=e,this.#g=t,this.#E=n}init(n){const s=this.#_,r=this.#y;this.#d=n,this.#_=new J({listElement:this.#d,onEditClick:this.#p,onFavoriteClick:this.#h}),this.#y=new V({editFormElement:this.#d,onFormSubmit:this.#s,onCancelEditForm:this.#r}),null!==s&&null!==r?(this.#b===X&&t(this.#_,s),this.#b===G&&t(this.#y,r),i(s),i(r)):e(this.#_,this.#v)}destroy(){i(this.#_),i(this.#y)}resetView(){this.#b!==X&&(this.#y.reset(this.#d),this.#C())}#$=e=>{"Escape"===e.key&&(e.preventDefault(),this.#y.reset(this.#d),this.#C())};#w(){t(this.#y,this.#_),document.addEventListener("keydown",this.#$),this.#E(),this.#b=G}#C(){t(this.#_,this.#y),document.removeEventListener("keydown",this.#$),this.#b=X}#p=()=>{this.#w()};#s=e=>{this.#g(e),this.#C()};#r=()=>{this.#y.reset(this.#d),this.#C()};#h=()=>{this.#g({...this.#d,isFavorite:!this.#d.isFavorite})}}const Z=[{name:"Order Uber",price:20,isChecked:I()},{name:"Switch to comfort",price:80,isChecked:I()},{name:"Add luggage",price:50,isChecked:I()},{name:"With pets",price:40,isChecked:I()},{name:"Add lunch",price:10,isChecked:I()},{name:"Rent a car",price:200,isChecked:I()},{name:"Lunch in city",price:30,isChecked:I()},{name:"Long rent",price:100,isChecked:I()},{name:"Add breakfast",price:50,isChecked:I()},{name:"Switch to comfort",price:80,isChecked:I()},{name:"Add transfer",price:20,isChecked:I()},{name:"Book tickets",price:50,isChecked:I()},{name:"VIP ticket",price:200,isChecked:I()},{name:"Trip guide",price:5,isChecked:I()}];function Q(){return W(Z)}class ee{offers=Array.from({length:5},Q);getOffer(){return this.offers}}let te=(e=21)=>{let t="",n=crypto.getRandomValues(new Uint8Array(e));for(;e--;)t+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63&n[e]];return t};const ne=2e3,ie=[{dueDate:new Date("2024-04-30"),event:W(C),place:W($),time:{from:new Date(2024,4,30,14,0),to:new Date(2024,4,30,20,0)},price:j(10,ne),offers:(new ee).getOffer(),isFavorite:!1,description:W(w),pictures:Array.from({length:5},(()=>`https://loremflickr.com/248/152?random=${j(0,100)}`))},{dueDate:new Date("2024-05-12"),event:W(C),place:W($),time:{from:new Date(2024,5,12,8,25),to:new Date(2024,5,12,11,5)},price:j(10,ne),offers:(new ee).getOffer(),isFavorite:!0,description:W(w),pictures:Array.from({length:5},(()=>`https://loremflickr.com/248/152?random=${j(0,100)}`))},{dueDate:new Date("2024-08-12"),event:W(C),place:W($),time:{from:new Date(2024,8,12,14,35),to:new Date(2024,8,14,18,0)},price:j(10,ne),offers:(new ee).getOffer(),isFavorite:!1,description:W(w),pictures:Array.from({length:5},(()=>`https://loremflickr.com/248/152?random=${j(0,100)}`))},{dueDate:new Date("2024-01-30"),event:W(C),place:W($),time:{from:new Date(2024,1,30,3,15),to:new Date(2024,1,30,13,0)},price:j(10,ne),offers:(new ee).getOffer(),isFavorite:!0,description:W(w),pictures:Array.from({length:5},(()=>`https://loremflickr.com/248/152?random=${j(0,100)}`))},{dueDate:new Date("2024-05-7"),event:W(C),place:W($),time:{from:new Date(2024,5,7,22,15),to:new Date(2024,5,7,23,25)},price:j(10,ne),offers:(new ee).getOffer(),isFavorite:!0,description:W(w),pictures:Array.from({length:5},(()=>`https://loremflickr.com/248/152?random=${j(0,100)}`))}];function se(){return{id:te(),...W(ie)}}const re=j(0,10),ae={[S]:e=>e,[A]:e=>e.filter((e=>{return(t=e.dueDate)&&H()().isBefore(t,"D");var t})),[L]:e=>e.filter((e=>{return(t=e.dueDate)&&H()(t).isSame(H()(),"D");var t})),[M]:e=>e.filter((e=>{return(t=e.dueDate)&&H()().isAfter(t,"D");var t}))},oe=document.querySelector("main"),le=document.querySelector(".page-header"),ce=oe.querySelector(".trip-events"),ue=new class{#k=Array.from({length:re},se);get waypoint(){return this.#k}},de=new class{#v=null;#D=null;#S=new E;#A=new b;#L=null;#M=[];#T=[];#x=new Map;#F="day";constructor({listContainer:e,waypointsModel:t}){this.#v=e,this.#D=t}init(){this.#M=[...this.#D.waypoint],this.#M.sort(Y),this.#T=[...this.#D.waypoint],this.#T.sort(Y),this.#O(),this.#H(this.#v)}#W=e=>{this.#M=B(this.#M,e),this.#T=B(this.#T,e),this.#x.get(e.id).init(e)};#E=()=>{this.#x.forEach((e=>e.resetView()))};#j=e=>{this.#F!==e&&(this.#I(e),this.#B(),this.#O())};#O(){if(e(this.#S,this.#v),this.#M.every((e=>e.isArchive)))this.#q(this.#A,this.#S);else for(let e=0;e<this.#M.length;e++)this.#P(this.#M[e])}#P(e){const t=new K({listContainer:this.#S.element,onDataChange:this.#W,onModeChange:this.#E});t.init(e),this.#x.set(e.id,t)}#H(t){this.#L=new F({onSortTypeChange:this.#j}),e(this.#L,t,"afterbegin")}#q(t,n){e(t,n.element)}#B(){this.#x.forEach((e=>e.destroy())),this.#x.clear()}#I(e){switch(e){case x:this.#M.sort(N);break;case T:this.#M.sort(U);break;default:this.#M=[...this.#T]}this.#F=e}}({listContainer:ce,waypointsModel:ue}),pe=le.querySelector(".trip-controls__filters"),he=le.querySelector(".trip-main"),fe=(me=ue.waypoint,Object.entries(ae).map((([e,t])=>({type:e,count:t(me).length}))));var me;e(new class extends g{get template(){return'<section class="trip-main__trip-info  trip-info">\n    <div class="trip-info__main">\n      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n      <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n    </div>\n\n    <p class="trip-info__cost">\n      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n    </p>\n  </section>'}},he,"afterbegin"),e(new class extends g{#Y=null;constructor({filters:e}){super(),this.#Y=e}get template(){return function(e){const t=e.map(((e,t)=>function(e,t){const{type:n,count:i}=e;return`\n  <div class="trip-filters__filter">\n      <input id="filter-${n}" class="trip-filters__filter-input  visually-hidden"\n      type="radio" name="trip-filter" value="${n}" ${t?"checked":""} ${0===i?"disabled":""}>\n      <label class="trip-filters__filter-label" for="filter-everything">${n}</label>\n    </div>\n  `}(e,0===t))).join("");return`<form class="trip-filters" action="#" method="get">\n      ${t}\n  </form>`}(this.#Y)}}({filters:fe}),pe),de.init()})()})();
//# sourceMappingURL=bundle.703b9113b97f31017e29.js.map