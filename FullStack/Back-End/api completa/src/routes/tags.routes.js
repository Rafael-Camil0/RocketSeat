const { Router } = require('express')

const TagsController = require('../controllers/TagsController')

const tagsRoutes = Router()

const tagsController = new TagsController()


tagsRoutes.get('/:id', tagsController.index )




module.exports = tagsRoutes
