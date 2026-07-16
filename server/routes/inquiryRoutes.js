const express = require("express");

const {
  createInquiry,
  getAllInquiries,
  deleteInquiry,
} = require("../controllers/inquiryController");

const router = express.Router();

// Create Inquiry
router.post("/", createInquiry);

// Get All Inquiries
router.get("/", getAllInquiries);

// Delete Inquiry
router.delete("/:id", deleteInquiry);

module.exports = router;