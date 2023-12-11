const asyncHandler = require("express-async-handler"); // Handles error for each controller function, needs package express-async-handler
const Contact = require("../models/contactModel");
/**
 * @desc get all contacts
 * @route GET /api/contacts
 * @access public
 */

const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
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

  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact); // Resource created. status code is 201
});

/**
 * @desc get a contact
 * @route GET /api/contacts/:id
 * @access public
 */

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }
  res.status(200).json(contact);
});

/**
 * @desc update a contact
 * @route PUT /api/contacts/:id
 * @access public
 */

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedContact);
});

/**
 * @desc delete a contact
 * @route DELETE /api/contacts/:id
 * @access public
 */

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }
  await contact.deleteOne();
  res.status(200).json(contact);
});

module.exports = {
  getAllContacts,
  createNewContact,
  getContact,
  updateContact,
  deleteContact,
};
