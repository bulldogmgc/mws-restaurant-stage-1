let staticCacheName = 'restaurant-cache';

let filesToCache = [
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/register_sw.js',
  '/js/restaurant_info.js',
  '/index.html',
  '/restaurant.html',
  '/css/styles.css',
  '/data/restaurants.json',
  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
  '/img/custom/offline_image.jpg',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg'
];
/**
 * list of assets to cache on install
 * cache each restaurant detail page as well
 */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(staticCacheName)
      .then(cache => {
        return cache.addAll(filesToCache).catch(error => {
          console.log('Caches open failed: ' + error);
        });
      })
  );
});

/**
 * Activate and delete old/unused static caches
 */
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => {
            return (
              cacheName.startsWith("restaurant-") &&
              cacheName != staticCacheName
            );
          })
          .map(cacheName => {
            return caches.delete(cacheName);
          })
      );
    })
  );
});

/**
 * Fetching for offline content viewing
 */
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true })
      .then(response => {
        if (response) {
          return response;
        }
        let fetchRequest = event.request.clone();
        return fetch(fetchRequest).then(response => {
          if (!response) return;
          let newResponse = response.clone();
          caches.open(staticCacheName).then(cache => {
            cache.put(event.request, newResponse);
          });
          return response;
        });
    }).catch(error => {
        return caches.match('/img/custom/offline_image.jpg');
    })
  );
});
