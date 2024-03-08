import express from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import db from './db';
import pgp from 'pg-promise';

const app = express();
app.use(express.json());

// Database connection options
const connectionOptions = {
    host: 'localhost',
    port: 5432,
    database: 'amazonCloneRegistrationdb',
    user: 'postgres',
    password: 'password',
};

// Create a PostgreSQL database instance
const dbInstance = pgp(connectionOptions);

// Establish connection to the database
dbInstance.connect()
    .then(() => {
        console.log('Connected to database');
    })
    .catch(error => {
        console.error('Error connecting to database:', error);
    });

// POST /signup: Registering a new user
app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    try {
        // Hash the password before storing it in the database
        const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
        // Your signup logic here
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ status: false, message: "Internal server error" });
    }
});

// POST /login: Logging in
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        // Hash the password for comparison with the hashed password stored in the database
        const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
        // Query to verify the user and hashed password
        const user = await dbInstance.oneOrNone('SELECT * FROM users WHERE username = $1 AND password = $2', [username, hashedPassword]);

        if (user) {
            // Generate token
            const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET);
            res.json({ status: true, token: token });
        } else {
            // Invalid credentials, send 401 error
            res.status(401).json({ status: false, message: "Invalid credentials" });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ status: false, message: "Internal server error" });
    }
});

// Other routes

export default app;