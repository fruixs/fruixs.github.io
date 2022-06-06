'use strict';

(function(usragree1, usragree2){
    if(usragree2 === undefined) {
        console.log("필수 약관 동의 체크 상자를 찾을 수 없습니다.")
        return;
    } else if(usragree1 === undefined) {
        console.log("모든 약관 동의 체크 상자를 찾을 수 없습니다.")
        return;
    } else {
        console.log(usragree1);
        usragree1.addEventListener("click",function(){
            let agreelist = document.querySelectorAll("#agree11, #agree21");
            agreelist.forEach(element => {
                console.log(element)
                element.checked = true;
            })
        })
        console.log(usragree2)
        usragree2.addEventListener("click",function(){
            let agreelist = document.querySelectorAll("#agree11, #agree22");
            agreelist.forEach(element => {
                if(element.id === "agree11"){
                    console.log(element)
                    element.checked = true;
                } else {
                    console.log(element)
                    element.checked = true;
                }
            })
        })
    }
})(
    (function(){
        try {
            if(document.querySelector("#agree31") === undefined) {
                // 'use strict' 이면 undefiined, 아니면 null
                console.log("객체를 찾을 수 없습니다.")
                return undefined;
            } else {
                console.log("객체를 찾았습니다.")
                return document.querySelector("#agree31");
            }
        } catch (error) {
            console.log(error.message)
            return undefined;
        }
    })(),
    (function(){
        try {
            if(document.querySelector("#agree32") === undefined) {
                // 'use strict' 이면 undefiined, 아니면 null
                console.log("객체를 찾을 수 없습니다.")
                return undefined;
            } else {
                console.log("객체를 찾았습니다.")
                return document.querySelector("#agree32");
            }
        } catch (error) {
            console.log(error.message)
            return undefined;
        }
    })()
)