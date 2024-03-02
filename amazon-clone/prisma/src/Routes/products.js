const express = require('expresss');
const router = express.Router();

//JSON objects

//Clothing Object

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

//Medical Object

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

//Groceries Object

const groceries = {
    "Groceries": {
        "items": [
            "Fruit",
            "Vegtables",
            "Breads",
            "Meats",
            "Dry goods",
        ]
    }
};

//Home Improvement Object

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

//Exporting Data

module.exports = {
    clothing,
    medical,
    groceries,
    homeImprovements
};