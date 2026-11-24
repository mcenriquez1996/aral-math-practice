/* ARAL Math Practice - offline service worker (app shell cache) */
var CACHE='aralmath-v19-677abe9c';
var ASSETS=['./','./index.html','./content.js','./salg.js','./figs.js','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png','./assets/deped-logo.webp','./assets/division-logo.webp','./assets/sta-elena-high-school-logo.webp'];
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(ASSETS.map(function(u){return new Request(u,{cache:'reload'});}));}).then(function(){return self.skipWaiting();}));
});
self.addEventListener('activate',function(e){
  // Delete only THIS app's own old caches. CacheStorage is shared by every app on
  // the origin, not scoped to this worker's path, so on a shared host such as
  // <user>.github.io a bare k!==CACHE sweep deletes other apps' offline bundles
  // (and theirs deletes ours). Neither app re-runs install afterwards, because
  // install only fires when sw.js itself changes, so the victim is left with no
  // offline copy until it is next opened online.
  e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.map(function(k){if(k!==CACHE && k.indexOf('aralmath-')===0)return caches.delete(k);}));}).then(function(){return self.clients.claim();}));
});
self.addEventListener('fetch',function(e){
  if(e.request.method!=='GET')return;
  e.respondWith(caches.match(e.request).then(function(r){
    // Only store successful same-origin replies. A static host serves 404s and
    // 503s while a deploy is in flight, and caching one of those would pin the
    // error forever: the next request is served from cache and never retried.
    return r||fetch(e.request).then(function(resp){
      if(resp && resp.ok && resp.type!=='opaque'){var copy=resp.clone();caches.open(CACHE).then(function(c){try{c.put(e.request,copy);}catch(err){}});}
      return resp;
    }).catch(function(){return caches.match('./index.html');});
  }));
});
