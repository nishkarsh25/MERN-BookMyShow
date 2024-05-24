const express = require("express");
const router = express.Router();
const Ticket = require("./schema"); // Import the Ticket schema

// Endpoint for creating a new booking and adding it to the database.
router.post("/booking", async (req, res) => {
  const { movie, slot, seats } = req.body;

  
});




