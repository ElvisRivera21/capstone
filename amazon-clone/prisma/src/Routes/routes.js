import express from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import db from './db';

const app = express();
app.use(express.json());

// POST /signup: Registering a new user
app.post("/signup", async (req, res) => {
    // Implementation to register a new user
    try {
        await db.connectToDB();
        // Your signup logic here
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ status: false, message: "Internal server error" });
    }
});

// POST /login: Logging in
app.post("/login", async (req, res) => {
    // Implementation to login
});

// Other routes

export default app;