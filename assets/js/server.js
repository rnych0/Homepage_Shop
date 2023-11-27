// 회원가입
router.route('/join').post((req, res) => {
    console.log("POST - /join");
    const userId = req.body.id;
    const userPw = req.body.passwd;

    if(localDB){
        let user = localDB.collection("users").findOne({id: userId}, function(err, user){
            if(err) throw err;
            if(user){
                res.writeHead(200, {"Content-Type": "text/html; charset=utf8"});
                res.write("이미 사용 중인 아이디입니다 :( ");
                res.write('</br> <a href="/login.html">로그인</a>');
                res.write(' <a href="/join_form.html">회원가입</a>');
                res.end();
            } else{
                let userData = { id: userId, passwd: userPw, role:'user' };
                localDB.collection("users").insertOne(userData, function(err, result){
                    if(err) throw err;
                    console.log("회원가입 성공 :D");
                    res.redirect("/signin.html");
                });
            }
        });
    } 
});