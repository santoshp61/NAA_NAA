import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

const USERS = []; // replace with Mongo model later

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = USERS.find(u => u.email === email);
    if (!user) return res.status(401).json("Invalid credentials");

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json("Invalid credentials");

    const token = jwt.sign({ id: user.id }, "SECRET", { expiresIn: "1d" });

    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "lax"
    });

    res.json({ id: user.id, email: user.email });
});

router.get("/me", (req, res) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json(null);

    try {
        const decoded = jwt.verify(token, "SECRET");
        res.json(decoded);
    } catch {
        res.status(401).json(null);
    }
});

router.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.json("Logged out");
});

export default router;
