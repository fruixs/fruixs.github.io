'use strict';

// iterator 가 이해되지 않아서 예문을 검색함
// written by tmon web frontend developer

const iterableObj = {
    [Symbol.iterator]() {
        let step = 0;
        return {
            next() {
                step++;
                if (step === 1) {
                    return { value: 'This', done: false };
                } else if (step === 2) {
                    return { value: 'is', done: false };
                } else if (step === 3) {
                    return { value: 'iterable.', done: false };
                }
                return { value: '', done: true };
            }
        }
    }
}
for (const val of iterableObj) {
    console.log(val);
}

// 출력
// This
// is
// iterable.
