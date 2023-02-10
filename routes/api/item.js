const express = require('express');
const router = express.Router();
const itemCtrl = require('../../controllers/api/item');
// require the authorization middleware function
const ensureLoggedIn = require ('../../config/ensureLoggedIn');



router.get("/", itemCtrl.getAll);
router.get("/owned", itemCtrl.getOwned);
router.post("/add", itemCtrl.create);
router.post("/items/:itemId", itemCtrl.getItem);
router.get("/about", itemCtrl.getAll);

module.exports = router;