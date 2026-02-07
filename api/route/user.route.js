const express = require("express");
const { createUser, login, updateUser } = require("../controllers/user.controller");


const userrout = express.Router();

userrout.post("/createUser", createUser)
userrout.post("/login", login)
userrout.post("/updateUser", updateUser)



module.exports = userrout;
