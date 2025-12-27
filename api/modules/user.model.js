const { Schema, model } = require("mongoose");


const USER_SCHEMA = new Schema({
    name: {
        type: String,
        required: true,
        max: 36,
        min: 5,
    },
    gmail: {
        type: String,
        required: true,
        max: 35,
        min:7,

    },
    age: {
        type: Number,
        required: true,
        min: 10,


    },
    phoneNumber: {
        type: String,
        required: false,
        match: [/^\d{10}$/, "Phone number must be 10 digits"]


    },
    dataBirth: {
        type: Date,
        required: true,

    },
    password: {
        type: String,
        required: true,
        max: 40,
        min:4,


    },
    lastName: {
        type: String,
        required: false,
        max: 20,
        min: 6,
    },
});

const USER_MODEL = model("user", USER_SCHEMA);
module.exports = USER_MODEL
