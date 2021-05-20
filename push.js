var push=require('web-push')

let vapidkeys={
    publicKey: 'BAlzfqPh844Rand4nYETnTK4XDsLy08cF8JV5rFBPGDrqgwa11g8t257BqMQsiDY5XqWe4YNl-JN7vURFND8eKU',
    privateKey: '3fBzJ7zOVa8Au-7ftno_9uheucNp3PoXUcLzPy9A_f4'
  }

  push.setVapidDetails('mailto:rraki9715@gmail.com',vapidkeys.publicKey,vapidkeys.privateKey)

  let sub={};
  
  push.sendNotification(sub,'test message')