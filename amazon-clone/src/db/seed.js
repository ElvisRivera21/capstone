// Using dynamic import for 'pg' module because static import might not directly work
const { Pool } = require("pg");
const db = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgres://localhost:5432/amazon",
});

const seed = async () => {
  try {
    // Products
    await db.query(`
      INSERT INTO products (name, description, price, stock)
      VALUES
      ('Product 1', 'Description for product 1', 10.00, 100),
      ('Product 2', 'Description for product 2', 15.50, 200),
      ('Product 3', 'Description for product 3', 7.25, 150);
    `);

    // Users
    await db.query(`
      INSERT INTO users (username, password, email)
      VALUES
      ('user1', 'password1', 'user1@example.com'),
      ('user2', 'password2', 'user2@example.com');
    `);

    // Cart Items
    await db.query(`
      INSERT INTO cart_items (user_id, product_id, quantity)
      VALUES
      (1, 1, 1),
      (1, 2, 2),
      (2, 3, 1);
    `);

    console.log('Database seeded successfully.');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    await db.end();
  }
};

seed();
