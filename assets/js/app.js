var express = require('express');
var mongoose = require('mongoose');
var User = require('./models');
var app = express();

mongoose.connect('mongodb://root:sa01@127.0.0.1:27017/WhatShop?authSource=admin');
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.set('strictQuery', true);

// Body parser 설정
app.use(express.urlencoded({ extended: true }));

// HTML 폼 페이지 제공
app.get('/signup', (req, res) => {
	console.log(req.headers);
    res.sendFile('C:/inetpub/wwwroot/signup.html');
});

// 회원가입 폼 데이터 처리
app.post('/signup', async (req, res) => {
    const { userId, password } = req.body;

    // MongoDB에 데이터 저장
    const newUser = new User({ userId, password });

    try {
        await newUser.save();
        res.send('회원 가입 성공');
    } catch (err) {
        console.error(err);
        res.send('회원 가입 실패');
    }
});

// 서버 시작
const port = 4000;
app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
