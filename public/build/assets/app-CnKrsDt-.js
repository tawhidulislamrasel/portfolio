function Ap(i,e){return function(){return i.apply(e,arguments)}}const{toString:pg}=Object.prototype,{getPrototypeOf:Dr}=Object,{iterator:xo,toStringTag:Rp}=Symbol,eo=(({hasOwnProperty:i})=>(e,t)=>i.call(e,t))(Object.prototype),Cp=i=>typeof i=="string"&&(i==="__proto__"||i==="constructor"||i==="prototype"),Pp=(i,e,t)=>i===Object.prototype||!t&&e===null,mg=i=>{if(!Object.isExtensible(i))return!1;const e=Object.getOwnPropertyNames(i);return Object.getOwnPropertySymbols&&e.push(...Object.getOwnPropertySymbols(i)),e.every(t=>{if(Cp(t))return!1;const n=Object.getOwnPropertyDescriptor(i,t);return!!n&&n.configurable&&n.writable===!0})},to=(i,e)=>{let t=i;const n=[];for(;t!=null;){if(n.indexOf(t)!==-1)return!1;n.push(t);const r=Dr(t);if(Pp(t,r,t===i))return!1;if(eo(t,e))return!0;t=r}return!1},_g=(i,e)=>i!=null&&to(i,e)?i[e]:void 0,gg=i=>{if(i==null||typeof i!="object"&&typeof i!="function")return i;const e=Dr(i);if(e===null&&mg(i))return i;const t=Object.create(null),n=Object.create(null),r=[];let s=i;for(;s!=null&&r.indexOf(s)===-1;){r.push(s);const a=s===i?e:Dr(s);if(Pp(s,a,s===i))break;const o=Object.getOwnPropertyNames(s);Object.getOwnPropertySymbols&&o.push(...Object.getOwnPropertySymbols(s));for(const l of o)Cp(l)||eo(n,l)||(t[l]=i[l],n[l]=!0);s=a}return t},bf=(i=>e=>{const t=pg.call(e);return i[t]||(i[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Mi=i=>(i=i.toLowerCase(),e=>bf(e)===i),Kl=i=>e=>typeof e===i,{isArray:os}=Array,ls=Kl("undefined");function ha(i){return i!==null&&!ls(i)&&i.constructor!==null&&!ls(i.constructor)&&Gn(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const Dp=Mi("ArrayBuffer");function xg(i){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(i):e=i&&i.buffer&&Dp(i.buffer),e}const vg=Kl("string"),Gn=Kl("function"),Lp=Kl("number"),da=i=>i!==null&&typeof i=="object",Sg=i=>i===!0||i===!1,cl=i=>{if(!da(i))return!1;const e=Dr(i);return(e===null||e===Object.prototype||Dr(e)===null)&&!to(i,Rp)&&!to(i,xo)},Mg=i=>{if(!da(i)||ha(i))return!1;try{return Object.keys(i).length===0&&Object.getPrototypeOf(i)===Object.prototype}catch{return!1}},yg=Mi("Date"),Eg=Mi("File"),bg=i=>!!(i&&typeof i.uri<"u"),Tg=i=>i&&typeof i.getParts<"u",wg=Mi("Blob"),Ag=Mi("FileList"),Rg=Mi("Set"),Cg=i=>da(i)&&Gn(i.pipe);function Pg(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const bh=Pg(),Th=typeof bh.FormData<"u"?bh.FormData:void 0,Dg=i=>{if(!i)return!1;if(Th&&i instanceof Th)return!0;const e=Dr(i);if(!e||e===Object.prototype||!Gn(i.append))return!1;const t=bf(i);return t==="formdata"||t==="object"&&Gn(i.toString)&&i.toString()==="[object FormData]"},Lg=Mi("URLSearchParams"),[Ig,Ng,Ug,Og]=["ReadableStream","Request","Response","Headers"].map(Mi),Fg=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function vo(i,e,{allOwnKeys:t=!1}={}){if(i===null||typeof i>"u")return;let n,r;if(typeof i!="object"&&(i=[i]),os(i))for(n=0,r=i.length;n<r;n++)e.call(null,i[n],n,i);else{if(ha(i))return;const s=t?Object.getOwnPropertyNames(i):Object.keys(i),a=s.length;let o;for(n=0;n<a;n++)o=s[n],e.call(null,i[o],o,i)}}function Ip(i,e){if(ha(i))return null;e=e.toLowerCase();const t=Object.keys(i);let n=t.length,r;for(;n-- >0;)if(r=t[n],e===r.toLowerCase())return r;return null}const $r=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Np=i=>!ls(i)&&i!==$r;function ou(...i){const{caseless:e,skipUndefined:t}=Np(this)&&this||{},n={},r=(s,a)=>{if(a==="__proto__"||a==="constructor"||a==="prototype")return;const o=e&&typeof a=="string"&&Ip(n,a)||a,l=eo(n,o)?n[o]:void 0;cl(l)&&cl(s)?n[o]=ou(l,s):cl(s)?n[o]=ou({},s):os(s)?n[o]=s.slice():(!t||!ls(s))&&(n[o]=s)};for(let s=0,a=i.length;s<a;s++){const o=i[s];if(!o||ha(o)||(vo(o,r),typeof o!="object"||os(o)))continue;const l=Object.getOwnPropertySymbols(o);for(let c=0;c<l.length;c++){const u=l[c];Kg.call(o,u)&&r(o[u],u)}}return n}const Bg=(i,e,t,{allOwnKeys:n}={})=>(vo(e,(r,s)=>{t&&Gn(r)?Object.defineProperty(i,s,{__proto__:null,value:Ap(r,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(i,s,{__proto__:null,value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:n}),i),zg=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),kg=(i,e,t,n)=>{i.prototype=Object.create(e.prototype,n),Object.defineProperty(i.prototype,"constructor",{__proto__:null,value:i,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(i,"super",{__proto__:null,value:e.prototype}),t&&Object.assign(i.prototype,t)},Hg=(i,e,t,n)=>{let r,s,a;const o={};if(e=e||{},i==null)return e;do{for(r=Object.getOwnPropertyNames(i),s=r.length;s-- >0;)a=r[s],(!n||n(a,i,e))&&!o[a]&&(e[a]=i[a],o[a]=!0);i=t!==!1&&Dr(i)}while(i&&(!t||t(i,e))&&i!==Object.prototype);return e},Vg=(i,e,t)=>{i=String(i),(t===void 0||t>i.length)&&(t=i.length),t-=e.length;const n=i.indexOf(e,t);return n!==-1&&n===t},Gg=i=>{if(!i)return null;if(os(i))return i;let e=i.length;if(!Lp(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=i[e];return t},Wg=(i=>e=>i&&e instanceof i)(typeof Uint8Array<"u"&&Dr(Uint8Array)),Xg=(i,e)=>{const n=(i&&i[xo]).call(i);let r;for(;(r=n.next())&&!r.done;){const s=r.value;e.call(i,s[0],s[1])}},qg=(i,e)=>{let t;const n=[];for(;(t=i.exec(e))!==null;)n.push(t);return n},Yg=Mi("HTMLFormElement"),$g=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,n,r){return n.toUpperCase()+r}),{propertyIsEnumerable:Kg}=Object.prototype,Zg=Mi("RegExp"),Up=(i,e)=>{const t=Object.getOwnPropertyDescriptors(i),n={};vo(t,(r,s)=>{let a;(a=e(r,s,i))!==!1&&(n[s]=a||r)}),Object.defineProperties(i,n)},Jg=i=>{Up(i,(e,t)=>{if(Gn(i)&&["arguments","caller","callee"].includes(t))return!1;const n=i[t];if(Gn(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Qg=(i,e)=>{const t={},n=r=>{r.forEach(s=>{t[s]=!0})};return os(i)?n(i):n(String(i).split(e)),t},jg=()=>{},e0=(i,e)=>i!=null&&Number.isFinite(i=+i)?i:e;function t0(i){return!!(i&&Gn(i.append)&&i[Rp]==="FormData"&&i[xo])}const n0=i=>{const e=new WeakSet,t=n=>{if(da(n)){if(e.has(n))return;if(ha(n))return n;if(!("toJSON"in n)){e.add(n);let r;if(Rg(n)){r=[];for(const s of n){const a=t(s);!ls(a)&&r.push(a)}}else r=os(n)?[]:{},vo(n,(s,a)=>{const o=t(s);!ls(o)&&(r[a]=o)});return e.delete(n),r}}return n};return t(i)},i0=Mi("AsyncFunction"),r0=i=>i&&(da(i)||Gn(i))&&Gn(i.then)&&Gn(i.catch),Op=((i,e)=>i?setImmediate:e?((t,n)=>($r.addEventListener("message",({source:r,data:s})=>{r===$r&&s===t&&n.length&&n.shift()()},!1),r=>{n.push(r),$r.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",Gn($r.postMessage)),s0=typeof queueMicrotask<"u"?queueMicrotask.bind($r):typeof process<"u"&&process.nextTick||Op,Fp=i=>i!=null&&Gn(i[xo]),a0=i=>i!=null&&to(i,xo)&&Fp(i),O={isArray:os,isArrayBuffer:Dp,isBuffer:ha,isFormData:Dg,isArrayBufferView:xg,isString:vg,isNumber:Lp,isBoolean:Sg,isObject:da,isPlainObject:cl,isEmptyObject:Mg,isReadableStream:Ig,isRequest:Ng,isResponse:Ug,isHeaders:Og,isUndefined:ls,isDate:yg,isFile:Eg,isReactNativeBlob:bg,isReactNative:Tg,isBlob:wg,isRegExp:Zg,isFunction:Gn,isStream:Cg,isURLSearchParams:Lg,isTypedArray:Wg,isFileList:Ag,forEach:vo,merge:ou,extend:Bg,trim:Fg,stripBOM:zg,inherits:kg,toFlatObject:Hg,kindOf:bf,kindOfTest:Mi,endsWith:Vg,toArray:Gg,forEachEntry:Xg,matchAll:qg,isHTMLForm:Yg,hasOwnProperty:eo,hasOwnProp:eo,hasOwnInPrototypeChain:to,getSafeProp:_g,toSafeFlatObject:gg,reduceDescriptors:Up,freezeMethods:Jg,toObjectSet:Qg,toCamelCase:$g,noop:jg,toFiniteNumber:e0,findKey:Ip,global:$r,isContextDefined:Np,isSpecCompliantForm:t0,toJSONObject:n0,isAsyncFn:i0,isThenable:r0,setImmediate:Op,asap:s0,isIterable:Fp,isSafeIterable:a0},o0=O.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),l0=i=>{const e={};let t,n,r;return i&&i.split(`
`).forEach(function(a){r=a.indexOf(":"),t=a.substring(0,r).trim().toLowerCase(),n=a.substring(r+1).trim();const o=O.hasOwnProp(e,t);!t||o&&O.hasOwnProp(o0,t)||(t==="set-cookie"?o?e[t].push(n):e[t]=[n]:e[t]=o?e[t]+", "+n:n)}),e};function c0(i){let e=0,t=i.length;for(;e<t;){const n=i.charCodeAt(e);if(n!==9&&n!==32)break;e+=1}for(;t>e;){const n=i.charCodeAt(t-1);if(n!==9&&n!==32)break;t-=1}return e===0&&t===i.length?i:i.slice(e,t)}const u0=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),f0=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Tf(i,e){return O.isArray(i)?i.map(t=>Tf(t,e)):c0(String(i).replace(e,""))}const h0=i=>Tf(i,u0),d0=i=>Tf(i,f0);function Bp(i){const e=Object.create(null);return O.forEach(i.toJSON(),(t,n)=>{e[n]=d0(t)}),e}const wh=Symbol("internals");function xa(i){return i&&String(i).trim().toLowerCase()}function ul(i){return i===!1||i==null?i:O.isArray(i)?i.map(ul):h0(String(i))}function p0(i){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=t.exec(i);)e[n[1]]=n[2];return e}const m0=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function oc(i){let e=0,t=i.length;for(;e<t;){const n=i.charCodeAt(e);if(n!==9&&n!==32)break;e+=1}for(;t>e;){const n=i.charCodeAt(t-1);if(n!==9&&n!==32)break;t-=1}return e===0&&t===i.length?i:i.slice(e,t)}function _0(i){const e=i.length-1;if(e<1||i.charCodeAt(0)!==34||i.charCodeAt(e)!==34)return i;let t="";for(let n=1;n<e;n++){const r=i.charCodeAt(n);if(r===34||r===92&&(n+=1,n>=e))return i;t+=i[n]}return t}function g0(i){const e=Object.create(null),t=String(i);let n=0,r=!1,s=!1;function a(o){const l=oc(t.slice(n,o)),c=l.indexOf("=");if(c<1)return;const u=oc(l.slice(0,c));if(!m0.test(u))return;const h=u.toLowerCase();if(h==="__proto__"||h==="constructor"||h==="prototype")return;const f=oc(l.slice(c+1));e[h]=_0(f)}for(let o=0;o<t.length;o++){const l=t.charCodeAt(o);r?s?s=!1:l===92?s=!0:l===34&&(r=!1):l===34?r=!0:(l===44||l===59)&&(a(o),n=o+1)}return a(t.length),e}const x0=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function lc(i,e,t,n,r){if(O.isFunction(n))return n.call(this,e,t);if(r&&(e=t),!!O.isString(e)){if(O.isString(n))return e.indexOf(n)!==-1;if(O.isRegExp(n))return n.test(e)}}function v0(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function S0(i,e){const t=O.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(i,n+t,{__proto__:null,value:function(r,s,a){return this[n].call(this,e,r,s,a)},configurable:!0})})}let Tn=class{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function s(o,l,c){const u=xa(l);if(!u)return;const h=O.findKey(r,u);(!h||r[h]===void 0||c===!0||c===void 0&&r[h]!==!1)&&(r[h||l]=ul(o))}const a=(o,l)=>O.forEach(o,(c,u)=>s(c,u,l));if(O.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(O.isString(e)&&(e=e.trim())&&!x0(e))a(l0(e),t);else if(O.isObject(e)&&O.isSafeIterable(e)){let o=Object.create(null),l,c;for(const u of e){if(!O.isArray(u))throw new TypeError("Object iterator must return a key-value pair");c=u[0],O.hasOwnProp(o,c)?(l=o[c],o[c]=O.isArray(l)?[...l,u[1]]:[l,u[1]]):o[c]=u[1]}a(o,t)}else e!=null&&s(t,e,n);return this}get(e,t){if(e=xa(e),e){const n=O.findKey(this,e);if(n){const r=this[n];if(!t)return r;if(t===!0)return p0(r);if(O.isFunction(t))return t.call(this,r,n);if(O.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=xa(e),e){const n=O.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||lc(this,this[n],n,t)))}return!1}delete(e,t){const n=this;let r=!1;function s(a){if(a=xa(a),a){const o=O.findKey(n,a);o&&(!t||lc(n,n[o],o,t))&&(delete n[o],r=!0)}}return O.isArray(e)?e.forEach(s):s(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const s=t[n];(!e||lc(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const t=this,n={};return O.forEach(this,(r,s)=>{const a=O.findKey(n,s);if(a){t[a]=ul(r),delete t[s];return}const o=e?v0(s):String(s).trim();o!==s&&delete t[s],t[o]=ul(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return O.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&O.isArray(n)?n.join(", "):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){const e=this.get("set-cookie");return O.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return g0(e)}static concat(e,...t){const n=new this(e);return t.forEach(r=>n.set(r)),n}static accessor(e){const n=(this[wh]=this[wh]={accessors:{}}).accessors,r=this.prototype;function s(a){const o=xa(a);n[o]||(S0(r,a),n[o]=!0)}return O.isArray(e)?e.forEach(s):s(e),this}};Tn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);O.reduceDescriptors(Tn.prototype,({value:i},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>i,set(n){this[t]=n}}});O.freezeMethods(Tn);const Rl="[REDACTED ****]";function M0(i){if(O.hasOwnProp(i,"toJSON"))return!0;let e=Object.getPrototypeOf(i);for(;e&&e!==Object.prototype;){if(O.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function y0(i,e){const t=new Set(e.map(s=>String(s).toLowerCase())),n=[],r=s=>{if(s===null||typeof s!="object"||O.isBuffer(s))return s;if(n.indexOf(s)!==-1)return;s instanceof Tn&&(s=s.toJSON()),n.push(s);let a;if(O.isArray(s))a=[],s.forEach((o,l)=>{const c=r(o);O.isUndefined(c)||(a[l]=c)});else{if(!O.isPlainObject(s)&&M0(s))return n.pop(),s;a=Object.create(null);for(const[o,l]of Object.entries(s)){const c=t.has(o.toLowerCase())?Rl:r(l);O.isUndefined(c)||(a[o]=c)}}return n.pop(),a};return r(i)}function Ah(i){try{return String(i)}catch{return""}}function E0(i){return i.errors.map(t=>{try{return t&&t.message?Ah(t.message):Ah(t)}catch{return""}}).filter(Boolean).join("; ")||i.name||"AggregateError"}let ye=class zp extends Error{static from(e,t,n,r,s,a){let o=e.message;!o&&O.isArray(e.errors)&&e.errors.length&&(o=E0(e));const l=new zp(o,t||e.code,n,r,s);return Object.defineProperty(l,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),l.name=e.name,e.status!=null&&l.status==null&&(l.status=e.status),a&&Object.assign(l,a),l}constructor(e,t,n,r,s){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){const e=this.config,t=e&&O.hasOwnProp(e,"redact")?e.redact:void 0,n=O.isArray(t)&&t.length>0?y0(e,t):O.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n,code:this.code,status:this.status}}};ye.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";ye.ERR_BAD_OPTION="ERR_BAD_OPTION";ye.ECONNABORTED="ECONNABORTED";ye.ETIMEDOUT="ETIMEDOUT";ye.ECONNREFUSED="ECONNREFUSED";ye.ERR_NETWORK="ERR_NETWORK";ye.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";ye.ERR_DEPRECATED="ERR_DEPRECATED";ye.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";ye.ERR_BAD_REQUEST="ERR_BAD_REQUEST";ye.ERR_CANCELED="ERR_CANCELED";ye.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";ye.ERR_INVALID_URL="ERR_INVALID_URL";ye.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const b0=null,kp=100;function lu(i){return O.isPlainObject(i)||O.isArray(i)}function Hp(i){return O.endsWith(i,"[]")?i.slice(0,-2):i}function cc(i,e,t){return i?i.concat(e).map(function(r,s){return r=Hp(r),!t&&s?"["+r+"]":r}).join(t?".":""):e}function T0(i){return O.isArray(i)&&!i.some(lu)}const w0=O.toFlatObject(O,{},null,function(e){return/^is[A-Z]/.test(e)});function Zl(i,e,t){if(!O.isObject(i))throw new TypeError("target must be an object");e=e||new FormData;const n=(S,T)=>{const x=O.getSafeProp(t,S);return O.isUndefined(x)?T:x},r=n("metaTokens",!0),s=n("visitor")||g,a=n("dots",!1),o=n("indexes",!1),l=n("Blob")||typeof Blob<"u"&&Blob,c=n("maxDepth",kp),u=l&&O.isSpecCompliantForm(e),h=[];if(!O.isFunction(s))throw new TypeError("visitor must be a function");function f(S){if(S===null)return"";if(O.isDate(S))return S.toISOString();if(O.isBoolean(S))return S.toString();if(!u&&O.isBlob(S))throw new ye("Blob is not supported. Use a Buffer instead.");if(O.isArrayBuffer(S)||O.isTypedArray(S)){if(u&&typeof l=="function")return new l([S]);throw new ye("Blob is not supported. Use a Buffer instead.",ye.ERR_NOT_SUPPORT)}return S}function d(S){if(S>c)throw new ye("Object is too deeply nested ("+S+" levels). Max depth: "+c,ye.ERR_FORM_DATA_DEPTH_EXCEEDED)}function _(S,T){if(c===1/0)return JSON.stringify(S);const x=[];return JSON.stringify(S,function(E,b){if(!O.isObject(b))return b;for(;x.length&&x[x.length-1]!==this;)x.pop();return x.push(b),d(T+x.length-1),b})}function g(S,T,x){let y=S;if(O.isReactNative(e)&&O.isReactNativeBlob(S))return e.append(cc(x,T,a),f(S)),!1;if(S&&!x&&typeof S=="object"){if(O.endsWith(T,"{}"))T=r?T:T.slice(0,-2),S=_(S,1);else if(O.isArray(S)&&T0(S)||(O.isFileList(S)||O.endsWith(T,"[]"))&&(y=O.toArray(S)))return T=Hp(T),y.forEach(function(b,v){!(O.isUndefined(b)||b===null)&&e.append(o===!0?cc([T],v,a):o===null?T:T+"[]",f(b))}),!1}return lu(S)?!0:(e.append(cc(x,T,a),f(S)),!1)}const m=Object.assign(w0,{defaultVisitor:g,convertValue:f,isVisitable:lu});function p(S,T,x=0){if(!O.isUndefined(S)){if(d(x),h.indexOf(S)!==-1)throw new Error("Circular reference detected in "+T.join("."));h.push(S),O.forEach(S,function(E,b){(!(O.isUndefined(E)||E===null)&&s.call(e,E,O.isString(b)?b.trim():b,T,m))===!0&&p(E,T?T.concat(b):[b],x+1)}),h.pop()}}if(!O.isObject(i))throw new TypeError("data must be an object");return p(i),e}function Rh(i){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(i).replace(/[!'()~]|%20/g,function(n){return e[n]})}function wf(i,e){this._pairs=[],i&&Zl(i,this,e)}const Vp=wf.prototype;Vp.append=function(e,t){this._pairs.push([e,t])};Vp.toString=function(e){const t=e?n=>e.call(this,n,Rh):Rh;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function A0(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Gp(i,e,t){if(!e)return i;i=i||"";const n=O.isFunction(t)?{serialize:t}:t,r=O.getSafeProp(n,"encode")||A0,s=O.getSafeProp(n,"serialize");let a;if(s?a=s(e,n):a=O.isURLSearchParams(e)?e.toString():new wf(e,n).toString(r),a){const o=i.indexOf("#");o!==-1&&(i=i.slice(0,o)),i+=(i.indexOf("?")===-1?"?":"&")+a}return i}const va=Symbol("internals");function Wp(i){return i?i.length:0}function Ch(i){if(i)for(;i.length&&i[i.length-1]===null;)i.pop()}function Sa(i,e){const t=i.handlers,n=Wp(t);t!==e.handlersRef?(e.handlersRef=t,e.handlerEntries.clear()):n!==e.handlersLength&&(n?e.handlerEntries.forEach(function(s,a){t[s.index]!==s.handler&&e.handlerEntries.delete(a)}):e.handlerEntries.clear()),e.handlersLength=n}class Ph{constructor(){this.handlers=[],this[va]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(e,t,n){const r={fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null},s=this[va];this.handlers==null&&(this.handlers=[]),Sa(this,s);const a=s.nextId++;return this.handlers.push(r),s.handlerEntries.set(a,{handler:r,index:this.handlers.length-1}),s.handlersLength=this.handlers.length,a}eject(e){const t=this[va];Sa(this,t);const n=t.handlerEntries.get(e);if(n){if(t.handlerEntries.delete(e),this.handlers[n.index]!==n.handler)return;this.handlers[n.index]=null,t.iterationDepth||(Ch(this.handlers),t.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],Sa(this,this[va]))}forEach(e){const t=this[va];Sa(this,t),t.iterationDepth++;try{O.forEach(this.handlers,function(r){r!==null&&e(r)})}finally{--t.iterationDepth||(Sa(this,t),Ch(this.handlers),t.handlersLength=Wp(this.handlers))}}}const Af={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},R0=typeof URLSearchParams<"u"?URLSearchParams:wf,C0=typeof FormData<"u"?FormData:null,P0=typeof Blob<"u"?Blob:null,D0={isBrowser:!0,classes:{URLSearchParams:R0,FormData:C0,Blob:P0},protocols:["http","https","file","blob","url","data"]},Rf=typeof window<"u"&&typeof document<"u",cu=typeof navigator=="object"&&navigator||void 0,L0=Rf&&(!cu||["ReactNative","NativeScript","NS"].indexOf(cu.product)<0),I0=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",N0=Rf&&window.location.href||"http://localhost",U0=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Rf,hasStandardBrowserEnv:L0,hasStandardBrowserWebWorkerEnv:I0,navigator:cu,origin:N0},Symbol.toStringTag,{value:"Module"})),ln={...U0,...D0};function O0(i,e){return Zl(i,new ln.classes.URLSearchParams,{visitor:function(t,n,r,s){return ln.isNode&&O.isBuffer(t)?(this.append(n,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}const Dh=kp;function Xp(i){if(i>Dh)throw new ye("FormData field is too deeply nested ("+i+" levels). Max depth: "+Dh,ye.ERR_FORM_DATA_DEPTH_EXCEEDED)}function F0(i){const e=[],t=/[^.[\]]+|\[([^.[\]]*)]/g;let n;for(;(n=t.exec(i))!==null;)Xp(e.length),e.push(n[0]==="[]"?"":n[1]||n[0]);return e}function B0(i){const e={},t=Object.keys(i);let n;const r=t.length;let s;for(n=0;n<r;n++)s=t[n],e[s]=i[s];return e}function qp(i){function e(t,n,r,s){Xp(s);let a=t[s++];if(a==="__proto__")return!0;const o=Number.isFinite(+a),l=s>=t.length;return a=!a&&O.isArray(r)?r.length:a,l?(O.hasOwnProp(r,a)?r[a]=O.isArray(r[a])?r[a].concat(n):[r[a],n]:r[a]=n,!o):((!O.hasOwnProp(r,a)||!O.isObject(r[a]))&&(r[a]=[]),e(t,n,r[a],s)&&O.isArray(r[a])&&(r[a]=B0(r[a])),!o)}if(O.isFormData(i)&&O.isFunction(i.entries)){const t={};return O.forEachEntry(i,(n,r)=>{e(F0(n),r,t,0)}),t}return null}const Yp=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),ys=(i,e)=>i!=null&&O.hasOwnProp(i,e)?i[e]:void 0;function z0(i,e,t){if(O.isString(i))try{return(e||JSON.parse)(i),O.trim(i)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(i)}const So={transitional:Af,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,s=O.isObject(e);if(s&&O.isHTMLForm(e)&&(e=new FormData(e)),O.isFormData(e))return r?JSON.stringify(qp(e)):e;if(O.isArrayBuffer(e)||O.isBuffer(e)||O.isStream(e)||O.isFile(e)||O.isBlob(e)||O.isReadableStream(e))return e;if(O.isArrayBufferView(e))return e.buffer;if(O.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){const l=ys(this,"formSerializer");if(n.indexOf("application/x-www-form-urlencoded")>-1)return O0(e,l).toString();if((o=O.isFileList(e))||n.indexOf("multipart/form-data")>-1){const c=ys(this,"env"),u=c&&c.FormData;return Zl(o?{"files[]":e}:e,u&&new u,l)}}return s||r?(t.setContentType("application/json",!1),z0(e)):e}],transformResponse:[function(e){const t=ys(this,"transitional")||So.transitional,n=t&&t.forcedJSONParsing,r=ys(this,"responseType"),s=r==="json";if(O.isResponse(e)||O.isReadableStream(e))return e;if(e&&O.isString(e)&&(n&&!r||s)){const o=!(t&&t.silentJSONParsing)&&s;try{return JSON.parse(e,ys(this,"parseReviver"))}catch(l){if(o)throw l.name==="SyntaxError"?ye.from(l,ye.ERR_BAD_RESPONSE,this,null,ys(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ln.classes.FormData,Blob:ln.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};O.forEach(Yp,i=>{So.headers[i]={}});function uc(i,e){const t=this||So,n=e||t,r=Tn.from(n.headers);let s=n.data;return O.forEach(i,function(o){s=o.call(t,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function $p(i){return!!(i&&i.__CANCEL__)}let Mo=class extends ye{constructor(e,t,n){super(e??"canceled",ye.ERR_CANCELED,t,n),this.name="CanceledError",this.__CANCEL__=!0}};function Kp(i,e,t){const n=t.config.validateStatus;!t.status||!n||n(t.status)?i(t):e(new ye("Request failed with status code "+t.status,t.status>=400&&t.status<500?ye.ERR_BAD_REQUEST:ye.ERR_BAD_RESPONSE,t.config,t.request,t))}const k0=/[\t\n\r]/g;function Zp(i){if(typeof i!="string")return i;let e=0;for(;e<i.length&&i.charCodeAt(e)<=32;)e++;return i.slice(e).replace(k0,"")}function fc(i){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(i);return e&&e[1]||""}function H0(i,e){i=i||10;const t=new Array(i),n=new Array(i);let r=0,s=0,a;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=n[s];a||(a=c),t[r]=l,n[r]=c;let h=s,f=0;for(;h!==r;)f+=t[h++],h=h%i;if(r=(r+1)%i,r===s&&(s=(s+1)%i),c-a<e)return;const d=u&&c-u;return d?Math.round(f*1e3/d):void 0}}function V0(i,e){let t=0,n=1e3/e,r,s;const a=(u,h=Date.now())=>{t=h,r=null,s&&(clearTimeout(s),s=null),i(...u)};return[(...u)=>{const h=Date.now(),f=h-t;f>=n?a(u,h):(r=u,s||(s=setTimeout(()=>{s=null,a(r)},n-f)))},()=>r&&a(r),(...u)=>a(u)]}const Cl=(i,e,t=3)=>{let n=0;const r=H0(50,250);return V0(s=>{if(!s||!O.isNumber(s.loaded))return;const a=s.loaded,o=s.lengthComputable?s.total:void 0,l=Math.max(0,o!=null?Math.min(a,o):a),c=Math.max(0,l-n),u=r(c);n=Math.max(n,l);const h={loaded:l,total:o,progress:o?l/o:void 0,bytes:c,rate:u||void 0,estimated:u&&o?(o-l)/u:void 0,event:s,lengthComputable:o!=null,[e?"download":"upload"]:!0};i(h)},t)},Lh=(i,e)=>{const t=i!=null;return[n=>e[0]({lengthComputable:t,total:i,loaded:n}),e[1]]},Ih=(i,e=O.asap)=>(...t)=>e(()=>i(...t)),G0=ln.hasStandardBrowserEnv?((i,e)=>t=>(t=new URL(t,ln.origin),i.protocol===t.protocol&&i.host===t.host&&(e||i.port===t.port)))(new URL(ln.origin),ln.navigator&&/(msie|trident)/i.test(ln.navigator.userAgent)):()=>!0,W0=ln.hasStandardBrowserEnv?{write(i,e,t,n,r,s,a){if(typeof document>"u")return;const o=[`${i}=${encodeURIComponent(e)}`];O.isNumber(t)&&o.push(`expires=${new Date(t).toUTCString()}`),O.isString(n)&&o.push(`path=${n}`),O.isString(r)&&o.push(`domain=${r}`),s===!0&&o.push("secure"),O.isString(a)&&o.push(`SameSite=${a}`),document.cookie=o.join("; ")},read(i){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let t=0;t<e.length;t++){const n=e[t].replace(/^\s+/,""),r=n.indexOf("=");if(r!==-1&&n.slice(0,r)===i)try{return decodeURIComponent(n.slice(r+1))}catch{return n.slice(r+1)}}return null},remove(i){this.write(i,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function X0(i){return typeof i!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function q0(i,e){if(!e)return i;let t=i.length;for(;t>0&&i.charCodeAt(t-1)===47;)t--;return i.slice(0,t)+"/"+e.replace(/^\/+/,"")}const Y0=/^https?:(?!\/\/)/i;function $0(i){return i&&i.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,t,n="")=>`${t}${n}${Rl}`)}function K0(i){const e=i.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${Rl}@`),t=e.indexOf("#"),r=(t===-1?e:e.slice(0,t)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${Rl}`);return t===-1?r:`${r}#${$0(e.slice(t+1))}`}function Nh(i,e){if(typeof i=="string"){const t=Zp(i);if(Y0.test(t))throw new ye(`Invalid URL ${JSON.stringify(K0(t))}: missing "//" after protocol`,ye.ERR_INVALID_URL,e)}}function Jp(i,e,t,n){Nh(e,n);let r=!X0(e);return i&&(r||t===!1)?(Nh(i,n),q0(i,e)):e}const Uh=i=>i instanceof Tn?{...i}:i,Z0=i=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(i).concat(Object.getOwnPropertySymbols(i).filter(e=>Object.getOwnPropertyDescriptor(i,e).enumerable)):Object.keys(i);function cs(i,e){i=i||{},e=e||{};const t=Object.create(null);Object.defineProperty(t,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function n(u,h,f,d){return O.isPlainObject(u)&&O.isPlainObject(h)?O.merge.call({caseless:d},u,h):O.isPlainObject(h)?O.merge({},h):O.isArray(h)?h.slice():h}function r(u,h,f,d){if(O.isUndefined(h)){if(!O.isUndefined(u))return n(void 0,u,f,d)}else return n(u,h,f,d)}function s(u,h){if(!O.isUndefined(h))return n(void 0,h)}function a(u,h){if(O.isUndefined(h)){if(!O.isUndefined(u))return n(void 0,u)}else return n(void 0,h)}function o(u){const h=O.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!O.isUndefined(h))if(O.isPlainObject(h)){if(O.hasOwnProp(h,u))return h[u]}else return;const f=O.hasOwnProp(i,"transitional")?i.transitional:void 0;if(O.isPlainObject(f)&&O.hasOwnProp(f,u))return f[u]}function l(u,h,f){if(O.hasOwnProp(e,f))return n(u,h);if(O.hasOwnProp(i,f))return n(void 0,u)}const c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutErrorMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,allowedSocketPaths:a,responseEncoding:a,validateStatus:l,headers:(u,h,f)=>r(Uh(u),Uh(h),f,!0)};return O.forEach(Z0({...i,...e}),function(h){if(h==="__proto__"||h==="constructor"||h==="prototype")return;const f=O.hasOwnProp(c,h)?c[h]:r,d=O.hasOwnProp(i,h)?i[h]:void 0,_=O.hasOwnProp(e,h)?e[h]:void 0,g=f(d,_,h);O.isUndefined(g)&&f!==l||(t[h]=g)}),O.hasOwnProp(e,"validateStatus")&&O.isUndefined(e.validateStatus)&&o("validateStatusUndefinedResolves")===!1&&(O.hasOwnProp(i,"validateStatus")?t.validateStatus=n(void 0,i.validateStatus):delete t.validateStatus),t}const J0=["content-type","content-length"];function Q0(i,e,t){if(t!=="content-only"){i.set(e);return}Object.entries(e||{}).forEach(([n,r])=>{J0.includes(n.toLowerCase())&&i.set(n,r)})}const j0=i=>encodeURIComponent(i).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16)));function Qp(i){const e=cs({},i),t=f=>O.hasOwnProp(e,f)?e[f]:void 0,n=t("data");let r=t("withXSRFToken");const s=t("xsrfHeaderName"),a=t("xsrfCookieName");let o=t("headers");const l=t("auth"),c=t("baseURL"),u=t("allowAbsoluteUrls"),h=t("url");if(e.headers=o=Tn.from(o),e.url=Gp(Jp(c,h,u,e),t("params"),t("paramsSerializer")),l){const f=O.getSafeProp(l,"username")||"",d=O.getSafeProp(l,"password")||"";try{o.set("Authorization","Basic "+btoa(f+":"+(d?j0(d):"")))}catch(_){throw ye.from(_,ye.ERR_BAD_OPTION_VALUE,i)}}if(O.isFormData(n)){const f=O.getSafeProp(n,"getHeaders");ln.hasStandardBrowserEnv||ln.hasStandardBrowserWebWorkerEnv||O.isReactNative(n)?o.setContentType(void 0):O.isFunction(f)&&Q0(o,f.call(n),t("formDataHeaderPolicy"))}if(ln.hasStandardBrowserEnv&&(O.isFunction(r)&&(r=r(e)),r===!0||r==null&&G0(e.url))){const d=s&&a&&W0.read(a);d&&o.set(s,d)}return e}const ex=typeof XMLHttpRequest<"u",tx=ex&&function(i){return new Promise(function(t,n){const r=Qp(i);let s=r.data;const a=Tn.from(r.headers).normalize();let{responseType:o,onUploadProgress:l,onDownloadProgress:c}=r,u,h,f,d,_,g;function m(){d&&d(),_&&_(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(r.method.toUpperCase(),r.url,!0),p.timeout=r.timeout;function S(x){if(!p)return;if(p.status===0&&(fc(Zp(r.url))||fc(ln.origin))!=="file"&&!(p.responseURL&&p.responseURL.startsWith("file:"))){n(new ye("Request aborted",ye.ECONNABORTED,i,p)),m(),p=null;return}try{x?g&&g(x):_&&_()}catch(v){setTimeout(()=>{throw v})}if(!p)return;const y=Tn.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),b={data:!o||o==="text"||o==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:y,config:i,request:p};Kp(function(w){t(w),m()},function(w){n(w),m()},b),p=null}"onloadend"in p?p.onloadend=S:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.startsWith("file:"))||setTimeout(S)},p.onabort=function(){p&&(n(new ye("Request aborted",ye.ECONNABORTED,i,p)),m(),p=null)},p.onerror=function(y){const E=y&&y.message?y.message:"Network Error",b=new ye(E,ye.ERR_NETWORK,i,p);b.event=y||null,n(b),m(),p=null},p.ontimeout=function(){let y=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const E=r.transitional||Af;r.timeoutErrorMessage&&(y=r.timeoutErrorMessage),n(new ye(y,E.clarifyTimeoutError?ye.ETIMEDOUT:ye.ECONNABORTED,i,p)),m(),p=null},s===void 0&&a.setContentType(null),"setRequestHeader"in p&&O.forEach(Bp(a),function(y,E){p.setRequestHeader(E,y)}),O.isUndefined(r.withCredentials)||(p.withCredentials=!!r.withCredentials),o&&o!=="json"&&(p.responseType=r.responseType),c&&([f,_,g]=Cl(c,!0),p.addEventListener("progress",f)),l&&p.upload&&([h,d]=Cl(l),p.upload.addEventListener("progress",h),p.upload.addEventListener("loadend",d)),(r.cancelToken||r.signal)&&(u=x=>{p&&(n(!x||x.type?new Mo(null,i,p):x),p.abort(),m(),p=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const T=fc(r.url);if(T&&!ln.protocols.includes(T)){n(new ye("Unsupported protocol "+T+":",ye.ERR_BAD_REQUEST,i)),m();return}p.send(s||null)})},nx=(i,e)=>{if(i=i?i.filter(Boolean):[],!e&&!i.length)return;const t=new AbortController;let n=!1;const r=function(l){if(!n){n=!0,a();const c=l instanceof Error?l:this.reason;t.abort(c instanceof ye?c:new Mo(c instanceof Error?c.message:c))}};let s=e&&setTimeout(()=>{s=null,r(new ye(`timeout of ${e}ms exceeded`,ye.ETIMEDOUT))},e);const a=()=>{i&&(s&&clearTimeout(s),s=null,i.forEach(l=>{l.unsubscribe?l.unsubscribe(r):l.removeEventListener("abort",r)}),i=null)};i.forEach(l=>{if(!n){if(l.aborted){r.call(l);return}l.addEventListener("abort",r,{once:!0})}});const{signal:o}=t;return o.unsubscribe=()=>O.asap(a),o},ix=function*(i,e){let t=i.byteLength;if(t<e){yield i;return}let n=0,r;for(;n<t;)r=n+e,yield i.slice(n,r),n=r},rx=async function*(i,e){for await(const t of sx(i))yield*ix(t,e)},sx=async function*(i){if(i[Symbol.asyncIterator]){yield*i;return}const e=i.getReader();try{for(;;){const{done:t,value:n}=await e.read();if(t)break;yield n}}finally{await e.cancel()}},Oh=(i,e,t,n)=>{const r=rx(i,e);let s=0,a,o=l=>{a||(a=!0,n&&n(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){o(),l.close();return}let h=u.byteLength;if(t){let f=s+=h;t(f)}l.enqueue(new Uint8Array(u))}catch(c){throw o(c),c}},cancel(l){return o(l),r.return()}},{highWaterMark:2})},Fh=i=>i>=48&&i<=57||i>=65&&i<=70||i>=97&&i<=102,jp=(i,e,t)=>e+2<t&&Fh(i.charCodeAt(e+1))&&Fh(i.charCodeAt(e+2)),Bh=i=>i<=57?i-48:(i&223)-55,ax=i=>i>=65&&i<=90||i>=97&&i<=122||i>=48&&i<=57||i===43||i===47||i===45||i===95,ox=i=>i===9||i===10||i===12||i===13||i===32,lx=i=>{const e=Math.floor(i/4),t=i%4;return e*3+(t===2?1:t===3?2:0)},cx=i=>{const e=i.length;let t=0;return e>0&&i.charCodeAt(e-1)===61&&(t++,e>1&&i.charCodeAt(e-2)===61&&t++),Math.floor((e-t)*3/4)},ux=i=>{const e=i.length;let t=0,n=0,r=!1;for(let s=0;s<e;s++){let a=i.charCodeAt(s);if(a===37&&jp(i,s,e)&&(a=Bh(i.charCodeAt(s+1))*16+Bh(i.charCodeAt(s+2)),s+=2),!ox(a)){if(a===61){n++;continue}if(!ax(a)||n>0){r=!0;continue}t++}}return r||n>2||n>0&&(t+n)%4!==0||t%4===1?cx(i):lx(t)},fx=(i,e)=>{if(!i||typeof i!="string"||!i.startsWith("data:"))return 0;const t=i.indexOf(",");if(t<0)return 0;const n=i.slice(5,t),r=i.slice(t+1);if(/;base64/i.test(n))return e(r);let a=0;for(let o=0,l=r.length;o<l;o++){const c=r.charCodeAt(o);if(c===37&&jp(r,o,l))a+=1,o+=2;else if(c<128)a+=1;else if(c<2048)a+=2;else if(c>=55296&&c<=56319&&o+1<l){const u=r.charCodeAt(o+1);u>=56320&&u<=57343?(a+=4,o++):a+=3}else a+=3}return a};function hx(i){const e=typeof i=="string"?i.indexOf("#"):-1;return fx(e===-1?i:i.slice(0,e),ux)}const Cf="1.20.0",zh=64*1024,dx={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:To}=O,px=i=>encodeURIComponent(i).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),kh=i=>{if(!O.isString(i))return i;try{return decodeURIComponent(i)}catch{return i}},Hh=(i,...e)=>{try{return!!i(...e)}catch{return!1}},mx=i=>{const e=i.indexOf("://");let t=i;return e!==-1&&(t=t.slice(e+3)),t.includes("@")||t.includes(":")},_x=i=>{const e=O.global!==void 0&&O.global!==null?O.global:globalThis,{ReadableStream:t,TextEncoder:n}=e;i=O.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},i);const{fetch:r,Request:s,Response:a}=i,o=r?To(r):typeof fetch=="function",l=To(s),c=To(a);if(!o)return!1;const u=o&&To(t),h=o&&(typeof n=="function"?(p=>S=>p.encode(S))(new n):async p=>new Uint8Array(await new s(p).arrayBuffer())),f=l&&u&&Hh(()=>{let p=!1;const S=new s(ln.origin,{body:new t,method:"POST",get duplex(){return p=!0,"half"}}),T=S.headers.has("Content-Type");return S.body!=null&&S.body.cancel(),p&&!T}),d=c&&u&&Hh(()=>O.isReadableStream(new a("").body)),_={stream:d&&(p=>p.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!_[p]&&(_[p]=(S,T)=>{let x=S&&S[p];if(x)return x.call(S);throw new ye(`Response type '${p}' is not supported`,ye.ERR_NOT_SUPPORT,T)})});const g=async p=>{if(p==null)return 0;if(O.isBlob(p))return p.size;if(O.isSpecCompliantForm(p))return(await new s(ln.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(O.isArrayBufferView(p)||O.isArrayBuffer(p))return p.byteLength;if(O.isURLSearchParams(p)&&(p=p+""),O.isString(p))return(await h(p)).byteLength},m=async(p,S)=>{const T=O.toFiniteNumber(p.getContentLength());return T??g(S)};return async p=>{let{url:S,method:T,data:x,signal:y,cancelToken:E,timeout:b,onDownloadProgress:v,onUploadProgress:w,responseType:R,headers:L,withCredentials:D="same-origin",fetchOptions:H,maxContentLength:I,maxBodyLength:z,maxRedirects:Z}=Qp(p);const B=O.isNumber(I)&&I>-1,ee=O.isNumber(z)&&z>-1,$=G=>O.hasOwnProp(p,G)?p[G]:void 0;let C=r||fetch;R=R?(R+"").toLowerCase():"text";let j=nx([y,E&&E.toAbortSignal()],b),he=null;const Ee=j&&j.unsubscribe&&(()=>{j.unsubscribe()});let ke,Be=null;const Xe=()=>new ye("Request body larger than maxBodyLength limit",ye.ERR_BAD_REQUEST,p,he);try{let G;const J=$("auth");if(J){const ve=O.getSafeProp(J,"username")||"",Ke=O.getSafeProp(J,"password")||"";G={username:ve,password:Ke}}if(mx(S)){const ve=new URL(S,ln.origin);if(!G&&(ve.username||ve.password)){const Ke=kh(ve.username),mt=kh(ve.password);G={username:Ke,password:mt}}(ve.username||ve.password)&&(ve.username="",ve.password="",S=ve.href)}if(G&&(L.delete("authorization"),L.set("Authorization","Basic "+btoa(px((G.username||"")+":"+(G.password||""))))),B&&typeof S=="string"&&S.startsWith("data:")&&hx(S)>I)throw new ye("maxContentLength size of "+I+" exceeded",ye.ERR_BAD_RESPONSE,p,he);if(ee&&T!=="get"&&T!=="head"){const ve=await g(x);if(typeof ve=="number"&&isFinite(ve)&&(ke=ve,ve>z))throw Xe()}const de=ee&&(O.isReadableStream(x)||O.isStream(x)),He=(ve,Ke,mt)=>Oh(ve,zh,Ge=>{if(ee&&Ge>z)throw Be=Xe();Ke&&Ke(Ge)},mt);if(f&&T!=="get"&&T!=="head"&&(w||de)){if(ke=ke??await m(L,x),ke!==0||de){let ve=new s(S,{method:"POST",body:x,duplex:"half"}),Ke;if(O.isFormData(x)&&(Ke=ve.headers.get("content-type"))&&L.setContentType(Ke),ve.body){const[mt,Ge]=w&&Lh(ke,Cl(Ih(w)))||[];x=He(ve.body,mt,Ge)}}}else if(de&&!l&&u&&T!=="get"&&T!=="head")x=He(x);else if(de&&l&&!f&&T!=="get"&&T!=="head")throw new ye("Stream request bodies are not supported by the current fetch implementation",ye.ERR_NOT_SUPPORT,p,he);O.isString(D)||(D=D?"include":"omit");const me=l&&"credentials"in s.prototype;if(O.isFormData(x)){const ve=L.getContentType();ve&&/^multipart\/form-data/i.test(ve)&&!/boundary=/i.test(ve)&&L.delete("content-type")}L.set("User-Agent","axios/"+Cf,!1);const Re=H==null?H:Object.assign(Object.create(null),H);Re&&(delete Re.body,delete Re.headers,delete Re.method,delete Re.signal,delete Re.duplex,delete Re.credentials);const Le=Object.assign(Object.create(null),Re,{signal:j,method:T.toUpperCase(),headers:Bp(L.normalize()),body:x,duplex:"half",credentials:me?D:void 0});l&&(O.forEach(dx,(ve,Ke)=>{Le[Ke]===void 0&&(Le[Ke]=ve)}),Le.signal===void 0&&(Le.signal=null),Le.body===void 0&&(Le.body=null)),Z===0&&(Le.redirect="manual",Re&&(Re.redirect="manual")),he=l&&new s(S,Le);let we=await(l?C(he,Re):C(S,Le));const qe=Tn.from(we.headers);if(B){const ve=O.toFiniteNumber(qe.getContentLength());if(ve!=null&&ve>I)throw new ye("maxContentLength size of "+I+" exceeded",ye.ERR_BAD_RESPONSE,p,he)}const Je=d&&(R==="stream"||R==="response");if(d&&we.body&&(v||B||Je&&Ee)){const ve={};["status","statusText","headers"].forEach(gt=>{ve[gt]=we[gt]});const Ke=O.toFiniteNumber(qe.getContentLength()),[mt,Ge]=v&&Lh(Ke,Cl(Ih(v),!0))||[];let dt=0;const F=gt=>{if(B&&(dt=gt,dt>I))throw new ye("maxContentLength size of "+I+" exceeded",ye.ERR_BAD_RESPONSE,p,he);mt&&mt(gt)};we=new a(Oh(we.body,zh,F,()=>{Ge&&Ge(),Ee&&Ee()}),ve)}R=R||"text";let V=await _[O.findKey(_,R)||"text"](we,p);if(B&&!d&&!Je){let ve;if(V!=null&&(typeof V.byteLength=="number"?ve=V.byteLength:typeof V.size=="number"?ve=V.size:typeof V=="string"&&(ve=typeof n=="function"?new n().encode(V).byteLength:V.length)),typeof ve=="number"&&ve>I)throw new ye("maxContentLength size of "+I+" exceeded",ye.ERR_BAD_RESPONSE,p,he)}return!Je&&Ee&&Ee(),await new Promise((ve,Ke)=>{Kp(ve,Ke,{data:V,headers:Tn.from(we.headers),status:we.status,statusText:we.statusText,config:p,request:he})})}catch(G){if(Ee&&Ee(),j&&j.aborted&&j.reason instanceof ye){const J=j.reason;throw J.config=p,he&&(J.request=he),G!==J&&Object.defineProperty(J,"cause",{__proto__:null,value:G,writable:!0,enumerable:!1,configurable:!0}),J}if(Be)throw he&&!Be.request&&(Be.request=he),Be;if(G instanceof ye)throw he&&!G.request&&(G.request=he),G;if(G&&G.name==="TypeError"&&/Load failed|fetch/i.test(G.message)){const J=new ye("Network Error",ye.ERR_NETWORK,p,he,G&&G.response);throw Object.defineProperty(J,"cause",{__proto__:null,value:G.cause||G,writable:!0,enumerable:!1,configurable:!0}),J}throw ye.from(G,G&&G.code,p,he,G&&G.response)}}},gx=new Map,em=i=>{let e=i&&i.env||{};const{fetch:t,Request:n,Response:r}=e,s=[n,r,t];let a=s.length,o=a,l,c,u=gx;for(;o--;)l=s[o],c=u.get(l),c===void 0&&u.set(l,c=o?new Map:_x(e)),u=c;return c};em();const Pf={http:b0,xhr:tx,fetch:{get:em}};O.forEach(Pf,(i,e)=>{if(i){try{Object.defineProperty(i,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(i,"adapterName",{__proto__:null,value:e})}});const Vh=i=>`- ${i}`,xx=i=>O.isFunction(i)||i===null||i===!1;function vx(i,e){i=O.isArray(i)?i:[i];const{length:t}=i;let n,r;const s={};for(let a=0;a<t;a++){n=i[a];let o;if(r=n,!xx(n)&&(r=Pf[(o=String(n)).toLowerCase()],r===void 0))throw new ye(`Unknown adapter '${o}'`);if(r&&(O.isFunction(r)||(r=r.get(e))))break;s[o||"#"+a]=r}if(!r){const a=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=t?a.length>1?`since :
`+a.map(Vh).join(`
`):" "+Vh(a[0]):"as no adapter specified";throw new ye("There is no suitable adapter to dispatch the request "+o,ye.ERR_NOT_SUPPORT)}return r}const tm={getAdapter:vx,adapters:Pf};function hc(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new Mo(null,i)}function dc(i){const e=O.toSafeFlatObject(i);return hc(e),e.headers=Tn.from(O.getSafeProp(e,"headers")),e.data=uc.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),tm.getAdapter(e.adapter||So.adapter,e)(e).then(function(r){hc(e),e.response=r;try{r.data=uc.call(e,e.transformResponse,r)}finally{delete e.response}return r.headers=Tn.from(r.headers),r},function(r){if(!$p(r)&&(hc(e),r&&r.response)){e.response=r.response;try{r.response.data=uc.call(e,e.transformResponse,r.response)}finally{delete e.response}r.response.headers=Tn.from(r.response.headers)}return Promise.reject(r)})}const Jl={};["object","boolean","number","function","string","symbol"].forEach((i,e)=>{Jl[i]=function(n){return typeof n===i||"a"+(e<1?"n ":" ")+i}});const Gh={};Jl.transitional=function(e,t,n){function r(s,a){return"[Axios v"+Cf+"] Transitional option '"+s+"'"+a+(n?". "+n:"")}return(s,a,o)=>{if(e===!1)throw new ye(r(a," has been removed"+(t?" in "+t:"")),ye.ERR_DEPRECATED);return t&&!Gh[a]&&(Gh[a]=!0,console.warn(r(a," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,a,o):!0}};Jl.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function Sx(i,e,t){if(typeof i!="object"||i===null)throw new ye("options must be an object",ye.ERR_BAD_OPTION_VALUE);const n=Object.keys(i);let r=n.length;for(;r-- >0;){const s=n[r],a=Object.prototype.hasOwnProperty.call(e,s)?e[s]:void 0;if(a){const o=i[s],l=o===void 0||a(o,s,i);if(l!==!0)throw new ye("option "+s+" must be "+l,ye.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new ye("Unknown option "+s,ye.ERR_BAD_OPTION)}}const fl={assertOptions:Sx,validators:Jl},gn=fl.validators;let jr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Ph,response:new Ph}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error)try{let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack;let a="";if(typeof s=="string"){const o=s.indexOf(`
`);a=o===-1?"":s.slice(o+1)}if(!n.stack)n.stack=a;else if(a){const o=a.indexOf(`
`),l=o===-1?-1:a.indexOf(`
`,o+1),c=l===-1?"":a.slice(l+1);String(n.stack).endsWith(c)||(n.stack+=`
`+a)}}catch{}throw n}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=cs(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:s}=t;n!==void 0&&fl.assertOptions(n,{silentJSONParsing:gn.transitional(gn.boolean),forcedJSONParsing:gn.transitional(gn.boolean),clarifyTimeoutError:gn.transitional(gn.boolean),legacyInterceptorReqResOrdering:gn.transitional(gn.boolean),advertiseZstdAcceptEncoding:gn.transitional(gn.boolean),validateStatusUndefinedResolves:gn.transitional(gn.boolean)},!1),r!=null&&(O.isFunction(r)?t.paramsSerializer={serialize:r}:fl.assertOptions(r,{encode:gn.function,serialize:gn.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),fl.assertOptions(t,{baseUrl:gn.spelling("baseURL"),withXsrfToken:gn.spelling("withXSRFToken")},!0),t.method=(O.getSafeProp(t,"method")||O.getSafeProp(this.defaults,"method")||"get").toLowerCase();let a=s&&O.merge(s.common,s[t.method]);s&&O.forEach(Yp.concat("common"),_=>{delete s[_]}),t.headers=Tn.concat(a,s);const o=[];let l=!0;this.interceptors.request.forEach(function(g){if(typeof g.runWhen=="function"&&g.runWhen(t)===!1)return;l=l&&g.synchronous;const m=t.transitional||Af;m&&m.legacyInterceptorReqResOrdering?o.unshift(g.fulfilled,g.rejected):o.push(g.fulfilled,g.rejected)});const c=[];this.interceptors.response.forEach(function(g){c.push(g.fulfilled,g.rejected)});let u,h=0,f;if(!l){const _=[dc.bind(this),void 0];for(_.unshift(...o),_.push(...c),f=_.length,u=Promise.resolve(t);h<f;)u=u.then(_[h++],_[h++]);return u}f=o.length;let d=t;for(;h<f;){const _=o[h++],g=o[h++];try{d=_?_(d):d}catch(m){if(!g){u=Promise.reject(m);break}try{const p=g.call(this,m);O.isThenable(p)&&(u=Promise.resolve(p).then(()=>dc.call(this,d)))}catch(p){u=Promise.reject(p)}break}}if(!u)try{u=dc.call(this,d)}catch(_){u=Promise.reject(_)}for(h=0,f=c.length;h<f;)u=u.then(c[h++],c[h++]);return u}getUri(e){e=cs(this.defaults,e);const t=Jp(e.baseURL,e.url,e.allowAbsoluteUrls,e);return Gp(t,e.params,e.paramsSerializer)}};O.forEach(["delete","get","head","options"],function(e){jr.prototype[e]=function(t,n){return this.request(cs(n||{},{method:e,url:t,data:n&&O.hasOwnProp(n,"data")?n.data:void 0}))}});O.forEach(["post","put","patch","query"],function(e){function t(n){return function(s,a,o){return this.request(cs(o||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}jr.prototype[e]=t(),e!=="query"&&(jr.prototype[e+"Form"]=t(!0))});let Mx=class nm{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const n=this;this.promise.then(r=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](r);n._listeners=null}),this.promise.then=r=>{let s;const a=new Promise(o=>{n.subscribe(o),s=o}).then(r);return a.cancel=function(){n.unsubscribe(s)},a},e(function(s,a,o){n.reason||(n.reason=new Mo(s,a,o),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=n=>{e.abort(n)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new nm(function(r){e=r}),cancel:e}}};function yx(i){return function(t){return i.apply(null,t)}}function Ex(i){return O.isObject(i)&&i.isAxiosError===!0}const hl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(hl).forEach(([i,e])=>{hl[e]===void 0&&(hl[e]=i)});function im(i){const e=new jr(i),t=Ap(jr.prototype.request,e);return O.extend(t,jr.prototype,e,{allOwnKeys:!0}),O.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return im(cs(i,r))},t}const Wt=im(So);Wt.Axios=jr;Wt.CanceledError=Mo;Wt.CancelToken=Mx;Wt.isCancel=$p;Wt.VERSION=Cf;Wt.toFormData=Zl;Wt.AxiosError=ye;Wt.Cancel=Wt.CanceledError;Wt.all=function(e){return Promise.all(e)};Wt.spread=yx;Wt.isAxiosError=Ex;Wt.mergeConfig=cs;Wt.AxiosHeaders=Tn;Wt.formToJSON=i=>qp(O.isHTMLForm(i)?new FormData(i):i);Wt.getAdapter=tm.getAdapter;Wt.HttpStatusCode=hl;Wt.default=Wt;const{Axios:Ww,AxiosError:Xw,CanceledError:qw,isCancel:Yw,CancelToken:$w,VERSION:Kw,all:Zw,Cancel:Jw,isAxiosError:Qw,spread:jw,toFormData:eA,AxiosHeaders:tA,HttpStatusCode:nA,formToJSON:iA,getAdapter:rA,mergeConfig:sA,create:aA}=Wt;window.axios=Wt;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";const Df="186",bx=0,Wh=1,Tx=2,dl=1,wx=2,La=3,us=0,Wn=1,tr=2,sr=0,Ha=1,Xh=2,qh=3,Yh=4,Ax=5,ks=100,Rx=101,Cx=102,Px=103,Dx=104,Lx=200,Ix=201,Nx=202,Ux=203,rm=204,sm=205,Ox=206,Fx=207,Bx=208,zx=209,kx=210,Hx=211,Vx=212,Gx=213,Wx=214,uu=0,fu=1,hu=2,no=3,du=4,pu=5,mu=6,_u=7,am=0,Xx=1,qx=2,Hi=0,om=1,lm=2,cm=3,um=4,fm=5,hm=6,dm=7,pm=300,fs=301,ra=302,pc=303,mc=304,Ql=306,gu=1e3,ir=1001,xu=1002,fn=1003,Yx=1004,wo=1005,bn=1006,_c=1007,Kr=1008,ii=1009,mm=1010,_m=1011,io=1012,Lf=1013,Wi=1014,Fi=1015,Xi=1016,If=1017,Nf=1018,ro=1020,gm=35902,xm=35899,vm=1021,Sm=1022,Ai=1023,lr=1026,Zr=1027,Mm=1028,Uf=1029,hs=1030,Of=1031,Ff=1033,pl=33776,ml=33777,_l=33778,gl=33779,vu=35840,Su=35841,Mu=35842,yu=35843,Eu=36196,bu=37492,Tu=37496,wu=37488,Au=37489,Pl=37490,Ru=37491,Cu=37808,Pu=37809,Du=37810,Lu=37811,Iu=37812,Nu=37813,Uu=37814,Ou=37815,Fu=37816,Bu=37817,zu=37818,ku=37819,Hu=37820,Vu=37821,Gu=36492,Wu=36494,Xu=36495,qu=36283,Yu=36284,Dl=36285,$u=36286,$x=3200,Ku=0,Kx=1,yr="",mi="srgb",Ll="srgb-linear",Il="linear",Mt="srgb",gc=7680,Zx=519,Jx=512,Qx=513,jx=514,Bf=515,ev=516,tv=517,zf=518,nv=519,iv=35044,$h="300 es",Bi=2e3,so=2001;function rv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Nl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sv(){const i=Nl("canvas");return i.style.display="block",i}const Kh={};function Zh(...i){const e="THREE."+i.shift();console.log(e,...i)}function ym(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $e(...i){i=ym(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function _t(...i){i=ym(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ks(...i){const e=i.join(" ");e in Kh||(Kh[e]=!0,$e(...i))}function av(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ov={[uu]:fu,[hu]:mu,[du]:_u,[no]:pu,[fu]:uu,[mu]:hu,[_u]:du,[pu]:no};class _s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xc=Math.PI/180,Ul=180/Math.PI;function yo(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function lv(i,e){return(i%e+e)%e}function vc(i,e,t){return(1-t)*i+t*e}function Ma(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Bn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const xh=class xh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xh.prototype.isVector2=!0;let ot=xh;class pa{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(h!==g||l!==f||c!==d||u!==_){let m=l*f+c*d+u*_+h*g;m<0&&(f=-f,d=-d,_=-_,g=-g,m=-m);let p=1-o;if(m<.9995){const S=Math.acos(m),T=Math.sin(S);p=Math.sin(p*S)/T,o=Math.sin(o*S)/T,l=l*p+f*o,c=c*p+d*o,u=u*p+_*o,h=h*p+g*o}else{l=l*p+f*o,c=c*p+d*o,u=u*p+_*o,h=h*p+g*o;const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],f=s[a+1],d=s[a+2],_=s[a+3];return e[t]=o*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-o*d,e[t+2]=c*_+u*d+o*f-l*h,e[t+3]=u*_-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),f=l(n/2),d=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vh=class vh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sc.copy(this).projectOnVector(e),this.sub(Sc)}reflect(e){return this.sub(Sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vh.prototype.isVector3=!0;let Y=vh;const Sc=new Y,Jh=new pa,Sh=class Sh{constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=r[0],m=r[3],p=r[6],S=r[1],T=r[4],x=r[7],y=r[2],E=r[5],b=r[8];return s[0]=a*g+o*S+l*y,s[3]=a*m+o*T+l*E,s[6]=a*p+o*x+l*b,s[1]=c*g+u*S+h*y,s[4]=c*m+u*T+h*E,s[7]=c*p+u*x+h*b,s[2]=f*g+d*S+_*y,s[5]=f*m+d*T+_*E,s[8]=f*p+d*x+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,_=t*h+n*f+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(r*c-u*n)*g,e[2]=(o*n-r*a)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mc.makeScale(e,t)),this}rotate(e){return Ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mc.makeRotation(-e)),this}translate(e,t){return Ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Sh.prototype.isMatrix3=!0;let Qe=Sh;const Mc=new Qe,Qh=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jh=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cv(){const i={enabled:!0,workingColorSpace:Ll,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Mt&&(r.r=ar(r.r),r.g=ar(r.g),r.b=ar(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Mt&&(r.r=Zs(r.r),r.g=Zs(r.g),r.b=Zs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yr?Il:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ks("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ks("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ll]:{primaries:e,whitePoint:n,transfer:Il,toXYZ:Qh,fromXYZ:jh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:Qh,fromXYZ:jh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),i}const ct=cv();function ar(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Es;class uv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Es===void 0&&(Es=Nl("canvas")),Es.width=e.width,Es.height=e.height;const r=Es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Es}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ar(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ar(t[n]/255)*255):t[n]=ar(t[n]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fv=0;class kf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=yo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(yc(r[a].image)):s.push(yc(r[a]))}else s=yc(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function yc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let hv=0;const Ec=new Y;class Fn extends _s{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,n=ir,r=ir,s=bn,a=Kr,o=Ai,l=ii,c=Fn.DEFAULT_ANISOTROPY,u=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=yo(),this.name="",this.source=new kf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ec).x}get height(){return this.source.getSize(Ec).y}get depth(){return this.source.getSize(Ec).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gu:e.x=e.x-Math.floor(e.x);break;case ir:e.x=e.x<0?0:1;break;case xu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gu:e.y=e.y-Math.floor(e.y);break;case ir:e.y=e.y<0?0:1;break;case xu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=pm;Fn.DEFAULT_ANISOTROPY=1;const Mh=class Mh{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,x=(d+1)/2,y=(p+1)/2,E=(u+f)/4,b=(h+g)/4,v=(_+m)/4;return T>x&&T>y?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=E/n,s=b/n):x>y?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=E/r,s=v/r):y<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),n=b/s,r=v/s),this.set(n,r,s,t),this}let S=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(h-g)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mh.prototype.isVector4=!0;let Ut=Mh;class dv extends _s{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Fn(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new kf(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends dv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Em extends Fn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pv extends Fn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const $l=class $l{constructor(e,t,n,r,s,a,o,l,c,u,h,f,d,_,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,f,d,_,g,m)}set(e,t,n,r,s,a,o,l,c,u,h,f,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $l().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/bs.setFromMatrixColumn(e,0).length(),s=1/bs.setFromMatrixColumn(e,1).length(),a=1/bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*o,t[4]=-a*h,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=a*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=o*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mv,e,_v)}lookAt(e,t,n){const r=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),pr.crossVectors(n,Jn),pr.lengthSq()===0&&(Math.abs(n.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),pr.crossVectors(n,Jn)),pr.normalize(),Ao.crossVectors(Jn,pr),r[0]=pr.x,r[4]=Ao.x,r[8]=Jn.x,r[1]=pr.y,r[5]=Ao.y,r[9]=Jn.y,r[2]=pr.z,r[6]=Ao.z,r[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],S=n[3],T=n[7],x=n[11],y=n[15],E=r[0],b=r[4],v=r[8],w=r[12],R=r[1],L=r[5],D=r[9],H=r[13],I=r[2],z=r[6],Z=r[10],B=r[14],ee=r[3],$=r[7],C=r[11],j=r[15];return s[0]=a*E+o*R+l*I+c*ee,s[4]=a*b+o*L+l*z+c*$,s[8]=a*v+o*D+l*Z+c*C,s[12]=a*w+o*H+l*B+c*j,s[1]=u*E+h*R+f*I+d*ee,s[5]=u*b+h*L+f*z+d*$,s[9]=u*v+h*D+f*Z+d*C,s[13]=u*w+h*H+f*B+d*j,s[2]=_*E+g*R+m*I+p*ee,s[6]=_*b+g*L+m*z+p*$,s[10]=_*v+g*D+m*Z+p*C,s[14]=_*w+g*H+m*B+p*j,s[3]=S*E+T*R+x*I+y*ee,s[7]=S*b+T*L+x*z+y*$,s[11]=S*v+T*D+x*Z+y*C,s[15]=S*w+T*H+x*B+y*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15],S=l*d-c*f,T=o*d-c*h,x=o*f-l*h,y=a*d-c*u,E=a*f-l*u,b=a*h-o*u;return t*(g*S-m*T+p*x)-n*(_*S-m*y+p*E)+r*(_*T-g*y+p*b)-s*(_*x-g*E+m*b)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],S=t*o-n*a,T=t*l-r*a,x=t*c-s*a,y=n*l-r*o,E=n*c-s*o,b=r*c-s*l,v=u*g-h*_,w=u*m-f*_,R=u*p-d*_,L=h*m-f*g,D=h*p-d*g,H=f*p-d*m,I=S*H-T*D+x*L+y*R-E*w+b*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return e[0]=(o*H-l*D+c*L)*z,e[1]=(r*D-n*H-s*L)*z,e[2]=(g*b-m*E+p*y)*z,e[3]=(f*E-h*b-d*y)*z,e[4]=(l*R-a*H-c*w)*z,e[5]=(t*H-r*R+s*w)*z,e[6]=(m*x-_*b-p*T)*z,e[7]=(u*b-f*x+d*T)*z,e[8]=(a*D-o*R+c*v)*z,e[9]=(n*R-t*D-s*v)*z,e[10]=(_*E-g*x+p*S)*z,e[11]=(h*x-u*E-d*S)*z,e[12]=(o*w-a*L-l*v)*z,e[13]=(t*L-n*w+r*v)*z,e[14]=(g*T-_*y-m*S)*z,e[15]=(u*y-h*T+f*S)*z,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,_=s*h,g=a*u,m=a*h,p=o*h,S=l*c,T=l*u,x=l*h,y=n.x,E=n.y,b=n.z;return r[0]=(1-(g+p))*y,r[1]=(d+x)*y,r[2]=(_-T)*y,r[3]=0,r[4]=(d-x)*E,r[5]=(1-(f+p))*E,r[6]=(m+S)*E,r[7]=0,r[8]=(_+T)*b,r[9]=(m-S)*b,r[10]=(1-(f+g))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=bs.set(r[0],r[1],r[2]).length();const o=bs.set(r[4],r[5],r[6]).length(),l=bs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),yi.copy(this);const c=1/a,u=1/o,h=1/l;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=u,yi.elements[5]*=u,yi.elements[6]*=u,yi.elements[8]*=h,yi.elements[9]*=h,yi.elements[10]*=h,t.setFromRotationMatrix(yi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=Bi,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===Bi)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===so)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Bi,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),d=-(n+r)/(n-r);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===Bi)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===so)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};$l.prototype.isMatrix4=!0;let Ft=$l;const bs=new Y,yi=new Ft,mv=new Y(0,0,0),_v=new Y(1,1,1),pr=new Y,Ao=new Y,Jn=new Y,ed=new Ft,td=new pa;class Lr{constructor(e=0,t=0,n=0,r=Lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ed.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ed,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return td.setFromEuler(this),this.setFromQuaternion(td,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lr.DEFAULT_ORDER="XYZ";class bm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gv=0;const nd=new Y,Ts=new pa,$i=new Ft,Ro=new Y,ya=new Y,xv=new Y,vv=new pa,id=new Y(1,0,0),rd=new Y(0,1,0),sd=new Y(0,0,1),ad={type:"added"},Sv={type:"removed"},ws={type:"childadded",child:null},bc={type:"childremoved",child:null};class dn extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new Y,t=new Lr,n=new pa,r=new Y(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Qe}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(id,e)}rotateY(e){return this.rotateOnAxis(rd,e)}rotateZ(e){return this.rotateOnAxis(sd,e)}translateOnAxis(e,t){return nd.copy(e).applyQuaternion(this.quaternion),this.position.add(nd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(id,e)}translateY(e){return this.translateOnAxis(rd,e)}translateZ(e){return this.translateOnAxis(sd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ro.copy(e):Ro.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(ya,Ro,this.up):$i.lookAt(Ro,ya,this.up),this.quaternion.setFromRotationMatrix($i),r&&($i.extractRotation(r.matrixWorld),Ts.setFromRotationMatrix($i),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(_t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ad),ws.child=e,this.dispatchEvent(ws),ws.child=null):_t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sv),bc.child=e,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ad),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,e,xv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,vv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}dn.DEFAULT_UP=new Y(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gs extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mv={type:"move"};class Tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mv)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},Co={h:0,s:0,l:0};function wc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ht{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ct.workingColorSpace){if(e=lv(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=wc(a,s,e+1/3),this.g=wc(a,s,e),this.b=wc(a,s,e-1/3)}return ct.colorSpaceToWorking(this,r),this}setStyle(e,t=mi){function n(s){s!==void 0&&parseFloat(s)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mi){const n=Tm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return ct.workingToColorSpace(vn.copy(this),e),Math.round(ut(vn.r*255,0,255))*65536+Math.round(ut(vn.g*255,0,255))*256+Math.round(ut(vn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(vn.copy(this),t);const n=vn.r,r=vn.g,s=vn.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=mi){ct.workingToColorSpace(vn.copy(this),e);const t=vn.r,n=vn.g,r=vn.b;return e!==mi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+t,mr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mr),e.getHSL(Co);const n=vc(mr.h,Co.h,t),r=vc(mr.s,Co.s,t),s=vc(mr.l,Co.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new ht;ht.NAMES=Tm;class yv extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Lr,this.environmentIntensity=1,this.environmentRotation=new Lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ei=new Y,Ki=new Y,Ac=new Y,Zi=new Y,As=new Y,Rs=new Y,od=new Y,Rc=new Y,Cc=new Y,Pc=new Y,Dc=new Ut,Lc=new Ut,Ic=new Ut;class wi{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ei.subVectors(e,t),r.cross(Ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ei.subVectors(r,t),Ki.subVectors(n,t),Ac.subVectors(e,t);const a=Ei.dot(Ei),o=Ei.dot(Ki),l=Ei.dot(Ac),c=Ki.dot(Ki),u=Ki.dot(Ac),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zi.x),l.addScaledVector(a,Zi.y),l.addScaledVector(o,Zi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Dc.setScalar(0),Lc.setScalar(0),Ic.setScalar(0),Dc.fromBufferAttribute(e,t),Lc.fromBufferAttribute(e,n),Ic.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Dc,s.x),a.addScaledVector(Lc,s.y),a.addScaledVector(Ic,s.z),a}static isFrontFacing(e,t,n,r){return Ei.subVectors(n,t),Ki.subVectors(e,t),Ei.cross(Ki).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),Ei.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return wi.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;As.subVectors(r,n),Rs.subVectors(s,n),Rc.subVectors(e,n);const l=As.dot(Rc),c=Rs.dot(Rc);if(l<=0&&c<=0)return t.copy(n);Cc.subVectors(e,r);const u=As.dot(Cc),h=Rs.dot(Cc);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(As,a);Pc.subVectors(e,s);const d=As.dot(Pc),_=Rs.dot(Pc);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Rs,o);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return od.subVectors(s,r),o=(h-u)/(h-u+(d-_)),t.copy(r).addScaledVector(od,o);const p=1/(m+g+f);return a=g*p,o=f*p,t.copy(n).addScaledVector(As,a).addScaledVector(Rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Eo{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bi):bi.fromBufferAttribute(s,a),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Po.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Po.copy(n.boundingBox)),Po.applyMatrix4(e.matrixWorld),this.union(Po)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),Do.subVectors(this.max,Ea),Cs.subVectors(e.a,Ea),Ps.subVectors(e.b,Ea),Ds.subVectors(e.c,Ea),_r.subVectors(Ps,Cs),gr.subVectors(Ds,Ps),Br.subVectors(Cs,Ds);let t=[0,-_r.z,_r.y,0,-gr.z,gr.y,0,-Br.z,Br.y,_r.z,0,-_r.x,gr.z,0,-gr.x,Br.z,0,-Br.x,-_r.y,_r.x,0,-gr.y,gr.x,0,-Br.y,Br.x,0];return!Nc(t,Cs,Ps,Ds,Do)||(t=[1,0,0,0,1,0,0,0,1],!Nc(t,Cs,Ps,Ds,Do))?!1:(Lo.crossVectors(_r,gr),t=[Lo.x,Lo.y,Lo.z],Nc(t,Cs,Ps,Ds,Do))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ji=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],bi=new Y,Po=new Eo,Cs=new Y,Ps=new Y,Ds=new Y,_r=new Y,gr=new Y,Br=new Y,Ea=new Y,Do=new Y,Lo=new Y,zr=new Y;function Nc(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){zr.fromArray(i,s);const o=r.x*Math.abs(zr.x)+r.y*Math.abs(zr.y)+r.z*Math.abs(zr.z),l=e.dot(zr),c=t.dot(zr),u=n.dot(zr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const $t=new Y,Io=new ot;let Ev=0;class Vi extends _s{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ev++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=iv,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Io.fromBufferAttribute(this,t),Io.applyMatrix3(e),this.setXY(t,Io.x,Io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ma(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ma(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ma(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ma(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ma(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),n=Bn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),n=Bn(n,this.array),r=Bn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),n=Bn(n,this.array),r=Bn(r,this.array),s=Bn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class wm extends Vi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Am extends Vi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class cn extends Vi{constructor(e,t,n){super(new Float32Array(e),t,n)}}const bv=new Eo,ba=new Y,Uc=new Y;class jl{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bv.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ba.subVectors(e,this.center);const t=ba.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ba,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ba.copy(e.center).add(Uc)),this.expandByPoint(ba.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Tv=0;const di=new Ft,Oc=new dn,Ls=new Y,Qn=new Eo,Ta=new Eo,sn=new Y;class Zn extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rv(e)?Am:wm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,n){return di.makeTranslation(e,t,n),this.applyMatrix4(di),this}scale(e,t,n){return di.makeScale(e,t,n),this.applyMatrix4(di),this}lookAt(e){return Oc.lookAt(e),Oc.updateMatrix(),this.applyMatrix4(Oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new cn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Qn.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ta.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(Qn.min,Ta.min),Qn.expandByPoint(sn),sn.addVectors(Qn.max,Ta.max),Qn.expandByPoint(sn)):(Qn.expandByPoint(Ta.min),Qn.expandByPoint(Ta.max))}Qn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)sn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(sn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)sn.fromBufferAttribute(o,c),l&&(Ls.fromBufferAttribute(e,c),sn.add(Ls)),r=Math.max(r,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&_t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){_t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Vi(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new Y,l[v]=new Y;const c=new Y,u=new Y,h=new Y,f=new ot,d=new ot,_=new ot,g=new Y,m=new Y;function p(v,w,R){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,R),f.fromBufferAttribute(s,v),d.fromBufferAttribute(s,w),_.fromBufferAttribute(s,R),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const L=1/(d.x*_.y-_.x*d.y);isFinite(L)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(L),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(L),o[v].add(g),o[w].add(g),o[R].add(g),l[v].add(m),l[w].add(m),l[R].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,w=S.length;v<w;++v){const R=S[v],L=R.start,D=R.count;for(let H=L,I=L+D;H<I;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const T=new Y,x=new Y,y=new Y,E=new Y;function b(v){y.fromBufferAttribute(r,v),E.copy(y);const w=o[v];T.copy(w),T.sub(y.multiplyScalar(y.dot(w))).normalize(),x.crossVectors(E,w);const L=x.dot(l[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,L)}for(let v=0,w=S.length;v<w;++v){const R=S[v],L=R.start,D=R.count;for(let H=L,I=L+D;H<I;H+=3)b(e.getX(H+0)),b(e.getX(H+1)),b(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Vi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new Y,s=new Y,a=new Y,o=new Y,l=new Y,c=new Y,u=new Y,h=new Y;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new Vi(f,u,h)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fc=new Y,wv=new Y,Av=new Qe;class Mr{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Fc.subVectors(n,t).cross(wv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Fc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Av.getNormalMatrix(e),r=this.coplanarPoint(Fc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Rv=0;class ma extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=yo(),this.name="",this.type="Material",this.blending=Ha,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rm,this.blendDst=sm,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gc,this.stencilZFail=gc,this.stencilZPass=gc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ht().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Mr().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ot().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Qi=new Y,Bc=new Y,No=new Y,Uo=new Y;class Rm{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Bc.copy(e).add(t).multiplyScalar(.5),No.copy(t).sub(e).normalize(),Uo.copy(this.origin).sub(Bc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(No),o=Uo.dot(this.direction),l=-Uo.dot(No),c=Uo.lengthSq(),u=Math.abs(1-a*a);let h,f,d,_;if(u>0)if(h=a*l-o,f=a*o-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Bc).addScaledVector(No,f),d}intersectSphere(e,t){if(e.radius<0)return null;Qi.subVectors(e.center,this.origin);const n=Qi.dot(this.direction),r=Qi.dot(Qi)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,f=e.y-a.y,d=e.z-a.z,_=t.x-a.x,g=t.y-a.y,m=t.z-a.z,p=n.x-a.x,S=n.y-a.y,T=n.z-a.z,x=Math.abs(l),y=Math.abs(c),E=Math.abs(u);let b,v,w,R,L,D,H,I,z,Z,B,ee;if(x>=y&&x>=E?(w=l,D=h,z=_,ee=p,l>=0?(b=c,v=u,R=f,L=d,H=g,I=m,Z=S,B=T):(b=u,v=c,R=d,L=f,H=m,I=g,Z=T,B=S)):y>=E?(w=c,D=f,z=g,ee=S,c>=0?(b=u,v=l,R=d,L=h,H=m,I=_,Z=T,B=p):(b=l,v=u,R=h,L=d,H=_,I=m,Z=p,B=T)):(w=u,D=d,z=m,ee=T,u>=0?(b=l,v=c,R=h,L=f,H=_,I=g,Z=p,B=S):(b=c,v=l,R=f,L=h,H=g,I=_,Z=S,B=p)),w===0)return null;const $=b/w,C=v/w,j=1/w,he=R-$*D,Ee=L-C*D,ke=H-$*z,Be=I-C*z,Xe=Z-$*ee,G=B-C*ee,J=Xe*Be-G*ke,de=he*G-Ee*Xe,He=ke*Ee-Be*he;if(r){if(J<0||de<0||He<0)return null}else if((J<0||de<0||He<0)&&(J>0||de>0||He>0))return null;const me=J+de+He;if(me===0)return null;const Re=j*(J*D+de*z+He*ee);return(me>0?Re<0:Re>0)?null:this.at(Re/me,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Cm extends ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.combine=am,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ld=new Ft,kr=new Rm,Oo=new jl,cd=new Y,Fo=new Y,Bo=new Y,zo=new Y,zc=new Y,ko=new Y,ud=new Y,Ho=new Y;class Hn extends dn{constructor(e=new Zn,t=new Cm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ko.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(zc.fromBufferAttribute(h,e),a?ko.addScaledVector(zc,u):ko.addScaledVector(zc.sub(t),u))}t.add(ko)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(s),kr.copy(e.ray).recast(e.near),!(Oo.containsPoint(kr.origin)===!1&&(kr.intersectSphere(Oo,cd)===null||kr.origin.distanceToSquared(cd)>(e.far-e.near)**2))&&(ld.copy(s).invert(),kr.copy(e.ray).applyMatrix4(ld),!(n.boundingBox!==null&&kr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,kr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=a[m.materialIndex],S=Math.max(m.start,d.start),T=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,y=T;x<y;x+=3){const E=o.getX(x),b=o.getX(x+1),v=o.getX(x+2);r=Vo(this,p,e,n,c,u,h,E,b,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const S=o.getX(m),T=o.getX(m+1),x=o.getX(m+2);r=Vo(this,a,e,n,c,u,h,S,T,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=a[m.materialIndex],S=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,y=T;x<y;x+=3){const E=x,b=x+1,v=x+2;r=Vo(this,p,e,n,c,u,h,E,b,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const S=m,T=m+1,x=m+2;r=Vo(this,a,e,n,c,u,h,S,T,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Cv(i,e,t,n,r,s,a,o){let l;if(e.side===Wn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===us,o),l===null)return null;Ho.copy(o),Ho.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ho);return c<t.near||c>t.far?null:{distance:c,point:Ho.clone(),object:i}}function Vo(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Fo),i.getVertexPosition(l,Bo),i.getVertexPosition(c,zo);const u=Cv(i,e,t,n,Fo,Bo,zo,ud);if(u){const h=new Y;wi.getBarycoord(ud,Fo,Bo,zo,h),r&&(u.uv=wi.getInterpolatedAttribute(r,o,l,c,h,new ot)),s&&(u.uv1=wi.getInterpolatedAttribute(s,o,l,c,h,new ot)),a&&(u.normal=wi.getInterpolatedAttribute(a,o,l,c,h,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new Y,materialIndex:0};wi.getNormal(Fo,Bo,zo,f.normal),u.face=f,u.barycoord=h}return u}class Pv extends Fn{constructor(e=null,t=1,n=1,r,s,a,o,l,c=fn,u=fn,h,f){super(null,a,o,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hr=new jl,Dv=new ot(.5,.5),Go=new Y;class Hf{constructor(e=new Mr,t=new Mr,n=new Mr,r=new Mr,s=new Mr,a=new Mr){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bi,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],_=s[8],g=s[9],m=s[10],p=s[11],S=s[12],T=s[13],x=s[14],y=s[15];if(r[0].setComponents(c-a,d-u,p-_,y-S).normalize(),r[1].setComponents(c+a,d+u,p+_,y+S).normalize(),r[2].setComponents(c+o,d+h,p+g,y+T).normalize(),r[3].setComponents(c-o,d-h,p-g,y-T).normalize(),n)r[4].setComponents(l,f,m,x).normalize(),r[5].setComponents(c-l,d-f,p-m,y-x).normalize();else if(r[4].setComponents(c-l,d-f,p-m,y-x).normalize(),t===Bi)r[5].setComponents(c+l,d+f,p+m,y+x).normalize();else if(t===so)r[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const t=Dv.distanceTo(e.center);return Hr.radius=.7071067811865476+t,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Go.x=r.normal.x>0?e.max.x:e.min.x,Go.y=r.normal.y>0?e.max.y:e.min.y,Go.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pm extends ma{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fd=new Ft,Zu=new Rm,Wo=new jl,Xo=new Y;class Lv extends dn{constructor(e=new Zn,t=new Pm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(r),Wo.radius+=s,e.ray.intersectsSphere(Wo)===!1)return;fd.copy(r).invert(),Zu.copy(e.ray).applyMatrix4(fd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=f,g=d;_<g;_++){const m=c.getX(_);Xo.fromBufferAttribute(h,m),hd(Xo,m,l,r,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let _=f,g=d;_<g;_++)Xo.fromBufferAttribute(h,_),hd(Xo,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function hd(i,e,t,n,r,s,a){const o=Zu.distanceSqToPoint(i);if(o<t){const l=new Y;Zu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Dm extends Fn{constructor(e=[],t=fs,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ao extends Fn{constructor(e,t,n=Wi,r,s,a,o=fn,l=fn,c,u=lr,h=1){if(u!==lr&&u!==Zr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Iv extends ao{constructor(e,t=Wi,n=fs,r,s,a=fn,o=fn,l,c=lr){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Lm extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _a extends Zn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(u,3)),this.setAttribute("uv",new cn(h,2));function _(g,m,p,S,T,x,y,E,b,v,w){const R=x/b,L=y/v,D=x/2,H=y/2,I=E/2,z=b+1,Z=v+1;let B=0,ee=0;const $=new Y;for(let C=0;C<Z;C++){const j=C*L-H;for(let he=0;he<z;he++){const Ee=he*R-D;$[g]=Ee*S,$[m]=j*T,$[p]=I,c.push($.x,$.y,$.z),$[g]=0,$[m]=0,$[p]=E>0?1:-1,u.push($.x,$.y,$.z),h.push(he/b),h.push(1-C/v),B+=1}}for(let C=0;C<v;C++)for(let j=0;j<b;j++){const he=f+j+z*C,Ee=f+j+z*(C+1),ke=f+(j+1)+z*(C+1),Be=f+(j+1)+z*C;l.push(he,Ee,Be),l.push(Ee,ke,Be),ee+=6}o.addGroup(d,ee,w),d+=ee,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vf extends Zn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),c(n),u(),this.setAttribute("position",new cn(s,3)),this.setAttribute("normal",new cn(s.slice(),3)),this.setAttribute("uv",new cn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const T=new Y,x=new Y,y=new Y;for(let E=0;E<t.length;E+=3)d(t[E+0],T),d(t[E+1],x),d(t[E+2],y),l(T,x,y,S)}function l(S,T,x,y){const E=y+1,b=[];for(let v=0;v<=E;v++){b[v]=[];const w=S.clone().lerp(x,v/E),R=T.clone().lerp(x,v/E),L=E-v;for(let D=0;D<=L;D++)D===0&&v===E?b[v][D]=w:b[v][D]=w.clone().lerp(R,D/L)}for(let v=0;v<E;v++)for(let w=0;w<2*(E-v)-1;w++){const R=Math.floor(w/2);w%2===0?(f(b[v][R+1]),f(b[v+1][R]),f(b[v][R])):(f(b[v][R+1]),f(b[v+1][R+1]),f(b[v+1][R]))}}function c(S){const T=new Y;for(let x=0;x<s.length;x+=3)T.x=s[x+0],T.y=s[x+1],T.z=s[x+2],T.normalize().multiplyScalar(S),s[x+0]=T.x,s[x+1]=T.y,s[x+2]=T.z}function u(){const S=new Y;for(let T=0;T<s.length;T+=3){S.x=s[T+0],S.y=s[T+1],S.z=s[T+2];const x=m(S)/2/Math.PI+.5,y=p(S)/Math.PI+.5;a.push(x,1-y)}_(),h()}function h(){for(let S=0;S<a.length;S+=6){const T=a[S+0],x=a[S+2],y=a[S+4],E=Math.max(T,x,y),b=Math.min(T,x,y);E>.9&&b<.1&&(T<.2&&(a[S+0]+=1),x<.2&&(a[S+2]+=1),y<.2&&(a[S+4]+=1))}}function f(S){s.push(S.x,S.y,S.z)}function d(S,T){const x=S*3;T.x=e[x+0],T.y=e[x+1],T.z=e[x+2]}function _(){const S=new Y,T=new Y,x=new Y,y=new Y,E=new ot,b=new ot,v=new ot;for(let w=0,R=0;w<s.length;w+=9,R+=6){S.set(s[w+0],s[w+1],s[w+2]),T.set(s[w+3],s[w+4],s[w+5]),x.set(s[w+6],s[w+7],s[w+8]),E.set(a[R+0],a[R+1]),b.set(a[R+2],a[R+3]),v.set(a[R+4],a[R+5]),y.copy(S).add(T).add(x).divideScalar(3);const L=m(y);g(E,R+0,S,L),g(b,R+2,T,L),g(v,R+4,x,L)}}function g(S,T,x,y){y<0&&S.x===1&&(a[T]=S.x-1),x.x===0&&x.z===0&&(a[T]=y/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vf(e.vertices,e.indices,e.radius,e.detail)}}class Gf extends Vf{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Gf(e.radius,e.detail)}}class ec extends Zn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const S=p*f-a;for(let T=0;T<c;T++){const x=T*h-s;_.push(x,-S,0),g.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const T=S+c*p,x=S+c*(p+1),y=S+1+c*(p+1),E=S+1+c*p;d.push(T,x,E),d.push(x,y,E)}this.setIndex(d),this.setAttribute("position",new cn(_,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wf extends Zn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new Y,f=new Y,d=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const S=[],T=p/n,x=a+T*o,y=e*Math.cos(x),E=Math.sqrt(e*e-y*y);let b=0;p===0&&a===0?b=.5/t:p===n&&l===Math.PI&&(b=-.5/t);for(let v=0;v<=t;v++){const w=v/t,R=r+w*s;h.x=-E*Math.cos(R),h.y=y,h.z=E*Math.sin(R),_.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),m.push(w+b,1-T),S.push(c++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const T=u[p][S+1],x=u[p][S],y=u[p+1][S],E=u[p+1][S+1];(p!==0||a>0)&&d.push(T,x,E),(p!==n-1||l<Math.PI)&&d.push(x,y,E)}this.setIndex(d),this.setAttribute("position",new cn(_,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ol extends Zn{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const l=[],c=[],u=[],h=[],f=new Y,d=new Y,_=new Y;for(let g=0;g<=n;g++){const m=a+g/n*o;for(let p=0;p<=r;p++){const S=p/r*s;d.x=(e+t*Math.cos(m))*Math.cos(S),d.y=(e+t*Math.cos(m))*Math.sin(S),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),f.x=e*Math.cos(S),f.y=e*Math.sin(S),_.subVectors(d,f).normalize(),u.push(_.x,_.y,_.z),h.push(p/r),h.push(g/n)}}for(let g=1;g<=n;g++)for(let m=1;m<=r;m++){const p=(r+1)*g+m-1,S=(r+1)*(g-1)+m-1,T=(r+1)*(g-1)+m,x=(r+1)*g+m;l.push(p,S,x),l.push(S,T,x)}this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(u,3)),this.setAttribute("uv",new cn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function sa(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(dd(r))r.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(dd(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Ln(i){const e={};for(let t=0;t<i.length;t++){const n=sa(i[t]);for(const r in n)e[r]=n[r]}return e}function dd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Nv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Im(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const Uv={clone:sa,merge:Ln};var Ov=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends ma{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ov,this.fragmentShader=Fv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=Nv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new ht().setHex(r.value);break;case"v2":this.uniforms[n].value=new ot().fromArray(r.value);break;case"v3":this.uniforms[n].value=new Y().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ut().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Qe().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ft().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Bv extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wa extends ma{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ku,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zv extends ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$x,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kv extends ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Xf extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const kc=new Ft,pd=new Y,md=new Y;class Nm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hf,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;pd.setFromMatrixPosition(e.matrixWorld),t.position.copy(pd),md.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(md),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){kc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(kc,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===so||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qo=new Y,Yo=new pa,Di=new Y;class Um extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qo,Yo,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,Yo,Di.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(qo,Yo,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,Yo,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xr=new Y,_d=new ot,gd=new ot;class kn extends Um{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ul*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ul*2*Math.atan(Math.tan(xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,t){return this.getViewBounds(e,_d,gd),t.subVectors(gd,_d)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xc*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Hv extends Nm{constructor(){super(new kn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ul*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Vv extends Xf{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Hv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Gv extends Nm{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0}}class Wv extends Xf{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Gv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Om extends Um{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xv extends Xf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Is=-90,Ns=1;class qv extends dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(Is,Ns,e,t);r.layers=this.layers,this.add(r);const s=new kn(Is,Ns,e,t);s.layers=this.layers,this.add(s);const a=new kn(Is,Ns,e,t);a.layers=this.layers,this.add(a);const o=new kn(Is,Ns,e,t);o.layers=this.layers,this.add(o);const l=new kn(Is,Ns,e,t);l.layers=this.layers,this.add(l);const c=new kn(Is,Ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===so)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Yv extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const yh=class yh{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};yh.prototype.isMatrix2=!0;let xd=yh;function vd(i,e,t,n){const r=$v(n);switch(t){case vm:return i*e;case Mm:return i*e/r.components*r.byteLength;case Uf:return i*e/r.components*r.byteLength;case hs:return i*e*2/r.components*r.byteLength;case Of:return i*e*2/r.components*r.byteLength;case Sm:return i*e*3/r.components*r.byteLength;case Ai:return i*e*4/r.components*r.byteLength;case Ff:return i*e*4/r.components*r.byteLength;case pl:case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _l:case gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Su:case yu:return Math.max(i,16)*Math.max(e,8)/4;case vu:case Mu:return Math.max(i,8)*Math.max(e,8)/2;case Eu:case bu:case wu:case Au:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Tu:case Pl:case Ru:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Du:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Lu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Nu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Uu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ou:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Bu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ku:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Hu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Gu:case Wu:case Xu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qu:case Yu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Dl:case $u:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $v(i){switch(i){case ii:case mm:return{byteLength:1,components:1};case io:case _m:case Xi:return{byteLength:2,components:1};case If:case Nf:return{byteLength:2,components:4};case Wi:case Lf:case Fi:return{byteLength:4,components:1};case gm:case xm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Df}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Df);function Fm(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Kv(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Zv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,sS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_S=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,vS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,SS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,MS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,yS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ES=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wS="gl_FragColor = linearToOutputTexel( gl_FragColor );",AS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,CS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,PS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,DS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,IS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,US=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,BS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,VS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,GS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$S=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,KS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,JS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,jS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,SM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,IM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,NM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,UM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,OM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,KM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ny=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ry=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,py=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,my=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,My=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ey=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,by=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ty=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ay=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ry=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:Zv,alphahash_pars_fragment:Jv,alphamap_fragment:Qv,alphamap_pars_fragment:jv,alphatest_fragment:eS,alphatest_pars_fragment:tS,aomap_fragment:nS,aomap_pars_fragment:iS,batching_pars_vertex:rS,batching_vertex:sS,begin_vertex:aS,beginnormal_vertex:oS,bsdfs:lS,iridescence_fragment:cS,bumpmap_pars_fragment:uS,clipping_planes_fragment:fS,clipping_planes_pars_fragment:hS,clipping_planes_pars_vertex:dS,clipping_planes_vertex:pS,color_fragment:mS,color_pars_fragment:_S,color_pars_vertex:gS,color_vertex:xS,common:vS,cube_uv_reflection_fragment:SS,defaultnormal_vertex:MS,displacementmap_pars_vertex:yS,displacementmap_vertex:ES,emissivemap_fragment:bS,emissivemap_pars_fragment:TS,colorspace_fragment:wS,colorspace_pars_fragment:AS,envmap_fragment:RS,envmap_common_pars_fragment:CS,envmap_pars_fragment:PS,envmap_pars_vertex:DS,envmap_physical_pars_fragment:VS,envmap_vertex:LS,fog_vertex:IS,fog_pars_vertex:NS,fog_fragment:US,fog_pars_fragment:OS,gradientmap_pars_fragment:FS,lightmap_pars_fragment:BS,lights_lambert_fragment:zS,lights_lambert_pars_fragment:kS,lights_pars_begin:HS,lights_toon_fragment:GS,lights_toon_pars_fragment:WS,lights_phong_fragment:XS,lights_phong_pars_fragment:qS,lights_physical_fragment:YS,lights_physical_pars_fragment:$S,lights_fragment_begin:KS,lights_fragment_maps:ZS,lights_fragment_end:JS,lightprobes_pars_fragment:QS,logdepthbuf_fragment:jS,logdepthbuf_pars_fragment:eM,logdepthbuf_pars_vertex:tM,logdepthbuf_vertex:nM,map_fragment:iM,map_pars_fragment:rM,map_particle_fragment:sM,map_particle_pars_fragment:aM,metalnessmap_fragment:oM,metalnessmap_pars_fragment:lM,morphinstance_vertex:cM,morphcolor_vertex:uM,morphnormal_vertex:fM,morphtarget_pars_vertex:hM,morphtarget_vertex:dM,normal_fragment_begin:pM,normal_fragment_maps:mM,normal_pars_fragment:_M,normal_pars_vertex:gM,normal_vertex:xM,normalmap_pars_fragment:vM,clearcoat_normal_fragment_begin:SM,clearcoat_normal_fragment_maps:MM,clearcoat_pars_fragment:yM,iridescence_pars_fragment:EM,opaque_fragment:bM,packing:TM,premultiplied_alpha_fragment:wM,project_vertex:AM,dithering_fragment:RM,dithering_pars_fragment:CM,roughnessmap_fragment:PM,roughnessmap_pars_fragment:DM,shadowmap_pars_fragment:LM,shadowmap_pars_vertex:IM,shadowmap_vertex:NM,shadowmask_pars_fragment:UM,skinbase_vertex:OM,skinning_pars_vertex:FM,skinning_vertex:BM,skinnormal_vertex:zM,specularmap_fragment:kM,specularmap_pars_fragment:HM,tonemapping_fragment:VM,tonemapping_pars_fragment:GM,transmission_fragment:WM,transmission_pars_fragment:XM,uv_pars_fragment:qM,uv_pars_vertex:YM,uv_vertex:$M,worldpos_vertex:KM,background_vert:ZM,background_frag:JM,backgroundCube_vert:QM,backgroundCube_frag:jM,cube_vert:ey,cube_frag:ty,depth_vert:ny,depth_frag:iy,distance_vert:ry,distance_frag:sy,equirect_vert:ay,equirect_frag:oy,linedashed_vert:ly,linedashed_frag:cy,meshbasic_vert:uy,meshbasic_frag:fy,meshlambert_vert:hy,meshlambert_frag:dy,meshmatcap_vert:py,meshmatcap_frag:my,meshnormal_vert:_y,meshnormal_frag:gy,meshphong_vert:xy,meshphong_frag:vy,meshphysical_vert:Sy,meshphysical_frag:My,meshtoon_vert:yy,meshtoon_frag:Ey,points_vert:by,points_frag:Ty,shadow_vert:wy,shadow_frag:Ay,sprite_vert:Ry,sprite_frag:Cy},be={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Ui={basic:{uniforms:Ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Ln([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Ln([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ht(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Ln([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Ln([be.points,be.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Ln([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Ln([be.common,be.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Ln([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Ln([be.sprite,be.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Ln([be.common,be.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Ln([be.lights,be.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Ui.physical={uniforms:Ln([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const $o={r:0,b:0,g:0},Py=new Ft,Bm=new Qe;Bm.set(-1,0,0,0,1,0,0,0,1);function Dy(i,e,t,n,r,s){const a=new ht(0);let o=r===!0?0:1,l,c,u=null,h=0,f=null;function d(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){const x=S.backgroundBlurriness>0;T=e.get(T,x)}return T}function _(S){let T=!1;const x=d(S);x===null?m(a,o):x&&x.isColor&&(m(x,1),T=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,T){const x=d(T);x&&(x.isCubeTexture||x.mapping===Ql)?(c===void 0&&(c=new Hn(new _a(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:sa(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Py.makeRotationFromEuler(T.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Bm),c.material.toneMapped=ct.getTransfer(x.colorSpace)!==Mt,(u!==x||h!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Hn(new ec(2,2),new qi({name:"BackgroundMaterial",uniforms:sa(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ct.getTransfer(x.colorSpace)!==Mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,T){S.getRGB($o,Im(i)),t.buffers.color.setClear($o.r,$o.g,$o.b,T,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:_,addToRenderList:g,dispose:p}}function Ly(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(L,D,H,I,z){let Z=!1;const B=h(L,I,H,D);s!==B&&(s=B,c(s.object)),Z=d(L,I,H,z),Z&&_(L,I,H,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,x(L,D,H,I),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function h(L,D,H,I){const z=I.wireframe===!0;let Z=n[D.id];Z===void 0&&(Z={},n[D.id]=Z);const B=L.isInstancedMesh===!0?L.id:0;let ee=Z[B];ee===void 0&&(ee={},Z[B]=ee);let $=ee[H.id];$===void 0&&($={},ee[H.id]=$);let C=$[z];return C===void 0&&(C=f(l()),$[z]=C),C}function f(L){const D=[],H=[],I=[];for(let z=0;z<t;z++)D[z]=0,H[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:I,object:L,attributes:{},index:null}}function d(L,D,H,I){const z=s.attributes,Z=D.attributes;let B=0;const ee=H.getAttributes();for(const $ in ee)if(ee[$].location>=0){const j=z[$];let he=Z[$];if(he===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(he=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(he=L.instanceColor)),j===void 0||j.attribute!==he||he&&j.data!==he.data)return!0;B++}return s.attributesNum!==B||s.index!==I}function _(L,D,H,I){const z={},Z=D.attributes;let B=0;const ee=H.getAttributes();for(const $ in ee)if(ee[$].location>=0){let j=Z[$];j===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));const he={};he.attribute=j,j&&j.data&&(he.data=j.data),z[$]=he,B++}s.attributes=z,s.attributesNum=B,s.index=I}function g(){const L=s.newAttributes;for(let D=0,H=L.length;D<H;D++)L[D]=0}function m(L){p(L,0)}function p(L,D){const H=s.newAttributes,I=s.enabledAttributes,z=s.attributeDivisors;H[L]=1,I[L]===0&&(i.enableVertexAttribArray(L),I[L]=1),z[L]!==D&&(i.vertexAttribDivisor(L,D),z[L]=D)}function S(){const L=s.newAttributes,D=s.enabledAttributes;for(let H=0,I=D.length;H<I;H++)D[H]!==L[H]&&(i.disableVertexAttribArray(H),D[H]=0)}function T(L,D,H,I,z,Z,B){B===!0?i.vertexAttribIPointer(L,D,H,z,Z):i.vertexAttribPointer(L,D,H,I,z,Z)}function x(L,D,H,I){g();const z=I.attributes,Z=H.getAttributes(),B=D.defaultAttributeValues;for(const ee in Z){const $=Z[ee];if($.location>=0){let C=z[ee];if(C===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(C=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(C=L.instanceColor)),C!==void 0){const j=C.normalized,he=C.itemSize,Ee=e.get(C);if(Ee===void 0)continue;const ke=Ee.buffer,Be=Ee.type,Xe=Ee.bytesPerElement,G=Be===i.INT||Be===i.UNSIGNED_INT||C.gpuType===Lf;if(C.isInterleavedBufferAttribute){const J=C.data,de=J.stride,He=C.offset;if(J.isInstancedInterleavedBuffer){for(let me=0;me<$.locationSize;me++)p($.location+me,J.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let me=0;me<$.locationSize;me++)m($.location+me);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let me=0;me<$.locationSize;me++)T($.location+me,he/$.locationSize,Be,j,de*Xe,(He+he/$.locationSize*me)*Xe,G)}else{if(C.isInstancedBufferAttribute){for(let J=0;J<$.locationSize;J++)p($.location+J,C.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let J=0;J<$.locationSize;J++)m($.location+J);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let J=0;J<$.locationSize;J++)T($.location+J,he/$.locationSize,Be,j,he*Xe,he/$.locationSize*J*Xe,G)}}else if(B!==void 0){const j=B[ee];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv($.location,j);break;case 3:i.vertexAttrib3fv($.location,j);break;case 4:i.vertexAttrib4fv($.location,j);break;default:i.vertexAttrib1fv($.location,j)}}}}S()}function y(){w();for(const L in n){const D=n[L];for(const H in D){const I=D[H];for(const z in I){const Z=I[z];for(const B in Z)u(Z[B].object),delete Z[B];delete I[z]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;const D=n[L.id];for(const H in D){const I=D[H];for(const z in I){const Z=I[z];for(const B in Z)u(Z[B].object),delete Z[B];delete I[z]}}delete n[L.id]}function b(L){for(const D in n){const H=n[D];for(const I in H){const z=H[I];if(z[L.id]===void 0)continue;const Z=z[L.id];for(const B in Z)u(Z[B].object),delete Z[B];delete z[L.id]}}}function v(L){for(const D in n){const H=n[D],I=L.isInstancedMesh===!0?L.id:0,z=H[I];if(z!==void 0){for(const Z in z){const B=z[Z];for(const ee in B)u(B[ee].object),delete B[ee];delete z[Z]}delete H[I],Object.keys(H).length===0&&delete n[D]}}}function w(){R(),a=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function Iy(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Ny(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==Ai&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const v=b===Xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==ii&&b!==Fi&&!v&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&($e("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:x,maxSamples:y,samples:E}}function Uy(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Mr,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const S=s?0:n,T=S*4;let x=p.clippingState||null;l.value=x,x=u(_,f,T,d);for(let y=0;y!==T;++y)x[y]=t[y];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,x=d;T!==g;++T,x+=4)a.copy(h[T]).applyMatrix4(S,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}const Ws=4,Oy=6,Fy=20,By=256,Aa=new Om,Sd=new ht;let Hc=null,Vc=0,Gc=0,Wc=!1;const zy=new Y,Vr=new Y;class Md{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=zy}=s;Hc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hc,Vc,Gc),this._renderer.xr.enabled=Wc,e.scissorTest=!1,Us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Xi,format:Ai,colorSpace:Ll,depthBuffer:!1},r=yd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yd(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ky(s)),this._blurMaterial=Vy(s,e,t),this._ggxMaterial=Hy(s,e,t)}return r}_compileMaterial(e){const t=new Hn(new Zn,e);this._renderer.compile(t,Aa)}_sceneToCubeUV(e,t,n,r,s){const l=new kn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Sd),h.toneMapping=Hi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Hn(new _a,new Cm({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(Sd),p=!0);for(let T=0;T<6;T++){const x=T%3;x===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):x===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const y=this._cubeSize;Us(r,x*y,T>2?y:0,y,y),h.setRenderTarget(r),p&&h.render(g,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===fs||e.mapping===ra;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ed());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Us(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Aa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,d=h*f,{_lodMax:_}=this,g=this._sizeLods[n],m=3*g*(n>_-Ws?n-_+Ws:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=_-t,Us(s,m,p,3*g,2*g),r.setRenderTarget(s),r.render(o,Aa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,Us(e,m,p,3*g,2*g),r.setRenderTarget(e),r.render(o,Aa)}_blur(e,t,n,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[r],h=3*u*(r>this._lodMax-Ws?r-this._lodMax+Ws:0),f=4*(this._cubeSize-u);Us(t,h,f,3*u,2*u),a.setRenderTarget(t),a.render(l,Aa)}}function ky(i){const e=[],t=[];let n=i;const r=i-Ws+1+Oy;for(let s=0;s<r;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,_=new Float32Array(d*f*h),g=new Float32Array(d*f*h);for(let p=0;p<h;p++){const S=p%3*2/3-1,T=p>2?0:-1,x=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];_.set(x,d*f*p);for(let y=0;y<f;y++){const E=u[y*2]*2-1,b=u[y*2+1]*2-1;p===0?Vr.set(1,b,E):p===1?Vr.set(-E,1,-b):p===2?Vr.set(-E,b,1):p===3?Vr.set(-1,b,-E):p===4?Vr.set(-E,-1,b):Vr.set(E,b,-1),Vr.toArray(g,(p*f+y)*d)}}const m=new Zn;m.setAttribute("position",new Vi(_,d)),m.setAttribute("outputDirection",new Vi(g,d)),t.push(new Hn(m,null)),n>Ws&&n--}return{lodMeshes:t,sizeLods:e}}function yd(i,e,t){const n=new Ri(i,e,t);return n.texture.mapping=Ql,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Us(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Hy(i,e,t){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:By,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Vy(i,e,t){return new qi({name:"SphericalGaussianBlur",defines:{SAMPLES:Fy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Ed(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function bd(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function tc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class zm extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Dm(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _a(5,5,5),s=new qi({name:"CubemapFromEquirect",uniforms:sa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:sr});s.uniforms.tEquirect.value=t;const a=new Hn(r,s),o=t.minFilter;return t.minFilter===Kr&&(t.minFilter=bn),new qv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function Gy(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?a(f):s(f)}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===pc||d===mc)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const g=new zm(_.height);return g.fromEquirectangularTexture(i,f),e.set(f,g),f.addEventListener("dispose",c),o(g.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const d=f.mapping,_=d===pc||d===mc,g=d===fs||d===ra;if(_||g){let m=t.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Md(i)),m=_?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const S=f.image;return _&&S&&S.height>0||g&&S&&l(S)?(n===null&&(n=new Md(i)),m=_?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,d){return d===pc?f.mapping=fs:d===mc&&(f.mapping=ra),f}function l(f){let d=0;const _=6;for(let g=0;g<_;g++)f[g]!==void 0&&d++;return d===_}function c(f){const d=f.target;d.removeEventListener("dispose",c);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function u(f){const d=f.target;d.removeEventListener("dispose",u);const _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function Wy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ks("WebGLRenderer: "+n+" extension not supported."),r}}}function Xy(i,e,t,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(_===void 0)return;if(d!==null){const S=d.array;g=d.version;for(let T=0,x=S.length;T<x;T+=3){const y=S[T+0],E=S[T+1],b=S[T+2];f.push(y,E,E,b,b,y)}}else{const S=_.array;g=_.version;for(let T=0,x=S.length/3-1;T<x;T+=3){const y=T+0,E=T+1,b=T+2;f.push(y,E,E,b,b,y)}}const m=new(_.count>=65535?Am:wm)(f,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function qy(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){i.drawElements(n,f,s,h*a),t.update(f,n,1)}function c(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,s,h*a,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,d);let g=0;for(let m=0;m<d;m++)g+=f[m];t.update(g,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Yy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:_t("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function $y(i,e,t){const n=new WeakMap,r=new Ut;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let R=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var d=R;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let y=o.attributes.position.count*x,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const b=new Float32Array(y*E*4*h),v=new Em(b,y,E,h);v.type=Fi,v.needsUpdate=!0;const w=x*4;for(let L=0;L<h;L++){const D=p[L],H=S[L],I=T[L],z=y*E*4*L;for(let Z=0;Z<D.count;Z++){const B=Z*w;_===!0&&(r.fromBufferAttribute(D,Z),b[z+B+0]=r.x,b[z+B+1]=r.y,b[z+B+2]=r.z,b[z+B+3]=0),g===!0&&(r.fromBufferAttribute(H,Z),b[z+B+4]=r.x,b[z+B+5]=r.y,b[z+B+6]=r.z,b[z+B+7]=0),m===!0&&(r.fromBufferAttribute(I,Z),b[z+B+8]=r.x,b[z+B+9]=r.y,b[z+B+10]=r.z,b[z+B+11]=I.itemSize===4?r.w:1)}}f={count:h,texture:v,size:new ot(y,E)},n.set(o,f),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Ky(i,e,t,n,r){let s=new WeakMap;function a(c){const u=r.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Zy={[om]:"LINEAR_TONE_MAPPING",[lm]:"REINHARD_TONE_MAPPING",[cm]:"CINEON_TONE_MAPPING",[um]:"ACES_FILMIC_TONE_MAPPING",[hm]:"AGX_TONE_MAPPING",[dm]:"NEUTRAL_TONE_MAPPING",[fm]:"CUSTOM_TONE_MAPPING"};function Jy(i,e,t,n,r,s){const a=new Ri(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Zn;c.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new cn([0,2,0,0,2,0],2));const u=new Bv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Hn(c,u),f=new Om(-1,1,1,-1,0,1);let d=null,_=null,g=!1,m,p=null,S=[],T=!1;this.setSize=function(x,y){a.setSize(x,y),o!==null&&o.setSize(x,y),l!==null&&l.setSize(x,y);for(let E=0;E<S.length;E++){const b=S[E];b.setSize&&b.setSize(x,y)}},this.setEffects=function(x){S=x,T=S.length>0&&S[0].isRenderPass===!0;const y=a.width,E=a.height;S.length>0&&o===null&&(o=new Ri(y,E,{type:Xi,depthBuffer:!1,stencilBuffer:!1}),l=new Ri(y,E,{type:Xi,depthBuffer:!1,stencilBuffer:!1}));for(let b=0;b<S.length;b++){const v=S[b];v.setSize&&v.setSize(y,E)}},this.begin=function(x,y){if(g||x.toneMapping===Hi&&S.length===0)return!1;if(p=y,y!==null){const E=y.width,b=y.height;(a.width!==E||a.height!==b)&&this.setSize(E,b)}return T===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=Hi,!0},this.hasRenderPass=function(){return T},this.end=function(x,y){x.toneMapping=m,g=!0;let E=a,b=o;for(let v=0;v<S.length;v++){const w=S[v];w.enabled!==!1&&(w.render(x,b,E,y),w.needsSwap!==!1&&(E=b,b=b===o?l:o))}if(d!==x.outputColorSpace||_!==x.toneMapping){d=x.outputColorSpace,_=x.toneMapping,u.defines={},ct.getTransfer(d)===Mt&&(u.defines.SRGB_TRANSFER="");const v=Zy[_];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(p),x.render(h,f),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const km=new Fn,Ju=new ao(1,1),Hm=new Em,Vm=new pv,Gm=new Dm,Td=[],wd=[],Ad=new Float32Array(16),Rd=new Float32Array(9),Cd=new Float32Array(4);function ga(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Td[r];if(s===void 0&&(s=new Float32Array(r),Td[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function en(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nc(i,e){let t=wd[e];t===void 0&&(t=new Int32Array(e),wd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Qy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function jy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2fv(this.addr,e),tn(t,e)}}function eE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;i.uniform3fv(this.addr,e),tn(t,e)}}function tE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4fv(this.addr,e),tn(t,e)}}function nE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Cd.set(n),i.uniformMatrix2fv(this.addr,!1,Cd),tn(t,n)}}function iE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Rd.set(n),i.uniformMatrix3fv(this.addr,!1,Rd),tn(t,n)}}function rE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Ad.set(n),i.uniformMatrix4fv(this.addr,!1,Ad),tn(t,n)}}function sE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function aE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2iv(this.addr,e),tn(t,e)}}function oE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3iv(this.addr,e),tn(t,e)}}function lE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4iv(this.addr,e),tn(t,e)}}function cE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function uE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2uiv(this.addr,e),tn(t,e)}}function fE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3uiv(this.addr,e),tn(t,e)}}function hE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4uiv(this.addr,e),tn(t,e)}}function dE(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ju.compareFunction=t.isReversedDepthBuffer()?zf:Bf,s=Ju):s=km,t.setTexture2D(e||s,r)}function pE(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Vm,r)}function mE(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Gm,r)}function _E(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Hm,r)}function gE(i){switch(i){case 5126:return Qy;case 35664:return jy;case 35665:return eE;case 35666:return tE;case 35674:return nE;case 35675:return iE;case 35676:return rE;case 5124:case 35670:return sE;case 35667:case 35671:return aE;case 35668:case 35672:return oE;case 35669:case 35673:return lE;case 5125:return cE;case 36294:return uE;case 36295:return fE;case 36296:return hE;case 35678:case 36198:case 36298:case 36306:case 35682:return dE;case 35679:case 36299:case 36307:return pE;case 35680:case 36300:case 36308:case 36293:return mE;case 36289:case 36303:case 36311:case 36292:return _E}}function xE(i,e){i.uniform1fv(this.addr,e)}function vE(i,e){const t=ga(e,this.size,2);i.uniform2fv(this.addr,t)}function SE(i,e){const t=ga(e,this.size,3);i.uniform3fv(this.addr,t)}function ME(i,e){const t=ga(e,this.size,4);i.uniform4fv(this.addr,t)}function yE(i,e){const t=ga(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function EE(i,e){const t=ga(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function bE(i,e){const t=ga(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function TE(i,e){i.uniform1iv(this.addr,e)}function wE(i,e){i.uniform2iv(this.addr,e)}function AE(i,e){i.uniform3iv(this.addr,e)}function RE(i,e){i.uniform4iv(this.addr,e)}function CE(i,e){i.uniform1uiv(this.addr,e)}function PE(i,e){i.uniform2uiv(this.addr,e)}function DE(i,e){i.uniform3uiv(this.addr,e)}function LE(i,e){i.uniform4uiv(this.addr,e)}function IE(i,e,t){const n=this.cache,r=e.length,s=nc(t,r);en(n,s)||(i.uniform1iv(this.addr,s),tn(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ju:a=km;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function NE(i,e,t){const n=this.cache,r=e.length,s=nc(t,r);en(n,s)||(i.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Vm,s[a])}function UE(i,e,t){const n=this.cache,r=e.length,s=nc(t,r);en(n,s)||(i.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Gm,s[a])}function OE(i,e,t){const n=this.cache,r=e.length,s=nc(t,r);en(n,s)||(i.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Hm,s[a])}function FE(i){switch(i){case 5126:return xE;case 35664:return vE;case 35665:return SE;case 35666:return ME;case 35674:return yE;case 35675:return EE;case 35676:return bE;case 5124:case 35670:return TE;case 35667:case 35671:return wE;case 35668:case 35672:return AE;case 35669:case 35673:return RE;case 5125:return CE;case 36294:return PE;case 36295:return DE;case 36296:return LE;case 35678:case 36198:case 36298:case 36306:case 35682:return IE;case 35679:case 36299:case 36307:return NE;case 35680:case 36300:case 36308:case 36293:return UE;case 36289:case 36303:case 36311:case 36292:return OE}}class BE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gE(t.type)}}class zE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FE(t.type)}}class kE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Xc=/(\w+)(\])?(\[|\.)?/g;function Pd(i,e){i.seq.push(e),i.map[e.id]=e}function HE(i,e,t){const n=i.name,r=n.length;for(Xc.lastIndex=0;;){const s=Xc.exec(n),a=Xc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Pd(t,c===void 0?new BE(o,i,e):new zE(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new kE(o),Pd(t,h)),t=h}}}class xl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);HE(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Dd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const VE=37297;let GE=0;function WE(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ld=new Qe;function XE(i){ct._getMatrix(Ld,ct.workingColorSpace,i);const e=`mat3( ${Ld.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case Il:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Id(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+WE(i.getShaderSource(e),o)}else return s}function qE(i,e){const t=XE(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const YE={[om]:"Linear",[lm]:"Reinhard",[cm]:"Cineon",[um]:"ACESFilmic",[hm]:"AgX",[dm]:"Neutral",[fm]:"Custom"};function $E(i,e){const t=YE[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ko=new Y;function KE(){ct.getLuminanceCoefficients(Ko);const i=Ko.x.toFixed(4),e=Ko.y.toFixed(4),t=Ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function JE(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function QE(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ia(i){return i!==""}function Nd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ud(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qu(i){return i.replace(jE,tb)}const eb=new Map;function tb(i,e){let t=et[e];if(t===void 0){const n=eb.get(e);if(n!==void 0)t=et[n],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Qu(t)}const nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Od(i){return i.replace(nb,ib)}function ib(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const rb={[dl]:"SHADOWMAP_TYPE_PCF",[La]:"SHADOWMAP_TYPE_VSM"};function sb(i){return rb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ab={[fs]:"ENVMAP_TYPE_CUBE",[ra]:"ENVMAP_TYPE_CUBE",[Ql]:"ENVMAP_TYPE_CUBE_UV"};function ob(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ab[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const lb={[ra]:"ENVMAP_MODE_REFRACTION"};function cb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ub={[am]:"ENVMAP_BLENDING_MULTIPLY",[Xx]:"ENVMAP_BLENDING_MIX",[qx]:"ENVMAP_BLENDING_ADD"};function fb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ub[i.combine]||"ENVMAP_BLENDING_NONE"}function hb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function db(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=sb(t),c=ob(t),u=cb(t),h=fb(t),f=hb(t),d=ZE(t),_=JE(s),g=r.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ia).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ia).join(`
`),p.length>0&&(p+=`
`)):(m=[Fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),p=[Fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?et.tonemapping_pars_fragment:"",t.toneMapping!==Hi?$E("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,qE("linearToOutputTexel",t.outputColorSpace),KE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ia).join(`
`)),a=Qu(a),a=Nd(a,t),a=Ud(a,t),o=Qu(o),o=Nd(o,t),o=Ud(o,t),a=Od(a),o=Od(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===$h?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=S+m+a,x=S+p+o,y=Dd(r,r.VERTEX_SHADER,T),E=Dd(r,r.FRAGMENT_SHADER,x);r.attachShader(g,y),r.attachShader(g,E),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function b(L){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(g)||"",H=r.getShaderInfoLog(y)||"",I=r.getShaderInfoLog(E)||"",z=D.trim(),Z=H.trim(),B=I.trim();let ee=!0,$=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,y,E);else{const C=Id(r,y,"vertex"),j=Id(r,E,"fragment");_t("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+C+`
`+j)}else z!==""?$e("WebGLProgram: Program Info Log:",z):(Z===""||B==="")&&($=!1);$&&(L.diagnostics={runnable:ee,programLog:z,vertexShader:{log:Z,prefix:m},fragmentShader:{log:B,prefix:p}})}r.deleteShader(y),r.deleteShader(E),v=new xl(r,g),w=QE(r,g)}let v;this.getUniforms=function(){return v===void 0&&b(this),v};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(g,VE)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=GE++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=E,this}let pb=0;class mb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _b(e),t.set(e,n)),n}}class _b{constructor(e){this.id=pb++,this.code=e,this.usedTimes=0}}function gb(i){return i===hs||i===Pl||i===Dl}function xb(i,e,t,n,r,s){const a=new bm,o=new mb,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,w,R,L,D,H){const I=L.fog,z=D.geometry,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ee=e.get(v.envMap||Z,B),$=ee&&ee.mapping===Ql?ee.image.height:null,C=d[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&$e("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const j=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,he=j!==void 0?j.length:0;let Ee=0;z.morphAttributes.position!==void 0&&(Ee=1),z.morphAttributes.normal!==void 0&&(Ee=2),z.morphAttributes.color!==void 0&&(Ee=3);let ke,Be,Xe,G;if(C){const ze=Ui[C];ke=ze.vertexShader,Be=ze.fragmentShader}else{ke=v.vertexShader,Be=v.fragmentShader;const ze=o.getVertexShaderStage(v),ae=o.getFragmentShaderStage(v);o.update(v,ze,ae),Xe=ze.id,G=ae.id}const J=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),He=D.isInstancedMesh===!0,me=D.isBatchedMesh===!0,Re=!!v.map,Le=!!v.matcap,we=!!ee,qe=!!v.aoMap,Je=!!v.lightMap,V=!!v.bumpMap&&v.wireframe===!1,ve=!!v.normalMap,Ke=!!v.displacementMap,mt=!!v.emissiveMap,Ge=!!v.metalnessMap,dt=!!v.roughnessMap,F=v.anisotropy>0,gt=v.clearcoat>0,Ye=v.dispersion>0,P=v.retroreflectivity>0,M=v.iridescence>0,k=v.sheen>0,X=v.transmission>0,Q=F&&!!v.anisotropyMap,ue=gt&&!!v.clearcoatMap,oe=gt&&!!v.clearcoatNormalMap,te=gt&&!!v.clearcoatRoughnessMap,ie=M&&!!v.iridescenceMap,_e=M&&!!v.iridescenceThicknessMap,De=k&&!!v.sheenColorMap,ge=k&&!!v.sheenRoughnessMap,pe=!!v.specularMap,ce=!!v.specularColorMap,Oe=!!v.specularIntensityMap,We=X&&!!v.transmissionMap,N=X&&!!v.thicknessMap,fe=!!v.gradientMap,ne=!!v.alphaMap,xe=v.alphaTest>0,Me=!!v.alphaHash,re=!!v.extensions;let le=Hi;v.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(le=i.toneMapping);const se={shaderID:C,shaderType:v.type,shaderName:v.name,vertexShader:ke,fragmentShader:Be,defines:v.defines,customVertexShaderID:Xe,customFragmentShaderID:G,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:me,batchingColor:me&&D._colorsTexture!==null,instancing:He,instancingColor:He&&D.instanceColor!==null,instancingMorph:He&&D.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Re,matcap:Le,envMap:we,envMapMode:we&&ee.mapping,envMapCubeUVHeight:$,aoMap:qe,lightMap:Je,bumpMap:V,normalMap:ve,displacementMap:Ke,emissiveMap:mt,normalMapObjectSpace:ve&&v.normalMapType===Kx,normalMapTangentSpace:ve&&v.normalMapType===Ku,packedNormalMap:ve&&v.normalMapType===Ku&&gb(v.normalMap.format),metalnessMap:Ge,roughnessMap:dt,anisotropy:F,anisotropyMap:Q,clearcoat:gt,clearcoatMap:ue,clearcoatNormalMap:oe,clearcoatRoughnessMap:te,dispersion:Ye,retroreflection:P,iridescence:M,iridescenceMap:ie,iridescenceThicknessMap:_e,sheen:k,sheenColorMap:De,sheenRoughnessMap:ge,specularMap:pe,specularColorMap:ce,specularIntensityMap:Oe,transmission:X,transmissionMap:We,thicknessMap:N,gradientMap:fe,opaque:v.transparent===!1&&v.blending===Ha&&v.alphaToCoverage===!1,alphaMap:ne,alphaTest:xe,alphaHash:Me,combine:v.combine,mapUv:Re&&_(v.map.channel),aoMapUv:qe&&_(v.aoMap.channel),lightMapUv:Je&&_(v.lightMap.channel),bumpMapUv:V&&_(v.bumpMap.channel),normalMapUv:ve&&_(v.normalMap.channel),displacementMapUv:Ke&&_(v.displacementMap.channel),emissiveMapUv:mt&&_(v.emissiveMap.channel),metalnessMapUv:Ge&&_(v.metalnessMap.channel),roughnessMapUv:dt&&_(v.roughnessMap.channel),anisotropyMapUv:Q&&_(v.anisotropyMap.channel),clearcoatMapUv:ue&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ge&&_(v.sheenRoughnessMap.channel),specularMapUv:pe&&_(v.specularMap.channel),specularColorMapUv:ce&&_(v.specularColorMap.channel),specularIntensityMapUv:Oe&&_(v.specularIntensityMap.channel),transmissionMapUv:We&&_(v.transmissionMap.channel),thicknessMapUv:N&&_(v.thicknessMap.channel),alphaMapUv:ne&&_(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ve||F),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(Re||ne),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&ve===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:de,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ee,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:Re&&v.map.isVideoTexture===!0&&ct.getTransfer(v.map.colorSpace)===Mt,decodeVideoTextureEmissive:mt&&v.emissiveMap.isVideoTexture===!0&&ct.getTransfer(v.emissiveMap.colorSpace)===Mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===tr,flipSided:v.side===Wn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:re&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&v.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return se.vertexUv1s=l.has(1),se.vertexUv2s=l.has(2),se.vertexUv3s=l.has(3),l.clear(),se}function m(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)w.push(R),w.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(p(w,v),S(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function p(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function S(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function T(v){const w=d[v.type];let R;if(w){const L=Ui[w];R=Uv.clone(L.uniforms)}else R=v.uniforms;return R}function x(v,w){let R=u.get(w);return R!==void 0?++R.usedTimes:(R=new db(i,w,v,r),c.push(R),u.set(w,R)),R}function y(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function b(){o.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:T,acquireProgram:x,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:b}}function vb(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Sb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Bd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zd(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,_,g,m,p){let S=i[e];return S===void 0?(S={id:f.id,object:f,geometry:d,material:_,materialVariant:a(f),groupOrder:g,renderOrder:f.renderOrder,z:m,group:p},i[e]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=_,S.materialVariant=a(f),S.groupOrder=g,S.renderOrder=f.renderOrder,S.z=m,S.group=p),e++,S}function l(f,d,_,g,m,p,S){S.reversedDepth===!0&&(m=-m);const T=o(f,d,_,g,m,p);_.transmission>0?n.push(T):_.transparent===!0?r.push(T):t.push(T)}function c(f,d,_,g,m,p){const S=o(f,d,_,g,m,p);_.transmission>0?n.unshift(S):_.transparent===!0?r.unshift(S):t.unshift(S)}function u(f,d){t.length>1&&t.sort(f||Sb),n.length>1&&n.sort(d||Bd),r.length>1&&r.sort(d||Bd)}function h(){for(let f=e,d=i.length;f<d;f++){const _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function Mb(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new zd,i.set(n,[a])):r>=s.length?(a=new zd,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function yb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Y,color:new ht};break;case"SpotLight":t={position:new Y,direction:new Y,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[e.id]=t,t}}}function Eb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let bb=0;function Tb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wb(i){const e=new yb,t=Eb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);const r=new Y,s=new Ft,a=new Ft;function o(c){let u=0,h=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,S=0,T=0,x=0,y=0,E=0,b=0,v=0,w=0,R=0;c.sort(Tb);for(let D=0,H=c.length;D<H;D++){const I=c[D],z=I.color,Z=I.intensity,B=I.distance;let ee=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===hs?ee=I.shadow.map.texture:ee=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=z.r*Z,h+=z.g*Z,f+=z.b*Z;else if(I.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(I.sh.coefficients[$],Z);R++}else if(I.isSunLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const C=I.shadow,j=t.get(I);j.shadowIntensity=C.intensity,j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),n.sunShadow[_]=j,n.sunShadowMap[_]=ee;const he=C.getViewportCount();for(let Ee=0;Ee<he;Ee++)n.sunShadowMatrix[g+Ee]=C.getMatrix(Ee),n.sunShadowCascade[g+Ee]=C._cascadeData[Ee];g+=he,_++}n.sun[d]=$,d++}else if(I.isDirectionalLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const C=I.shadow,j=t.get(I);j.shadowIntensity=C.intensity,j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=ee,n.directionalShadowMatrix[m]=I.shadow.matrix,y++}n.directional[m]=$,m++}else if(I.isSpotLight){const $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(z).multiplyScalar(Z),$.distance=B,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,n.spot[S]=$;const C=I.shadow;if(I.map&&(n.spotLightMap[v]=I.map,v++,C.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[S]=C.matrix,I.castShadow){const j=t.get(I);j.shadowIntensity=C.intensity,j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,n.spotShadow[S]=j,n.spotShadowMap[S]=ee,b++}S++}else if(I.isRectAreaLight){const $=e.get(I);$.color.copy(z).multiplyScalar(Z),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),n.rectArea[T]=$,T++}else if(I.isPointLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){const C=I.shadow,j=t.get(I);j.shadowIntensity=C.intensity,j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,j.shadowCameraNear=C.camera.near,j.shadowCameraFar=C.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=ee,n.pointShadowMatrix[p]=I.shadow.matrix,E++}n.point[p]=$,p++}else if(I.isHemisphereLight){const $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(Z),$.groundColor.copy(I.groundColor).multiplyScalar(Z),n.hemi[x]=$,x++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const L=n.hash;(L.sunLength!==d||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==S||L.rectAreaLength!==T||L.hemiLength!==x||L.numSunShadows!==_||L.numDirectionalShadows!==y||L.numPointShadows!==E||L.numSpotShadows!==b||L.numSpotMaps!==v||L.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=S,n.rectArea.length=T,n.point.length=p,n.hemi.length=x,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,L.sunLength=d,L.directionalLength=m,L.pointLength=p,L.spotLength=S,L.rectAreaLength=T,L.hemiLength=x,L.numSunShadows=_,L.numDirectionalShadows=y,L.numPointShadows=E,L.numSpotShadows=b,L.numSpotMaps=v,L.numLightProbes=R,n.version=bb++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0,m=0;const p=u.matrixWorldInverse;for(let S=0,T=c.length;S<T;S++){const x=c[S];if(x.isSunLight){const y=n.sun[h];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),h++}else if(x.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),f++}else if(x.isSpotLight){const y=n.spot[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),_++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(x.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const y=n.hemi[m];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function kd(i){const e=new wb(i),t=[],n=[],r=[];function s(f){h.camera=f,t.length=0,n.length=0,r.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function l(f){r.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Ab(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new kd(i),e.set(r,[o])):s>=a.length?(o=new kd(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Rb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Pb=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],Db=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Hd=new Ft,Ra=new Y,qc=new Y;function Lb(i,e,t){let n=new Hf;const r=new ot,s=new ot,a=new Ut,o=new zv,l=new kv,c={},u=t.maxTextureSize,h={[us]:Wn,[Wn]:us,[tr]:tr},f=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Rb,fragmentShader:Cb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Zn;_.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Hn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dl;let p=this.type;this.render=function(E,b,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===wx&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=dl);const w=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),D=i.state;D.setBlending(sr),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const H=p!==this.type;H&&b.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=E.length;I<z;I++){const Z=E[I],B=Z.shadow;if(B===void 0){$e("WebGLShadowMap:",Z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const ee=B.getFrameExtents();r.multiply(ee),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,B.mapSize.y=s.y));const $=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=$,B.map===null||H===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===La){if(Z.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ri(r.x,r.y,{format:hs,type:Xi,minFilter:bn,magFilter:bn,generateMipmaps:!1}),B.map.texture.name=Z.name+".shadowMap",B.map.depthTexture=new ao(r.x,r.y,Fi),B.map.depthTexture.name=Z.name+".shadowMapDepth",B.map.depthTexture.format=lr,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=fn,B.map.depthTexture.magFilter=fn}else Z.isPointLight?(B.map=new zm(r.x),B.map.depthTexture=new Iv(r.x,Wi)):(B.map=new Ri(r.x,r.y),B.map.depthTexture=new ao(r.x,r.y,Wi)),B.map.depthTexture.name=Z.name+".shadowMap",B.map.depthTexture.format=lr,this.type===dl?(B.map.depthTexture.compareFunction=$?zf:Bf,B.map.depthTexture.minFilter=bn,B.map.depthTexture.magFilter=bn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=fn,B.map.depthTexture.magFilter=fn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==r.x||B.map.height!==r.y)&&B.map.setSize(r.x,r.y);const C=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();Z.isPointLight!==!0&&B.updateMatrices(Z,v);for(let j=0;j<C;j++){const he=B.getCamera(j);if(Z.isPointLight){const Ee=B.camera,ke=B.matrix,Be=Z.distance||Ee.far;Be!==Ee.far&&(Ee.far=Be,Ee.updateProjectionMatrix()),Ra.setFromMatrixPosition(Z.matrixWorld),Ee.position.copy(Ra),qc.copy(Ee.position),qc.add(Pb[j]),Ee.up.copy(Db[j]),Ee.lookAt(qc),Ee.updateMatrixWorld(),ke.makeTranslation(-Ra.x,-Ra.y,-Ra.z),Hd.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Hd,Ee.coordinateSystem,Ee.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,j),i.clear();else{j===0&&(i.setRenderTarget(B.map),i.clear());const Ee=B.getViewport(j);a.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),D.viewport(a)}n=B.getFrustum(j),x(b,v,he,Z,this.type)}B.isPointLightShadow!==!0&&this.type===La&&S(B,v),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,R,L)};function S(E,b){const v=e.update(g);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ri(r.x,r.y,{format:hs,type:Xi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,v,f,g,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,v,d,g,null)}function T(E,b,v,w){let R=null;const L=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)R=L;else if(R=v.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const D=R.uuid,H=b.uuid;let I=c[D];I===void 0&&(I={},c[D]=I);let z=I[H];z===void 0&&(z=R.clone(),I[H]=z,b.addEventListener("dispose",y)),R=z}if(R.visible=b.visible,R.wireframe=b.wireframe,w===La?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:h[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const D=i.properties.get(R);D.light=v}return R}function x(E,b,v,w,R){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===La)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const H=e.update(E),I=E.material;if(Array.isArray(I)){const z=H.groups;for(let Z=0,B=z.length;Z<B;Z++){const ee=z[Z],$=I[ee.materialIndex];if($&&$.visible){const C=T(E,$,w,R);E.onBeforeShadow(i,E,b,v,H,C,ee),i.renderBufferDirect(v,null,H,C,E,ee),E.onAfterShadow(i,E,b,v,H,C,ee)}}}else if(I.visible){const z=T(E,I,w,R);E.onBeforeShadow(i,E,b,v,H,z,null),i.renderBufferDirect(v,null,H,z,E,null),E.onAfterShadow(i,E,b,v,H,z,null)}}const D=E.children;for(let H=0,I=D.length;H<I;H++)x(D[H],b,v,w,R)}function y(E){E.target.removeEventListener("dispose",y);for(const v in c){const w=c[v],R=E.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function Ib(i,e){function t(){let N=!1;const fe=new Ut;let ne=null;const xe=new Ut(0,0,0,0);return{setMask:function(Me){ne!==Me&&!N&&(i.colorMask(Me,Me,Me,Me),ne=Me)},setLocked:function(Me){N=Me},setClear:function(Me,re,le,se,ze){ze===!0&&(Me*=se,re*=se,le*=se),fe.set(Me,re,le,se),xe.equals(fe)===!1&&(i.clearColor(Me,re,le,se),xe.copy(fe))},reset:function(){N=!1,ne=null,xe.set(-1,0,0,0)}}}function n(){let N=!1,fe=!1,ne=null,xe=null,Me=null;return{setReversed:function(re){if(fe!==re){const le=e.get("EXT_clip_control");re?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),fe=re;const se=Me;Me=null,this.setClear(se)}},getReversed:function(){return fe},setTest:function(re){re?J(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(re){ne!==re&&!N&&(i.depthMask(re),ne=re)},setFunc:function(re){if(fe&&(re=ov[re]),xe!==re){switch(re){case uu:i.depthFunc(i.NEVER);break;case fu:i.depthFunc(i.ALWAYS);break;case hu:i.depthFunc(i.LESS);break;case no:i.depthFunc(i.LEQUAL);break;case du:i.depthFunc(i.EQUAL);break;case pu:i.depthFunc(i.GEQUAL);break;case mu:i.depthFunc(i.GREATER);break;case _u:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=re}},setLocked:function(re){N=re},setClear:function(re){Me!==re&&(Me=re,fe&&(re=1-re),i.clearDepth(re))},reset:function(){N=!1,ne=null,xe=null,Me=null,fe=!1}}}function r(){let N=!1,fe=null,ne=null,xe=null,Me=null,re=null,le=null,se=null,ze=null;return{setTest:function(ae){N||(ae?J(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(ae){fe!==ae&&!N&&(i.stencilMask(ae),fe=ae)},setFunc:function(ae,Ve,Ie){(ne!==ae||xe!==Ve||Me!==Ie)&&(i.stencilFunc(ae,Ve,Ie),ne=ae,xe=Ve,Me=Ie)},setOp:function(ae,Ve,Ie){(re!==ae||le!==Ve||se!==Ie)&&(i.stencilOp(ae,Ve,Ie),re=ae,le=Ve,se=Ie)},setLocked:function(ae){N=ae},setClear:function(ae){ze!==ae&&(i.clearStencil(ae),ze=ae)},reset:function(){N=!1,fe=null,ne=null,xe=null,Me=null,re=null,le=null,se=null,ze=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f={},d=new WeakMap,_=[],g=null,m=!1,p=null,S=null,T=null,x=null,y=null,E=null,b=null,v=new ht(0,0,0),w=0,R=!1,L=null,D=null,H=null,I=null,z=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,ee=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec($)[1]),B=ee>=1):$.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),B=ee>=2);let C=null,j={};const he=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),ke=new Ut().fromArray(he),Be=new Ut().fromArray(Ee);function Xe(N,fe,ne,xe){const Me=new Uint8Array(4),re=i.createTexture();i.bindTexture(N,re),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let le=0;le<ne;le++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(fe+le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return re}const G={};G[i.TEXTURE_2D]=Xe(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=Xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=Xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=Xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(no),V(!1),ve(Wh),J(i.CULL_FACE),qe(sr);function J(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function de(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function He(N,fe){return f[N]!==fe?(i.bindFramebuffer(N,fe),f[N]=fe,N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=fe),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function me(N,fe){let ne=_,xe=!1;if(N){ne=d.get(fe),ne===void 0&&(ne=[],d.set(fe,ne));const Me=N.textures;if(ne.length!==Me.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let re=0,le=Me.length;re<le;re++)ne[re]=i.COLOR_ATTACHMENT0+re;ne.length=Me.length,xe=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,xe=!0);xe&&i.drawBuffers(ne)}function Re(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const Le={[ks]:i.FUNC_ADD,[Rx]:i.FUNC_SUBTRACT,[Cx]:i.FUNC_REVERSE_SUBTRACT};Le[Px]=i.MIN,Le[Dx]=i.MAX;const we={[Lx]:i.ZERO,[Ix]:i.ONE,[Nx]:i.SRC_COLOR,[rm]:i.SRC_ALPHA,[kx]:i.SRC_ALPHA_SATURATE,[Bx]:i.DST_COLOR,[Ox]:i.DST_ALPHA,[Ux]:i.ONE_MINUS_SRC_COLOR,[sm]:i.ONE_MINUS_SRC_ALPHA,[zx]:i.ONE_MINUS_DST_COLOR,[Fx]:i.ONE_MINUS_DST_ALPHA,[Hx]:i.CONSTANT_COLOR,[Vx]:i.ONE_MINUS_CONSTANT_COLOR,[Gx]:i.CONSTANT_ALPHA,[Wx]:i.ONE_MINUS_CONSTANT_ALPHA};function qe(N,fe,ne,xe,Me,re,le,se,ze,ae){if(N===sr){m===!0&&(de(i.BLEND),m=!1);return}if(m===!1&&(J(i.BLEND),m=!0),N!==Ax){if(N!==p||ae!==R){if((S!==ks||y!==ks)&&(i.blendEquation(i.FUNC_ADD),S=ks,y=ks),ae)switch(N){case Ha:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xh:i.blendFunc(i.ONE,i.ONE);break;case qh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:_t("WebGLState: Invalid blending: ",N);break}else switch(N){case Ha:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case qh:_t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yh:_t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_t("WebGLState: Invalid blending: ",N);break}T=null,x=null,E=null,b=null,v.set(0,0,0),w=0,p=N,R=ae}return}Me=Me||fe,re=re||ne,le=le||xe,(fe!==S||Me!==y)&&(i.blendEquationSeparate(Le[fe],Le[Me]),S=fe,y=Me),(ne!==T||xe!==x||re!==E||le!==b)&&(i.blendFuncSeparate(we[ne],we[xe],we[re],we[le]),T=ne,x=xe,E=re,b=le),(se.equals(v)===!1||ze!==w)&&(i.blendColor(se.r,se.g,se.b,ze),v.copy(se),w=ze),p=N,R=!1}function Je(N,fe){N.side===tr?de(i.CULL_FACE):J(i.CULL_FACE);let ne=N.side===Wn;fe&&(ne=!ne),V(ne),N.blending===Ha&&N.transparent===!1?qe(sr):qe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const xe=N.stencilWrite;o.setTest(xe),xe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),mt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function V(N){L!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),L=N)}function ve(N){N!==bx?(J(i.CULL_FACE),N!==D&&(N===Wh?i.cullFace(i.BACK):N===Tx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),D=N}function Ke(N){N!==H&&(B&&i.lineWidth(N),H=N)}function mt(N,fe,ne){N?(J(i.POLYGON_OFFSET_FILL),(I!==fe||z!==ne)&&(I=fe,z=ne,a.getReversed()&&(fe=-fe),i.polygonOffset(fe,ne))):de(i.POLYGON_OFFSET_FILL)}function Ge(N){N?J(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function dt(N){N===void 0&&(N=i.TEXTURE0+Z-1),C!==N&&(i.activeTexture(N),C=N)}function F(N,fe,ne){ne===void 0&&(C===null?ne=i.TEXTURE0+Z-1:ne=C);let xe=j[ne];xe===void 0&&(xe={type:void 0,texture:void 0},j[ne]=xe),(xe.type!==N||xe.texture!==fe)&&(C!==ne&&(i.activeTexture(ne),C=ne),i.bindTexture(N,fe||G[N]),xe.type=N,xe.texture=fe)}function gt(){const N=j[C];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Ye(){try{i.compressedTexImage2D(...arguments)}catch(N){_t("WebGLState:",N)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(N){_t("WebGLState:",N)}}function M(){try{i.texSubImage2D(...arguments)}catch(N){_t("WebGLState:",N)}}function k(){try{i.texSubImage3D(...arguments)}catch(N){_t("WebGLState:",N)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(N){_t("WebGLState:",N)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(N){_t("WebGLState:",N)}}function ue(){try{i.texStorage2D(...arguments)}catch(N){_t("WebGLState:",N)}}function oe(){try{i.texStorage3D(...arguments)}catch(N){_t("WebGLState:",N)}}function te(){try{i.texImage2D(...arguments)}catch(N){_t("WebGLState:",N)}}function ie(){try{i.texImage3D(...arguments)}catch(N){_t("WebGLState:",N)}}function _e(N){return h[N]!==void 0?h[N]:i.getParameter(N)}function De(N,fe){h[N]!==fe&&(i.pixelStorei(N,fe),h[N]=fe)}function ge(N){ke.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ke.copy(N))}function pe(N){Be.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Be.copy(N))}function ce(N,fe){let ne=c.get(fe);ne===void 0&&(ne=new WeakMap,c.set(fe,ne));let xe=ne.get(N);xe===void 0&&(xe=i.getUniformBlockIndex(fe,N.name),ne.set(N,xe))}function Oe(N,fe){const xe=c.get(fe).get(N);l.get(fe)!==xe&&(i.uniformBlockBinding(fe,xe,N.__bindingPointIndex),l.set(fe,xe))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},C=null,j={},f={},d=new WeakMap,_=[],g=null,m=!1,p=null,S=null,T=null,x=null,y=null,E=null,b=null,v=new ht(0,0,0),w=0,R=!1,L=null,D=null,H=null,I=null,z=null,ke.set(0,0,i.canvas.width,i.canvas.height),Be.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:de,bindFramebuffer:He,drawBuffers:me,useProgram:Re,setBlending:qe,setMaterial:Je,setFlipSided:V,setCullFace:ve,setLineWidth:Ke,setPolygonOffset:mt,setScissorTest:Ge,activeTexture:dt,bindTexture:F,unbindTexture:gt,compressedTexImage2D:Ye,compressedTexImage3D:P,texImage2D:te,texImage3D:ie,pixelStorei:De,getParameter:_e,updateUBOMapping:ce,uniformBlockBinding:Oe,texStorage2D:ue,texStorage3D:oe,texSubImage2D:M,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:Q,scissor:ge,viewport:pe,reset:We}}function Nb(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,u=new WeakMap,h=new Set;let f;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,M){return _?new OffscreenCanvas(P,M):Nl("canvas")}function m(P,M,k){let X=1;const Q=Ye(P);if((Q.width>k||Q.height>k)&&(X=k/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ue=Math.floor(X*Q.width),oe=Math.floor(X*Q.height);f===void 0&&(f=g(ue,oe));const te=M?g(ue,oe):f;return te.width=ue,te.height=oe,te.getContext("2d").drawImage(P,0,0,ue,oe),$e("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ue+"x"+oe+")."),te}else return"data"in P&&$e("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function p(P){return P.generateMipmaps}function S(P){i.generateMipmap(P)}function T(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,M,k,X,Q,ue=!1){if(P!==null){if(i[P]!==void 0)return i[P];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let oe;X&&(oe=e.get("EXT_texture_norm16"),oe||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=M;if(M===i.RED&&(k===i.FLOAT&&(te=i.R32F),k===i.HALF_FLOAT&&(te=i.R16F),k===i.UNSIGNED_BYTE&&(te=i.R8),k===i.UNSIGNED_SHORT&&oe&&(te=oe.R16_EXT),k===i.SHORT&&oe&&(te=oe.R16_SNORM_EXT)),M===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(te=i.R8UI),k===i.UNSIGNED_SHORT&&(te=i.R16UI),k===i.UNSIGNED_INT&&(te=i.R32UI),k===i.BYTE&&(te=i.R8I),k===i.SHORT&&(te=i.R16I),k===i.INT&&(te=i.R32I)),M===i.RG&&(k===i.FLOAT&&(te=i.RG32F),k===i.HALF_FLOAT&&(te=i.RG16F),k===i.UNSIGNED_BYTE&&(te=i.RG8),k===i.UNSIGNED_SHORT&&oe&&(te=oe.RG16_EXT),k===i.SHORT&&oe&&(te=oe.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(te=i.RG8UI),k===i.UNSIGNED_SHORT&&(te=i.RG16UI),k===i.UNSIGNED_INT&&(te=i.RG32UI),k===i.BYTE&&(te=i.RG8I),k===i.SHORT&&(te=i.RG16I),k===i.INT&&(te=i.RG32I)),M===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(te=i.RGB8UI),k===i.UNSIGNED_SHORT&&(te=i.RGB16UI),k===i.UNSIGNED_INT&&(te=i.RGB32UI),k===i.BYTE&&(te=i.RGB8I),k===i.SHORT&&(te=i.RGB16I),k===i.INT&&(te=i.RGB32I)),M===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),k===i.UNSIGNED_INT&&(te=i.RGBA32UI),k===i.BYTE&&(te=i.RGBA8I),k===i.SHORT&&(te=i.RGBA16I),k===i.INT&&(te=i.RGBA32I)),M===i.RGB&&(k===i.UNSIGNED_SHORT&&oe&&(te=oe.RGB16_EXT),k===i.SHORT&&oe&&(te=oe.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),M===i.RGBA){const ie=ue?Il:ct.getTransfer(Q);k===i.FLOAT&&(te=i.RGBA32F),k===i.HALF_FLOAT&&(te=i.RGBA16F),k===i.UNSIGNED_BYTE&&(te=ie===Mt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&oe&&(te=oe.RGBA16_EXT),k===i.SHORT&&oe&&(te=oe.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function y(P,M){let k;return P?M===null||M===Wi||M===ro?k=i.DEPTH24_STENCIL8:M===Fi?k=i.DEPTH32F_STENCIL8:M===io&&(k=i.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Wi||M===ro?k=i.DEPTH_COMPONENT24:M===Fi?k=i.DEPTH_COMPONENT32F:M===io&&(k=i.DEPTH_COMPONENT16),k}function E(P,M){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==fn&&P.minFilter!==bn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function b(P){const M=P.target;M.removeEventListener("dispose",b),w(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&h.delete(M)}function v(P){const M=P.target;M.removeEventListener("dispose",v),L(M)}function w(P){const M=n.get(P);if(M.__webglInit===void 0)return;const k=P.source,X=d.get(k);if(X){const Q=X[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(P),Object.keys(X).length===0&&d.delete(k)}n.remove(P)}function R(P){const M=n.get(P);i.deleteTexture(M.__webglTexture);const k=P.source,X=d.get(k);delete X[M.__cacheKey],a.memory.textures--}function L(P){const M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(M.__webglFramebuffer[X]))for(let Q=0;Q<M.__webglFramebuffer[X].length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[X][Q]);else i.deleteFramebuffer(M.__webglFramebuffer[X]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[X])}else{if(Array.isArray(M.__webglFramebuffer))for(let X=0;X<M.__webglFramebuffer.length;X++)i.deleteFramebuffer(M.__webglFramebuffer[X]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let X=0;X<M.__webglColorRenderbuffer.length;X++)M.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=P.textures;for(let X=0,Q=k.length;X<Q;X++){const ue=n.get(k[X]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(k[X])}n.remove(P)}let D=0;function H(){D=0}function I(){return D}function z(P){D=P}function Z(){const P=D;return P>=r.maxTextures&&$e("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),D+=1,P}function B(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function ee(P,M){const k=n.get(P);if(P.isVideoTexture&&F(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){const X=P.image;if(X===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{de(k,P,M);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+M)}function $(P,M){const k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){de(k,P,M);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+M)}function C(P,M){const k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){de(k,P,M);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+M)}function j(P,M){const k=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){He(k,P,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+M)}const he={[gu]:i.REPEAT,[ir]:i.CLAMP_TO_EDGE,[xu]:i.MIRRORED_REPEAT},Ee={[fn]:i.NEAREST,[Yx]:i.NEAREST_MIPMAP_NEAREST,[wo]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[_c]:i.LINEAR_MIPMAP_NEAREST,[Kr]:i.LINEAR_MIPMAP_LINEAR},ke={[Jx]:i.NEVER,[nv]:i.ALWAYS,[Qx]:i.LESS,[Bf]:i.LEQUAL,[jx]:i.EQUAL,[zf]:i.GEQUAL,[ev]:i.GREATER,[tv]:i.NOTEQUAL};function Be(P,M){if(M.type===Fi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===bn||M.magFilter===_c||M.magFilter===wo||M.magFilter===Kr||M.minFilter===bn||M.minFilter===_c||M.minFilter===wo||M.minFilter===Kr)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,he[M.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,he[M.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,he[M.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Ee[M.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Ee[M.minFilter]),M.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ke[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===fn||M.minFilter!==wo&&M.minFilter!==Kr||M.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Xe(P,M){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",b));const X=M.source;let Q=d.get(X);Q===void 0&&(Q={},d.set(X,Q));const ue=B(M);if(ue!==P.__cacheKey){Q[ue]===void 0&&(Q[ue]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[ue].usedTimes++;const oe=Q[P.__cacheKey];oe!==void 0&&(Q[P.__cacheKey].usedTimes--,oe.usedTimes===0&&R(M)),P.__cacheKey=ue,P.__webglTexture=Q[ue].texture}return k}function G(P,M,k){return Math.floor(Math.floor(P/k)/M)}function J(P,M,k,X){const ue=P.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,k,X,M.data);else{ue.sort((De,ge)=>De.start-ge.start);let oe=0;for(let De=1;De<ue.length;De++){const ge=ue[oe],pe=ue[De],ce=ge.start+ge.count,Oe=G(pe.start,M.width,4),We=G(ge.start,M.width,4);pe.start<=ce+1&&Oe===We&&G(pe.start+pe.count-1,M.width,4)===Oe?ge.count=Math.max(ge.count,pe.start+pe.count-ge.start):(++oe,ue[oe]=pe)}ue.length=oe+1;const te=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),_e=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let De=0,ge=ue.length;De<ge;De++){const pe=ue[De],ce=Math.floor(pe.start/4),Oe=Math.ceil(pe.count/4),We=ce%M.width,N=Math.floor(ce/M.width),fe=Oe,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,We),t.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,We,N,fe,ne,k,X,M.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,te),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function de(P,M,k){let X=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=i.TEXTURE_3D);const Q=Xe(P,M),ue=M.source;t.bindTexture(X,P.__webglTexture,i.TEXTURE0+k);const oe=n.get(ue);if(ue.version!==oe.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ne=ct.getPrimaries(ct.workingColorSpace),xe=M.colorSpace===yr?null:ct.getPrimaries(M.colorSpace),Me=M.colorSpace===yr||ne===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let ie=m(M.image,!1,r.maxTextureSize);ie=gt(M,ie);const _e=s.convert(M.format,M.colorSpace),De=s.convert(M.type);let ge=x(M.internalFormat,_e,De,M.normalized,M.colorSpace,M.isVideoTexture);Be(X,M);let pe;const ce=M.mipmaps,Oe=M.isVideoTexture!==!0,We=oe.__version===void 0||Q===!0,N=ue.dataReady,fe=E(M,ie);if(M.isDepthTexture)ge=y(M.format===Zr,M.type),We&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,ge,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,ge,ie.width,ie.height,0,_e,De,null));else if(M.isDataTexture)if(ce.length>0){Oe&&We&&t.texStorage2D(i.TEXTURE_2D,fe,ge,ce[0].width,ce[0].height);for(let ne=0,xe=ce.length;ne<xe;ne++)pe=ce[ne],Oe?N&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,pe.width,pe.height,_e,De,pe.data):t.texImage2D(i.TEXTURE_2D,ne,ge,pe.width,pe.height,0,_e,De,pe.data);M.generateMipmaps=!1}else Oe?(We&&t.texStorage2D(i.TEXTURE_2D,fe,ge,ie.width,ie.height),N&&J(M,ie,_e,De)):t.texImage2D(i.TEXTURE_2D,0,ge,ie.width,ie.height,0,_e,De,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Oe&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,ge,ce[0].width,ce[0].height,ie.depth);for(let ne=0,xe=ce.length;ne<xe;ne++)if(pe=ce[ne],M.format!==Ai)if(_e!==null)if(Oe){if(N)if(M.layerUpdates.size>0){const Me=vd(pe.width,pe.height,M.format,M.type);for(const re of M.layerUpdates){const le=pe.data.subarray(re*Me/pe.data.BYTES_PER_ELEMENT,(re+1)*Me/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,re,pe.width,pe.height,1,_e,le)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,ie.depth,_e,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,ge,pe.width,pe.height,ie.depth,0,pe.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,ie.depth,_e,De,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,ge,pe.width,pe.height,ie.depth,0,_e,De,pe.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Oe&&We&&t.texStorage2D(i.TEXTURE_2D,fe,ge,ce[0].width,ce[0].height);for(let ne=0,xe=ce.length;ne<xe;ne++)pe=ce[ne],M.format!==Ai?_e!==null?Oe?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,pe.width,pe.height,_e,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,ge,pe.width,pe.height,0,pe.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?N&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,pe.width,pe.height,_e,De,pe.data):t.texImage2D(i.TEXTURE_2D,ne,ge,pe.width,pe.height,0,_e,De,pe.data)}else if(M.isDataArrayTexture)if(Oe){if(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,ge,ie.width,ie.height,ie.depth),N)if(M.layerUpdates.size>0){const ne=vd(ie.width,ie.height,M.format,M.type);for(const xe of M.layerUpdates){const Me=ie.data.subarray(xe*ne/ie.data.BYTES_PER_ELEMENT,(xe+1)*ne/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,ie.width,ie.height,1,_e,De,Me)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,_e,De,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,ie.width,ie.height,ie.depth,0,_e,De,ie.data);else if(M.isData3DTexture)Oe?(We&&t.texStorage3D(i.TEXTURE_3D,fe,ge,ie.width,ie.height,ie.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,_e,De,ie.data)):t.texImage3D(i.TEXTURE_3D,0,ge,ie.width,ie.height,ie.depth,0,_e,De,ie.data);else if(M.isFramebufferTexture){if(We)if(Oe)t.texStorage2D(i.TEXTURE_2D,fe,ge,ie.width,ie.height);else{let ne=ie.width,xe=ie.height;for(let Me=0;Me<fe;Me++)t.texImage2D(i.TEXTURE_2D,Me,ge,ne,xe,0,_e,De,null),ne>>=1,xe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){const ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ie.parentNode!==ne){ne.appendChild(ie),h.add(M),ne.onpaint=xe=>{const Me=xe.changedElements;for(const re of h)Me.includes(re.image)&&(re.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{const Me=i.RGBA,re=i.RGBA,le=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Me,re,le,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ce.length>0){if(Oe&&We){const ne=Ye(ce[0]);t.texStorage2D(i.TEXTURE_2D,fe,ge,ne.width,ne.height)}for(let ne=0,xe=ce.length;ne<xe;ne++)pe=ce[ne],Oe?N&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,_e,De,pe):t.texImage2D(i.TEXTURE_2D,ne,ge,_e,De,pe);M.generateMipmaps=!1}else if(Oe){if(We){const ne=Ye(ie);t.texStorage2D(i.TEXTURE_2D,fe,ge,ne.width,ne.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,De,ie)}else t.texImage2D(i.TEXTURE_2D,0,ge,_e,De,ie);p(M)&&S(X),oe.__version=ue.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function He(P,M,k){if(M.image.length!==6)return;const X=Xe(P,M),Q=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+k);const ue=n.get(Q);if(Q.version!==ue.__version||X===!0){t.activeTexture(i.TEXTURE0+k);const oe=ct.getPrimaries(ct.workingColorSpace),te=M.colorSpace===yr?null:ct.getPrimaries(M.colorSpace),ie=M.colorSpace===yr||oe===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const _e=M.isCompressedTexture||M.image[0].isCompressedTexture,De=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let re=0;re<6;re++)!_e&&!De?ge[re]=m(M.image[re],!0,r.maxCubemapSize):ge[re]=De?M.image[re].image:M.image[re],ge[re]=gt(M,ge[re]);const pe=ge[0],ce=s.convert(M.format,M.colorSpace),Oe=s.convert(M.type),We=x(M.internalFormat,ce,Oe,M.normalized,M.colorSpace),N=M.isVideoTexture!==!0,fe=ue.__version===void 0||X===!0,ne=Q.dataReady;let xe=E(M,pe);Be(i.TEXTURE_CUBE_MAP,M);let Me;if(_e){N&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,We,pe.width,pe.height);for(let re=0;re<6;re++){Me=ge[re].mipmaps;for(let le=0;le<Me.length;le++){const se=Me[le];M.format!==Ai?ce!==null?N?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,le,0,0,se.width,se.height,ce,se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,le,We,se.width,se.height,0,se.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,le,0,0,se.width,se.height,ce,Oe,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,le,We,se.width,se.height,0,ce,Oe,se.data)}}}else{if(Me=M.mipmaps,N&&fe){Me.length>0&&xe++;const re=Ye(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,We,re.width,re.height)}for(let re=0;re<6;re++)if(De){N?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ge[re].width,ge[re].height,ce,Oe,ge[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,We,ge[re].width,ge[re].height,0,ce,Oe,ge[re].data);for(let le=0;le<Me.length;le++){const ze=Me[le].image[re].image;N?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,le+1,0,0,ze.width,ze.height,ce,Oe,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,le+1,We,ze.width,ze.height,0,ce,Oe,ze.data)}}else{N?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ce,Oe,ge[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,We,ce,Oe,ge[re]);for(let le=0;le<Me.length;le++){const se=Me[le];N?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,le+1,0,0,ce,Oe,se.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,le+1,We,ce,Oe,se.image[re])}}}p(M)&&S(i.TEXTURE_CUBE_MAP),ue.__version=Q.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function me(P,M,k,X,Q,ue){const oe=s.convert(k.format,k.colorSpace),te=s.convert(k.type),ie=x(k.internalFormat,oe,te,k.normalized,k.colorSpace),_e=n.get(M),De=n.get(k);if(De.__renderTarget=M,!_e.__hasExternalTextures){const ge=Math.max(1,M.width>>ue),pe=Math.max(1,M.height>>ue);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,ue,ie,ge,pe,M.depth,0,oe,te,null):t.texImage2D(Q,ue,ie,ge,pe,0,oe,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),dt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Q,De.__webglTexture,0,Ge(M)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Q,De.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(P,M,k){if(i.bindRenderbuffer(i.RENDERBUFFER,P),M.depthBuffer){const X=M.depthTexture,Q=X&&X.isDepthTexture?X.type:null,ue=y(M.stencilBuffer,Q),oe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;dt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge(M),ue,M.width,M.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge(M),ue,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ue,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,P)}else{const X=M.textures;for(let Q=0;Q<X.length;Q++){const ue=X[Q],oe=s.convert(ue.format,ue.colorSpace),te=s.convert(ue.type),ie=x(ue.internalFormat,oe,te,ue.normalized,ue.colorSpace);dt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge(M),ie,M.width,M.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge(M),ie,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ie,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(P,M,k){const X=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=n.get(M.depthTexture);if(Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,M.depthTexture.addEventListener("dispose",b)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Be(i.TEXTURE_CUBE_MAP,M.depthTexture);const _e=s.convert(M.depthTexture.format),De=s.convert(M.depthTexture.type);let ge;M.depthTexture.format===lr?ge=i.DEPTH_COMPONENT24:M.depthTexture.format===Zr&&(ge=i.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ge,M.width,M.height,0,_e,De,null)}}else ee(M.depthTexture,0);const ue=Q.__webglTexture,oe=Ge(M),te=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ie=M.depthTexture.format===Zr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===lr)dt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,te,ue,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,ie,te,ue,0);else if(M.depthTexture.format===Zr)dt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,te,ue,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,ie,te,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function we(P){const M=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const X=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),X){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=X}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)Le(M.__webglFramebuffer[X],P,X);else{const X=P.texture.mipmaps;X&&X.length>0?Le(M.__webglFramebuffer[0],P,0):Le(M.__webglFramebuffer,P,0)}else if(k){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]===void 0)M.__webglDepthbuffer[X]=i.createRenderbuffer(),Re(M.__webglDepthbuffer[X],P,!1);else{const Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ue)}}else{const X=P.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Re(M.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ue)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(P,M,k){const X=n.get(P);M!==void 0&&me(X.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&we(P)}function Je(P){const M=P.texture,k=n.get(P),X=n.get(M);P.addEventListener("dispose",v);const Q=P.textures,ue=P.isWebGLCubeRenderTarget===!0,oe=Q.length>1;if(oe||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=M.version,a.memory.textures++),ue){k.__webglFramebuffer=[];for(let te=0;te<6;te++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[te]=[];for(let ie=0;ie<M.mipmaps.length;ie++)k.__webglFramebuffer[te][ie]=i.createFramebuffer()}else k.__webglFramebuffer[te]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let te=0;te<M.mipmaps.length;te++)k.__webglFramebuffer[te]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(oe)for(let te=0,ie=Q.length;te<ie;te++){const _e=n.get(Q[te]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&dt(P)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let te=0;te<Q.length;te++){const ie=Q[te];k.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[te]);const _e=s.convert(ie.format,ie.colorSpace),De=s.convert(ie.type),ge=x(ie.internalFormat,_e,De,ie.normalized,ie.colorSpace,P.isXRRenderTarget===!0),pe=Ge(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,ge,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,k.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Be(i.TEXTURE_CUBE_MAP,M);for(let te=0;te<6;te++)if(M.mipmaps&&M.mipmaps.length>0)for(let ie=0;ie<M.mipmaps.length;ie++)me(k.__webglFramebuffer[te][ie],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie);else me(k.__webglFramebuffer[te],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);p(M)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let te=0,ie=Q.length;te<ie;te++){const _e=Q[te],De=n.get(_e);let ge=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,De.__webglTexture),Be(ge,_e),me(k.__webglFramebuffer,P,_e,i.COLOR_ATTACHMENT0+te,ge,0),p(_e)&&S(ge)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(te=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,X.__webglTexture),Be(te,M),M.mipmaps&&M.mipmaps.length>0)for(let ie=0;ie<M.mipmaps.length;ie++)me(k.__webglFramebuffer[ie],P,M,i.COLOR_ATTACHMENT0,te,ie);else me(k.__webglFramebuffer,P,M,i.COLOR_ATTACHMENT0,te,0);p(M)&&S(te),t.unbindTexture()}P.depthBuffer&&we(P)}function V(P){const M=P.textures;for(let k=0,X=M.length;k<X;k++){const Q=M[k];if(p(Q)){const ue=T(P),oe=n.get(Q).__webglTexture;t.bindTexture(ue,oe),S(ue),t.unbindTexture()}}}const ve=[],Ke=[];function mt(P){if(P.samples>0){if(dt(P)===!1){const M=P.textures,k=P.width,X=P.height;let Q=i.COLOR_BUFFER_BIT;const ue=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(P),te=M.length>1;if(te)for(let _e=0;_e<M.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const ie=P.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[_e]);const De=n.get(M[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,De,0)}i.blitFramebuffer(0,0,k,X,0,0,k,X,Q,i.NEAREST),l===!0&&(ve.length=0,Ke.length=0,ve.push(i.COLOR_ATTACHMENT0+_e),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ve.push(ue),Ke.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let _e=0;_e<M.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,oe.__webglColorRenderbuffer[_e]);const De=n.get(M[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,De,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const M=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Ge(P){return Math.min(r.maxSamples,P.samples)}function dt(P){const M=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function F(P){const M=a.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function gt(P,M){const k=P.colorSpace,X=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Ll&&k!==yr&&(ct.getTransfer(k)===Mt?(X!==Ai||Q!==ii)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_t("WebGLTextures: Unsupported texture color space:",k)),M}function Ye(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=H,this.getTextureUnits=I,this.setTextureUnits=z,this.setTexture2D=ee,this.setTexture2DArray=$,this.setTexture3D=C,this.setTextureCube=j,this.rebindTextures=qe,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=me,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ub(i,e){function t(n,r=yr){let s;const a=ct.getTransfer(r);if(n===ii)return i.UNSIGNED_BYTE;if(n===If)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xm)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===mm)return i.BYTE;if(n===_m)return i.SHORT;if(n===io)return i.UNSIGNED_SHORT;if(n===Lf)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===Fi)return i.FLOAT;if(n===Xi)return i.HALF_FLOAT;if(n===vm)return i.ALPHA;if(n===Sm)return i.RGB;if(n===Ai)return i.RGBA;if(n===lr)return i.DEPTH_COMPONENT;if(n===Zr)return i.DEPTH_STENCIL;if(n===Mm)return i.RED;if(n===Uf)return i.RED_INTEGER;if(n===hs)return i.RG;if(n===Of)return i.RG_INTEGER;if(n===Ff)return i.RGBA_INTEGER;if(n===pl||n===ml||n===_l||n===gl)if(a===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===pl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===pl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ml)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_l)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vu||n===Su||n===Mu||n===yu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===vu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Su)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eu||n===bu||n===Tu||n===wu||n===Au||n===Pl||n===Ru)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Eu||n===bu)return a===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Tu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===wu)return s.COMPRESSED_R11_EAC;if(n===Au)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Pl)return s.COMPRESSED_RG11_EAC;if(n===Ru)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Cu||n===Pu||n===Du||n===Lu||n===Iu||n===Nu||n===Uu||n===Ou||n===Fu||n===Bu||n===zu||n===ku||n===Hu||n===Vu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Cu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Du)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Iu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ou)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ku)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gu||n===Wu||n===Xu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Gu)return a===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qu||n===Yu||n===Dl||n===$u)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===qu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Yu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$u)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ro?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ob=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Lm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new qi({vertexShader:Ob,fragmentShader:Fb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Hn(new ec(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zb extends _s{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=typeof XRWebGLBinding<"u",m=new Bb,p={},S=t.getContextAttributes();let T=null,x=null;const y=[],E=[],b=new ot;let v=null,w=null;const R=new kn;R.viewport=new Ut;const L=new kn;L.viewport=new Ut;const D=[R,L],H=new Yv;let I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=y[G];return J===void 0&&(J=new Tc,y[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=y[G];return J===void 0&&(J=new Tc,y[G]=J),J.getGripSpace()},this.getHand=function(G){let J=y[G];return J===void 0&&(J=new Tc,y[G]=J),J.getHandSpace()};function Z(G){const J=E.indexOf(G.inputSource);if(J===-1)return;const de=y[J];de!==void 0&&(de.update(G.inputSource,G.frame,c||a),de.dispatchEvent({type:G.type,data:G.inputSource}))}function B(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",ee);for(let G=0;G<y.length;G++){const J=E[G];J!==null&&(E[G]=null,y[G].disconnect(J))}I=null,z=null,m.reset();for(const G in p)delete p[G];if(e.setRenderTarget(T),d=null,f=null,h=null,r=null,x=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(b.width,b.height,!1),w!==null){const G=w.camera;G.fov=w.fov,G.zoom=w.zoom,G.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",B),r.addEventListener("inputsourceschange",ee),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(b),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,He=null,me=null;S.depth&&(me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=S.stencil?Zr:lr,He=S.stencil?ro:Wi);const Re={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Ri(f.textureWidth,f.textureHeight,{format:Ai,type:ii,depthTexture:new ao(f.textureWidth,f.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Ri(d.framebufferWidth,d.framebufferHeight,{format:Ai,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Xe.setContext(r),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(G){for(let J=0;J<G.removed.length;J++){const de=G.removed[J],He=E.indexOf(de);He>=0&&(E[He]=null,y[He].disconnect(de))}for(let J=0;J<G.added.length;J++){const de=G.added[J];let He=E.indexOf(de);if(He===-1){for(let Re=0;Re<y.length;Re++)if(Re>=E.length){E.push(de),He=Re;break}else if(E[Re]===null){E[Re]=de,He=Re;break}if(He===-1)break}const me=y[He];me&&me.connect(de)}}const $=new Y,C=new Y;function j(G,J,de){$.setFromMatrixPosition(J.matrixWorld),C.setFromMatrixPosition(de.matrixWorld);const He=$.distanceTo(C),me=J.projectionMatrix.elements,Re=de.projectionMatrix.elements,Le=me[14]/(me[10]-1),we=me[14]/(me[10]+1),qe=(me[9]+1)/me[5],Je=(me[9]-1)/me[5],V=(me[8]-1)/me[0],ve=(Re[8]+1)/Re[0],Ke=Le*V,mt=Le*ve,Ge=He/(-V+ve),dt=Ge*-V;if(J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(dt),G.translateZ(Ge),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),me[10]===-1)G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const F=Le+Ge,gt=we+Ge,Ye=Ke-dt,P=mt+(He-dt),M=qe*we/gt*F,k=Je*we/gt*F;G.projectionMatrix.makePerspective(Ye,P,M,k,F,gt),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function he(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let J=G.near,de=G.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(de=m.depthFar)),H.near=L.near=R.near=J,H.far=L.far=R.far=de,(I!==H.near||z!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,z=H.far),H.layers.mask=G.layers.mask|6,R.layers.mask=H.layers.mask&-5,L.layers.mask=H.layers.mask&-3;const He=G.parent,me=H.cameras;he(H,He);for(let Re=0;Re<me.length;Re++)he(me[Re],He);me.length===2?j(H,R,L):H.projectionMatrix.copy(R.projectionMatrix),w===null&&G.isPerspectiveCamera&&(w={camera:G,fov:G.fov,zoom:G.zoom}),Ee(G,H,He)};function Ee(G,J,de){de===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(de.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ul*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(G){return p[G]};let ke=null;function Be(G,J){if(u=J.getViewerPose(c||a),_=J,u!==null){const de=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let He=!1;de.length!==H.cameras.length&&(H.cameras.length=0,He=!0);for(let we=0;we<de.length;we++){const qe=de[we];let Je=null;if(d!==null)Je=d.getViewport(qe);else{const ve=h.getViewSubImage(f,qe);Je=ve.viewport,we===0&&(e.setRenderTargetTextures(x,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(x))}let V=D[we];V===void 0&&(V=new kn,V.layers.enable(we),V.viewport=new Ut,D[we]=V),V.matrix.fromArray(qe.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(qe.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(Je.x,Je.y,Je.width,Je.height),we===0&&(H.matrix.copy(V.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),He===!0&&H.cameras.push(V)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const we=h.getDepthInformation(de[0]);we&&we.isValid&&we.texture&&m.init(we,r.renderState)}if(me&&me.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let we=0;we<de.length;we++){const qe=de[we].camera;if(qe){let Je=p[qe];Je||(Je=new Lm,p[qe]=Je);const V=h.getCameraImage(qe);Je.sourceTexture=V}}}}for(let de=0;de<y.length;de++){const He=E[de],me=y[de];He!==null&&me!==void 0&&me.update(He,J,c||a)}ke&&ke(G,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}const Xe=new Fm;Xe.setAnimationLoop(Be),this.setAnimationLoop=function(G){ke=G},this.dispose=function(){}}}const kb=new Ft,Wm=new Qe;Wm.set(-1,0,0,0,1,0,0,0,1);function Hb(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Im(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,T,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),T=S.envMap,x=S.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(kb.makeRotationFromEuler(x)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Wm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Vb(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const E=y.program;n.uniformBlockBinding(x,E)}function c(x,y){let E=r[x.id];E===void 0&&(m(x),E=u(x),r[x.id]=E,x.addEventListener("dispose",S));const b=y.program;n.updateUBOMapping(x,b);const v=e.render.frame;s[x.id]!==v&&(f(x),s[x.id]=v)}function u(x){const y=h();x.__bindingPointIndex=y;const E=i.createBuffer(),b=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,b,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,E),E}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return _t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=r[x.id],E=x.uniforms,b=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let v=0,w=E.length;v<w;v++){const R=E[v];if(Array.isArray(R))for(let L=0,D=R.length;L<D;L++)d(R[L],v,L,b);else d(R,v,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,y,E,b){if(g(x,y,E,b)===!0){const v=x.__offset,w=x.value;if(Array.isArray(w)){let R=0;for(let L=0;L<w.length;L++){const D=w[L],H=p(D);_(D,x.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(w,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function _(x,y,E){typeof x=="number"||typeof x=="boolean"?y[0]=x:x.isMatrix3?(y[0]=x.elements[0],y[1]=x.elements[1],y[2]=x.elements[2],y[3]=0,y[4]=x.elements[3],y[5]=x.elements[4],y[6]=x.elements[5],y[7]=0,y[8]=x.elements[6],y[9]=x.elements[7],y[10]=x.elements[8],y[11]=0):ArrayBuffer.isView(x)?y.set(new x.constructor(x.buffer,x.byteOffset,y.length)):x.toArray(y,E)}function g(x,y,E,b){const v=x.value,w=y+"_"+E;if(b[w]===void 0)return typeof v=="number"||typeof v=="boolean"?b[w]=v:ArrayBuffer.isView(v)?b[w]=v.slice():b[w]=v.clone(),!0;{const R=b[w];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return b[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function m(x){const y=x.uniforms;let E=0;const b=16;for(let w=0,R=y.length;w<R;w++){const L=Array.isArray(y[w])?y[w]:[y[w]];for(let D=0,H=L.length;D<H;D++){const I=L[D],z=Array.isArray(I.value)?I.value:[I.value];for(let Z=0,B=z.length;Z<B;Z++){const ee=z[Z],$=p(ee),C=E%b,j=C%$.boundary,he=C+j;E+=j,he!==0&&b-he<$.storage&&(E+=b-he),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=$.storage}}}const v=E%b;return v>0&&(E+=b-v),x.__size=E,x.__cache={},this}function p(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",x),y}function S(x){const y=x.target;y.removeEventListener("dispose",S);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function T(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:T}}const Gb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function Wb(){return Li===null&&(Li=new Pv(Gb,16,16,hs,Xi),Li.name="DFG_LUT",Li.minFilter=bn,Li.magFilter=bn,Li.wrapS=ir,Li.wrapT=ir,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class Xb{constructor(e={}){const{canvas:t=sv(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=ii}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const g=d,m=new Set([Ff,Of,Uf]),p=new Set([ii,Wi,io,ro,If,Nf]),S=new Uint32Array(4),T=new Int32Array(4),x=new Y;let y=null,E=null;const b=[],v=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,D=null,H=null,I=null,z=null;this._outputColorSpace=mi;let Z=0,B=0,ee=null,$=-1,C=null;const j=new Ut,he=new Ut;let Ee=null;const ke=new ht(0);let Be=0,Xe=t.width,G=t.height,J=1,de=null,He=null;const me=new Ut(0,0,Xe,G),Re=new Ut(0,0,Xe,G);let Le=!1;const we=new Hf;let qe=!1,Je=!1;const V=new Ft,ve=new Y,Ke=new Ut,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function dt(){return ee===null?J:1}let F=n;function gt(A,U){return t.getContext(A,U)}let Ye,P,M,k,X,Q,ue,oe,te,ie,_e,De,ge,pe,ce,Oe,We,N,fe,ne,xe,Me,re;try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Df}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",Ve,!1),F===null){const U="webgl2";if(F=gt(U,A),F===null)throw gt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}le()}catch(A){throw t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),_t("WebGLRenderer: "+A.message),A}function le(){Ye=new Wy(F),Ye.init(),xe=new Ub(F,Ye),P=new Ny(F,Ye,e,xe),M=new Ib(F,Ye),P.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),H=F.createFramebuffer(),I=F.createFramebuffer(),z=F.createFramebuffer(),k=new Yy(F),X=new vb,Q=new Nb(F,Ye,M,X,P,xe,k),ue=new Gy(R),oe=new Kv(F),Me=new Ly(F,oe),te=new Xy(F,oe,k,Me),ie=new Ky(F,te,oe,Me,k),N=new $y(F,P,Q),ce=new Uy(X),_e=new xb(R,ue,Ye,P,Me,ce),De=new Hb(R,X),ge=new Mb,pe=new Ab(Ye),We=new Dy(R,ue,M,ie,_,l),Oe=new Lb(R,ie,P),re=new Vb(F,k,P,M),fe=new Iy(F,Ye,k),ne=new qy(F,Ye,k),k.programs=_e.programs,R.capabilities=P,R.extensions=Ye,R.properties=X,R.renderLists=ge,R.shadowMap=Oe,R.state=M,R.info=k}g!==ii&&(w=new Jy(g,t.width,t.height,o,r,s));const se=new zb(R,F);this.xr=se,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=Ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(A){A!==void 0&&(J=A,this.setSize(Xe,G,!1))},this.getSize=function(A){return A.set(Xe,G)},this.setSize=function(A,U,K=!0){if(se.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=A,G=U,t.width=Math.floor(A*J),t.height=Math.floor(U*J),K===!0&&(t.style.width=A+"px",t.style.height=U+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(Xe*J,G*J).floor()},this.setDrawingBufferSize=function(A,U,K){Xe=A,G=U,J=K,t.width=Math.floor(A*K),t.height=Math.floor(U*K),this.setViewport(0,0,A,U)},this.setEffects=function(A){if(g===ii){_t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let U=0;U<A.length;U++)if(A[U].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(j)},this.getViewport=function(A){return A.copy(me)},this.setViewport=function(A,U,K,W){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,U,K,W),M.viewport(j.copy(me).multiplyScalar(J).round())},this.getScissor=function(A){return A.copy(Re)},this.setScissor=function(A,U,K,W){A.isVector4?Re.set(A.x,A.y,A.z,A.w):Re.set(A,U,K,W),M.scissor(he.copy(Re).multiplyScalar(J).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(A){M.setScissorTest(Le=A)},this.setOpaqueSort=function(A){de=A},this.setTransparentSort=function(A){He=A},this.getClearColor=function(A){return A.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(A=!0,U=!0,K=!0){let W=0;if(A){let q=!1;if(ee!==null){const Se=ee.texture.format;q=m.has(Se)}if(q){const Se=ee.texture.type,Ce=p.has(Se),Te=We.getClearColor(),Ne=We.getClearAlpha(),Fe=Te.r,je=Te.g,at=Te.b;Ce?(S[0]=Fe,S[1]=je,S[2]=at,S[3]=Ne,F.clearBufferuiv(F.COLOR,0,S)):(T[0]=Fe,T[1]=je,T[2]=at,T[3]=Ne,F.clearBufferiv(F.COLOR,0,T))}else W|=F.COLOR_BUFFER_BIT}U&&(W|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),We.dispose(),ge.dispose(),pe.dispose(),X.dispose(),ue.dispose(),ie.dispose(),Me.dispose(),re.dispose(),_e.dispose(),se.dispose(),se.removeEventListener("sessionstart",Pt),se.removeEventListener("sessionend",Et),lt.stop()};function ze(A){A.preventDefault(),Zh("WebGLRenderer: Context Lost."),L=!0}function ae(){Zh("WebGLRenderer: Context Restored."),L=!1;const A=k.autoReset,U=Oe.enabled,K=Oe.autoUpdate,W=Oe.needsUpdate,q=Oe.type;le(),k.autoReset=A,Oe.enabled=U,Oe.autoUpdate=K,Oe.needsUpdate=W,Oe.type=q}function Ve(A){_t("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ie(A){const U=A.target;U.removeEventListener("dispose",Ie),Ze(U)}function Ze(A){Xt(A),X.remove(A)}function Xt(A){const U=X.get(A).programs;U!==void 0&&(U.forEach(function(K){_e.releaseProgram(K)}),A.isShaderMaterial&&_e.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,K,W,q,Se){U===null&&(U=mt);const Ce=q.isMesh&&q.matrixWorld.determinantAffine()<0,Te=rn(A,U,K,W,q);M.setMaterial(W,Ce);let Ne=K.index,Fe=1;if(W.wireframe===!0){if(Ne=te.getWireframeAttribute(K),Ne===void 0)return;Fe=2}const je=K.drawRange,at=K.attributes.position;let Ue=je.start*Fe,xt=(je.start+je.count)*Fe;Se!==null&&(Ue=Math.max(Ue,Se.start*Fe),xt=Math.min(xt,(Se.start+Se.count)*Fe)),Ne!==null?(Ue=Math.max(Ue,0),xt=Math.min(xt,Ne.count)):at!=null&&(Ue=Math.max(Ue,0),xt=Math.min(xt,at.count));const Yt=xt-Ue;if(Yt<0||Yt===1/0)return;Me.setup(q,W,Te,K,Ne);let Dt,bt=fe;if(Ne!==null&&(Dt=oe.get(Ne),bt=ne,bt.setIndex(Dt)),q.isMesh)W.wireframe===!0?(M.setLineWidth(W.wireframeLinewidth*dt()),bt.setMode(F.LINES)):bt.setMode(F.TRIANGLES);else if(q.isLine){let _n=W.linewidth;_n===void 0&&(_n=1),M.setLineWidth(_n*dt()),q.isLineSegments?bt.setMode(F.LINES):q.isLineLoop?bt.setMode(F.LINE_LOOP):bt.setMode(F.LINE_STRIP)}else q.isPoints?bt.setMode(F.POINTS):q.isSprite&&bt.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))bt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const _n=q._multiDrawStarts,Ae=q._multiDrawCounts,Cn=q._multiDrawCount,pt=Ne?oe.get(Ne).bytesPerElement:1,hi=X.get(W).currentProgram.getUniforms();for(let Pi=0;Pi<Cn;Pi++)hi.setValue(F,"_gl_DrawID",Pi),bt.render(_n[Pi]/pt,Ae[Pi])}else if(q.isInstancedMesh)bt.renderInstances(Ue,Yt,q.count);else if(K.isInstancedBufferGeometry){const _n=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ae=Math.min(K.instanceCount,_n);bt.renderInstances(Ue,Yt,Ae)}else bt.render(Ue,Yt)};function nt(A,U,K,W){D!==null&&A.isNodeMaterial&&D.setObject(W,A),qe===!0&&ce.setState(A,K,!1),A.transparent===!0&&A.side===tr&&A.forceSinglePass===!1?(A.side=Wn,A.needsUpdate=!0,Bt(A,U,W),A.side=us,A.needsUpdate=!0,Bt(A,U,W),A.side=tr):Bt(A,U,W)}this.compile=function(A,U,K=null){K===null&&(K=A),D!==null&&D.renderStart(A,U,K),E=pe.get(K),E.init(U),v.push(E),K.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),A!==K&&A.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),Je=this.localClippingEnabled,qe=ce.init(this.clippingPlanes,Je),qe===!0&&ce.setGlobalState(this.clippingPlanes,U),D!==null&&Oe.render(E.state.shadowsArray,K,U);const W=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Se=q.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){const Te=Se[Ce];nt(Te,K,U,q),W.add(Te)}else nt(Se,K,U,q),W.add(Se)}),E=v.pop(),D!==null&&D.renderEnd(),W},this.compileAsync=function(A,U,K=null){const W=this.compile(A,U,K);return new Promise(q=>{function Se(){if(W.forEach(function(Ce){const Ne=X.get(Ce).currentProgram;(Ne===void 0||Ne.isReady())&&W.delete(Ce)}),W.size===0){q(A);return}setTimeout(Se,10)}Ye.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Ct=null;function nn(A){Ct&&Ct(A)}function Pt(){lt.stop()}function Et(){lt.start()}const lt=new Fm;lt.setAnimationLoop(nn),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(A){Ct=A,se.setAnimationLoop(A),A===null?lt.stop():lt.start()},se.addEventListener("sessionstart",Pt),se.addEventListener("sessionend",Et),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){_t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(A,U);const K=se.enabled===!0&&se.isPresenting===!0,W=w!==null&&(ee===null||K)&&w.begin(R,ee);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(U),U=se.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,U,ee),E=pe.get(A,v.length),E.init(U),E.state.textureUnits=Q.getTextureUnits(),v.push(E),V.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),we.setFromProjectionMatrix(V,Bi,U.reversedDepth),Je=this.localClippingEnabled,qe=ce.init(this.clippingPlanes,Je),y=ge.get(A,b.length),y.init(),b.push(y),se.enabled===!0&&se.isPresenting===!0){const Ce=R.xr.getDepthSensingMesh();Ce!==null&&An(Ce,U,-1/0,R.sortObjects)}An(A,U,0,R.sortObjects),y.finish(),D!==null&&D.updateLights(E.state.lightsArray),R.sortObjects===!0&&y.sort(de,He),Ge=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ge&&We.addToRenderList(y,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qe===!0&&ce.beginShadows();const q=E.state.shadowsArray;if(Oe.render(q,A,U),qe===!0&&ce.endShadows(),(W&&w.hasRenderPass())===!1){const Ce=y.opaque,Te=y.transmissive;if(E.setupLights(),U.isArrayCamera){const Ne=U.cameras;if(Te.length>0)for(let Fe=0,je=Ne.length;Fe<je;Fe++){const at=Ne[Fe];mn(Ce,Te,A,at)}Ge&&We.render(A);for(let Fe=0,je=Ne.length;Fe<je;Fe++){const at=Ne[Fe];At(y,A,at,at.viewport)}}else Te.length>0&&mn(Ce,Te,A,U),Ge&&We.render(A),At(y,A,U)}ee!==null&&B===0&&(Q.updateMultisampleRenderTarget(ee),Q.updateRenderTargetMipmap(ee)),W&&w.end(R),A.isScene===!0&&A.onAfterRender(R,A,U),Me.resetDefaultState(),$=-1,C=null,v.pop(),v.length>0?(E=v[v.length-1],Q.setTextureUnits(E.state.textureUnits),qe===!0&&ce.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,b.pop(),b.length>0?y=b[b.length-1]:y=null,D!==null&&D.renderEnd()};function An(A,U,K,W){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLightProbeGrid)E.pushLightProbeGrid(A);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(we)){W&&Ke.setFromMatrixPosition(A.matrixWorld).applyMatrix4(V);const Ce=ie.update(A),Te=A.material;Te.visible&&y.push(A,Ce,Te,K,Ke.z,null,U)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(we))){const Ce=ie.update(A),Te=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ke.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ke.copy(Ce.boundingSphere.center)),Ke.applyMatrix4(A.matrixWorld).applyMatrix4(V)),Array.isArray(Te)){const Ne=Ce.groups;for(let Fe=0,je=Ne.length;Fe<je;Fe++){const at=Ne[Fe],Ue=Te[at.materialIndex];Ue&&Ue.visible&&y.push(A,Ce,Ue,K,Ke.z,at,U)}}else Te.visible&&y.push(A,Ce,Te,K,Ke.z,null,U)}}const Se=A.children;for(let Ce=0,Te=Se.length;Ce<Te;Ce++)An(Se[Ce],U,K,W)}function At(A,U,K,W){const{opaque:q,transmissive:Se,transparent:Ce}=A;E.setupLightsView(K),qe===!0&&ce.setGlobalState(R.clippingPlanes,K),W&&M.viewport(j.copy(W)),q.length>0&&Rn(q,U,K),Se.length>0&&Rn(Se,U,K),Ce.length>0&&Rn(Ce,U,K),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function mn(A,U,K,W){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){const Ue=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new Ri(1,1,{generateMipmaps:!0,type:Ue?Xi:ii,minFilter:Kr,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const Se=E.state.transmissionRenderTarget[W.id],Ce=W.viewport||j;Se.setSize(Ce.z*R.transmissionResolutionScale,Ce.w*R.transmissionResolutionScale);const Te=R.getRenderTarget(),Ne=R.getActiveCubeFace(),Fe=R.getActiveMipmapLevel();R.setRenderTarget(Se),R.getClearColor(ke),Be=R.getClearAlpha(),Be<1&&R.setClearColor(16777215,.5),R.clear(),Ge&&We.render(K);const je=R.toneMapping;R.toneMapping=Hi;const at=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),qe===!0&&ce.setGlobalState(R.clippingPlanes,W),Rn(A,K,W),Q.updateMultisampleRenderTarget(Se),Q.updateRenderTargetMipmap(Se),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let xt=0,Yt=U.length;xt<Yt;xt++){const Dt=U[xt],{object:bt,geometry:_n,material:Ae,group:Cn}=Dt;if(Ae.side===tr&&bt.layers.test(W.layers)){const pt=Ae.side;Ae.side=Wn,Ae.needsUpdate=!0,qt(bt,K,W,_n,Ae,Cn),Ae.side=pt,Ae.needsUpdate=!0,Ue=!0}}Ue===!0&&(Q.updateMultisampleRenderTarget(Se),Q.updateRenderTargetMipmap(Se))}R.setRenderTarget(Te,Ne,Fe),R.setClearColor(ke,Be),at!==void 0&&(W.viewport=at),R.toneMapping=je}function Rn(A,U,K){const W=U.isScene===!0?U.overrideMaterial:null;for(let q=0,Se=A.length;q<Se;q++){const Ce=A[q],{object:Te,geometry:Ne,group:Fe}=Ce;let je=Ce.material;je.allowOverride===!0&&W!==null&&(je=W),Te.layers.test(K.layers)&&qt(Te,U,K,Ne,je,Fe)}}function qt(A,U,K,W,q,Se){D!==null&&q.isNodeMaterial&&D.setObject(A,q),A.onBeforeRender(R,U,K,W,q,Se),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(R,U,K,W,A,Se),q.transparent===!0&&q.side===tr&&q.forceSinglePass===!1?(q.side=Wn,q.needsUpdate=!0,R.renderBufferDirect(K,U,W,q,A,Se),q.side=us,q.needsUpdate=!0,R.renderBufferDirect(K,U,W,q,A,Se),q.side=tr):R.renderBufferDirect(K,U,W,q,A,Se),A.onAfterRender(R,U,K,W,q,Se)}function Bt(A,U,K){U.isScene!==!0&&(U=mt);const W=X.get(A),q=E.state.lights,Se=E.state.shadowsArray,Ce=q.state.version,Te=_e.getParameters(A,q.state,Se,U,K,E.state.lightProbeGridArray),Ne=_e.getProgramCacheKey(Te);let Fe=W.programs;W.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;const je=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;W.envMap=ue.get(A.envMap||W.environment,je),W.envMapRotation=W.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,Fe===void 0&&(A.addEventListener("dispose",Ie),Fe=new Map,W.programs=Fe);let at=Fe.get(Ne);if(at!==void 0){if(W.currentProgram===at&&W.lightsStateVersion===Ce)return Ci(A,Te),at}else Te.uniforms=_e.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,K,Te),A.onBeforeCompile(Te,R),at=_e.acquireProgram(Te,Ne),Fe.set(Ne,at),W.uniforms=Te.uniforms;const Ue=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ue.clippingPlanes=ce.uniform),Ci(A,Te),W.needsLights=fi(A),W.lightsStateVersion=Ce,W.needsLights&&(Ue.ambientLightColor.value=q.state.ambient,Ue.lightProbe.value=q.state.probe,Ue.sunLights.value=q.state.sun,Ue.sunLightShadows.value=q.state.sunShadow,Ue.directionalLights.value=q.state.directional,Ue.directionalLightShadows.value=q.state.directionalShadow,Ue.spotLights.value=q.state.spot,Ue.spotLightShadows.value=q.state.spotShadow,Ue.rectAreaLights.value=q.state.rectArea,Ue.ltc_1.value=q.state.rectAreaLTC1,Ue.ltc_2.value=q.state.rectAreaLTC2,Ue.pointLights.value=q.state.point,Ue.pointLightShadows.value=q.state.pointShadow,Ue.hemisphereLights.value=q.state.hemi,Ue.sunShadowMatrix.value=q.state.sunShadowMatrix,Ue.sunShadowCascade.value=q.state.sunShadowCascade,Ue.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ue.spotLightMatrix.value=q.state.spotLightMatrix,Ue.spotLightMap.value=q.state.spotLightMap,Ue.pointShadowMatrix.value=q.state.pointShadowMatrix),W.lightProbeGrid=E.state.lightProbeGridArray.length>0,W.currentProgram=at,W.uniformsList=null,at}function Jt(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=xl.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function Ci(A,U){const K=X.get(A);K.outputColorSpace=U.outputColorSpace,K.batching=U.batching,K.batchingColor=U.batchingColor,K.instancing=U.instancing,K.instancingColor=U.instancingColor,K.instancingMorph=U.instancingMorph,K.skinning=U.skinning,K.morphTargets=U.morphTargets,K.morphNormals=U.morphNormals,K.morphColors=U.morphColors,K.morphTargetsCount=U.morphTargetsCount,K.numClippingPlanes=U.numClippingPlanes,K.numIntersection=U.numClipIntersection,K.vertexAlphas=U.vertexAlphas,K.vertexTangents=U.vertexTangents,K.toneMapping=U.toneMapping}function xs(A,U){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;x.setFromMatrixPosition(U.matrixWorld);for(let K=0,W=A.length;K<W;K++){const q=A[K];if(q.texture!==null&&q.boundingBox.containsPoint(x))return q}return null}function rn(A,U,K,W,q){U.isScene!==!0&&(U=mt),Q.resetTextureUnits();const Se=U.fog,Ce=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,Te=ee===null?R.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ct.workingColorSpace,Ne=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Fe=ue.get(W.envMap||Ce,Ne),je=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,at=!!K.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ue=!!K.morphAttributes.position,xt=!!K.morphAttributes.normal,Yt=!!K.morphAttributes.color;let Dt=Hi;W.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Dt=R.toneMapping);const bt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,_n=bt!==void 0?bt.length:0,Ae=X.get(W),Cn=E.state.lights;if(qe===!0&&(Je===!0||A!==C)){const Rt=A===C&&W.id===$;ce.setState(W,A,Rt)}let pt=!1;W.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Cn.state.version||Ae.outputColorSpace!==Te||q.isBatchedMesh&&Ae.batching===!1||!q.isBatchedMesh&&Ae.batching===!0||q.isBatchedMesh&&Ae.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ae.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ae.instancing===!1||!q.isInstancedMesh&&Ae.instancing===!0||q.isSkinnedMesh&&Ae.skinning===!1||!q.isSkinnedMesh&&Ae.skinning===!0||q.isInstancedMesh&&Ae.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ae.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ae.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ae.instancingMorph===!1&&q.morphTexture!==null||Ae.envMap!==Fe||W.fog===!0&&Ae.fog!==Se||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ce.numPlanes||Ae.numIntersection!==ce.numIntersection)||Ae.vertexAlphas!==je||Ae.vertexTangents!==at||Ae.morphTargets!==Ue||Ae.morphNormals!==xt||Ae.morphColors!==Yt||Ae.toneMapping!==Dt||Ae.morphTargetsCount!==_n||!!Ae.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Ae.__version=W.version);let hi=Ae.currentProgram;pt===!0&&(hi=Bt(W,U,q),D&&W.isNodeMaterial&&D.onUpdateProgram(W,hi,Ae));let Pi=!1,fr=!1,Ss=!1;const yt=hi.getUniforms(),Ht=Ae.uniforms;if(M.useProgram(hi.program)&&(Pi=!0,fr=!0,Ss=!0),W.id!==$&&($=W.id,fr=!0),Ae.needsLights){const Rt=xs(E.state.lightProbeGridArray,q);Ae.lightProbeGrid!==Rt&&(Ae.lightProbeGrid=Rt,fr=!0)}if(Pi||C!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),yt.setValue(F,"projectionMatrix",A.projectionMatrix),yt.setValue(F,"viewMatrix",A.matrixWorldInverse);const dr=yt.map.cameraPosition;dr!==void 0&&dr.setValue(F,ve.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&yt.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&yt.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,fr=!0,Ss=!0)}if(Ae.needsLights&&(Cn.state.sunShadowMap.length>0&&yt.setValue(F,"sunShadowMap",Cn.state.sunShadowMap,Q),Cn.state.directionalShadowMap.length>0&&yt.setValue(F,"directionalShadowMap",Cn.state.directionalShadowMap,Q),Cn.state.spotShadowMap.length>0&&yt.setValue(F,"spotShadowMap",Cn.state.spotShadowMap,Q),Cn.state.pointShadowMap.length>0&&yt.setValue(F,"pointShadowMap",Cn.state.pointShadowMap,Q)),q.isSkinnedMesh){yt.setOptional(F,q,"bindMatrix"),yt.setOptional(F,q,"bindMatrixInverse");const Rt=q.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),yt.setValue(F,"boneTexture",Rt.boneTexture,Q))}q.isBatchedMesh&&(yt.setOptional(F,q,"batchingTexture"),yt.setValue(F,"batchingTexture",q._matricesTexture,Q),yt.setOptional(F,q,"batchingIdTexture"),yt.setValue(F,"batchingIdTexture",q._indirectTexture,Q),yt.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&yt.setValue(F,"batchingColorTexture",q._colorsTexture,Q));const hr=K.morphAttributes;if((hr.position!==void 0||hr.normal!==void 0||hr.color!==void 0)&&N.update(q,K,hi),(fr||Ae.receiveShadow!==q.receiveShadow)&&(Ae.receiveShadow=q.receiveShadow,yt.setValue(F,"receiveShadow",q.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(Ht.envMapIntensity.value=U.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=Wb()),fr){if(yt.setValue(F,"toneMappingExposure",R.toneMappingExposure),Ae.needsLights&&kt(Ht,Ss),Se&&W.fog===!0&&De.refreshFogUniforms(Ht,Se),De.refreshMaterialUniforms(Ht,W,J,G,E.state.transmissionRenderTarget[A.id]),Ae.needsLights&&Ae.lightProbeGrid){const Rt=Ae.lightProbeGrid;Ht.probesSH.value=Rt.texture,Ht.probesMin.value.copy(Rt.boundingBox.min),Ht.probesMax.value.copy(Rt.boundingBox.max),Ht.probesResolution.value.copy(Rt.resolution)}xl.upload(F,Jt(Ae),Ht,Q)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(xl.upload(F,Jt(Ae),Ht,Q),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&yt.setValue(F,"center",q.center),yt.setValue(F,"modelViewMatrix",q.modelViewMatrix),yt.setValue(F,"normalMatrix",q.normalMatrix),yt.setValue(F,"modelMatrix",q.matrixWorld),W.uniformsGroups!==void 0){const Rt=W.uniformsGroups;for(let dr=0,Ms=Rt.length;dr<Ms;dr++){const Eh=Rt[dr];re.update(Eh,hi),re.bind(Eh,hi)}}return hi}function kt(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.sunLights.needsUpdate=U,A.sunLightShadows.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function fi(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(A,U,K){const W=X.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),X.get(A.texture).__webglTexture=U,X.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:K,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,U){const K=X.get(A);K.__webglFramebuffer=U,K.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,K=0){ee=A,Z=U,B=K;let W=null,q=!1,Se=!1;if(A){const Te=X.get(A);if(Te.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(F.FRAMEBUFFER,Te.__webglFramebuffer),j.copy(A.viewport),he.copy(A.scissor),Ee=A.scissorTest,M.viewport(j),M.scissor(he),M.setScissorTest(Ee),$=-1;return}else if(Te.__webglFramebuffer===void 0)Q.setupRenderTarget(A);else if(Te.__hasExternalTextures)Q.rebindTextures(A,X.get(A.texture).__webglTexture,X.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const je=A.depthTexture;if(Te.__boundDepthTexture!==je){if(je!==null&&X.has(je)&&(A.width!==je.image.width||A.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(A)}}const Ne=A.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Se=!0);const Fe=X.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Fe[U])?W=Fe[U][K]:W=Fe[U],q=!0):A.samples>0&&Q.useMultisampledRTT(A)===!1?W=X.get(A).__webglMultisampledFramebuffer:Array.isArray(Fe)?W=Fe[K]:W=Fe,j.copy(A.viewport),he.copy(A.scissor),Ee=A.scissorTest}else j.copy(me).multiplyScalar(J).floor(),he.copy(Re).multiplyScalar(J).floor(),Ee=Le;if(K!==0&&(W=H),M.bindFramebuffer(F.FRAMEBUFFER,W)&&M.drawBuffers(A,W),M.viewport(j),M.scissor(he),M.setScissorTest(Ee),q){const Te=X.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Te.__webglTexture,K)}else if(Se){const Te=U;for(let Ne=0;Ne<A.textures.length;Ne++){const Fe=X.get(A.textures[Ne]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ne,Fe.__webglTexture,K,Te)}}else if(A!==null&&K!==0){const Te=X.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Te.__webglTexture,K)}$=-1};function vs(A){const U=X.get(A);return(U.__readFormat!==A.format||U.__readType!==A.type)&&(U.__readFormat=A.format,U.__readType=A.type,U.__formatReadable=P.textureFormatReadable(A.format),U.__typeReadable=P.textureTypeReadable(A.type)),U}this.readRenderTargetPixels=function(A,U,K,W,q,Se,Ce,Te=0){if(!(A&&A.isWebGLRenderTarget)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){M.bindFramebuffer(F.FRAMEBUFFER,Ne);try{const Fe=A.textures[Te],je=Fe.format,at=Fe.type;A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Te);const Ue=vs(Fe);if(Ue.__formatReadable===!1){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-W&&K>=0&&K<=A.height-q&&F.readPixels(U,K,W,q,xe.convert(je),xe.convert(at),Se)}finally{const Fe=ee!==null?X.get(ee).__webglFramebuffer:null;M.bindFramebuffer(F.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(A,U,K,W,q,Se,Ce,Te=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne)if(U>=0&&U<=A.width-W&&K>=0&&K<=A.height-q){M.bindFramebuffer(F.FRAMEBUFFER,Ne);const Fe=A.textures[Te],je=Fe.format,at=Fe.type;A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Te);const Ue=vs(Fe);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,xt),F.bufferData(F.PIXEL_PACK_BUFFER,Se.byteLength,F.STREAM_READ),F.readPixels(U,K,W,q,xe.convert(je),xe.convert(at),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Yt=ee!==null?X.get(ee).__webglFramebuffer:null;M.bindFramebuffer(F.FRAMEBUFFER,Yt);const Dt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await av(F,Dt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,xt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Se),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(xt),F.deleteSync(Dt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,U=null,K=0){const W=Math.pow(2,-K),q=Math.floor(A.image.width*W),Se=Math.floor(A.image.height*W),Ce=U!==null?U.x:0,Te=U!==null?U.y:0;Q.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,K,0,0,Ce,Te,q,Se),M.unbindTexture()},this.copyTextureToTexture=function(A,U,K=null,W=null,q=0,Se=0){let Ce,Te,Ne,Fe,je,at,Ue,xt,Yt;const Dt=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(K!==null)Ce=K.max.x-K.min.x,Te=K.max.y-K.min.y,Ne=K.isBox3?K.max.z-K.min.z:1,Fe=K.min.x,je=K.min.y,at=K.isBox3?K.min.z:0;else{const Ht=Math.pow(2,-q);Ce=Math.floor(Dt.width*Ht),Te=Math.floor(Dt.height*Ht),A.isDataArrayTexture?Ne=Dt.depth:A.isData3DTexture?Ne=Math.floor(Dt.depth*Ht):Ne=1,Fe=0,je=0,at=0}W!==null?(Ue=W.x,xt=W.y,Yt=W.z):(Ue=0,xt=0,Yt=0);const bt=xe.convert(U.format),_n=xe.convert(U.type);let Ae;U.isData3DTexture?(Q.setTexture3D(U,0),Ae=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Q.setTexture2DArray(U,0),Ae=F.TEXTURE_2D_ARRAY):(Q.setTexture2D(U,0),Ae=F.TEXTURE_2D),M.activeTexture(F.TEXTURE0),M.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),M.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),M.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const Cn=M.getParameter(F.UNPACK_ROW_LENGTH),pt=M.getParameter(F.UNPACK_IMAGE_HEIGHT),hi=M.getParameter(F.UNPACK_SKIP_PIXELS),Pi=M.getParameter(F.UNPACK_SKIP_ROWS),fr=M.getParameter(F.UNPACK_SKIP_IMAGES);M.pixelStorei(F.UNPACK_ROW_LENGTH,Dt.width),M.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Dt.height),M.pixelStorei(F.UNPACK_SKIP_PIXELS,Fe),M.pixelStorei(F.UNPACK_SKIP_ROWS,je),M.pixelStorei(F.UNPACK_SKIP_IMAGES,at);const Ss=A.isDataArrayTexture||A.isData3DTexture,yt=U.isDataArrayTexture||U.isData3DTexture;if(A.isDepthTexture){const Ht=X.get(A),hr=X.get(U),Rt=X.get(Ht.__renderTarget),dr=X.get(hr.__renderTarget);M.bindFramebuffer(F.READ_FRAMEBUFFER,Rt.__webglFramebuffer),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,dr.__webglFramebuffer);for(let Ms=0;Ms<Ne;Ms++)Ss&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,X.get(A).__webglTexture,q,at+Ms),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,X.get(U).__webglTexture,Se,Yt+Ms)),F.blitFramebuffer(Fe,je,Ce,Te,Ue,xt,Ce,Te,F.DEPTH_BUFFER_BIT,F.NEAREST);M.bindFramebuffer(F.READ_FRAMEBUFFER,null),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||X.has(A)){const Ht=X.get(A),hr=X.get(U);M.bindFramebuffer(F.READ_FRAMEBUFFER,I),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let Rt=0;Rt<Ne;Rt++)Ss?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.__webglTexture,q,at+Rt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ht.__webglTexture,q),yt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,hr.__webglTexture,Se,Yt+Rt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,hr.__webglTexture,Se),q!==0?F.blitFramebuffer(Fe,je,Ce,Te,Ue,xt,Ce,Te,F.COLOR_BUFFER_BIT,F.NEAREST):yt?F.copyTexSubImage3D(Ae,Se,Ue,xt,Yt+Rt,Fe,je,Ce,Te):F.copyTexSubImage2D(Ae,Se,Ue,xt,Fe,je,Ce,Te);M.bindFramebuffer(F.READ_FRAMEBUFFER,null),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else yt?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Ae,Se,Ue,xt,Yt,Ce,Te,Ne,bt,_n,Dt.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Ae,Se,Ue,xt,Yt,Ce,Te,Ne,bt,Dt.data):F.texSubImage3D(Ae,Se,Ue,xt,Yt,Ce,Te,Ne,bt,_n,Dt):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Se,Ue,xt,Ce,Te,bt,_n,Dt.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Se,Ue,xt,Dt.width,Dt.height,bt,Dt.data):F.texSubImage2D(F.TEXTURE_2D,Se,Ue,xt,Ce,Te,bt,_n,Dt);M.pixelStorei(F.UNPACK_ROW_LENGTH,Cn),M.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pt),M.pixelStorei(F.UNPACK_SKIP_PIXELS,hi),M.pixelStorei(F.UNPACK_SKIP_ROWS,Pi),M.pixelStorei(F.UNPACK_SKIP_IMAGES,fr),Se===0&&U.generateMipmaps&&F.generateMipmap(Ae),M.unbindTexture()},this.initRenderTarget=function(A){X.get(A).__webglFramebuffer===void 0&&Q.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Q.setTextureCube(A,0):A.isData3DTexture?Q.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Q.setTexture2DArray(A,0):Q.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){Z=0,B=0,ee=null,M.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}class qb{constructor(e,t={}){if(this.container=document.getElementById(e),!!this.container){if(this.config=Object.assign({active_preset:"tech_core",light_color:"#3b82f6",light_intensity:1.8,particle_density:1200,particle_color:"#06b6d4",rotation_speed:.005,camera_fov:60,webgl_fallback_enabled:"true",mobile_quality_preset:"medium"},t),!this.isWebGLAvailable()){this.triggerFallback();return}this.init()}}isWebGLAvailable(){try{const e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch{return!1}}triggerFallback(){const e=document.getElementById("webgl-fallback-banner");e&&this.config.webgl_fallback_enabled==="true"&&e.classList.remove("hidden")}init(){this.scene=new yv;const e=window.innerWidth/window.innerHeight;this.camera=new kn(parseFloat(this.config.camera_fov),e,.1,1e3),this.camera.position.z=8,this.renderer=new Xb({alpha:!0,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.container.appendChild(this.renderer.domElement),this.ambientLight=new Xv(16777215,.4),this.scene.add(this.ambientLight),this.pointLight=new Wv(this.config.light_color,parseFloat(this.config.light_intensity),100),this.pointLight.position.set(5,5,5),this.scene.add(this.pointLight),this.spotLight=new Vv(this.config.particle_color,parseFloat(this.config.light_intensity)*.8),this.spotLight.position.set(-5,-5,5),this.scene.add(this.spotLight),this.mainGroup=new Gs,this.scene.add(this.mainGroup),this.buildMeshPreset(),this.buildParticleSystem(),this.mouseX=0,this.mouseY=0,this.targetMouseX=0,this.targetMouseY=0,window.addEventListener("mousemove",t=>{this.targetMouseX=(t.clientX/window.innerWidth-.5)*2,this.targetMouseY=(t.clientY/window.innerHeight-.5)*2}),window.addEventListener("resize",()=>this.onResize()),this.animate()}buildMeshPreset(){const e=this.config.active_preset;if(e==="cyber_cube"){const t=new _a(3,3,3,4,4,4),n=new wa({color:this.config.light_color,wireframe:!0,metalness:.8,roughness:.2});this.centerpiece=new Hn(t,n),this.mainGroup.add(this.centerpiece)}else if(e==="neural_network"){const n=new Gs,r=new Wf(.12,16,16),s=new wa({color:this.config.particle_color,emissive:this.config.particle_color,emissiveIntensity:.5});for(let a=0;a<40;a++){const o=new Hn(r,s);o.position.set((Math.random()-.5)*6,(Math.random()-.5)*6,(Math.random()-.5)*6),n.add(o)}this.centerpiece=n,this.mainGroup.add(this.centerpiece)}else{const t=new Gf(2,2),n=new wa({color:this.config.light_color,wireframe:!0,metalness:.9,roughness:.1});this.centerpiece=new Hn(t,n);const r=new Ol(3.2,.03,16,100),s=new wa({color:this.config.particle_color,wireframe:!1});this.ring1=new Hn(r,s),this.ring1.rotation.x=Math.PI/3;const a=new Ol(3.8,.02,16,100),o=new wa({color:this.config.light_color});this.ring2=new Hn(a,o),this.ring2.rotation.y=Math.PI/4,this.mainGroup.add(this.centerpiece),this.mainGroup.add(this.ring1),this.mainGroup.add(this.ring2)}}buildParticleSystem(){let e=parseInt(this.config.particle_density)||1200;this.config.mobile_quality_preset==="low"&&window.innerWidth<768&&(e=Math.floor(e*.3));const t=new Zn,n=new Float32Array(e*3);for(let s=0;s<e*3;s+=3)n[s]=(Math.random()-.5)*30,n[s+1]=(Math.random()-.5)*30,n[s+2]=(Math.random()-.5)*30;t.setAttribute("position",new Vi(n,3));const r=new Pm({color:this.config.particle_color,size:.05,transparent:!0,opacity:.6});this.particles=new Lv(t,r),this.scene.add(this.particles)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){requestAnimationFrame(()=>this.animate());const e=parseFloat(this.config.rotation_speed)||.005;this.centerpiece&&(this.centerpiece.rotation.y+=e,this.centerpiece.rotation.x+=e*.5),this.ring1&&(this.ring1.rotation.z+=e*1.2),this.ring2&&(this.ring2.rotation.x-=e*.8),this.particles&&(this.particles.rotation.y+=e*.2),this.mouseX+=(this.targetMouseX-this.mouseX)*.05,this.mouseY+=(this.targetMouseY-this.mouseY)*.05,this.mainGroup.position.x=this.mouseX*.8,this.mainGroup.position.y=-this.mouseY*.8,this.renderer.render(this.scene,this.camera)}updateScrollProgress(e){this.mainGroup&&(this.mainGroup.rotation.z=e*Math.PI*2,this.camera.position.z=8-e*3)}}function ji(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Xm(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}var li={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},oo={duration:.5,overwrite:!1,delay:0},qf,pn,Lt,xi=1e8,wt=1/xi,ju=Math.PI*2,Yb=ju/4,$b=0,qm=Math.sqrt,Kb=Math.cos,Zb=Math.sin,un=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},cr=function(e){return typeof e=="number"},Yf=function(e){return typeof e>"u"},Yi=function(e){return typeof e=="object"},Xn=function(e){return e!==!1},$f=function(){return typeof window<"u"},Zo=function(e){return zt(e)||un(e)},Ym=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},wn=Array.isArray,Jb=/random\([^)]+\)/g,Qb=/,\s*/g,Vd=/(?:-?\.?\d|\.)+/gi,$m=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Xs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Yc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Km=/[+-]=-?[.\d]+/,jb=/[^,'"\[\]\s]+/gi,eT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Nt,Ii,ef,Kf,ci={},Fl={},Zm,Jm=function(e){return(Fl=aa(e,ci))&&Kn},Zf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},lo=function(e,t){return!t&&console.warn(e)},Qm=function(e,t){return e&&(ci[e]=t)&&Fl&&(Fl[e]=t)||ci},co=function(){return 0},tT={suppressEvents:!0,isStart:!0,kill:!1},vl={suppressEvents:!0,kill:!1},nT={suppressEvents:!0},Jf={},Rr=[],tf={},jm,ti={},$c={},Gd=30,Sl=[],Qf="",jf=function(e){var t=e[0],n,r;if(Yi(t)||zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Sl.length;r--&&!Sl[r].targetTest(t););n=Sl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new M_(e[r],n)))||e.splice(r,1);return e},es=function(e){return e._gsap||jf(vi(e))[0]._gsap},e_=function(e,t,n){return(n=e[t])&&zt(n)?e[t]():Yf(n)&&e.getAttribute&&e.getAttribute(t)||n},qn=function(e,t){return(e=e.split(",")).forEach(t)||e},Vt=function(e){return Math.round(e*1e5)/1e5||0},It=function(e){return Math.round(e*1e7)/1e7||0},Js=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},iT=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Bl=function(){var e=Rr.length,t=Rr.slice(0),n,r;for(tf={},Rr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},eh=function(e){return!!(e._initted||e._startAt||e.add)},t_=function(e,t,n,r){Rr.length&&!pn&&Bl(),e.render(t,n,!!(pn&&t<0&&eh(e))),Rr.length&&!pn&&Bl()},n_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(jb).length<2?t:un(e)?e.trim():e},i_=function(e){return e},ui=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},rT=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},aa=function(e,t){for(var n in t)e[n]=t[n];return e},Wd=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Yi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},zl=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Va=function(e){var t=e.parent||Nt,n=e.keyframes?rT(wn(e.keyframes)):ui;if(Xn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},sT=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},r_=function(e,t,n,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},ic=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ir=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ts=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},aT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},nf=function(e,t,n,r){return e._startAt&&(pn?e._startAt.revert(vl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},oT=function i(e){return!e||e._ts&&i(e.parent)},Xd=function(e){return e._repeat?oa(e._tTime,e=e.duration()+e._rDelay)*e:0},oa=function(e,t){var n=Math.floor(e=It(e/t));return e&&n===e?n-1:n},kl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},rc=function(e){return e._end=It(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},sc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=It(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),rc(e),n._dirty||ts(n,e)),e},s_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=kl(e.rawTime(),t),(!t._dur||bo(0,t.totalDuration(),n)-t._tTime>wt)&&t.render(n,!0)),ts(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-wt}},Oi=function(e,t,n,r){return t.parent&&Ir(t),t._start=It((cr(n)?n:n||e!==Nt?pi(e,n,t):e._time)+t._delay),t._end=It(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),r_(e,t,"_first","_last",e._sort?"_start":0),rf(t)||(e._recent=t),r||s_(e,t),e._ts<0&&sc(e,e._tTime),e},a_=function(e,t){return(ci.ScrollTrigger||Zf("scrollTrigger",t))&&ci.ScrollTrigger.create(t,e)},o_=function(e,t,n,r,s){if(nh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!pn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&jm!==ri.frame)return Rr.push(e),e._lazy=[s,r],1},lT=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},rf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},cT=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&lT(e)&&!(!e._initted&&rf(e))||(e._ts<0||e._dp._ts<0)&&!rf(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=bo(0,e._tDur,t),u=oa(l,o),e._yoyo&&u&1&&(a=1-a),u!==oa(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||pn||r||e._zTime===wt||!t&&e._zTime){if(!e._initted&&o_(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?wt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&nf(e,t,n,!0),e._onUpdate&&!n&&ai(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ai(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ir(e,1),!n&&!pn&&(ai(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},uT=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},la=function(e,t,n,r){var s=e._repeat,a=It(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:It(a*(s+1)+e._rDelay*s):a,o>0&&!r&&sc(e,e._tTime=e._tDur*o),e.parent&&rc(e),n||ts(e.parent,e),e},qd=function(e){return e instanceof Vn?ts(e):la(e,e._dur)},fT={_start:0,endTime:co,totalDuration:co},pi=function i(e,t,n){var r=e.labels,s=e._recent||fT,a=e.duration()>=xi?s.endTime(!1):e._dur,o,l,c;return un(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(wn(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ga=function(e,t,n){var r=cr(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Xn(l.vars.inherit)&&l.parent;a.immediateRender=Xn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Zt(t[0],a,t[s+1])},Fr=function(e,t){return e||e===0?t(e):t},bo=function(e,t,n){return n<e?e:n>t?t:n},yn=function(e,t){return!un(e)||!(t=eT.exec(e))?"":t[1]},hT=function(e,t,n){return Fr(n,function(r){return bo(e,t,r)})},sf=[].slice,l_=function(e,t){return e&&Yi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Yi(e[0]))&&!e.nodeType&&e!==Ii},dT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return un(r)&&!t||l_(r,1)?(s=n).push.apply(s,vi(r)):n.push(r)})||n},vi=function(e,t,n){return Lt&&!t&&Lt.selector?Lt.selector(e):un(e)&&!n&&(ef||!ca())?sf.call((t||Kf).querySelectorAll(e),0):wn(e)?dT(e,n):l_(e)?sf.call(e,0):e?[e]:[]},af=function(e){return e=vi(e)[0]||lo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return vi(t,n.querySelectorAll?n:n===e?lo("Invalid scope")||Kf.createElement("div"):e)}},c_=function(e){return e.sort(function(){return .5-Math.random()})},u_=function(e){if(zt(e))return e;var t=Yi(e)?e:{each:e},n=ns(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,h=r;return un(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],h=r[1]),function(f,d,_){var g=(_||t).length,m=a[g],p,S,T,x,y,E,b,v,w;if(!m){if(w=t.grid==="auto"?0:(t.grid||[1,xi])[1],!w){for(b=-xi;b<(b=_[w++].getBoundingClientRect().left)&&w<g;);w<g&&w--}for(m=a[g]=[],p=l?Math.min(w,g)*u-.5:r%w,S=w===xi?0:l?g*h/w-.5:r/w|0,b=0,v=xi,E=0;E<g;E++)T=E%w-p,x=S-(E/w|0),m[E]=y=c?Math.abs(c==="y"?x:T):qm(T*T+x*x),y>b&&(b=y),y<v&&(v=y);r==="random"&&c_(m),m.max=b-v,m.min=v,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(w>g?g-1:c?c==="y"?g/w:w:Math.max(w,g/w))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=yn(t.amount||t.each)||0,n=n&&g<0?wT(n):n}return g=(m[f]-m.min)/m.max||0,It(m.b+(n?n(g):g)*m.v)+m.u}},of=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=It(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(cr(n)?0:yn(n))}},f_=function(e,t){var n=wn(e),r,s;return!n&&Yi(e)&&(r=n=e.radius||xi,e.values?(e=vi(e.values),(s=!cr(e[0]))&&(r*=r)):e=of(e.increment)),Fr(t,n?zt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=xi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:a,s||u===a||cr(a)?u:u+yn(a)}:of(e))},h_=function(e,t,n,r){return Fr(wn(e)?!t:n===!0?!!(n=0):!r,function(){return wn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},pT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},mT=function(e,t){return function(n){return e(parseFloat(n))+(t||yn(n))}},_T=function(e,t,n){return p_(e,t,0,1,n)},d_=function(e,t,n){return Fr(n,function(r){return e[~~t(r)]})},gT=function i(e,t,n){var r=t-e;return wn(e)?d_(e,i(0,e.length),t):Fr(n,function(s){return(r+(s-e)%r)%r+e})},xT=function i(e,t,n){var r=t-e,s=r*2;return wn(e)?d_(e,i(0,e.length-1),t):Fr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},uo=function(e){return e.replace(Jb,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Qb);return h_(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},p_=function(e,t,n,r,s){var a=t-e,o=r-n;return Fr(s,function(l){return n+((l-e)/a*o||0)})},vT=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=un(e),o={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(wn(e)&&!wn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else r||(e=aa(wn(e)?[]:{},e));if(!u){for(l in t)th.call(o,e,l,"get",t[l]);s=function(_){return sh(_,o)||(a?e.p:e)}}}return Fr(n,s)},Yd=function(e,t,n){var r=e.labels,s=xi,a,o,l;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ai=function(e,t,n){var r=e.vars,s=r[t],a=Lt,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Rr.length&&Bl(),o&&(Lt=o),u=l?s.apply(c,l):s.call(c),Lt=a,u},Na=function(e){return Ir(e),e.scrollTrigger&&e.scrollTrigger.kill(!!pn),e.progress()<1&&ai(e,"onInterrupt"),e},qs,m_=[],__=function(e){if(e)if(e=!e.name&&e.default||e,$f()||e.headless){var t=e.name,n=zt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:co,render:sh,add:th,kill:OT,modifier:UT,rawVars:0},a={targetTest:0,get:0,getSetter:rh,aliases:{},register:0};if(ca(),e!==r){if(ti[t])return;ui(r,ui(zl(e,s),a)),aa(r.prototype,aa(s,zl(e,a))),ti[r.prop=t]=r,e.targetTest&&(Sl.push(r),Jf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Qm(t,r),e.register&&e.register(Kn,r,Yn)}else m_.push(e)},Tt=255,Ua={aqua:[0,Tt,Tt],lime:[0,Tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Tt],navy:[0,0,128],white:[Tt,Tt,Tt],olive:[128,128,0],yellow:[Tt,Tt,0],orange:[Tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Tt,0,0],pink:[Tt,192,203],cyan:[0,Tt,Tt],transparent:[Tt,Tt,Tt,0]},Kc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Tt+.5|0},g_=function(e,t,n){var r=e?cr(e)?[e>>16,e>>8&Tt,e&Tt]:0:Ua.black,s,a,o,l,c,u,h,f,d,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ua[e])r=Ua[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Tt,r&Tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Tt,e&Tt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(Vd),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=Kc(l+1/3,s,a),r[1]=Kc(l,s,a),r[2]=Kc(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match($m),n&&r.length<4&&(r[3]=1),r}else r=e.match(Vd)||Ua.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/Tt,a=r[1]/Tt,o=r[2]/Tt,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(a-o)/d+(a<o?6:0):h===a?(o-s)/d+2:(s-a)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},x_=function(e){var t=[],n=[],r=-1;return e.split(Cr).forEach(function(s){var a=s.match(Xs)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},$d=function(e,t,n){var r="",s=(e+r).match(Cr),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=g_(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=x_(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Cr,"1").split(Xs),h=c.length-1;o<h;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Cr),h=c.length-1;o<h;o++)r+=c[o]+s[o];return r+c[h]},Cr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ua)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),ST=/hsl[a]?\(/,v_=function(e){var t=e.join(" "),n;if(Cr.lastIndex=0,Cr.test(t))return n=ST.test(t),e[1]=$d(e[1],n),e[0]=$d(e[0],n,x_(e[1])),!0},fo,ri=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,h,f,d,_=function g(m){var p=i()-r,S=m===!0,T,x,y,E;if((p>e||p<0)&&(n+=p-t),r+=p,y=r-n,T=y-a,(T>0||S)&&(E=++h.frame,f=y-h.time*1e3,h.time=y=y/1e3,a+=T+(T>=s?4:s-T),x=1),S||(l=c(g)),x)for(d=0;d<o.length;d++)o[d](y,f,E,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Zm&&(!ef&&$f()&&(Ii=ef=window,Kf=Ii.document||{},ci.gsap=Kn,(Ii.gsapVersions||(Ii.gsapVersions=[])).push(Kn.version),Jm(Fl||Ii.GreenSockGlobals||!Ii.gsap&&Ii||{}),m_.forEach(__)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},fo=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),fo=0,c=co},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,p,S){var T=p?function(x,y,E,b){m(x,y,E,b),h.remove(T)}:m;return h.remove(m),o[S?"unshift":"push"](T),ca(),T},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},h})(),ca=function(){return!fo&&ri.wake()},ft={},MT=/^[\d.\-M][\d.\-,\s]/,yT=/["']/g,ET=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(yT,"").trim():+c,r=l.substr(o+1).trim();return t},bT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},TT=function(e){var t=(e+"").split("("),n=ft[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[ET(t[1])]:bT(e).split(",").map(n_)):ft._CE&&MT.test(e)?ft._CE("",e):n},wT=function(e){return function(t){return 1-e(1-t)}},ns=function(e,t){return e&&(zt(e)?e:ft[e]||TT(e))||t},gs=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return qn(e,function(o){ft[o]=ci[o]=s,ft[a=o.toLowerCase()]=n;for(var l in s)ft[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[o+"."+l]=s[l]}),s},S_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Zc=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/ju*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*Zb((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:S_(o);return s=ju/s,l.config=function(c,u){return i(e,c,u)},l},Jc=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:S_(n);return r.config=function(s){return i(e,s)},r};qn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;gs(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;gs("Elastic",Zc("in"),Zc("out"),Zc());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};gs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);gs("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});gs("Circ",function(i){return-(qm(1-i*i)-1)});gs("Sine",function(i){return i===1?1:-Kb(i*Yb)+1});gs("Back",Jc("in"),Jc("out"),Jc());ft.SteppedEase=ft.steps=ci.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-wt;return function(o){return((r*bo(0,a,o)|0)+s)*n}}};oo.ease=ft["quad.out"];qn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Qf+=i+","+i+"Params,"});var M_=function(e,t){this.id=$b++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:e_,this.set=t?t.getSetter:rh},ho=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,la(this,+t.duration,1,1),this.data=t.data,Lt&&(this._ctx=Lt,Lt.data.push(this)),fo||ri.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,la(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(ca(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(sc(this,n),!s._dp||s.parent||s_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Oi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===wt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),t_(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Xd(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Xd(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?oa(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?kl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-wt?0:this._rts,this.totalTime(bo(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),rc(this),aT(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ca(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==wt&&(this._tTime-=wt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=It(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Oi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Xn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?kl(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=nT);var r=pn;return pn=n,eh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),pn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,qd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,qd(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(pi(this,n),Xn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Xn(r)),this._dur||(this._zTime=-wt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-wt)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(a){var o=zt(n)?n:i_,l=function(){var u=r.then;r.then=null,s&&s(),zt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Na(this)},i})();ui(ho.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var Vn=(function(i){Xm(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Xn(n.sortChildren),Nt&&Oi(n.parent||Nt,ji(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&a_(ji(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Ga(0,arguments,this),this},t.from=function(r,s,a){return Ga(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Ga(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Va(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Zt(r,s,pi(this,a),1),this},t.call=function(r,s,a){return Oi(this,Zt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Zt(r,a,pi(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Va(a).immediateRender=Xn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,h){return o.startAt=a,Va(o).immediateRender=Xn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,h)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:It(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,_,g,m,p,S,T,x,y,E,b;if(this!==Nt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),f=u,x=this._start,T=this._ts,p=!T,h&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(f=It(u%m),u===l?(g=this._repeat,f=c):(y=It(u/m),g=~~y,g&&g===y&&(f=c,g--),f>c&&(f=c)),y=oa(this._tTime,m),!o&&this._tTime&&y!==g&&this._tTime-y*m-this._dur<=0&&(y=g),E&&g&1&&(f=c-f,b=1),g!==y&&!this._lock){var v=E&&y&1,w=v===(E&&g&1);if(g<y&&(v=!v),o=v?0:u%c?c:u,this._lock=1,this.render(o||(b?0:It(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ai(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,y=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=uT(this,It(o),It(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!y&&(ai(this,"onStart"),this._tTime!==u))return this;if(f>=o&&r>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!p){S=0,_&&(u+=this._zTime=-wt);break}}d=_}else{d=this._last;for(var R=r<0?r:f;d;){if(_=d._prev,(d._act||R<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(R-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(R-d._start)*d._ts,s,a||pn&&eh(d)),f!==this._time||!this._ts&&!p){S=0,_&&(u+=this._zTime=R?-wt:wt);break}}d=_}}if(S&&!s&&(this.pause(),S.render(f>=o?0:-wt)._zTime=f>=o?1:-1,this._ts))return this._start=x,rc(this),this.render(r,s,a);this._onUpdate&&!s&&ai(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ir(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(ai(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(cr(s)||(s=pi(this,s,r)),!(r instanceof ho)){if(wn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(un(r))return this.addLabel(r,s);if(zt(r))r=Zt.delayedCall(0,r);else return this}return this!==r?Oi(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-xi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Zt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return un(r)?this.removeLabel(r):zt(r)?this.killTweensOf(r):(r.parent===this&&ic(this,r),r===this._recent&&(this._recent=this._last),ts(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=It(ri.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=pi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Zt.delayedCall(0,s||co,a);return o.data="isPause",this._hasPause=1,Oi(this,o,pi(this,r))},t.removePause=function(r){var s=this._first;for(r=pi(this,r);s;)s._start===r&&s.data==="isPause"&&Ir(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Er!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=vi(r),l=this._first,c=cr(s),u;l;)l instanceof Zt?iT(l._targets,o)&&(c?(!Er||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=pi(a,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Zt.to(a,ui({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||wt,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&la(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,ui({startAt:{time:pi(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Yd(this,pi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Yd(this,pi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=It(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return ts(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ts(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=xi,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Oi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=It(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;la(a,a===Nt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Nt._ts&&(t_(Nt,kl(r,Nt)),jm=ri.frame),ri.frame>=Gd){Gd+=li.autoSleep||120;var s=Nt._first;if((!s||!s._ts)&&li.autoSleep&&ri._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ri.sleep()}}},e})(ho);ui(Vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var AT=function(e,t,n,r,s,a,o){var l=new Yn(this._pt,e,t,0,1,A_,null,s),c=0,u=0,h,f,d,_,g,m,p,S;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=uo(r)),a&&(S=[n,r],a(S,e,t),n=S[0],r=S[1]),f=n.match(Yc)||[];h=Yc.exec(r);)_=h[0],g=r.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Js(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=Yc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(Km.test(r)||p)&&(l.e=0),this._pt=l,l},th=function(e,t,n,r,s,a,o,l,c,u){zt(r)&&(r=r(s||0,e,a));var h=e[t],f=n!=="get"?n:zt(h)?c?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=zt(h)?c?LT:T_:ih,_;if(un(r)&&(~r.indexOf("random(")&&(r=uo(r)),r.charAt(1)==="="&&(_=Js(f,r)+(yn(f)||0),(_||_===0)&&(r=_))),!u||f!==r||lf)return!isNaN(f*r)&&r!==""?(_=new Yn(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?NT:w_,0,d),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&Zf(t,r),AT.call(this,e,t,f,r,d,l||li.stringFilter,c))},RT=function(e,t,n,r,s){if(zt(e)&&(e=Wa(e,s,t,n,r)),!Yi(e)||e.style&&e.nodeType||wn(e)||Ym(e))return un(e)?Wa(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=Wa(e[o],s,t,n,r);return a},y_=function(e,t,n,r,s,a){var o,l,c,u;if(ti[e]&&(o=new ti[e]).init(s,o.rawVars?t[e]:RT(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new Yn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==qs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Er,lf,nh=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,T=e._overwrite==="auto"&&!qf,x=e.timeline,y=r.easeReverse||h,E,b,v,w,R,L,D,H,I,z,Z,B,ee;if(x&&(!f||!s)&&(s="none"),e._ease=ns(s,oo.ease),e._rEase=y&&(ns(y)||e._ease),e._from=!x&&!!r.runBackwards,e._from&&(e.ratio=1),!x||f&&!r.stagger){if(H=m[0]?es(m[0]).harness:0,B=H&&r[H.prop],E=zl(r,Jf),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&_?vl:tT),g._lazy=0),a){if(Ir(e._startAt=Zt.set(m,ui({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Xn(l),startAt:null,delay:0,onUpdate:c&&function(){return ai(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pn||!o&&!d)&&e._startAt.revert(vl),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),v=ui({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Xn(l),immediateRender:o,stagger:0,parent:p},E),B&&(v[H.prop]=B),Ir(e._startAt=Zt.set(m,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pn?e._startAt.revert(vl):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Xn(l)||l&&!_,b=0;b<m.length;b++){if(R=m[b],D=R._gsap||jf(m)[b]._gsap,e._ptLookup[b]=z={},tf[D.id]&&Rr.length&&Bl(),Z=S===m?b:S.indexOf(R),H&&(I=new H).init(R,B||E,e,Z,S)!==!1&&(e._pt=w=new Yn(e._pt,R,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function($){z[$]=w}),I.priority&&(L=1)),!H||B)for(v in E)ti[v]&&(I=y_(v,E,e,Z,R,S))?I.priority&&(L=1):z[v]=w=th.call(e,R,v,"get",E[v],Z,S,0,r.stringFilter);e._op&&e._op[b]&&e.kill(R,e._op[b]),T&&e._pt&&(Er=e,Nt.killTweensOf(R,z,e.globalTime(t)),ee=!e.parent,Er=0),e._pt&&l&&(tf[D.id]=1)}L&&R_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ee,f&&t<=0&&x.render(xi,!0,!0)},CT=function(e,t,n,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return lf=1,e.vars[t]="+=0",nh(e,o),lf=0,l?lo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Vt(n)+yn(h.e)),h.b&&(h.b=u.s+yn(h.b))},PT=function(e,t){var n=e[0]?es(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return t;s=aa({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},DT=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(wn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Wa=function(e,t,n,r,s){return zt(e)?e.call(t,n,r,s):un(e)&&~e.indexOf("random(")?uo(e):e},E_=Qf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",b_={};qn(E_+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return b_[i]=1});var Zt=(function(i){Xm(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:Va(r))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=r.parent||Nt,S=(wn(n)||Ym(n)?cr(n[0]):"length"in r)?[n]:vi(n),T,x,y,E,b,v,w,R;if(o._targets=S.length?jf(S):lo("GSAP target "+n+" not found. https://gsap.com",!li.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||Zo(c)||Zo(u)){r=o.vars;var L=r.easeReverse||r.yoyoEase;if(T=o.timeline=new Vn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:S}),T.kill(),T.parent=T._dp=ji(o),T._start=0,f||Zo(c)||Zo(u)){if(E=S.length,w=f&&u_(f),Yi(f))for(b in f)~E_.indexOf(b)&&(R||(R={}),R[b]=f[b]);for(x=0;x<E;x++)y=zl(r,b_),y.stagger=0,L&&(y.easeReverse=L),R&&aa(y,R),v=S[x],y.duration=+Wa(c,ji(o),x,v,S),y.delay=(+Wa(u,ji(o),x,v,S)||0)-o._delay,!f&&E===1&&y.delay&&(o._delay=u=y.delay,o._start+=u,y.delay=0),T.to(v,y,w?w(x,v,S):0),T._ease=ft.none;T.duration()?c=u=0:o.timeline=0}else if(_){Va(ui(T.vars.defaults,{ease:"none"})),T._ease=ns(_.ease||r.ease||"none");var D=0,H,I,z;if(wn(_))_.forEach(function(Z){return T.to(S,Z,">")}),T.duration();else{y={};for(b in _)b==="ease"||b==="easeEach"||DT(b,_[b],y,_.easeEach);for(b in y)for(H=y[b].sort(function(Z,B){return Z.t-B.t}),D=0,x=0;x<H.length;x++)I=H[x],z={ease:I.e,duration:(I.t-(x?H[x-1].t:0))/100*c},z[b]=I.v,T.to(S,z,D),D+=z.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return d===!0&&!qf&&(Er=ji(o),Nt.killTweensOf(S),Er=0),Oi(p,ji(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!c&&!_&&o._start===It(p._time)&&Xn(h)&&oT(ji(o))&&p.data!=="nested")&&(o._tTime=-wt,o.render(Math.max(0,-u)||0)),m&&a_(ji(o),m),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-wt&&!u?l:r<wt?0:r,f,d,_,g,m,p,S,T;if(!c)cT(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,T=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,a);if(f=It(h%g),h===l?(_=this._repeat,f=c):(m=It(h/g),_=~~m,_&&_===m?(f=c,_--):f>c&&(f=c)),p=this._yoyo&&_&1,p&&(f=c-f),m=oa(this._tTime,g),f===o&&!a&&this._initted&&_===m)return this._tTime=h,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=a=1,this.render(It(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(o_(this,u?r:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._rEase){var x=f<o;if(x!==this._inv){var y=x?o:c-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=y?(x?-1:1)/y:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(f/c);if(this._from&&(this.ratio=S=1-S),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!m&&(ai(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;T&&T.render(r<0?r:T._dur*T._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&nf(this,r,s,a),ai(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&ai(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&nf(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ir(this,1),!s&&!(u&&!o)&&(h||o||p)&&(ai(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){fo||ri.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||nh(this,c),u=this._ease(c/this._dur),CT(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(sc(this,0),this.parent||r_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Na(this):this.scrollTrigger&&this.scrollTrigger.kill(!!pn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Er&&Er.vars.overwrite!==!0)._first||Na(this),this.parent&&a!==this.timeline.totalDuration()&&la(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?vi(r):o,c=this._ptLookup,u=this._pt,h,f,d,_,g,m,p;if((!s||s==="all")&&sT(o,l))return s==="all"&&(this._pt=0),Na(this);for(h=this._op=this._op||[],s!=="all"&&(un(s)&&(g={},qn(s,function(S){return g[S]=1}),s=g),s=PT(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],s==="all"?(h[p]=s,_=f,d={}):(d=h[p]=h[p]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&ic(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Na(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ga(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Ga(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Nt.killTweensOf(r,s,a)},e})(ho);ui(Zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});qn("staggerTo,staggerFrom,staggerFromTo",function(i){Zt[i]=function(){var e=new Vn,t=sf.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var ih=function(e,t,n){return e[t]=n},T_=function(e,t,n){return e[t](n)},LT=function(e,t,n,r){return e[t](r.fp,n)},IT=function(e,t,n){return e.setAttribute(t,n)},rh=function(e,t){return zt(e[t])?T_:Yf(e[t])&&e.setAttribute?IT:ih},w_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},NT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},A_=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},sh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},UT=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},OT=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?ic(this,t,"_pt"):t.dep||(n=1),t=r;return!n},FT=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},R_=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},Yn=(function(){function i(t,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||w_,this.d=l||this,this.set=c||ih,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=FT,this.m=n,this.mt=s,this.tween=r},i})();qn(Qf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return Jf[i]=1});ci.TweenMax=ci.TweenLite=Zt;ci.TimelineLite=ci.TimelineMax=Vn;Nt=new Vn({sortChildren:!1,defaults:oo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});li.stringFilter=v_;var is=[],Ml={},BT=[],Kd=0,zT=0,Qc=function(e){return(Ml[e]||BT).map(function(t){return t()})},cf=function(){var e=Date.now(),t=[];e-Kd>2&&(Qc("matchMediaInit"),is.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=Ii.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Qc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Kd=e,Qc("matchMedia"))},C_=(function(){function i(t,n){this.selector=n&&af(n),this.data=[],this._r=[],this.isReverted=!1,this.id=zT++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){zt(n)&&(s=r,r=n,n=zt);var a=this,o=function(){var c=Lt,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=af(s)),Lt=a,h=r.apply(a,arguments),zt(h)&&a._r.push(h),Lt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===zt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var r=Lt;Lt=null,n(this),Lt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Zt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Vn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Zt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=is.length;a--;)is[a].id===this.id&&is.splice(a,1)},e.revert=function(n){this.kill(n||{})},i})(),kT=(function(){function i(t){this.contexts=[],this.scope=t,Lt&&Lt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Yi(n)||(n={matches:n});var a=new C_(0,s||this.scope),o=a.conditions={},l,c,u;Lt&&!a.selector&&(a.selector=Lt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=Ii.matchMedia(n[c]),l&&(is.indexOf(a)<0&&is.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(cf):l.addEventListener("change",cf)));return u&&r(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Hl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return __(r)})},timeline:function(e){return new Vn(e)},getTweensOf:function(e,t){return Nt.getTweensOf(e,t)},getProperty:function(e,t,n,r){un(e)&&(e=vi(e)[0]);var s=es(e||{}).get,a=n?i_:n_;return n==="native"&&(n=""),e&&(t?a((ti[t]&&ti[t].get||s)(e,t,n,r)):function(o,l,c){return a((ti[o]&&ti[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=vi(e),e.length>1){var r=e.map(function(u){return Kn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var a=ti[t],o=es(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;qs._pt=0,h.init(e,n?u+n:u,qs,0,[e]),h.render(1,h),qs._pt&&sh(1,qs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,s=Kn.to(e,ui((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Nt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ns(e.ease,oo.ease)),Wd(oo,e||{})},config:function(e){return Wd(li,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!ti[o]&&!ci[o]&&lo(t+" effect requires "+o+" plugin.")}),$c[t]=function(o,l,c){return n(vi(o),ui(l||{},s),c)},a&&(Vn.prototype[t]=function(o,l,c){return this.add($c[t](o,Yi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ft[e]=ns(t)},parseEase:function(e,t){return arguments.length?ns(e,t):ft},getById:function(e){return Nt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Vn(e),r,s;for(n.smoothChildTiming=Xn(e.smoothChildTiming),Nt.remove(n),n._dp=0,n._time=n._tTime=Nt._time,r=Nt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Zt&&r.vars.onComplete===r._targets[0]))&&Oi(n,r,r._start-r._delay),r=s;return Oi(Nt,n,0),n},context:function(e,t){return e?new C_(e,t):Lt},matchMedia:function(e){return new kT(e)},matchMediaRefresh:function(){return is.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||cf()},addEventListener:function(e,t){var n=Ml[e]||(Ml[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ml[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:gT,wrapYoyo:xT,distribute:u_,random:h_,snap:f_,normalize:_T,getUnit:yn,clamp:hT,splitColor:g_,toArray:vi,selector:af,mapRange:p_,pipe:pT,unitize:mT,interpolate:vT,shuffle:c_},install:Jm,effects:$c,ticker:ri,updateRoot:Vn.updateRoot,plugins:ti,globalTimeline:Nt,core:{PropTween:Yn,globals:Qm,Tween:Zt,Timeline:Vn,Animation:ho,getCache:es,_removeLinkedListItem:ic,reverting:function(){return pn},context:function(e){return e&&Lt&&(Lt.data.push(e),e._ctx=Lt),Lt},suppressOverwrites:function(e){return qf=e}}};qn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Hl[i]=Zt[i]});ri.add(Vn.updateRoot);qs=Hl.to({},{duration:0});var HT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},VT=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=HT(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},jc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(un(s)&&(l={},qn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}VT(o,s)}}}},Kn=Hl.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)pn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},jc("roundProps",of),jc("modifiers"),jc("snap",f_))||Hl;Zt.version=Vn.version=Kn.version="3.15.0";Zm=1;$f()&&ca();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;ft.Elastic;ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;var Zd,br,Qs,ah,Jr,Jd,oh,GT=function(){return typeof window<"u"},ur={},Xr=180/Math.PI,js=Math.PI/180,Os=Math.atan2,Qd=1e8,lh=/([A-Z])/g,WT=/(left|right|width|margin|padding|x)/i,XT=/[\s,\(]\S/,zi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},uf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},YT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},$T=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},KT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},P_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},D_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ZT=function(e,t,n){return e.style[t]=n},JT=function(e,t,n){return e.style.setProperty(t,n)},QT=function(e,t,n){return e._gsap[t]=n},jT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ew=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},tw=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Ot="transform",$n=Ot+"Origin",nw=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in ur&&s){if(this.tfm=this.tfm||{},e!=="transform")e=zi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=er(r,o)}):this.tfm[e]=a.x?a[e]:er(r,e),e===$n&&(this.tfm.zOrigin=a.zOrigin);else return zi.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(Ot)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push($n,t,"")),e=Ot}(s||t)&&this.props.push(e,t,s[e])},L_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},iw=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(lh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=oh(),(!s||!s.isStart)&&!n[Ot]&&(L_(n),r.zOrigin&&n[$n]&&(n[$n]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},I_=function(e,t){var n={target:e,props:[],revert:iw,save:nw};return e._gsap||Kn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},N_,ff=function(e,t){var n=br.createElementNS?br.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):br.createElement(e);return n&&n.style?n:br.createElement(e)},oi=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(lh,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,ua(t)||t,1)||""},jd="O,Moz,ms,Ms,Webkit".split(","),ua=function(e,t,n){var r=t||Jr,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(jd[a]+e in s););return a<0?null:(a===3?"ms":a>=0?jd[a]:"")+e},hf=function(){GT()&&window.document&&(Zd=window,br=Zd.document,Qs=br.documentElement,Jr=ff("div")||{style:{}},ff("div"),Ot=ua(Ot),$n=Ot+"Origin",Jr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",N_=!!ua("perspective"),oh=Kn.core.reverting,ah=1)},ep=function(e){var t=e.ownerSVGElement,n=ff("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Qs.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Qs.removeChild(n),s},tp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},U_=function(e){var t,n;try{t=e.getBBox()}catch{t=ep(e),n=1}return t&&(t.width||t.height)||n||(t=ep(e)),t&&!t.width&&!t.x&&!t.y?{x:+tp(e,["x","cx","x1"])||0,y:+tp(e,["y","cy","y1"])||0,width:0,height:0}:t},O_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&U_(e))},Nr=function(e,t){if(t){var n=e.style,r;t in ur&&t!==$n&&(t=Ot),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(lh,"-$1").toLowerCase())):n.removeAttribute(t)}},Tr=function(e,t,n,r,s,a){var o=new Yn(e._pt,t,n,0,1,a?D_:P_);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},np={deg:1,rad:1,turn:1},rw={grid:1,flex:1},Ur=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Jr.style,l=WT.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",_,g,m,p;if(r===a||!s||np[r]||np[a])return s;if(a!=="px"&&!f&&(s=i(e,t,n,"px")),p=e.getCTM&&O_(e),(d||a==="%")&&(ur[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],Vt(d?s/_*h:s/100*_);if(o[l?"width":"height"]=h+(f?a:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===br||!g.appendChild)&&(g=br.body),m=g._gsap,m&&d&&m.width&&l&&m.time===ri.time&&!m.uncache)return Vt(s/m.width*h);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+r,_=e[u],S?e.style[t]=S:Nr(e,t)}else(d||a==="%")&&!rw[oi(g,"display")]&&(o.position=oi(e,"position")),g===e&&(o.position="static"),g.appendChild(Jr),_=Jr[u],g.removeChild(Jr),o.position="absolute";return l&&d&&(m=es(g),m.time=ri.time,m.width=g[u]),Vt(f?_*s/h:_&&s?h/_*s:0)},er=function(e,t,n,r){var s;return ah||hf(),t in zi&&t!=="transform"&&(t=zi[t],~t.indexOf(",")&&(t=t.split(",")[0])),ur[t]&&t!=="transform"?(s=mo(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Gl(oi(e,$n))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Vl[t]&&Vl[t](e,t,n)||oi(e,t)||e_(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ur(e,t,s,n)+n:s},sw=function(e,t,n,r){if(!n||n==="none"){var s=ua(t,e,1),a=s&&oi(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=oi(e,"borderTopColor"))}var o=new Yn(this._pt,e.style,t,0,1,A_),l=0,c=0,u,h,f,d,_,g,m,p,S,T,x,y;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=oi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=oi(e,t)||r,g?e.style[t]=g:Nr(e,t)),u=[n,r],v_(u),n=u[0],r=u[1],f=n.match(Xs)||[],y=r.match(Xs)||[],y.length){for(;h=Xs.exec(r);)m=h[0],S=r.substring(l,h.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),m.charAt(1)==="="&&(m=Js(d,m)+x),p=parseFloat(m),T=m.substr((p+"").length),l=Xs.lastIndex-T.length,T||(T=T||li.units[t]||x,l===r.length&&(r+=T,o.e+=T)),x!==T&&(d=Ur(e,t,g,T)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?D_:P_;return Km.test(r)&&(o.e=0),this._pt=o,o},ip={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},aw=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=ip[n]||n,t[1]=ip[r]||r,t.join(" ")},ow=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ur[o]&&(l=1,o=o==="transformOrigin"?$n:Ot),Nr(n,o);l&&(Nr(n,Ot),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",mo(n,1),a.uncache=1,L_(r)))}},Vl={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Yn(e._pt,t,n,0,0,ow);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},po=[1,0,0,1,0,0],F_={},B_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},rp=function(e){var t=oi(e,Ot);return B_(t)?po:t.substr(7).match($m).map(Vt)},ch=function(e,t){var n=e._gsap||es(e),r=e.style,s=rp(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?po:s):(s===po&&!e.offsetParent&&e!==Qs&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Qs.appendChild(e)),s=rp(e),l?r.display=l:Nr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Qs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},df=function(e,t,n,r,s,a){var o=e._gsap,l=s||ch(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],S=l[5],T=t.split(" "),x=parseFloat(T[0])||0,y=parseFloat(T[1])||0,E,b,v,w;n?l!==po&&(b=d*m-_*g)&&(v=x*(m/b)+y*(-g/b)+(g*S-m*p)/b,w=x*(-_/b)+y*(d/b)-(d*S-_*p)/b,x=v,y=w):(E=U_(e),x=E.x+(~T[0].indexOf("%")?x/100*E.width:x),y=E.y+(~(T[1]||T[0]).indexOf("%")?y/100*E.height:y)),r||r!==!1&&o.smooth?(p=x-c,S=y-u,o.xOffset=h+(p*d+S*g)-p,o.yOffset=f+(p*_+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=y,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[$n]="0px 0px",a&&(Tr(a,o,"xOrigin",c,x),Tr(a,o,"yOrigin",u,y),Tr(a,o,"xOffset",h,o.xOffset),Tr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+y)},mo=function(e,t){var n=e._gsap||new M_(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=oi(e,$n)||"0",u,h,f,d,_,g,m,p,S,T,x,y,E,b,v,w,R,L,D,H,I,z,Z,B,ee,$,C,j,he,Ee,ke,Be;return u=h=f=g=m=p=S=T=x=0,d=_=1,n.svg=!!(e.getCTM&&O_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ot]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ot]!=="none"?l[Ot]:"")),r.scale=r.rotate=r.translate="none"),b=ch(e,n.svg),n.svg&&(n.uncache?(ee=e.getBBox(),c=n.xOrigin-ee.x+"px "+(n.yOrigin-ee.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),df(e,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,b)),y=n.xOrigin||0,E=n.yOrigin||0,b!==po&&(L=b[0],D=b[1],H=b[2],I=b[3],u=z=b[4],h=Z=b[5],b.length===6?(d=Math.sqrt(L*L+D*D),_=Math.sqrt(I*I+H*H),g=L||D?Os(D,L)*Xr:0,S=H||I?Os(H,I)*Xr+g:0,S&&(_*=Math.abs(Math.cos(S*js))),n.svg&&(u-=y-(y*L+E*H),h-=E-(y*D+E*I))):(Be=b[6],Ee=b[7],C=b[8],j=b[9],he=b[10],ke=b[11],u=b[12],h=b[13],f=b[14],v=Os(Be,he),m=v*Xr,v&&(w=Math.cos(-v),R=Math.sin(-v),B=z*w+C*R,ee=Z*w+j*R,$=Be*w+he*R,C=z*-R+C*w,j=Z*-R+j*w,he=Be*-R+he*w,ke=Ee*-R+ke*w,z=B,Z=ee,Be=$),v=Os(-H,he),p=v*Xr,v&&(w=Math.cos(-v),R=Math.sin(-v),B=L*w-C*R,ee=D*w-j*R,$=H*w-he*R,ke=I*R+ke*w,L=B,D=ee,H=$),v=Os(D,L),g=v*Xr,v&&(w=Math.cos(v),R=Math.sin(v),B=L*w+D*R,ee=z*w+Z*R,D=D*w-L*R,Z=Z*w-z*R,L=B,z=ee),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Vt(Math.sqrt(L*L+D*D+H*H)),_=Vt(Math.sqrt(Z*Z+Be*Be)),v=Os(z,Z),S=Math.abs(v)>2e-4?v*Xr:0,x=ke?1/(ke<0?-ke:ke):0),n.svg&&(B=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!B_(oi(e,Ot)),B&&e.setAttribute("transform",B))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Vt(d),n.scaleY=Vt(_),n.rotation=Vt(g)+o,n.rotationX=Vt(m)+o,n.rotationY=Vt(p)+o,n.skewX=S+o,n.skewY=T+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[$n]=Gl(c)),n.xOffset=n.yOffset=0,n.force3D=li.force3D,n.renderTransform=n.svg?cw:N_?z_:lw,n.uncache=0,n},Gl=function(e){return(e=e.split(" "))[0]+" "+e[1]},eu=function(e,t,n){var r=yn(t);return Vt(parseFloat(t)+parseFloat(Ur(e,"x",n+"px",r)))+r},lw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,z_(e,t)},Gr="0deg",Ca="0px",Wr=") ",z_=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,T=n.zOrigin,x="",y=p==="auto"&&e&&e!==1||p===!0;if(T&&(h!==Gr||u!==Gr)){var E=parseFloat(u)*js,b=Math.sin(E),v=Math.cos(E),w;E=parseFloat(h)*js,w=Math.cos(E),a=eu(S,a,b*w*-T),o=eu(S,o,-Math.sin(E)*-T),l=eu(S,l,v*w*-T+T)}m!==Ca&&(x+="perspective("+m+Wr),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(y||a!==Ca||o!==Ca||l!==Ca)&&(x+=l!==Ca||y?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Wr),c!==Gr&&(x+="rotate("+c+Wr),u!==Gr&&(x+="rotateY("+u+Wr),h!==Gr&&(x+="rotateX("+h+Wr),(f!==Gr||d!==Gr)&&(x+="skew("+f+", "+d+Wr),(_!==1||g!==1)&&(x+="scale("+_+", "+g+Wr),S.style[Ot]=x||"translate(0, 0)"},cw=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,T=parseFloat(a),x=parseFloat(o),y,E,b,v,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=js,c*=js,y=Math.cos(l)*h,E=Math.sin(l)*h,b=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(u*=js,w=Math.tan(c-u),w=Math.sqrt(1+w*w),b*=w,v*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),y*=w,E*=w)),y=Vt(y),E=Vt(E),b=Vt(b),v=Vt(v)):(y=h,v=f,E=b=0),(T&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(T=Ur(d,"x",a,"px"),x=Ur(d,"y",o,"px")),(_||g||m||p)&&(T=Vt(T+_-(_*y+g*b)+m),x=Vt(x+g-(_*E+g*v)+p)),(r||s)&&(w=d.getBBox(),T=Vt(T+r/100*w.width),x=Vt(x+s/100*w.height)),w="matrix("+y+","+E+","+b+","+v+","+T+","+x+")",d.setAttribute("transform",w),S&&(d.style[Ot]=w)},uw=function(e,t,n,r,s){var a=360,o=un(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Xr:1),c=l-r,u=r+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Qd)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Qd)%a-~~(c/a)*a)),e._pt=f=new Yn(e._pt,t,n,r,c,qT),f.e=u,f.u="deg",e._props.push(n),f},sp=function(e,t){for(var n in t)e[n]=t[n];return e},fw=function(e,t,n){var r=sp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,_;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ot]=t,o=mo(n,1),Nr(n,Ot),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ot],a[Ot]=t,o=mo(n,1),a[Ot]=c);for(l in ur)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=yn(c),_=yn(u),h=d!==_?Ur(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Yn(e._pt,o,l,h,f-h,uf),e._pt.u=_||0,e._props.push(l));sp(o,r)};qn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});Vl[e>1?"border"+i:i]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(_){return er(o,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,d,h)}});var k_={name:"css",register:hf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,m,p,S,T,x,y,E,b,v,w;ah||hf(),this.styles=this.styles||I_(e),v=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(ti[g]&&y_(g,t,n,r,e,s)))){if(d=typeof u,_=Vl[g],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=uo(u)),_)_(this,e,g,u,n)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Cr.lastIndex=0,Cr.test(c)||(m=yn(c),p=yn(u),p?m!==p&&(c=Ur(e,g,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,r,s,0,0,g),a.push(g),v.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],un(c)&&~c.indexOf("random(")&&(c=uo(c)),yn(c+"")||c==="auto"||(c+=li.units[g]||yn(er(e,g))||""),(c+"").charAt(1)==="="&&(c=er(e,g))):c=er(e,g),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),g in zi&&(g==="autoAlpha"&&(f===1&&er(e,"visibility")==="hidden"&&h&&(f=0),v.push("visibility",0,o.visibility),Tr(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=zi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),T=g in ur,T){if(this.styles.save(g),w=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=oi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=u,u=oi(e,"perspective"),R?e.style.perspective=R:Nr(e,"perspective")}h=parseFloat(u)}if(x||(y=e._gsap,y.renderTransform&&!t.parseTransform||mo(e,t.parseTransform),E=t.smoothOrigin!==!1&&y.smooth,x=this._pt=new Yn(this._pt,o,Ot,0,1,y.renderTransform,y,0,-1),x.dep=1),g==="scale")this._pt=new Yn(this._pt,y,"scaleY",y.scaleY,(S?Js(y.scaleY,S+h):h)-y.scaleY||0,uf),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){v.push($n,0,o[$n]),u=aw(u),y.svg?df(e,u,0,E,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==y.zOrigin&&Tr(this,y,"zOrigin",y.zOrigin,p),Tr(this,o,g,Gl(c),Gl(u)));continue}else if(g==="svgOrigin"){df(e,u,1,E,0,this);continue}else if(g in F_){uw(this,y,g,f,S?Js(f,S+u):u);continue}else if(g==="smoothOrigin"){Tr(this,y,"smooth",y.smooth,u);continue}else if(g==="force3D"){y[g]=u;continue}else if(g==="transform"){fw(this,u,e);continue}}else g in o||(g=ua(g)||g);if(T||(h||h===0)&&(f||f===0)&&!XT.test(u)&&g in o)m=(c+"").substr((f+"").length),h||(h=0),p=yn(u)||(g in li.units?li.units[g]:m),m!==p&&(f=Ur(e,g,c,p)),this._pt=new Yn(this._pt,T?y:o,g,f,(S?Js(f,S+h):h)-f,!T&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?KT:uf),this._pt.u=p||0,T&&w!==u?(this._pt.b=c,this._pt.e=w,this._pt.r=$T):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=YT);else if(g in o)sw.call(this,e,g,c,S?S+u:u);else if(g in e)this.add(e,g,c||e[g],S?S+u:u,r,s);else if(g!=="parseTransform"){Zf(g,u);continue}T||(g in o?v.push(g,0,o[g]):typeof e[g]=="function"?v.push(g,2,e[g]()):v.push(g,1,c||e[g])),a.push(g)}}b&&R_(this)},render:function(e,t){if(t.tween._time||!oh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:er,aliases:zi,getSetter:function(e,t,n){var r=zi[t];return r&&r.indexOf(",")<0&&(t=r),t in ur&&t!==$n&&(e._gsap.x||er(e,"x"))?n&&Jd===n?t==="scale"?jT:QT:(Jd=n||{})&&(t==="scale"?ew:tw):e.style&&!Yf(e.style[t])?ZT:~t.indexOf("-")?JT:rh(e,t)},core:{_removeProperty:Nr,_getMatrix:ch}};Kn.utils.checkPrefix=ua;Kn.core.getStyleSaver=I_;(function(i,e,t,n){var r=qn(i+","+e+","+t,function(s){ur[s]=1});qn(e,function(s){li.units[s]="deg",F_[s]=1}),zi[r[13]]=i+","+e,qn(n,function(s){var a=s.split(":");zi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");qn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){li.units[i]="px"});Kn.registerPlugin(k_);var Ys=Kn.registerPlugin(k_)||Kn;Ys.core.Tween;function hw(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function dw(i,e,t){return e&&hw(i.prototype,e),i}var hn,yl,si,wr,Ar,ea,H_,qr,ta,V_,rr,Ti,G_,W_=function(){return hn||typeof window<"u"&&(hn=window.gsap)&&hn.registerPlugin&&hn},X_=1,$s=[],rt=[],Gi=[],Xa=Date.now,pf=function(e,t){return t},pw=function(){var e=ta.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,rt),r.push.apply(r,Gi),rt=n,Gi=r,pf=function(a,o){return t[a](o)}},Pr=function(e,t){return~Gi.indexOf(e)&&Gi[Gi.indexOf(e)+1][t]},qa=function(e){return!!~V_.indexOf(e)},Dn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},Pn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Jo="scrollLeft",Qo="scrollTop",mf=function(){return rr&&rr.isPressed||rt.cache++},Wl=function(e,t){var n=function r(s){if(s||s===0){X_&&(si.history.scrollRestoration="manual");var a=rr&&rr.isPressed;s=r.v=Math.round(s)||(rr&&rr.iOS?1:0),e(s),r.cacheID=rt.cache,a&&pf("ss",s)}else(t||rt.cache!==r.cacheID||pf("ref"))&&(r.cacheID=rt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},On={s:Jo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Wl(function(i){return arguments.length?si.scrollTo(i,jt.sc()):si.pageXOffset||wr[Jo]||Ar[Jo]||ea[Jo]||0})},jt={s:Qo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:On,sc:Wl(function(i){return arguments.length?si.scrollTo(On.sc(),i):si.pageYOffset||wr[Qo]||Ar[Qo]||ea[Qo]||0})},zn=function(e,t){return(t&&t._ctx&&t._ctx.selector||hn.utils.toArray)(e)[0]||(typeof e=="string"&&hn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},mw=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Or=function(e,t){var n=t.s,r=t.sc;qa(e)&&(e=wr.scrollingElement||Ar);var s=rt.indexOf(e),a=r===jt.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+a]||Dn(e,"scroll",mf);var o=rt[s+a],l=o||(rt[s+a]=Wl(Pr(e,n),!0)||(qa(e)?r:Wl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=hn.getProperty(e,"scrollBehavior")==="smooth"),l},_f=function(e,t,n){var r=e,s=e,a=Xa(),o=a,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=Xa();g||m-a>l?(s=r,r=_,o=a,a=m):n?r+=_:r=s+(_-s)/(m-o)*(a-o)},h=function(){s=r=n?0:r,o=a=0},f=function(_){var g=o,m=s,p=Xa();return(_||_===0)&&_!==r&&u(_),a===o||p-o>c?0:(r+(n?m:-m))/((n?p:a)-g)*1e3};return{update:u,reset:h,getVelocity:f}},Pa=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ap=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},q_=function(){ta=hn.core.globals().ScrollTrigger,ta&&ta.core&&pw()},Y_=function(e){return hn=e||W_(),!yl&&hn&&typeof document<"u"&&document.body&&(si=window,wr=document,Ar=wr.documentElement,ea=wr.body,V_=[si,wr,Ar,ea],hn.utils.clamp,G_=hn.core.context||function(){},qr="onpointerenter"in ea?"pointer":"mouse",H_=Gt.isTouch=si.matchMedia&&si.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in si||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ti=Gt.eventTypes=("ontouchstart"in Ar?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ar?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return X_=0},500),yl=1),ta||q_(),yl};On.op=jt;rt.cache=0;var Gt=(function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){yl||Y_(hn)||console.warn("Please gsap.registerPlugin(Observer)"),ta||q_();var r=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,T=n.onPress,x=n.onRelease,y=n.onRight,E=n.onLeft,b=n.onUp,v=n.onDown,w=n.onChangeX,R=n.onChangeY,L=n.onChange,D=n.onToggleX,H=n.onToggleY,I=n.onHover,z=n.onHoverEnd,Z=n.onMove,B=n.ignoreCheck,ee=n.isNormalizer,$=n.onGestureStart,C=n.onGestureEnd,j=n.onWheel,he=n.onEnable,Ee=n.onDisable,ke=n.onClick,Be=n.scrollSpeed,Xe=n.capture,G=n.allowClicks,J=n.lockAxis,de=n.onLockAxis;this.target=o=zn(o)||Ar,this.vars=n,d&&(d=hn.utils.toArray(d)),r=r||1e-9,s=s||0,_=_||1,Be=Be||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(si.getComputedStyle(ea).lineHeight)||22);var He,me,Re,Le,we,qe,Je,V=this,ve=0,Ke=0,mt=n.passive||!u&&n.passive!==!1,Ge=Or(o,On),dt=Or(o,jt),F=Ge(),gt=dt(),Ye=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ti[0]==="pointerdown",P=qa(o),M=o.ownerDocument||wr,k=[0,0,0],X=[0,0,0],Q=0,ue=function(){return Q=Xa()},oe=function(se,ze){return(V.event=se)&&d&&mw(se.target,d)||ze&&Ye&&se.pointerType!=="touch"||B&&B(se,ze)},te=function(){V._vx.reset(),V._vy.reset(),me.pause(),h&&h(V)},ie=function(){var se=V.deltaX=ap(k),ze=V.deltaY=ap(X),ae=Math.abs(se)>=r,Ve=Math.abs(ze)>=r;L&&(ae||Ve)&&L(V,se,ze,k,X),ae&&(y&&V.deltaX>0&&y(V),E&&V.deltaX<0&&E(V),w&&w(V),D&&V.deltaX<0!=ve<0&&D(V),ve=V.deltaX,k[0]=k[1]=k[2]=0),Ve&&(v&&V.deltaY>0&&v(V),b&&V.deltaY<0&&b(V),R&&R(V),H&&V.deltaY<0!=Ke<0&&H(V),Ke=V.deltaY,X[0]=X[1]=X[2]=0),(Le||Re)&&(Z&&Z(V),Re&&(m&&Re===1&&m(V),S&&S(V),Re=0),Le=!1),qe&&!(qe=!1)&&de&&de(V),we&&(j(V),we=!1),He=0},_e=function(se,ze,ae){k[ae]+=se,X[ae]+=ze,V._vx.update(se),V._vy.update(ze),c?He||(He=requestAnimationFrame(ie)):ie()},De=function(se,ze){J&&!Je&&(V.axis=Je=Math.abs(se)>Math.abs(ze)?"x":"y",qe=!0),Je!=="y"&&(k[2]+=se,V._vx.update(se,!0)),Je!=="x"&&(X[2]+=ze,V._vy.update(ze,!0)),c?He||(He=requestAnimationFrame(ie)):ie()},ge=function(se){if(!oe(se,1)){se=Pa(se,u);var ze=se.clientX,ae=se.clientY,Ve=ze-V.x,Ie=ae-V.y,Ze=V.isDragging;V.x=ze,V.y=ae,(Ze||(Ve||Ie)&&(Math.abs(V.startX-ze)>=s||Math.abs(V.startY-ae)>=s))&&(Re||(Re=Ze?2:1),Ze||(V.isDragging=!0),De(Ve,Ie))}},pe=V.onPress=function(le){oe(le,1)||le&&le.button||(V.axis=Je=null,me.pause(),V.isPressed=!0,le=Pa(le),ve=Ke=0,V.startX=V.x=le.clientX,V.startY=V.y=le.clientY,V._vx.reset(),V._vy.reset(),Dn(ee?o:M,Ti[1],ge,mt,!0),V.deltaX=V.deltaY=0,T&&T(V))},ce=V.onRelease=function(le){if(!oe(le,1)){Pn(ee?o:M,Ti[1],ge,!0);var se=!isNaN(V.y-V.startY),ze=V.isDragging,ae=ze&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Ve=Pa(le);!ae&&se&&(V._vx.reset(),V._vy.reset(),u&&G&&hn.delayedCall(.08,function(){if(Xa()-Q>300&&!le.defaultPrevented){if(le.target.click)le.target.click();else if(M.createEvent){var Ie=M.createEvent("MouseEvents");Ie.initMouseEvent("click",!0,!0,si,1,Ve.screenX,Ve.screenY,Ve.clientX,Ve.clientY,!1,!1,!1,!1,0,null),le.target.dispatchEvent(Ie)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,h&&ze&&!ee&&me.restart(!0),Re&&ie(),p&&ze&&p(V),x&&x(V,ae)}},Oe=function(se){return se.touches&&se.touches.length>1&&(V.isGesturing=!0)&&$(se,V.isDragging)},We=function(){return(V.isGesturing=!1)||C(V)},N=function(se){if(!oe(se)){var ze=Ge(),ae=dt();_e((ze-F)*Be,(ae-gt)*Be,1),F=ze,gt=ae,h&&me.restart(!0)}},fe=function(se){if(!oe(se)){se=Pa(se,u),j&&(we=!0);var ze=(se.deltaMode===1?l:se.deltaMode===2?si.innerHeight:1)*_;_e(se.deltaX*ze,se.deltaY*ze,0),h&&!ee&&me.restart(!0)}},ne=function(se){if(!oe(se)){var ze=se.clientX,ae=se.clientY,Ve=ze-V.x,Ie=ae-V.y;V.x=ze,V.y=ae,Le=!0,h&&me.restart(!0),(Ve||Ie)&&De(Ve,Ie)}},xe=function(se){V.event=se,I(V)},Me=function(se){V.event=se,z(V)},re=function(se){return oe(se)||Pa(se,u)&&ke(V)};me=V._dc=hn.delayedCall(f||.25,te).pause(),V.deltaX=V.deltaY=0,V._vx=_f(0,50,!0),V._vy=_f(0,50,!0),V.scrollX=Ge,V.scrollY=dt,V.isDragging=V.isGesturing=V.isPressed=!1,G_(this),V.enable=function(le){return V.isEnabled||(Dn(P?M:o,"scroll",mf),a.indexOf("scroll")>=0&&Dn(P?M:o,"scroll",N,mt,Xe),a.indexOf("wheel")>=0&&Dn(o,"wheel",fe,mt,Xe),(a.indexOf("touch")>=0&&H_||a.indexOf("pointer")>=0)&&(Dn(o,Ti[0],pe,mt,Xe),Dn(M,Ti[2],ce),Dn(M,Ti[3],ce),G&&Dn(o,"click",ue,!0,!0),ke&&Dn(o,"click",re),$&&Dn(M,"gesturestart",Oe),C&&Dn(M,"gestureend",We),I&&Dn(o,qr+"enter",xe),z&&Dn(o,qr+"leave",Me),Z&&Dn(o,qr+"move",ne)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=Le=Re=!1,V._vx.reset(),V._vy.reset(),F=Ge(),gt=dt(),le&&le.type&&pe(le),he&&he(V)),V},V.disable=function(){V.isEnabled&&($s.filter(function(le){return le!==V&&qa(le.target)}).length||Pn(P?M:o,"scroll",mf),V.isPressed&&(V._vx.reset(),V._vy.reset(),Pn(ee?o:M,Ti[1],ge,!0)),Pn(P?M:o,"scroll",N,Xe),Pn(o,"wheel",fe,Xe),Pn(o,Ti[0],pe,Xe),Pn(M,Ti[2],ce),Pn(M,Ti[3],ce),Pn(o,"click",ue,!0),Pn(o,"click",re),Pn(M,"gesturestart",Oe),Pn(M,"gestureend",We),Pn(o,qr+"enter",xe),Pn(o,qr+"leave",Me),Pn(o,qr+"move",ne),V.isEnabled=V.isPressed=V.isDragging=!1,Ee&&Ee(V))},V.kill=V.revert=function(){V.disable();var le=$s.indexOf(V);le>=0&&$s.splice(le,1),rr===V&&(rr=0)},$s.push(V),ee&&qa(o)&&(rr=V),V.enable(g)},dw(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i})();Gt.version="3.15.0";Gt.create=function(i){return new Gt(i)};Gt.register=Y_;Gt.getAll=function(){return $s.slice()};Gt.getById=function(i){return $s.filter(function(e){return e.vars.id===i})[0]};W_()&&hn.registerPlugin(Gt);var Pe,Hs,it,St,ni,vt,uh,Xl,_o,Ya,Oa,jo,Sn,ac,gf,Nn,op,lp,Vs,$_,tu,K_,In,xf,Z_,J_,Sr,vf,fh,na,hh,$a,Sf,nu,el=1,Mn=Date.now,iu=Mn(),Si=0,Fa=0,cp=function(e,t,n){var r=ei(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},up=function(e,t){return t&&(!ei(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},_w=function i(){return Fa&&requestAnimationFrame(i)},fp=function(){return ac=1},hp=function(){return ac=0},Ni=function(e){return e},Ba=function(e){return Math.round(e*1e5)/1e5||0},Q_=function(){return typeof window<"u"},j_=function(){return Pe||Q_()&&(Pe=window.gsap)&&Pe.registerPlugin&&Pe},ds=function(e){return!!~uh.indexOf(e)},eg=function(e){return(e==="Height"?hh:it["inner"+e])||ni["client"+e]||vt["client"+e]},tg=function(e){return Pr(e,"getBoundingClientRect")||(ds(e)?function(){return Al.width=it.innerWidth,Al.height=hh,Al}:function(){return nr(e)})},gw=function(e,t,n){var r=n.d,s=n.d2,a=n.a;return(a=Pr(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(t?eg(s):e["client"+s])||0}},xw=function(e,t){return!t||~Gi.indexOf(e)?tg(e):function(){return Al}},ki=function(e,t){var n=t.s,r=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+r)&&(a=Pr(e,n))?a()-tg(e)()[s]:ds(e)?(ni[n]||vt[n])-eg(r):e[n]-e["offset"+r])},tl=function(e,t){for(var n=0;n<Vs.length;n+=3)(!t||~t.indexOf(Vs[n+1]))&&e(Vs[n],Vs[n+1],Vs[n+2])},ei=function(e){return typeof e=="string"},En=function(e){return typeof e=="function"},za=function(e){return typeof e=="number"},Yr=function(e){return typeof e=="object"},Da=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Fs=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},Bs=Math.abs,ng="left",ig="top",dh="right",ph="bottom",rs="width",ss="height",Ka="Right",Za="Left",Ja="Top",Qa="Bottom",Kt="padding",_i="margin",fa="Width",mh="Height",Qt="px",gi=function(e){return it.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},vw=function(e){var t=gi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},dp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},nr=function(e,t){var n=t&&gi(e)[gf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},ql=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},rg=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},Sw=function(e){return function(t){return Pe.utils.snap(rg(e),t)}},_h=function(e){var t=Pe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return t(r);if(s>0){for(r-=a,o=0;o<n.length;o++)if(n[o]>=r)return n[o];return n[o-1]}else for(o=n.length,r+=a;o--;)if(n[o]<=r)return n[o];return n[0]}:function(r,s,a){a===void 0&&(a=.001);var o=t(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:t(s<0?r-e:r+e)}},Mw=function(e){return function(t,n){return _h(rg(e))(t,n.direction)}},nl=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},on=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},an=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},il=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},pp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},rl={toggleActions:"play",anticipatePin:0},Yl={top:0,left:0,center:.5,bottom:1,right:1},El=function(e,t){if(ei(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Yl?Yl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},sl=function(e,t,n,r,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=St.createElement("div"),g=ds(n)||Pr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?vt:n.tagName==="IFRAME"?n.contentDocument.body:n,S=e.indexOf("start")!==-1,T=S?c:u,x="border-color:"+T+";font-size:"+h+";color:"+T+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(x+=(r===jt?dh:ph)+":"+(a+parseFloat(f))+"px;"),o&&(x+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=x,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+r.op.d2],bl(_,0,r,S),_},bl=function(e,t,n,r){var s={display:"block"},a=n[r?"os2":"p2"],o=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+a+fa]=1,s["border"+o+fa]=0,s[n.p]=t+"px",Pe.set(e,s)},tt=[],Mf={},go,mp=function(){return Mn()-Si>34&&(go||(go=requestAnimationFrame(or)))},zs=function(){(!In||!In.isPressed||In.startX>vt.clientWidth)&&(rt.cache++,In?go||(go=requestAnimationFrame(or)):or(),Si||ms("scrollStart"),Si=Mn())},ru=function(){J_=it.innerWidth,Z_=it.innerHeight},ka=function(e){rt.cache++,(e===!0||!Sn&&!K_&&!St.fullscreenElement&&!St.webkitFullscreenElement&&(!xf||J_!==it.innerWidth||Math.abs(it.innerHeight-Z_)>it.innerHeight*.25))&&Xl.restart(!0)},ps={},yw=[],sg=function i(){return an(st,"scrollEnd",i)||Qr(!0)},ms=function(e){return ps[e]&&ps[e].map(function(t){return t()})||yw},jn=[],ag=function(e){for(var t=0;t<jn.length;t+=5)(!e||jn[t+4]&&jn[t+4].query===e)&&(jn[t].style.cssText=jn[t+1],jn[t].getBBox&&jn[t].setAttribute("transform",jn[t+2]||""),jn[t+3].uncache=1)},og=function(){return rt.forEach(function(e){return En(e)&&++e.cacheID&&(e.rec=e())})},gh=function(e,t){var n;for(Nn=0;Nn<tt.length;Nn++)n=tt[Nn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));$a=!0,t&&ag(t),t||ms("revert")},lg=function(e,t){rt.cache++,(t||!Un)&&rt.forEach(function(n){return En(n)&&n.cacheID++&&(n.rec=0)}),ei(e)&&(it.history.scrollRestoration=fh=e)},Un,as=0,_p,Ew=function(){if(_p!==as){var e=_p=as;requestAnimationFrame(function(){return e===as&&Qr(!0)})}},cg=function(){vt.appendChild(na),hh=!In&&na.offsetHeight||it.innerHeight,vt.removeChild(na)},gp=function(e){return _o(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Qr=function(e,t){if(ni=St.documentElement,vt=St.body,uh=[it,St,ni,vt],Si&&!e&&!$a){on(st,"scrollEnd",sg);return}cg(),Un=st.isRefreshing=!0,$a||og();var n=ms("refreshInit");$_&&st.sort(),t||gh(),rt.forEach(function(r){En(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),tt.slice(0).forEach(function(r){return r.refresh()}),$a=!1,tt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),Sf=1,gp(!0),tt.forEach(function(r){var s=ki(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),gp(!1),Sf=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),rt.forEach(function(r){En(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),lg(fh,1),Xl.pause(),as++,Un=2,or(2),tt.forEach(function(r){return En(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Un=st.isRefreshing=!1,ms("refresh")},yf=0,Tl=1,ja,or=function(e){if(e===2||!Un&&!$a){st.isUpdating=!0,ja&&ja.update(0);var t=tt.length,n=Mn(),r=n-iu>=50,s=t&&tt[0].scroll();if(Tl=yf>s?-1:1,Un||(yf=s),r&&(Si&&!ac&&n-Si>200&&(Si=0,ms("scrollEnd")),Oa=iu,iu=n),Tl<0){for(Nn=t;Nn-- >0;)tt[Nn]&&tt[Nn].update(0,r);Tl=1}else for(Nn=0;Nn<t;Nn++)tt[Nn]&&tt[Nn].update(0,r);st.isUpdating=!1}go=0},Ef=[ng,ig,ph,dh,_i+Qa,_i+Ka,_i+Ja,_i+Za,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],wl=Ef.concat([rs,ss,"boxSizing","max"+fa,"max"+mh,"position",_i,Kt,Kt+Ja,Kt+Ka,Kt+Qa,Kt+Za]),bw=function(e,t,n){ia(n);var r=e._gsap;if(r.spacerIsNative)ia(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},su=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=Ef.length,a=t.style,o=e.style,l;s--;)l=Ef[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[ph]=o[dh]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[rs]=ql(e,On)+Qt,a[ss]=ql(e,jt)+Qt,a[Kt]=o[_i]=o[ig]=o[ng]="0",ia(r),o[rs]=o["max"+fa]=n[rs],o[ss]=o["max"+mh]=n[ss],o[Kt]=n[Kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Tw=/([A-Z])/g,ia=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,a;for((e.t._gsap||Pe.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],s=e[r],a?t[s]=a:t[s]&&t.removeProperty(s.replace(Tw,"-$1").toLowerCase())}},al=function(e){for(var t=wl.length,n=e.style,r=[],s=0;s<t;s++)r.push(wl[s],n[wl[s]]);return r.t=e,r},ww=function(e,t,n){for(var r=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},Al={left:0,top:0},xp=function(e,t,n,r,s,a,o,l,c,u,h,f,d,_){En(e)&&(e=e(l)),ei(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?El("0"+e.substr(3),n):0));var g=d?d.time():0,m,p,S;if(d&&d.seek(0),isNaN(e)||(e=+e),za(e))d&&(e=Pe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&bl(o,n,r,!0);else{En(t)&&(t=t(l));var T=(e||"0").split(" "),x,y,E,b;S=zn(t,l)||vt,x=nr(S)||{},(!x||!x.left&&!x.top)&&gi(S).display==="none"&&(b=S.style.display,S.style.display="block",x=nr(S),b?S.style.display=b:S.style.removeProperty("display")),y=El(T[0],x[r.d]),E=El(T[1]||"0",n),e=x[r.p]-c[r.p]-u+y+s-E,o&&bl(o,E,r,n-E<20||o._isStart&&E>20),n-=n-E}if(_&&(l[_]=e||-.001,e<0&&(e=0)),a){var v=e+n,w=a._isStart;m="scroll"+r.d2,bl(a,v,r,w&&v>20||!w&&(h?Math.max(vt[m],ni[m]):a.parentNode[m])<=v+1),h&&(c=nr(o),h&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+Qt))}return d&&S&&(m=nr(S),d.seek(f),p=nr(S),d._caScrollDist=m[r.p]-p[r.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},Aw=/(webkit|moz|length|cssText|inset)/i,vp=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,a,o;if(t===vt){e._stOrig=s.cssText,o=gi(e);for(a in o)!+a&&!Aw.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=r}else s.cssText=e._stOrig;Pe.core.getCache(e).uncache=1,t.appendChild(e)}},ug=function(e,t,n){var r=t,s=r;return function(a){var o=Math.round(e());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=r,r=Math.round(a),r}},ol=function(e,t,n){var r={};r[t.p]="+="+n,Pe.set(e,r)},Sp=function(e,t){var n=Or(e,t),r="_scroll"+t.p2,s=function a(o,l,c,u,h){var f=a.tween,d=l.onComplete,_={};c=c||n();var g=ug(n,c,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,f&&f.kill(),l[r]=o,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){rt.cache++,a.tween&&or()},l.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=Pe.to(e,l),f};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},on(e,"wheel",n.wheelHandler),st.isTouch&&on(e,"touchmove",n.wheelHandler),s},st=(function(){function i(t,n){Hs||i.register(Pe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),vf(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Fa){this.update=this.refresh=this.kill=Ni;return}n=dp(ei(n)||za(n)||n.nodeType?{trigger:n}:n,rl);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,S=s.onSnapComplete,T=s.once,x=s.snap,y=s.pinReparent,E=s.pinSpacer,b=s.containerAnimation,v=s.fastScrollEnd,w=s.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?On:jt,L=!h&&h!==0,D=zn(n.scroller||it),H=Pe.core.getCache(D),I=ds(D),z=("pinType"in n?n.pinType:Pr(D,"pinType")||I&&"fixed")==="fixed",Z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],B=L&&n.toggleActions.split(" "),ee="markers"in n?n.markers:rl.markers,$=I?0:parseFloat(gi(D)["border"+R.p2+fa])||0,C=this,j=n.onRefreshInit&&function(){return n.onRefreshInit(C)},he=gw(D,I,R),Ee=xw(D,I),ke=0,Be=0,Xe=0,G=Or(D,R),J,de,He,me,Re,Le,we,qe,Je,V,ve,Ke,mt,Ge,dt,F,gt,Ye,P,M,k,X,Q,ue,oe,te,ie,_e,De,ge,pe,ce,Oe,We,N,fe,ne,xe,Me;if(C._startClamp=C._endClamp=!1,C._dir=R,m*=45,C.scroller=D,C.scroll=b?b.time.bind(b):G,me=G(),C.vars=n,r=r||n.animation,"refreshPriority"in n&&($_=1,n.refreshPriority===-9999&&(ja=C)),H.tweenScroll=H.tweenScroll||{top:Sp(D,jt),left:Sp(D,On)},C.tweenTo=J=H.tweenScroll[R.p],C.scrubDuration=function(ae){Oe=za(ae)&&ae,Oe?ce?ce.duration(ae):ce=Pe.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Oe,paused:!0,onComplete:function(){return p&&p(C)}}):(ce&&ce.progress(1).kill(),ce=0)},r&&(r.vars.lazy=!1,r._initted&&!C.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),C.animation=r.pause(),r.scrollTrigger=C,C.scrubDuration(h),ge=0,l||(l=r.vars.id)),x&&((!Yr(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in vt.style&&Pe.set(I?[vt,ni]:D,{scrollBehavior:"auto"}),rt.forEach(function(ae){return En(ae)&&ae.target===(I?St.scrollingElement||ni:D)&&(ae.smooth=!1)}),He=En(x.snapTo)?x.snapTo:x.snapTo==="labels"?Sw(r):x.snapTo==="labelsDirectional"?Mw(r):x.directional!==!1?function(ae,Ve){return _h(x.snapTo)(ae,Mn()-Be<500?0:Ve.direction)}:Pe.utils.snap(x.snapTo),We=x.duration||{min:.1,max:2},We=Yr(We)?Ya(We.min,We.max):Ya(We,We),N=Pe.delayedCall(x.delay||Oe/2||.1,function(){var ae=G(),Ve=Mn()-Be<500,Ie=J.tween;if((Ve||Math.abs(C.getVelocity())<10)&&!Ie&&!ac&&ke!==ae){var Ze=(ae-Le)/Ge,Xt=r&&!L?r.totalProgress():Ze,nt=Ve?0:(Xt-pe)/(Mn()-Oa)*1e3||0,Ct=Pe.utils.clamp(-Ze,1-Ze,Bs(nt/2)*nt/.185),nn=Ze+(x.inertia===!1?0:Ct),Pt,Et,lt=x,An=lt.onStart,At=lt.onInterrupt,mn=lt.onComplete;if(Pt=He(nn,C),za(Pt)||(Pt=nn),Et=Math.max(0,Math.round(Le+Pt*Ge)),ae<=we&&ae>=Le&&Et!==ae){if(Ie&&!Ie._initted&&Ie.data<=Bs(Et-ae))return;x.inertia===!1&&(Ct=Pt-Ze),J(Et,{duration:We(Bs(Math.max(Bs(nn-Xt),Bs(Pt-Xt))*.185/nt/.05||0)),ease:x.ease||"power3",data:Bs(Et-ae),onInterrupt:function(){return N.restart(!0)&&At&&Fs(C,At)},onComplete:function(){C.update(),ke=G(),r&&!L&&(ce?ce.resetTo("totalProgress",Pt,r._tTime/r._tDur):r.progress(Pt)),ge=pe=r&&!L?r.totalProgress():C.progress,S&&S(C),mn&&Fs(C,mn)}},ae,Ct*Ge,Et-ae-Ct*Ge),An&&Fs(C,An,J.tween)}}else C.isActive&&ke!==ae&&N.restart(!0)}).pause()),l&&(Mf[l]=C),f=C.trigger=zn(f||d!==!0&&d),Me=f&&f._gsap&&f._gsap.stRevert,Me&&(Me=Me(C)),d=d===!0?f:zn(d),ei(o)&&(o={targets:f,className:o}),d&&(_===!1||_===_i||(_=!_&&d.parentNode&&d.parentNode.style&&gi(d.parentNode).display==="flex"?!1:Kt),C.pin=d,de=Pe.core.getCache(d),de.spacer?dt=de.pinState:(E&&(E=zn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),de.spacerIsNative=!!E,E&&(de.spacerState=al(E))),de.spacer=Ye=E||St.createElement("div"),Ye.classList.add("pin-spacer"),l&&Ye.classList.add("pin-spacer-"+l),de.pinState=dt=al(d)),n.force3D!==!1&&Pe.set(d,{force3D:!0}),C.spacer=Ye=de.spacer,De=gi(d),ue=De[_+R.os2],M=Pe.getProperty(d),k=Pe.quickSetter(d,R.a,Qt),su(d,Ye,De),gt=al(d)),ee){Ke=Yr(ee)?dp(ee,pp):pp,V=sl("scroller-start",l,D,R,Ke,0),ve=sl("scroller-end",l,D,R,Ke,0,V),P=V["offset"+R.op.d2];var re=zn(Pr(D,"content")||D);qe=this.markerStart=sl("start",l,re,R,Ke,P,0,b),Je=this.markerEnd=sl("end",l,re,R,Ke,P,0,b),b&&(xe=Pe.quickSetter([qe,Je],R.a,Qt)),!z&&!(Gi.length&&Pr(D,"fixedMarkers")===!0)&&(vw(I?vt:D),Pe.set([V,ve],{force3D:!0}),te=Pe.quickSetter(V,R.a,Qt),_e=Pe.quickSetter(ve,R.a,Qt))}if(b){var le=b.vars.onUpdate,se=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){C.update(0,0,1),le&&le.apply(b,se||[])})}if(C.previous=function(){return tt[tt.indexOf(C)-1]},C.next=function(){return tt[tt.indexOf(C)+1]},C.revert=function(ae,Ve){if(!Ve)return C.kill(!0);var Ie=ae!==!1||!C.enabled,Ze=Sn;Ie!==C.isReverted&&(Ie&&(fe=Math.max(G(),C.scroll.rec||0),Xe=C.progress,ne=r&&r.progress()),qe&&[qe,Je,V,ve].forEach(function(Xt){return Xt.style.display=Ie?"none":"block"}),Ie&&(Sn=C,C.update(Ie)),d&&(!y||!C.isActive)&&(Ie?bw(d,Ye,dt):su(d,Ye,gi(d),oe)),Ie||C.update(Ie),Sn=Ze,C.isReverted=Ie)},C.refresh=function(ae,Ve,Ie,Ze){if(!((Sn||!C.enabled)&&!Ve)){if(d&&ae&&Si){on(i,"scrollEnd",sg);return}!Un&&j&&j(C),Sn=C,J.tween&&!Ie&&(J.tween.kill(),J.tween=0),ce&&ce.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Se){return Se.vars.immediateRender&&Se.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Xt=he(),nt=Ee(),Ct=b?b.duration():ki(D,R),nn=Ge<=.01||!Ge,Pt=0,Et=Ze||0,lt=Yr(Ie)?Ie.end:n.end,An=n.endTrigger||f,At=Yr(Ie)?Ie.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),mn=C.pinnedContainer=n.pinnedContainer&&zn(n.pinnedContainer,C),Rn=f&&Math.max(0,tt.indexOf(C))||0,qt=Rn,Bt,Jt,Ci,xs,rn,kt,fi,vs,A,U,K,W,q;for(ee&&Yr(Ie)&&(W=Pe.getProperty(V,R.p),q=Pe.getProperty(ve,R.p));qt-- >0;)kt=tt[qt],kt.end||kt.refresh(0,1)||(Sn=C),fi=kt.pin,fi&&(fi===f||fi===d||fi===mn)&&!kt.isReverted&&(U||(U=[]),U.unshift(kt),kt.revert(!0,!0)),kt!==tt[qt]&&(Rn--,qt--);for(En(At)&&(At=At(C)),At=cp(At,"start",C),Le=xp(At,f,Xt,R,G(),qe,V,C,nt,$,z,Ct,b,C._startClamp&&"_startClamp")||(d?-.001:0),En(lt)&&(lt=lt(C)),ei(lt)&&!lt.indexOf("+=")&&(~lt.indexOf(" ")?lt=(ei(At)?At.split(" ")[0]:"")+lt:(Pt=El(lt.substr(2),Xt),lt=ei(At)?At:(b?Pe.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Le):Le)+Pt,An=f)),lt=cp(lt,"end",C),we=Math.max(Le,xp(lt||(An?"100% 0":Ct),An,Xt,R,G()+Pt,Je,ve,C,nt,$,z,Ct,b,C._endClamp&&"_endClamp"))||-.001,Pt=0,qt=Rn;qt--;)kt=tt[qt]||{},fi=kt.pin,fi&&kt.start-kt._pinPush<=Le&&!b&&kt.end>0&&(Bt=kt.end-(C._startClamp?Math.max(0,kt.start):kt.start),(fi===f&&kt.start-kt._pinPush<Le||fi===mn)&&isNaN(At)&&(Pt+=Bt*(1-kt.progress)),fi===d&&(Et+=Bt));if(Le+=Pt,we+=Pt,C._startClamp&&(C._startClamp+=Pt),C._endClamp&&!Un&&(C._endClamp=we||-.001,we=Math.min(we,ki(D,R))),Ge=we-Le||(Le-=.01)&&.001,nn&&(Xe=Pe.utils.clamp(0,1,Pe.utils.normalize(Le,we,fe))),C._pinPush=Et,qe&&Pt&&(Bt={},Bt[R.a]="+="+Pt,mn&&(Bt[R.p]="-="+G()),Pe.set([qe,Je],Bt)),d&&!(Sf&&C.end>=ki(D,R)))Bt=gi(d),xs=R===jt,Ci=G(),X=parseFloat(M(R.a))+Et,!Ct&&we>1&&(K=(I?St.scrollingElement||ni:D).style,K={style:K,value:K["overflow"+R.a.toUpperCase()]},I&&gi(vt)["overflow"+R.a.toUpperCase()]!=="scroll"&&(K.style["overflow"+R.a.toUpperCase()]="scroll")),su(d,Ye,Bt),gt=al(d),Jt=nr(d,!0),vs=z&&Or(D,xs?On:jt)(),_?(oe=[_+R.os2,Ge+Et+Qt],oe.t=Ye,qt=_===Kt?ql(d,R)+Ge+Et:0,qt&&(oe.push(R.d,qt+Qt),Ye.style.flexBasis!=="auto"&&(Ye.style.flexBasis=qt+Qt)),ia(oe),mn&&tt.forEach(function(Se){Se.pin===mn&&Se.vars.pinSpacing!==!1&&(Se._subPinOffset=!0)}),z&&G(fe)):(qt=ql(d,R),qt&&Ye.style.flexBasis!=="auto"&&(Ye.style.flexBasis=qt+Qt)),z&&(rn={top:Jt.top+(xs?Ci-Le:vs)+Qt,left:Jt.left+(xs?vs:Ci-Le)+Qt,boxSizing:"border-box",position:"fixed"},rn[rs]=rn["max"+fa]=Math.ceil(Jt.width)+Qt,rn[ss]=rn["max"+mh]=Math.ceil(Jt.height)+Qt,rn[_i]=rn[_i+Ja]=rn[_i+Ka]=rn[_i+Qa]=rn[_i+Za]="0",rn[Kt]=Bt[Kt],rn[Kt+Ja]=Bt[Kt+Ja],rn[Kt+Ka]=Bt[Kt+Ka],rn[Kt+Qa]=Bt[Kt+Qa],rn[Kt+Za]=Bt[Kt+Za],F=ww(dt,rn,y),Un&&G(0)),r?(A=r._initted,tu(1),r.render(r.duration(),!0,!0),Q=M(R.a)-X+Ge+Et,ie=Math.abs(Ge-Q)>1,z&&ie&&F.splice(F.length-2,2),r.render(0,!0,!0),A||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),tu(0)):Q=Ge,K&&(K.value?K.style["overflow"+R.a.toUpperCase()]=K.value:K.style.removeProperty("overflow-"+R.a));else if(f&&G()&&!b)for(Jt=f.parentNode;Jt&&Jt!==vt;)Jt._pinOffset&&(Le-=Jt._pinOffset,we-=Jt._pinOffset),Jt=Jt.parentNode;U&&U.forEach(function(Se){return Se.revert(!1,!0)}),C.start=Le,C.end=we,me=Re=Un?fe:G(),!b&&!Un&&(me<fe&&G(fe),C.scroll.rec=0),C.revert(!1,!0),Be=Mn(),N&&(ke=-1,N.restart(!0)),Sn=0,r&&L&&(r._initted||ne)&&r.progress()!==ne&&r.progress(ne||0,!0).render(r.time(),!0,!0),(nn||Xe!==C.progress||b||g||r&&!r._initted)&&(r&&!L&&(r._initted||Xe||r.vars.immediateRender!==!1)&&r.totalProgress(b&&Le<-.001&&!Xe?Pe.utils.normalize(Le,we,0):Xe,!0),C.progress=nn||(me-Le)/Ge===Xe?0:Xe),d&&_&&(Ye._pinOffset=Math.round(C.progress*Q)),ce&&ce.invalidate(),isNaN(W)||(W-=Pe.getProperty(V,R.p),q-=Pe.getProperty(ve,R.p),ol(V,R,W),ol(qe,R,W-(Ze||0)),ol(ve,R,q),ol(Je,R,q-(Ze||0))),nn&&!Un&&C.update(),u&&!Un&&!mt&&(mt=!0,u(C),mt=!1)}},C.getVelocity=function(){return(G()-Re)/(Mn()-Oa)*1e3||0},C.endAnimation=function(){Da(C.callbackAnimation),r&&(ce?ce.progress(1):r.paused()?L||Da(r,C.direction<0,1):Da(r,r.reversed()))},C.labelToScroll=function(ae){return r&&r.labels&&(Le||C.refresh()||Le)+r.labels[ae]/r.duration()*Ge||0},C.getTrailing=function(ae){var Ve=tt.indexOf(C),Ie=C.direction>0?tt.slice(0,Ve).reverse():tt.slice(Ve+1);return(ei(ae)?Ie.filter(function(Ze){return Ze.vars.preventOverlaps===ae}):Ie).filter(function(Ze){return C.direction>0?Ze.end<=Le:Ze.start>=we})},C.update=function(ae,Ve,Ie){if(!(b&&!Ie&&!ae)){var Ze=Un===!0?fe:C.scroll(),Xt=ae?0:(Ze-Le)/Ge,nt=Xt<0?0:Xt>1?1:Xt||0,Ct=C.progress,nn,Pt,Et,lt,An,At,mn,Rn;if(Ve&&(Re=me,me=b?G():Ze,x&&(pe=ge,ge=r&&!L?r.totalProgress():nt)),m&&d&&!Sn&&!el&&Si&&(!nt&&Le<Ze+(Ze-Re)/(Mn()-Oa)*m?nt=1e-4:nt===1&&we>Ze+(Ze-Re)/(Mn()-Oa)*m&&(nt=.9999)),nt!==Ct&&C.enabled){if(nn=C.isActive=!!nt&&nt<1,Pt=!!Ct&&Ct<1,At=nn!==Pt,An=At||!!nt!=!!Ct,C.direction=nt>Ct?1:-1,C.progress=nt,An&&!Sn&&(Et=nt&&!Ct?0:nt===1?1:Ct===1?2:3,L&&(lt=!At&&B[Et+1]!=="none"&&B[Et+1]||B[Et],Rn=r&&(lt==="complete"||lt==="reset"||lt in r))),w&&(At||Rn)&&(Rn||h||!r)&&(En(w)?w(C):C.getTrailing(w).forEach(function(Ci){return Ci.endAnimation()})),L||(ce&&!Sn&&!el?(ce._dp._time-ce._start!==ce._time&&ce.render(ce._dp._time-ce._start),ce.resetTo?ce.resetTo("totalProgress",nt,r._tTime/r._tDur):(ce.vars.totalProgress=nt,ce.invalidate().restart())):r&&r.totalProgress(nt,!!(Sn&&(Be||ae)))),d){if(ae&&_&&(Ye.style[_+R.os2]=ue),!z)k(Ba(X+Q*nt));else if(An){if(mn=!ae&&nt>Ct&&we+1>Ze&&Ze+1>=ki(D,R),y)if(!ae&&(nn||mn)){var qt=nr(d,!0),Bt=Ze-Le;vp(d,vt,qt.top+(R===jt?Bt:0)+Qt,qt.left+(R===jt?0:Bt)+Qt)}else vp(d,Ye);ia(nn||mn?F:gt),ie&&nt<1&&nn||k(X+(nt===1&&!mn?Q:0))}}x&&!J.tween&&!Sn&&!el&&N.restart(!0),o&&(At||T&&nt&&(nt<1||!nu))&&_o(o.targets).forEach(function(Ci){return Ci.classList[nn||T?"add":"remove"](o.className)}),a&&!L&&!ae&&a(C),An&&!Sn?(L&&(Rn&&(lt==="complete"?r.pause().totalProgress(1):lt==="reset"?r.restart(!0).pause():lt==="restart"?r.restart(!0):r[lt]()),a&&a(C)),(At||!nu)&&(c&&At&&Fs(C,c),Z[Et]&&Fs(C,Z[Et]),T&&(nt===1?C.kill(!1,1):Z[Et]=0),At||(Et=nt===1?1:3,Z[Et]&&Fs(C,Z[Et]))),v&&!nn&&Math.abs(C.getVelocity())>(za(v)?v:2500)&&(Da(C.callbackAnimation),ce?ce.progress(1):Da(r,lt==="reverse"?1:!nt,1))):L&&a&&!Sn&&a(C)}if(_e){var Jt=b?Ze/b.duration()*(b._caScrollDist||0):Ze;te(Jt+(V._isFlipped?1:0)),_e(Jt)}xe&&xe(-Ze/b.duration()*(b._caScrollDist||0))}},C.enable=function(ae,Ve){C.enabled||(C.enabled=!0,on(D,"resize",ka),I||on(D,"scroll",zs),j&&on(i,"refreshInit",j),ae!==!1&&(C.progress=Xe=0,me=Re=ke=G()),Ve!==!1&&C.refresh())},C.getTween=function(ae){return ae&&J?J.tween:ce},C.setPositions=function(ae,Ve,Ie,Ze){if(b){var Xt=b.scrollTrigger,nt=b.duration(),Ct=Xt.end-Xt.start;ae=Xt.start+Ct*ae/nt,Ve=Xt.start+Ct*Ve/nt}C.refresh(!1,!1,{start:up(ae,Ie&&!!C._startClamp),end:up(Ve,Ie&&!!C._endClamp)},Ze),C.update()},C.adjustPinSpacing=function(ae){if(oe&&ae){var Ve=oe.indexOf(R.d)+1;oe[Ve]=parseFloat(oe[Ve])+ae+Qt,oe[1]=parseFloat(oe[1])+ae+Qt,ia(oe)}},C.disable=function(ae,Ve){if(ae!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,Ve||ce&&ce.pause(),fe=0,de&&(de.uncache=1),j&&an(i,"refreshInit",j),N&&(N.pause(),J.tween&&J.tween.kill()&&(J.tween=0)),!I)){for(var Ie=tt.length;Ie--;)if(tt[Ie].scroller===D&&tt[Ie]!==C)return;an(D,"resize",ka),I||an(D,"scroll",zs)}},C.kill=function(ae,Ve){C.disable(ae,Ve),ce&&!Ve&&ce.kill(),l&&delete Mf[l];var Ie=tt.indexOf(C);Ie>=0&&tt.splice(Ie,1),Ie===Nn&&Tl>0&&Nn--,Ie=0,tt.forEach(function(Ze){return Ze.scroller===C.scroller&&(Ie=1)}),Ie||Un||(C.scroll.rec=0),r&&(r.scrollTrigger=null,ae&&r.revert({kill:!1}),Ve||r.kill()),qe&&[qe,Je,V,ve].forEach(function(Ze){return Ze.parentNode&&Ze.parentNode.removeChild(Ze)}),ja===C&&(ja=0),d&&(de&&(de.uncache=1),Ie=0,tt.forEach(function(Ze){return Ze.pin===d&&Ie++}),Ie||(de.spacer=0)),n.onKill&&n.onKill(C)},tt.push(C),C.enable(!1,!1),Me&&Me(C),r&&r.add&&!Ge){var ze=C.update;C.update=function(){C.update=ze,rt.cache++,Le||we||C.refresh()},Pe.delayedCall(.01,C.update),Ge=.01,Le=we=0}else C.refresh();d&&Ew()},i.register=function(n){return Hs||(Pe=n||j_(),Q_()&&window.document&&i.enable(),Hs=Fa),Hs},i.defaults=function(n){if(n)for(var r in n)rl[r]=n[r];return rl},i.disable=function(n,r){Fa=0,tt.forEach(function(a){return a[r?"kill":"disable"](n)}),an(it,"wheel",zs),an(St,"scroll",zs),clearInterval(jo),an(St,"touchcancel",Ni),an(vt,"touchstart",Ni),nl(an,St,"pointerdown,touchstart,mousedown",fp),nl(an,St,"pointerup,touchend,mouseup",hp),Xl.kill(),tl(an);for(var s=0;s<rt.length;s+=3)il(an,rt[s],rt[s+1]),il(an,rt[s],rt[s+2])},i.enable=function(){if(it=window,St=document,ni=St.documentElement,vt=St.body,Pe){if(_o=Pe.utils.toArray,Ya=Pe.utils.clamp,vf=Pe.core.context||Ni,tu=Pe.core.suppressOverwrites||Ni,fh=it.history.scrollRestoration||"auto",yf=it.pageYOffset||0,Pe.core.globals("ScrollTrigger",i),vt){Fa=1,na=document.createElement("div"),na.style.height="100vh",na.style.position="absolute",cg(),_w(),Gt.register(Pe),i.isTouch=Gt.isTouch,Sr=Gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),xf=Gt.isTouch===1,on(it,"wheel",zs),uh=[it,St,ni,vt],Pe.matchMedia?(i.matchMedia=function(u){var h=Pe.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Pe.addEventListener("matchMediaInit",function(){og(),gh()}),Pe.addEventListener("matchMediaRevert",function(){return ag()}),Pe.addEventListener("matchMedia",function(){Qr(0,1),ms("matchMedia")}),Pe.matchMedia().add("(orientation: portrait)",function(){return ru(),ru})):console.warn("Requires GSAP 3.11.0 or later"),ru(),on(St,"scroll",zs);var n=vt.hasAttribute("style"),r=vt.style,s=r.borderTopStyle,a=Pe.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=nr(vt),jt.m=Math.round(o.top+jt.sc())||0,On.m=Math.round(o.left+On.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(vt.setAttribute("style",""),vt.removeAttribute("style")),jo=setInterval(mp,250),Pe.delayedCall(.5,function(){return el=0}),on(St,"touchcancel",Ni),on(vt,"touchstart",Ni),nl(on,St,"pointerdown,touchstart,mousedown",fp),nl(on,St,"pointerup,touchend,mouseup",hp),gf=Pe.utils.checkPrefix("transform"),wl.push(gf),Hs=Mn(),Xl=Pe.delayedCall(.2,Qr).pause(),Vs=[St,"visibilitychange",function(){var u=it.innerWidth,h=it.innerHeight;St.hidden?(op=u,lp=h):(op!==u||lp!==h)&&ka()},St,"DOMContentLoaded",Qr,it,"load",Qr,it,"resize",ka],tl(on),tt.forEach(function(u){return u.enable(0,1)}),l=0;l<rt.length;l+=3)il(an,rt[l],rt[l+1]),il(an,rt[l],rt[l+2])}else if(St){var c=function u(){i.enable(),St.removeEventListener("DOMContentLoaded",u)};St.addEventListener("DOMContentLoaded",c)}}},i.config=function(n){"limitCallbacks"in n&&(nu=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(jo)||(jo=r)&&setInterval(mp,r),"ignoreMobileResize"in n&&(xf=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(tl(an)||tl(on,n.autoRefreshEvents||"none"),K_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=zn(n),a=rt.indexOf(s),o=ds(s);~a&&rt.splice(a,o?6:2),r&&(o?Gi.unshift(it,r,vt,r,ni,r):Gi.unshift(s,r))},i.clearMatchMedia=function(n){tt.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var a=(ei(n)?zn(n):n).getBoundingClientRect(),o=a[s?rs:ss]*r||0;return s?a.right-o>0&&a.left+o<it.innerWidth:a.bottom-o>0&&a.top+o<it.innerHeight},i.positionInViewport=function(n,r,s){ei(n)&&(n=zn(n));var a=n.getBoundingClientRect(),o=a[s?rs:ss],l=r==null?o/2:r in Yl?Yl[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/it.innerWidth:(a.top+l)/it.innerHeight},i.killAll=function(n){if(tt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=ps.killAll||[];ps={},r.forEach(function(s){return s()})}},i})();st.version="3.15.0";st.saveStyles=function(i){return i?_o(i).forEach(function(e){if(e&&e.style){var t=jn.indexOf(e);t>=0&&jn.splice(t,5),jn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Pe.core.getCache(e),vf())}}):jn};st.revert=function(i,e){return gh(!i,e)};st.create=function(i,e){return new st(i,e)};st.refresh=function(i){return i?ka(!0):(Hs||st.register())&&Qr(!0)};st.update=function(i){return++rt.cache&&or(i===!0?2:0)};st.clearScrollMemory=lg;st.maxScroll=function(i,e){return ki(i,e?On:jt)};st.getScrollFunc=function(i,e){return Or(zn(i),e?On:jt)};st.getById=function(i){return Mf[i]};st.getAll=function(){return tt.filter(function(i){return i.vars.id!=="ScrollSmoother"})};st.isScrolling=function(){return!!Si};st.snapDirectional=_h;st.addEventListener=function(i,e){var t=ps[i]||(ps[i]=[]);~t.indexOf(e)||t.push(e)};st.removeEventListener=function(i,e){var t=ps[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};st.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var h=[],f=[],d=Pe.delayedCall(r,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&En(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return En(s)&&(s=s(),on(st,"refresh",function(){return s=e.batchMax()})),_o(i).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(st.create(c))}),t};var Mp=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},au=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Gt.isTouch?" pinch-zoom":""):"none",e===ni&&i(vt,t)},ll={auto:1,scroll:1},Rw=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Pe.core.getCache(s),o=Mn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==vt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ll[(l=gi(s)).overflowY]||ll[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!ds(s)&&(ll[(l=gi(s)).overflowY]||ll[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},fg=function(e,t,n,r){return Gt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&Rw,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&on(St,Gt.eventTypes[0],Ep,!1,!0)},onDisable:function(){return an(St,Gt.eventTypes[0],Ep,!0)}})},Cw=/(input|label|select|textarea)/i,yp,Ep=function(e){var t=Cw.test(e.target.tagName);(t||yp)&&(e._gsapAllow=!0,yp=t)},Pw=function(e){Yr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=zn(e.target)||ni,u=Pe.core.globals().ScrollSmoother,h=u&&u.get(),f=Sr&&(e.content&&zn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Or(c,jt),_=Or(c,On),g=1,m=(Gt.isTouch&&it.visualViewport?it.visualViewport.scale*it.visualViewport.width:it.outerWidth)/it.innerWidth,p=0,S=En(r)?function(){return r(o)}:function(){return r||2.8},T,x,y=fg(c,e.type,!0,s),E=function(){return x=!1},b=Ni,v=Ni,w=function(){l=ki(c,jt),v=Ya(Sr?1:0,l),n&&(b=Ya(0,ki(c,On))),T=as},R=function(){f._gsap.y=Ba(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(x){requestAnimationFrame(E);var ee=Ba(o.deltaY/2),$=v(d.v-ee);if(f&&$!==d.v+d.offset){d.offset=$-d.v;var C=Ba((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",f._gsap.y=C+"px",d.cacheID=rt.cache,or()}return!0}d.offset&&R(),x=!0},D,H,I,z,Z=function(){w(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return f&&Pe.set(f,{y:"+=0"}),e.ignoreCheck=function(B){return Sr&&B.type==="touchmove"&&L()||g>1.05&&B.type!=="touchstart"||o.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){x=!1;var B=g;g=Ba((it.visualViewport&&it.visualViewport.scale||1)/m),D.pause(),B!==g&&au(c,g>1.01?!0:n?!1:"x"),H=_(),I=d(),w(),T=as},e.onRelease=e.onGestureStart=function(B,ee){if(d.offset&&R(),!ee)z.restart(!0);else{rt.cache++;var $=S(),C,j;n&&(C=_(),j=C+$*.05*-B.velocityX/.227,$*=Mp(_,C,j,ki(c,On)),D.vars.scrollX=b(j)),C=d(),j=C+$*.05*-B.velocityY/.227,$*=Mp(d,C,j,ki(c,jt)),D.vars.scrollY=v(j),D.invalidate().duration($).play(.01),(Sr&&D.vars.scrollY>=l||C>=l-1)&&Pe.to({},{onUpdate:Z,duration:$})}a&&a(B)},e.onWheel=function(){D._ts&&D.pause(),Mn()-p>1e3&&(T=0,p=Mn())},e.onChange=function(B,ee,$,C,j){if(as!==T&&w(),ee&&n&&_(b(C[2]===ee?H+(B.startX-B.x):_()+ee-C[1])),$){d.offset&&R();var he=j[2]===$,Ee=he?I+B.startY-B.y:d()+$-j[1],ke=v(Ee);he&&Ee!==ke&&(I+=ke-Ee),d(ke)}($||ee)&&or()},e.onEnable=function(){au(c,n?!1:"x"),st.addEventListener("refresh",Z),on(it,"resize",Z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),y.enable()},e.onDisable=function(){au(c,!0),an(it,"resize",Z),st.removeEventListener("refresh",Z),y.kill()},e.lockAxis=e.lockAxis!==!1,o=new Gt(e),o.iOS=Sr,Sr&&!d()&&d(1),Sr&&Pe.ticker.add(Ni),z=o._dc,D=Pe.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ug(d,d(),function(){return D.pause()})},onUpdate:or,onComplete:z.vars.onComplete}),o};st.sort=function(i){if(En(i))return tt.sort(i);var e=it.pageYOffset||0;return st.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+it.innerHeight}),tt.sort(i||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};st.observe=function(i){return new Gt(i)};st.normalizeScroll=function(i){if(typeof i>"u")return In;if(i===!0&&In)return In.enable();if(i===!1){In&&In.kill(),In=i;return}var e=i instanceof Gt?i:Pw(i);return In&&In.target===e.target&&In.kill(),ds(e.target)&&(In=e),e};st.core={_getVelocityProp:_f,_inputObserver:fg,_scrollers:rt,_proxies:Gi,bridge:{ss:function(){Si||ms("scrollStart"),Si=Mn()},ref:function(){return Sn}}};j_()&&Pe.registerPlugin(st);var bp="1.3.26";function hg(i,e,t){return Math.max(i,Math.min(e,t))}function Dw(i,e,t){return(1-t)*i+t*e}function Lw(i,e,t,n){return Dw(i,e,1-Math.exp(-t*n))}function Iw(i,e){return(i%e+e)%e}var Nw=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(i){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const t=hg(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Lw(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:r,onStart:s,onUpdate:a}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=a}};function Uw(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}var Ow=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=i,this.content=e,t&&(this.debouncedResize=Uw(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},dg=class{events={};emit(i,...e){const t=this.events[i]||[];for(let n=0,r=t.length;n<r;n++)t[n]?.(...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{this.events[i]=this.events[i]?.filter(t=>e!==t)}}off(i,e){this.events[i]=this.events[i]?.filter(t=>e!==t)}destroy(){this.events={}}};const Fw=100/6,vr={passive:!1};function Tp(i,e){return i===1?Fw:i===2?e:1}var Bw=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new dg;constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,vr),this.element.addEventListener("touchstart",this.onTouchStart,vr),this.element.addEventListener("touchmove",this.onTouchMove,vr),this.element.addEventListener("touchend",this.onTouchEnd,vr)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,vr),this.element.removeEventListener("touchstart",this.onTouchStart,vr),this.element.removeEventListener("touchmove",this.onTouchMove,vr),this.element.removeEventListener("touchend",this.onTouchEnd,vr)}onTouchStart=i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})};onTouchMove=i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})};onTouchEnd=i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})};onWheel=i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const r=Tp(n,this.window.width),s=Tp(n,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const wp=i=>Math.min(1,1.001-2**(-10*i));var zw=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new Nw;emitter=new dg;dimensions;virtualScroll;constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:m,virtualScroll:p,overscroll:S=!0,autoRaf:T=!1,anchors:x=!1,autoToggle:y=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:b=!1,naiveDimensions:v=b,stopInertiaOnNavigate:w=!1,respectReducedMotion:R=!0}={}){window.lenisVersion=bp,window.lenis||(window.lenis={}),window.lenis.version=bp,h==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof o=="number"&&typeof l!="function"?l=wp:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:_,autoResize:g,prevent:m,virtualScroll:p,overscroll:S,autoRaf:T,anchors:x,autoToggle:y,allowNestedScroll:E,naiveDimensions:v,stopInertiaOnNavigate:w,respectReducedMotion:R},this.dimensions=new Ow(i,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Bw(t,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}onScrollEnd=i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=i=>{i.propertyName?.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()};setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}onClick=i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}};onPointerDown=i=>{i.button===1&&this.reset()};isTouchOnSelectionHandle(i){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=i.targetTouches[0]??i.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const r=n[0],s=n[n.length-1],a=40,o=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=a,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=a;return o||l}onVirtualScroll=i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),s=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(_=>_ instanceof HTMLElement&&(typeof c=="function"&&c?.(_)||_.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&_.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&_.hasAttribute?.("data-lenis-prevent-horizontal")||r&&_.hasAttribute?.("data-lenis-prevent-touch")||s&&_.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let h=t;this.options.gestureOrientation==="both"?h=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=r&&this.options.syncTouch,d=r&&n.type==="touchend";d&&(h=Math.sign(h)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...f?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:a=r?this.options.duration:void 0,easing:o=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(this.prefersReducedMotion&&(r?t=!0:(s=1,a=void 0,o=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=i,d=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let _=null;if(typeof f=="string"?(_=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),_||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&f?.nodeType&&(_=f),_){if(this.options.wrapper!==window){const x=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?x.left:x.top}const g=_.getBoundingClientRect(),m=getComputedStyle(_),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),S=getComputedStyle(this.rootElement),T=this.isHorizontal?Number.parseFloat(S.scrollPaddingLeft):Number.parseFloat(S.scrollPaddingTop);f=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(T)?0:T)}}if(typeof f=="number"){if(f+=d,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const _=f-this.animatedScroll;_>this.limit/2?f-=this.limit:_<-this.limit/2&&(f+=this.limit)}}else f=hg(0,f,this.limit);if(f===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=f),typeof a=="number"&&typeof o!="function"?o=wp:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,f,{duration:a,easing:o,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(_,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),r&&(this.targetScroll=_),g||this.emit(),g&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){const n=Date.now();i._lenis||(i._lenis={});const r=i._lenis;let s,a,o,l,c,u,h,f,d,_;if(n-(r.time??0)>2e3){r.time=Date.now();const E=window.getComputedStyle(i);if(r.computedStyle=E,s=["auto","overlay","scroll"].includes(E.overflowX),a=["auto","overlay","scroll"].includes(E.overflowY),c=["auto"].includes(E.overscrollBehaviorX),u=["auto"].includes(E.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=a,!(s||a))return!1;h=i.scrollWidth,f=i.scrollHeight,d=i.clientWidth,_=i.clientHeight,o=h>d,l=f>_,r.isScrollableX=o,r.isScrollableY=l,r.scrollWidth=h,r.scrollHeight=f,r.clientWidth=d,r.clientHeight=_,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else o=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,a=r.hasOverflowY,h=r.scrollWidth,f=r.scrollHeight,d=r.clientWidth,_=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let m,p,S,T,x,y;if(g==="horizontal")m=Math.round(i.scrollLeft),p=h-d,S=e,T=s,x=o,y=c;else if(g==="vertical")m=Math.round(i.scrollTop),p=f-_,S=t,T=a,x=l,y=u;else return!1;return!y&&(m>=p||m<=0)?!0:(S>0?m<p:m>0)&&T&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?Iw(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};Ys.registerPlugin(st);function kw(i,e={}){const t=new zw({duration:parseFloat(e.scroll_duration)||1.2,easing:a=>Math.min(1,1.001-Math.pow(2,-10*a)),direction:"vertical",smooth:!0,smoothTouch:!1});function n(a){t.raf(a),requestAnimationFrame(n)}requestAnimationFrame(n),t.on("scroll",a=>{if(st.update(),i){const o=window.scrollY/(document.body.scrollHeight-window.innerHeight||1);i.updateScrollProgress(o)}});const r=document.getElementById("cursor-dot");r&&e.cursor_effect_enabled!=="false"&&(window.addEventListener("mousemove",a=>{Ys.to(r,{x:a.clientX,y:a.clientY,duration:.15,ease:"power2.out"})}),document.querySelectorAll("a, button, input, textarea").forEach(a=>{a.addEventListener("mouseenter",()=>{Ys.to(r,{scale:2.5,backgroundColor:"rgba(6, 182, 212, 0.4)",duration:.2})}),a.addEventListener("mouseleave",()=>{Ys.to(r,{scale:1,backgroundColor:"rgba(59, 130, 246, 0.4)",duration:.2})})})),document.querySelectorAll("section").forEach(a=>{Ys.fromTo(a.children,{opacity:0,y:40},{opacity:1,y:0,duration:parseFloat(e.transition_speed)||.8,stagger:.15,ease:e.easing_function||"power2.out",scrollTrigger:{trigger:a,start:"top 80%",toggleActions:"play none none reverse"}})})}document.addEventListener("DOMContentLoaded",()=>{if(!document.getElementById("three-canvas-container"))return;const e=window.APP_3D_CONFIG||{},t=window.APP_ANIM_CONFIG||{},n=new qb("three-canvas-container",e);kw(n,t)});
