import express from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto'; // Import crypto module
import pgp from 'pg-promise'; // Import pgp module for PostgreSQL

const app = express();
const db = pgp(); // Create a new instance of the pgp module

app.use(express.json());

// Sample user data (for demonstration purposes)
let users = [];

//Database connection for registration
const connectionOptions = {
    host: 'localhost',
    port: 5432,
    database: 'amazonCloneRegistrationdb',
    user: 'postgres',
    password: 'password',
};

//Establishing a connection to the database
db.connect(connectionOptions)
    .then(() => {
        console.log('Connected to database');
    })
    .catch(error => {
        console.error('Error connecting to database:', error);
    });

//Server code
const PORT = process.env.PORT || 3000;

//Server is listening
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

// Routes

// Server Status
app.get("/status", (req, res) => {
    const status = {
        "Status": "Running mannn"
    };

    res.send(status);
});

// POST /signup: Registering a new user
app.post("/signup", (req, res) => {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = users.find(user => user.username === username || user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    const newUser = {
        username,
        email,
        password, // In a real app, you should hash this password
    };

    users.push(newUser); // Add new user to the array

    // Generate a new token for the newly registered user
    const secretKey = crypto.randomBytes(32).toString('hex');
    const token = jwt.sign({ username: newUser.username }, secretKey, { expiresIn: '1h' });

    res.json({
        status: true,
        data: newUser,
        token,
    });
});

// POST /login: Logging in
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Find the user
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // User authenticated successfully
        const secretKey = crypto.randomBytes(32).toString('hex');
        const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
        res.json({ status: true, token });
    } else {
        // User authentication failed
        res.status(401).json({ status: false, message: "Invalid credentials" });
    }
});

// Additional routes here...

