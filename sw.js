self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('schwertkram-v1').then((c) => c.addAll([
    './',
    './index.html',
    './manifest.webmanifest',
    './icon-192.png'
  ])));
});
self.addEventListener('activate', (e)=>{
  e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((resp) => resp || fetch(e.request))
  );
});