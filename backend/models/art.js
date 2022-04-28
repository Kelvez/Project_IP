var mongoose = require('mongoose');

var artSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    desc: String
}, {
    timestamps: true,
});

var Arts = mongoose.model('Arts', artSchema);
module.exports = Arts;