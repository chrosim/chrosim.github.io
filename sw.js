self.addEventListener('install', function (e) {
    self.skipWaiting();
    console.log('[ServiceWorker] Install');
});

self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
});

self.addEventListener('push', function (event, data) {
    event.data = data;
    console.log('[ServiceWorker] Push recieved: ', event);

    event.waitUntil(
        self.registration.showNotification('Push Notification recieved', {
            body: 'This is the Message Body and it should be data but i do not recieve anything in push ' + even.data
            , icon: 'images/icon.png'
            , tag: 'my-tag'
        }));
});

self.addEventListener('notificationclick', function (event) {
    console.log('Notification click: tag ', event.notification.tag);
    event.notification.close();
    var url = 'https://youtu.be/gYMkEMCHtJ4';
    event.waitUntil(
        clients.matchAll({
            type: 'window'
        })
        .then(function (windowClients) {
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});