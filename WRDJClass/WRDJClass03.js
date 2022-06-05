// 'use strict'
(function(usrbtn){
    if(usrbtn === undefined) {
        window.alert("버튼 아이디를 제대로 입력하세요.");
        return;
    }
    else { 
    usrbtn.addEventListener("click",function(event) {
        console.log(event.target.id);
        let usrprompt = (event.target.id === "usrbtn")? prompt("4글 이상 입력하세요."):null;
        if (usrprompt === null) {
            window.alert("입력 좀 하시지요.")
        } else if(usrprompt.length >= 4) {
            window.alert("4글지 이상 입력하였습니다.")
        } else {
            window.alert("4글자 이하 입력하였습니다.")
        }
    })}
      
})(
    (function(){
        try {
            // try statement 는 parse 단계 컴파일 애러는 처리하지 못 한다.
            // 괄호가 짝이 맞지 않아 생긴 애러는 예외없이 출력한다는 얘기임
            if(document.querySelector("#usrbtn") === null) {
                return undefined;
            } else {
                return document.querySelector("#usrbtn");
            }
        }
        catch(error) {
            window.alert("버튼 아이디: " + error.message);
            window.alert("버튼의 아이디를 바르게 입력하세요.")
        }
    })()
)

/* 
function usrevt(event) {
    if( this === undefined) {
        console.log('use strict mode')
        
        let usrprompt = (event.target.className === 'usrbtn')? window.prompt("글자를 입력하세요."):null;
        if(usrprompt === null) {
            window.alert("사용자가 입력을 취소하였습니다.")
        } 
        else if(usrprompt.length >= 4) {
            window.alert("4 글자 이상 입력하였습니다.");
        }
        else {
            window.alert("4 글자 이하 입력하였습니다.");
        }

    } else {
        
    }
} */