const CACHE_NAME = 'mercado-facil-v1';
const ASSETS = [
  './',
  './index.html',
  './tesseract.min.js'
];

// Guardar archivos en la memoria caché del teléfono al cargar por primera vez
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Responder desde la memoria cuando NO haya internet
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});