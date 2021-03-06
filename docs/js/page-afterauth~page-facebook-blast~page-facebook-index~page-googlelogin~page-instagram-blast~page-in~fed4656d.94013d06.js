(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-afterauth~page-facebook-blast~page-facebook-index~page-googlelogin~page-instagram-blast~page-in~fed4656d"],{"3b59":function(t,e,n){"use strict";function r(t){return t&&"object"===typeof t&&"default"in t?t["default"]:t}Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("c23d"));n("7d28");var o,a=n("9ab4"),s=n("cd51"),c=n("abfd"),u=n("4be4"),f=function(){function t(t,e,n,r){this.client=t,this.storage=e,this.storageCache=n,this.logger=r}return t.prototype.isCachedDataFresh=function(t,e){if(!e)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;var n=Date.now()-e,r=n<=t;return this.logger.debug("Config fetch cache check. Cache age millis: "+n+". Cache max age millis (minimumFetchIntervalMillis setting): "+t+". Is cache hit: "+r+"."),r},t.prototype.fetch=function(t){return a.__awaiter(this,void 0,void 0,(function(){var e,n,r,i,o;return a.__generator(this,(function(a){switch(a.label){case 0:return[4,Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()])];case 1:return e=a.sent(),n=e[0],r=e[1],r&&this.isCachedDataFresh(t.cacheMaxAgeMillis,n)?[2,r]:(t.eTag=r&&r.eTag,[4,this.client.fetch(t)]);case 2:return i=a.sent(),o=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())],200===i.status&&o.push(this.storage.setLastSuccessfulFetchResponse(i)),[4,Promise.all(o)];case 3:return a.sent(),[2,i]}}))}))},t}(),l=(o={},o["registration-window"]="Undefined window object. This SDK only supports usage in a browser environment.",o["registration-project-id"]="Undefined project identifier. Check Firebase app initialization.",o["registration-api-key"]="Undefined API key. Check Firebase app initialization.",o["registration-app-id"]="Undefined app identifier. Check Firebase app initialization.",o["storage-open"]="Error thrown when opening storage. Original error: {$originalErrorMessage}.",o["storage-get"]="Error thrown when reading from storage. Original error: {$originalErrorMessage}.",o["storage-set"]="Error thrown when writing to storage. Original error: {$originalErrorMessage}.",o["storage-delete"]="Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",o["fetch-client-network"]="Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",o["fetch-timeout"]='The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',o["fetch-throttle"]='The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',o["fetch-client-parse"]="Fetch client could not parse response. Original error: {$originalErrorMessage}.",o["fetch-status"]="Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",o),p=new s.ErrorFactory("remoteconfig","Remote Config",l);function h(t,e){return t instanceof s.FirebaseError&&-1!==t.code.indexOf(e)}
/**
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
 */function g(t){return void 0===t&&(t=navigator),t.languages&&t.languages[0]||t.language}
/**
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
 */var m=function(){function t(t,e,n,r,i,o){this.firebaseInstallations=t,this.sdkVersion=e,this.namespace=n,this.projectId=r,this.apiKey=i,this.appId=o}return t.prototype.fetch=function(t){return a.__awaiter(this,void 0,void 0,(function(){var e,n,r,i,o,s,c,u,f,l,h,m,d,v,_,b,y,w,T;return a.__generator(this,(function(a){switch(a.label){case 0:return[4,Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()])];case 1:e=a.sent(),n=e[0],r=e[1],i=window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com",o=i+"/v1/projects/"+this.projectId+"/namespaces/"+this.namespace+":fetch?key="+this.apiKey,s={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":t.eTag||"*"},c={sdk_version:this.sdkVersion,app_instance_id:n,app_instance_id_token:r,app_id:this.appId,language_code:g()},u={method:"POST",headers:s,body:JSON.stringify(c)},f=fetch(o,u),l=new Promise((function(e,n){t.signal.addEventListener((function(){var t=new Error("The operation was aborted.");t.name="AbortError",n(t)}))})),a.label=2;case 2:return a.trys.push([2,5,,6]),[4,Promise.race([f,l])];case 3:return a.sent(),[4,f];case 4:return h=a.sent(),[3,6];case 5:throw m=a.sent(),d="fetch-client-network","AbortError"===m.name&&(d="fetch-timeout"),p.create(d,{originalErrorMessage:m.message});case 6:if(v=h.status,_=h.headers.get("ETag")||void 0,200!==h.status)return[3,11];w=void 0,a.label=7;case 7:return a.trys.push([7,9,,10]),[4,h.json()];case 8:return w=a.sent(),[3,10];case 9:throw T=a.sent(),p.create("fetch-client-parse",{originalErrorMessage:T.message});case 10:b=w["entries"],y=w["state"],a.label=11;case 11:if("INSTANCE_STATE_UNSPECIFIED"===y?v=500:"NO_CHANGE"===y?v=304:"NO_TEMPLATE"!==y&&"EMPTY_CONFIG"!==y||(b={}),304!==v&&200!==v)throw p.create("fetch-status",{httpStatus:v});return[2,{status:v,eTag:_,config:b}]}}))}))},t}(),d=function(){function t(){this.listeners=[]}return t.prototype.addEventListener=function(t){this.listeners.push(t)},t.prototype.abort=function(){this.listeners.forEach((function(t){return t()}))},t}(),v=!1,_="",b=0,y=["1","true","t","yes","y","on"],w=function(){function t(t,e){void 0===e&&(e=_),this._source=t,this._value=e}return t.prototype.asString=function(){return this._value},t.prototype.asBoolean=function(){return"static"===this._source?v:y.indexOf(this._value.toLowerCase())>=0},t.prototype.asNumber=function(){if("static"===this._source)return b;var t=Number(this._value);return isNaN(t)&&(t=b),t},t.prototype.getSource=function(){return this._source},t}(),T=6e4,E=432e5,I=function(){function t(t,e,n,r,i){this.app=t,this._client=e,this._storageCache=n,this._storage=r,this._logger=i,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:T,minimumFetchIntervalMillis:E},this.defaultConfig={}}return t.prototype.setLogLevel=function(t){switch(t){case"debug":this._logger.logLevel=c.LogLevel.DEBUG;break;case"silent":this._logger.logLevel=c.LogLevel.SILENT;break;default:this._logger.logLevel=c.LogLevel.ERROR}},Object.defineProperty(t.prototype,"fetchTimeMillis",{get:function(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastFetchStatus",{get:function(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"},enumerable:!1,configurable:!0}),t.prototype.activate=function(){return a.__awaiter(this,void 0,void 0,(function(){var t,e,n;return a.__generator(this,(function(r){switch(r.label){case 0:return[4,Promise.all([this._storage.getLastSuccessfulFetchResponse(),this._storage.getActiveConfigEtag()])];case 1:return t=r.sent(),e=t[0],n=t[1],e&&e.config&&e.eTag&&e.eTag!==n?[4,Promise.all([this._storageCache.setActiveConfig(e.config),this._storage.setActiveConfigEtag(e.eTag)])]:[2,!1];case 2:return r.sent(),[2,!0]}}))}))},t.prototype.ensureInitialized=function(){var t=this;return this._initializePromise||(this._initializePromise=this._storageCache.loadFromStorage().then((function(){t._isInitializationComplete=!0}))),this._initializePromise},t.prototype.fetch=function(){return a.__awaiter(this,void 0,void 0,(function(){var t,e,n,r=this;return a.__generator(this,(function(i){switch(i.label){case 0:t=new d,setTimeout((function(){return a.__awaiter(r,void 0,void 0,(function(){return a.__generator(this,(function(e){return t.abort(),[2]}))}))}),this.settings.fetchTimeoutMillis),i.label=1;case 1:return i.trys.push([1,4,,6]),[4,this._client.fetch({cacheMaxAgeMillis:this.settings.minimumFetchIntervalMillis,signal:t})];case 2:return i.sent(),[4,this._storageCache.setLastFetchStatus("success")];case 3:return i.sent(),[3,6];case 4:return e=i.sent(),n=h(e,"fetch-throttle")?"throttle":"failure",[4,this._storageCache.setLastFetchStatus(n)];case 5:throw i.sent(),e;case 6:return[2]}}))}))},t.prototype.fetchAndActivate=function(){return a.__awaiter(this,void 0,void 0,(function(){return a.__generator(this,(function(t){switch(t.label){case 0:return[4,this.fetch()];case 1:return t.sent(),[2,this.activate()]}}))}))},t.prototype.getAll=function(){var t=this;return S(this._storageCache.getActiveConfig(),this.defaultConfig).reduce((function(e,n){return e[n]=t.getValue(n),e}),{})},t.prototype.getBoolean=function(t){return this.getValue(t).asBoolean()},t.prototype.getNumber=function(t){return this.getValue(t).asNumber()},t.prototype.getString=function(t){return this.getValue(t).asString()},t.prototype.getValue=function(t){this._isInitializationComplete||this._logger.debug('A value was requested for key "'+t+'" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.');var e=this._storageCache.getActiveConfig();return e&&void 0!==e[t]?new w("remote",e[t]):this.defaultConfig&&void 0!==this.defaultConfig[t]?new w("default",String(this.defaultConfig[t])):(this._logger.debug('Returning static value for key "'+t+'". Define a default or remote value if this is unintentional.'),new w("static"))},t}();
