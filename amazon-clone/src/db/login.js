import db from './client';

const loginUser = async (email, password) => {
    // if password comparison and hashing is done outside of this file
    return db.oneOrNone('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);
};

export default loginUser;
