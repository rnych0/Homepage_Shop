function changePage(pageUrl) {
    document.getElementById('main-object').data = pageUrl;
    }

function checkPassword() {
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;

    if (password1 === password2) {
      document.getElementById('signin').submit();
    } else {
      alert('비밀번호가 일치하지 않습니다. 다시 입력해주세요.');
      document.getElementById('password1').value = '';
      document.getElementById('password2').value = '';
    }
  }

  // function openSignUpPopup() {
  //   // 서버의 /signup 엔드포인트에 GET 요청 보내기
  //   const response = await fetch('/signup');
  //   const html = await response.text();
     
  //   // 팝업 창 열기
  //   const popupWindow = window.open('', '_blank', 'width=600,height=400');
        
  //   // 받아온 HTML을 팝업 창에 삽입
  //   popupWindow.document.write(html);
  // }