/**
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
 */function S(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),Object.keys(a.__assign(a.__assign({},t),e))}
/**
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
 */function M(t,e){var n=t.target.error||void 0;return p.create(e,{originalErrorMessage:n&&n.message})}var A="app_namespace_store",C="firebase_remote_config",k=1;function F(){return new Promise((function(t,e){var n=indexedDB.open(C,k);n.onerror=function(t){e(M(t,"storage-open"))},n.onsuccess=function(e){t(e.target.result)},n.onupgradeneeded=function(t){var e=t.target.result;switch(t.oldVersion){case 0:e.createObjectStore(A,{keyPath:"compositeKey"})}}}))}var N=function(){function t(t,e,n,r){void 0===r&&(r=F()),this.appId=t,this.appName=e,this.namespace=n,this.openDbPromise=r}return t.prototype.getLastFetchStatus=function(){return this.get("last_fetch_status")},t.prototype.setLastFetchStatus=function(t){return this.set("last_fetch_status",t)},t.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.get("last_successful_fetch_timestamp_millis")},t.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.set("last_successful_fetch_timestamp_millis",t)},t.prototype.getLastSuccessfulFetchResponse=function(){return this.get("last_successful_fetch_response")},t.prototype.setLastSuccessfulFetchResponse=function(t){return this.set("last_successful_fetch_response",t)},t.prototype.getActiveConfig=function(){return this.get("active_config")},t.prototype.setActiveConfig=function(t){return this.set("active_config",t)},t.prototype.getActiveConfigEtag=function(){return this.get("active_config_etag")},t.prototype.setActiveConfigEtag=function(t){return this.set("active_config_etag",t)},t.prototype.getThrottleMetadata=function(){return this.get("throttle_metadata")},t.prototype.setThrottleMetadata=function(t){return this.set("throttle_metadata",t)},t.prototype.deleteThrottleMetadata=function(){return this.delete("throttle_metadata")},t.prototype.get=function(t){return a.__awaiter(this,void 0,void 0,(function(){var e,n=this;return a.__generator(this,(function(r){switch(r.label){case 0:return[4,this.openDbPromise];case 1:return e=r.sent(),[2,new Promise((function(r,i){var o=e.transaction([A],"readonly"),a=o.objectStore(A),s=n.createCompositeKey(t);try{var c=a.get(s);c.onerror=function(t){i(M(t,"storage-get"))},c.onsuccess=function(t){var e=t.target.result;r(e?e.value:void 0)}}catch(u){i(p.create("storage-get",{originalErrorMessage:u&&u.message}))}}))]}}))}))},t.prototype.set=function(t,e){return a.__awaiter(this,void 0,void 0,(function(){var n,r=this;return a.__generator(this,(function(i){switch(i.label){case 0:return[4,this.openDbPromise];case 1:return n=i.sent(),[2,new Promise((function(i,o){var a=n.transaction([A],"readwrite"),s=a.objectStore(A),c=r.createCompositeKey(t);try{var u=s.put({compositeKey:c,value:e});u.onerror=function(t){o(M(t,"storage-set"))},u.onsuccess=function(){i()}}catch(f){o(p.create("storage-set",{originalErrorMessage:f&&f.message}))}}))]}}))}))},t.prototype.delete=function(t){return a.__awaiter(this,void 0,void 0,(function(){var e,n=this;return a.__generator(this,(function(r){switch(r.label){case 0:return[4,this.openDbPromise];case 1:return e=r.sent(),[2,new Promise((function(r,i){var o=e.transaction([A],"readwrite"),a=o.objectStore(A),s=n.createCompositeKey(t);try{var c=a.delete(s);c.onerror=function(t){i(M(t,"storage-delete"))},c.onsuccess=function(){r()}}catch(u){i(p.create("storage-delete",{originalErrorMessage:u&&u.message}))}}))]}}))}))},t.prototype.createCompositeKey=function(t){return[this.appId,this.appName,this.namespace,t].join()},t}(),L=function(){function t(t){this.storage=t}return t.prototype.getLastFetchStatus=function(){return this.lastFetchStatus},t.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.lastSuccessfulFetchTimestampMillis},t.prototype.getActiveConfig=function(){return this.activeConfig},t.prototype.loadFromStorage=function(){return a.__awaiter(this,void 0,void 0,(function(){var t,e,n,r,i,o;return a.__generator(this,(function(a){switch(a.label){case 0:return t=this.storage.getLastFetchStatus(),e=this.storage.getLastSuccessfulFetchTimestampMillis(),n=this.storage.getActiveConfig(),[4,t];case 1:return r=a.sent(),r&&(this.lastFetchStatus=r),[4,e];case 2:return i=a.sent(),i&&(this.lastSuccessfulFetchTimestampMillis=i),[4,n];case 3:return o=a.sent(),o&&(this.activeConfig=o),[2]}}))}))},t.prototype.setLastFetchStatus=function(t){return this.lastFetchStatus=t,this.storage.setLastFetchStatus(t)},t.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.lastSuccessfulFetchTimestampMillis=t,this.storage.setLastSuccessfulFetchTimestampMillis(t)},t.prototype.setActiveConfig=function(t){return this.activeConfig=t,this.storage.setActiveConfig(t)},t}(),P=1e3,O=2,R=144e5,U=.5;
