const {MongoClient} = require('mongodb');
const yargs = require('yargs');

var argv = yargs
    .options({
        s: {
            demand: false,
            alias: 'season',
            describe: 'Fetches the months witht he given season.',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;


const crud = require('./crud');

const months = [
    {
        name: 'January',
        length: 31,
        season: 'Winter'
    },{
        name: 'February',
        length: 28,
        season: 'Winter'
    },{
        name: 'March',
        length: 31,
        season: 'Spring'
    },{
        name: 'April',
        length: 30,
        season: 'Spring'
    },{
        name: 'May',
        length: 31,
        season: 'Spring'
    },{
        name: 'June',
        length: 30,
        season: 'Summer'
    },{
        name: 'July',
        length: 31,
        season: 'Summer'
    },{
        name: 'August',
        length: 31,
        season: 'Summer'
    },{
        name: 'Septmeber',
        length: 30,
        season: 'Autumn'
    },{
        name: 'October',
        length: 31,
        season: 'Autumn'
    },{
        name: 'November',
        length: 30,
        season: 'Autumn'
    },{
        name: 'December',
        length: 31,
        season: 'Winter'
    }
];

MongoClient.connect('mongodb://localhost:27017/Months', (err, client) => {
    if (err){
        return console.log('Could not connect to Months database');
    }
    console.log('connected to Months');
    const db = client.db('Months');
    
    // crud.insertData(months, db, 'months');
    if (argv.season){
        crud.selectSeason(argv.season, db, 'months'); 
    }
    client.close();
    
});
// insertArray(months);