// [next 함수 정의해서 구현](https://nukw0n-dev.tistory.com/21#next%--%ED%--%A-%EC%--%--%--%EC%A-%--%EC%-D%--%ED%--%B-%EC%--%-C%--%EA%B-%AC%ED%--%--)
function getIterator() {
    const foo = {
        bar: [1, 2, 3, 4, 5],
        toz: 'hello',
        kor: [5, 6, 7, 8, 9],
        mzp: () => 'func!',
    };

    let valueIdx = 0;
    const fooValues = Object.values(foo);
    const iter = {
        next() {
            while (!Array.isArray(fooValues[valueIdx])) {
                // 이 조건을 만족하는 경우는 다음과 같다.
                // 배열 객체 1개 일때와 모든 객체를 처음부터 끝까지 모두 살핀 경우이다.
                /* 예를 들어 myarray = [1] 로 원소가 1개 있고 ++valueIdx 에 의해
                fooValues[valueIdx] 가 undefined 된다. */
                if (++valueIdx >= fooValues.length) {
                    return {
                        value: undefined,
                        done: true,
                    }
                }
            }

            return {
                value: fooValues[valueIdx++],
                done: false,
            };

        },
    };

    return iter;
}

const myiter = getIterator();
myiter.next();// { value: [1,2,3,4,5], done: false }
myiter.next();// { value: [5,6,7,8,9], done: false }
myiter.next();// { value: undefined, done: true }