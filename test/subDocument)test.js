const assert = require('assert');
const User = require('../src/user');

describe('SubDocuments', () => {
    it('can create a subDocument', (done) => {
        const joe = new User({
            name: 'Joe',
            posts: [{ title: 'Post Title'}]
        });

        joe.save()
            .then(() => User.findOne({ name: 'Joe'}))
            .then((user) => {
                assert(user.posts[0].title === 'Post Title');
                done();
            });
    });

    it('can add a subDocument', (done) => {
        const joe = new User({name: 'Joe', posts: []});

        joe.save()
            .then(() => User.findOne({ name: 'Joe'}))
            .then((user) => {
                user.posts.push({title: 'New Title'});
                return user.save();
            })
            .then(() => User.findOne({ name: 'Joe'}))
            .then((user) => {
                assert(user.posts[0].title === 'New Title');
                done();
            })
    });

    it('can remove a subDocument', (done) => {
        const joe = new User({
            name: 'Joe', 
            posts: [{ title: 'Post Title'}]
        });

        joe.save()
            .then(() => User.findOne({ name: 'Joe'}))
            .then((user) => {
                user.posts[0].remove();
                return user.save();
            })
            .then(() => User.findOne({ name: 'Joe'}))
            .then((user) => {
                assert(user.posts.length === 0);
                done();
            })
    });
})