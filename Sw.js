self.addEventListener('install', (e) => {
  console.log('App Instalado');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
