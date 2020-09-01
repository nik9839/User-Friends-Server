let express = require('express');
let router = express.Router();

router.use((req, res, next) => {
    next();
});


router.use('/v1/users', require('./users_v1/users'));
router.use('/v1/user', require('./users_v1/user'));


module.exports = router;