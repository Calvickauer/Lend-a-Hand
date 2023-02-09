const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const itemSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: { type: String },
});

module.exports = mongoose.model('Item', itemSchema);