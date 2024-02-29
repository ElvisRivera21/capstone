// Import required modules
const express = require('express');
const router = express.Router();

//data Source


// GET all products
router.get('/products', (req, res) => {
    res.json(products);
});

// GET a single product by ID
router.get('/products/:id', (req, res) => {
    const prooductId = parseInt(req.params.productId);
    const product = products.find(prod => prod.id === prooductId);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
});

// POST a new product (for admin)
router.post('/products', (req, res) => {
    const { name, description, price } = req.body;

    //Validate body request
    if (!name, || !description, || !price) {
        return res.status(400).json({ message: 'Please provide all fields' });
    }
    const newProduct = {
        id: product.length + 1,
        name,
        description,
        price
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
});

// PUT - Update details of product by ID(for admin)

router.put('/products/:id', (req, res) => {
    const productId = parseInt(req.params.productId);
    const { name, description, price } = req.body;
    const productIndex = products.findIndex(prod => prod.id === productId);

    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }

    // Update product details
    products[productIndex] = { ...products[productIndex], name, description, price };

    res.json(products[productIndex]);
});

// DELETE - Delete a product by ID (for admin)
router.delete('/products/:productId', (req, res) => {
    const productId = parseInt(req.params.productId);
    const productIndex = products.findIndex(prod => prod.id === productId);

    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }

    // Remove product from array
    products.splice(productIndex, 1);

    res.json({ message: 'Product deleted successfully' });
});

module.exports = router;