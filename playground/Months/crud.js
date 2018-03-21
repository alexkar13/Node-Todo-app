const insertData = (data, database, collectionName) => {
    database.collection(collectionName).insertMany(data, (err,result) =>{
        if (err){
            console.log('Could not add the data.');
            console.log(err);
        }
        console.log('Data was added successfuly.');
        console.log(result);
    });
}

const selectSeason = (season, database, collectionName) => {
    database.collection(collectionName).find({ season: season }).toArray((err, documents) => {
        if (err) {
            return console.log('Could not select the Season.');
        }
        console.log('Success!');
        documents.forEach(month => {
            console.log(month.name);
        });
    });
}

module.exports = {
    insertData,
    selectSeason
}