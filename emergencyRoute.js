const express = require("express")
const Emergency = require("../models/Emergency")

const router = express.Router()

router.post("/create", async (req, res) => {
  const { user, location, type } = req.body

  const emergency = await Emergency.create({
    user,
    location,
    type
  })

  res.json(emergency)
})

router.get("/all", async (req, res) => {
  const data = await Emergency.find()
  res.json(data)
})

module.exports = router