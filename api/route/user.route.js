const express = require("express");
const { createUser, login } = require("../controllers/user.controller");


const userrout = express.Router();

userrout.post("/createUser", createUser)
userrout.post("/login", login)



module.exports = userrout;
