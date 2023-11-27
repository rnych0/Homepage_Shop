var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    id: String, // 아이디는 이메일주소
	password: String
});

module.exports = mongoose.module('users', userSchema);