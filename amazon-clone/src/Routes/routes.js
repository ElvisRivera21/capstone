import express from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import db from './db.js'; 

const app = express();
app.use(express.json());

// POST /signup: Registering a new user
app.post("/signup", async (req, res) => {
    console.log(req.body); // Debugging: Log the request body
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ status: false, message: "Username and password are required" });
    }

    try {
        // Hash the password before storing it in the database
        const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
        // Insert user into the database
        await db.none('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hashedPassword]);
        res.status(200).json({ status: true, message: "User successfully registered" });
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ status: false, message: "Internal server error" });
    }
});

// POST /login: Logging in
app.post("/login", async (req, res) => {
    console.log(req.body); // Debugging: Log the request body
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ status: false, message: "Username and password are required" });
    }

    try {
        // Hash the password for comparison with the hashed password stored in the database
        const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
        // Query to verify the user and hashed password
        const user = await db.oneOrNone('SELECT * FROM users WHERE username = $1 AND password = $2', [username, hashedPassword]);

        if (user) {
            // Generate token
            const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ status: true, token });
        } else {
            // Invalid credentials, send 401 error
            res.status(401).json({ status: false, message: "Invalid credentials" });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ status: false, message: "Internal server error" });
    }
});

// Export the app
export default app;
