(function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);

            registration.pushManager.subscribe().then(
                function (pushSubscription) {
                    console.log(JSON.stringify(pushSubscription));
                }
                , function (error) {
                    console.log(error);
                }
            );

        }).catch(function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    }
})();