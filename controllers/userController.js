const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
/**
 * @desc register new user
 * @route POST /api/users/register
 * @access public
 */

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("User input not valid");
  }
});

/**
 * @desc login user
 * @route POST /api/users/login
 * @access public
 */

const loginUser = asyncHandler(async (req, res) => {});

/**
 * @desc get current user
 * @route GET /api/users/current
 * @access private
 */

const currentUserDetails = asyncHandler(async (req, res) => {
  res.json({ message: "current user details" });
});

module.exports = {
  registerUser,
  loginUser,
  currentUserDetails,
};
