(()=>{var Kl=Object.defineProperty,Ql=Object.defineProperties;var Wl=Object.getOwnPropertyDescriptors;var wa=Object.getOwnPropertySymbols;var Hl=Object.prototype.hasOwnProperty,Jl=Object.prototype.propertyIsEnumerable;var va=(e,t,n)=>t in e?Kl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Be=(e,t)=>{for(var n in t||(t={}))Hl.call(t,n)&&va(e,n,t[n]);if(wa)for(var n of wa(t))Jl.call(t,n)&&va(e,n,t[n]);return e},Ea=(e,t)=>Ql(e,Wl(t));var y=(e,t,n)=>new Promise((r,i)=>{var s=c=>{try{a(n.next(c))}catch(u){i(u)}},o=c=>{try{a(n.throw(c))}catch(u){i(u)}},a=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,o);a((n=n.apply(e,t)).next())});var Ta=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Xl=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{let s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Aa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){let s=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4,d=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(d=64)),r.push(n[l],n[h],n[d],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ta(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Xl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){let s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;let u=i<e.length?n[e.charAt(i)]:64;++i;let h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new ci;let d=s<<2|a>>4;if(r.push(d),u!==64){let m=a<<4&240|u>>2;if(r.push(m),h!==64){let A=u<<6&192|h;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ci=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},Yl=function(e){let t=Ta(e);return Aa.encodeByteArray(t,!0)},qe=function(e){return Yl(e).replace(/\./g,"")},Zl=function(e){try{return Aa.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function th(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}var eh=()=>th().__FIREBASE_DEFAULTS__,nh=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;let e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},rh=()=>{if(typeof document=="undefined")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}let t=e&&Zl(e[1]);return t&&JSON.parse(t)},Sa=()=>{try{return eh()||nh()||rh()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ih=e=>{var t,n;return(n=(t=Sa())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},ba=e=>{let t=ih(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},ui=()=>{var e;return(e=Sa())===null||e===void 0?void 0:e.config};var Fn=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}};function Ra(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[qe(JSON.stringify(n)),qe(JSON.stringify(o)),a].join(".")}function li(){try{return typeof indexedDB=="object"}catch(e){return!1}}function Pa(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}var sh="FirebaseError",Rt=class e extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=sh,Object.setPrototypeOf(this,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ue.prototype.create)}},Ue=class{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){let r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?oh(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Rt(i,a,r)}};function oh(e,t){return e.replace(ah,(n,r)=>{let i=t[r];return i!=null?String(i):`<${r}?>`})}var ah=/\{\$([^}]+)}/g;function Ge(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let s=e[i],o=t[i];if(Ia(s)&&Ia(o)){if(!Ge(s,o))return!1}else if(s!==o)return!1}for(let i of r)if(!n.includes(i))return!1;return!0}function Ia(e){return e!==null&&typeof e=="object"}var ig=4*60*60*1e3;function Pt(e){return e&&e._delegate?e._delegate:e}var Dt=class{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}};var Kt="[DEFAULT]";var hi=class{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){let n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){let r=new Fn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch(i){}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;let r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(uh(t))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch(n){}for(let[n,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(n);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch(s){}}}}clearInstance(t=Kt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}delete(){return y(this,null,function*(){let t=Array.from(this.instances.values());yield Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])})}isComponentSet(){return this.component!=null}isInitialized(t=Kt){return this.instances.has(t)}getOptions(t=Kt){return this.instancesOptions.get(t)||{}}initialize(t={}){let{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(let[s,o]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;let i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);let o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){let r=this.onInitCallbacks.get(n);if(r)for(let i of r)try{i(t,n)}catch(s){}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ch(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch(i){}return r||null}normalizeInstanceIdentifier(t=Kt){return this.component?this.component.multipleInstances?t:Kt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function ch(e){return e===Kt?void 0:e}function uh(e){return e.instantiationMode==="EAGER"}var Ln=class{constructor(t){this.name=t,this.providers=new Map}addComponent(t){let n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);let n=new hi(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}};var lh=[],C;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(C||(C={}));var hh={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},dh=C.INFO,fh={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},mh=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=fh[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)},he=class{constructor(t){this.name=t,this._logLevel=dh,this._logHandler=mh,this._userLogHandler=null,lh.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in C))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?hh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...t),this._logHandler(this,C.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...t),this._logHandler(this,C.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,C.INFO,...t),this._logHandler(this,C.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,C.WARN,...t),this._logHandler(this,C.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...t),this._logHandler(this,C.ERROR,...t)}};var gh=(e,t)=>t.some(n=>e instanceof n),Da,Ca;function ph(){return Da||(Da=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yh(){return Ca||(Ca=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var xa=new WeakMap,fi=new WeakMap,Va=new WeakMap,di=new WeakMap,gi=new WeakMap;function _h(e){let t=new Promise((n,r)=>{let i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(gt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&xa.set(n,e)}).catch(()=>{}),gi.set(t,e),t}function wh(e){if(fi.has(e))return;let t=new Promise((n,r)=>{let i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});fi.set(e,t)}var mi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return fi.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Va.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Na(e){mi=e(mi)}function vh(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){let r=e.call(Bn(this),t,...n);return Va.set(r,t.sort?t.sort():[t]),gt(r)}:yh().includes(e)?function(...t){return e.apply(Bn(this),t),gt(xa.get(this))}:function(...t){return gt(e.apply(Bn(this),t))}}function Eh(e){return typeof e=="function"?vh(e):(e instanceof IDBTransaction&&wh(e),gh(e,ph())?new Proxy(e,mi):e)}function gt(e){if(e instanceof IDBRequest)return _h(e);if(di.has(e))return di.get(e);let t=Eh(e);return t!==e&&(di.set(e,t),gi.set(t,e)),t}var Bn=e=>gi.get(e);function Oa(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let o=indexedDB.open(e,t),a=gt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(gt(o.result),c.oldVersion,c.newVersion,gt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}var Ih=["get","getKey","getAll","getAllKeys","count"],Th=["put","add","delete","clear"],pi=new Map;function ka(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(pi.get(t))return pi.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=Th.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ih.includes(n)))return;let s=function(o,...a){return y(this,null,function*(){let c=this.transaction(o,i?"readwrite":"readonly"),u=c.store;return r&&(u=u.index(a.shift())),(yield Promise.all([u[n](...a),i&&c.done]))[0]})};return pi.set(t,s),s}Na(e=>Ea(Be({},e),{get:(t,n,r)=>ka(t,n)||e.get(t,n,r),has:(t,n)=>!!ka(t,n)||e.has(t,n)}));var _i=class{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ah(n)){let r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}};function Ah(e){let t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}var wi="@firebase/app",Ma="0.9.15";var Qt=new he("@firebase/app"),Sh="@firebase/app-compat",bh="@firebase/analytics-compat",Rh="@firebase/analytics",Ph="@firebase/app-check-compat",Dh="@firebase/app-check",Ch="@firebase/auth",xh="@firebase/auth-compat",Vh="@firebase/database",Nh="@firebase/database-compat",kh="@firebase/functions",Oh="@firebase/functions-compat",Mh="@firebase/installations",Fh="@firebase/installations-compat",Lh="@firebase/messaging",Bh="@firebase/messaging-compat",qh="@firebase/performance",Uh="@firebase/performance-compat",Gh="@firebase/remote-config",zh="@firebase/remote-config-compat",jh="@firebase/storage",$h="@firebase/storage-compat",Kh="@firebase/firestore",Qh="@firebase/firestore-compat",Wh="firebase",Hh="10.1.0";var vi="[DEFAULT]",Jh={[wi]:"fire-core",[Sh]:"fire-core-compat",[Rh]:"fire-analytics",[bh]:"fire-analytics-compat",[Dh]:"fire-app-check",[Ph]:"fire-app-check-compat",[Ch]:"fire-auth",[xh]:"fire-auth-compat",[Vh]:"fire-rtdb",[Nh]:"fire-rtdb-compat",[kh]:"fire-fn",[Oh]:"fire-fn-compat",[Mh]:"fire-iid",[Fh]:"fire-iid-compat",[Lh]:"fire-fcm",[Bh]:"fire-fcm-compat",[qh]:"fire-perf",[Uh]:"fire-perf-compat",[Gh]:"fire-rc",[zh]:"fire-rc-compat",[jh]:"fire-gcs",[$h]:"fire-gcs-compat",[Kh]:"fire-fst",[Qh]:"fire-fst-compat","fire-js":"fire-js",[Wh]:"fire-js-all"};var qn=new Map,Ei=new Map;function Xh(e,t){try{e.container.addComponent(t)}catch(n){Qt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ze(e){let t=e.name;if(Ei.has(t))return Qt.debug(`There were multiple attempts to register component ${t}.`),!1;Ei.set(t,e);for(let n of qn.values())Xh(n,e);return!0}function qa(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}var Yh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mt=new Ue("app","Firebase",Yh);var Ii=class{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}};var Ua=Hh;function Si(e,t={}){let n=e;typeof t!="object"&&(t={name:t});let r=Object.assign({name:vi,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Mt.create("bad-app-name",{appName:String(i)});if(n||(n=ui()),!n)throw Mt.create("no-options");let s=qn.get(i);if(s){if(Ge(n,s.options)&&Ge(r,s.config))return s;throw Mt.create("duplicate-app",{appName:i})}let o=new Ln(i);for(let c of Ei.values())o.addComponent(c);let a=new Ii(n,r,o);return qn.set(i,a),a}function Ga(e=vi){let t=qn.get(e);if(!t&&e===vi&&ui())return Si();if(!t)throw Mt.create("no-app",{appName:e});return t}function Ft(e,t,n){var r;let i=(r=Jh[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);let s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qt.warn(a.join(" "));return}ze(new Dt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}var Zh="firebase-heartbeat-database",td=1,je="firebase-heartbeat-store",yi=null;function za(){return yi||(yi=Oa(Zh,td,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(je)}}}).catch(e=>{throw Mt.create("idb-open",{originalErrorMessage:e.message})})),yi}function ed(e){return y(this,null,function*(){try{return yield(yield za()).transaction(je).objectStore(je).get(ja(e))}catch(t){if(t instanceof Rt)Qt.warn(t.message);else{let n=Mt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Qt.warn(n.message)}}})}function Fa(e,t){return y(this,null,function*(){try{let r=(yield za()).transaction(je,"readwrite");yield r.objectStore(je).put(t,ja(e)),yield r.done}catch(n){if(n instanceof Rt)Qt.warn(n.message);else{let r=Mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qt.warn(r.message)}}})}function ja(e){return`${e.name}!${e.options.appId}`}var nd=1024,rd=30*24*60*60*1e3,Ti=class{constructor(t){this.container=t,this._heartbeatsCache=null;let n=this.container.getProvider("app").getImmediate();this._storage=new Ai(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}triggerHeartbeat(){return y(this,null,function*(){let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=La();if(this._heartbeatsCache===null&&(this._heartbeatsCache=yield this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{let s=new Date(i.date).valueOf();return Date.now()-s<=rd}),this._storage.overwrite(this._heartbeatsCache)})}getHeartbeatsHeader(){return y(this,null,function*(){if(this._heartbeatsCache===null&&(yield this._heartbeatsCachePromise),this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";let t=La(),{heartbeatsToSend:n,unsentEntries:r}=id(this._heartbeatsCache.heartbeats),i=qe(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i})}};function La(){return new Date().toISOString().substring(0,10)}function id(e,t=nd){let n=[],r=e.slice();for(let i of e){let s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ba(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ba(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}var Ai=class{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return y(this,null,function*(){return li()?Pa().then(()=>!0).catch(()=>!1):!1})}read(){return y(this,null,function*(){return(yield this._canUseIndexedDBPromise)?(yield ed(this.app))||{heartbeats:[]}:{heartbeats:[]}})}overwrite(t){return y(this,null,function*(){var n;if(yield this._canUseIndexedDBPromise){let i=yield this.read();return Fa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return})}add(t){return y(this,null,function*(){var n;if(yield this._canUseIndexedDBPromise){let i=yield this.read();return Fa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return})}};function Ba(e){return qe(JSON.stringify({version:2,heartbeats:e})).length}function sd(e){ze(new Dt("platform-logger",t=>new _i(t),"PRIVATE")),ze(new Dt("heartbeat",t=>new Ti(t),"PRIVATE")),Ft(wi,Ma,e),Ft(wi,Ma,"esm2017"),Ft("fire-js","")}sd("");var od="firebase",ad="10.1.0";Ft(od,ad,"app");var cd=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},dt={},p,Qi=Qi||{},T=cd||self;function er(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function sn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function ud(e){return Object.prototype.hasOwnProperty.call(e,bi)&&e[bi]||(e[bi]=++ld)}var bi="closure_uid_"+(1e9*Math.random()>>>0),ld=0;function hd(e,t,n){return e.call.apply(e.bind,arguments)}function dd(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function X(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?X=hd:X=dd,X.apply(null,arguments)}function Un(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function $(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Lt(){this.s=this.s,this.o=this.o}var fd=0;Lt.prototype.s=!1;Lt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),fd!=0)&&ud(this)};Lt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var rc=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Wi(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function $a(e,t){for(let n=1;n<arguments.length;n++){let r=arguments[n];if(er(r)){let i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Y(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};var md=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",()=>{},t),T.removeEventListener("test",()=>{},t)}catch(n){}return e}();function Je(e){return/^[\s\xa0]*$/.test(e)}function nr(){var e=T.navigator;return e&&(e=e.userAgent)?e:""}function pt(e){return nr().indexOf(e)!=-1}function Hi(e){return Hi[" "](e),e}Hi[" "]=function(){};function gd(e,t){var n=rf;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var pd=pt("Opera"),ge=pt("Trident")||pt("MSIE"),ic=pt("Edge"),xi=ic||ge,sc=pt("Gecko")&&!(nr().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge"))&&!(pt("Trident")||pt("MSIE"))&&!pt("Edge"),yd=nr().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge");function oc(){var e=T.document;return e?e.documentMode:void 0}var Vi;t:{if(Gn="",zn=function(){var e=nr();if(sc)return/rv:([^\);]+)(\)|;)/.exec(e);if(ic)return/Edge\/([\d\.]+)/.exec(e);if(ge)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(yd)return/WebKit\/(\S+)/.exec(e);if(pd)return/(?:Version)[ \/]?(\S+)/.exec(e)}(),zn&&(Gn=zn?zn[1]:""),ge&&(jn=oc(),jn!=null&&jn>parseFloat(Gn))){Vi=String(jn);break t}Vi=Gn}var Gn,zn,jn,Ni;T.document&&ge?(Ri=oc(),Ni=Ri||parseInt(Vi,10)||void 0):Ni=void 0;var Ri,_d=Ni;function Xe(e,t){if(Y.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(sc){t:{try{Hi(t.nodeName);var i=!0;break t}catch(s){}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:wd[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Xe.$.h.call(this)}}$(Xe,Y);var wd={2:"touch",3:"pen",4:"mouse"};Xe.prototype.h=function(){Xe.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var on="closure_listenable_"+(1e6*Math.random()|0),vd=0;function Ed(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++vd,this.fa=this.ia=!1}function rr(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Ji(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function Id(e,t){for(let n in e)t.call(void 0,e[n],n,e)}function ac(e){let t={};for(let n in e)t[n]=e[n];return t}var Ka="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cc(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Ka.length;s++)n=Ka[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ir(e){this.src=e,this.g={},this.h=0}ir.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Oi(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Ed(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function ki(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=rc(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(rr(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Oi(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Xi="closure_lm_"+(1e6*Math.random()|0),Pi={};function uc(e,t,n,r,i){if(r&&r.once)return hc(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)uc(e,t[s],n,r,i);return null}return n=ts(n),e&&e[on]?e.O(t,n,sn(r)?!!r.capture:!!r,i):lc(e,t,n,!1,r,i)}function lc(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=sn(i)?!!i.capture:!!i,a=Zi(e);if(a||(e[Xi]=a=new ir(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=Td(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)md||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(fc(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Td(){function e(n){return t.call(e.src,e.listener,n)}let t=Ad;return e}function hc(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)hc(e,t[s],n,r,i);return null}return n=ts(n),e&&e[on]?e.P(t,n,sn(r)?!!r.capture:!!r,i):lc(e,t,n,!0,r,i)}function dc(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)dc(e,t[s],n,r,i);else r=sn(r)?!!r.capture:!!r,n=ts(n),e&&e[on]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Oi(s,n,r,i),-1<n&&(rr(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Zi(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Oi(t,n,r,i)),(n=-1<e?t[e]:null)&&Yi(n))}function Yi(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[on])ki(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(fc(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Zi(t))?(ki(n,e),n.h==0&&(n.src=null,t[Xi]=null)):rr(e)}}}function fc(e){return e in Pi?Pi[e]:Pi[e]="on"+e}function Ad(e,t){if(e.fa)e=!0;else{t=new Xe(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Yi(e),e=n.call(r,t)}return e}function Zi(e){return e=e[Xi],e instanceof ir?e:null}var Di="__closure_events_fn_"+(1e9*Math.random()>>>0);function ts(e){return typeof e=="function"?e:(e[Di]||(e[Di]=function(t){return e.handleEvent(t)}),e[Di])}function j(){Lt.call(this),this.i=new ir(this),this.S=this,this.J=null}$(j,Lt);j.prototype[on]=!0;j.prototype.removeEventListener=function(e,t,n,r){dc(this,e,t,n,r)};function H(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Y(t,e);else if(t instanceof Y)t.target=t.target||e;else{var i=t;t=new Y(r,e),cc(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=$n(o,r,!0,t)&&i}if(o=t.g=e,i=$n(o,r,!0,t)&&i,i=$n(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=$n(o,r,!1,t)&&i}j.prototype.N=function(){if(j.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)rr(n[r]);delete e.g[t],e.h--}}this.J=null};j.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};j.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function $n(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ki(e.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var es=T.JSON.stringify,Mi=class{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}};function Sd(){var e=ns;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Fi=class{constructor(){this.h=this.g=null}add(t,n){let r=mc.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}},mc=new Mi(()=>new Li,e=>e.reset()),Li=class{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}};function bd(e){var t=1;e=e.split(":");let n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Rd(e){T.setTimeout(()=>{throw e},0)}var Ye,Ze=!1,ns=new Fi,gc=()=>{let e=T.Promise.resolve(void 0);Ye=()=>{e.then(Pd)}},Pd=()=>{for(var e;e=Sd();){try{e.h.call(e.g)}catch(n){Rd(n)}var t=mc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ze=!1};function sr(e,t){j.call(this),this.h=e||1,this.g=t||T,this.j=X(this.qb,this),this.l=Date.now()}$(sr,j);p=sr.prototype;p.ga=!1;p.T=null;p.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),H(this,"tick"),this.ga&&(rs(this),this.start()))}};p.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function rs(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}p.N=function(){sr.$.N.call(this),rs(this),delete this.g};function is(e,t,n){if(typeof e=="function")n&&(e=X(e,n));else if(e&&typeof e.handleEvent=="function")e=X(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function pc(e){e.g=is(()=>{e.g=null,e.i&&(e.i=!1,pc(e))},e.j);let t=e.h;e.h=null,e.m.apply(null,t)}var Bi=class extends Lt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:pc(this)}N(){super.N(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}};function tn(e){Lt.call(this),this.h=e,this.g={}}$(tn,Lt);var Qa=[];function yc(e,t,n,r){Array.isArray(n)||(n&&(Qa[0]=n.toString()),n=Qa);for(var i=0;i<n.length;i++){var s=uc(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function _c(e){Ji(e.g,function(t,n){this.g.hasOwnProperty(n)&&Yi(t)},e),e.g={}}tn.prototype.N=function(){tn.$.N.call(this),_c(this)};tn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function or(){this.g=!0}or.prototype.Ea=function(){this.g=!1};function Dd(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Cd(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function fe(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Vd(e,n)+(r?" "+r:"")})}function xd(e,t){e.info(function(){return"TIMEOUT: "+t})}or.prototype.info=function(){};function Vd(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return es(n)}catch(a){return t}}var Xt={},Wa=null;function ar(){return Wa=Wa||new j}Xt.Ta="serverreachability";function wc(e){Y.call(this,Xt.Ta,e)}$(wc,Y);function en(e){let t=ar();H(t,new wc(t))}Xt.STAT_EVENT="statevent";function vc(e,t){Y.call(this,Xt.STAT_EVENT,e),this.stat=t}$(vc,Y);function tt(e){let t=ar();H(t,new vc(t,e))}Xt.Ua="timingevent";function Ec(e,t){Y.call(this,Xt.Ua,e),this.size=t}$(Ec,Y);function an(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var cr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ic={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ss(){}ss.prototype.h=null;function Ha(e){return e.h||(e.h=e.i())}function Tc(){}var cn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function os(){Y.call(this,"d")}$(os,Y);function as(){Y.call(this,"c")}$(as,Y);var qi;function ur(){}$(ur,ss);ur.prototype.g=function(){return new XMLHttpRequest};ur.prototype.i=function(){return{}};qi=new ur;function un(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new tn(this),this.P=Nd,e=xi?125:void 0,this.V=new sr(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ac}function Ac(){this.i=null,this.g="",this.h=!1}var Nd=45e3,Ui={},Wn={};p=un.prototype;p.setTimeout=function(e){this.P=e};function Gi(e,t,n){e.L=1,e.v=hr(xt(t)),e.s=n,e.S=!0,Sc(e,null)}function Sc(e,t){e.G=Date.now(),ln(e),e.A=xt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Nc(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Ac,e.g=tu(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Bi(X(e.Pa,e,e.g),e.O)),yc(e.U,e.g,"readystatechange",e.nb),t=e.I?ac(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),en(),Dd(e.j,e.u,e.A,e.m,e.W,e.s)}p.nb=function(e){e=e.target;let t=this.M;t&&yt(e)==3?t.l():this.Pa(e)};p.Pa=function(e){try{if(e==this.g)t:{let l=yt(this.g);var t=this.g.Ia();let h=this.g.da();if(!(3>l)&&(l!=3||xi||this.g&&(this.h.h||this.g.ja()||Za(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?en(3):en(2)),lr(this);var n=this.g.da();this.ca=n;e:if(bc(this)){var r=Za(this.g);e="";var i=r.length,s=yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Wt(this),He(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Cd(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Je(a)){var u=a;break e}}u=null}if(n=u)fe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zi(this,n);else{this.i=!1,this.o=3,tt(12),Wt(this),He(this);break t}}this.S?(Rc(this,l,o),xi&&this.i&&l==3&&(yc(this.U,this.V,"tick",this.mb),this.V.start())):(fe(this.j,this.m,o,null),zi(this,o)),l==4&&Wt(this),this.i&&!this.J&&(l==4?Jc(this.l,this):(this.i=!1,ln(this)))}else tf(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),Wt(this),He(this)}}}catch(l){}finally{}};function bc(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Rc(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=kd(e,n),i==Wn){t==4&&(e.o=4,tt(14),r=!1),fe(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Ui){e.o=4,tt(15),fe(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else fe(e.j,e.m,i,null),zi(e,i);bc(e)&&i!=Wn&&i!=Ui&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,tt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),fs(t),t.M=!0,tt(11))):(fe(e.j,e.m,n,"[Invalid Chunked Response]"),Wt(e),He(e))}p.mb=function(){if(this.g){var e=yt(this.g),t=this.g.ja();this.C<t.length&&(lr(this),Rc(this,e,t),this.i&&e!=4&&ln(this))}};function kd(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Wn:(n=Number(t.substring(n,r)),isNaN(n)?Ui:(r+=1,r+n>t.length?Wn:(t=t.slice(r,r+n),e.C=r+n,t)))}p.cancel=function(){this.J=!0,Wt(this)};function ln(e){e.Y=Date.now()+e.P,Pc(e,e.P)}function Pc(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=an(X(e.lb,e),t)}function lr(e){e.B&&(T.clearTimeout(e.B),e.B=null)}p.lb=function(){this.B=null;let e=Date.now();0<=e-this.Y?(xd(this.j,this.A),this.L!=2&&(en(),tt(17)),Wt(this),this.o=2,He(this)):Pc(this,this.Y-e)};function He(e){e.l.H==0||e.J||Jc(e.l,e)}function Wt(e){lr(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,rs(e.V),_c(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function zi(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||ji(n.i,e))){if(!e.K&&ji(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Xn(n),mr(n);else break t;ds(n),tt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=an(X(n.ib,n),6e3));if(1>=Mc(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else Ht(n,11)}else if((e.K||n.g==e)&&Xn(n),!Je(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];let l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));let h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));let d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;let m=e.g;if(m){let A=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(A){var s=r.i;s.g||A.indexOf("spdy")==-1&&A.indexOf("quic")==-1&&A.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(cs(s,s.h),s.h=null))}if(r.F){let R=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.Da=R,k(r.I,r.F,R))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Zc(r,r.J?r.pa:null,r.Y),o.K){Fc(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(lr(a),ln(a)),r.g=o}else Wc(r);0<n.j.length&&gr(n)}else u[0]!="stop"&&u[0]!="close"||Ht(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ht(n,7):hs(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}en(4)}catch(u){}}function Od(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map!="undefined"&&e instanceof Map||typeof Set!="undefined"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(er(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Md(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map!="undefined"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set!="undefined"&&e instanceof Set)){if(er(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(let r in e)t[n++]=r;return t}}}function Dc(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(er(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Md(e),r=Od(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Cc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fd(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Jt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Jt){this.h=e.h,Hn(this,e.j),this.s=e.s,this.g=e.g,Jn(this,e.m),this.l=e.l;var t=e.i,n=new nn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ja(this,n),this.o=e.o}else e&&(t=String(e).match(Cc))?(this.h=!1,Hn(this,t[1]||"",!0),this.s=Qe(t[2]||""),this.g=Qe(t[3]||"",!0),Jn(this,t[4]),this.l=Qe(t[5]||"",!0),Ja(this,t[6]||"",!0),this.o=Qe(t[7]||"")):(this.h=!1,this.i=new nn(null,this.h))}Jt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(We(t,Xa,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(We(t,Xa,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(We(n,n.charAt(0)=="/"?qd:Bd,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",We(n,Gd)),e.join("")};function xt(e){return new Jt(e)}function Hn(e,t,n){e.j=n?Qe(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Jn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ja(e,t,n){t instanceof nn?(e.i=t,zd(e.i,e.h)):(n||(t=We(t,Ud)),e.i=new nn(t,e.h))}function k(e,t,n){e.i.set(t,n)}function hr(e){return k(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Qe(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function We(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Ld),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ld(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Xa=/[#\/\?@]/g,Bd=/[#\?:]/g,qd=/[#\?]/g,Ud=/[#\?@]/g,Gd=/#/g;function nn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Bt(e){e.g||(e.g=new Map,e.h=0,e.i&&Fd(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}p=nn.prototype;p.add=function(e,t){Bt(this),this.i=null,e=pe(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function xc(e,t){Bt(e),t=pe(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Vc(e,t){return Bt(e),t=pe(e,t),e.g.has(t)}p.forEach=function(e,t){Bt(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};p.ta=function(){Bt(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};p.Z=function(e){Bt(this);let t=[];if(typeof e=="string")Vc(this,e)&&(t=t.concat(this.g.get(pe(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};p.set=function(e,t){return Bt(this),this.i=null,e=pe(this,e),Vc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};p.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Nc(e,t,n){xc(e,t),0<n.length&&(e.i=null,e.g.set(pe(e,t),Wi(n)),e.h+=n.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function pe(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function zd(e,t){t&&!e.j&&(Bt(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(xc(this,r),Nc(this,i,n))},e)),e.j=t}var jd=class{constructor(e,t){this.g=e,this.map=t}};function kc(e){this.l=e||$d,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ka&&T.g.Ka()&&T.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $d=10;function Oc(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Mc(e){return e.h?1:e.g?e.g.size:0}function ji(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function cs(e,t){e.g?e.g.add(t):e.h=t}function Fc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}kc.prototype.cancel=function(){if(this.i=Lc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let e of this.g.values())e.cancel();this.g.clear()}};function Lc(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(let n of e.g.values())t=t.concat(n.F);return t}return Wi(e.i)}var Kd=class{stringify(e){return T.JSON.stringify(e,void 0)}parse(e){return T.JSON.parse(e,void 0)}};function Qd(){this.g=new Kd}function Wd(e,t,n){let r=n||"";try{Dc(e,function(i,s){let o=i;sn(i)&&(o=es(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Hd(e,t){let n=new or;if(T.Image){let r=new Image;r.onload=Un(Kn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Un(Kn,n,r,"TestLoadImage: error",!1,t),r.onabort=Un(Kn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Un(Kn,n,r,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Kn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function hn(e){this.l=e.fc||null,this.j=e.ob||!1}$(hn,ss);hn.prototype.g=function(){return new dr(this.l,this.j)};hn.prototype.i=function(e){return function(){return e}}({});function dr(e,t){j.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=us,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$(dr,j);var us=0;p=dr.prototype;p.open=function(e,t){if(this.readyState!=us)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,rn(this)};p.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||T).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,dn(this)),this.readyState=us};p.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,rn(this)),this.g&&(this.readyState=3,rn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof T.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Bc(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Bc(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}p.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?dn(this):rn(this),this.readyState==3&&Bc(this)}};p.Za=function(e){this.g&&(this.response=this.responseText=e,dn(this))};p.Ya=function(e){this.g&&(this.response=e,dn(this))};p.ka=function(){this.g&&dn(this)};function dn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,rn(e)}p.setRequestHeader=function(e,t){this.v.append(e,t)};p.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function rn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(dr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Jd=T.JSON.parse;function M(e){j.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=qc,this.L=this.M=!1}$(M,j);var qc="",Xd=/^https?$/i,Yd=["POST","PUT"];p=M.prototype;p.Oa=function(e){this.M=e};p.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():qi.g(),this.C=this.u?Ha(this.u):Ha(qi),this.g.onreadystatechange=X(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Ya(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(let s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=T.FormData&&e instanceof T.FormData,!(0<=rc(Yd,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{zc(this),0<this.B&&((this.L=Zd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=X(this.ua,this)):this.A=is(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Ya(this,s)}};function Zd(e){return ge&&typeof e.timeout=="number"&&e.ontimeout!==void 0}p.ua=function(){typeof Qi!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,H(this,"timeout"),this.abort(8))};function Ya(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Uc(e),fr(e)}function Uc(e){e.F||(e.F=!0,H(e,"complete"),H(e,"error"))}p.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,H(this,"complete"),H(this,"abort"),fr(this))};p.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fr(this,!0)),M.$.N.call(this)};p.La=function(){this.s||(this.G||this.v||this.l?Gc(this):this.kb())};p.kb=function(){Gc(this)};function Gc(e){if(e.h&&typeof Qi!="undefined"&&(!e.C[1]||yt(e)!=4||e.da()!=2)){if(e.v&&yt(e)==4)is(e.La,0,e);else if(H(e,"readystatechange"),yt(e)==4){e.h=!1;try{let o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Cc)[1]||null;!i&&T.self&&T.self.location&&(i=T.self.location.protocol.slice(0,-1)),r=!Xd.test(i?i.toLowerCase():"")}n=r}if(n)H(e,"complete"),H(e,"success");else{e.m=6;try{var s=2<yt(e)?e.g.statusText:""}catch(a){s=""}e.j=s+" ["+e.da()+"]",Uc(e)}}finally{fr(e)}}}}function fr(e,t){if(e.g){zc(e);let n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||H(e,"ready");try{n.onreadystatechange=r}catch(i){}}}function zc(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}p.isActive=function(){return!!this.g};function yt(e){return e.g?e.g.readyState:0}p.da=function(){try{return 2<yt(this)?this.g.status:-1}catch(e){return-1}};p.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}};p.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Jd(t)}};function Za(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case qc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function tf(e){let t={};e=(e.g&&2<=yt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Je(e[r]))continue;var n=bd(e[r]);let i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();let s=t[i]||[];t[i]=s,s.push(n)}Id(t,function(r){return r.join(", ")})}p.Ia=function(){return this.m};p.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function jc(e){let t="";return Ji(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function ls(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=jc(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):k(e,t,n))}function $e(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function $c(e){this.Ga=0,this.j=[],this.l=new or,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=$e("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=$e("baseRetryDelayMs",5e3,e),this.hb=$e("retryDelaySeedMs",1e4,e),this.eb=$e("forwardChannelMaxRetries",2,e),this.xa=$e("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new kc(e&&e.concurrentRequestLimit),this.Ja=new Qd,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}p=$c.prototype;p.ra=8;p.H=1;function hs(e){if(Kc(e),e.H==3){var t=e.W++,n=xt(e.I);if(k(n,"SID",e.K),k(n,"RID",t),k(n,"TYPE","terminate"),fn(e,n),t=new un(e,e.l,t),t.L=2,t.v=hr(xt(n)),n=!1,T.navigator&&T.navigator.sendBeacon)try{n=T.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=tu(t.l,null),t.g.ha(t.v)),t.G=Date.now(),ln(t)}Yc(e)}function mr(e){e.g&&(fs(e),e.g.cancel(),e.g=null)}function Kc(e){mr(e),e.u&&(T.clearTimeout(e.u),e.u=null),Xn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function gr(e){if(!Oc(e.i)&&!e.m){e.m=!0;var t=e.Na;Ye||gc(),Ze||(Ye(),Ze=!0),ns.add(t,e),e.C=0}}function ef(e,t){return Mc(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=an(X(e.Na,e,t),Xc(e,e.C)),e.C++,!0)}p.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let i=new un(this,this.l,e),s=this.s;if(this.U&&(s?(s=ac(s),cc(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Qc(this,i,t),n=xt(this.I),k(n,"RID",e),k(n,"CVER",22),this.F&&k(n,"X-HTTP-Session-Id",this.F),fn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(jc(s)))+"&"+t:this.o&&ls(n,this.o,s)),cs(this.i,i),this.bb&&k(n,"TYPE","init"),this.P?(k(n,"$req",t),k(n,"SID","null"),i.aa=!0,Gi(i,n,null)):Gi(i,n,t),this.H=2}}else this.H==3&&(e?tc(this,e):this.j.length==0||Oc(this.i)||tc(this))};function tc(e,t){var n;t?n=t.m:n=e.W++;let r=xt(e.I);k(r,"SID",e.K),k(r,"RID",n),k(r,"AID",e.V),fn(e,r),e.o&&e.s&&ls(r,e.o,e.s),n=new un(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Qc(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),cs(e.i,n),Gi(n,r,t)}function fn(e,t){e.na&&Ji(e.na,function(n,r){k(t,r,n)}),e.h&&Dc({},function(n,r){k(t,r,n)})}function Qc(e,t,n){n=Math.min(e.j.length,n);var r=e.h?X(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){let o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let u=i[c].g,l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{Wd(l,o,"req"+u+"_")}catch(h){r&&r(l)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Wc(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ye||gc(),Ze||(Ye(),Ze=!0),ns.add(t,e),e.A=0}}function ds(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=an(X(e.Ma,e),Xc(e,e.A)),e.A++,!0)}p.Ma=function(){if(this.u=null,Hc(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=an(X(this.jb,this),e)}};p.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,tt(10),mr(this),Hc(this))};function fs(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function Hc(e){e.g=new un(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=xt(e.wa);k(t,"RID","rpc"),k(t,"SID",e.K),k(t,"AID",e.V),k(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&k(t,"TO",e.qa),k(t,"TYPE","xmlhttp"),fn(e,t),e.o&&e.s&&ls(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=hr(xt(t)),n.s=null,n.S=!0,Sc(n,e)}p.ib=function(){this.v!=null&&(this.v=null,mr(this),ds(this),tt(19))};function Xn(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function Jc(e,t){var n=null;if(e.g==t){Xn(e),fs(e),e.g=null;var r=2}else if(ji(e.i,t))n=t.F,Fc(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=ar(),H(r,new Ec(r,n)),gr(e)}else Wc(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&ef(e,t)||r==2&&ds(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Ht(e,5);break;case 4:Ht(e,10);break;case 3:Ht(e,6);break;default:Ht(e,2)}}}function Xc(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Ht(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=X(e.pb,e);n||(n=new Jt("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||Hn(n,"https"),hr(n)),Hd(n.toString(),r)}else tt(2);e.H=0,e.h&&e.h.za(t),Yc(e),Kc(e)}p.pb=function(e){e?(this.l.info("Successfully pinged google.com"),tt(2)):(this.l.info("Failed to ping google.com"),tt(1))};function Yc(e){if(e.H=0,e.ma=[],e.h){let t=Lc(e.i);(t.length!=0||e.j.length!=0)&&($a(e.ma,t),$a(e.ma,e.j),e.i.i.length=0,Wi(e.j),e.j.length=0),e.h.ya()}}function Zc(e,t,n){var r=n instanceof Jt?xt(n):new Jt(n);if(r.g!="")t&&(r.g=t+"."+r.g),Jn(r,r.m);else{var i=T.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Jt(null);r&&Hn(s,r),t&&(s.g=t),i&&Jn(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&k(r,n,t),k(r,"VER",e.ra),fn(e,r),r}function tu(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new M(new hn({ob:!0})):new M(e.va),t.Oa(e.J),t}p.isActive=function(){return!!this.h&&this.h.isActive(this)};function eu(){}p=eu.prototype;p.Ba=function(){};p.Aa=function(){};p.za=function(){};p.ya=function(){};p.isActive=function(){return!0};p.Va=function(){};function Yn(){if(ge&&!(10<=Number(_d)))throw Error("Environmental error: no available transport.")}Yn.prototype.g=function(e,t){return new ot(e,t)};function ot(e,t){j.call(this),this.g=new $c(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Je(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Je(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ye(this)}$(ot,j);ot.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;tt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Zc(e,null,e.Y),gr(e)};ot.prototype.close=function(){hs(this.g)};ot.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=es(e),e=n);t.j.push(new jd(t.fb++,e)),t.H==3&&gr(t)};ot.prototype.N=function(){this.g.h=null,delete this.j,hs(this.g),delete this.g,ot.$.N.call(this)};function nu(e){os.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(let n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}$(nu,os);function ru(){as.call(this),this.status=1}$(ru,as);function ye(e){this.g=e}$(ye,eu);ye.prototype.Ba=function(){H(this.g,"a")};ye.prototype.Aa=function(e){H(this.g,new nu(e))};ye.prototype.za=function(e){H(this.g,new ru)};ye.prototype.ya=function(){H(this.g,"b")};function nf(){this.blockSize=-1}function ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}$(ht,nf);ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ci(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}ht.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Ci(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Ci(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Ci(this,r),i=0;break}}this.h=i,this.i+=t};ht.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function V(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var rf={};function ms(e){return-128<=e&&128>e?gd(e,function(t){return new V([t|0],0>t?-1:0)}):new V([e|0],0>e?-1:0)}function _t(e){if(isNaN(e)||!isFinite(e))return me;if(0>e)return W(_t(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=$i;return new V(t,0)}function iu(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return W(iu(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=_t(Math.pow(t,8)),r=me,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=_t(Math.pow(t,s)),r=r.R(s).add(_t(o))):(r=r.R(n),r=r.add(_t(o)))}return r}var $i=4294967296,me=ms(0),Ki=ms(1),ec=ms(16777216);p=V.prototype;p.ea=function(){if(ct(this))return-W(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:$i+r)*t,t*=$i}return e};p.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Ct(this))return"0";if(ct(this))return"-"+W(this).toString(e);for(var t=_t(Math.pow(e,6)),n=this,r="";;){var i=tr(n,t).g;n=Zn(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Ct(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};p.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Ct(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ct(e){return e.h==-1}p.X=function(e){return e=Zn(this,e),ct(e)?-1:Ct(e)?0:1};function W(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new V(n,~e.h).add(Ki)}p.abs=function(){return ct(this)?W(this):this};p.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new V(n,n[n.length-1]&-2147483648?-1:0)};function Zn(e,t){return e.add(W(t))}p.R=function(e){if(Ct(this)||Ct(e))return me;if(ct(this))return ct(e)?W(this).R(W(e)):W(W(this).R(e));if(ct(e))return W(this.R(W(e)));if(0>this.X(ec)&&0>e.X(ec))return _t(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,c=e.D(i)&65535;n[2*r+2*i]+=o*c,Qn(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Qn(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Qn(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Qn(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new V(n,0)};function Qn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Ke(e,t){this.g=e,this.h=t}function tr(e,t){if(Ct(t))throw Error("division by zero");if(Ct(e))return new Ke(me,me);if(ct(e))return t=tr(W(e),t),new Ke(W(t.g),W(t.h));if(ct(t))return t=tr(e,W(t)),new Ke(W(t.g),t.h);if(30<e.g.length){if(ct(e)||ct(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Ki,r=t;0>=r.X(e);)n=nc(n),r=nc(r);var i=de(n,1),s=de(r,1);for(r=de(r,2),n=de(n,2);!Ct(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=de(r,1),n=de(n,1)}return t=Zn(e,i.R(t)),new Ke(i,t)}for(i=me;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=_t(n),o=s.R(t);ct(o)||0<o.X(e);)n-=r,s=_t(n),o=s.R(t);Ct(s)&&(s=Ki),i=i.add(s),e=Zn(e,o)}return new Ke(i,e)}p.gb=function(e){return tr(this,e).h};p.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new V(n,this.h&e.h)};p.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new V(n,this.h|e.h)};p.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new V(n,this.h^e.h)};function nc(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new V(n,e.h)}function de(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new V(i,e.h)}Yn.prototype.createWebChannel=Yn.prototype.g;ot.prototype.send=ot.prototype.u;ot.prototype.open=ot.prototype.m;ot.prototype.close=ot.prototype.close;cr.NO_ERROR=0;cr.TIMEOUT=8;cr.HTTP_ERROR=6;Ic.COMPLETE="complete";Tc.EventType=cn;cn.OPEN="a";cn.CLOSE="b";cn.ERROR="c";cn.MESSAGE="d";j.prototype.listen=j.prototype.O;M.prototype.listenOnce=M.prototype.P;M.prototype.getLastError=M.prototype.Sa;M.prototype.getLastErrorCode=M.prototype.Ia;M.prototype.getStatus=M.prototype.da;M.prototype.getResponseJson=M.prototype.Wa;M.prototype.getResponseText=M.prototype.ja;M.prototype.send=M.prototype.ha;M.prototype.setWithCredentials=M.prototype.Oa;ht.prototype.digest=ht.prototype.l;ht.prototype.reset=ht.prototype.reset;ht.prototype.update=ht.prototype.j;V.prototype.add=V.prototype.add;V.prototype.multiply=V.prototype.R;V.prototype.modulo=V.prototype.gb;V.prototype.compare=V.prototype.X;V.prototype.toNumber=V.prototype.ea;V.prototype.toString=V.prototype.toString;V.prototype.getBits=V.prototype.D;V.fromNumber=_t;V.fromString=iu;var su=dt.createWebChannelTransport=function(){return new Yn},ou=dt.getStatEventTarget=function(){return ar()},pr=dt.ErrorCode=cr,au=dt.EventType=Ic,cu=dt.Event=Xt,gs=dt.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},uu=dt.FetchXmlHttpFactory=hn,mn=dt.WebChannel=Tc,lu=dt.XhrIo=M,hu=dt.Md5=ht,Yt=dt.Integer=V;var du="@firebase/firestore";var K=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};K.UNAUTHENTICATED=new K(null),K.GOOGLE_CREDENTIALS=new K("google-credentials-uid"),K.FIRST_PARTY=new K("first-party-uid"),K.MOCK_USER=new K("mock-user");var Fe="10.1.0";var re=new he("@firebase/firestore");function fu(){return re.logLevel}function _(e,...t){if(re.logLevel<=C.DEBUG){let n=t.map(Xo);re.debug(`Firestore (${Fe}): ${e}`,...n)}}function Nt(e,...t){if(re.logLevel<=C.ERROR){let n=t.map(Xo);re.error(`Firestore (${Fe}): ${e}`,...n)}}function Ae(e,...t){if(re.logLevel<=C.WARN){let n=t.map(Xo);re.warn(`Firestore (${Fe}): ${e}`,...n)}}function Xo(e){if(typeof e=="string")return e;try{return function(n){return JSON.stringify(n)}(e)}catch(t){return e}}function I(e="Unexpected state"){let t=`FIRESTORE (${Fe}) INTERNAL ASSERTION FAILED: `+e;throw Nt(t),new Error(t)}function O(e,t){e||I()}function b(e,t){return e}var f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},w=class extends Rt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var ft=class{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}};var Ir=class{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}},vs=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(K.UNAUTHENTICATED))}shutdown(){}},Es=class{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}},Is=class{constructor(t){this.t=t,this.currentUser=K.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i,i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve(),s=new ft;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ft,t.enqueueRetryable(()=>i(this.currentUser))};let o=()=>{let c=s;t.enqueueRetryable(()=>y(this,null,function*(){yield c.promise,yield i(this.currentUser)}))},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){let c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ft)}},0),o()}getToken(){let t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(O(typeof r.accessToken=="string"),new Ir(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let t=this.auth&&this.auth.getUid();return O(t===null||typeof t=="string"),new K(t)}},Ts=class{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=K.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}},As=class{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ts(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(K.FIRST_PARTY))}shutdown(){}invalidateToken(){}},Ss=class{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},bs=class{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){let r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);let o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};let i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){let s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(O(typeof n.token=="string"),this.R=n.token,new Ss(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};function sf(e){let t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}var Tr=class{static V(){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length,r="";for(;r.length<20;){let i=sf(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}};function x(e,t){return e<t?-1:e>t?1:0}function Se(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}var J=class e{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return e.fromMillis(Date.now())}static fromDate(t){return e.fromMillis(t.getTime())}static fromMillis(t){let n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new e(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?x(this.nanoseconds,t.nanoseconds):x(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var S=class e{constructor(t){this.timestamp=t}static fromTimestamp(t){return new e(t)}static min(){return new e(new J(0,0))}static max(){return new e(new J(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Ar=class e{constructor(t,n,r){n===void 0?n=0:n>t.length&&I(),r===void 0?r=t.length-n:r>t.length-n&&I(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return e.comparator(this,t)===0}child(t){let n=this.segments.slice(this.offset,this.limit());return t instanceof e?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){let r=Math.min(t.length,n.length);for(let i=0;i<r;i++){let s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}},L=class e extends Ar{construct(t,n,r){return new e(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){let n=[];for(let r of t){if(r.indexOf("//")>=0)throw new w(f.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new e(n)}static emptyPath(){return new e([])}},of=/^[_a-zA-Z][_a-zA-Z0-9]*$/,lt=class e extends Ar{construct(t,n,r){return new e(t,n,r)}static isValidIdentifier(t){return of.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),e.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new e(["__name__"])}static fromServerFormat(t){let n=[],r="",i=0,s=()=>{if(r.length===0)throw new w(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""},o=!1;for(;i<t.length;){let a=t[i];if(a==="\\"){if(i+1===t.length)throw new w(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);let c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new w(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new e(n)}static emptyPath(){return new e([])}};var v=class e{constructor(t){this.path=t}static fromPath(t){return new e(L.fromString(t))}static fromName(t){return new e(L.fromString(t).popFirst(5))}static empty(){return new e(L.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&L.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return L.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new e(new L(t.slice()))}};var Rs=class{constructor(t,n,r,i){this.indexId=t,this.collectionGroup=n,this.fields=r,this.indexState=i}};Rs.UNKNOWN_ID=-1;function af(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=S.fromTimestamp(r===1e9?new J(n+1,0):new J(n,r));return new ie(i,v.empty(),t)}function cf(e){return new ie(e.readTime,e.key,-1)}var ie=class e{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new e(S.min(),v.empty(),-1)}static max(){return new e(S.max(),v.empty(),-1)}};function uf(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=v.comparator(e.documentKey,t.documentKey),n!==0?n:x(e.largestBatchId,t.largestBatchId))}var lf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",Ps=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}};function xn(e){return y(this,null,function*(){if(e.code!==f.FAILED_PRECONDITION||e.message!==lf)throw e;_("LocalStore","Unexpectedly lost primary lease")})}var g=class e{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new e((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{let n=t();return n instanceof e?n:e.resolve(n)}catch(n){return e.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):e.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):e.reject(n)}static resolve(t){return new e((n,r)=>{n(t)})}static reject(t){return new e((n,r)=>{r(t)})}static waitFor(t){return new e((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(t){let n=e.resolve(!1);for(let r of t)n=n.next(i=>i?e.resolve(i):r());return n}static forEach(t,n){let r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new e((r,i)=>{let s=t.length,o=new Array(s),a=0;for(let c=0;c<s;c++){let u=c;n(t[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(t,n){return new e((r,i)=>{let s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}};function Vn(e){return e.name==="IndexedDbTransactionError"}var wn=class{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){let t=++this.previousValue;return this._e&&this._e(t),t}};wn.ae=-1;function ei(e){return e==null}function vn(e){return e===0&&1/e==-1/0}function hf(e){return typeof e=="number"&&Number.isInteger(e)&&!vn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}var df=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Bg=[...df,"documentOverlays"],ff=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],mf=ff,qg=[...mf,"indexConfiguration","indexState","indexEntries"];function mu(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ue(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Bu(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}var B=class e{constructor(t,n){this.comparator=t,this.root=n||vt.EMPTY}insert(t,n){return new e(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(t){return new e(this.comparator,this.root.remove(t,this.comparator).copy(null,null,vt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){let r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){let t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ve(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ve(this.root,t,this.comparator,!1)}getReverseIterator(){return new ve(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ve(this.root,t,this.comparator,!0)}},ve=class{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop(),n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}},vt=class e{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r!=null?r:e.RED,this.left=i!=null?i:e.EMPTY,this.right=s!=null?s:e.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new e(t!=null?t:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this,s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return e.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){let t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){let t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){let t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){let t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();let t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}};vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(t,n,r,i,s){return this}insert(t,n,r){return new vt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var et=class e{constructor(t){this.comparator=t,this.data=new B(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){let r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){let n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sr(this.data.getIterator())}getIteratorFrom(t){return new Sr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof e)||this.size!==t.size)return!1;let n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){let i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let t=[];return this.forEach(n=>{t.push(n)}),t}toString(){let t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){let n=new e(this.comparator);return n.data=t,n}},Sr=class{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var ut=class e{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new e([])}unionWith(t){let n=new et(lt.comparator);for(let r of this.fields)n=n.add(r);for(let r of t)n=n.add(r);return new e(n.toArray())}covers(t){for(let n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Se(this.fields,t.fields,(n,r)=>n.isEqual(r))}};var br=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var nt=class e{constructor(t){this.binaryString=t}static fromBase64String(t){let n=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new br("Invalid base64 string: "+s):s}}(t);return new e(n)}static fromUint8Array(t){let n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new e(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){let r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return x(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}};nt.EMPTY_BYTE_STRING=new nt("");var gf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ut(e){if(O(!!e),typeof e=="string"){let t=0,n=gf.exec(e);if(O(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}let r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:F(e.seconds),nanos:F(e.nanos)}}function F(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Gt(e){return typeof e=="string"?nt.fromBase64String(e):nt.fromUint8Array(e)}function Yo(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Zo(e){let t=e.mapValue.fields.__previous_value__;return Yo(t)?Zo(t):t}function En(e){let t=Ut(e.mapValue.fields.__local_write_time__.timestampValue);return new J(t.seconds,t.nanos)}var Ds=class{constructor(t,n,r,i,s,o,a,c,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}},Rr=class e{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new e("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof e&&t.projectId===this.projectId&&t.database===this.database}};var yr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function se(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Yo(e)?4:qu(e)?9007199254740991:10:I()}function It(e,t){if(e===t)return!0;let n=se(e);if(n!==se(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return En(e).isEqual(En(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let o=Ut(i.timestampValue),a=Ut(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Gt(i.bytesValue).isEqual(Gt(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return F(i.geoPointValue.latitude)===F(s.geoPointValue.latitude)&&F(i.geoPointValue.longitude)===F(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return F(i.integerValue)===F(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let o=F(i.doubleValue),a=F(s.doubleValue);return o===a?vn(o)===vn(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Se(e.arrayValue.values||[],t.arrayValue.values||[],It);case 10:return function(i,s){let o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(mu(o)!==mu(a))return!1;for(let c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!It(o[c],a[c])))return!1;return!0}(e,t);default:return I()}}function In(e,t){return(e.values||[]).find(n=>It(n,t))!==void 0}function be(e,t){if(e===t)return 0;let n=se(e),r=se(t);if(n!==r)return x(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return x(e.booleanValue,t.booleanValue);case 2:return function(s,o){let a=F(s.integerValue||s.doubleValue),c=F(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return gu(e.timestampValue,t.timestampValue);case 4:return gu(En(e),En(t));case 5:return x(e.stringValue,t.stringValue);case 6:return function(s,o){let a=Gt(s),c=Gt(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){let a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){let l=x(a[u],c[u]);if(l!==0)return l}return x(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){let a=x(F(s.latitude),F(o.latitude));return a!==0?a:x(F(s.longitude),F(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){let a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){let l=be(a[u],c[u]);if(l)return l}return x(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===yr.mapValue&&o===yr.mapValue)return 0;if(s===yr.mapValue)return 1;if(o===yr.mapValue)return-1;let a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){let d=x(c[h],l[h]);if(d!==0)return d;let m=be(a[c[h]],u[l[h]]);if(m!==0)return m}return x(c.length,l.length)}(e.mapValue,t.mapValue);default:throw I()}}function gu(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return x(e,t);let n=Ut(e),r=Ut(t),i=x(n.seconds,r.seconds);return i!==0?i:x(n.nanos,r.nanos)}function Re(e){return Cs(e)}function Cs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){let r=Ut(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Gt(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return v.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(let s of n.values||[])i?i=!1:r+=",",r+=Cs(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){let r=Object.keys(n.fields||{}).sort(),i="{",s=!0;for(let o of r)s?s=!1:i+=",",i+=`${o}:${Cs(n.fields[o])}`;return i+"}"}(e.mapValue):I()}function xs(e){return!!e&&"integerValue"in e}function ta(e){return!!e&&"arrayValue"in e}function pu(e){return!!e&&"nullValue"in e}function yu(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function vr(e){return!!e&&"mapValue"in e}function pn(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return ue(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=pn(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=pn(e.arrayValue.values[n]);return t}return Object.assign({},e)}function qu(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}var at=class e{constructor(t){this.value=t}static empty(){return new e({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!vr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=pn(n)}setAll(t){let n=lt.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){let c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=pn(o):i.push(a.lastSegment())});let s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){let n=this.field(t.popLast());vr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return It(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];vr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){ue(n,(i,s)=>t[i]=s);for(let i of r)delete t[i]}clone(){return new e(pn(this.value))}};function Uu(e){let t=[];return ue(e.fields,(n,r)=>{let i=new lt([n]);if(vr(r)){let s=Uu(r.mapValue).fields;if(s.length===0)t.push(i);else for(let o of s)t.push(i.child(o))}else t.push(i)}),new ut(t)}var mt=class e{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new e(t,0,S.min(),S.min(),S.min(),at.empty(),0)}static newFoundDocument(t,n,r,i){return new e(t,1,n,S.min(),r,i,0)}static newNoDocument(t,n){return new e(t,2,n,S.min(),S.min(),at.empty(),0)}static newUnknownDocument(t,n){return new e(t,3,n,S.min(),S.min(),at.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(S.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var Pe=class{constructor(t,n){this.position=t,this.inclusive=n}};function _u(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],o=e.position[i];if(s.field.isKeyField()?r=v.comparator(v.fromName(o.referenceValue),n.key):r=be(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function wu(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!It(e.position[n],t.position[n]))return!1;return!0}var ne=class{constructor(t,n="asc"){this.field=t,this.dir=n}};function pf(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}var Pr=class{},z=class e extends Pr{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Ns(t,n,r):n==="array-contains"?new Ms(t,r):n==="in"?new Fs(t,r):n==="not-in"?new Ls(t,r):n==="array-contains-any"?new Bs(t,r):new e(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new ks(t,r):new Os(t,r)}matches(t){let n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(be(n,this.value)):n!==null&&se(this.value)===se(n)&&this.matchesComparison(be(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}},Tt=class e extends Pr{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new e(t,n)}matches(t){return Gu(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(let n of this.getFlattenedFilters())if(t(n))return n;return null}};function Gu(e){return e.op==="and"}function zu(e){return yf(e)&&Gu(e)}function yf(e){for(let t of e.filters)if(t instanceof Tt)return!1;return!0}function Vs(e){if(e instanceof z)return e.field.canonicalString()+e.op.toString()+Re(e.value);if(zu(e))return e.filters.map(t=>Vs(t)).join(",");{let t=e.filters.map(n=>Vs(n)).join(",");return`${e.op}(${t})`}}function ju(e,t){return e instanceof z?function(r,i){return i instanceof z&&r.op===i.op&&r.field.isEqual(i.field)&&It(r.value,i.value)}(e,t):e instanceof Tt?function(r,i){return i instanceof Tt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ju(o,i.filters[a]),!0):!1}(e,t):void I()}function $u(e){return e instanceof z?function(n){return`${n.field.canonicalString()} ${n.op} ${Re(n.value)}`}(e):e instanceof Tt?function(n){return n.op.toString()+" {"+n.getFilters().map($u).join(" ,")+"}"}(e):"Filter"}var Ns=class extends z{constructor(t,n,r){super(t,n,r),this.key=v.fromName(r.referenceValue)}matches(t){let n=v.comparator(t.key,this.key);return this.matchesComparison(n)}},ks=class extends z{constructor(t,n){super(t,"in",n),this.keys=Ku("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}},Os=class extends z{constructor(t,n){super(t,"not-in",n),this.keys=Ku("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}};function Ku(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>v.fromName(r.referenceValue))}var Ms=class extends z{constructor(t,n){super(t,"array-contains",n)}matches(t){let n=t.data.field(this.field);return ta(n)&&In(n.arrayValue,this.value)}},Fs=class extends z{constructor(t,n){super(t,"in",n)}matches(t){let n=t.data.field(this.field);return n!==null&&In(this.value.arrayValue,n)}},Ls=class extends z{constructor(t,n){super(t,"not-in",n)}matches(t){if(In(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let n=t.data.field(this.field);return n!==null&&!In(this.value.arrayValue,n)}},Bs=class extends z{constructor(t,n){super(t,"array-contains-any",n)}matches(t){let n=t.data.field(this.field);return!(!ta(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>In(this.value.arrayValue,r))}};var qs=class{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}};function vu(e,t=null,n=[],r=[],i=null,s=null,o=null){return new qs(e,t,n,r,i,s,o)}function ea(e){let t=b(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Vs(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ei(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Re(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Re(r)).join(",")),t.he=n}return t.he}function na(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!pf(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!ju(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!wu(e.startAt,t.startAt)&&wu(e.endAt,t.endAt)}function Us(e){return v.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}var De=class{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}};function _f(e,t,n,r,i,s,o,a){return new De(e,t,n,r,i,s,o,a)}function ra(e){return new De(e)}function Eu(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function wf(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function vf(e){for(let t of e.filters){let n=t.getFirstInequalityField();if(n!==null)return n}return null}function Ef(e){return e.collectionGroup!==null}function Ee(e){let t=b(e);if(t.Pe===null){t.Pe=[];let n=vf(t),r=wf(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new ne(n)),t.Pe.push(new ne(lt.keyField(),"asc"));else{let i=!1;for(let s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){let s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new ne(lt.keyField(),s))}}}return t.Pe}function kt(e){let t=b(e);if(!t.Ie)if(t.limitType==="F")t.Ie=vu(t.path,t.collectionGroup,Ee(t),t.filters,t.limit,t.startAt,t.endAt);else{let n=[];for(let s of Ee(t)){let o=s.dir==="desc"?"asc":"desc";n.push(new ne(s.field,o))}let r=t.endAt?new Pe(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Pe(t.startAt.position,t.startAt.inclusive):null;t.Ie=vu(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t.Ie}function Gs(e,t,n){return new De(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ni(e,t){return na(kt(e),kt(t))&&e.limitType===t.limitType}function Qu(e){return`${ea(kt(e))}|lt:${e.limitType}`}function zs(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>$u(i)).join(", ")}]`),ei(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Re(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Re(i)).join(",")),`Target(${r})`}(kt(e))}; limitType=${e.limitType})`}function ri(e,t){return t.isFoundDocument()&&function(r,i){let s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):v.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(let s of Ee(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(let s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,c){let u=_u(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Ee(r),i)||r.endAt&&!function(o,a,c){let u=_u(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Ee(r),i))}(e,t)}function If(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Wu(e){return(t,n)=>{let r=!1;for(let i of Ee(e)){let s=Tf(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Tf(e,t,n){let r=e.field.isKeyField()?v.comparator(t.key,n.key):function(s,o,a){let c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?be(c,u):I()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return I()}}var zt=class{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){let n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(let[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){let r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){let n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ue(this.inner,(n,r)=>{for(let[i,s]of r)t(i,s)})}isEmpty(){return Bu(this.inner)}size(){return this.innerSize}};var Af=new B(v.comparator);function Ot(){return Af}var Hu=new B(v.comparator);function gn(...e){let t=Hu;for(let n of e)t=t.insert(n.key,n);return t}function Ju(e){let t=Hu;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Zt(){return yn()}function Xu(){return yn()}function yn(){return new zt(e=>e.toString(),(e,t)=>e.isEqual(t))}var Sf=new B(v.comparator),bf=new et(v.comparator);function P(...e){let t=bf;for(let n of e)t=t.add(n);return t}var Rf=new et(x);function Pf(){return Rf}function Yu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vn(t)?"-0":t}}function Zu(e){return{integerValue:""+e}}function Df(e,t){return hf(t)?Zu(t):Yu(e,t)}var Ce=class{constructor(){this._=void 0}};function Cf(e,t,n){return e instanceof xe?function(i,s){let o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Yo(s)&&(s=Zo(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof oe?el(e,t):e instanceof ae?nl(e,t):function(i,s){let o=tl(i,s),a=Iu(o)+Iu(i.Te);return xs(o)&&xs(i.Te)?Zu(a):Yu(i.serializer,a)}(e,t)}function xf(e,t,n){return e instanceof oe?el(e,t):e instanceof ae?nl(e,t):n}function tl(e,t){return e instanceof Ve?function(r){return xs(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}var xe=class extends Ce{},oe=class extends Ce{constructor(t){super(),this.elements=t}};function el(e,t){let n=rl(t);for(let r of e.elements)n.some(i=>It(i,r))||n.push(r);return{arrayValue:{values:n}}}var ae=class extends Ce{constructor(t){super(),this.elements=t}};function nl(e,t){let n=rl(t);for(let r of e.elements)n=n.filter(i=>!It(i,r));return{arrayValue:{values:n}}}var Ve=class extends Ce{constructor(t,n){super(),this.serializer=t,this.Te=n}};function Iu(e){return F(e.integerValue||e.doubleValue)}function rl(e){return ta(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Vf(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof oe&&i instanceof oe||r instanceof ae&&i instanceof ae?Se(r.elements,i.elements,It):r instanceof Ve&&i instanceof Ve?It(r.Te,i.Te):r instanceof xe&&i instanceof xe}(e.transform,t.transform)}var js=class{constructor(t,n){this.version=t,this.transformResults=n}},Vt=class e{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new e}static exists(t){return new e(void 0,t)}static updateTime(t){return new e(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}};function Er(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}var Ne=class{};function il(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Tn(e.key,Vt.none()):new ce(e.key,e.data,Vt.none());{let n=e.data,r=at.empty(),i=new et(lt.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new At(e.key,r,new ut(i.toArray()),Vt.none())}}function Nf(e,t,n){e instanceof ce?function(i,s,o){let a=i.value.clone(),c=Au(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof At?function(i,s,o){if(!Er(i.precondition,s))return void s.convertToUnknownDocument(o.version);let a=Au(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(sl(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function _n(e,t,n,r){return e instanceof ce?function(s,o,a,c){if(!Er(s.precondition,o))return a;let u=s.value.clone(),l=Su(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof At?function(s,o,a,c){if(!Er(s.precondition,o))return a;let u=Su(s.fieldTransforms,c,o),l=o.data;return l.setAll(sl(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return Er(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function kf(e,t){let n=null;for(let r of e.fieldTransforms){let i=t.data.field(r.field),s=tl(r.transform,i||null);s!=null&&(n===null&&(n=at.empty()),n.set(r.field,s))}return n||null}function Tu(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Se(r,i,(s,o)=>Vf(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}var ce=class extends Ne{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},At=class extends Ne{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function sl(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function Au(e,t,n){let r=new Map;O(e.length===n.length);for(let i=0;i<n.length;i++){let s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,xf(o,a,n[i]))}return r}function Su(e,t,n){let r=new Map;for(let i of e){let s=i.transform,o=n.data.field(i.field);r.set(i.field,Cf(s,o,t))}return r}var Tn=class extends Ne{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},$s=class extends Ne{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var Ks=class{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){let r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){let s=this.mutations[i];s.key.isEqual(t.key)&&Nf(s,t,r[i])}}applyToLocalView(t,n){for(let r of this.baseMutations)r.key.isEqual(t.key)&&(n=_n(r,t,n,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(t.key)&&(n=_n(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){let r=Xu();return this.mutations.forEach(i=>{let s=t.get(i.key),o=s.overlayedDocument,a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;let c=il(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(S.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),P())}isEqual(t){return this.batchId===t.batchId&&Se(this.mutations,t.mutations,(n,r)=>Tu(n,r))&&Se(this.baseMutations,t.baseMutations,(n,r)=>Tu(n,r))}},Qs=class e{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){O(t.mutations.length===r.length);let i=function(){return Sf}(),s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new e(t,n,r,i)}};var Ws=class{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var Hs=class{constructor(t,n){this.count=t,this.unchangedNames=n}};var q,D;function Of(e){switch(e){default:return I();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function ol(e){if(e===void 0)return Nt("GRPC error has no .code"),f.UNKNOWN;switch(e){case q.OK:return f.OK;case q.CANCELLED:return f.CANCELLED;case q.UNKNOWN:return f.UNKNOWN;case q.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case q.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case q.INTERNAL:return f.INTERNAL;case q.UNAVAILABLE:return f.UNAVAILABLE;case q.UNAUTHENTICATED:return f.UNAUTHENTICATED;case q.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case q.NOT_FOUND:return f.NOT_FOUND;case q.ALREADY_EXISTS:return f.ALREADY_EXISTS;case q.PERMISSION_DENIED:return f.PERMISSION_DENIED;case q.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case q.ABORTED:return f.ABORTED;case q.OUT_OF_RANGE:return f.OUT_OF_RANGE;case q.UNIMPLEMENTED:return f.UNIMPLEMENTED;case q.DATA_LOSS:return f.DATA_LOSS;default:return I()}}(D=q||(q={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";var Js=class e{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return _r}static getOrCreateInstance(){return _r===null&&(_r=new e),_r}onExistenceFilterMismatch(t){let n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}},_r=null;function Mf(){return new TextEncoder}var Ff=new Yt([4294967295,4294967295],0);function bu(e){let t=Mf().encode(e),n=new hu;return n.update(t),new Uint8Array(n.digest())}function Ru(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Yt([n,r],0),new Yt([i,s],0)]}var Xs=class e{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new te(`Invalid padding: ${n}`);if(r<0)throw new te(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new te(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new te(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*t.length-n,this.Ae=Yt.fromNumber(this.de)}Re(t,n,r){let i=t.add(n.multiply(Yt.fromNumber(r)));return i.compare(Ff)===1&&(i=new Yt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.de===0)return!1;let n=bu(t),[r,i]=Ru(n);for(let s=0;s<this.hashCount;s++){let o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(t,n,r){let i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new e(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.de===0)return;let n=bu(t),[r,i]=Ru(n);for(let s=0;s<this.hashCount;s++){let o=this.Re(r,i,s);this.me(o)}}me(t){let n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}},te=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var Dr=class e{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){let i=new Map;return i.set(t,An.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new e(S.min(),i,new B(x),Ot(),P())}},An=class e{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new e(r,n,P(),P(),P())}};var Ie=class{constructor(t,n,r,i){this.fe=t,this.removedTargetIds=n,this.key=r,this.ge=i}},Cr=class{constructor(t,n){this.targetId=t,this.pe=n}},xr=class{constructor(t,n,r=nt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}},Vr=class{constructor(){this.ye=0,this.we=Du(),this.Se=nt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=P(),n=P(),r=P();return this.we.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:I()}}),new An(this.Se,this.be,t,n,r)}xe(){this.De=!1,this.we=Du()}Oe(t,n){this.De=!0,this.we=this.we.insert(t,n)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}},Ys=class{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=Ot(),this.$e=Pu(),this.Ue=new B(x)}We(t){for(let n of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(n,t.ge):this.ze(n,t.key,t.ge);for(let n of t.removedTargetIds)this.ze(n,t.key,t.ge)}je(t){this.forEachTarget(t,n=>{let r=this.He(n);switch(t.state){case 0:this.Je(n)&&r.Fe(t.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(t.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(t){var n,r;let i=t.targetId,s=t.pe.count,o=this.Xe(i);if(o){let a=o.target;if(Us(a))if(s===0){let c=new v(a.path);this.ze(i,c,mt.newNoDocument(c,S.min()))}else O(s===1);else{let c=this.et(i);if(c!==s){let u=this.tt(t,c);if(u.status!==0){this.Ye(i);let l=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,l)}(n=Js.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,m,A){var R,E,N,G,Q,it;let bt={localCacheCount:m,existenceFilterCount:A.count},st=A.unchangedNames;return st&&(bt.bloomFilter={applied:h===0,hashCount:(R=st==null?void 0:st.hashCount)!==null&&R!==void 0?R:0,bitmapLength:(G=(N=(E=st==null?void 0:st.bits)===null||E===void 0?void 0:E.bitmap)===null||N===void 0?void 0:N.length)!==null&&G!==void 0?G:0,padding:(it=(Q=st==null?void 0:st.bits)===null||Q===void 0?void 0:Q.padding)!==null&&it!==void 0?it:0},d&&(bt.bloomFilter.mightContain=d)),bt}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,c,t.pe))}}}}tt(t,n){let{unchangedNames:r,count:i}=t.pe;if(!r||!r.bits)return{status:1};let{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r,c,u;try{c=Gt(s).toUint8Array()}catch(h){if(h instanceof br)return Ae("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new Xs(c,o,a)}catch(h){return Ae(h instanceof te?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}let l=h=>{let d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===n-this.it(t.targetId,l)?0:2,nt:l}}it(t,n){let r=this.qe.getRemoteKeysForTarget(t),i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(t,s,null),i++)}),i}st(t){let n=new Map;this.Qe.forEach((s,o)=>{let a=this.Xe(o);if(a){if(s.current&&Us(a.target)){let c=new v(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,mt.newNoDocument(c,t))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=P();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{let u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(t));let i=new Dr(t,n,this.Ue,this.Ke,r);return this.Ke=Ot(),this.$e=Pu(),this.Ue=new B(x),i}Ge(t,n){if(!this.Je(t))return;let r=this.ot(t,n.key)?2:0;this.He(t).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t))}ze(t,n,r){if(!this.Je(t))return;let i=this.He(t);this.ot(t,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(t)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(t){this.Qe.delete(t)}et(t){let n=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let n=this.Qe.get(t);return n||(n=new Vr,this.Qe.set(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new et(x),this.$e=this.$e.insert(t,n)),n}Je(t){let n=this.Xe(t)!==null;return n||_("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){let n=this.Qe.get(t);return n&&n.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new Vr),this.qe.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ot(t,n){return this.qe.getRemoteKeysForTarget(t).has(n)}};function Pu(){return new B(v.comparator)}function Du(){return new B(v.comparator)}var Lf=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Bf=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),qf=(()=>({and:"AND",or:"OR"}))(),Zs=class{constructor(t,n){this.databaseId=t,this.useProto3Json=n}};function to(e,t){return e.useProto3Json||ei(t)?t:{value:t}}function Nr(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function al(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Uf(e,t){return Nr(e,t.toTimestamp())}function Et(e){return O(!!e),S.fromTimestamp(function(n){let r=Ut(n);return new J(r.seconds,r.nanos)}(e))}function ia(e,t){return function(r){return new L(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function cl(e){let t=L.fromString(e);return O(dl(t)),t}function eo(e,t){return ia(e.databaseId,t.path)}function ps(e,t){let n=cl(t);if(n.get(1)!==e.databaseId.projectId)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new v(ul(n))}function no(e,t){return ia(e.databaseId,t)}function Gf(e){let t=cl(e);return t.length===4?L.emptyPath():ul(t)}function ro(e){return new L(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ul(e){return O(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Cu(e,t,n){return{name:eo(e,t),fields:n.value.mapValue.fields}}function zf(e,t){let n;if("targetChange"in t){t.targetChange;let r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(O(l===void 0||typeof l=="string"),nt.fromBase64String(l||"")):(O(l===void 0||l instanceof Uint8Array),nt.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){let l=u.code===void 0?f.UNKNOWN:ol(u.code);return new w(l,u.message||"")}(o);n=new xr(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=ps(e,r.document.name),s=Et(r.document.updateTime),o=r.document.createTime?Et(r.document.createTime):S.min(),a=new at({mapValue:{fields:r.document.fields}}),c=mt.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Ie(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=ps(e,r.document),s=r.readTime?Et(r.readTime):S.min(),o=mt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ie([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=ps(e,r.document),s=r.removedTargetIds||[];n=new Ie([],s,i,null)}else{if(!("filter"in t))return I();{t.filter;let r=t.filter;r.targetId;let{count:i=0,unchangedNames:s}=r,o=new Hs(i,s),a=r.targetId;n=new Cr(a,o)}}return n}function jf(e,t){let n;if(t instanceof ce)n={update:Cu(e,t.key,t.value)};else if(t instanceof Tn)n={delete:eo(e,t.key)};else if(t instanceof At)n={update:Cu(e,t.key,t.data),updateMask:Zf(t.fieldMask)};else{if(!(t instanceof $s))return I();n={verify:eo(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){let a=o.transform;if(a instanceof xe)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof oe)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ae)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ve)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw I()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Uf(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:I()}(e,t.precondition)),n}function $f(e,t){return e&&e.length>0?(O(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?Et(i.updateTime):Et(s);return o.isEqual(S.min())&&(o=Et(s)),new js(o,i.transformResults||[])}(n,t))):[]}function Kf(e,t){return{documents:[no(e,t.path)]}}function Qf(e,t){let n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=no(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=no(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);let i=function(c){if(c.length!==0)return hl(Tt.create(c,"and"))}(t.filters);i&&(n.structuredQuery.where=i);let s=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:_e(h.field),direction:Jf(h.dir)}}(u))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);let o=to(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function Wf(e){let t=Gf(e.parent),n=e.structuredQuery,r=n.from?n.from.length:0,i=null;if(r>0){O(r===1);let l=n.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let s=[];n.where&&(s=function(h){let d=ll(h);return d instanceof Tt&&zu(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(A){return new ne(we(A.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,ei(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){let d=!!h.before,m=h.values||[];return new Pe(m,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){let d=!h.before,m=h.values||[];return new Pe(m,d)}(n.endAt)),_f(t,i,o,s,a,"F",c,u)}function Hf(e,t){let n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return I()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function ll(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":let r=we(n.unaryFilter.field);return z.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=we(n.unaryFilter.field);return z.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=we(n.unaryFilter.field);return z.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let o=we(n.unaryFilter.field);return z.create(o,"!=",{nullValue:"NULL_VALUE"});default:return I()}}(e):e.fieldFilter!==void 0?function(n){return z.create(we(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Tt.create(n.compositeFilter.filters.map(r=>ll(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return I()}}(n.compositeFilter.op))}(e):I()}function Jf(e){return Lf[e]}function Xf(e){return Bf[e]}function Yf(e){return qf[e]}function _e(e){return{fieldPath:e.canonicalString()}}function we(e){return lt.fromServerFormat(e.fieldPath)}function hl(e){return e instanceof z?function(n){if(n.op==="=="){if(yu(n.value))return{unaryFilter:{field:_e(n.field),op:"IS_NAN"}};if(pu(n.value))return{unaryFilter:{field:_e(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(yu(n.value))return{unaryFilter:{field:_e(n.field),op:"IS_NOT_NAN"}};if(pu(n.value))return{unaryFilter:{field:_e(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_e(n.field),op:Xf(n.op),value:n.value}}}(e):e instanceof Tt?function(n){let r=n.getFilters().map(i=>hl(i));return r.length===1?r[0]:{compositeFilter:{op:Yf(n.op),filters:r}}}(e):I()}function Zf(e){let t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function dl(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}var Sn=class e{constructor(t,n,r,i,s=S.min(),o=S.min(),a=nt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new e(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new e(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}};var io=class{constructor(t){this.ct=t}};function tm(e){let t=Wf({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Gs(t,t.limit,"L"):t}var kr=class{constructor(){}Pt(t,n){this.It(t,n),n.Tt()}It(t,n){if("nullValue"in t)this.Et(n,5);else if("booleanValue"in t)this.Et(n,10),n.dt(t.booleanValue?1:0);else if("integerValue"in t)this.Et(n,15),n.dt(F(t.integerValue));else if("doubleValue"in t){let r=F(t.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),vn(r)?n.dt(0):n.dt(r))}else if("timestampValue"in t){let r=t.timestampValue;this.Et(n,20),typeof r=="string"?n.At(r):(n.At(`${r.seconds||""}`),n.dt(r.nanos||0))}else if("stringValue"in t)this.Rt(t.stringValue,n),this.Vt(n);else if("bytesValue"in t)this.Et(n,30),n.ft(Gt(t.bytesValue)),this.Vt(n);else if("referenceValue"in t)this.gt(t.referenceValue,n);else if("geoPointValue"in t){let r=t.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in t?qu(t)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(t.mapValue,n),this.Vt(n)):"arrayValue"in t?(this.wt(t.arrayValue,n),this.Vt(n)):I()}Rt(t,n){this.Et(n,25),this.St(t,n)}St(t,n){n.At(t)}yt(t,n){let r=t.fields||{};this.Et(n,55);for(let i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(t,n){let r=t.values||[];this.Et(n,50);for(let i of r)this.It(i,n)}gt(t,n){this.Et(n,37),v.fromName(t).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(t,n){t.dt(n)}Vt(t){t.dt(2)}};kr.bt=new kr;var so=class{constructor(){this.sn=new oo}addToCollectionParentIndex(t,n){return this.sn.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(ie.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(ie.min())}updateCollectionGroup(t,n,r){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}},oo=class{constructor(){this.index={}}add(t){let n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new et(L.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){let n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new et(L.comparator)).toArray()}};var Gg=new Uint8Array(0);var wt=class e{constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(t){return new e(t,e.DEFAULT_COLLECTION_PERCENTILE,e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}};wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(41943040,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);var bn=class e{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new e(0)}static On(){return new e(-1)}};var ao=class{constructor(){this.changes=new zt(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,mt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();let r=this.changes.get(n);return r!==void 0?g.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}};var co=class{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}};var uo=class{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&_n(r.mutation,i,ut.empty(),J.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,P()).next(()=>r))}getLocalViewOfDocuments(t,n,r=P()){let i=Zt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=gn();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){let r=Zt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,P()))}populateOverlays(t,n,r){let i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Ot(),o=yn(),a=function(){return yn()}();return n.forEach((c,u)=>{let l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof At)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),_n(l.mutation,u,l.mutation.getFieldMask(),J.now())):o.set(u.key,ut.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new co(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){let r=yn(),i=new B((o,a)=>o-a),s=P();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(let a of o)a.keys().forEach(c=>{let u=n.get(c);if(u===null)return;let l=r.get(c)||ut.empty();l=a.applyToLocalView(u,l),r.set(c,l);let h=(i.get(a.batchId)||P()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{let o=[],a=i.getReverseIterator();for(;a.hasNext();){let c=a.getNext(),u=c.key,l=c.value,h=Xu();l.forEach(d=>{if(!s.has(d)){let m=il(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return g.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(s){return v.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Ef(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{let o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):g.resolve(Zt()),a=-1,c=s;return o.next(u=>g.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?g.resolve():this.remoteDocumentCache.getEntry(t,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,c,u,P())).next(l=>({batchId:a,changes:Ju(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new v(n)).next(r=>{let i=gn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){let i=n.collectionGroup,s=gn();return this.indexManager.getCollectionParents(t,i).next(o=>g.forEach(o,a=>{let c=function(l,h){return new De(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,c)=>{let u=c.getKey();s.get(u)===null&&(s=s.insert(u,mt.newInvalidDocument(u)))});let o=gn();return s.forEach((a,c)=>{let u=i.get(a);u!==void 0&&_n(u.mutation,c,ut.empty(),J.now()),ri(n,c)&&(o=o.insert(a,c))}),o})}};var lo=class{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,n){return g.resolve(this.ar.get(n))}saveBundleMetadata(t,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Et(i.createTime)}}(n)),g.resolve()}getNamedQuery(t,n){return g.resolve(this.ur.get(n))}saveNamedQuery(t,n){return this.ur.set(n.name,function(i){return{name:i.name,query:tm(i.bundledQuery),readTime:Et(i.readTime)}}(n)),g.resolve()}};var ho=class{constructor(){this.overlays=new B(v.comparator),this.cr=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){let r=Zt();return g.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ht(t,n,s)}),g.resolve()}removeOverlaysForBatchId(t,n,r){let i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),g.resolve()}getOverlaysForCollection(t,n,r){let i=Zt(),s=n.length+1,o=new v(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){let c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return g.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new B((u,l)=>u-l),o=this.overlays.getIterator();for(;o.hasNext();){let u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=Zt(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}let a=Zt(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return g.resolve(a)}ht(t,n,r){let i=this.overlays.get(r.key);if(i!==null){let o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ws(n,r));let s=this.cr.get(n);s===void 0&&(s=P(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}};var Rn=class{constructor(){this.lr=new et(U.hr),this.Pr=new et(U.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,n){let r=new U(t,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Er(new U(t,n))}dr(t,n){t.forEach(r=>this.removeReference(r,n))}Ar(t){let n=new v(new L([])),r=new U(n,t),i=new U(n,t+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(t=>this.Er(t))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){let n=new v(new L([])),r=new U(n,t),i=new U(n,t+1),s=P();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){let n=new U(t,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}},U=class{constructor(t,n){this.key=t,this.mr=n}static hr(t,n){return v.comparator(t.key,n.key)||x(t.mr,n.mr)}static Ir(t,n){return x(t.mr,n.mr)||v.comparator(t.key,n.key)}};var fo=class{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new et(U.hr)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){let s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let o=new Ks(s,n,r,i);this.mutationQueue.push(o);for(let a of i)this.pr=this.pr.add(new U(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(t,n){let r=n+1,i=this.wr(r),s=i<0?0:i;return g.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){let r=new U(n,0),i=new U(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{let a=this.yr(o.mr);s.push(a)}),g.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new et(x);return n.forEach(i=>{let s=new U(i,0),o=new U(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),g.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(t,n){let r=n.path,i=r.length+1,s=r;v.isDocumentKey(s)||(s=s.child(""));let o=new U(new v(s),0),a=new et(x);return this.pr.forEachWhile(c=>{let u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.mr)),!0)},o),g.resolve(this.Sr(a))}Sr(t){let n=[];return t.forEach(r=>{let i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){O(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return g.forEach(n.mutations,i=>{let s=new U(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.pr=r})}Cn(t){}containsKey(t,n){let r=new U(n,0),i=this.pr.firstAfterOrEqual(r);return g.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}br(t,n){return this.wr(t)}wr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yr(t){let n=this.wr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}};var mo=class{constructor(t){this.Dr=t,this.docs=function(){return new B(v.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){let r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){let n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){let r=this.docs.get(n);return g.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(t,n){let r=Ot();return n.forEach(i=>{let s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():mt.newInvalidDocument(i))}),g.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Ot(),o=n.path,a=new v(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){let{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||uf(cf(l),r)<=0||(i.has(l.key)||ri(n,l))&&(s=s.insert(l.key,l.mutableCopy()))}return g.resolve(s)}getAllFromCollectionGroup(t,n,r,i){I()}vr(t,n){return g.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new go(this)}getSize(t){return g.resolve(this.size)}},go=class extends ao{constructor(t){super(),this.sr=t}applyChanges(t){let n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(t,i)):this.sr.removeEntry(r)}),g.waitFor(n)}getFromCache(t,n){return this.sr.getEntry(t,n)}getAllFromCache(t,n){return this.sr.getEntries(t,n)}};var po=class{constructor(t){this.persistence=t,this.Cr=new zt(n=>ea(n),na),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Rn,this.targetCount=0,this.Or=bn.xn()}forEachTarget(t,n){return this.Cr.forEach((r,i)=>n(i)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),g.resolve()}Ln(t){this.Cr.set(t.target,t);let n=t.targetId;n>this.highestTargetId&&(this.Or=new bn(n),this.highestTargetId=n),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,n){return this.Ln(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.Ln(n),g.resolve()}removeTargetData(t,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,r){let i=0,s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),g.waitFor(s).next(()=>i)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){let r=this.Cr.get(n)||null;return g.resolve(r)}addMatchingKeys(t,n,r){return this.Mr.Tr(n,r),g.resolve()}removeMatchingKeys(t,n,r){this.Mr.dr(n,r);let i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),g.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Mr.Ar(n),g.resolve()}getMatchingKeysForTargetId(t,n){let r=this.Mr.Vr(n);return g.resolve(r)}containsKey(t,n){return g.resolve(this.Mr.containsKey(n))}};var yo=class{constructor(t,n){this.Nr={},this.overlays={},this.Br=new wn(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new po(this),this.indexManager=new so,this.remoteDocumentCache=function(i){return new mo(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new io(n),this.Qr=new lo(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new ho,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Nr[t.toKey()];return r||(r=new fo(n,this.referenceDelegate),this.Nr[t.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,n,r){_("MemoryPersistence","Starting transaction:",t);let i=new _o(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(t,n){return g.or(Object.values(this.Nr).map(r=>()=>r.containsKey(t,n)))}},_o=class extends Ps{constructor(t){super(),this.currentSequenceNumber=t}},wo=class e{constructor(t){this.persistence=t,this.Wr=new Rn,this.Gr=null}static zr(t){return new e(t)}get jr(){if(this.Gr)return this.Gr;throw I()}addReference(t,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),g.resolve()}removeReference(t,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.jr.add(n.toString()),g.resolve()}removeTarget(t,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Kr(){this.Gr=new Set}$r(t){let n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.jr,r=>{let i=v.fromPath(r);return this.Hr(t,i).next(s=>{s||n.removeEntry(i,S.min())})}).next(()=>(this.Gr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hr(t,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(t){return 0}Hr(t,n){return g.or([()=>g.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ur(t,n)])}};var vo=class e{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.Li=r,this.ki=i}static qi(t,n){let r=P(),i=P();for(let s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new e(t,n.fromCache,r,i)}};var Eo=class{constructor(){this.Qi=!1}initialize(t,n){this.Ki=t,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(t,n,r,i){return this.$i(t,n).next(s=>s||this.Ui(t,n,i,r)).next(s=>s||this.Wi(t,n))}$i(t,n){if(Eu(n))return g.resolve(null);let r=kt(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Gs(n,null,"F"),r=kt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{let o=P(...s);return this.Ki.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{let u=this.Gi(n,a);return this.zi(n,u,o,c.readTime)?this.$i(t,Gs(n,null,"F")):this.ji(t,u,n,c)}))})))}Ui(t,n,r,i){return Eu(n)||i.isEqual(S.min())?this.Wi(t,n):this.Ki.getDocuments(t,r).next(s=>{let o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(t,n):(fu()<=C.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zs(n)),this.ji(t,o,n,af(i,-1)))})}Gi(t,n){let r=new et(Wu(t));return n.forEach((i,s)=>{ri(t,s)&&(r=r.add(s))}),r}zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;let s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(t,n){return fu()<=C.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",zs(n)),this.Ki.getDocumentsMatchingQuery(t,n,ie.min())}ji(t,n,r,i){return this.Ki.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}};var Io=class{constructor(t,n,r,i){this.persistence=t,this.Hi=n,this.serializer=i,this.Ji=new B(x),this.Yi=new zt(s=>ea(s),na),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(r)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new uo(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}};function em(e,t,n,r){return new Io(e,t,n,r)}function fl(e,t){return y(this,null,function*(){let n=b(e);return yield n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{let o=[],a=[],c=P();for(let u of i){o.push(u.batchId);for(let l of u.mutations)c=c.add(l.key)}for(let u of s){a.push(u.batchId);for(let l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})})}function nm(e,t){let n=b(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=t.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){let h=u.batch,d=h.keys(),m=g.resolve();return d.forEach(A=>{m=m.next(()=>l.getEntry(c,A)).next(R=>{let E=u.docVersions.get(A);O(E!==null),R.version.compareTo(E)<0&&(h.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),l.addEntry(R)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=P();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function ml(e){let t=b(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.kr.getLastRemoteSnapshotVersion(n))}function rm(e,t){let n=b(e),r=t.snapshotVersion,i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{let o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;let a=[];t.targetChanges.forEach((l,h)=>{let d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,l.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?m=m.withResumeToken(nt.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):l.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(l.resumeToken,r)),i=i.insert(h,m),function(R,E,N){return R.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(d,m,l)&&a.push(n.kr.updateTargetData(s,m))});let c=Ot(),u=P();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(im(s,o,t.documentUpdates).next(l=>{c=l.ns,u=l.rs})),!r.isEqual(S.min())){let l=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return g.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.Ji=i,s))}function im(e,t,n){let r=P(),i=P();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Ot();return n.forEach((a,c)=>{let u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(S.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ns:o,rs:i}})}function sm(e,t){let n=b(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function om(e,t){let n=b(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,t).next(s=>s?(i=s,g.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new Sn(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(t,r.targetId)),r})}function To(e,t,n){return y(this,null,function*(){let r=b(e),i=r.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||(yield r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!Vn(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)})}function xu(e,t,n){let r=b(e),i=S.min(),s=P();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,u,l){let h=b(c),d=h.Yi.get(l);return d!==void 0?g.resolve(h.Ji.get(d)):h.kr.getTargetData(u,l)}(r,o,kt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,t,n?i:S.min(),n?s:P())).next(a=>(am(r,If(t),a),{documents:a,ss:s})))}function am(e,t,n){let r=e.Zi.get(t)||S.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.Zi.set(t,r)}var Or=class{constructor(){this.activeTargetIds=Pf()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){let t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}};var Ao=class{constructor(){this.Hs=new Or,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,n,r){this.Js[t]=n}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new Or,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}};var So=class{Ys(t){}shutdown(){}};var Mr=class{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(let t of this.ro)t(0)}no(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(let t of this.ro)t(1)}static v(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var wr=null;function ys(){return wr===null?wr=function(){return 268435456+Math.round(2147483648*Math.random())}():wr++,"0x"+wr.toString(16)}var cm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var bo=class{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}};var Z="WebChannelConnection",Ro=class extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;let r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){let a=ys(),c=this.mo(n,r);_("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);let u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(n,c,u,i).then(l=>(_("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw Ae("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fe}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){let i=cm[n];return`${this.To}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,n,r,i){let s=ys();return new Promise((o,a)=>{let c=new lu;c.setWithCredentials(!0),c.listenOnce(au.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case pr.NO_ERROR:let l=c.getResponseJson();_(Z,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(l)),o(l);break;case pr.TIMEOUT:_(Z,`RPC '${t}' ${s} timed out`),a(new w(f.DEADLINE_EXCEEDED,"Request time out"));break;case pr.HTTP_ERROR:let h=c.getStatus();if(_(Z,`RPC '${t}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);let m=d==null?void 0:d.error;if(m&&m.status&&m.message){let A=function(E){let N=E.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(N)>=0?N:f.UNKNOWN}(m.status);a(new w(A,m.message))}else a(new w(f.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new w(f.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{_(Z,`RPC '${t}' ${s} completed.`)}});let u=JSON.stringify(i);_(Z,`RPC '${t}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}wo(t,n,r){let i=ys(),s=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=su(),a=ou(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new uu({})),this.fo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;let l=s.join("");_(Z,`Creating RPC '${t}' stream ${i}: ${l}`,c);let h=o.createWebChannel(l,c),d=!1,m=!1,A=new bo({so:E=>{m?_(Z,`Not sending because RPC '${t}' stream ${i} is closed:`,E):(d||(_(Z,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),_(Z,`RPC '${t}' stream ${i} sending:`,E),h.send(E))},oo:()=>h.close()}),R=(E,N,G)=>{E.listen(N,Q=>{try{G(Q)}catch(it){setTimeout(()=>{throw it},0)}})};return R(h,mn.EventType.OPEN,()=>{m||_(Z,`RPC '${t}' stream ${i} transport opened.`)}),R(h,mn.EventType.CLOSE,()=>{m||(m=!0,_(Z,`RPC '${t}' stream ${i} transport closed`),A.Po())}),R(h,mn.EventType.ERROR,E=>{m||(m=!0,Ae(Z,`RPC '${t}' stream ${i} transport errored:`,E),A.Po(new w(f.UNAVAILABLE,"The operation could not be completed")))}),R(h,mn.EventType.MESSAGE,E=>{var N;if(!m){let G=E.data[0];O(!!G);let Q=G,it=Q.error||((N=Q[0])===null||N===void 0?void 0:N.error);if(it){_(Z,`RPC '${t}' stream ${i} received error:`,it);let bt=it.status,st=function($l){let _a=q[$l];if(_a!==void 0)return ol(_a)}(bt),ya=it.message;st===void 0&&(st=f.INTERNAL,ya="Unknown error status: "+bt+" with message "+it.message),m=!0,A.Po(new w(st,ya)),h.close()}else _(Z,`RPC '${t}' stream ${i} received:`,G),A.Io(G)}}),R(a,cu.STAT_EVENT,E=>{E.stat===gs.PROXY?_(Z,`RPC '${t}' stream ${i} detected buffering proxy`):E.stat===gs.NOPROXY&&_(Z,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.ho()},0),A}};function _s(){return typeof document!="undefined"?document:null}function ii(e){return new Zs(e,!0)}var Fr=class{constructor(t,n,r=1e3,i=1.5,s=6e4){this.ii=t,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();let n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),t())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}};var Lr=class{constructor(t,n,r,i,s,o,a,c){this.ii=t,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Fr(t,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}stop(){return y(this,null,function*(){this.$o()&&(yield this.close(0))})}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(t){this.Jo(),this.stream.send(t)}jo(){return y(this,null,function*(){if(this.Uo())return this.close(0)})}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}close(t,n){return y(this,null,function*(){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,t!==4?this.Ko.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(Nt(n.toString()),Nt("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,yield this.listener.uo(n)})}Zo(){}auth(){this.state=1;let t=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{t(()=>{let i=new w(f.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(t,n){let r=this.Xo(this.ko);this.stream=this.n_(t,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(()=>y(this,null,function*(){this.state=0,this.start()}))}t_(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.ko===t?n():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},Po=class extends Lr{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.Ko.reset();let n=zf(this.serializer,t),r=function(s){if(!("targetChange"in s))return S.min();let o=s.targetChange;return o.targetIds&&o.targetIds.length?S.min():o.readTime?Et(o.readTime):S.min()}(t);return this.listener.r_(n,r)}i_(t){let n={};n.database=ro(this.serializer),n.addTarget=function(s,o){let a,c=o.target;if(a=Us(c)?{documents:Kf(s,c)}:{query:Qf(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=al(s,o.resumeToken);let u=to(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(S.min())>0){a.readTime=Nr(s,o.snapshotVersion.toTimestamp());let u=to(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);let r=Hf(this.serializer,t);r&&(n.labels=r),this.Ho(n)}s_(t){let n={};n.database=ro(this.serializer),n.removeTarget=t,this.Ho(n)}},Do=class extends Lr{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(O(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();let n=$f(t.writeResults,t.commitTime),r=Et(t.commitTime);return this.listener.u_(r,n)}return O(!t.writeResults||t.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){let t={};t.database=ro(this.serializer),this.Ho(t)}a_(t){let n={streamToken:this.lastStreamToken,writes:t.map(r=>jf(this.serializer,r))};this.Ho(n)}};var Co=class extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}yo(t,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new w(f.UNKNOWN,s.toString())})}terminate(){this.h_=!0}};var xo=class{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(t){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,t==="Online"&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){let n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Nt(n),this.d_=!1):_("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}};var Vo=class{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(()=>y(this,null,function*(){le(this)&&(_("RemoteStore","Restarting streams for network reachability change."),yield function(c){return y(this,null,function*(){let u=b(c);u.y_.add(4),yield Nn(u),u.b_.set("Unknown"),u.y_.delete(4),yield si(u)})}(this))}))}),this.b_=new xo(r,i)}};function si(e){return y(this,null,function*(){if(le(e))for(let t of e.w_)yield t(!0)})}function Nn(e){return y(this,null,function*(){for(let t of e.w_)yield t(!1)})}function gl(e,t){let n=b(e);n.p_.has(t.targetId)||(n.p_.set(t.targetId,t),aa(n)?oa(n):Le(n).Uo()&&sa(n,t))}function pl(e,t){let n=b(e),r=Le(n);n.p_.delete(t),r.Uo()&&yl(n,t),n.p_.size===0&&(r.Uo()?r.zo():le(n)&&n.b_.set("Unknown"))}function sa(e,t){if(e.D_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(S.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Le(e).i_(t)}function yl(e,t){e.D_.Be(t),Le(e).s_(t)}function oa(e){e.D_=new Ys({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.p_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),Le(e).start(),e.b_.A_()}function aa(e){return le(e)&&!Le(e).$o()&&e.p_.size>0}function le(e){return b(e).y_.size===0}function _l(e){e.D_=void 0}function um(e){return y(this,null,function*(){e.p_.forEach((t,n)=>{sa(e,t)})})}function lm(e,t){return y(this,null,function*(){_l(e),aa(e)?(e.b_.m_(t),oa(e)):e.b_.set("Unknown")})}function hm(e,t,n){return y(this,null,function*(){if(e.b_.set("Online"),t instanceof xr&&t.state===2&&t.cause)try{yield function(i,s){return y(this,null,function*(){let o=s.cause;for(let a of s.targetIds)i.p_.has(a)&&(yield i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))})}(e,t)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),yield Br(e,r)}else if(t instanceof Ie?e.D_.We(t):t instanceof Cr?e.D_.Ze(t):e.D_.je(t),!n.isEqual(S.min()))try{let r=yield ml(e.localStore);n.compareTo(r)>=0&&(yield function(s,o){let a=s.D_.st(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){let l=s.p_.get(u);l&&s.p_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{let l=s.p_.get(c);if(!l)return;s.p_.set(c,l.withResumeToken(nt.EMPTY_BYTE_STRING,l.snapshotVersion)),yl(s,c);let h=new Sn(l.target,c,u,l.sequenceNumber);sa(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n))}catch(r){_("RemoteStore","Failed to raise snapshot:",r),yield Br(e,r)}})}function Br(e,t,n){return y(this,null,function*(){if(!Vn(t))throw t;e.y_.add(1),yield Nn(e),e.b_.set("Offline"),n||(n=()=>ml(e.localStore)),e.asyncQueue.enqueueRetryable(()=>y(this,null,function*(){_("RemoteStore","Retrying IndexedDB access"),yield n(),e.y_.delete(1),yield si(e)}))})}function wl(e,t){return t().catch(n=>Br(e,n,t))}function oi(e){return y(this,null,function*(){let t=b(e),n=jt(t),r=t.g_.length>0?t.g_[t.g_.length-1].batchId:-1;for(;dm(t);)try{let i=yield sm(t.localStore,r);if(i===null){t.g_.length===0&&n.zo();break}r=i.batchId,fm(t,i)}catch(i){yield Br(t,i)}vl(t)&&El(t)})}function dm(e){return le(e)&&e.g_.length<10}function fm(e,t){e.g_.push(t);let n=jt(e);n.Uo()&&n.__&&n.a_(t.mutations)}function vl(e){return le(e)&&!jt(e).$o()&&e.g_.length>0}function El(e){jt(e).start()}function mm(e){return y(this,null,function*(){jt(e).l_()})}function gm(e){return y(this,null,function*(){let t=jt(e);for(let n of e.g_)t.a_(n.mutations)})}function pm(e,t,n){return y(this,null,function*(){let r=e.g_.shift(),i=Qs.from(r,t,n);yield wl(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),yield oi(e)})}function ym(e,t){return y(this,null,function*(){t&&jt(e).__&&(yield function(r,i){return y(this,null,function*(){if(function(o){return Of(o)&&o!==f.ABORTED}(i.code)){let s=r.g_.shift();jt(r).Go(),yield wl(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),yield oi(r)}})}(e,t)),vl(e)&&El(e)})}function Vu(e,t){return y(this,null,function*(){let n=b(e);n.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");let r=le(n);n.y_.add(3),yield Nn(n),r&&n.b_.set("Unknown"),yield n.remoteSyncer.handleCredentialChange(t),n.y_.delete(3),yield si(n)})}function _m(e,t){return y(this,null,function*(){let n=b(e);t?(n.y_.delete(2),yield si(n)):t||(n.y_.add(2),yield Nn(n),n.b_.set("Unknown"))})}function Le(e){return e.v_||(e.v_=function(n,r,i){let s=b(n);return s.P_(),new Po(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{_o:um.bind(null,e),uo:lm.bind(null,e),r_:hm.bind(null,e)}),e.w_.push(t=>y(this,null,function*(){t?(e.v_.Go(),aa(e)?oa(e):e.b_.set("Unknown")):(yield e.v_.stop(),_l(e))}))),e.v_}function jt(e){return e.C_||(e.C_=function(n,r,i){let s=b(n);return s.P_(),new Do(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{_o:mm.bind(null,e),uo:ym.bind(null,e),c_:gm.bind(null,e),u_:pm.bind(null,e)}),e.w_.push(t=>y(this,null,function*(){t?(e.C_.Go(),yield oi(e)):(yield e.C_.stop(),e.g_.length>0&&(_("RemoteStore",`Stopping write stream with ${e.g_.length} pending writes`),e.g_=[]))}))),e.C_}var No=class e{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){let o=Date.now()+r,a=new e(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function ca(e,t){if(Nt("AsyncQueue",`${t}: ${e}`),Vn(e))return new w(f.UNAVAILABLE,`${t}: ${e}`);throw e}var qr=class e{constructor(t){this.comparator=t?(n,r)=>t(n,r)||v.comparator(n.key,r.key):(n,r)=>v.comparator(n.key,r.key),this.keyedMap=gn(),this.sortedSet=new B(this.comparator)}static emptySet(t){return new e(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){let n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){let n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){let n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof e)||this.size!==t.size)return!1;let n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){let i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){let t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){let r=new e;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}};var Ur=class{constructor(){this.F_=new B(v.comparator)}track(t){let n=t.doc.key,r=this.F_.get(n);r?t.type!==0&&r.type===3?this.F_=this.F_.insert(n,t):t.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.F_=this.F_.remove(n):t.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):I():this.F_=this.F_.insert(n,t)}M_(){let t=[];return this.F_.inorderTraversal((n,r)=>{t.push(r)}),t}},ke=class e{constructor(t,n,r,i,s,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,i,s){let o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new e(t,n,qr.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ni(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;let n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}};var ko=class{constructor(){this.x_=void 0,this.listeners=[]}},Oo=class{constructor(){this.queries=new zt(t=>Qu(t),ni),this.onlineState="Unknown",this.O_=new Set}};function Il(e,t){return y(this,null,function*(){let n=b(e),r=t.query,i=!1,s=n.queries.get(r);if(s||(i=!0,s=new ko),i)try{s.x_=yield n.onListen(r)}catch(o){let a=ca(o,`Initialization of query '${zs(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.N_(n.onlineState),s.x_&&t.B_(s.x_)&&ua(n)})}function Tl(e,t){return y(this,null,function*(){let n=b(e),r=t.query,i=!1,s=n.queries.get(r);if(s){let o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)})}function wm(e,t){let n=b(e),r=!1;for(let i of t){let s=i.query,o=n.queries.get(s);if(o){for(let a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&ua(n)}function vm(e,t,n){let r=b(e),i=r.queries.get(t);if(i)for(let s of i.listeners)s.onError(n);r.queries.delete(t)}function ua(e){e.O_.forEach(t=>{t.next()})}var Gr=class{constructor(t,n,r){this.query=t,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(t){if(!this.options.includeMetadataChanges){let r=[];for(let i of t.docChanges)i.type!==3&&r.push(i);t=new ke(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.k_?this.Q_(t)&&(this.L_.next(t),n=!0):this.K_(t,this.onlineState)&&(this.U_(t),n=!0),this.q_=t,n}onError(t){this.L_.error(t)}N_(t){this.onlineState=t;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,t)&&(this.U_(this.q_),n=!0),n}K_(t,n){if(!t.fromCache)return!0;let r=n!=="Offline";return(!this.options.W_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Q_(t){if(t.docChanges.length>0)return!0;let n=this.q_&&this.q_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(t){t=ke.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.k_=!0,this.L_.next(t)}};var zr=class{constructor(t){this.key=t}},jr=class{constructor(t){this.key=t}},Mo=class{constructor(t,n){this.query=t,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=P(),this.mutatedKeys=P(),this.na=Wu(t),this.ra=new qr(this.na)}get ia(){return this.X_}sa(t,n){let r=n?n.oa:new Ur,i=n?n.ra:this.ra,s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1,c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,h)=>{let d=i.get(l),m=ri(this.query,h)?h:null,A=!!d&&this.mutatedKeys.has(d.key),R=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations),E=!1;d&&m?d.data.isEqual(m.data)?A!==R&&(r.track({type:3,doc:m}),E=!0):this._a(d,m)||(r.track({type:2,doc:m}),E=!0,(c&&this.na(m,c)>0||u&&this.na(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),E=!0):d&&!m&&(r.track({type:1,doc:d}),E=!0,(c||u)&&(a=!0)),E&&(m?(o=o.add(m),s=R?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){let l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){let i=this.ra;this.ra=t.ra,this.mutatedKeys=t.mutatedKeys;let s=t.oa.M_();s.sort((u,l)=>function(d,m){let A=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return A(d)-A(m)}(u.type,l.type)||this.na(u.doc,l.doc)),this.aa(r);let o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,c=a!==this.ea;return this.ea=a,s.length!==0||c?{snapshot:new ke(this.query,t.ra,i,s,t.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Ur,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(t){return!this.X_.has(t)&&!!this.ra.has(t)&&!this.ra.get(t).hasLocalMutations}aa(t){t&&(t.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=t.current)}ua(){if(!this.current)return[];let t=this.ta;this.ta=P(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});let n=[];return t.forEach(r=>{this.ta.has(r)||n.push(new jr(r))}),this.ta.forEach(r=>{t.has(r)||n.push(new zr(r))}),n}ha(t){this.X_=t.ss,this.ta=P();let n=this.sa(t.documents);return this.applyChanges(n,!0)}Pa(){return ke.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}},Fo=class{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}},Lo=class{constructor(t){this.key=t,this.Ia=!1}},Bo=class{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new zt(a=>Qu(a),ni),this.da=new Map,this.Aa=new Set,this.Ra=new B(v.comparator),this.Va=new Map,this.ma=new Rn,this.fa={},this.ga=new Map,this.pa=bn.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}};function Em(e,t){return y(this,null,function*(){let n=xm(e),r,i,s=n.Ea.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{let o=yield om(n.localStore,kt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=yield Im(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&gl(n.remoteStore,o)}return i})}function Im(e,t,n,r,i){return y(this,null,function*(){e.wa=(h,d,m)=>function(R,E,N,G){return y(this,null,function*(){let Q=E.view.sa(N);Q.zi&&(Q=yield xu(R.localStore,E.query,!1).then(({documents:st})=>E.view.sa(st,Q)));let it=G&&G.targetChanges.get(E.targetId),bt=E.view.applyChanges(Q,R.isPrimaryClient,it);return ku(R,E.targetId,bt.ca),bt.snapshot})}(e,h,d,m);let s=yield xu(e.localStore,t,!0),o=new Mo(t,s.ss),a=o.sa(s.documents),c=An.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,c);ku(e,n,u.ca);let l=new Fo(t,n,o);return e.Ea.set(t,l),e.da.has(n)?e.da.get(n).push(t):e.da.set(n,[t]),u.snapshot})}function Tm(e,t){return y(this,null,function*(){let n=b(e),r=n.Ea.get(t),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!ni(s,t))),void n.Ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||(yield To(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),pl(n.remoteStore,r.targetId),qo(n,r.targetId)}).catch(xn))):(qo(n,r.targetId),yield To(n.localStore,r.targetId,!0))})}function Am(e,t,n){return y(this,null,function*(){let r=Vm(e);try{let i=yield function(o,a){let c=b(o),u=J.now(),l=a.reduce((m,A)=>m.add(A.key),P()),h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let A=Ot(),R=P();return c.Xi.getEntries(m,l).next(E=>{A=E,A.forEach((N,G)=>{G.isValidDocument()||(R=R.add(N))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,A)).next(E=>{h=E;let N=[];for(let G of a){let Q=kf(G,h.get(G.key).overlayedDocument);Q!=null&&N.push(new At(G.key,Q,Uu(Q.value.mapValue),Vt.exists(!0)))}return c.mutationQueue.addMutationBatch(m,u,N,a)}).next(E=>{d=E;let N=E.applyToLocalDocumentSet(h,R);return c.documentOverlayCache.saveOverlays(m,E.batchId,N)})}).then(()=>({batchId:d.batchId,changes:Ju(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.fa[o.currentUser.toKey()];u||(u=new B(x)),u=u.insert(a,c),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,n),yield kn(r,i.changes),yield oi(r.remoteStore)}catch(i){let s=ca(i,"Failed to persist write");n.reject(s)}})}function Al(e,t){return y(this,null,function*(){let n=b(e);try{let r=yield rm(n.localStore,t);t.targetChanges.forEach((i,s)=>{let o=n.Va.get(s);o&&(O(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?O(o.Ia):i.removedDocuments.size>0&&(O(o.Ia),o.Ia=!1))}),yield kn(n,r,t)}catch(r){yield xn(r)}})}function Nu(e,t,n){let r=b(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){let i=[];r.Ea.forEach((s,o)=>{let a=o.view.N_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){let c=b(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(let d of h.listeners)d.N_(a)&&(u=!0)}),u&&ua(c)}(r.eventManager,t),i.length&&r.Ta.r_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}function Sm(e,t,n){return y(this,null,function*(){let r=b(e);r.sharedClientState.updateQueryState(t,"rejected",n);let i=r.Va.get(t),s=i&&i.key;if(s){let o=new B(v.comparator);o=o.insert(s,mt.newNoDocument(s,S.min()));let a=P().add(s),c=new Dr(S.min(),new Map,new B(x),o,a);yield Al(r,c),r.Ra=r.Ra.remove(s),r.Va.delete(t),la(r)}else yield To(r.localStore,t,!1).then(()=>qo(r,t,n)).catch(xn)})}function bm(e,t){return y(this,null,function*(){let n=b(e),r=t.batch.batchId;try{let i=yield nm(n.localStore,t);bl(n,r,null),Sl(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),yield kn(n,i)}catch(i){yield xn(i)}})}function Rm(e,t,n){return y(this,null,function*(){let r=b(e);try{let i=yield function(o,a){let c=b(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(O(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,t);bl(r,t,n),Sl(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),yield kn(r,i)}catch(i){yield xn(i)}})}function Sl(e,t){(e.ga.get(t)||[]).forEach(n=>{n.resolve()}),e.ga.delete(t)}function bl(e,t,n){let r=b(e),i=r.fa[r.currentUser.toKey()];if(i){let s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.fa[r.currentUser.toKey()]=i}}function qo(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(let r of e.da.get(t))e.Ea.delete(r),n&&e.Ta.Sa(r,n);e.da.delete(t),e.isPrimaryClient&&e.ma.Ar(t).forEach(r=>{e.ma.containsKey(r)||Rl(e,r)})}function Rl(e,t){e.Aa.delete(t.path.canonicalString());let n=e.Ra.get(t);n!==null&&(pl(e.remoteStore,n),e.Ra=e.Ra.remove(t),e.Va.delete(n),la(e))}function ku(e,t,n){for(let r of n)r instanceof zr?(e.ma.addReference(r.key,t),Pm(e,r)):r instanceof jr?(_("SyncEngine","Document no longer in limbo: "+r.key),e.ma.removeReference(r.key,t),e.ma.containsKey(r.key)||Rl(e,r.key)):I()}function Pm(e,t){let n=t.key,r=n.path.canonicalString();e.Ra.get(n)||e.Aa.has(r)||(_("SyncEngine","New document in limbo: "+n),e.Aa.add(r),la(e))}function la(e){for(;e.Aa.size>0&&e.Ra.size<e.maxConcurrentLimboResolutions;){let t=e.Aa.values().next().value;e.Aa.delete(t);let n=new v(L.fromString(t)),r=e.pa.next();e.Va.set(r,new Lo(n)),e.Ra=e.Ra.insert(n,r),gl(e.remoteStore,new Sn(kt(ra(n.path)),r,"TargetPurposeLimboResolution",wn.ae))}}function kn(e,t,n){return y(this,null,function*(){let r=b(e),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,c)=>{o.push(r.wa(c,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);let l=vo.qi(c.targetId,u);s.push(l)}}))}),yield Promise.all(o),r.Ta.r_(i),yield function(c,u){return y(this,null,function*(){let l=b(c);try{yield l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(u,d=>g.forEach(d.Li,m=>l.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>g.forEach(d.ki,m=>l.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!Vn(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(let h of u){let d=h.targetId;if(!h.fromCache){let m=l.Ji.get(d),A=m.snapshotVersion,R=m.withLastLimboFreeSnapshotVersion(A);l.Ji=l.Ji.insert(d,R)}}})}(r.localStore,s))})}function Dm(e,t){return y(this,null,function*(){let n=b(e);if(!n.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());let r=yield fl(n.localStore,t);n.currentUser=t,function(s,o){s.ga.forEach(a=>{a.forEach(c=>{c.reject(new w(f.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),yield kn(n,r.ts)}})}function Cm(e,t){let n=b(e),r=n.Va.get(t);if(r&&r.Ia)return P().add(r.key);{let i=P(),s=n.da.get(t);if(!s)return i;for(let o of s){let a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function xm(e){let t=b(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Al.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Cm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Sm.bind(null,t),t.Ta.r_=wm.bind(null,t.eventManager),t.Ta.Sa=vm.bind(null,t.eventManager),t}function Vm(e){let t=b(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=bm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Rm.bind(null,t),t}var $r=class{constructor(){this.synchronizeTabs=!1}initialize(t){return y(this,null,function*(){this.serializer=ii(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),yield this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)})}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return em(this.persistence,new Eo,t.initialUser,this.serializer)}createPersistence(t){return new yo(wo.zr,this.serializer)}createSharedClientState(t){return new Ao}terminate(){return y(this,null,function*(){this.gcScheduler&&this.gcScheduler.stop(),yield this.sharedClientState.shutdown(),yield this.persistence.shutdown()})}};var Uo=class{initialize(t,n){return y(this,null,function*(){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Dm.bind(null,this.syncEngine),yield _m(this.remoteStore,this.syncEngine.isPrimaryClient))})}createEventManager(t){return function(){return new Oo}()}createDatastore(t){let n=ii(t.databaseInfo.databaseId),r=function(s){return new Ro(s)}(t.databaseInfo);return function(s,o,a,c){return new Co(s,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new Vo(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Nu(this.syncEngine,n,0),function(){return Mr.v()?new Mr:new So}())}createSyncEngine(t,n){return function(i,s,o,a,c,u,l){let h=new Bo(i,s,o,a,c,u);return l&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return function(n){return y(this,null,function*(){let r=b(n);_("RemoteStore","RemoteStore shutting down."),r.y_.add(5),yield Nn(r),r.S_.shutdown(),r.b_.set("Unknown")})}(this.remoteStore)}};var Kr=class{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.va(this.observer.next,t)}error(t){this.observer.error?this.va(this.observer.error,t):Nt("Uncaught Error in snapshot listener:",t.toString())}Ca(){this.muted=!0}va(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}};var Go=class{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=K.UNAUTHENTICATED,this.clientId=Tr.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,s=>y(this,null,function*(){_("FirestoreClient","Received user=",s.uid),yield this.authCredentialListener(s),this.user=s})),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}getConfiguration(){return y(this,null,function*(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}})}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let t=new ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(()=>y(this,null,function*(){try{this._onlineComponents&&(yield this._onlineComponents.terminate()),this._offlineComponents&&(yield this._offlineComponents.terminate()),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){let r=ca(n,"Failed to shutdown persistence");t.reject(r)}})),t.promise}};function ws(e,t){return y(this,null,function*(){e.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");let n=yield e.getConfiguration();yield t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(i=>y(this,null,function*(){r.isEqual(i)||(yield fl(t.localStore,i),r=i)})),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t})}function Ou(e,t){return y(this,null,function*(){e.asyncQueue.verifyOperationInProgress();let n=yield km(e);_("FirestoreClient","Initializing OnlineComponentProvider");let r=yield e.getConfiguration();yield t.initialize(n,r),e.setCredentialChangeListener(i=>Vu(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>Vu(t.remoteStore,s)),e._onlineComponents=t})}function Nm(e){return e.name==="FirebaseError"?e.code===f.FAILED_PRECONDITION||e.code===f.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}function km(e){return y(this,null,function*(){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{yield ws(e,e._uninitializedComponentsProvider._offline)}catch(t){let n=t;if(!Nm(n))throw n;Ae("Error using user provided cache. Falling back to memory cache: "+n),yield ws(e,new $r)}}else _("FirestoreClient","Using default OfflineComponentProvider"),yield ws(e,new $r);return e._offlineComponents})}function Pl(e){return y(this,null,function*(){return e._onlineComponents||(e._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),yield Ou(e,e._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),yield Ou(e,new Uo))),e._onlineComponents})}function Om(e){return Pl(e).then(t=>t.syncEngine)}function Dl(e){return y(this,null,function*(){let t=yield Pl(e),n=t.eventManager;return n.onListen=Em.bind(null,t.syncEngine),n.onUnlisten=Tm.bind(null,t.syncEngine),n})}function Mm(e,t,n={}){let r=new ft;return e.asyncQueue.enqueueAndForget(()=>y(this,null,function*(){return function(s,o,a,c,u){let l=new Kr({next:d=>{o.enqueueAndForget(()=>Tl(s,h));let m=d.docs.has(a);!m&&d.fromCache?u.reject(new w(f.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&c&&c.source==="server"?u.reject(new w(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Gr(ra(a.path),l,{includeMetadataChanges:!0,W_:!0});return Il(s,h)}(yield Dl(e),e.asyncQueue,t,n,r)})),r.promise}function Fm(e,t,n={}){let r=new ft;return e.asyncQueue.enqueueAndForget(()=>y(this,null,function*(){return function(s,o,a,c,u){let l=new Kr({next:d=>{o.enqueueAndForget(()=>Tl(s,h)),d.fromCache&&c.source==="server"?u.reject(new w(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Gr(a,l,{includeMetadataChanges:!0,W_:!0});return Il(s,h)}(yield Dl(e),e.asyncQueue,t,n,r)})),r.promise}function Cl(e){let t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}var Mu=new Map;function xl(e,t,n){if(!n)throw new w(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Lm(e,t,n,r){if(t===!0&&r===!0)throw new w(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Fu(e){if(!v.isDocumentKey(e))throw new w(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Lu(e){if(v.isDocumentKey(e))throw new w(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ha(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{let t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function St(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=ha(e);throw new w(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}var Qr=class{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new w(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Lm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new w(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new w(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new w(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}},Oe=class{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qr({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qr(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vs;switch(r.type){case"firstParty":return new As(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new w(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){let r=Mu.get(n);r&&(_("ComponentProvider","Removing Datastore"),Mu.delete(n),r.terminate())}(this),Promise.resolve()}};function Bm(e,t,n,r={}){var i;let s=(e=St(e,Oe))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ae("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=K.MOCK_USER;else{a=Ra(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);let u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new w(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new K(u)}e._authCredentials=new Es(new Ir(a,c))}}var Wr=class e{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new e(this.firestore,t,this._query)}},rt=class e{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new e(this.firestore,t,this._key)}},qt=class e extends Wr{constructor(t,n,r){super(t,n,ra(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let t=this._path.popLast();return t.isEmpty()?null:new rt(this.firestore,null,new v(t))}withConverter(t){return new e(this.firestore,t,this._path)}};function da(e,t,...n){if(e=Pt(e),xl("collection","path",t),e instanceof Oe){let r=L.fromString(t,...n);return Lu(r),new qt(e,null,r)}{if(!(e instanceof rt||e instanceof qt))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(L.fromString(t,...n));return Lu(r),new qt(e.firestore,null,r)}}function On(e,t,...n){if(e=Pt(e),arguments.length===1&&(t=Tr.V()),xl("doc","path",t),e instanceof Oe){let r=L.fromString(t,...n);return Fu(r),new rt(e,null,new v(r))}{if(!(e instanceof rt||e instanceof qt))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(L.fromString(t,...n));return Fu(r),new rt(e.firestore,e instanceof qt?e.converter:null,new v(r))}}var zo=class{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Fr(this,"async_queue_retry"),this.Xa=()=>{let n=_s();n&&_("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};let t=_s();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;let n=_s();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise(()=>{});let n=new ft;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ga.push(t),this.nu()))}nu(){return y(this,null,function*(){if(this.Ga.length!==0){try{yield this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!Vn(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}})}tu(t){let n=this.Wa.then(()=>(this.Ja=!0,t().catch(r=>{this.Ha=r,this.Ja=!1;let i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Nt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(t,n,r){this.eu(),this.Za.indexOf(t)>-1&&(n=0);let i=No.createAndSchedule(this,t,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&I()}verifyOperationInProgress(){}iu(){return y(this,null,function*(){let t;do t=this.Wa,yield t;while(t!==this.Wa)})}su(t){for(let n of this.ja)if(n.timerId===t)return!0;return!1}ou(t){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(let n of this.ja)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.iu()})}_u(t){this.Za.push(t)}ru(t){let n=this.ja.indexOf(t);this.ja.splice(n,1)}};var $t=class extends Oe{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new zo}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Nl(this),this._firestoreClient.terminate()}};function Vl(e,t){let n=typeof e=="object"?e:Ga(),r=typeof e=="string"?e:t||"(default)",i=qa(n,"firestore").getImmediate({identifier:r});if(!i._initialized){let s=ba("firestore");s&&Bm(i,...s)}return i}function fa(e){return e._firestoreClient||Nl(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Nl(e){var t,n,r;let i=e._freezeSettings(),s=function(a,c,u,l){return new Ds(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Cl(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Go(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}var Pn=class e{constructor(t){this._byteString=t}static fromBase64String(t){try{return new e(nt.fromBase64String(t))}catch(n){throw new w(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new e(nt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}};var Me=class{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}};var Dn=class{constructor(t){this._methodName=t}};var Cn=class{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return x(this._lat,t._lat)||x(this._long,t._long)}};var qm=/^__.*__$/,jo=class{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new At(t,this.data,this.fieldMask,n,this.fieldTransforms):new ce(t,this.data,n,this.fieldTransforms)}},Hr=class{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new At(t,this.data,this.fieldMask,n,this.fieldTransforms)}};function kl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}var $o=class e{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(t){return new e(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(t){var n;let r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.cu({path:r,hu:!1});return i.Pu(t),i}Iu(t){var n;let r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(t){return this.cu({path:void 0,hu:!0})}Eu(t){return Xr(t,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let t=0;t<this.path.length;t++)this.Pu(this.path.get(t))}Pu(t){if(t.length===0)throw this.Eu("Document fields must not be empty");if(kl(this.uu)&&qm.test(t))throw this.Eu('Document fields cannot begin and end with "__"')}},Ko=class{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||ii(t)}Ru(t,n,r,i=!1){return new $o({uu:t,methodName:n,Au:r,path:lt.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Ol(e){let t=e._freezeSettings(),n=ii(e._databaseId);return new Ko(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Um(e,t,n,r,i,s={}){let o=e.Ru(s.merge||s.mergeFields?2:0,t,n,i);ma("Data must be an object, but it was:",o,r);let a=Ml(r,o),c,u;if(s.merge)c=new ut(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){let l=[];for(let h of s.mergeFields){let d=Qo(t,h,n);if(!o.contains(d))throw new w(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Ll(l,d)||l.push(d)}c=new ut(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new jo(new at(a),c,u)}var Jr=class e extends Dn{_toFieldTransform(t){if(t.uu!==2)throw t.uu===1?t.Eu(`${this._methodName}() can only appear at the top level of your update data`):t.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof e}};function Gm(e,t,n,r){let i=e.Ru(1,t,n);ma("Data must be an object, but it was:",i,r);let s=[],o=at.empty();ue(r,(c,u)=>{let l=ga(t,c,n);u=Pt(u);let h=i.Iu(l);if(u instanceof Jr)s.push(l);else{let d=ai(u,h);d!=null&&(s.push(l),o.set(l,d))}});let a=new ut(s);return new Hr(o,a,i.fieldTransforms)}function zm(e,t,n,r,i,s){let o=e.Ru(1,t,n),a=[Qo(t,r,n)],c=[i];if(s.length%2!=0)throw new w(f.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Qo(t,s[d])),c.push(s[d+1]);let u=[],l=at.empty();for(let d=a.length-1;d>=0;--d)if(!Ll(u,a[d])){let m=a[d],A=c[d];A=Pt(A);let R=o.Iu(m);if(A instanceof Jr)u.push(m);else{let E=ai(A,R);E!=null&&(u.push(m),l.set(m,E))}}let h=new ut(u);return new Hr(l,h,o.fieldTransforms)}function ai(e,t){if(Fl(e=Pt(e)))return ma("Unsupported field value:",t,e),Ml(e,t);if(e instanceof Dn)return function(r,i){if(!kl(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);let s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.hu&&t.uu!==4)throw t.Eu("Nested arrays are not supported");return function(r,i){let s=[],o=0;for(let a of r){let c=ai(a,i.Tu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=Pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Df(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let s=J.fromDate(r);return{timestampValue:Nr(i.serializer,s)}}if(r instanceof J){let s=new J(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nr(i.serializer,s)}}if(r instanceof Cn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pn)return{bytesValue:al(i.serializer,r._byteString)};if(r instanceof rt){let s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ia(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${ha(r)}`)}(e,t)}function Ml(e,t){let n={};return Bu(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ue(e,(r,i)=>{let s=ai(i,t.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Fl(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof J||e instanceof Cn||e instanceof Pn||e instanceof rt||e instanceof Dn)}function ma(e,t,n){if(!Fl(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){let r=ha(n);throw r==="an object"?t.Eu(e+" a custom object"):t.Eu(e+" "+r)}}function Qo(e,t,n){if((t=Pt(t))instanceof Me)return t._internalPath;if(typeof t=="string")return ga(e,t);throw Xr("Field path arguments must be of type string or ",e,!1,void 0,n)}var jm=new RegExp("[~\\*/\\[\\]]");function ga(e,t,n){if(t.search(jm)>=0)throw Xr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Me(...t.split("."))._internalPath}catch(r){throw Xr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Xr(e,t,n,r,i){let s=r&&!r.isEmpty(),o=i!==void 0,a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new w(f.INVALID_ARGUMENT,a+e+c)}function Ll(e,t){return e.some(n=>n.isEqual(t))}var Yr=class{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let t=new Wo(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){let n=this._document.data.field(Bl("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}},Wo=class extends Yr{data(){return super.data()}};function Bl(e,t){return typeof t=="string"?ga(e,t):t instanceof Me?t._internalPath:t._delegate._internalPath}function $m(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new w(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var Ho=class{convertValue(t,n="none"){switch(se(t)){case 0:return null;case 1:return t.booleanValue;case 2:return F(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Gt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){let r={};return ue(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new Cn(F(t.latitude),F(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":let r=Zo(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(En(t));default:return null}}convertTimestamp(t){let n=Ut(t);return new J(n.seconds,n.nanos)}convertDocumentKey(t,n){let r=L.fromString(t);O(dl(r));let i=new Rr(r.get(1),r.get(3)),s=new v(r.popFirst(5));return i.isEqual(n)||Nt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}};function Km(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}var ee=class{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}},Zr=class extends Yr{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){let n=new Te(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){let r=this._document.data.field(Bl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},Te=class extends Zr{data(t={}){return super.data(t)}},Jo=class{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new ee(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Te(this._firestore,this._userDataWriter,r.key,r,new ee(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){let n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{let c=new Te(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ee(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{let c=new Te(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ee(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter),u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:Qm(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function Qm(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}function ql(e){e=St(e,rt);let t=St(e.firestore,$t);return Mm(fa(t),e._key).then(n=>Wm(t,e,n))}var ti=class extends Ho{constructor(t){super(),this.firestore=t}convertBytes(t){return new Pn(t)}convertReference(t){let n=this.convertDocumentKey(t,this.firestore._databaseId);return new rt(this.firestore,null,n)}};function Ul(e){e=St(e,Wr);let t=St(e.firestore,$t),n=fa(t),r=new ti(t);return $m(e._query),Fm(n,e._query).then(i=>new Jo(t,r,e,i))}function Gl(e,t,n){e=St(e,rt);let r=St(e.firestore,$t),i=Km(e.converter,t,n);return pa(r,[Um(Ol(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,Vt.none())])}function zl(e,t,n,...r){e=St(e,rt);let i=St(e.firestore,$t),s=Ol(i),o;return o=typeof(t=Pt(t))=="string"||t instanceof Me?zm(s,"updateDoc",e._key,t,n,r):Gm(s,"updateDoc",e._key,t),pa(i,[o.toMutation(e._key,Vt.exists(!0))])}function jl(e){return pa(St(e.firestore,$t),[new Tn(e._key,Vt.none())])}function pa(e,t){return function(r,i){let s=new ft;return r.asyncQueue.enqueueAndForget(()=>y(this,null,function*(){return Am(yield Om(r),i,s)})),s.promise}(fa(e),t)}function Wm(e,t,n){let r=n.docs.get(t._key),i=new ti(e);return new Zr(e,i,t._key,r,new ee(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(i){Fe=i})(Ua),ze(new Dt("firestore",(r,{instanceIdentifier:i,options:s})=>{let o=r.getProvider("app").getImmediate(),a=new $t(new Is(r.getProvider("auth-internal")),new bs(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new w(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rr(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ft(du,"4.1.0",t),Ft(du,"4.1.0","esm2017")})();var Hm={apiKey:"AIzaSyBJ_GTJCC81jr9u9GPGWAcyCh81ZCBWWZg",authDomain:"inventory-control-bussropprj.firebaseapp.com",projectId:"inventory-control-bussropprj",storageBucket:"inventory-control-bussropprj.appspot.com",messagingSenderId:"397923798650",appId:"1:397923798650:web:89b0a19be1c979068e35c3",measurementId:"G-Z2186F2JJX"},Jm=Si(Hm),Mn=Vl(Jm),Xm=(e,t,n)=>{let r=da(Mn,e);Ul(r).then(i=>t(JSON.stringify(i.docs.map(s=>Be({id:s.id},s.data()))))).catch(n)},Ym=(e,t,n,r)=>{let i=da(Mn,e),s=On(i);return Gl(s,JSON.parse(t)).then(()=>n(s.id)).catch(r),s.id},Zm=(e,t,n)=>{let r=On(Mn,e);ql(r).then(i=>t(JSON.stringify(Be({id:i.id},i.data())))).catch(n)},tg=(e,t,n,r)=>{let i=On(Mn,e);zl(i,JSON.parse(t)).then(n).catch(r)},eg=(e,t,n)=>{let r=On(Mn,e);jl(r).then(t).catch(n)};window._wasm_js_bridge={addDocument:Ym,getCollection:Xm,getDocument:Zm,updateDocument:tg,deleteDocument:eg};})();
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
