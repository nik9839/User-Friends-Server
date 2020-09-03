let express = require('express');
let router = express.Router();

// middleware, can be used for all requests in this route
// can be used for authenticating request
router.use((req, res, next) => {
    next();
});

// route for users api VERSION : V1
router.use('/v1/users', require('./users_v1/users'));

//route for user friends api VERSION V1
router.use('/v1/user', require('./users_v1/user'));


module.exports = router;