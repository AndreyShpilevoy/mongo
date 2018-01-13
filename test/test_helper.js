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
    const {users, comments, blogposts} = mongoose.connection.collections;
    users.drop(() => {
        comments.drop(() => {
            blogposts.drop(() => {
                done();
            });
        });
    });
});