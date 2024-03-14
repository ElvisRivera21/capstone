// Import required modules
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

// Initialize Prisma client
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.database_url,
    },
  },
});

// Function to retrieve all products from the database
async function getAllProducts() {
  try {
    const products = await prisma.product.findMany();
    return products;
  } catch (error) {
    console.error('Error retrieving products:', error);
    throw error;
  }
}

// Function to retrieve a product by ID from the database
async function getProductById(productId) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });
    return product;
  } catch (error) {
    console.error('Error retrieving product by ID:', error);
    throw error;
  }
}

// Export the functions to be used in other parts of the application
module.exports = {
  getAllProducts,
  getProductById,
};
