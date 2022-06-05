'use strict'
function usrevt(event) {
    if( this === undefined) {
        console.log('use strict mode')
        let usrprompt = (event.path[0].className === 'usrbtn')? window.prompt("글자를 입력하세요."):null;
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
        return;
    }
}