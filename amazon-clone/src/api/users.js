<<<<<<< HEAD
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
=======
// An instructor can only access their own students' data.
const router = require("express").Router();
const prisma = require("../db/client");

// Deny access if user is not logged in
router.use((req, res, next) => {
  if (!req.user) {
    return res.status(401).send("You must be logged in to do that.");
  }
  next();
});

// Get all users
router.get("/users", async (req, res, next) => {
  try {
    const user = await prisma.user.findMany({
      orderBy: {
        id: "asc"
      }
    })
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

// Get a user by id
router.get("/users/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;

    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(userId),
      },
    });

    if (!user) {
      return res.status(404).send("User not found.");
    }

    res.send(user);
  } catch (error) {
    next(error);
  }
});

// Create a new user
router.post("/", async (req, res, next) => {
  try {
    const { name, id, email, phone } = req.body;
    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        id
      }
    })

    res.status(201).send(user);
  } catch (error) {
    next(error);
  }
});

// Update a user
router.put("/:id", async (req, res, next) => {
  try {
    const { name, id, email, phone } = req.body;
    const user = await prisma.user.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        name,
        email,
        phone,
        id
      }
    })

    if (!user) {
      return res.status(404).send("User not found.");
    }

    res.send(user);
  } catch (error) {
    next(error);
  }
});

// Delete a user by id
router.delete("/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;
    const foundUser = await prisma.user.findUnique({
      where: {
        id: parseInt(userId),
      },
    });
    if (!foundUser) {
      return res.status(404).send("User not found.");
    } else if (req.user.id !== foundUser.userid) {
      return res.status(404).send("You aren't registered, you cannot delete")
    } else {
      const user = await prisma.user.delete({
        where: {
          id: parseInt(userId),
        },
      });
      res.send(user);
    }

  } catch (error) {
    next(error);
  }
});

module.exports = router;
>>>>>>> feature-d
