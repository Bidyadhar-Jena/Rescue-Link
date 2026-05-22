const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

const router = express.Router()

router.post("/register", async (req, res) => {
  const { name, email, password, aadhaar, bloodGroup } = req.body

  const existingUser = await User.findOne({ email })

  if (existingUser) {
    return res.status(400).json({ message: "User Already Exists" })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    aadhaar,
    bloodGroup
  })

  res.json({ message: "Registered Successfully", user })
})

router.post("/login", async (req, res) => {
  const { email, password, aadhaar } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    return res.status(404).json({ message: "User Not Found" })
  }

  if (user.aadhaar !== aadhaar) {
    return res.status(400).json({ message: "Invalid Aadhaar Number" })
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid Credentials" })
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

  res.json({ token })
})

module.exports = router