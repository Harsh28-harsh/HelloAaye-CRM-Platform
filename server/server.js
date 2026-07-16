const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const inquiryRoutes = require("./routes/inquiryRoutes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorMiddleware");

// Load Environment Variables
dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 HelloAaye CRM Backend is Running",
  });
});

// API Routes
app.use("/api/inquiry", inquiryRoutes);

// Not Found Middleware
app.use(notFound);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});