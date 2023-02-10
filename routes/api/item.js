const express = require('express');
const router = express.Router();
const itemCtrl = require('../../controllers/api/item');
// require the authorization middleware function
const ensureLoggedIn = require ('../../config/ensureLoggedIn');



router.get("/", itemCtrl.getAll);
router.post("/add", itemCtrl.create);
router.get("/about", itemCtrl.getAll);

module.exports = router;