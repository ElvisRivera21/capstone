const express = require('express');
const router = express.Router();

// JSON objects
// Clothing Object
const clothing = {
    "Clothing": {
        "items": [
            "T-shirts",
            "Socks",
            "Pants",
            "Shoes",
            "Accessories",
        ]
    }
};

// Medical Object
const medical = {
    "Medical": {
        "items": [
            "OTC",
            "First Aid",
            "Vitamins",
            "Supplements",
            "Equipment",
        ]
    }
};

// Groceries Object
const groceries = {
    "Groceries": {
        "items": [
            "Fruit",
            "Vegetables",
            "Breads",
            "Meats",
            "Dry goods",
        ]
    }
};

// Home Improvement Object
const homeImprovements = {
    "HomeImprovements": {
        "items": [
            "Tools",
            "Decor",
            "Bathroom",
            "Kitchen",
            "Flooring"
        ]
    }
};

// Define routes
router.get('/clothing', (req, res) => {
    res.json(clothing);
});

router.get('/medical', (req, res) => {
    res.json(medical);
});

router.get('/groceries', (req, res) => {
    res.json(groceries);
});

router.get('/homeImprovements', (req, res) => {
    res.json(homeImprovements);
});

// Export the router
module.exports = router;