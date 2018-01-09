const mongoose = require('mongoose');

mongoose.connection.openUri('mongodb://localhost/users_test')
    .once('open', () => console.log('Good to go!'))
    .on('error', (error) => {
        console.warn('Warning', error);
    });