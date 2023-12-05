const express = require("express");
const {
  getAllContacts,
  createNewContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

const router = express.Router();

router.route("/").get(getAllContacts).post(createNewContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
