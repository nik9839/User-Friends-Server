var express = require('express')
var router = express.Router()

const UserFriend = require('../../models').userfriends;
const Users = require('../../models').users;

const db = require('../../models')

// DIFFERENT METHODS AVALABLE ON THIS ROUTE
router
    .route("/:id/friends")
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
        let user = req.params.id
        const friends  = db.sequelize.dialect.queryGenerator.selectQuery('userfriends',{
            attributes: ['friendId'],
            where: {
                  userId: user
            }}).slice(0,-1)
        return Users
                .findAndCountAll({
                    where: {
                        "id" : {
                            [db.Sequelize.Op.in]: db.sequelize.literal(`(${friends})`)
                        }
                    },
                    limit : size,
                    offset : offset,
                    order: [
                    ['id', 'DESC'],
                    ],
                })
                .then((users) => res.status(200).send(users))
                .catch((error) => res.status(400).send(error));
    })
    .post(function(req,res,next){
        return UserFriend.create({userId: req.params.id, friendId: req.body.friendId})
                            .then((userfriend) => res.status(201).send())
                            .catch((error) => res.status(400).send(error))
    })


    router
    .route("/:id/friends-of-friends")
    .get(function(req,res, next){
        let page = req.query.page
        let size = req.query.size
        let offset = (page -1) * size
        let user = req.params.id
        const friends  = db.sequelize.dialect.queryGenerator.selectQuery('userfriends',{
            attributes: ['friendId'],
            where: {
                  userId: user
            }}).slice(0,-1)
        const friends_of_friends = db.sequelize.dialect.queryGenerator.selectQuery('userfriends',{
            attributes: ['friendId'],
            where: {
                  userId: {
                    [db.Sequelize.Op.in]: db.sequelize.literal(`(${friends})`)
                }
            }}).slice(0,-1)
        return Users
                .findAndCountAll({
                    where: {
                        "id" : {
                            [db.Sequelize.Op.in]: db.sequelize.literal(`(${friends_of_friends})`)
                        }
                    },
                    limit : size,
                    offset : offset,
                    order: [
                    ['id', 'DESC'],
                    ],
                })
                .then((users) => res.status(200).send(users))
                .catch((error) => res.status(400).send(error));
    })



    module.exports = router;