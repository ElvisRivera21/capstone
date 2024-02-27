// Import required modules
const express = require('express');
const router = express.Router();

//data Source


// GET all products
router.get('/products', (req, res) => {
    res.json(products);
});
