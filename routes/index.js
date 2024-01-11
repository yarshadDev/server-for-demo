const router = require("express").Router();
const login = require("./login");
const register = require("./register");
const userdata = require("./userdata");

router.get("/", (req, res) => {
  res.send("STOP LiSTENing To mY ConVERsaTioNS");
  console.log("NEURONS HAVE BEEN ACTIVATEDDDD");
});
router.use("/login", login);
router.use("/register", register);
router.use("/userdata", userdata);

module.exports = router;
