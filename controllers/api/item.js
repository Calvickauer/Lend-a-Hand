const Item = require('../../models/item');

module.exports = {
    addItem
}

async function addItem(req, res) {
    req.body.users = req.user._id;
    const newItem = new Item(req.body);
    await newItem.save();
    res.json(newItem);
}