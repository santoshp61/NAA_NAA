const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());

// Serve images
app.use("/Image", express.static(path.join(__dirname, "Image")));

// Dummy user (for now)
const user = {
  email: "admin@gmail.com",
  password: "123456",
};

// LOGIN API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === user.email && password === user.password) {
    return res.json({
      message: "Login successful!",
      token: "fake-jwt-token",
      user: { email }
    });
  }

  res.status(401).json({ message: "Invalid email or password" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
