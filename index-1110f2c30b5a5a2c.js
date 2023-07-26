(()=>{var Ll=Object.defineProperty,Bl=Object.defineProperties;var ql=Object.getOwnPropertyDescriptors;var da=Object.getOwnPropertySymbols;var Ul=Object.prototype.hasOwnProperty,Gl=Object.prototype.propertyIsEnumerable;var fa=(e,t,n)=>t in e?Ll(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Le=(e,t)=>{for(var n in t||(t={}))Ul.call(t,n)&&fa(e,n,t[n]);if(da)for(var n of da(t))Gl.call(t,n)&&fa(e,n,t[n]);return e},ma=(e,t)=>Bl(e,ql(t));var y=(e,t,n)=>new Promise((r,i)=>{var s=c=>{try{a(n.next(c))}catch(u){i(u)}},o=c=>{try{a(n.throw(c))}catch(u){i(u)}},a=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,o);a((n=n.apply(e,t)).next())});var pa=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},zl=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{let s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},ya={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){let s=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4,d=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(d=64)),r.push(n[l],n[h],n[d],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(pa(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):zl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){let s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;let u=i<e.length?n[e.charAt(i)]:64;++i;let h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new ri;let d=s<<2|a>>4;if(r.push(d),u!==64){let m=a<<4&240|u>>2;if(r.push(m),h!==64){let b=u<<6&192|h;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ri=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},jl=function(e){let t=pa(e);return ya.encodeByteArray(t,!0)},Be=function(e){return jl(e).replace(/\./g,"")},$l=function(e){try{return ya.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function Kl(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}var Ql=()=>Kl().__FIREBASE_DEFAULTS__,Wl=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;let e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Hl=()=>{if(typeof document=="undefined")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}let t=e&&$l(e[1]);return t&&JSON.parse(t)},_a=()=>{try{return Ql()||Wl()||Hl()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Jl=e=>{var t,n;return(n=(t=_a())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},wa=e=>{let t=Jl(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},ii=()=>{var e;return(e=_a())===null||e===void 0?void 0:e.config};var Nn=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}};function va(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Be(JSON.stringify(n)),Be(JSON.stringify(o)),a].join(".")}function si(){try{return typeof indexedDB=="object"}catch(e){return!1}}function Ea(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}var Xl="FirebaseError",St=class e extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Xl,Object.setPrototypeOf(this,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qe.prototype.create)}},qe=class{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){let r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Yl(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new St(i,a,r)}};function Yl(e,t){return e.replace(Zl,(n,r)=>{let i=t[r];return i!=null?String(i):`<${r}?>`})}var Zl=/\{\$([^}]+)}/g;function Ue(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let s=e[i],o=t[i];if(ga(s)&&ga(o)){if(!Ue(s,o))return!1}else if(s!==o)return!1}for(let i of r)if(!n.includes(i))return!1;return!0}function ga(e){return e!==null&&typeof e=="object"}var Jm=4*60*60*1e3;function ce(e){return e&&e._delegate?e._delegate:e}var bt=class{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}};var Gt="[DEFAULT]";var oi=class{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){let n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){let r=new Nn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch(i){}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;let r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(eh(t))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch(n){}for(let[n,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(n);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch(s){}}}}clearInstance(t=Gt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}delete(){return y(this,null,function*(){let t=Array.from(this.instances.values());yield Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])})}isComponentSet(){return this.component!=null}isInitialized(t=Gt){return this.instances.has(t)}getOptions(t=Gt){return this.instancesOptions.get(t)||{}}initialize(t={}){let{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(let[s,o]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;let i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);let o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){let r=this.onInitCallbacks.get(n);if(r)for(let i of r)try{i(t,n)}catch(s){}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:th(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch(i){}return r||null}normalizeInstanceIdentifier(t=Gt){return this.component?this.component.multipleInstances?t:Gt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function th(e){return e===Gt?void 0:e}function eh(e){return e.instantiationMode==="EAGER"}var kn=class{constructor(t){this.name=t,this.providers=new Map}addComponent(t){let n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);let n=new oi(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}};var nh=[],C;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(C||(C={}));var rh={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},ih=C.INFO,sh={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},oh=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=sh[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)},ue=class{constructor(t){this.name=t,this._logLevel=ih,this._logHandler=oh,this._userLogHandler=null,nh.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in C))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?rh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...t),this._logHandler(this,C.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...t),this._logHandler(this,C.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,C.INFO,...t),this._logHandler(this,C.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,C.WARN,...t),this._logHandler(this,C.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...t),this._logHandler(this,C.ERROR,...t)}};var ah=(e,t)=>t.some(n=>e instanceof n),Ia,Ta;function ch(){return Ia||(Ia=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uh(){return Ta||(Ta=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Aa=new WeakMap,ci=new WeakMap,Sa=new WeakMap,ai=new WeakMap,li=new WeakMap;function lh(e){let t=new Promise((n,r)=>{let i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(mt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Aa.set(n,e)}).catch(()=>{}),li.set(t,e),t}function hh(e){if(ci.has(e))return;let t=new Promise((n,r)=>{let i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});ci.set(e,t)}var ui={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ci.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Sa.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ba(e){ui=e(ui)}function dh(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){let r=e.call(On(this),t,...n);return Sa.set(r,t.sort?t.sort():[t]),mt(r)}:uh().includes(e)?function(...t){return e.apply(On(this),t),mt(Aa.get(this))}:function(...t){return mt(e.apply(On(this),t))}}function fh(e){return typeof e=="function"?dh(e):(e instanceof IDBTransaction&&hh(e),ah(e,ch())?new Proxy(e,ui):e)}function mt(e){if(e instanceof IDBRequest)return lh(e);if(ai.has(e))return ai.get(e);let t=fh(e);return t!==e&&(ai.set(e,t),li.set(t,e)),t}var On=e=>li.get(e);function Pa(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let o=indexedDB.open(e,t),a=mt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(mt(o.result),c.oldVersion,c.newVersion,mt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}var mh=["get","getKey","getAll","getAllKeys","count"],gh=["put","add","delete","clear"],hi=new Map;function Ra(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(hi.get(t))return hi.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=gh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mh.includes(n)))return;let s=function(o,...a){return y(this,null,function*(){let c=this.transaction(o,i?"readwrite":"readonly"),u=c.store;return r&&(u=u.index(a.shift())),(yield Promise.all([u[n](...a),i&&c.done]))[0]})};return hi.set(t,s),s}ba(e=>ma(Le({},e),{get:(t,n,r)=>Ra(t,n)||e.get(t,n,r),has:(t,n)=>!!Ra(t,n)||e.has(t,n)}));var fi=class{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ph(n)){let r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}};function ph(e){let t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}var mi="@firebase/app",Da="0.9.15";var zt=new ue("@firebase/app"),yh="@firebase/app-compat",_h="@firebase/analytics-compat",wh="@firebase/analytics",vh="@firebase/app-check-compat",Eh="@firebase/app-check",Ih="@firebase/auth",Th="@firebase/auth-compat",Ah="@firebase/database",Sh="@firebase/database-compat",bh="@firebase/functions",Rh="@firebase/functions-compat",Ph="@firebase/installations",Dh="@firebase/installations-compat",Ch="@firebase/messaging",xh="@firebase/messaging-compat",Vh="@firebase/performance",Nh="@firebase/performance-compat",kh="@firebase/remote-config",Oh="@firebase/remote-config-compat",Mh="@firebase/storage",Fh="@firebase/storage-compat",Lh="@firebase/firestore",Bh="@firebase/firestore-compat",qh="firebase",Uh="10.1.0";var gi="[DEFAULT]",Gh={[mi]:"fire-core",[yh]:"fire-core-compat",[wh]:"fire-analytics",[_h]:"fire-analytics-compat",[Eh]:"fire-app-check",[vh]:"fire-app-check-compat",[Ih]:"fire-auth",[Th]:"fire-auth-compat",[Ah]:"fire-rtdb",[Sh]:"fire-rtdb-compat",[bh]:"fire-fn",[Rh]:"fire-fn-compat",[Ph]:"fire-iid",[Dh]:"fire-iid-compat",[Ch]:"fire-fcm",[xh]:"fire-fcm-compat",[Vh]:"fire-perf",[Nh]:"fire-perf-compat",[kh]:"fire-rc",[Oh]:"fire-rc-compat",[Mh]:"fire-gcs",[Fh]:"fire-gcs-compat",[Lh]:"fire-fst",[Bh]:"fire-fst-compat","fire-js":"fire-js",[qh]:"fire-js-all"};var Mn=new Map,pi=new Map;function zh(e,t){try{e.container.addComponent(t)}catch(n){zt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ge(e){let t=e.name;if(pi.has(t))return zt.debug(`There were multiple attempts to register component ${t}.`),!1;pi.set(t,e);for(let n of Mn.values())zh(n,e);return!0}function Na(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}var jh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Nt=new qe("app","Firebase",jh);var yi=class{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}};var ka=Uh;function vi(e,t={}){let n=e;typeof t!="object"&&(t={name:t});let r=Object.assign({name:gi,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Nt.create("bad-app-name",{appName:String(i)});if(n||(n=ii()),!n)throw Nt.create("no-options");let s=Mn.get(i);if(s){if(Ue(n,s.options)&&Ue(r,s.config))return s;throw Nt.create("duplicate-app",{appName:i})}let o=new kn(i);for(let c of pi.values())o.addComponent(c);let a=new yi(n,r,o);return Mn.set(i,a),a}function Oa(e=gi){let t=Mn.get(e);if(!t&&e===gi&&ii())return vi();if(!t)throw Nt.create("no-app",{appName:e});return t}function kt(e,t,n){var r;let i=(r=Gh[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);let s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),zt.warn(a.join(" "));return}Ge(new bt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}var $h="firebase-heartbeat-database",Kh=1,ze="firebase-heartbeat-store",di=null;function Ma(){return di||(di=Pa($h,Kh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ze)}}}).catch(e=>{throw Nt.create("idb-open",{originalErrorMessage:e.message})})),di}function Qh(e){return y(this,null,function*(){try{return yield(yield Ma()).transaction(ze).objectStore(ze).get(Fa(e))}catch(t){if(t instanceof St)zt.warn(t.message);else{let n=Nt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});zt.warn(n.message)}}})}function Ca(e,t){return y(this,null,function*(){try{let r=(yield Ma()).transaction(ze,"readwrite");yield r.objectStore(ze).put(t,Fa(e)),yield r.done}catch(n){if(n instanceof St)zt.warn(n.message);else{let r=Nt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zt.warn(r.message)}}})}function Fa(e){return`${e.name}!${e.options.appId}`}var Wh=1024,Hh=30*24*60*60*1e3,_i=class{constructor(t){this.container=t,this._heartbeatsCache=null;let n=this.container.getProvider("app").getImmediate();this._storage=new wi(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}triggerHeartbeat(){return y(this,null,function*(){let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=yield this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{let s=new Date(i.date).valueOf();return Date.now()-s<=Hh}),this._storage.overwrite(this._heartbeatsCache)})}getHeartbeatsHeader(){return y(this,null,function*(){if(this._heartbeatsCache===null&&(yield this._heartbeatsCachePromise),this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";let t=xa(),{heartbeatsToSend:n,unsentEntries:r}=Jh(this._heartbeatsCache.heartbeats),i=Be(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i})}};function xa(){return new Date().toISOString().substring(0,10)}function Jh(e,t=Wh){let n=[],r=e.slice();for(let i of e){let s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Va(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Va(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}var wi=class{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return y(this,null,function*(){return si()?Ea().then(()=>!0).catch(()=>!1):!1})}read(){return y(this,null,function*(){return(yield this._canUseIndexedDBPromise)?(yield Qh(this.app))||{heartbeats:[]}:{heartbeats:[]}})}overwrite(t){return y(this,null,function*(){var n;if(yield this._canUseIndexedDBPromise){let i=yield this.read();return Ca(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return})}add(t){return y(this,null,function*(){var n;if(yield this._canUseIndexedDBPromise){let i=yield this.read();return Ca(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return})}};function Va(e){return Be(JSON.stringify({version:2,heartbeats:e})).length}function Xh(e){Ge(new bt("platform-logger",t=>new fi(t),"PRIVATE")),Ge(new bt("heartbeat",t=>new _i(t),"PRIVATE")),kt(mi,Da,e),kt(mi,Da,"esm2017"),kt("fire-js","")}Xh("");var Yh="firebase",Zh="10.1.0";kt(Yh,Zh,"app");var td=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},lt={},p,Gi=Gi||{},T=td||self;function Xn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function rn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function ed(e){return Object.prototype.hasOwnProperty.call(e,Ei)&&e[Ei]||(e[Ei]=++nd)}var Ei="closure_uid_"+(1e9*Math.random()>>>0),nd=0;function rd(e,t,n){return e.call.apply(e.bind,arguments)}function id(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function X(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?X=rd:X=id,X.apply(null,arguments)}function Fn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function $(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Ot(){this.s=this.s,this.o=this.o}var sd=0;Ot.prototype.s=!1;Ot.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),sd!=0)&&ed(this)};Ot.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var Ja=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function zi(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function La(e,t){for(let n=1;n<arguments.length;n++){let r=arguments[n];if(Xn(r)){let i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Y(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};var od=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",()=>{},t),T.removeEventListener("test",()=>{},t)}catch(n){}return e}();function He(e){return/^[\s\xa0]*$/.test(e)}function Yn(){var e=T.navigator;return e&&(e=e.userAgent)?e:""}function gt(e){return Yn().indexOf(e)!=-1}function ji(e){return ji[" "](e),e}ji[" "]=function(){};function ad(e,t){var n=Hd;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var cd=gt("Opera"),fe=gt("Trident")||gt("MSIE"),Xa=gt("Edge"),bi=Xa||fe,Ya=gt("Gecko")&&!(Yn().toLowerCase().indexOf("webkit")!=-1&&!gt("Edge"))&&!(gt("Trident")||gt("MSIE"))&&!gt("Edge"),ud=Yn().toLowerCase().indexOf("webkit")!=-1&&!gt("Edge");function Za(){var e=T.document;return e?e.documentMode:void 0}var Ri;t:{if(Ln="",Bn=function(){var e=Yn();if(Ya)return/rv:([^\);]+)(\)|;)/.exec(e);if(Xa)return/Edge\/([\d\.]+)/.exec(e);if(fe)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(ud)return/WebKit\/(\S+)/.exec(e);if(cd)return/(?:Version)[ \/]?(\S+)/.exec(e)}(),Bn&&(Ln=Bn?Bn[1]:""),fe&&(qn=Za(),qn!=null&&qn>parseFloat(Ln))){Ri=String(qn);break t}Ri=Ln}var Ln,Bn,qn,Pi;T.document&&fe?(Ii=Za(),Pi=Ii||parseInt(Ri,10)||void 0):Pi=void 0;var Ii,ld=Pi;function Je(e,t){if(Y.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ya){t:{try{ji(t.nodeName);var i=!0;break t}catch(s){}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:hd[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Je.$.h.call(this)}}$(Je,Y);var hd={2:"touch",3:"pen",4:"mouse"};Je.prototype.h=function(){Je.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var sn="closure_listenable_"+(1e6*Math.random()|0),dd=0;function fd(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++dd,this.fa=this.ia=!1}function Zn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function $i(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function md(e,t){for(let n in e)t.call(void 0,e[n],n,e)}function tc(e){let t={};for(let n in e)t[n]=e[n];return t}var Ba="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ec(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Ba.length;s++)n=Ba[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function tr(e){this.src=e,this.g={},this.h=0}tr.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Ci(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new fd(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Di(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Ja(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Zn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ci(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Ki="closure_lm_"+(1e6*Math.random()|0),Ti={};function nc(e,t,n,r,i){if(r&&r.once)return ic(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)nc(e,t[s],n,r,i);return null}return n=Hi(n),e&&e[sn]?e.O(t,n,rn(r)?!!r.capture:!!r,i):rc(e,t,n,!1,r,i)}function rc(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=rn(i)?!!i.capture:!!i,a=Wi(e);if(a||(e[Ki]=a=new tr(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=gd(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)od||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(oc(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function gd(){function e(n){return t.call(e.src,e.listener,n)}let t=pd;return e}function ic(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ic(e,t[s],n,r,i);return null}return n=Hi(n),e&&e[sn]?e.P(t,n,rn(r)?!!r.capture:!!r,i):rc(e,t,n,!0,r,i)}function sc(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)sc(e,t[s],n,r,i);else r=rn(r)?!!r.capture:!!r,n=Hi(n),e&&e[sn]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Ci(s,n,r,i),-1<n&&(Zn(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Wi(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ci(t,n,r,i)),(n=-1<e?t[e]:null)&&Qi(n))}function Qi(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[sn])Di(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(oc(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Wi(t))?(Di(n,e),n.h==0&&(n.src=null,t[Ki]=null)):Zn(e)}}}function oc(e){return e in Ti?Ti[e]:Ti[e]="on"+e}function pd(e,t){if(e.fa)e=!0;else{t=new Je(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Qi(e),e=n.call(r,t)}return e}function Wi(e){return e=e[Ki],e instanceof tr?e:null}var Ai="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hi(e){return typeof e=="function"?e:(e[Ai]||(e[Ai]=function(t){return e.handleEvent(t)}),e[Ai])}function j(){Ot.call(this),this.i=new tr(this),this.S=this,this.J=null}$(j,Ot);j.prototype[sn]=!0;j.prototype.removeEventListener=function(e,t,n,r){sc(this,e,t,n,r)};function H(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Y(t,e);else if(t instanceof Y)t.target=t.target||e;else{var i=t;t=new Y(r,e),ec(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Un(o,r,!0,t)&&i}if(o=t.g=e,i=Un(o,r,!0,t)&&i,i=Un(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Un(o,r,!1,t)&&i}j.prototype.N=function(){if(j.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Zn(n[r]);delete e.g[t],e.h--}}this.J=null};j.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};j.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Un(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Di(e.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ji=T.JSON.stringify,xi=class{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}};function yd(){var e=Xi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Vi=class{constructor(){this.h=this.g=null}add(t,n){let r=ac.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}},ac=new xi(()=>new Ni,e=>e.reset()),Ni=class{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}};function _d(e){var t=1;e=e.split(":");let n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function wd(e){T.setTimeout(()=>{throw e},0)}var Xe,Ye=!1,Xi=new Vi,cc=()=>{let e=T.Promise.resolve(void 0);Xe=()=>{e.then(vd)}},vd=()=>{for(var e;e=yd();){try{e.h.call(e.g)}catch(n){wd(n)}var t=ac;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ye=!1};function er(e,t){j.call(this),this.h=e||1,this.g=t||T,this.j=X(this.qb,this),this.l=Date.now()}$(er,j);p=er.prototype;p.ga=!1;p.T=null;p.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),H(this,"tick"),this.ga&&(Yi(this),this.start()))}};p.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Yi(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}p.N=function(){er.$.N.call(this),Yi(this),delete this.g};function Zi(e,t,n){if(typeof e=="function")n&&(e=X(e,n));else if(e&&typeof e.handleEvent=="function")e=X(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function uc(e){e.g=Zi(()=>{e.g=null,e.i&&(e.i=!1,uc(e))},e.j);let t=e.h;e.h=null,e.m.apply(null,t)}var ki=class extends Ot{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:uc(this)}N(){super.N(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}};function Ze(e){Ot.call(this),this.h=e,this.g={}}$(Ze,Ot);var qa=[];function lc(e,t,n,r){Array.isArray(n)||(n&&(qa[0]=n.toString()),n=qa);for(var i=0;i<n.length;i++){var s=nc(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function hc(e){$i(e.g,function(t,n){this.g.hasOwnProperty(n)&&Qi(t)},e),e.g={}}Ze.prototype.N=function(){Ze.$.N.call(this),hc(this)};Ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function nr(){this.g=!0}nr.prototype.Ea=function(){this.g=!1};function Ed(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Id(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function he(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Ad(e,n)+(r?" "+r:"")})}function Td(e,t){e.info(function(){return"TIMEOUT: "+t})}nr.prototype.info=function(){};function Ad(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ji(n)}catch(a){return t}}var Qt={},Ua=null;function rr(){return Ua=Ua||new j}Qt.Ta="serverreachability";function dc(e){Y.call(this,Qt.Ta,e)}$(dc,Y);function tn(e){let t=rr();H(t,new dc(t))}Qt.STAT_EVENT="statevent";function fc(e,t){Y.call(this,Qt.STAT_EVENT,e),this.stat=t}$(fc,Y);function tt(e){let t=rr();H(t,new fc(t,e))}Qt.Ua="timingevent";function mc(e,t){Y.call(this,Qt.Ua,e),this.size=t}$(mc,Y);function on(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var ir={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},gc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ts(){}ts.prototype.h=null;function Ga(e){return e.h||(e.h=e.i())}function pc(){}var an={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function es(){Y.call(this,"d")}$(es,Y);function ns(){Y.call(this,"c")}$(ns,Y);var Oi;function sr(){}$(sr,ts);sr.prototype.g=function(){return new XMLHttpRequest};sr.prototype.i=function(){return{}};Oi=new sr;function cn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Ze(this),this.P=Sd,e=bi?125:void 0,this.V=new er(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new yc}function yc(){this.i=null,this.g="",this.h=!1}var Sd=45e3,Mi={},jn={};p=cn.prototype;p.setTimeout=function(e){this.P=e};function Fi(e,t,n){e.L=1,e.v=ar(Pt(t)),e.s=n,e.S=!0,_c(e,null)}function _c(e,t){e.G=Date.now(),un(e),e.A=Pt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),bc(n.i,"t",r),e.C=0,n=e.l.J,e.h=new yc,e.g=Qc(e.l,n?t:null,!e.s),0<e.O&&(e.M=new ki(X(e.Pa,e,e.g),e.O)),lc(e.U,e.g,"readystatechange",e.nb),t=e.I?tc(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),tn(),Ed(e.j,e.u,e.A,e.m,e.W,e.s)}p.nb=function(e){e=e.target;let t=this.M;t&&pt(e)==3?t.l():this.Pa(e)};p.Pa=function(e){try{if(e==this.g)t:{let l=pt(this.g);var t=this.g.Ia();let h=this.g.da();if(!(3>l)&&(l!=3||bi||this.g&&(this.h.h||this.g.ja()||Ka(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?tn(3):tn(2)),or(this);var n=this.g.da();this.ca=n;e:if(wc(this)){var r=Ka(this.g);e="";var i=r.length,s=pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){jt(this),We(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Id(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!He(a)){var u=a;break e}}u=null}if(n=u)he(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Li(this,n);else{this.i=!1,this.o=3,tt(12),jt(this),We(this);break t}}this.S?(vc(this,l,o),bi&&this.i&&l==3&&(lc(this.U,this.V,"tick",this.mb),this.V.start())):(he(this.j,this.m,o,null),Li(this,o)),l==4&&jt(this),this.i&&!this.J&&(l==4?zc(this.l,this):(this.i=!1,un(this)))}else Kd(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),jt(this),We(this)}}}catch(l){}finally{}};function wc(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function vc(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=bd(e,n),i==jn){t==4&&(e.o=4,tt(14),r=!1),he(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Mi){e.o=4,tt(15),he(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else he(e.j,e.m,i,null),Li(e,i);wc(e)&&i!=jn&&i!=Mi&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,tt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),cs(t),t.M=!0,tt(11))):(he(e.j,e.m,n,"[Invalid Chunked Response]"),jt(e),We(e))}p.mb=function(){if(this.g){var e=pt(this.g),t=this.g.ja();this.C<t.length&&(or(this),vc(this,e,t),this.i&&e!=4&&un(this))}};function bd(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?jn:(n=Number(t.substring(n,r)),isNaN(n)?Mi:(r+=1,r+n>t.length?jn:(t=t.slice(r,r+n),e.C=r+n,t)))}p.cancel=function(){this.J=!0,jt(this)};function un(e){e.Y=Date.now()+e.P,Ec(e,e.P)}function Ec(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=on(X(e.lb,e),t)}function or(e){e.B&&(T.clearTimeout(e.B),e.B=null)}p.lb=function(){this.B=null;let e=Date.now();0<=e-this.Y?(Td(this.j,this.A),this.L!=2&&(tn(),tt(17)),jt(this),this.o=2,We(this)):Ec(this,this.Y-e)};function We(e){e.l.H==0||e.J||zc(e.l,e)}function jt(e){or(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Yi(e.V),hc(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Li(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Bi(n.i,e))){if(!e.K&&Bi(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Qn(n),lr(n);else break t;as(n),tt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=on(X(n.ib,n),6e3));if(1>=Dc(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else $t(n,11)}else if((e.K||n.g==e)&&Qn(n),!He(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];let l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));let h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));let d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;let m=e.g;if(m){let b=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(b){var s=r.i;s.g||b.indexOf("spdy")==-1&&b.indexOf("quic")==-1&&b.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(rs(s,s.h),s.h=null))}if(r.F){let R=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.Da=R,k(r.I,r.F,R))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Kc(r,r.J?r.pa:null,r.Y),o.K){Cc(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(or(a),un(a)),r.g=o}else Uc(r);0<n.j.length&&hr(n)}else u[0]!="stop"&&u[0]!="close"||$t(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?$t(n,7):os(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}tn(4)}catch(u){}}function Rd(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map!="undefined"&&e instanceof Map||typeof Set!="undefined"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Xn(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Pd(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map!="undefined"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set!="undefined"&&e instanceof Set)){if(Xn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(let r in e)t[n++]=r;return t}}}function Ic(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Xn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Pd(e),r=Rd(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Tc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Dd(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Kt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Kt){this.h=e.h,$n(this,e.j),this.s=e.s,this.g=e.g,Kn(this,e.m),this.l=e.l;var t=e.i,n=new en;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),za(this,n),this.o=e.o}else e&&(t=String(e).match(Tc))?(this.h=!1,$n(this,t[1]||"",!0),this.s=Ke(t[2]||""),this.g=Ke(t[3]||"",!0),Kn(this,t[4]),this.l=Ke(t[5]||"",!0),za(this,t[6]||"",!0),this.o=Ke(t[7]||"")):(this.h=!1,this.i=new en(null,this.h))}Kt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Qe(t,ja,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Qe(t,ja,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Qe(n,n.charAt(0)=="/"?Vd:xd,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Qe(n,kd)),e.join("")};function Pt(e){return new Kt(e)}function $n(e,t,n){e.j=n?Ke(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Kn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function za(e,t,n){t instanceof en?(e.i=t,Od(e.i,e.h)):(n||(t=Qe(t,Nd)),e.i=new en(t,e.h))}function k(e,t,n){e.i.set(t,n)}function ar(e){return k(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ke(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Qe(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Cd),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Cd(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ja=/[#\/\?@]/g,xd=/[#\?:]/g,Vd=/[#\?]/g,Nd=/[#\?@]/g,kd=/#/g;function en(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Mt(e){e.g||(e.g=new Map,e.h=0,e.i&&Dd(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}p=en.prototype;p.add=function(e,t){Mt(this),this.i=null,e=me(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Ac(e,t){Mt(e),t=me(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Sc(e,t){return Mt(e),t=me(e,t),e.g.has(t)}p.forEach=function(e,t){Mt(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};p.ta=function(){Mt(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};p.Z=function(e){Mt(this);let t=[];if(typeof e=="string")Sc(this,e)&&(t=t.concat(this.g.get(me(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};p.set=function(e,t){return Mt(this),this.i=null,e=me(this,e),Sc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};p.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function bc(e,t,n){Ac(e,t),0<n.length&&(e.i=null,e.g.set(me(e,t),zi(n)),e.h+=n.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function me(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Od(e,t){t&&!e.j&&(Mt(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Ac(this,r),bc(this,i,n))},e)),e.j=t}var Md=class{constructor(e,t){this.g=e,this.map=t}};function Rc(e){this.l=e||Fd,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ka&&T.g.Ka()&&T.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Fd=10;function Pc(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Dc(e){return e.h?1:e.g?e.g.size:0}function Bi(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function rs(e,t){e.g?e.g.add(t):e.h=t}function Cc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Rc.prototype.cancel=function(){if(this.i=xc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let e of this.g.values())e.cancel();this.g.clear()}};function xc(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(let n of e.g.values())t=t.concat(n.F);return t}return zi(e.i)}var Ld=class{stringify(e){return T.JSON.stringify(e,void 0)}parse(e){return T.JSON.parse(e,void 0)}};function Bd(){this.g=new Ld}function qd(e,t,n){let r=n||"";try{Ic(e,function(i,s){let o=i;rn(i)&&(o=Ji(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Ud(e,t){let n=new nr;if(T.Image){let r=new Image;r.onload=Fn(Gn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Fn(Gn,n,r,"TestLoadImage: error",!1,t),r.onabort=Fn(Gn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Fn(Gn,n,r,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Gn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function ln(e){this.l=e.fc||null,this.j=e.ob||!1}$(ln,ts);ln.prototype.g=function(){return new cr(this.l,this.j)};ln.prototype.i=function(e){return function(){return e}}({});function cr(e,t){j.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=is,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$(cr,j);var is=0;p=cr.prototype;p.open=function(e,t){if(this.readyState!=is)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,nn(this)};p.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||T).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hn(this)),this.readyState=is};p.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,nn(this)),this.g&&(this.readyState=3,nn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof T.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vc(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Vc(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}p.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?hn(this):nn(this),this.readyState==3&&Vc(this)}};p.Za=function(e){this.g&&(this.response=this.responseText=e,hn(this))};p.Ya=function(e){this.g&&(this.response=e,hn(this))};p.ka=function(){this.g&&hn(this)};function hn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,nn(e)}p.setRequestHeader=function(e,t){this.v.append(e,t)};p.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function nn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(cr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Gd=T.JSON.parse;function M(e){j.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Nc,this.L=this.M=!1}$(M,j);var Nc="",zd=/^https?$/i,jd=["POST","PUT"];p=M.prototype;p.Oa=function(e){this.M=e};p.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Oi.g(),this.C=this.u?Ga(this.u):Ga(Oi),this.g.onreadystatechange=X(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){$a(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(let s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=T.FormData&&e instanceof T.FormData,!(0<=Ja(jd,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Mc(this),0<this.B&&((this.L=$d(this.g))?(this.g.timeout=this.B,this.g.ontimeout=X(this.ua,this)):this.A=Zi(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){$a(this,s)}};function $d(e){return fe&&typeof e.timeout=="number"&&e.ontimeout!==void 0}p.ua=function(){typeof Gi!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,H(this,"timeout"),this.abort(8))};function $a(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,kc(e),ur(e)}function kc(e){e.F||(e.F=!0,H(e,"complete"),H(e,"error"))}p.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,H(this,"complete"),H(this,"abort"),ur(this))};p.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ur(this,!0)),M.$.N.call(this)};p.La=function(){this.s||(this.G||this.v||this.l?Oc(this):this.kb())};p.kb=function(){Oc(this)};function Oc(e){if(e.h&&typeof Gi!="undefined"&&(!e.C[1]||pt(e)!=4||e.da()!=2)){if(e.v&&pt(e)==4)Zi(e.La,0,e);else if(H(e,"readystatechange"),pt(e)==4){e.h=!1;try{let o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Tc)[1]||null;!i&&T.self&&T.self.location&&(i=T.self.location.protocol.slice(0,-1)),r=!zd.test(i?i.toLowerCase():"")}n=r}if(n)H(e,"complete"),H(e,"success");else{e.m=6;try{var s=2<pt(e)?e.g.statusText:""}catch(a){s=""}e.j=s+" ["+e.da()+"]",kc(e)}}finally{ur(e)}}}}function ur(e,t){if(e.g){Mc(e);let n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||H(e,"ready");try{n.onreadystatechange=r}catch(i){}}}function Mc(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}p.isActive=function(){return!!this.g};function pt(e){return e.g?e.g.readyState:0}p.da=function(){try{return 2<pt(this)?this.g.status:-1}catch(e){return-1}};p.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}};p.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Gd(t)}};function Ka(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Nc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Kd(e){let t={};e=(e.g&&2<=pt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(He(e[r]))continue;var n=_d(e[r]);let i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();let s=t[i]||[];t[i]=s,s.push(n)}md(t,function(r){return r.join(", ")})}p.Ia=function(){return this.m};p.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Fc(e){let t="";return $i(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function ss(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Fc(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):k(e,t,n))}function je(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Lc(e){this.Ga=0,this.j=[],this.l=new nr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=je("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=je("baseRetryDelayMs",5e3,e),this.hb=je("retryDelaySeedMs",1e4,e),this.eb=je("forwardChannelMaxRetries",2,e),this.xa=je("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Rc(e&&e.concurrentRequestLimit),this.Ja=new Bd,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}p=Lc.prototype;p.ra=8;p.H=1;function os(e){if(Bc(e),e.H==3){var t=e.W++,n=Pt(e.I);if(k(n,"SID",e.K),k(n,"RID",t),k(n,"TYPE","terminate"),dn(e,n),t=new cn(e,e.l,t),t.L=2,t.v=ar(Pt(n)),n=!1,T.navigator&&T.navigator.sendBeacon)try{n=T.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=Qc(t.l,null),t.g.ha(t.v)),t.G=Date.now(),un(t)}$c(e)}function lr(e){e.g&&(cs(e),e.g.cancel(),e.g=null)}function Bc(e){lr(e),e.u&&(T.clearTimeout(e.u),e.u=null),Qn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function hr(e){if(!Pc(e.i)&&!e.m){e.m=!0;var t=e.Na;Xe||cc(),Ye||(Xe(),Ye=!0),Xi.add(t,e),e.C=0}}function Qd(e,t){return Dc(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=on(X(e.Na,e,t),jc(e,e.C)),e.C++,!0)}p.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let i=new cn(this,this.l,e),s=this.s;if(this.U&&(s?(s=tc(s),ec(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=qc(this,i,t),n=Pt(this.I),k(n,"RID",e),k(n,"CVER",22),this.F&&k(n,"X-HTTP-Session-Id",this.F),dn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Fc(s)))+"&"+t:this.o&&ss(n,this.o,s)),rs(this.i,i),this.bb&&k(n,"TYPE","init"),this.P?(k(n,"$req",t),k(n,"SID","null"),i.aa=!0,Fi(i,n,null)):Fi(i,n,t),this.H=2}}else this.H==3&&(e?Qa(this,e):this.j.length==0||Pc(this.i)||Qa(this))};function Qa(e,t){var n;t?n=t.m:n=e.W++;let r=Pt(e.I);k(r,"SID",e.K),k(r,"RID",n),k(r,"AID",e.V),dn(e,r),e.o&&e.s&&ss(r,e.o,e.s),n=new cn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=qc(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),rs(e.i,n),Fi(n,r,t)}function dn(e,t){e.na&&$i(e.na,function(n,r){k(t,r,n)}),e.h&&Ic({},function(n,r){k(t,r,n)})}function qc(e,t,n){n=Math.min(e.j.length,n);var r=e.h?X(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){let o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let u=i[c].g,l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{qd(l,o,"req"+u+"_")}catch(h){r&&r(l)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Uc(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Xe||cc(),Ye||(Xe(),Ye=!0),Xi.add(t,e),e.A=0}}function as(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=on(X(e.Ma,e),jc(e,e.A)),e.A++,!0)}p.Ma=function(){if(this.u=null,Gc(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=on(X(this.jb,this),e)}};p.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,tt(10),lr(this),Gc(this))};function cs(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function Gc(e){e.g=new cn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Pt(e.wa);k(t,"RID","rpc"),k(t,"SID",e.K),k(t,"AID",e.V),k(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&k(t,"TO",e.qa),k(t,"TYPE","xmlhttp"),dn(e,t),e.o&&e.s&&ss(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=ar(Pt(t)),n.s=null,n.S=!0,_c(n,e)}p.ib=function(){this.v!=null&&(this.v=null,lr(this),as(this),tt(19))};function Qn(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function zc(e,t){var n=null;if(e.g==t){Qn(e),cs(e),e.g=null;var r=2}else if(Bi(e.i,t))n=t.F,Cc(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=rr(),H(r,new mc(r,n)),hr(e)}else Uc(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&Qd(e,t)||r==2&&as(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:$t(e,5);break;case 4:$t(e,10);break;case 3:$t(e,6);break;default:$t(e,2)}}}function jc(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function $t(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=X(e.pb,e);n||(n=new Kt("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||$n(n,"https"),ar(n)),Ud(n.toString(),r)}else tt(2);e.H=0,e.h&&e.h.za(t),$c(e),Bc(e)}p.pb=function(e){e?(this.l.info("Successfully pinged google.com"),tt(2)):(this.l.info("Failed to ping google.com"),tt(1))};function $c(e){if(e.H=0,e.ma=[],e.h){let t=xc(e.i);(t.length!=0||e.j.length!=0)&&(La(e.ma,t),La(e.ma,e.j),e.i.i.length=0,zi(e.j),e.j.length=0),e.h.ya()}}function Kc(e,t,n){var r=n instanceof Kt?Pt(n):new Kt(n);if(r.g!="")t&&(r.g=t+"."+r.g),Kn(r,r.m);else{var i=T.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Kt(null);r&&$n(s,r),t&&(s.g=t),i&&Kn(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&k(r,n,t),k(r,"VER",e.ra),dn(e,r),r}function Qc(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new M(new ln({ob:!0})):new M(e.va),t.Oa(e.J),t}p.isActive=function(){return!!this.h&&this.h.isActive(this)};function Wc(){}p=Wc.prototype;p.Ba=function(){};p.Aa=function(){};p.za=function(){};p.ya=function(){};p.isActive=function(){return!0};p.Va=function(){};function Wn(){if(fe&&!(10<=Number(ld)))throw Error("Environmental error: no available transport.")}Wn.prototype.g=function(e,t){return new st(e,t)};function st(e,t){j.call(this),this.g=new Lc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!He(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!He(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ge(this)}$(st,j);st.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;tt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Kc(e,null,e.Y),hr(e)};st.prototype.close=function(){os(this.g)};st.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ji(e),e=n);t.j.push(new Md(t.fb++,e)),t.H==3&&hr(t)};st.prototype.N=function(){this.g.h=null,delete this.j,os(this.g),delete this.g,st.$.N.call(this)};function Hc(e){es.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(let n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}$(Hc,es);function Jc(){ns.call(this),this.status=1}$(Jc,ns);function ge(e){this.g=e}$(ge,Wc);ge.prototype.Ba=function(){H(this.g,"a")};ge.prototype.Aa=function(e){H(this.g,new Hc(e))};ge.prototype.za=function(e){H(this.g,new Jc)};ge.prototype.ya=function(){H(this.g,"b")};function Wd(){this.blockSize=-1}function ut(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}$(ut,Wd);ut.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Si(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}ut.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Si(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Si(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Si(this,r),i=0;break}}this.h=i,this.i+=t};ut.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function V(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var Hd={};function us(e){return-128<=e&&128>e?ad(e,function(t){return new V([t|0],0>t?-1:0)}):new V([e|0],0>e?-1:0)}function yt(e){if(isNaN(e)||!isFinite(e))return de;if(0>e)return W(yt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=qi;return new V(t,0)}function Xc(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return W(Xc(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=yt(Math.pow(t,8)),r=de,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=yt(Math.pow(t,s)),r=r.R(s).add(yt(o))):(r=r.R(n),r=r.add(yt(o)))}return r}var qi=4294967296,de=us(0),Ui=us(1),Wa=us(16777216);p=V.prototype;p.ea=function(){if(at(this))return-W(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:qi+r)*t,t*=qi}return e};p.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Rt(this))return"0";if(at(this))return"-"+W(this).toString(e);for(var t=yt(Math.pow(e,6)),n=this,r="";;){var i=Jn(n,t).g;n=Hn(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Rt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};p.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Rt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function at(e){return e.h==-1}p.X=function(e){return e=Hn(this,e),at(e)?-1:Rt(e)?0:1};function W(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new V(n,~e.h).add(Ui)}p.abs=function(){return at(this)?W(this):this};p.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new V(n,n[n.length-1]&-2147483648?-1:0)};function Hn(e,t){return e.add(W(t))}p.R=function(e){if(Rt(this)||Rt(e))return de;if(at(this))return at(e)?W(this).R(W(e)):W(W(this).R(e));if(at(e))return W(this.R(W(e)));if(0>this.X(Wa)&&0>e.X(Wa))return yt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,c=e.D(i)&65535;n[2*r+2*i]+=o*c,zn(n,2*r+2*i),n[2*r+2*i+1]+=s*c,zn(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,zn(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,zn(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new V(n,0)};function zn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function $e(e,t){this.g=e,this.h=t}function Jn(e,t){if(Rt(t))throw Error("division by zero");if(Rt(e))return new $e(de,de);if(at(e))return t=Jn(W(e),t),new $e(W(t.g),W(t.h));if(at(t))return t=Jn(e,W(t)),new $e(W(t.g),t.h);if(30<e.g.length){if(at(e)||at(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Ui,r=t;0>=r.X(e);)n=Ha(n),r=Ha(r);var i=le(n,1),s=le(r,1);for(r=le(r,2),n=le(n,2);!Rt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=le(r,1),n=le(n,1)}return t=Hn(e,i.R(t)),new $e(i,t)}for(i=de;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=yt(n),o=s.R(t);at(o)||0<o.X(e);)n-=r,s=yt(n),o=s.R(t);Rt(s)&&(s=Ui),i=i.add(s),e=Hn(e,o)}return new $e(i,e)}p.gb=function(e){return Jn(this,e).h};p.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new V(n,this.h&e.h)};p.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new V(n,this.h|e.h)};p.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new V(n,this.h^e.h)};function Ha(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new V(n,e.h)}function le(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new V(i,e.h)}Wn.prototype.createWebChannel=Wn.prototype.g;st.prototype.send=st.prototype.u;st.prototype.open=st.prototype.m;st.prototype.close=st.prototype.close;ir.NO_ERROR=0;ir.TIMEOUT=8;ir.HTTP_ERROR=6;gc.COMPLETE="complete";pc.EventType=an;an.OPEN="a";an.CLOSE="b";an.ERROR="c";an.MESSAGE="d";j.prototype.listen=j.prototype.O;M.prototype.listenOnce=M.prototype.P;M.prototype.getLastError=M.prototype.Sa;M.prototype.getLastErrorCode=M.prototype.Ia;M.prototype.getStatus=M.prototype.da;M.prototype.getResponseJson=M.prototype.Wa;M.prototype.getResponseText=M.prototype.ja;M.prototype.send=M.prototype.ha;M.prototype.setWithCredentials=M.prototype.Oa;ut.prototype.digest=ut.prototype.l;ut.prototype.reset=ut.prototype.reset;ut.prototype.update=ut.prototype.j;V.prototype.add=V.prototype.add;V.prototype.multiply=V.prototype.R;V.prototype.modulo=V.prototype.gb;V.prototype.compare=V.prototype.X;V.prototype.toNumber=V.prototype.ea;V.prototype.toString=V.prototype.toString;V.prototype.getBits=V.prototype.D;V.fromNumber=yt;V.fromString=Xc;var Yc=lt.createWebChannelTransport=function(){return new Wn},Zc=lt.getStatEventTarget=function(){return rr()},dr=lt.ErrorCode=ir,tu=lt.EventType=gc,eu=lt.Event=Qt,ls=lt.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},nu=lt.FetchXmlHttpFactory=ln,fn=lt.WebChannel=pc,ru=lt.XhrIo=M,iu=lt.Md5=ut,Wt=lt.Integer=V;var su="@firebase/firestore";var K=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};K.UNAUTHENTICATED=new K(null),K.GOOGLE_CREDENTIALS=new K("google-credentials-uid"),K.FIRST_PARTY=new K("first-party-uid"),K.MOCK_USER=new K("mock-user");var Oe="10.1.0";var te=new ue("@firebase/firestore");function ou(){return te.logLevel}function _(e,...t){if(te.logLevel<=C.DEBUG){let n=t.map($o);te.debug(`Firestore (${Oe}): ${e}`,...n)}}function Dt(e,...t){if(te.logLevel<=C.ERROR){let n=t.map($o);te.error(`Firestore (${Oe}): ${e}`,...n)}}function Ie(e,...t){if(te.logLevel<=C.WARN){let n=t.map($o);te.warn(`Firestore (${Oe}): ${e}`,...n)}}function $o(e){if(typeof e=="string")return e;try{return function(n){return JSON.stringify(n)}(e)}catch(t){return e}}function E(e="Unexpected state"){let t=`FIRESTORE (${Oe}) INTERNAL ASSERTION FAILED: `+e;throw Dt(t),new Error(t)}function O(e,t){e||E()}function S(e,t){return e}var f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},w=class extends St{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var dt=class{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}};var _r=class{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}},gs=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(K.UNAUTHENTICATED))}shutdown(){}},ps=class{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}},ys=class{constructor(t){this.t=t,this.currentUser=K.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i,i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve(),s=new dt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new dt,t.enqueueRetryable(()=>i(this.currentUser))};let o=()=>{let c=s;t.enqueueRetryable(()=>y(this,null,function*(){yield c.promise,yield i(this.currentUser)}))},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){let c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new dt)}},0),o()}getToken(){let t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(O(typeof r.accessToken=="string"),new _r(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let t=this.auth&&this.auth.getUid();return O(t===null||typeof t=="string"),new K(t)}},_s=class{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=K.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}},ws=class{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new _s(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(K.FIRST_PARTY))}shutdown(){}invalidateToken(){}},vs=class{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},Es=class{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){let r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);let o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};let i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){let s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(O(typeof n.token=="string"),this.R=n.token,new vs(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};function Jd(e){let t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}var wr=class{static V(){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length,r="";for(;r.length<20;){let i=Jd(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}};function x(e,t){return e<t?-1:e>t?1:0}function Te(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}var J=class e{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return e.fromMillis(Date.now())}static fromDate(t){return e.fromMillis(t.getTime())}static fromMillis(t){let n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new e(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?x(this.nanoseconds,t.nanoseconds):x(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var A=class e{constructor(t){this.timestamp=t}static fromTimestamp(t){return new e(t)}static min(){return new e(new J(0,0))}static max(){return new e(new J(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var vr=class e{constructor(t,n,r){n===void 0?n=0:n>t.length&&E(),r===void 0?r=t.length-n:r>t.length-n&&E(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return e.comparator(this,t)===0}child(t){let n=this.segments.slice(this.offset,this.limit());return t instanceof e?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){let r=Math.min(t.length,n.length);for(let i=0;i<r;i++){let s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}},L=class e extends vr{construct(t,n,r){return new e(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){let n=[];for(let r of t){if(r.indexOf("//")>=0)throw new w(f.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new e(n)}static emptyPath(){return new e([])}},Xd=/^[_a-zA-Z][_a-zA-Z0-9]*$/,ct=class e extends vr{construct(t,n,r){return new e(t,n,r)}static isValidIdentifier(t){return Xd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),e.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new e(["__name__"])}static fromServerFormat(t){let n=[],r="",i=0,s=()=>{if(r.length===0)throw new w(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""},o=!1;for(;i<t.length;){let a=t[i];if(a==="\\"){if(i+1===t.length)throw new w(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);let c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new w(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new e(n)}static emptyPath(){return new e([])}};var v=class e{constructor(t){this.path=t}static fromPath(t){return new e(L.fromString(t))}static fromName(t){return new e(L.fromString(t).popFirst(5))}static empty(){return new e(L.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&L.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return L.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new e(new L(t.slice()))}};var Is=class{constructor(t,n,r,i){this.indexId=t,this.collectionGroup=n,this.fields=r,this.indexState=i}};Is.UNKNOWN_ID=-1;function Yd(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=A.fromTimestamp(r===1e9?new J(n+1,0):new J(n,r));return new ee(i,v.empty(),t)}function Zd(e){return new ee(e.readTime,e.key,-1)}var ee=class e{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new e(A.min(),v.empty(),-1)}static max(){return new e(A.max(),v.empty(),-1)}};function tf(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=v.comparator(e.documentKey,t.documentKey),n!==0?n:x(e.largestBatchId,t.largestBatchId))}var ef="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",Ts=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}};function Dn(e){return y(this,null,function*(){if(e.code!==f.FAILED_PRECONDITION||e.message!==ef)throw e;_("LocalStore","Unexpectedly lost primary lease")})}var g=class e{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&E(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new e((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{let n=t();return n instanceof e?n:e.resolve(n)}catch(n){return e.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):e.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):e.reject(n)}static resolve(t){return new e((n,r)=>{n(t)})}static reject(t){return new e((n,r)=>{r(t)})}static waitFor(t){return new e((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(t){let n=e.resolve(!1);for(let r of t)n=n.next(i=>i?e.resolve(i):r());return n}static forEach(t,n){let r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new e((r,i)=>{let s=t.length,o=new Array(s),a=0;for(let c=0;c<s;c++){let u=c;n(t[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(t,n){return new e((r,i)=>{let s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}};function Cn(e){return e.name==="IndexedDbTransactionError"}var _n=class{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){let t=++this.previousValue;return this._e&&this._e(t),t}};_n.ae=-1;function Xr(e){return e==null}function wn(e){return e===0&&1/e==-1/0}function nf(e){return typeof e=="number"&&Number.isInteger(e)&&!wn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}var rf=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],xg=[...rf,"documentOverlays"],sf=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],of=sf,Vg=[...of,"indexConfiguration","indexState","indexEntries"];function au(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Me(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Vu(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}var B=class e{constructor(t,n){this.comparator=t,this.root=n||vt.EMPTY}insert(t,n){return new e(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(t){return new e(this.comparator,this.root.remove(t,this.comparator).copy(null,null,vt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){let r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){let t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new _e(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new _e(this.root,t,this.comparator,!1)}getReverseIterator(){return new _e(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new _e(this.root,t,this.comparator,!0)}},_e=class{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop(),n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}},vt=class e{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r!=null?r:e.RED,this.left=i!=null?i:e.EMPTY,this.right=s!=null?s:e.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new e(t!=null?t:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this,s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return e.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){let t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){let t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){let t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){let t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw E();let t=this.left.check();if(t!==this.right.check())throw E();return t+(this.isRed()?0:1)}};vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw E()}get value(){throw E()}get color(){throw E()}get left(){throw E()}get right(){throw E()}copy(t,n,r,i,s){return this}insert(t,n,r){return new vt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var et=class e{constructor(t){this.comparator=t,this.data=new B(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){let r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){let n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Er(this.data.getIterator())}getIteratorFrom(t){return new Er(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof e)||this.size!==t.size)return!1;let n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){let i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let t=[];return this.forEach(n=>{t.push(n)}),t}toString(){let t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){let n=new e(this.comparator);return n.data=t,n}},Er=class{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var wt=class e{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new e([])}unionWith(t){let n=new et(ct.comparator);for(let r of this.fields)n=n.add(r);for(let r of t)n=n.add(r);return new e(n.toArray())}covers(t){for(let n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Te(this.fields,t.fields,(n,r)=>n.isEqual(r))}};var Ir=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var nt=class e{constructor(t){this.binaryString=t}static fromBase64String(t){let n=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new Ir("Invalid base64 string: "+s):s}}(t);return new e(n)}static fromUint8Array(t){let n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new e(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){let r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return x(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}};nt.EMPTY_BYTE_STRING=new nt("");var af=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lt(e){if(O(!!e),typeof e=="string"){let t=0,n=af.exec(e);if(O(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}let r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:F(e.seconds),nanos:F(e.nanos)}}function F(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Bt(e){return typeof e=="string"?nt.fromBase64String(e):nt.fromUint8Array(e)}function Ko(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qo(e){let t=e.mapValue.fields.__previous_value__;return Ko(t)?Qo(t):t}function vn(e){let t=Lt(e.mapValue.fields.__local_write_time__.timestampValue);return new J(t.seconds,t.nanos)}var As=class{constructor(t,n,r,i,s,o,a,c,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}},Tr=class e{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new e("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof e&&t.projectId===this.projectId&&t.database===this.database}};var fr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ne(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ko(e)?4:Nu(e)?9007199254740991:10:E()}function It(e,t){if(e===t)return!0;let n=ne(e);if(n!==ne(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return vn(e).isEqual(vn(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let o=Lt(i.timestampValue),a=Lt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Bt(i.bytesValue).isEqual(Bt(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return F(i.geoPointValue.latitude)===F(s.geoPointValue.latitude)&&F(i.geoPointValue.longitude)===F(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return F(i.integerValue)===F(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let o=F(i.doubleValue),a=F(s.doubleValue);return o===a?wn(o)===wn(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Te(e.arrayValue.values||[],t.arrayValue.values||[],It);case 10:return function(i,s){let o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(au(o)!==au(a))return!1;for(let c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!It(o[c],a[c])))return!1;return!0}(e,t);default:return E()}}function En(e,t){return(e.values||[]).find(n=>It(n,t))!==void 0}function Ae(e,t){if(e===t)return 0;let n=ne(e),r=ne(t);if(n!==r)return x(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return x(e.booleanValue,t.booleanValue);case 2:return function(s,o){let a=F(s.integerValue||s.doubleValue),c=F(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return cu(e.timestampValue,t.timestampValue);case 4:return cu(vn(e),vn(t));case 5:return x(e.stringValue,t.stringValue);case 6:return function(s,o){let a=Bt(s),c=Bt(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){let a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){let l=x(a[u],c[u]);if(l!==0)return l}return x(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){let a=x(F(s.latitude),F(o.latitude));return a!==0?a:x(F(s.longitude),F(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){let a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){let l=Ae(a[u],c[u]);if(l)return l}return x(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===fr.mapValue&&o===fr.mapValue)return 0;if(s===fr.mapValue)return 1;if(o===fr.mapValue)return-1;let a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){let d=x(c[h],l[h]);if(d!==0)return d;let m=Ae(a[c[h]],u[l[h]]);if(m!==0)return m}return x(c.length,l.length)}(e.mapValue,t.mapValue);default:throw E()}}function cu(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return x(e,t);let n=Lt(e),r=Lt(t),i=x(n.seconds,r.seconds);return i!==0?i:x(n.nanos,r.nanos)}function Se(e){return Ss(e)}function Ss(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){let r=Lt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Bt(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return v.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(let s of n.values||[])i?i=!1:r+=",",r+=Ss(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){let r=Object.keys(n.fields||{}).sort(),i="{",s=!0;for(let o of r)s?s=!1:i+=",",i+=`${o}:${Ss(n.fields[o])}`;return i+"}"}(e.mapValue):E()}function bs(e){return!!e&&"integerValue"in e}function Wo(e){return!!e&&"arrayValue"in e}function uu(e){return!!e&&"nullValue"in e}function lu(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function pr(e){return!!e&&"mapValue"in e}function gn(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return Me(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=gn(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=gn(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Nu(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}var ht=class e{constructor(t){this.value=t}static empty(){return new e({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!pr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=gn(n)}setAll(t){let n=ct.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){let c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=gn(o):i.push(a.lastSegment())});let s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){let n=this.field(t.popLast());pr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return It(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];pr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){Me(n,(i,s)=>t[i]=s);for(let i of r)delete t[i]}clone(){return new e(gn(this.value))}};function ku(e){let t=[];return Me(e.fields,(n,r)=>{let i=new ct([n]);if(pr(r)){let s=ku(r.mapValue).fields;if(s.length===0)t.push(i);else for(let o of s)t.push(i.child(o))}else t.push(i)}),new wt(t)}var ft=class e{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new e(t,0,A.min(),A.min(),A.min(),ht.empty(),0)}static newFoundDocument(t,n,r,i){return new e(t,1,n,A.min(),r,i,0)}static newNoDocument(t,n){return new e(t,2,n,A.min(),A.min(),ht.empty(),0)}static newUnknownDocument(t,n){return new e(t,3,n,A.min(),A.min(),ht.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(A.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=A.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var be=class{constructor(t,n){this.position=t,this.inclusive=n}};function hu(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],o=e.position[i];if(s.field.isKeyField()?r=v.comparator(v.fromName(o.referenceValue),n.key):r=Ae(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function du(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!It(e.position[n],t.position[n]))return!1;return!0}var Yt=class{constructor(t,n="asc"){this.field=t,this.dir=n}};function cf(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}var Ar=class{},z=class e extends Ar{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Ps(t,n,r):n==="array-contains"?new xs(t,r):n==="in"?new Vs(t,r):n==="not-in"?new Ns(t,r):n==="array-contains-any"?new ks(t,r):new e(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Ds(t,r):new Cs(t,r)}matches(t){let n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ae(n,this.value)):n!==null&&ne(this.value)===ne(n)&&this.matchesComparison(Ae(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return E()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}},Tt=class e extends Ar{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new e(t,n)}matches(t){return Ou(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(let n of this.getFlattenedFilters())if(t(n))return n;return null}};function Ou(e){return e.op==="and"}function Mu(e){return uf(e)&&Ou(e)}function uf(e){for(let t of e.filters)if(t instanceof Tt)return!1;return!0}function Rs(e){if(e instanceof z)return e.field.canonicalString()+e.op.toString()+Se(e.value);if(Mu(e))return e.filters.map(t=>Rs(t)).join(",");{let t=e.filters.map(n=>Rs(n)).join(",");return`${e.op}(${t})`}}function Fu(e,t){return e instanceof z?function(r,i){return i instanceof z&&r.op===i.op&&r.field.isEqual(i.field)&&It(r.value,i.value)}(e,t):e instanceof Tt?function(r,i){return i instanceof Tt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Fu(o,i.filters[a]),!0):!1}(e,t):void E()}function Lu(e){return e instanceof z?function(n){return`${n.field.canonicalString()} ${n.op} ${Se(n.value)}`}(e):e instanceof Tt?function(n){return n.op.toString()+" {"+n.getFilters().map(Lu).join(" ,")+"}"}(e):"Filter"}var Ps=class extends z{constructor(t,n,r){super(t,n,r),this.key=v.fromName(r.referenceValue)}matches(t){let n=v.comparator(t.key,this.key);return this.matchesComparison(n)}},Ds=class extends z{constructor(t,n){super(t,"in",n),this.keys=Bu("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}},Cs=class extends z{constructor(t,n){super(t,"not-in",n),this.keys=Bu("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}};function Bu(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>v.fromName(r.referenceValue))}var xs=class extends z{constructor(t,n){super(t,"array-contains",n)}matches(t){let n=t.data.field(this.field);return Wo(n)&&En(n.arrayValue,this.value)}},Vs=class extends z{constructor(t,n){super(t,"in",n)}matches(t){let n=t.data.field(this.field);return n!==null&&En(this.value.arrayValue,n)}},Ns=class extends z{constructor(t,n){super(t,"not-in",n)}matches(t){if(En(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let n=t.data.field(this.field);return n!==null&&!En(this.value.arrayValue,n)}},ks=class extends z{constructor(t,n){super(t,"array-contains-any",n)}matches(t){let n=t.data.field(this.field);return!(!Wo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>En(this.value.arrayValue,r))}};var Os=class{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}};function fu(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Os(e,t,n,r,i,s,o)}function Ho(e){let t=S(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Rs(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Xr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Se(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Se(r)).join(",")),t.he=n}return t.he}function Jo(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!cf(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Fu(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!du(e.startAt,t.startAt)&&du(e.endAt,t.endAt)}function Ms(e){return v.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}var Re=class{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}};function lf(e,t,n,r,i,s,o,a){return new Re(e,t,n,r,i,s,o,a)}function Xo(e){return new Re(e)}function mu(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function hf(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function df(e){for(let t of e.filters){let n=t.getFirstInequalityField();if(n!==null)return n}return null}function ff(e){return e.collectionGroup!==null}function we(e){let t=S(e);if(t.Pe===null){t.Pe=[];let n=df(t),r=hf(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new Yt(n)),t.Pe.push(new Yt(ct.keyField(),"asc"));else{let i=!1;for(let s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){let s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Yt(ct.keyField(),s))}}}return t.Pe}function Ct(e){let t=S(e);if(!t.Ie)if(t.limitType==="F")t.Ie=fu(t.path,t.collectionGroup,we(t),t.filters,t.limit,t.startAt,t.endAt);else{let n=[];for(let s of we(t)){let o=s.dir==="desc"?"asc":"desc";n.push(new Yt(s.field,o))}let r=t.endAt?new be(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new be(t.startAt.position,t.startAt.inclusive):null;t.Ie=fu(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t.Ie}function Fs(e,t,n){return new Re(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Yr(e,t){return Jo(Ct(e),Ct(t))&&e.limitType===t.limitType}function qu(e){return`${Ho(Ct(e))}|lt:${e.limitType}`}function Ls(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Lu(i)).join(", ")}]`),Xr(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Se(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Se(i)).join(",")),`Target(${r})`}(Ct(e))}; limitType=${e.limitType})`}function Zr(e,t){return t.isFoundDocument()&&function(r,i){let s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):v.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(let s of we(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(let s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,c){let u=hu(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,we(r),i)||r.endAt&&!function(o,a,c){let u=hu(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,we(r),i))}(e,t)}function mf(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Uu(e){return(t,n)=>{let r=!1;for(let i of we(e)){let s=gf(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function gf(e,t,n){let r=e.field.isKeyField()?v.comparator(t.key,n.key):function(s,o,a){let c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?Ae(c,u):E()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return E()}}var qt=class{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){let n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(let[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){let r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){let n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Me(this.inner,(n,r)=>{for(let[i,s]of r)t(i,s)})}isEmpty(){return Vu(this.inner)}size(){return this.innerSize}};var pf=new B(v.comparator);function xt(){return pf}var Gu=new B(v.comparator);function mn(...e){let t=Gu;for(let n of e)t=t.insert(n.key,n);return t}function zu(e){let t=Gu;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Ht(){return pn()}function ju(){return pn()}function pn(){return new qt(e=>e.toString(),(e,t)=>e.isEqual(t))}var yf=new B(v.comparator),_f=new et(v.comparator);function P(...e){let t=_f;for(let n of e)t=t.add(n);return t}var wf=new et(x);function vf(){return wf}function $u(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wn(t)?"-0":t}}function Ku(e){return{integerValue:""+e}}function Ef(e,t){return nf(t)?Ku(t):$u(e,t)}var Pe=class{constructor(){this._=void 0}};function If(e,t,n){return e instanceof De?function(i,s){let o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ko(s)&&(s=Qo(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof re?Wu(e,t):e instanceof ie?Hu(e,t):function(i,s){let o=Qu(i,s),a=gu(o)+gu(i.Te);return bs(o)&&bs(i.Te)?Ku(a):$u(i.serializer,a)}(e,t)}function Tf(e,t,n){return e instanceof re?Wu(e,t):e instanceof ie?Hu(e,t):n}function Qu(e,t){return e instanceof Ce?function(r){return bs(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}var De=class extends Pe{},re=class extends Pe{constructor(t){super(),this.elements=t}};function Wu(e,t){let n=Ju(t);for(let r of e.elements)n.some(i=>It(i,r))||n.push(r);return{arrayValue:{values:n}}}var ie=class extends Pe{constructor(t){super(),this.elements=t}};function Hu(e,t){let n=Ju(t);for(let r of e.elements)n=n.filter(i=>!It(i,r));return{arrayValue:{values:n}}}var Ce=class extends Pe{constructor(t,n){super(),this.serializer=t,this.Te=n}};function gu(e){return F(e.integerValue||e.doubleValue)}function Ju(e){return Wo(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Af(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof re&&i instanceof re||r instanceof ie&&i instanceof ie?Te(r.elements,i.elements,It):r instanceof Ce&&i instanceof Ce?It(r.Te,i.Te):r instanceof De&&i instanceof De}(e.transform,t.transform)}var Bs=class{constructor(t,n){this.version=t,this.transformResults=n}},Zt=class e{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new e}static exists(t){return new e(void 0,t)}static updateTime(t){return new e(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}};function yr(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}var xe=class{};function Xu(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Sr(e.key,Zt.none()):new se(e.key,e.data,Zt.none());{let n=e.data,r=ht.empty(),i=new et(ct.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Vt(e.key,r,new wt(i.toArray()),Zt.none())}}function Sf(e,t,n){e instanceof se?function(i,s,o){let a=i.value.clone(),c=yu(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Vt?function(i,s,o){if(!yr(i.precondition,s))return void s.convertToUnknownDocument(o.version);let a=yu(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Yu(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function yn(e,t,n,r){return e instanceof se?function(s,o,a,c){if(!yr(s.precondition,o))return a;let u=s.value.clone(),l=_u(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof Vt?function(s,o,a,c){if(!yr(s.precondition,o))return a;let u=_u(s.fieldTransforms,c,o),l=o.data;return l.setAll(Yu(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return yr(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function bf(e,t){let n=null;for(let r of e.fieldTransforms){let i=t.data.field(r.field),s=Qu(r.transform,i||null);s!=null&&(n===null&&(n=ht.empty()),n.set(r.field,s))}return n||null}function pu(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Te(r,i,(s,o)=>Af(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}var se=class extends xe{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},Vt=class extends xe{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function Yu(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function yu(e,t,n){let r=new Map;O(e.length===n.length);for(let i=0;i<n.length;i++){let s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Tf(o,a,n[i]))}return r}function _u(e,t,n){let r=new Map;for(let i of e){let s=i.transform,o=n.data.field(i.field);r.set(i.field,If(s,o,t))}return r}var Sr=class extends xe{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},qs=class extends xe{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var Us=class{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){let r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){let s=this.mutations[i];s.key.isEqual(t.key)&&Sf(s,t,r[i])}}applyToLocalView(t,n){for(let r of this.baseMutations)r.key.isEqual(t.key)&&(n=yn(r,t,n,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(t.key)&&(n=yn(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){let r=ju();return this.mutations.forEach(i=>{let s=t.get(i.key),o=s.overlayedDocument,a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;let c=Xu(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(A.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),P())}isEqual(t){return this.batchId===t.batchId&&Te(this.mutations,t.mutations,(n,r)=>pu(n,r))&&Te(this.baseMutations,t.baseMutations,(n,r)=>pu(n,r))}},Gs=class e{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){O(t.mutations.length===r.length);let i=function(){return yf}(),s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new e(t,n,r,i)}};var zs=class{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var js=class{constructor(t,n){this.count=t,this.unchangedNames=n}};var q,D;function Rf(e){switch(e){default:return E();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Zu(e){if(e===void 0)return Dt("GRPC error has no .code"),f.UNKNOWN;switch(e){case q.OK:return f.OK;case q.CANCELLED:return f.CANCELLED;case q.UNKNOWN:return f.UNKNOWN;case q.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case q.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case q.INTERNAL:return f.INTERNAL;case q.UNAVAILABLE:return f.UNAVAILABLE;case q.UNAUTHENTICATED:return f.UNAUTHENTICATED;case q.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case q.NOT_FOUND:return f.NOT_FOUND;case q.ALREADY_EXISTS:return f.ALREADY_EXISTS;case q.PERMISSION_DENIED:return f.PERMISSION_DENIED;case q.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case q.ABORTED:return f.ABORTED;case q.OUT_OF_RANGE:return f.OUT_OF_RANGE;case q.UNIMPLEMENTED:return f.UNIMPLEMENTED;case q.DATA_LOSS:return f.DATA_LOSS;default:return E()}}(D=q||(q={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";var $s=class e{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return mr}static getOrCreateInstance(){return mr===null&&(mr=new e),mr}onExistenceFilterMismatch(t){let n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}},mr=null;function Pf(){return new TextEncoder}var Df=new Wt([4294967295,4294967295],0);function wu(e){let t=Pf().encode(e),n=new iu;return n.update(t),new Uint8Array(n.digest())}function vu(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Wt([n,r],0),new Wt([i,s],0)]}var Ks=class e{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Jt(`Invalid padding: ${n}`);if(r<0)throw new Jt(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Jt(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Jt(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*t.length-n,this.Ae=Wt.fromNumber(this.de)}Re(t,n,r){let i=t.add(n.multiply(Wt.fromNumber(r)));return i.compare(Df)===1&&(i=new Wt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.de===0)return!1;let n=wu(t),[r,i]=vu(n);for(let s=0;s<this.hashCount;s++){let o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(t,n,r){let i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new e(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.de===0)return;let n=wu(t),[r,i]=vu(n);for(let s=0;s<this.hashCount;s++){let o=this.Re(r,i,s);this.me(o)}}me(t){let n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}},Jt=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var br=class e{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){let i=new Map;return i.set(t,In.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new e(A.min(),i,new B(x),xt(),P())}},In=class e{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new e(r,n,P(),P(),P())}};var ve=class{constructor(t,n,r,i){this.fe=t,this.removedTargetIds=n,this.key=r,this.ge=i}},Rr=class{constructor(t,n){this.targetId=t,this.pe=n}},Pr=class{constructor(t,n,r=nt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}},Dr=class{constructor(){this.ye=0,this.we=Iu(),this.Se=nt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=P(),n=P(),r=P();return this.we.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:E()}}),new In(this.Se,this.be,t,n,r)}xe(){this.De=!1,this.we=Iu()}Oe(t,n){this.De=!0,this.we=this.we.insert(t,n)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}},Qs=class{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=xt(),this.$e=Eu(),this.Ue=new B(x)}We(t){for(let n of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(n,t.ge):this.ze(n,t.key,t.ge);for(let n of t.removedTargetIds)this.ze(n,t.key,t.ge)}je(t){this.forEachTarget(t,n=>{let r=this.He(n);switch(t.state){case 0:this.Je(n)&&r.Fe(t.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(t.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(t.resumeToken));break;default:E()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(t){var n,r;let i=t.targetId,s=t.pe.count,o=this.Xe(i);if(o){let a=o.target;if(Ms(a))if(s===0){let c=new v(a.path);this.ze(i,c,ft.newNoDocument(c,A.min()))}else O(s===1);else{let c=this.et(i);if(c!==s){let u=this.tt(t,c);if(u.status!==0){this.Ye(i);let l=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,l)}(n=$s.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,m,b){var R,I,N,G,Q,rt;let At={localCacheCount:m,existenceFilterCount:b.count},it=b.unchangedNames;return it&&(At.bloomFilter={applied:h===0,hashCount:(R=it==null?void 0:it.hashCount)!==null&&R!==void 0?R:0,bitmapLength:(G=(N=(I=it==null?void 0:it.bits)===null||I===void 0?void 0:I.bitmap)===null||N===void 0?void 0:N.length)!==null&&G!==void 0?G:0,padding:(rt=(Q=it==null?void 0:it.bits)===null||Q===void 0?void 0:Q.padding)!==null&&rt!==void 0?rt:0},d&&(At.bloomFilter.mightContain=d)),At}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,c,t.pe))}}}}tt(t,n){let{unchangedNames:r,count:i}=t.pe;if(!r||!r.bits)return{status:1};let{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r,c,u;try{c=Bt(s).toUint8Array()}catch(h){if(h instanceof Ir)return Ie("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new Ks(c,o,a)}catch(h){return Ie(h instanceof Jt?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}let l=h=>{let d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===n-this.it(t.targetId,l)?0:2,nt:l}}it(t,n){let r=this.qe.getRemoteKeysForTarget(t),i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(t,s,null),i++)}),i}st(t){let n=new Map;this.Qe.forEach((s,o)=>{let a=this.Xe(o);if(a){if(s.current&&Ms(a.target)){let c=new v(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,ft.newNoDocument(c,t))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=P();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{let u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(t));let i=new br(t,n,this.Ue,this.Ke,r);return this.Ke=xt(),this.$e=Eu(),this.Ue=new B(x),i}Ge(t,n){if(!this.Je(t))return;let r=this.ot(t,n.key)?2:0;this.He(t).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t))}ze(t,n,r){if(!this.Je(t))return;let i=this.He(t);this.ot(t,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(t)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(t){this.Qe.delete(t)}et(t){let n=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let n=this.Qe.get(t);return n||(n=new Dr,this.Qe.set(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new et(x),this.$e=this.$e.insert(t,n)),n}Je(t){let n=this.Xe(t)!==null;return n||_("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){let n=this.Qe.get(t);return n&&n.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new Dr),this.qe.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ot(t,n){return this.qe.getRemoteKeysForTarget(t).has(n)}};function Eu(){return new B(v.comparator)}function Iu(){return new B(v.comparator)}var Cf=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),xf=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Vf=(()=>({and:"AND",or:"OR"}))(),Ws=class{constructor(t,n){this.databaseId=t,this.useProto3Json=n}};function Hs(e,t){return e.useProto3Json||Xr(t)?t:{value:t}}function Cr(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function tl(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Nf(e,t){return Cr(e,t.toTimestamp())}function Et(e){return O(!!e),A.fromTimestamp(function(n){let r=Lt(n);return new J(r.seconds,r.nanos)}(e))}function Yo(e,t){return function(r){return new L(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function el(e){let t=L.fromString(e);return O(sl(t)),t}function Js(e,t){return Yo(e.databaseId,t.path)}function hs(e,t){let n=el(t);if(n.get(1)!==e.databaseId.projectId)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new v(nl(n))}function Xs(e,t){return Yo(e.databaseId,t)}function kf(e){let t=el(e);return t.length===4?L.emptyPath():nl(t)}function Ys(e){return new L(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function nl(e){return O(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Tu(e,t,n){return{name:Js(e,t),fields:n.value.mapValue.fields}}function Of(e,t){let n;if("targetChange"in t){t.targetChange;let r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:E()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(O(l===void 0||typeof l=="string"),nt.fromBase64String(l||"")):(O(l===void 0||l instanceof Uint8Array),nt.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){let l=u.code===void 0?f.UNKNOWN:Zu(u.code);return new w(l,u.message||"")}(o);n=new Pr(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=hs(e,r.document.name),s=Et(r.document.updateTime),o=r.document.createTime?Et(r.document.createTime):A.min(),a=new ht({mapValue:{fields:r.document.fields}}),c=ft.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new ve(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=hs(e,r.document),s=r.readTime?Et(r.readTime):A.min(),o=ft.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ve([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=hs(e,r.document),s=r.removedTargetIds||[];n=new ve([],s,i,null)}else{if(!("filter"in t))return E();{t.filter;let r=t.filter;r.targetId;let{count:i=0,unchangedNames:s}=r,o=new js(i,s),a=r.targetId;n=new Rr(a,o)}}return n}function Mf(e,t){let n;if(t instanceof se)n={update:Tu(e,t.key,t.value)};else if(t instanceof Sr)n={delete:Js(e,t.key)};else if(t instanceof Vt)n={update:Tu(e,t.key,t.data),updateMask:$f(t.fieldMask)};else{if(!(t instanceof qs))return E();n={verify:Js(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){let a=o.transform;if(a instanceof De)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof re)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ie)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ce)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw E()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Nf(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:E()}(e,t.precondition)),n}function Ff(e,t){return e&&e.length>0?(O(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?Et(i.updateTime):Et(s);return o.isEqual(A.min())&&(o=Et(s)),new Bs(o,i.transformResults||[])}(n,t))):[]}function Lf(e,t){return{documents:[Xs(e,t.path)]}}function Bf(e,t){let n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Xs(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Xs(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);let i=function(c){if(c.length!==0)return il(Tt.create(c,"and"))}(t.filters);i&&(n.structuredQuery.where=i);let s=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:pe(h.field),direction:Gf(h.dir)}}(u))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);let o=Hs(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function qf(e){let t=kf(e.parent),n=e.structuredQuery,r=n.from?n.from.length:0,i=null;if(r>0){O(r===1);let l=n.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let s=[];n.where&&(s=function(h){let d=rl(h);return d instanceof Tt&&Mu(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(b){return new Yt(ye(b.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Xr(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){let d=!!h.before,m=h.values||[];return new be(m,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){let d=!h.before,m=h.values||[];return new be(m,d)}(n.endAt)),lf(t,i,o,s,a,"F",c,u)}function Uf(e,t){let n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return E()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function rl(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":let r=ye(n.unaryFilter.field);return z.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=ye(n.unaryFilter.field);return z.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=ye(n.unaryFilter.field);return z.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let o=ye(n.unaryFilter.field);return z.create(o,"!=",{nullValue:"NULL_VALUE"});default:return E()}}(e):e.fieldFilter!==void 0?function(n){return z.create(ye(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return E()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Tt.create(n.compositeFilter.filters.map(r=>rl(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return E()}}(n.compositeFilter.op))}(e):E()}function Gf(e){return Cf[e]}function zf(e){return xf[e]}function jf(e){return Vf[e]}function pe(e){return{fieldPath:e.canonicalString()}}function ye(e){return ct.fromServerFormat(e.fieldPath)}function il(e){return e instanceof z?function(n){if(n.op==="=="){if(lu(n.value))return{unaryFilter:{field:pe(n.field),op:"IS_NAN"}};if(uu(n.value))return{unaryFilter:{field:pe(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(lu(n.value))return{unaryFilter:{field:pe(n.field),op:"IS_NOT_NAN"}};if(uu(n.value))return{unaryFilter:{field:pe(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pe(n.field),op:zf(n.op),value:n.value}}}(e):e instanceof Tt?function(n){let r=n.getFilters().map(i=>il(i));return r.length===1?r[0]:{compositeFilter:{op:jf(n.op),filters:r}}}(e):E()}function $f(e){let t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function sl(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}var Tn=class e{constructor(t,n,r,i,s=A.min(),o=A.min(),a=nt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new e(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new e(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}};var Zs=class{constructor(t){this.ct=t}};function Kf(e){let t=qf({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Fs(t,t.limit,"L"):t}var xr=class{constructor(){}Pt(t,n){this.It(t,n),n.Tt()}It(t,n){if("nullValue"in t)this.Et(n,5);else if("booleanValue"in t)this.Et(n,10),n.dt(t.booleanValue?1:0);else if("integerValue"in t)this.Et(n,15),n.dt(F(t.integerValue));else if("doubleValue"in t){let r=F(t.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),wn(r)?n.dt(0):n.dt(r))}else if("timestampValue"in t){let r=t.timestampValue;this.Et(n,20),typeof r=="string"?n.At(r):(n.At(`${r.seconds||""}`),n.dt(r.nanos||0))}else if("stringValue"in t)this.Rt(t.stringValue,n),this.Vt(n);else if("bytesValue"in t)this.Et(n,30),n.ft(Bt(t.bytesValue)),this.Vt(n);else if("referenceValue"in t)this.gt(t.referenceValue,n);else if("geoPointValue"in t){let r=t.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in t?Nu(t)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(t.mapValue,n),this.Vt(n)):"arrayValue"in t?(this.wt(t.arrayValue,n),this.Vt(n)):E()}Rt(t,n){this.Et(n,25),this.St(t,n)}St(t,n){n.At(t)}yt(t,n){let r=t.fields||{};this.Et(n,55);for(let i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(t,n){let r=t.values||[];this.Et(n,50);for(let i of r)this.It(i,n)}gt(t,n){this.Et(n,37),v.fromName(t).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(t,n){t.dt(n)}Vt(t){t.dt(2)}};xr.bt=new xr;var to=class{constructor(){this.sn=new eo}addToCollectionParentIndex(t,n){return this.sn.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(ee.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(ee.min())}updateCollectionGroup(t,n,r){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}},eo=class{constructor(){this.index={}}add(t){let n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new et(L.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){let n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new et(L.comparator)).toArray()}};var kg=new Uint8Array(0);var _t=class e{constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(t){return new e(t,e.DEFAULT_COLLECTION_PERCENTILE,e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}};_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(41943040,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);var An=class e{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new e(0)}static On(){return new e(-1)}};var no=class{constructor(){this.changes=new qt(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ft.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();let r=this.changes.get(n);return r!==void 0?g.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}};var ro=class{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}};var io=class{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&yn(r.mutation,i,wt.empty(),J.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,P()).next(()=>r))}getLocalViewOfDocuments(t,n,r=P()){let i=Ht();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=mn();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){let r=Ht();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,P()))}populateOverlays(t,n,r){let i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=xt(),o=pn(),a=function(){return pn()}();return n.forEach((c,u)=>{let l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof Vt)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),yn(l.mutation,u,l.mutation.getFieldMask(),J.now())):o.set(u.key,wt.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new ro(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){let r=pn(),i=new B((o,a)=>o-a),s=P();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(let a of o)a.keys().forEach(c=>{let u=n.get(c);if(u===null)return;let l=r.get(c)||wt.empty();l=a.applyToLocalView(u,l),r.set(c,l);let h=(i.get(a.batchId)||P()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{let o=[],a=i.getReverseIterator();for(;a.hasNext();){let c=a.getNext(),u=c.key,l=c.value,h=ju();l.forEach(d=>{if(!s.has(d)){let m=Xu(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return g.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(s){return v.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):ff(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{let o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):g.resolve(Ht()),a=-1,c=s;return o.next(u=>g.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?g.resolve():this.remoteDocumentCache.getEntry(t,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,c,u,P())).next(l=>({batchId:a,changes:zu(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new v(n)).next(r=>{let i=mn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){let i=n.collectionGroup,s=mn();return this.indexManager.getCollectionParents(t,i).next(o=>g.forEach(o,a=>{let c=function(l,h){return new Re(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,c)=>{let u=c.getKey();s.get(u)===null&&(s=s.insert(u,ft.newInvalidDocument(u)))});let o=mn();return s.forEach((a,c)=>{let u=i.get(a);u!==void 0&&yn(u.mutation,c,wt.empty(),J.now()),Zr(n,c)&&(o=o.insert(a,c))}),o})}};var so=class{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,n){return g.resolve(this.ar.get(n))}saveBundleMetadata(t,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Et(i.createTime)}}(n)),g.resolve()}getNamedQuery(t,n){return g.resolve(this.ur.get(n))}saveNamedQuery(t,n){return this.ur.set(n.name,function(i){return{name:i.name,query:Kf(i.bundledQuery),readTime:Et(i.readTime)}}(n)),g.resolve()}};var oo=class{constructor(){this.overlays=new B(v.comparator),this.cr=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){let r=Ht();return g.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ht(t,n,s)}),g.resolve()}removeOverlaysForBatchId(t,n,r){let i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),g.resolve()}getOverlaysForCollection(t,n,r){let i=Ht(),s=n.length+1,o=new v(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){let c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return g.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new B((u,l)=>u-l),o=this.overlays.getIterator();for(;o.hasNext();){let u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=Ht(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}let a=Ht(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return g.resolve(a)}ht(t,n,r){let i=this.overlays.get(r.key);if(i!==null){let o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zs(n,r));let s=this.cr.get(n);s===void 0&&(s=P(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}};var Sn=class{constructor(){this.lr=new et(U.hr),this.Pr=new et(U.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,n){let r=new U(t,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Er(new U(t,n))}dr(t,n){t.forEach(r=>this.removeReference(r,n))}Ar(t){let n=new v(new L([])),r=new U(n,t),i=new U(n,t+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(t=>this.Er(t))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){let n=new v(new L([])),r=new U(n,t),i=new U(n,t+1),s=P();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){let n=new U(t,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}},U=class{constructor(t,n){this.key=t,this.mr=n}static hr(t,n){return v.comparator(t.key,n.key)||x(t.mr,n.mr)}static Ir(t,n){return x(t.mr,n.mr)||v.comparator(t.key,n.key)}};var ao=class{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new et(U.hr)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){let s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let o=new Us(s,n,r,i);this.mutationQueue.push(o);for(let a of i)this.pr=this.pr.add(new U(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(t,n){let r=n+1,i=this.wr(r),s=i<0?0:i;return g.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){let r=new U(n,0),i=new U(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{let a=this.yr(o.mr);s.push(a)}),g.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new et(x);return n.forEach(i=>{let s=new U(i,0),o=new U(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),g.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(t,n){let r=n.path,i=r.length+1,s=r;v.isDocumentKey(s)||(s=s.child(""));let o=new U(new v(s),0),a=new et(x);return this.pr.forEachWhile(c=>{let u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.mr)),!0)},o),g.resolve(this.Sr(a))}Sr(t){let n=[];return t.forEach(r=>{let i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){O(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return g.forEach(n.mutations,i=>{let s=new U(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.pr=r})}Cn(t){}containsKey(t,n){let r=new U(n,0),i=this.pr.firstAfterOrEqual(r);return g.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}br(t,n){return this.wr(t)}wr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yr(t){let n=this.wr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}};var co=class{constructor(t){this.Dr=t,this.docs=function(){return new B(v.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){let r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){let n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){let r=this.docs.get(n);return g.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(t,n){let r=xt();return n.forEach(i=>{let s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ft.newInvalidDocument(i))}),g.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=xt(),o=n.path,a=new v(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){let{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||tf(Zd(l),r)<=0||(i.has(l.key)||Zr(n,l))&&(s=s.insert(l.key,l.mutableCopy()))}return g.resolve(s)}getAllFromCollectionGroup(t,n,r,i){E()}vr(t,n){return g.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new uo(this)}getSize(t){return g.resolve(this.size)}},uo=class extends no{constructor(t){super(),this.sr=t}applyChanges(t){let n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(t,i)):this.sr.removeEntry(r)}),g.waitFor(n)}getFromCache(t,n){return this.sr.getEntry(t,n)}getAllFromCache(t,n){return this.sr.getEntries(t,n)}};var lo=class{constructor(t){this.persistence=t,this.Cr=new qt(n=>Ho(n),Jo),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Sn,this.targetCount=0,this.Or=An.xn()}forEachTarget(t,n){return this.Cr.forEach((r,i)=>n(i)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),g.resolve()}Ln(t){this.Cr.set(t.target,t);let n=t.targetId;n>this.highestTargetId&&(this.Or=new An(n),this.highestTargetId=n),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,n){return this.Ln(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.Ln(n),g.resolve()}removeTargetData(t,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,r){let i=0,s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),g.waitFor(s).next(()=>i)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){let r=this.Cr.get(n)||null;return g.resolve(r)}addMatchingKeys(t,n,r){return this.Mr.Tr(n,r),g.resolve()}removeMatchingKeys(t,n,r){this.Mr.dr(n,r);let i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),g.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Mr.Ar(n),g.resolve()}getMatchingKeysForTargetId(t,n){let r=this.Mr.Vr(n);return g.resolve(r)}containsKey(t,n){return g.resolve(this.Mr.containsKey(n))}};var ho=class{constructor(t,n){this.Nr={},this.overlays={},this.Br=new _n(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new lo(this),this.indexManager=new to,this.remoteDocumentCache=function(i){return new co(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new Zs(n),this.Qr=new so(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new oo,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Nr[t.toKey()];return r||(r=new ao(n,this.referenceDelegate),this.Nr[t.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,n,r){_("MemoryPersistence","Starting transaction:",t);let i=new fo(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(t,n){return g.or(Object.values(this.Nr).map(r=>()=>r.containsKey(t,n)))}},fo=class extends Ts{constructor(t){super(),this.currentSequenceNumber=t}},mo=class e{constructor(t){this.persistence=t,this.Wr=new Sn,this.Gr=null}static zr(t){return new e(t)}get jr(){if(this.Gr)return this.Gr;throw E()}addReference(t,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),g.resolve()}removeReference(t,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.jr.add(n.toString()),g.resolve()}removeTarget(t,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Kr(){this.Gr=new Set}$r(t){let n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.jr,r=>{let i=v.fromPath(r);return this.Hr(t,i).next(s=>{s||n.removeEntry(i,A.min())})}).next(()=>(this.Gr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hr(t,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(t){return 0}Hr(t,n){return g.or([()=>g.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ur(t,n)])}};var go=class e{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.Li=r,this.ki=i}static qi(t,n){let r=P(),i=P();for(let s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new e(t,n.fromCache,r,i)}};var po=class{constructor(){this.Qi=!1}initialize(t,n){this.Ki=t,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(t,n,r,i){return this.$i(t,n).next(s=>s||this.Ui(t,n,i,r)).next(s=>s||this.Wi(t,n))}$i(t,n){if(mu(n))return g.resolve(null);let r=Ct(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Fs(n,null,"F"),r=Ct(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{let o=P(...s);return this.Ki.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{let u=this.Gi(n,a);return this.zi(n,u,o,c.readTime)?this.$i(t,Fs(n,null,"F")):this.ji(t,u,n,c)}))})))}Ui(t,n,r,i){return mu(n)||i.isEqual(A.min())?this.Wi(t,n):this.Ki.getDocuments(t,r).next(s=>{let o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(t,n):(ou()<=C.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ls(n)),this.ji(t,o,n,Yd(i,-1)))})}Gi(t,n){let r=new et(Uu(t));return n.forEach((i,s)=>{Zr(t,s)&&(r=r.add(s))}),r}zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;let s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(t,n){return ou()<=C.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",Ls(n)),this.Ki.getDocumentsMatchingQuery(t,n,ee.min())}ji(t,n,r,i){return this.Ki.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}};var yo=class{constructor(t,n,r,i){this.persistence=t,this.Hi=n,this.serializer=i,this.Ji=new B(x),this.Yi=new qt(s=>Ho(s),Jo),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(r)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new io(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}};function Qf(e,t,n,r){return new yo(e,t,n,r)}function ol(e,t){return y(this,null,function*(){let n=S(e);return yield n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{let o=[],a=[],c=P();for(let u of i){o.push(u.batchId);for(let l of u.mutations)c=c.add(l.key)}for(let u of s){a.push(u.batchId);for(let l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})})}function Wf(e,t){let n=S(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=t.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){let h=u.batch,d=h.keys(),m=g.resolve();return d.forEach(b=>{m=m.next(()=>l.getEntry(c,b)).next(R=>{let I=u.docVersions.get(b);O(I!==null),R.version.compareTo(I)<0&&(h.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),l.addEntry(R)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=P();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function al(e){let t=S(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.kr.getLastRemoteSnapshotVersion(n))}function Hf(e,t){let n=S(e),r=t.snapshotVersion,i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{let o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;let a=[];t.targetChanges.forEach((l,h)=>{let d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,l.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?m=m.withResumeToken(nt.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):l.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(l.resumeToken,r)),i=i.insert(h,m),function(R,I,N){return R.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(d,m,l)&&a.push(n.kr.updateTargetData(s,m))});let c=xt(),u=P();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(Jf(s,o,t.documentUpdates).next(l=>{c=l.ns,u=l.rs})),!r.isEqual(A.min())){let l=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return g.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.Ji=i,s))}function Jf(e,t,n){let r=P(),i=P();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=xt();return n.forEach((a,c)=>{let u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(A.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ns:o,rs:i}})}function Xf(e,t){let n=S(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Yf(e,t){let n=S(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,t).next(s=>s?(i=s,g.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new Tn(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(t,r.targetId)),r})}function _o(e,t,n){return y(this,null,function*(){let r=S(e),i=r.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||(yield r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!Cn(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)})}function Au(e,t,n){let r=S(e),i=A.min(),s=P();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,u,l){let h=S(c),d=h.Yi.get(l);return d!==void 0?g.resolve(h.Ji.get(d)):h.kr.getTargetData(u,l)}(r,o,Ct(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,t,n?i:A.min(),n?s:P())).next(a=>(Zf(r,mf(t),a),{documents:a,ss:s})))}function Zf(e,t,n){let r=e.Zi.get(t)||A.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.Zi.set(t,r)}var Vr=class{constructor(){this.activeTargetIds=vf()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){let t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}};var wo=class{constructor(){this.Hs=new Vr,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,n,r){this.Js[t]=n}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new Vr,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}};var vo=class{Ys(t){}shutdown(){}};var Nr=class{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(let t of this.ro)t(0)}no(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(let t of this.ro)t(1)}static v(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var gr=null;function ds(){return gr===null?gr=function(){return 268435456+Math.round(2147483648*Math.random())}():gr++,"0x"+gr.toString(16)}var tm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var Eo=class{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}};var Z="WebChannelConnection",Io=class extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;let r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){let a=ds(),c=this.mo(n,r);_("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);let u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(n,c,u,i).then(l=>(_("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw Ie("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Oe}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){let i=tm[n];return`${this.To}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,n,r,i){let s=ds();return new Promise((o,a)=>{let c=new ru;c.setWithCredentials(!0),c.listenOnce(tu.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case dr.NO_ERROR:let l=c.getResponseJson();_(Z,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(l)),o(l);break;case dr.TIMEOUT:_(Z,`RPC '${t}' ${s} timed out`),a(new w(f.DEADLINE_EXCEEDED,"Request time out"));break;case dr.HTTP_ERROR:let h=c.getStatus();if(_(Z,`RPC '${t}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);let m=d==null?void 0:d.error;if(m&&m.status&&m.message){let b=function(I){let N=I.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(N)>=0?N:f.UNKNOWN}(m.status);a(new w(b,m.message))}else a(new w(f.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new w(f.UNAVAILABLE,"Connection failed."));break;default:E()}}finally{_(Z,`RPC '${t}' ${s} completed.`)}});let u=JSON.stringify(i);_(Z,`RPC '${t}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}wo(t,n,r){let i=ds(),s=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Yc(),a=Zc(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new nu({})),this.fo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;let l=s.join("");_(Z,`Creating RPC '${t}' stream ${i}: ${l}`,c);let h=o.createWebChannel(l,c),d=!1,m=!1,b=new Eo({so:I=>{m?_(Z,`Not sending because RPC '${t}' stream ${i} is closed:`,I):(d||(_(Z,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),_(Z,`RPC '${t}' stream ${i} sending:`,I),h.send(I))},oo:()=>h.close()}),R=(I,N,G)=>{I.listen(N,Q=>{try{G(Q)}catch(rt){setTimeout(()=>{throw rt},0)}})};return R(h,fn.EventType.OPEN,()=>{m||_(Z,`RPC '${t}' stream ${i} transport opened.`)}),R(h,fn.EventType.CLOSE,()=>{m||(m=!0,_(Z,`RPC '${t}' stream ${i} transport closed`),b.Po())}),R(h,fn.EventType.ERROR,I=>{m||(m=!0,Ie(Z,`RPC '${t}' stream ${i} transport errored:`,I),b.Po(new w(f.UNAVAILABLE,"The operation could not be completed")))}),R(h,fn.EventType.MESSAGE,I=>{var N;if(!m){let G=I.data[0];O(!!G);let Q=G,rt=Q.error||((N=Q[0])===null||N===void 0?void 0:N.error);if(rt){_(Z,`RPC '${t}' stream ${i} received error:`,rt);let At=rt.status,it=function(Fl){let ha=q[Fl];if(ha!==void 0)return Zu(ha)}(At),la=rt.message;it===void 0&&(it=f.INTERNAL,la="Unknown error status: "+At+" with message "+rt.message),m=!0,b.Po(new w(it,la)),h.close()}else _(Z,`RPC '${t}' stream ${i} received:`,G),b.Io(G)}}),R(a,eu.STAT_EVENT,I=>{I.stat===ls.PROXY?_(Z,`RPC '${t}' stream ${i} detected buffering proxy`):I.stat===ls.NOPROXY&&_(Z,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{b.ho()},0),b}};function fs(){return typeof document!="undefined"?document:null}function ti(e){return new Ws(e,!0)}var kr=class{constructor(t,n,r=1e3,i=1.5,s=6e4){this.ii=t,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();let n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),t())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}};var Or=class{constructor(t,n,r,i,s,o,a,c){this.ii=t,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new kr(t,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}stop(){return y(this,null,function*(){this.$o()&&(yield this.close(0))})}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(t){this.Jo(),this.stream.send(t)}jo(){return y(this,null,function*(){if(this.Uo())return this.close(0)})}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}close(t,n){return y(this,null,function*(){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,t!==4?this.Ko.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(Dt(n.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,yield this.listener.uo(n)})}Zo(){}auth(){this.state=1;let t=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{t(()=>{let i=new w(f.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(t,n){let r=this.Xo(this.ko);this.stream=this.n_(t,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(()=>y(this,null,function*(){this.state=0,this.start()}))}t_(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.ko===t?n():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},To=class extends Or{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.Ko.reset();let n=Of(this.serializer,t),r=function(s){if(!("targetChange"in s))return A.min();let o=s.targetChange;return o.targetIds&&o.targetIds.length?A.min():o.readTime?Et(o.readTime):A.min()}(t);return this.listener.r_(n,r)}i_(t){let n={};n.database=Ys(this.serializer),n.addTarget=function(s,o){let a,c=o.target;if(a=Ms(c)?{documents:Lf(s,c)}:{query:Bf(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=tl(s,o.resumeToken);let u=Hs(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(A.min())>0){a.readTime=Cr(s,o.snapshotVersion.toTimestamp());let u=Hs(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);let r=Uf(this.serializer,t);r&&(n.labels=r),this.Ho(n)}s_(t){let n={};n.database=Ys(this.serializer),n.removeTarget=t,this.Ho(n)}},Ao=class extends Or{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(O(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();let n=Ff(t.writeResults,t.commitTime),r=Et(t.commitTime);return this.listener.u_(r,n)}return O(!t.writeResults||t.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){let t={};t.database=Ys(this.serializer),this.Ho(t)}a_(t){let n={streamToken:this.lastStreamToken,writes:t.map(r=>Mf(this.serializer,r))};this.Ho(n)}};var So=class extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}yo(t,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new w(f.UNKNOWN,s.toString())})}terminate(){this.h_=!0}};var bo=class{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(t){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,t==="Online"&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){let n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Dt(n),this.d_=!1):_("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}};var Ro=class{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(()=>y(this,null,function*(){ae(this)&&(_("RemoteStore","Restarting streams for network reachability change."),yield function(c){return y(this,null,function*(){let u=S(c);u.y_.add(4),yield xn(u),u.b_.set("Unknown"),u.y_.delete(4),yield ei(u)})}(this))}))}),this.b_=new bo(r,i)}};function ei(e){return y(this,null,function*(){if(ae(e))for(let t of e.w_)yield t(!0)})}function xn(e){return y(this,null,function*(){for(let t of e.w_)yield t(!1)})}function cl(e,t){let n=S(e);n.p_.has(t.targetId)||(n.p_.set(t.targetId,t),ea(n)?ta(n):Fe(n).Uo()&&Zo(n,t))}function ul(e,t){let n=S(e),r=Fe(n);n.p_.delete(t),r.Uo()&&ll(n,t),n.p_.size===0&&(r.Uo()?r.zo():ae(n)&&n.b_.set("Unknown"))}function Zo(e,t){if(e.D_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(A.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Fe(e).i_(t)}function ll(e,t){e.D_.Be(t),Fe(e).s_(t)}function ta(e){e.D_=new Qs({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.p_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),Fe(e).start(),e.b_.A_()}function ea(e){return ae(e)&&!Fe(e).$o()&&e.p_.size>0}function ae(e){return S(e).y_.size===0}function hl(e){e.D_=void 0}function em(e){return y(this,null,function*(){e.p_.forEach((t,n)=>{Zo(e,t)})})}function nm(e,t){return y(this,null,function*(){hl(e),ea(e)?(e.b_.m_(t),ta(e)):e.b_.set("Unknown")})}function rm(e,t,n){return y(this,null,function*(){if(e.b_.set("Online"),t instanceof Pr&&t.state===2&&t.cause)try{yield function(i,s){return y(this,null,function*(){let o=s.cause;for(let a of s.targetIds)i.p_.has(a)&&(yield i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))})}(e,t)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),yield Mr(e,r)}else if(t instanceof ve?e.D_.We(t):t instanceof Rr?e.D_.Ze(t):e.D_.je(t),!n.isEqual(A.min()))try{let r=yield al(e.localStore);n.compareTo(r)>=0&&(yield function(s,o){let a=s.D_.st(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){let l=s.p_.get(u);l&&s.p_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{let l=s.p_.get(c);if(!l)return;s.p_.set(c,l.withResumeToken(nt.EMPTY_BYTE_STRING,l.snapshotVersion)),ll(s,c);let h=new Tn(l.target,c,u,l.sequenceNumber);Zo(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n))}catch(r){_("RemoteStore","Failed to raise snapshot:",r),yield Mr(e,r)}})}function Mr(e,t,n){return y(this,null,function*(){if(!Cn(t))throw t;e.y_.add(1),yield xn(e),e.b_.set("Offline"),n||(n=()=>al(e.localStore)),e.asyncQueue.enqueueRetryable(()=>y(this,null,function*(){_("RemoteStore","Retrying IndexedDB access"),yield n(),e.y_.delete(1),yield ei(e)}))})}function dl(e,t){return t().catch(n=>Mr(e,n,t))}function ni(e){return y(this,null,function*(){let t=S(e),n=Ut(t),r=t.g_.length>0?t.g_[t.g_.length-1].batchId:-1;for(;im(t);)try{let i=yield Xf(t.localStore,r);if(i===null){t.g_.length===0&&n.zo();break}r=i.batchId,sm(t,i)}catch(i){yield Mr(t,i)}fl(t)&&ml(t)})}function im(e){return ae(e)&&e.g_.length<10}function sm(e,t){e.g_.push(t);let n=Ut(e);n.Uo()&&n.__&&n.a_(t.mutations)}function fl(e){return ae(e)&&!Ut(e).$o()&&e.g_.length>0}function ml(e){Ut(e).start()}function om(e){return y(this,null,function*(){Ut(e).l_()})}function am(e){return y(this,null,function*(){let t=Ut(e);for(let n of e.g_)t.a_(n.mutations)})}function cm(e,t,n){return y(this,null,function*(){let r=e.g_.shift(),i=Gs.from(r,t,n);yield dl(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),yield ni(e)})}function um(e,t){return y(this,null,function*(){t&&Ut(e).__&&(yield function(r,i){return y(this,null,function*(){if(function(o){return Rf(o)&&o!==f.ABORTED}(i.code)){let s=r.g_.shift();Ut(r).Go(),yield dl(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),yield ni(r)}})}(e,t)),fl(e)&&ml(e)})}function Su(e,t){return y(this,null,function*(){let n=S(e);n.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");let r=ae(n);n.y_.add(3),yield xn(n),r&&n.b_.set("Unknown"),yield n.remoteSyncer.handleCredentialChange(t),n.y_.delete(3),yield ei(n)})}function lm(e,t){return y(this,null,function*(){let n=S(e);t?(n.y_.delete(2),yield ei(n)):t||(n.y_.add(2),yield xn(n),n.b_.set("Unknown"))})}function Fe(e){return e.v_||(e.v_=function(n,r,i){let s=S(n);return s.P_(),new To(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{_o:em.bind(null,e),uo:nm.bind(null,e),r_:rm.bind(null,e)}),e.w_.push(t=>y(this,null,function*(){t?(e.v_.Go(),ea(e)?ta(e):e.b_.set("Unknown")):(yield e.v_.stop(),hl(e))}))),e.v_}function Ut(e){return e.C_||(e.C_=function(n,r,i){let s=S(n);return s.P_(),new Ao(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{_o:om.bind(null,e),uo:um.bind(null,e),c_:am.bind(null,e),u_:cm.bind(null,e)}),e.w_.push(t=>y(this,null,function*(){t?(e.C_.Go(),yield ni(e)):(yield e.C_.stop(),e.g_.length>0&&(_("RemoteStore",`Stopping write stream with ${e.g_.length} pending writes`),e.g_=[]))}))),e.C_}var Po=class e{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){let o=Date.now()+r,a=new e(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function na(e,t){if(Dt("AsyncQueue",`${t}: ${e}`),Cn(e))return new w(f.UNAVAILABLE,`${t}: ${e}`);throw e}var Fr=class e{constructor(t){this.comparator=t?(n,r)=>t(n,r)||v.comparator(n.key,r.key):(n,r)=>v.comparator(n.key,r.key),this.keyedMap=mn(),this.sortedSet=new B(this.comparator)}static emptySet(t){return new e(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){let n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){let n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){let n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof e)||this.size!==t.size)return!1;let n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){let i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){let t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){let r=new e;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}};var Lr=class{constructor(){this.F_=new B(v.comparator)}track(t){let n=t.doc.key,r=this.F_.get(n);r?t.type!==0&&r.type===3?this.F_=this.F_.insert(n,t):t.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.F_=this.F_.remove(n):t.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):E():this.F_=this.F_.insert(n,t)}M_(){let t=[];return this.F_.inorderTraversal((n,r)=>{t.push(r)}),t}},Ve=class e{constructor(t,n,r,i,s,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,i,s){let o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new e(t,n,Fr.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Yr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;let n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}};var Do=class{constructor(){this.x_=void 0,this.listeners=[]}},Co=class{constructor(){this.queries=new qt(t=>qu(t),Yr),this.onlineState="Unknown",this.O_=new Set}};function gl(e,t){return y(this,null,function*(){let n=S(e),r=t.query,i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Do),i)try{s.x_=yield n.onListen(r)}catch(o){let a=na(o,`Initialization of query '${Ls(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.N_(n.onlineState),s.x_&&t.B_(s.x_)&&ra(n)})}function pl(e,t){return y(this,null,function*(){let n=S(e),r=t.query,i=!1,s=n.queries.get(r);if(s){let o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)})}function hm(e,t){let n=S(e),r=!1;for(let i of t){let s=i.query,o=n.queries.get(s);if(o){for(let a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&ra(n)}function dm(e,t,n){let r=S(e),i=r.queries.get(t);if(i)for(let s of i.listeners)s.onError(n);r.queries.delete(t)}function ra(e){e.O_.forEach(t=>{t.next()})}var Br=class{constructor(t,n,r){this.query=t,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(t){if(!this.options.includeMetadataChanges){let r=[];for(let i of t.docChanges)i.type!==3&&r.push(i);t=new Ve(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.k_?this.Q_(t)&&(this.L_.next(t),n=!0):this.K_(t,this.onlineState)&&(this.U_(t),n=!0),this.q_=t,n}onError(t){this.L_.error(t)}N_(t){this.onlineState=t;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,t)&&(this.U_(this.q_),n=!0),n}K_(t,n){if(!t.fromCache)return!0;let r=n!=="Offline";return(!this.options.W_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Q_(t){if(t.docChanges.length>0)return!0;let n=this.q_&&this.q_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(t){t=Ve.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.k_=!0,this.L_.next(t)}};var qr=class{constructor(t){this.key=t}},Ur=class{constructor(t){this.key=t}},xo=class{constructor(t,n){this.query=t,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=P(),this.mutatedKeys=P(),this.na=Uu(t),this.ra=new Fr(this.na)}get ia(){return this.X_}sa(t,n){let r=n?n.oa:new Lr,i=n?n.ra:this.ra,s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1,c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,h)=>{let d=i.get(l),m=Zr(this.query,h)?h:null,b=!!d&&this.mutatedKeys.has(d.key),R=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations),I=!1;d&&m?d.data.isEqual(m.data)?b!==R&&(r.track({type:3,doc:m}),I=!0):this._a(d,m)||(r.track({type:2,doc:m}),I=!0,(c&&this.na(m,c)>0||u&&this.na(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),I=!0):d&&!m&&(r.track({type:1,doc:d}),I=!0,(c||u)&&(a=!0)),I&&(m?(o=o.add(m),s=R?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){let l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){let i=this.ra;this.ra=t.ra,this.mutatedKeys=t.mutatedKeys;let s=t.oa.M_();s.sort((u,l)=>function(d,m){let b=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return E()}};return b(d)-b(m)}(u.type,l.type)||this.na(u.doc,l.doc)),this.aa(r);let o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,c=a!==this.ea;return this.ea=a,s.length!==0||c?{snapshot:new Ve(this.query,t.ra,i,s,t.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Lr,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(t){return!this.X_.has(t)&&!!this.ra.has(t)&&!this.ra.get(t).hasLocalMutations}aa(t){t&&(t.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=t.current)}ua(){if(!this.current)return[];let t=this.ta;this.ta=P(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});let n=[];return t.forEach(r=>{this.ta.has(r)||n.push(new Ur(r))}),this.ta.forEach(r=>{t.has(r)||n.push(new qr(r))}),n}ha(t){this.X_=t.ss,this.ta=P();let n=this.sa(t.documents);return this.applyChanges(n,!0)}Pa(){return Ve.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}},Vo=class{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}},No=class{constructor(t){this.key=t,this.Ia=!1}},ko=class{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new qt(a=>qu(a),Yr),this.da=new Map,this.Aa=new Set,this.Ra=new B(v.comparator),this.Va=new Map,this.ma=new Sn,this.fa={},this.ga=new Map,this.pa=An.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}};function fm(e,t){return y(this,null,function*(){let n=Tm(e),r,i,s=n.Ea.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{let o=yield Yf(n.localStore,Ct(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=yield mm(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&cl(n.remoteStore,o)}return i})}function mm(e,t,n,r,i){return y(this,null,function*(){e.wa=(h,d,m)=>function(R,I,N,G){return y(this,null,function*(){let Q=I.view.sa(N);Q.zi&&(Q=yield Au(R.localStore,I.query,!1).then(({documents:it})=>I.view.sa(it,Q)));let rt=G&&G.targetChanges.get(I.targetId),At=I.view.applyChanges(Q,R.isPrimaryClient,rt);return Ru(R,I.targetId,At.ca),At.snapshot})}(e,h,d,m);let s=yield Au(e.localStore,t,!0),o=new xo(t,s.ss),a=o.sa(s.documents),c=In.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,c);Ru(e,n,u.ca);let l=new Vo(t,n,o);return e.Ea.set(t,l),e.da.has(n)?e.da.get(n).push(t):e.da.set(n,[t]),u.snapshot})}function gm(e,t){return y(this,null,function*(){let n=S(e),r=n.Ea.get(t),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!Yr(s,t))),void n.Ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||(yield _o(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ul(n.remoteStore,r.targetId),Oo(n,r.targetId)}).catch(Dn))):(Oo(n,r.targetId),yield _o(n.localStore,r.targetId,!0))})}function pm(e,t,n){return y(this,null,function*(){let r=Am(e);try{let i=yield function(o,a){let c=S(o),u=J.now(),l=a.reduce((m,b)=>m.add(b.key),P()),h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let b=xt(),R=P();return c.Xi.getEntries(m,l).next(I=>{b=I,b.forEach((N,G)=>{G.isValidDocument()||(R=R.add(N))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,b)).next(I=>{h=I;let N=[];for(let G of a){let Q=bf(G,h.get(G.key).overlayedDocument);Q!=null&&N.push(new Vt(G.key,Q,ku(Q.value.mapValue),Zt.exists(!0)))}return c.mutationQueue.addMutationBatch(m,u,N,a)}).next(I=>{d=I;let N=I.applyToLocalDocumentSet(h,R);return c.documentOverlayCache.saveOverlays(m,I.batchId,N)})}).then(()=>({batchId:d.batchId,changes:zu(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.fa[o.currentUser.toKey()];u||(u=new B(x)),u=u.insert(a,c),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,n),yield Vn(r,i.changes),yield ni(r.remoteStore)}catch(i){let s=na(i,"Failed to persist write");n.reject(s)}})}function yl(e,t){return y(this,null,function*(){let n=S(e);try{let r=yield Hf(n.localStore,t);t.targetChanges.forEach((i,s)=>{let o=n.Va.get(s);o&&(O(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?O(o.Ia):i.removedDocuments.size>0&&(O(o.Ia),o.Ia=!1))}),yield Vn(n,r,t)}catch(r){yield Dn(r)}})}function bu(e,t,n){let r=S(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){let i=[];r.Ea.forEach((s,o)=>{let a=o.view.N_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){let c=S(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(let d of h.listeners)d.N_(a)&&(u=!0)}),u&&ra(c)}(r.eventManager,t),i.length&&r.Ta.r_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}function ym(e,t,n){return y(this,null,function*(){let r=S(e);r.sharedClientState.updateQueryState(t,"rejected",n);let i=r.Va.get(t),s=i&&i.key;if(s){let o=new B(v.comparator);o=o.insert(s,ft.newNoDocument(s,A.min()));let a=P().add(s),c=new br(A.min(),new Map,new B(x),o,a);yield yl(r,c),r.Ra=r.Ra.remove(s),r.Va.delete(t),ia(r)}else yield _o(r.localStore,t,!1).then(()=>Oo(r,t,n)).catch(Dn)})}function _m(e,t){return y(this,null,function*(){let n=S(e),r=t.batch.batchId;try{let i=yield Wf(n.localStore,t);wl(n,r,null),_l(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),yield Vn(n,i)}catch(i){yield Dn(i)}})}function wm(e,t,n){return y(this,null,function*(){let r=S(e);try{let i=yield function(o,a){let c=S(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(O(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,t);wl(r,t,n),_l(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),yield Vn(r,i)}catch(i){yield Dn(i)}})}function _l(e,t){(e.ga.get(t)||[]).forEach(n=>{n.resolve()}),e.ga.delete(t)}function wl(e,t,n){let r=S(e),i=r.fa[r.currentUser.toKey()];if(i){let s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.fa[r.currentUser.toKey()]=i}}function Oo(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(let r of e.da.get(t))e.Ea.delete(r),n&&e.Ta.Sa(r,n);e.da.delete(t),e.isPrimaryClient&&e.ma.Ar(t).forEach(r=>{e.ma.containsKey(r)||vl(e,r)})}function vl(e,t){e.Aa.delete(t.path.canonicalString());let n=e.Ra.get(t);n!==null&&(ul(e.remoteStore,n),e.Ra=e.Ra.remove(t),e.Va.delete(n),ia(e))}function Ru(e,t,n){for(let r of n)r instanceof qr?(e.ma.addReference(r.key,t),vm(e,r)):r instanceof Ur?(_("SyncEngine","Document no longer in limbo: "+r.key),e.ma.removeReference(r.key,t),e.ma.containsKey(r.key)||vl(e,r.key)):E()}function vm(e,t){let n=t.key,r=n.path.canonicalString();e.Ra.get(n)||e.Aa.has(r)||(_("SyncEngine","New document in limbo: "+n),e.Aa.add(r),ia(e))}function ia(e){for(;e.Aa.size>0&&e.Ra.size<e.maxConcurrentLimboResolutions;){let t=e.Aa.values().next().value;e.Aa.delete(t);let n=new v(L.fromString(t)),r=e.pa.next();e.Va.set(r,new No(n)),e.Ra=e.Ra.insert(n,r),cl(e.remoteStore,new Tn(Ct(Xo(n.path)),r,"TargetPurposeLimboResolution",_n.ae))}}function Vn(e,t,n){return y(this,null,function*(){let r=S(e),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,c)=>{o.push(r.wa(c,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);let l=go.qi(c.targetId,u);s.push(l)}}))}),yield Promise.all(o),r.Ta.r_(i),yield function(c,u){return y(this,null,function*(){let l=S(c);try{yield l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(u,d=>g.forEach(d.Li,m=>l.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>g.forEach(d.ki,m=>l.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!Cn(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(let h of u){let d=h.targetId;if(!h.fromCache){let m=l.Ji.get(d),b=m.snapshotVersion,R=m.withLastLimboFreeSnapshotVersion(b);l.Ji=l.Ji.insert(d,R)}}})}(r.localStore,s))})}function Em(e,t){return y(this,null,function*(){let n=S(e);if(!n.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());let r=yield ol(n.localStore,t);n.currentUser=t,function(s,o){s.ga.forEach(a=>{a.forEach(c=>{c.reject(new w(f.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),yield Vn(n,r.ts)}})}function Im(e,t){let n=S(e),r=n.Va.get(t);if(r&&r.Ia)return P().add(r.key);{let i=P(),s=n.da.get(t);if(!s)return i;for(let o of s){let a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function Tm(e){let t=S(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=yl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Im.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ym.bind(null,t),t.Ta.r_=hm.bind(null,t.eventManager),t.Ta.Sa=dm.bind(null,t.eventManager),t}function Am(e){let t=S(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=_m.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=wm.bind(null,t),t}var Gr=class{constructor(){this.synchronizeTabs=!1}initialize(t){return y(this,null,function*(){this.serializer=ti(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),yield this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)})}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Qf(this.persistence,new po,t.initialUser,this.serializer)}createPersistence(t){return new ho(mo.zr,this.serializer)}createSharedClientState(t){return new wo}terminate(){return y(this,null,function*(){this.gcScheduler&&this.gcScheduler.stop(),yield this.sharedClientState.shutdown(),yield this.persistence.shutdown()})}};var Mo=class{initialize(t,n){return y(this,null,function*(){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Em.bind(null,this.syncEngine),yield lm(this.remoteStore,this.syncEngine.isPrimaryClient))})}createEventManager(t){return function(){return new Co}()}createDatastore(t){let n=ti(t.databaseInfo.databaseId),r=function(s){return new Io(s)}(t.databaseInfo);return function(s,o,a,c){return new So(s,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new Ro(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>bu(this.syncEngine,n,0),function(){return Nr.v()?new Nr:new vo}())}createSyncEngine(t,n){return function(i,s,o,a,c,u,l){let h=new ko(i,s,o,a,c,u);return l&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return function(n){return y(this,null,function*(){let r=S(n);_("RemoteStore","RemoteStore shutting down."),r.y_.add(5),yield xn(r),r.S_.shutdown(),r.b_.set("Unknown")})}(this.remoteStore)}};var zr=class{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.va(this.observer.next,t)}error(t){this.observer.error?this.va(this.observer.error,t):Dt("Uncaught Error in snapshot listener:",t.toString())}Ca(){this.muted=!0}va(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}};var Fo=class{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=K.UNAUTHENTICATED,this.clientId=wr.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,s=>y(this,null,function*(){_("FirestoreClient","Received user=",s.uid),yield this.authCredentialListener(s),this.user=s})),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}getConfiguration(){return y(this,null,function*(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}})}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let t=new dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(()=>y(this,null,function*(){try{this._onlineComponents&&(yield this._onlineComponents.terminate()),this._offlineComponents&&(yield this._offlineComponents.terminate()),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){let r=na(n,"Failed to shutdown persistence");t.reject(r)}})),t.promise}};function ms(e,t){return y(this,null,function*(){e.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");let n=yield e.getConfiguration();yield t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(i=>y(this,null,function*(){r.isEqual(i)||(yield ol(t.localStore,i),r=i)})),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t})}function Pu(e,t){return y(this,null,function*(){e.asyncQueue.verifyOperationInProgress();let n=yield bm(e);_("FirestoreClient","Initializing OnlineComponentProvider");let r=yield e.getConfiguration();yield t.initialize(n,r),e.setCredentialChangeListener(i=>Su(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>Su(t.remoteStore,s)),e._onlineComponents=t})}function Sm(e){return e.name==="FirebaseError"?e.code===f.FAILED_PRECONDITION||e.code===f.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}function bm(e){return y(this,null,function*(){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{yield ms(e,e._uninitializedComponentsProvider._offline)}catch(t){let n=t;if(!Sm(n))throw n;Ie("Error using user provided cache. Falling back to memory cache: "+n),yield ms(e,new Gr)}}else _("FirestoreClient","Using default OfflineComponentProvider"),yield ms(e,new Gr);return e._offlineComponents})}function El(e){return y(this,null,function*(){return e._onlineComponents||(e._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),yield Pu(e,e._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),yield Pu(e,new Mo))),e._onlineComponents})}function Rm(e){return El(e).then(t=>t.syncEngine)}function Il(e){return y(this,null,function*(){let t=yield El(e),n=t.eventManager;return n.onListen=fm.bind(null,t.syncEngine),n.onUnlisten=gm.bind(null,t.syncEngine),n})}function Pm(e,t,n={}){let r=new dt;return e.asyncQueue.enqueueAndForget(()=>y(this,null,function*(){return function(s,o,a,c,u){let l=new zr({next:d=>{o.enqueueAndForget(()=>pl(s,h));let m=d.docs.has(a);!m&&d.fromCache?u.reject(new w(f.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&c&&c.source==="server"?u.reject(new w(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Br(Xo(a.path),l,{includeMetadataChanges:!0,W_:!0});return gl(s,h)}(yield Il(e),e.asyncQueue,t,n,r)})),r.promise}function Dm(e,t,n={}){let r=new dt;return e.asyncQueue.enqueueAndForget(()=>y(this,null,function*(){return function(s,o,a,c,u){let l=new zr({next:d=>{o.enqueueAndForget(()=>pl(s,h)),d.fromCache&&c.source==="server"?u.reject(new w(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Br(a,l,{includeMetadataChanges:!0,W_:!0});return gl(s,h)}(yield Il(e),e.asyncQueue,t,n,r)})),r.promise}function Tl(e){let t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}var Du=new Map;function Al(e,t,n){if(!n)throw new w(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Cm(e,t,n,r){if(t===!0&&r===!0)throw new w(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Cu(e){if(!v.isDocumentKey(e))throw new w(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function xu(e){if(v.isDocumentKey(e))throw new w(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function sa(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{let t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":E()}function oe(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=sa(e);throw new w(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}var jr=class{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new w(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Cm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new w(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new w(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new w(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}},Ne=class{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jr({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jr(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gs;switch(r.type){case"firstParty":return new ws(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new w(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){let r=Du.get(n);r&&(_("ComponentProvider","Removing Datastore"),Du.delete(n),r.terminate())}(this),Promise.resolve()}};function xm(e,t,n,r={}){var i;let s=(e=oe(e,Ne))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ie("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=K.MOCK_USER;else{a=va(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);let u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new w(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new K(u)}e._authCredentials=new ps(new _r(a,c))}}var $r=class e{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new e(this.firestore,t,this._query)}},ot=class e{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new e(this.firestore,t,this._key)}},Ft=class e extends $r{constructor(t,n,r){super(t,n,Xo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let t=this._path.popLast();return t.isEmpty()?null:new ot(this.firestore,null,new v(t))}withConverter(t){return new e(this.firestore,t,this._path)}};function oa(e,t,...n){if(e=ce(e),Al("collection","path",t),e instanceof Ne){let r=L.fromString(t,...n);return xu(r),new Ft(e,null,r)}{if(!(e instanceof ot||e instanceof Ft))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(L.fromString(t,...n));return xu(r),new Ft(e.firestore,null,r)}}function aa(e,t,...n){if(e=ce(e),arguments.length===1&&(t=wr.V()),Al("doc","path",t),e instanceof Ne){let r=L.fromString(t,...n);return Cu(r),new ot(e,null,new v(r))}{if(!(e instanceof ot||e instanceof Ft))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(L.fromString(t,...n));return Cu(r),new ot(e.firestore,e instanceof Ft?e.converter:null,new v(r))}}var Lo=class{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new kr(this,"async_queue_retry"),this.Xa=()=>{let n=fs();n&&_("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};let t=fs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;let n=fs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise(()=>{});let n=new dt;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ga.push(t),this.nu()))}nu(){return y(this,null,function*(){if(this.Ga.length!==0){try{yield this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!Cn(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}})}tu(t){let n=this.Wa.then(()=>(this.Ja=!0,t().catch(r=>{this.Ha=r,this.Ja=!1;let i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Dt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(t,n,r){this.eu(),this.Za.indexOf(t)>-1&&(n=0);let i=Po.createAndSchedule(this,t,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&E()}verifyOperationInProgress(){}iu(){return y(this,null,function*(){let t;do t=this.Wa,yield t;while(t!==this.Wa)})}su(t){for(let n of this.ja)if(n.timerId===t)return!0;return!1}ou(t){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(let n of this.ja)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.iu()})}_u(t){this.Za.push(t)}ru(t){let n=this.ja.indexOf(t);this.ja.splice(n,1)}};var ke=class extends Ne{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new Lo}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||bl(this),this._firestoreClient.terminate()}};function Sl(e,t){let n=typeof e=="object"?e:Oa(),r=typeof e=="string"?e:t||"(default)",i=Na(n,"firestore").getImmediate({identifier:r});if(!i._initialized){let s=wa("firestore");s&&xm(i,...s)}return i}function ca(e){return e._firestoreClient||bl(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function bl(e){var t,n,r;let i=e._freezeSettings(),s=function(a,c,u,l){return new As(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Tl(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Fo(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}var bn=class e{constructor(t){this._byteString=t}static fromBase64String(t){try{return new e(nt.fromBase64String(t))}catch(n){throw new w(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new e(nt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}};var Rn=class{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}};var Kr=class{constructor(t){this._methodName=t}};var Pn=class{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return x(this._lat,t._lat)||x(this._long,t._long)}};var Vm=/^__.*__$/,Bo=class{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Vt(t,this.data,this.fieldMask,n,this.fieldTransforms):new se(t,this.data,n,this.fieldTransforms)}};function Rl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E()}}var qo=class e{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(t){return new e(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(t){var n;let r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.cu({path:r,hu:!1});return i.Pu(t),i}Iu(t){var n;let r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(t){return this.cu({path:void 0,hu:!0})}Eu(t){return Qr(t,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let t=0;t<this.path.length;t++)this.Pu(this.path.get(t))}Pu(t){if(t.length===0)throw this.Eu("Document fields must not be empty");if(Rl(this.uu)&&Vm.test(t))throw this.Eu('Document fields cannot begin and end with "__"')}},Uo=class{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||ti(t)}Ru(t,n,r,i=!1){return new qo({uu:t,methodName:n,Au:r,path:ct.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Nm(e){let t=e._freezeSettings(),n=ti(e._databaseId);return new Uo(e._databaseId,!!t.ignoreUndefinedProperties,n)}function km(e,t,n,r,i,s={}){let o=e.Ru(s.merge||s.mergeFields?2:0,t,n,i);xl("Data must be an object, but it was:",o,r);let a=Dl(r,o),c,u;if(s.merge)c=new wt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){let l=[];for(let h of s.mergeFields){let d=Om(t,h,n);if(!o.contains(d))throw new w(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Fm(l,d)||l.push(d)}c=new wt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new Bo(new ht(a),c,u)}function Pl(e,t){if(Cl(e=ce(e)))return xl("Unsupported field value:",t,e),Dl(e,t);if(e instanceof Kr)return function(r,i){if(!Rl(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);let s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.hu&&t.uu!==4)throw t.Eu("Nested arrays are not supported");return function(r,i){let s=[],o=0;for(let a of r){let c=Pl(a,i.Tu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=ce(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ef(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let s=J.fromDate(r);return{timestampValue:Cr(i.serializer,s)}}if(r instanceof J){let s=new J(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cr(i.serializer,s)}}if(r instanceof Pn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bn)return{bytesValue:tl(i.serializer,r._byteString)};if(r instanceof ot){let s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Yo(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${sa(r)}`)}(e,t)}function Dl(e,t){let n={};return Vu(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Me(e,(r,i)=>{let s=Pl(i,t.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Cl(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof J||e instanceof Pn||e instanceof bn||e instanceof ot||e instanceof Kr)}function xl(e,t,n){if(!Cl(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){let r=sa(n);throw r==="an object"?t.Eu(e+" a custom object"):t.Eu(e+" "+r)}}function Om(e,t,n){if((t=ce(t))instanceof Rn)return t._internalPath;if(typeof t=="string")return Vl(e,t);throw Qr("Field path arguments must be of type string or ",e,!1,void 0,n)}var Mm=new RegExp("[~\\*/\\[\\]]");function Vl(e,t,n){if(t.search(Mm)>=0)throw Qr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Rn(...t.split("."))._internalPath}catch(r){throw Qr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Qr(e,t,n,r,i){let s=r&&!r.isEmpty(),o=i!==void 0,a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new w(f.INVALID_ARGUMENT,a+e+c)}function Fm(e,t){return e.some(n=>n.isEqual(t))}var Wr=class{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let t=new Go(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){let n=this._document.data.field(Nl("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}},Go=class extends Wr{data(){return super.data()}};function Nl(e,t){return typeof t=="string"?Vl(e,t):t instanceof Rn?t._internalPath:t._delegate._internalPath}function Lm(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new w(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var zo=class{convertValue(t,n="none"){switch(ne(t)){case 0:return null;case 1:return t.booleanValue;case 2:return F(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Bt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw E()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){let r={};return Me(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new Pn(F(t.latitude),F(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":let r=Qo(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vn(t));default:return null}}convertTimestamp(t){let n=Lt(t);return new J(n.seconds,n.nanos)}convertDocumentKey(t,n){let r=L.fromString(t);O(sl(r));let i=new Tr(r.get(1),r.get(3)),s=new v(r.popFirst(5));return i.isEqual(n)||Dt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}};function Bm(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}var Xt=class{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}},Hr=class extends Wr{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){let n=new Ee(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){let r=this._document.data.field(Nl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},Ee=class extends Hr{data(t={}){return super.data(t)}},jo=class{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Xt(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Ee(this._firestore,this._userDataWriter,r.key,r,new Xt(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){let n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{let c=new Ee(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Xt(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{let c=new Ee(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Xt(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter),u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:qm(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function qm(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return E()}}function kl(e){e=oe(e,ot);let t=oe(e.firestore,ke);return Pm(ca(t),e._key).then(n=>Gm(t,e,n))}var Jr=class extends zo{constructor(t){super(),this.firestore=t}convertBytes(t){return new bn(t)}convertReference(t){let n=this.convertDocumentKey(t,this.firestore._databaseId);return new ot(this.firestore,null,n)}};function Ol(e){e=oe(e,$r);let t=oe(e.firestore,ke),n=ca(t),r=new Jr(t);return Lm(e._query),Dm(n,e._query).then(i=>new jo(t,r,e,i))}function Ml(e,t,n){e=oe(e,ot);let r=oe(e.firestore,ke),i=Bm(e.converter,t,n);return Um(r,[km(Nm(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,Zt.none())])}function Um(e,t){return function(r,i){let s=new dt;return r.asyncQueue.enqueueAndForget(()=>y(this,null,function*(){return pm(yield Rm(r),i,s)})),s.promise}(ca(e),t)}function Gm(e,t,n){let r=n.docs.get(t._key),i=new Jr(e);return new Hr(e,i,t._key,r,new Xt(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(i){Oe=i})(ka),Ge(new bt("firestore",(r,{instanceIdentifier:i,options:s})=>{let o=r.getProvider("app").getImmediate(),a=new ke(new ys(r.getProvider("auth-internal")),new Es(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new w(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tr(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),kt(su,"4.1.0",t),kt(su,"4.1.0","esm2017")})();var zm={apiKey:"AIzaSyBJ_GTJCC81jr9u9GPGWAcyCh81ZCBWWZg",authDomain:"inventory-control-bussropprj.firebaseapp.com",projectId:"inventory-control-bussropprj",storageBucket:"inventory-control-bussropprj.appspot.com",messagingSenderId:"397923798650",appId:"1:397923798650:web:89b0a19be1c979068e35c3",measurementId:"G-Z2186F2JJX"},jm=vi(zm),ua=Sl(jm),$m=(e,t,n)=>{let r=oa(ua,e);Ol(r).then(i=>t(JSON.stringify(i.docs.map(s=>Le({id:s.id},s.data()))))).catch(n)},Km=(e,t,n,r)=>{let i=oa(ua,e),s=aa(i);return Ml(s,JSON.parse(t)).then(()=>n(s.id)).catch(r),s.id},Qm=(e,t,n)=>{let r=aa(ua,e);kl(r).then(i=>t(JSON.stringify(Le({id:i.id},i.data())))).catch(n)};window._wasm_js_bridge={addDocument:Km,getCollection:$m,getDocument:Qm};})();
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
