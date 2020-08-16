const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before(function (done) {
    mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
    mongoose.connection.once('open', () => {
        console.log("Connection has been made successfully!");
        done();
    }).on('error', (err) => {
        console.log("Connection error! ", err);
    });
});

beforeEach(function (done) {
    mongoose.connection.collections.users.drop(() => done());
});