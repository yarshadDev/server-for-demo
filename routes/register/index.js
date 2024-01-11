const register = require("../../controller/register");

const router = require("express").Router();

router.post("/", register);

module.exports = router;