/**
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
 */function j(t){var e=P*Math.pow(O,t),n=Math.round(U*e*(Math.random()-.5)*2);return Math.min(R,e+n)}
/**
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
 */function D(t,e){return new Promise((function(n,r){var i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener((function(){clearTimeout(o),r(p.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}function B(t){if(!(t instanceof s.FirebaseError))return!1;var e=Number(t["httpStatus"]);return 429===e||500===e||503===e||504===e}var K=function(){function t(t,e){this.client=t,this.storage=e}return t.prototype.fetch=function(t){return a.__awaiter(this,void 0,void 0,(function(){var e;return a.__generator(this,(function(n){switch(n.label){case 0:return[4,this.storage.getThrottleMetadata()];case 1:return e=n.sent()||{backoffCount:0,throttleEndTimeMillis:Date.now()},[2,this.attemptFetch(t,e)]}}))}))},t.prototype.attemptFetch=function(t,e){var n=e.throttleEndTimeMillis,r=e.backoffCount;return a.__awaiter(this,void 0,void 0,(function(){var e,i,o;return a.__generator(this,(function(a){switch(a.label){case 0:return[4,D(t.signal,n)];case 1:a.sent(),a.label=2;case 2:return a.trys.push([2,5,,7]),[4,this.client.fetch(t)];case 3:return e=a.sent(),[4,this.storage.deleteThrottleMetadata()];case 4:return a.sent(),[2,e];case 5:if(i=a.sent(),!B(i))throw i;return o={throttleEndTimeMillis:Date.now()+j(r),backoffCount:r+1},[4,this.storage.setThrottleMetadata(o)];case 6:return a.sent(),[2,this.attemptFetch(t,o)];case 7:return[2]}}))}))},t}(),q="@firebase/remote-config",V="0.1.25";
/**
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
 */
function x(t){function e(e,n){var r=e.getProvider("app").getImmediate(),i=e.getProvider("installations").getImmediate();if("undefined"===typeof window)throw p.create("registration-window");var o=r.options,a=o.projectId,s=o.apiKey,u=o.appId;if(!a)throw p.create("registration-project-id");if(!s)throw p.create("registration-api-key");if(!u)throw p.create("registration-app-id");n=n||"firebase";var l=new N(u,r.name,n),h=new L(l),g=new c.Logger(q);g.logLevel=c.LogLevel.ERROR;var d=new m(i,t.SDK_VERSION,n,a,s,u),v=new K(d,l),_=new f(v,l,h,g),b=new I(r,_,h,l,g);return b.ensureInitialized(),b}t.INTERNAL.registerComponent(new u.Component("remoteConfig",e,"PUBLIC").setMultipleInstances(!0)),t.registerVersion(q,V)}x(i),e.registerRemoteConfig=x},"6d09":function(t,e,n){"use strict";function r(t){return t&&"object"===typeof t&&"default"in t?t["default"]:t}Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("c23d"));n("7d28");var o,a,s,c,u=n("9ab4"),f=n("cd51"),l=n("abfd"),p=n("4be4"),h="@firebase/performance",g="0.3.9",m=g,d="FB-PERF-TRACE-START",v="FB-PERF-TRACE-STOP",_="FB-PERF-TRACE-MEASURE",b="_wt_",y="_fp",w="_fcp",T="_fid",E="@firebase/performance/config",I="@firebase/performance/configexpire",S="performance",M="Performance",A=(o={},o["trace started"]="Trace {$traceName} was started before.",o["trace stopped"]="Trace {$traceName} is not running.",o["no window"]="Window is not available.",o["no app id"]="App id is not available.",o["no project id"]="Project id is not available.",o["no api key"]="Api key is not available.",o["invalid cc log"]="Attempted to queue invalid cc event",o["FB not default"]="Performance can only start when Firebase app instance is the default one.",o["RC response not ok"]="RC response is not ok",o["invalid attribute name"]="Attribute name {$attributeName} is invalid.",o["invalid attribute value"]="Attribute value {$attributeValue} is invalid.",o["invalid custom metric name"]="Custom metric name {$customMetricName} is invalid",o["invalid String merger input"]="Input for String merger is invalid, contact support team to resolve.",o),C=new f.ErrorFactory(S,M,A),k=function(){function t(t){if(this.window=t,!t)throw C.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}return t.prototype.getUrl=function(){return this.windowLocation.href.split("?")[0]},t.prototype.mark=function(t){this.performance&&this.performance.mark&&this.performance.mark(t)},t.prototype.measure=function(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)},t.prototype.getEntriesByType=function(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]},t.prototype.getEntriesByName=function(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]},t.prototype.getTimeOrigin=function(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)},t.prototype.requiredApisAvailable=function(){return!!(fetch&&Promise&&this.navigator&&this.navigator.cookieEnabled)},t.prototype.setupObserver=function(t,e){if(this.PerformanceObserver){var n=new this.PerformanceObserver((function(t){for(var n=0,r=t.getEntries();n<r.length;n++){var i=r[n];e(i)}}));n.observe({entryTypes:[t]})}},t.getInstance=function(){return void 0===a&&(a=new t(s)),a},t}();function F(t){s=t}
/**
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
 */function N(t,e){var n=t.length-e.length;if(n<0||n>1)throw C.create("invalid String merger input");for(var r=[],i=0;i<t.length;i++)r.push(t.charAt(i)),e.length>i&&r.push(e.charAt(i));return r.join("")}
/**
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
 */var L,P,O=function(){function t(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=N("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=N("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}return t.prototype.getAppId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.appId;if(!t)throw C.create("no app id");return t},t.prototype.getProjectId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.projectId;if(!t)throw C.create("no project id");return t},t.prototype.getApiKey=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.apiKey;if(!t)throw C.create("no api key");return t},t.prototype.getFlTransportFullUrl=function(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)},t.getInstance=function(){return void 0===c&&(c=new t),c},t}();
