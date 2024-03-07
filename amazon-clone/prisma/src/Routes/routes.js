import express from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import db from './db';
import pgp from 'pg-promise';

const app = express();
app.use(express.json());

//JSON middleware
app.use(express.json());

// Database connection options
const connectionOptions = {
    host: 'localhost',
    port: 5432,
    database: 'amazonCloneRegistrationdb',
    user: 'postgres',
    password: 'password',
};

// Establish connection to the database
db.connect(connectionOptions)
    .then(() => {
        console.log('Connected to database');
    })
    .catch(error => {
        console.error('Error connecting to database:', error);
    });

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
    const { username, password } = req.body;

    try {
        //Querey to db to verify the user and password
        const user = await db.oneOrNone('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);

        //Send token to client
        res.json({status: true, token: token });
    } else {
        //Invalid credentials, send 401 error
        
    }
});

// Other routes

export default app;