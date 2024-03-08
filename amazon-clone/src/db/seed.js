
// Using dynamic import for 'pg' module because static import might not directly work

// Assuming 'pg' module is already installed
import pg from 'pg';
import bcrypt from 'bcrypt'; // Make sure to install bcrypt

const { Pool } = pg;

const pool = new Pool({
  user: 'lucianolawson',
  host: 'localhost',
  database: 'amazon',
  password: 'randompassword',
  port: 5432,
});

const seed = async () => {

  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Clearing data (Ensure idempotency)
    await client.query('DELETE FROM cart_items');
    await client.query('DELETE FROM users');
    await client.query('DELETE FROM products');
  
    // Products
    
    // Users with hashed passwords
    const hashedPassword1 = await bcrypt.hash('password1', 10);
    const hashedPassword2 = await bcrypt.hash('password2', 10);

    await client.query(`
      INSERT INTO users (username, password, email)
      VALUES
      ('user1', $1, 'user1@example.com'),
      ('user2', $2, 'user2@example.com');
    `, [hashedPassword1, hashedPassword2]);

    // Cart Items
    await client.query(`
      INSERT INTO cart_items (user_id, product_id, quantity)
      VALUES
      (1, 1, 1),
      (1, 2, 2),
      (2, 3, 1);
    `);

    await client.query('COMMIT');
    console.log('Database seeded successfully.');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Error seeding database:', err);
  } finally {
    client.release();
  }
};

seed();
