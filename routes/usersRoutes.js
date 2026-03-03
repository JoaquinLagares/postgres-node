const {Router} = require('express');
const usersController = require('../controllers/usersController');
const usersRouter = Router();

usersRouter.get('/',usersController.usersListGet    )
usersRouter.get('/new',usersController.usersCreateGet)
usersRouter.post('/new',usersController.usersCreatePost)

module.export = usersRouter