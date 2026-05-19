const mongoose = require("mongoose")

const emergencySchema = new mongoose.Schema({
  user: String,
  location: String,
  type: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Emergency", emergencySchema)