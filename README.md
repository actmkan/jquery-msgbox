심플 메세지박스 jquery 플러그인
===============================
>2018-04-20 안만기

>IE9 지원하는 메세지박스 라이브러리가 없어서 직접만듬.

옵션

(String)title = 박스헤더에 나올 제목 ex)"알림" or "오류!" 등

(String)content = 출력될 본문 메세지 ex)"잘못된 정보입니다."

(String)type = 메세지박스의 색을 결정함. 미입력시 기본값 basic. "basic", "info", "error"중 선택.

(Funtion)call = 확인버튼을 누를시 실행할 로직.

(bool)okBtn = true시 확인버튼 출력, false시 미출력. 기본값은 true

(bool)cancelBtn = true시 취소버튼 출력, false시 미출력. 기본값은 false


간단한 사용예
-------------
$.msg("알림출력입니다!");

옵션사용 예
-----------

$.msg({

   title : '오류!',
   
   content : '정상적인 접근이 아닙니다!',
   
   type : 'error',
   
   call : function () { console.log('확인버튼을 누름!') },
   
   okBtn : true,
   
   cancelBtn : false
   
});