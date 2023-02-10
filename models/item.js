const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const itemSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: { type: String },
    description: { type: String },
    image: { type: String, default: "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg" }
});

module.exports = mongoose.model('Item', itemSchema);
module.exports = mongoose.model('Item', itemSchema);