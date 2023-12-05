const asyncHandler = require("express-async-handler"); // Handles error for each controller function, needs package express-async-handler

/**
 * @desc get all contacts
 * @route GET /api/contacts
 * @access public
 */

const getAllContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get all contacts" });
});

/**
 * @desc create new contact
 * @route POST /api/contacts
 * @access public
 */

const createNewContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(201).json({ message: "create contact" }); // Resource created. status code is 201
});

/**
 * @desc get a contact
 * @route GET /api/contacts/:id
 * @access public
 */

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
});

/**
 * @desc update a contact
 * @route PUT /api/contacts/:id
 * @access public
 */

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update contact for ${req.params.id}` });
});

/**
 * @desc delete a contact
 * @route DELETE /api/contacts/:id
 * @access public
 */

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete contact for ${req.params.id}` });
});

module.exports = {
  getAllContacts,
  createNewContact,
  getContact,
  updateContact,
  deleteContact,
};
