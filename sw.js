
self.addEventListener('push', function (e) {
    var body;

    if (e.data) {
        body = e.data.text();
    } else {
        body = 'Push message no payload';
    }

    if (body == 'Push message no payload') {
        var options = {
            body: 'This notification was generated from a push!',
            icon: 'images/example.png',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: '2'
            },
            actions: [
                {
                    action: 'explore', title: 'Explore this new world',
                    icon: 'images/checkmark.png'
                },
                {
                    action: 'close', title: 'Close',
                    icon: 'images/xmark.png'
                },
            ]
        };
        e.waitUntil(
            self.registration.showNotification('Hello world!', options)
        );
    }
    else {
        var nameArr = body.split(',');

        var options = {
            body: nameArr[0],
            icon: nameArr[1],
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: 1
            },
            actions: [
                {
                    action: 'explore', title: nameArr[3],
                    icon: 'images/checkmark.png'
                },
                {
                    action: 'close', title: nameArr[4],
                    icon: 'images/xmark.png'
                },
            ]
        };
        e.waitUntil(
            self.registration.showNotification(nameArr[2], options)
        );
    }
});