/**
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
 */function R(){var t=O.getInstance().installationsService.getId();return t.then((function(t){L=t})),t}function U(){return L}function j(){var t=O.getInstance().installationsService.getToken();return t.then((function(t){})),t}
/**
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
 */(function(t){t[t["UNKNOWN"]=0]="UNKNOWN",t[t["VISIBLE"]=1]="VISIBLE",t[t["HIDDEN"]=2]="HIDDEN"})(P||(P={}));var D=["firebase_","google_","ga_"],B=new RegExp("^[a-zA-Z]\\w*$"),K=40,q=100;function V(){var t=k.getInstance().navigator;return"serviceWorker"in t?t.serviceWorker.controller?2:3:1}function x(){var t=k.getInstance().document,e=t.visibilityState;switch(e){case"visible":return P.VISIBLE;case"hidden":return P.HIDDEN;default:return P.UNKNOWN}}function z(){var t=k.getInstance().navigator,e=t.connection,n=e&&e.effectiveType;switch(n){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function $(t){if(0===t.length||t.length>K)return!1;var e=D.some((function(e){return t.startsWith(e)}));return!e&&!!t.match(B)}function J(t){return 0!==t.length&&t.length<=q}
/**
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
 */var W=new l.Logger(M);W.logLevel=l.LogLevel.INFO;
/**
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
 */
var G="0.0.1",H={loggingEnabled:!0},Y="FIREBASE_INSTALLATIONS_AUTH";function Q(t){var e=X();return e?(nt(e),Promise.resolve()):et(t).then(nt).then((function(t){return Z(t)}),(function(){}))}function X(){var t=k.getInstance().localStorage;if(t){var e=t.getItem(I);if(e&&rt(e)){var n=t.getItem(E);if(n)try{var r=JSON.parse(n);return r}catch(o){return}}}}function Z(t){var e=k.getInstance().localStorage;t&&e&&(e.setItem(E,JSON.stringify(t)),e.setItem(I,String(Date.now()+60*O.getInstance().configTimeToLive*60*1e3)))}var tt="Could not fetch config, will use default configs";function et(t){return j().then((function(e){var n=O.getInstance().getProjectId(),r="https://firebaseremoteconfig.googleapis.com/v1/projects/"+n+"/namespaces/fireperf:fetch?key="+O.getInstance().getApiKey(),i=new Request(r,{method:"POST",headers:{Authorization:Y+" "+e},body:JSON.stringify({app_instance_id:t,app_instance_id_token:e,app_id:O.getInstance().getAppId(),app_version:m,sdk_version:G})});return fetch(i).then((function(t){if(t.ok)return t.json();throw C.create("RC response not ok")}))})).catch((function(){W.info(tt)}))}function nt(t){if(!t)return t;var e=O.getInstance(),n=t.entries||{};return void 0!==n.fpr_enabled?e.loggingEnabled="true"===String(n.fpr_enabled):e.loggingEnabled=H.loggingEnabled,n.fpr_log_source&&(e.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(e.logEndPointUrl=n.fpr_log_endpoint_url),n.fpr_log_transport_key&&(e.transportKey=n.fpr_log_transport_key),void 0!==n.fpr_vc_network_request_sampling_rate&&(e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),e.logTraceAfterSampling=it(e.tracesSamplingRate),e.logNetworkAfterSampling=it(e.networkRequestsSamplingRate),t}function rt(t){return Number(t)>Date.now()}function it(t){return Math.random()<=t}
/**
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
 */var ot,at=1;function st(){return at=2,ot=ot||ut(),ot}function ct(){return 3===at}function ut(){return ft().then((function(){return R()})).then((function(t){return Q(t)})).then((function(){return lt()}),(function(){return lt()}))}function ft(){var t=k.getInstance().document;return new Promise((function(e){if(t&&"complete"!==t.readyState){var n=function(){"complete"===t.readyState&&(t.removeEventListener("readystatechange",n),e())};t.addEventListener("readystatechange",n)}else e()}))}function lt(){at=3}
/**
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
 */var pt,ht=1e4,gt=5500,mt=3,dt=mt,vt=[],_t=!1;function bt(){_t||(yt(gt),_t=!0)}function yt(t){setTimeout((function(){if(0!==dt)return vt.length?void wt():yt(ht)}),t)}function wt(){var t=u.__spreadArrays(vt);vt=[];var e=t.map((function(t){return{source_extension_json_proto3:t.message,event_time_ms:String(t.eventTime)}})),n={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:O.getInstance().logSource,log_event:e};Tt(n,t).catch((function(){vt=u.__spreadArrays(t,vt),dt--,W.info("Tries left: "+dt+"."),yt(ht)}))}function Tt(t,e){return Et(t).then((function(t){return t.ok||W.info("Call to Firebase backend failed."),t.json()})).then((function(t){var n=Number(t.nextRequestWaitMillis),r=ht;isNaN(n)||(r=Math.max(n,r));var i=t.logResponseDetails;Array.isArray(i)&&i.length>0&&"RETRY_REQUEST_LATER"===i[0].responseAction&&(vt=u.__spreadArrays(e,vt),W.info("Retry transport request later.")),dt=mt,yt(r)}))}function Et(t){var e=O.getInstance().getFlTransportFullUrl();return fetch(e,{method:"POST",body:JSON.stringify(t)})}function It(t){if(!t.eventTime||!t.message)throw C.create("invalid cc log");vt=u.__spreadArrays(vt,[t])}function St(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=t.apply(void 0,e);It({message:r,eventTime:Date.now()})}}
/**
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
 */function Mt(t,e){pt||(pt=St(Ft)),pt(t,e)}function At(t){var e=O.getInstance();!e.instrumentationEnabled&&t.isAuto||(e.dataCollectionEnabled||t.isAuto)&&k.getInstance().requiredApisAvailable()&&(t.isAuto&&x()!==P.VISIBLE||e.loggingEnabled&&e.logTraceAfterSampling&&(ct()?Ct(t):st().then((function(){return Ct(t)}),(function(){return Ct(t)}))))}function Ct(t){U()&&setTimeout((function(){return Mt(t,1)}),0)}function kt(t){var e=O.getInstance();if(e.instrumentationEnabled){var n=t.url,r=e.logEndPointUrl.split("?")[0],i=e.flTransportEndpointUrl.split("?")[0];n!==r&&n!==i&&e.loggingEnabled&&e.logNetworkAfterSampling&&setTimeout((function(){return Mt(t,0)}),0)}}function Ft(t,e){return 0===e?Nt(t):Lt(t)}function Nt(t){var e={url:t.url,http_method:t.httpMethod||0,http_response_code:200,response_payload_bytes:t.responsePayloadBytes,client_start_time_us:t.startTimeUs,time_to_response_initiated_us:t.timeToResponseInitiatedUs,time_to_response_completed_us:t.timeToResponseCompletedUs},n={application_info:Pt(),network_request_metric:e};return JSON.stringify(n)}function Lt(t){var e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};0!==Object.keys(t.counters).length&&(e.counters=t.counters);var n=t.getAttributes();0!==Object.keys(n).length&&(e.custom_attributes=n);var r={application_info:Pt(),trace_metric:e};return JSON.stringify(r)}function Pt(){return{google_app_id:O.getInstance().getAppId(),app_instance_id:U(),web_app_info:{sdk_version:m,page_url:k.getInstance().getUrl(),service_worker_status:V(),visibility_state:x(),effective_connection_type:z()},application_process_state:0}}
/**
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
 */var Ot=100,Rt="_",Ut=[y,w,T];function jt(t,e){return!(0===t.length||t.length>Ot)&&(e&&e.startsWith(b)&&Ut.indexOf(t)>-1||!t.startsWith(Rt))}
/**
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
 */var Dt=function(){function t(t,e,n){void 0===e&&(e=!1),this.name=t,this.isAuto=e,this.state=1,this.customAttributes={},this.counters={},this.api=k.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark=d+"-"+this.randomId+"-"+this.name,this.traceStopMark=v+"-"+this.randomId+"-"+this.name,this.traceMeasure=n||_+"-"+this.randomId+"-"+this.name,n&&this.calculateTraceMetrics())}return t.prototype.start=function(){if(1!==this.state)throw C.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2},t.prototype.stop=function(){if(2!==this.state)throw C.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),At(this)},t.prototype.record=function(t,e,n){if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=u.__assign({},n.attributes)),n&&n.metrics)for(var r=0,i=Object.keys(n.metrics);r<i.length;r++){var o=i[r];isNaN(Number(n.metrics[o]))||(this.counters[o]=Number(Math.floor(n.metrics[o])))}At(this)},t.prototype.incrementMetric=function(t,e){void 0===e&&(e=1),void 0===this.counters[t]&&this.putMetric(t,0),this.counters[t]+=e},t.prototype.putMetric=function(t,e){if(!jt(t,this.name))throw C.create("invalid custom metric name",{customMetricName:t});this.counters[t]=e},t.prototype.getMetric=function(t){return this.counters[t]||0},t.prototype.putAttribute=function(t,e){var n=$(t),r=J(e);if(n&&r)this.customAttributes[t]=e;else{if(!n)throw C.create("invalid attribute name",{attributeName:t});if(!r)throw C.create("invalid attribute value",{attributeValue:e})}},t.prototype.getAttribute=function(t){return this.customAttributes[t]},t.prototype.removeAttribute=function(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]},t.prototype.getAttributes=function(){return u.__assign({},this.customAttributes)},t.prototype.setStartTime=function(t){this.startTimeUs=t},t.prototype.setDuration=function(t){this.durationUs=t},t.prototype.calculateTraceMetrics=function(){var t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0];e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor(1e3*(e.startTime+this.api.getTimeOrigin())))},t.createOobTrace=function(e,n,r){var i=k.getInstance().getUrl();if(i){var o=new t(b+i,!0),a=Math.floor(1e3*k.getInstance().getTimeOrigin());o.setStartTime(a),e&&e[0]&&(o.setDuration(Math.floor(1e3*e[0].duration)),o.putMetric("domInteractive",Math.floor(1e3*e[0].domInteractive)),o.putMetric("domContentLoadedEventEnd",Math.floor(1e3*e[0].domContentLoadedEventEnd)),o.putMetric("loadEventEnd",Math.floor(1e3*e[0].loadEventEnd)));var s="first-paint",c="first-contentful-paint";if(n){var u=n.find((function(t){return t.name===s}));u&&u.startTime&&o.putMetric(y,Math.floor(1e3*u.startTime));var f=n.find((function(t){return t.name===c}));f&&f.startTime&&o.putMetric(w,Math.floor(1e3*f.startTime)),r&&o.putMetric(T,Math.floor(1e3*r))}At(o)}},t.createUserTimingTrace=function(e){var n=new t(e,!1,e);At(n)},t}();
