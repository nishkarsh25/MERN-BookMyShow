const express = require("express");
const router = express.Router();
const Ticket = require("./schema"); // Import the Ticket schema

// Endpoint for creating a new booking and adding it to the database.
router.post("/booking", async (req, res) => {
  const { movie, slot, seats } = req.body;

  try {
    // Create a new Ticket instance using the provided data
    const myData = new Ticket({ movie, slot, seats });

    // Save the Ticket instance to the database
    await myData.save();

    // Respond with success message and the saved data
    res.status(200).json({ data: myData, message: "Booking successful!" });
  } catch (error) {
    // Handle errors and respond with an error message
    res.status(500).json({
      data: null,
      message: "Something went wrong! Please try again.",
    });
  }
});

// Endpoint for getting the last booking details from the database and sending it to the frontend.
router.get("/booking", async (req, res) => {
  
});


