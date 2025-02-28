const express = require("express");
const authcontroller = require("../controllers/authcontroller");
const router = express.Router();


// Register Route
router.post("/register", authcontroller.register);

router.post("/login", authcontroller.login);
module.exports = router;