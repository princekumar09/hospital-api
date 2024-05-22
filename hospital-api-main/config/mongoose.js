
const mongoose = require('mongoose');
const DB = 'mongodb+srv://sujoypeter:sujoy123@cluster0.ckdun0j.mongodb.net/';

// These set of line can be written in async await fashion, but I have followed the documentation. 
mongoose.connect(DB).then(() => {
     console.log('connection successful');
}).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

// db.on('error', console.error.
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function () {
     console.log('Connected to Database :: MongoDB');
});


module.exports = db;
