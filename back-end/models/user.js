const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");


const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }, // hash this!
    isAdmin: { type: Boolean, default: false },
    phone: String
});

//plugin will automatically give user and password to shcema and 
//do hashing and slating by itself
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",userSchema);