"use strict";var precacheConfig=[["/index.html","d9280b7104f13f7e28fadb59fe3a8605"],["/static/css/main.76a870bd.css","fc500e8cc9e8db2c41b7fc1ff78b3a1c"],["/static/js/main.8642d924.js","40bec937e1b93dd6391e7c43f2354658"],["/static/media/Roboto-Light.fc84e998.ttf","fc84e998bc29b297ea20321e4c90b6ed"],["/static/media/Roboto-Medium.d0884059.ttf","d08840599e05db7345652d3d417574a9"],["/static/media/RobotoMono-Light.b82d827b.ttf","b82d827ba127c43e9272942682b88dc3"],["/static/media/RobotoMono-Medium.5a45b286.ttf","5a45b286f59824f5d3b2d761871ced29"],["/static/media/apresentador.a52a3d94.png","a52a3d949a8e93c74924d90d5362d678"],["/static/media/background-dots.3cf32ff3.png","3cf32ff3fd855d04ca52f74ffb82891b"],["/static/media/construtores_dan.0c8b9e74.png","0c8b9e743b76704f7abec2545140c84f"],["/static/media/construtores_keit.6a9b6317.png","6a9b6317b6175045f0b3cac255e0acf4"],["/static/media/hero.d9dd097a.jpg","d9dd097a8504934925fe3fd6b9db919c"],["/static/media/maksoud1.96064706.png","96064706957b350568e7c08706675369"],["/static/media/maksoud2.1b285933.png","1b2859338bd6ca5ada3a71bd28176582"],["/static/media/maksoud3.2ffa82b0.png","2ffa82b01faba269280931f21d57e426"],["/static/media/maksoud4.d24fbd58.png","d24fbd585d13ee34d3ec9f2c42e25b88"],["/static/media/maksoud5.73abb969.png","73abb9693ce6fa38249af62b04a4f79e"],["/static/media/maksoud6.4c96374c.png","4c96374c9e55229ba52895d75e2c40aa"],["/static/media/speaker_daciuk.8f586f26.jpg","8f586f2631b537982ba2e7e9bd82b48b"],["/static/media/speaker_febernardo.b6ddda06.jpg","b6ddda06ea014a71e555a518ba4f061f"],["/static/media/speaker_rfabeni.9d14417e.jpg","9d14417e2a3509a5b3a54a4cdac44b36"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});