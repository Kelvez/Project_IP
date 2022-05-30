var mongoose = require('mongoose');

var artSchema = new mongoose.Schema({
    image: {
        type: Buffer,
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