const Inquiry = require("../models/Inquiry");
const asyncHandler = require("../utils/asyncHandler");
const mongoose = require("mongoose");

// @desc    Create Inquiry
// @route   POST /api/inquiry
// @access  Public
const createInquiry = asyncHandler(async (req, res) => {
  const {
    fullName,
    companyName,
    email,
    phone,
    country,
    industry,
    companySize,
    message,
  } = req.body;

  // Validate required fields
  if (
    !fullName ||
    !companyName ||
    !email ||
    !phone ||
    !country ||
    !industry ||
    !companySize ||
    !message
  ) {
    res.status(400);
    throw new Error("Please fill all required fields.");
  }

  // Check if inquiry already exists with same email
  const existingInquiry = await Inquiry.findOne({ email });

  if (existingInquiry) {
    res.status(400);
    throw new Error("An inquiry with this email already exists.");
  }

  // Create Inquiry
  const inquiry = await Inquiry.create({
    fullName,
    companyName,
    email,
    phone,
    country,
    industry,
    companySize,
    message,
  });

  res.status(201).json({
    success: true,
    message: "Inquiry submitted successfully.",
    data: inquiry,
  });
});

// @desc    Get All Inquiries
// @route   GET /api/inquiry
// @access  Public
const getAllInquiries = asyncHandler(async (req, res) => {
  const inquiries = await Inquiry.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: inquiries.length,
    data: inquiries,
  });
});

// @desc    Delete Inquiry
// @route   DELETE /api/inquiry/:id
// @access  Public
const deleteInquiry = asyncHandler(async (req, res) => {
  // Validate MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400);
    throw new Error("Invalid Inquiry ID.");
  }

  const inquiry = await Inquiry.findById(req.params.id);

  if (!inquiry) {
    res.status(404);
    throw new Error("Inquiry not found.");
  }

  await inquiry.deleteOne();

  res.status(200).json({
    success: true,
    message: "Inquiry deleted successfully.",
  });
});

module.exports = {
  createInquiry,
  getAllInquiries,
  deleteInquiry,
};