/**
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
 */function Bt(t){var e=t;if(e&&void 0!==e.responseStart){var n=k.getInstance().getTimeOrigin(),r=Math.floor(1e3*(e.startTime+n)),i=e.responseStart?Math.floor(1e3*(e.responseStart-e.startTime)):void 0,o=Math.floor(1e3*(e.responseEnd-e.startTime)),a=e.name&&e.name.split("?")[0],s={url:a,responsePayloadBytes:e.transferSize,startTimeUs:r,timeToResponseInitiatedUs:i,timeToResponseCompletedUs:o};kt(s)}}
/**
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
 */var Kt=5e3;function qt(){U()&&(setTimeout((function(){return xt()}),0),setTimeout((function(){return Vt()}),0),setTimeout((function(){return zt()}),0))}function Vt(){for(var t=k.getInstance(),e=t.getEntriesByType("resource"),n=0,r=e;n<r.length;n++){var i=r[n];Bt(i)}t.setupObserver("resource",Bt)}function xt(){var t=k.getInstance(),e=t.getEntriesByType("navigation"),n=t.getEntriesByType("paint");if(t.onFirstInputDelay){var r=setTimeout((function(){Dt.createOobTrace(e,n),r=void 0}),Kt);t.onFirstInputDelay((function(t){r&&(clearTimeout(r),Dt.createOobTrace(e,n,t))}))}else Dt.createOobTrace(e,n)}function zt(){for(var t=k.getInstance(),e=t.getEntriesByType("measure"),n=0,r=e;n<r.length;n++){var i=r[n];$t(i)}t.setupObserver("measure",$t)}function $t(t){var e=t.name;e.substring(0,_.length)!==_&&Dt.createUserTimingTrace(e)}
