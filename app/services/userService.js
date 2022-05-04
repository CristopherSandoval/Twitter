const User = require("../models/user");
class UserService{
    static create(id, username, nombre,) {
        return new User(id, username, nombre, "sin bio");
    }
    // Requerimiento 2
    static getInfo(user){
        return[user.id, user.getUsername, user.nombre, user.getBio]
    }
    //Requerimiento 3
    static updateUserUsername(user, newuser){
        user.setUsername = newuser;
    }
    //Requerimiento 4
    static getAllUsernames(user){
        return user.map((user)=> user.username)
    }

}
module.exports = UserService