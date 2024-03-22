import db from './client';

const registerUser = async (userDetails) => {
    // userDetails should include necessary user info
    return db.one('INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING id', [userDetails.name, userDetails.email, userDetails.password]);
};

export default registerUser;
