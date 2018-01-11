const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connection.openUri('mongodb://localhost/users_test')
    .once('open', () => {})
    .on('error', (error) => {
        console.warn('Warning', error);
    });
    done();
});

beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
        done();
    });
});