var express = require('express')
var router = express.Router()

const Users = require('../../models').users;

router.get("/", function(req,res, next){
    let page = req.query.page
    let size = req.query.size
    let offset = (page -1) * size
    return Users
            .findAndCountAll({
                limit : size,
                offset : offset,
                order: [
                ['id', 'DESC'],
                ],
            })
            .then((users) => res.status(200).send(users))
            .catch((error) => res.status(400).send(error));
})

router.post("/", function(req, res, next){
    return Users.create({firstName: req.body.firstName, lastName: req.body.lastName, avatar : req.body.avatar})
            .then((user) => res.status(201).send(user))
            .catch((error) => res.status(400).send(error))

})

module.exports = router;