const Router = require('express')
const UserController = require('./User.controller')

const router = new Router()

router.get('/users', UserController.getAll)
router.post('/users', UserController.create)
router.get('/users/:id', UserController.getOne)
router.put('/users', UserController.update)
router.delete('/users/:id', UserController.delete)

module.exports = router