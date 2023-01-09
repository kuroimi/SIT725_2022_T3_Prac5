require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://s223008124:fate33rio@cluster0.9rplt6a.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true})

client.connect((err, db) => {
    if(!err) {
        console.log('MongoDb Connected')
    }
    else {
        console.log("DB Error: ", err);
        process.exit(1);
    }
})

module.exports = client;