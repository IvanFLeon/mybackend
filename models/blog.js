const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    date: {
        type: Date
    },
    author: {
        type: String
    },
    title: {
        type: String
    }
});

module.exports = mongoose.model('Blog', BlogSchema);