/**
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
 */var Jt=function(){function t(t){this.app=t,k.getInstance().requiredApisAvailable()?(bt(),st().then(qt,qt)):W.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.")}return t.prototype.trace=function(t){return new Dt(t)},Object.defineProperty(t.prototype,"instrumentationEnabled",{get:function(){return O.getInstance().instrumentationEnabled},set:function(t){O.getInstance().instrumentationEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dataCollectionEnabled",{get:function(){return O.getInstance().dataCollectionEnabled},set:function(t){O.getInstance().dataCollectionEnabled=t},enumerable:!1,configurable:!0}),t}(),Wt="[DEFAULT]";
/**
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
 */function Gt(t){var e=function(t,e){if(t.name!==Wt)throw C.create("FB not default");if("undefined"===typeof window)throw C.create("no window");return F(window),O.getInstance().firebaseAppInstance=t,O.getInstance().installationsService=e,new Jt(t)};t.INTERNAL.registerComponent(new p.Component("performance",(function(t){var n=t.getProvider("app").getImmediate(),r=t.getProvider("installations").getImmediate();return e(n,r)}),"PUBLIC")),t.registerVersion(h,g)}Gt(i),e.registerPerformance=Gt},"8aa5":function(t,e,n){"use strict";function r(t){return t&&"object"===typeof t&&"default"in t?t["default"]:t}var i=r(n("c23d"));n("2ce1"),n("3523"),n("e89a"),n("001a"),n("8071"),n("2e66"),n("6d09"),n("dcaa"),n("3b59");var o="firebase",a="7.16.1";
/**
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
 */
i.registerVersion(o,a,"app");var s="firebase",c="7.16.1";
/**
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
 */
console.warn("\nIt looks like you're using the development build of the Firebase JS SDK.\nWhen deploying Firebase apps to production, it is advisable to only import\nthe individual SDK components you intend to use.\n\nFor the module builds, these are available in the following manner\n(replace <PACKAGE> with the name of a component - i.e. auth, database, etc):\n\nCommonJS Modules:\nconst firebase = require('firebase/app');\nrequire('firebase/<PACKAGE>');\n\nES Modules:\nimport firebase from 'firebase/app';\nimport 'firebase/<PACKAGE>';\n\nTypescript:\nimport * as firebase from 'firebase/app';\nimport 'firebase/<PACKAGE>';\n"),i.registerVersion(s,c),t.exports=i}}]);
//# sourceMappingURL=page-afterauth~page-facebook-blast~page-facebook-index~page-googlelogin~page-instagram-blast~page-in~fed4656d.94013d06.js.map