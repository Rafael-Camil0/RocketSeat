const { Router } = require('express')
const UserControler = require('../controlers/UserControler')

const usersRoutes = Router()

const userControler = new UserControler()

usersRoutes.post('/', userControler.create)

// function myMiddleware(req,res,next){
// console.log("você passou pelo middleware")
// next()

// }

module.exports = usersRoutes