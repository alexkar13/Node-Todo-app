const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err){
        return console.log('Could not connect to Mongo DB');
    }
    console.log('Successfuly connected to Mongo DB.');
    
    const db = client.db('todoApp');

    db.collection('users').findOneAndDelete({ "_id": ObjectId("5ab1d9b5135e1ad73bd62ffc")}).then((res) => {
    console.log('Deleted  item ', JSON.stringify(res, undefined, 2));
   }, (err) => {
       console.log('Could not delete item ', err);
       
   });

});