const CACHE_NAME = 'manarahclock-cache-v2';
const urlsToCache = [
  '/',
  '/clock.html',
  '/css/styleInfo.css',
  '/css/styleLogin.css',
  '/js/imagejs.js',
  '/js/prayer.js',
  '/js/prayertimesclass-1-0.js',
  '/js/showtimedate-1-0.js',
  '/assets/clock2-fotor-20240603201840.jpg',
  '/assets/clock2.jpg',
  '/assets/logo.svg',
  '/assets/mobile.jpg',
  '/assets/adhen.mp3',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function (event) {
  const requestUrl = new URL(event.request.url);

  // Handle Firebase dynamic data
  if (requestUrl.origin === 'https://manarahclock-default-rtdb.firebaseio.com') {
    event.respondWith(
      fetch(event.request)
        .then(function (networkResponse) {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          // Clone the response to cache it
          const responseToCache = networkResponse.clone();
          
          // Store Firebase response in cache
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        })
        .catch(function () {
          // If fetch fails (e.g., offline), try to return the cached response
          return caches.match(event.request).then(function (cachedResponse) {
            return cachedResponse || new Response('Offline content unavailable for Firebase');
          });
        })
    );
  } else {
    // Handle other requests
    event.respondWith(
      caches.match(event.request).then(function (cachedResponse) {
        return cachedResponse || fetch(event.request).then(function (networkResponse) {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        });
      })
    );
  }
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
