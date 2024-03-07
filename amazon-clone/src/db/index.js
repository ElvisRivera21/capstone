
/* module.exports = {
    ...require('./login'),
    ...require('./signup'),
    ...require('../api/index'),
    ...require('../Routes/productRoutes')
}

 */


import login from './login';
import signup from './signup';
import users from './users';
import client from './client';
// Import other modules as needed

export {
    login,
    signup,
    users,
    client,
    // Export other modules
};
