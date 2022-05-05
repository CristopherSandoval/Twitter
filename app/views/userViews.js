const User =require("../../app/services/userService");
class UserView{
    static createUser(payload){
      if(payload === null)
        return {error: "Error: El payload no existe. Inténtelo nuevamente"}
      //Solo aplica con 3 parametros
      if(typeof payload.id === "number" && typeof payload.username === "string" && typeof payload.name === "string")
        return UserService.create(payload.id, payload.username, payload.name);
      return {error: "Error: Los valores del payload necesitan tener un valor válido. Inténtelo nuevamente"}

    }
  }
module.exports = UserView