const AppError = require('../utils/AppError')

const sqliteConnection = require("../database/sqlite")


class UserControler {
   async create(request, response) {
        const { name, email, password } = request.body
        
        const database = await sqliteConnection();
        const checkIfExiste = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(checkIfExiste){
          throw new AppError("Já existe um usário com este e-mail,")
        }

        return response.status(201).json()
      }
    }

    module.exports = UserControler;