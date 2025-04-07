self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('iphone-store').then((cache) => {
            return cache.addAll(['.', 'index.html', 'manifest.json', 'iphone13promax.png', 'iphone.png']);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => res || fetch(e.request))
    );
});