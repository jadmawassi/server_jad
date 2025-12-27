const { Schema, model } = require("mongoose");
const PRODECUT_SCHMA = new Schema({
    Name: {
        type: String,
        require: true
    },
    Price: {
        type: Number,
    },
    image: {
        type: String,
    },
    catgory: {
        type: String,
    },
    Color: {
        type: String,
    },
    max_Speed: {
        type: String,
    },
    hp: {
        type: String,
    },
    Km_0_100: {
        type: String,
    },
})
const PRODECUT_MODEL = model("product", PRODECUT_SCHMA);
module.exports = PRODECUT_MODEL