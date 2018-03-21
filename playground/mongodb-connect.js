const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client) => {
    if (err){
        console.log('Unable to connect to MongoDB server.');
        return;
    }
    console.log('Connected to MongoDB server.');
    const db = client.db('todoApp');

    // db.collection('todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if (err){
    //         return console.log('Could not add todo', err``);
    //     }
    //     console.log('Todo added.', JSON.stringify(res.ops, undefined, 2));
    // })
    // db.collection('users').insertOne({name: 'Roger', age:25}, (err,res)=>{
    //     if (err){
    //         return console.log('Could not add user', err);
    //     }
    //     console.log('User added', JSON.stringify(res.ops, undefined,2));
    //     console.log(res.ops[0]._id.getTimestamp());  
    // })

    db.collection('users').find({name: 'Roger'}).toArray().then(docs => {
        console.log('Todos:');
        console.log(JSON.stringify(docs, undefined, 2));   
    }, err => {
        console.log(err);
    })
    client.close();
});

// Connect to mongodb server command: mongod.exe --dbpath /Users/Home/mongo-data (called from bin folder in mongodb)