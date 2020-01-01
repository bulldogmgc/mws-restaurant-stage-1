/**
 * Service Worker: code to register the service worker.
 */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(reg) {
      // Registration was successful
      console.log('ServiceWorker registration successful, scope: ', reg.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
