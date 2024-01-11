const userdata = require("../../controller/userdata");

const router = require("express").Router();

router.get("/", userdata); 


module.exports = router;
