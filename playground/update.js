// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client) => {
    if (err){
        return console.log('Could not connect to the todoApp database.');
    }
    console.log('Successfully connected to Mongo DB.');
    const db = client.db('todoApp');

    db.collection('users').findOneAndUpdate(
    {
        name: 'Alex'
    }, {
        $inc : {age: 1},
        $set : {name: 'James'}
    }, {
        returnNewDocument: true
    }).then((response) => {
        console.log('Succeded updating the document');
        console.log(JSON.stringify(response, undefined, 2));
    }, (err) => {
        console.log('Failed to update the document', err);
        console.log(JSON.stringify(err, undefined, 2));
    });
});