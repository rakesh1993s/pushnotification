// var push = require('web-push')

// let vapidkeys = {
//     publicKey: 'BAlzfqPh844Rand4nYETnTK4XDsLy08cF8JV5rFBPGDrqgwa11g8t257BqMQsiDY5XqWe4YNl-JN7vURFND8eKU',
//     privateKey: '3fBzJ7zOVa8Au-7ftno_9uheucNp3PoXUcLzPy9A_f4'
// }

// push.setVapidDetails('mailto:rraki9715@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey)

// let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/eZNW5-eWEGk:APA91bHQJbxVoJYBeIqtNVqmcdYvx0JEhvnmVXIzS8MLbmXJ-csezuaHex1coySh0Sq9lGgWekplokCp4g45CKDzVTcCCulKVs9khKeT9GOf7hG34Mxiuva2RJMKKsqkIM9VWodDQ8XC","expirationTime":null,"keys":{"p256dh":"BGJQ7c14vXGoP5snNxKAIXcf80b8uUTy7UUQwGtbi9-71UPSUmV_KYrJ7L7kR131-5ljTgzbpu4GHU29BwsDlcE","auth":"bi5HHIRtDA6-V3Fhoyx96w"}}

// push.sendNotification(sub, 'test message')

var webPush = require('web-push');
var pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/eZNW5-eWEGk:APA91bHQJbxVoJYBeIqtNVqmcdYvx0JEhvnmVXIzS8MLbmXJ-csezuaHex1coySh0Sq9lGgWekplokCp4g45CKDzVTcCCulKVs9khKeT9GOf7hG34Mxiuva2RJMKKsqkIM9VWodDQ8XC","expirationTime":null,"keys":{"p256dh":"BGJQ7c14vXGoP5snNxKAIXcf80b8uUTy7UUQwGtbi9-71UPSUmV_KYrJ7L7kR131-5ljTgzbpu4GHU29BwsDlcE","auth":"bi5HHIRtDA6-V3Fhoyx96w"}}

var vapidPublicKey = 'BAlzfqPh844Rand4nYETnTK4XDsLy08cF8JV5rFBPGDrqgwa11g8t257BqMQsiDY5XqWe4YNl-JN7vURFND8eKU';
var vapidPrivateKey = '3fBzJ7zOVa8Au-7ftno_9uheucNp3PoXUcLzPy9A_f4';

var payload ="New Task Assigned,https://dcampusstrg.blob.core.windows.net/files/0/VMSLogo-1.png,Hey there! You Got New Task!,Goto Page,Close";    


var options = {
    vapidDetails: {
        subject: 'mailto:example_email@example.com',
        publicKey: vapidPublicKey,
        privateKey: vapidPrivateKey
    },
    TTL: 60
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);