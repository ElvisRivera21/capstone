import db from './client';

const getUsers = async () => {
    return db.any('SELECT * FROM users');
};

const deleteUser = async (userId) => {
    return db.none('DELETE FROM users WHERE id = $1', [userId]);
};

/**
 * Updates user information in the database.
 * @param {number|string} userId - The ID of the user to update.
 * @param {object} updates - An object containing the user attributes to update.
 * @returns {Promise} - A promise that resolves to the result of the update operation.
*/
const updateUser = async (userId, updates) => {
    // Construct the SQL query dynamically based on the `updates` object
    const setClause = Object.keys(updates)
    .map((key, index) => `${key} = $${index + 2}`) // +2 because $1 is reserved for userId
    .join(', ');
    
    const query = `
    UPDATE users
    SET ${setClause}
    WHERE id = $1
    RETURNING *;`; // if 'id' is the primary key column in the users table
    
    const values = [userId, ...Object.values(updates)];
    
    try {
        const result = await db.one(query, values);
        return result;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

export default {
    getUsers,
    updateUser,
    deleteUser,
};
