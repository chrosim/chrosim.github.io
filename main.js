(function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);

            registration.pushManager.subscribe({
                userVisibleOnly: true
            }).then(
                function (pushSubscription) {
                    fetch('https://localhost:8080/subscribe', {
                        method: 'post'
                        , mode: 'no-cors'
                        , body: {
                            data: JSON.stringify(pushSubscription)
                        }
                    });
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

/*
"{
\"registration_ids\":[ \"e5xFKTVTbaY:APA91bHqE5ap_BAWUkUenecMmBooZQmKyMXbzEiG_Ts2Z_Cq9r65kB--qP89df51130yemZAZ5xeDyNyIz4qwNjdXMtuoHnHTgEPghwN2dtKVlXV7lOcCTMTHTQ52NUvkHvAW2xM583O\"],
    \"data\": { \"name\": \"Hello Notification\"}
}"
*/