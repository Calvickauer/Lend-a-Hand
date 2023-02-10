const Item = require('../../models/item');

module.exports = {
    create,
    getAll,
    getOwned, getItem

}

async function create(req, res) {
    console.log(req.body);
    req.body.user = req.user._id;
    const item = Item.create(req.body);
    res.json(item);
}

async function getOwned(req, res) {
    const items = await Item.find({
        user: req.user._id
    })
    res.json(items);
}

async function getAll(req, res) {
    const items = await Item.find({
        // user: req.user._id
    })
    res.json(items);
}

async function create(req, res) {
    console.log(req.body);
    req.body.user = req.user._id;
    const item = Item.create(req.body);
    res.json(item);
}

async function getOwned(req, res) {
    const items = await Item.find({
        user: req.user._id

    })
    res.json(items);
}
async function getAll(req, res) {
    const items = await Item.find({
        // user: req.user._id
    })
    res.json(items);
}

async function getItem(req, res) {
    const item = await Item.find({
        id: req.item._id
    })
    res.json(item);
}




