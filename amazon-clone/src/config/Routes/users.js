import express from 'express';
const router = express.Router();

// user route
router.get("/", (req, res) => {
    const status = { "Status": "Running" };
    res.send(status);
});

router.get("/:id", (req, res) => {
    const status = { "Status": "User profile with ID: " + req.params.id };
    res.send(status);
});

router.post("/", (req, res) => {
    // handling POST request to create a new user
    const newUser = req.body; 

    const status = { "Status": "User created", newUser };
    res.status(201).send(status);
});

router.put("/:id", (req, res) => {
    // handling a PUT request to update a user
    const updatedUser = req.body; 
    const status = { "Status": "User updated with ID: " + req.params.id, updatedUser };
    res.send(status);
});

export default router;
