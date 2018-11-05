const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorldOne = functions.https.onRequest((request, response) => {
    response.send("Hello 1 from Firebase!");
});

exports.helloWorldTwo = functions.https.onRequest((request, response) => {
    response.send("Hello 2 from Firebase!");
});

exports.helloWorldThree = functions.https.onRequest((request, response) => {
    response.send("Hello 3 from Firebase!");
});