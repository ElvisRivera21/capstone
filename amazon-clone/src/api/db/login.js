import db from './client';
import bcrypt from 'bcrypt';

const loginUser = async (email, password) => {
    // First, get the user (and hashed password) based on the email
    const user = await db.oneOrNone('SELECT * FROM users WHERE email = $1', [email]);

    // If no user found, return or handle as needed
    if (!user) {
        // Handle the case where the user is not found
        throw new Error('User not found');
        // or return null;
    } else {
        // If user found, compare provided password with stored hash
        const match = await bcrypt.compare(password, user.password);
        
        if (match) {
            // If the passwords match, return the user
            return user;
        } else {
            // If the passwords do not match, handle accordingly
            throw new Error('Password is incorrect');
            // or return null;
        }
    }
};
export default loginUser;
