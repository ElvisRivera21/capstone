import express from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto'; // Import crypto module


const app = express();

app.use(express.json());

//Server code
const PORT = process.env.PORT || 3000;

//Server is listening
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

//Routes

//Server Status

app.get("/status", (req, res) => {
    const status = {
        "Status": "Running mannn"
    };

    res.send(status);
});

// Sample user data (for demonstration purposes)
let users = [];

// POST /signup: Registering a new user
app.post("/signup", (req, res) => {
    // Implementation to register a new user
    const newUser = {
        "username": "sandrawill",
        "email": "sandrawill@example.com",
        "age": 20,
        "firstName": "Sandra",
        "lastName": "William",
        "password": "sandrawill",
        "role": "admin"
    };

    //Generate a new token for the newly registered user
    const secretKey = crypto.randomBytes(32).toString('hex'); //Generate a random secret key

    const token = jwt.sign(newUser, secretKey, { expiresIn: "1h" }); //Token expires in 1 hour

    //Construt the response
    const response = {
        status: true,
        data: {
            user: newUser,
            token: token
        }
    };

    //Send the response
    res.json(response);
});





// POST /login: Logging in
app.post("/login", (req, res) => {
    // Implementation for logging in
});

// GET /user: Retrieving a user’s profile (restricted to the user themselves)
app.get("/user", (req, res) => {
    // Implementation to retrieve user profile (restricted to the authenticated user)
});

// PATCH /user/:userId: Updating a user’s profile (restricted to the user themselves)
app.patch("/user/:userId", (req, res) => {
    // Implementation to update user profile (restricted to the authenticated user)
});

// GET /user/all: Retrieving all users (available to all users)
app.get("/user/all", (req, res) => {
    // Implementation to retrieve all users (can be accessed by any authenticated user)
});

// PATCH /user/change-role/:userId: Updating a user’s role (restricted to admins)
app.patch("/user/change-role/:userId", (req, res) => {
    // Implementation to update user role (restricted to admins)
});

// DELETE /user/:userId: Deleting a user (restricted to admins)
app.delete("/user/:userId", (req, res) => {
    // Implementation to delete user (restricted to admins)
});