const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client) => {
    if (err){
        return console.log('Could not connect to todoApp database', err);
    }
    console.log('Connection to todoApp was successful');
    const db = client.db('todoApp');

    db.collection('users').deleteMany({name: 'Roger'}).then(res => {
        console.log('Successfully deleted documents.',res);
        
    }, err => {
        console.log('Could not delete documents', err);
    })
});