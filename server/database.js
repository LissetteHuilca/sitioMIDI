const mongoose = require('mongoose');

const URI = 'mongodb://localhost/crud-midi';

mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));


   
module.exports = mongoose;