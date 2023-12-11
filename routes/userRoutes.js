const express = require("express");
const {
  registerUser,
  loginUser,
  currentUserDetails,
} = require("../controllers/userController");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/current").get(currentUserDetails);

module.exports = router;
