'use strict';
// 2022. 06. 18 우리동작 HTML&Javascript 강의

function reverseString() {
    let TargetStr = document.getElementById("TargetStr2").value;
    let ReverseString = "";
    for (let i = (TargetStr.length - 1); i >= 0; i--) {
        ReverseString += TargetStr[i];
    }
    window.alert(ReverseString);
}
function NumberCompare() {
    // 입력창에 있는 값 가져오기  
    // 입력받은 값을 배열로 변경.  
    let NumberArray = (document.getElementById("NumberArray").value).split(",");
    // 결과 변수 선언
    let maxNum = Number(NumberArray[0]); // '' 문자열 '0'으로 처리함
    let minNum = Number(NumberArray[0]); // '' 문자열 '0'으로 처리함
    for (let i = 0; i < NumberArray.length; i++) {
        // 최대값
        if (maxNum < NumberArray[i]) {
            maxNum = NumberArray[i];
        }
        // 최소값
        else if (minNum > NumberArray[i]) {
            minNum = NumberArray[i];
        }
        // 출력
        window.alert("최대값은 " + maxNum + ", 최소값은 " + minNum);
    }
}
function getCharNum() {
    let TargetStr = (document.getElementById("TargetString1").value).split("");
    let SeperateString = document.getElementById("SeperateString").value;
    let counter = 0;

    TargetStr.forEach(ParamChar => {
        if (ParamChar === undefined) return;
        if (ParamChar === SeperateString) {
            counter++;
        }
    });
    window.alert(counter);
}
function NumToNumSum() {
    let numberA = Number(document.getElementById("NumberStrA").value);
    let numberB = Number(document.getElementById("NumberStrB").value);
    if (numberA === numberB || Math.abs(numberA - numberB) === 1) {
        window.alert("합이 '0' 입니다.")
        return;
    } else if (numberA > numberB) {
        numberB = numberB + 1;
        numberA = numberA - 1;
    } else {
        numberA = numberA + 1;
        numberB = numberB - 1;
    }

    window.alert((numberA + numberB) * 0.5 * (Math.abs(numberA - numberB) + 1));
}