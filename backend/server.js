const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json()); // to parse JSON data from requests

// Serve static files from the Image folder
app.use("/Image", express.static(path.join(__dirname, "Image")));

// Dummy user data for testing
const user = {
  email: "santopakhrin61@gmail.com",
  password: "123456",
};

// Login API route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === user.email && password === user.password) {
    res.json({ message: "Login successful!", token: "fake-jwt-token" });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
