self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
  // A simple pass-through fetch handler is enough to trigger the PWA banner
});
