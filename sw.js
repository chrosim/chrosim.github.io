
self.addEventListener('install', function(e) {    
    self.skipWaiting();
    console.log('[ServiceWorker] Install');  
});
                      
self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate'); 
});

self.addEventListener('push', function(e){
    console.log('[ServiceWorker] Push recieved: ' + JSON.stringify(e))
});