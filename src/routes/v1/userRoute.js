const express = require('express');

const userRoute = express.Router();
const userController = require('../../controllers/userController')

//R
userRoute.get("/getUser", userController.getUser);
userRoute.get("/getUserById/:id", userController.getUserById);

//C 
userRoute.post("/createUser",userController.createUser)

//U
userRoute.put("/updateUser/:id",userController.updateUser);

//D
userRoute.delete("/deleteUser/:id",userController.deleteUser);

module.exports = userRoute;