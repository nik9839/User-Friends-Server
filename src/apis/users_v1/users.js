var express = require('express')
var router = express.Router()

const Users = require('../../models').users;

// DIFFERENT METHODS AVALABLE ON THIS ROUTE
router
    .route("/")
    .get(function(req,res, next){
        let page = req.query.page
        let size = req.query.size
        if(isNaN(page)){
            page = 1;
        }
        
        if(isNaN(size)){
            size = 5;
        }
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
    .post(function(req, res, next){
        return Users.create({firstName: req.body.firstName, lastName: req.body.lastName, avatar : req.body.avatar})
                .then((user) => res.status(201).send(user))
                .catch((error) => res.status(400).send(error))

    })

router
    .route("/:id")
    .get(function(req, res, next){
        console.log(req.params)
        return Users.findByPk(req.params.id)
                .then((user) => {
                    if(!user){
                        return res.status(404).send({message: "User not Found"})
                    }
                    return res.status(200).send(user)
                })
                .catch((error)=> res.status(400).send(error))

    })
    .put(function(req,res,next){
        return Users.findByPk(req.params.id)
                .then((user) => {
                    if(!user){
                        return res.status(404).send({message: "User not Found"})
                    }
                    return user.update({firstName: req.body.firstName || user.firstName, 
                                        lastName: req.body.lastName || user.lastName, 
                                        avatar : req.body.avatar || user.avatar
                                    })
                                .then(() => res.status(200).send(user))
                                .catch((error) => res.status(400).send(error))
                })
                .catch((error)=> res.status(400).send(error))
    })
    .delete(function(req,res,next){
        return Users.findByPk(req.params.id)
                .then((user) => {
                    if(!user){
                        return res.status(404).send({message: "User not Found"})
                    }
                    return user.destroy()
                                .then(() => res.status(204).send())
                                .catch((error) => res.status(400).send(error))
                })
                .catch((error)=> res.status(400).send(error))
    })

module.exports = router;