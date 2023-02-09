const express = require('express');
const router = express.Router();
const itemCtrl = require('../../controllers/api/item');
// require the authorization middleware function
const ensureLoggedIn = require ('../../config/ensureLoggedIn');

router.post("/add", ensureLoggedIn, itemCtrl.addItem);

module.exports = router;