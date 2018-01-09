const mongoose = require('mongoose');
const Schema = mongoose.schema;

const UserSchema = new Schema({
    name: String
});

const User = mongoose.model('user', UserSchema);

module.exports = User;