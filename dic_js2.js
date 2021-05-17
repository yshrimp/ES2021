// 객체 리터럴
const hwang = {
    name : hwang,  // 배열과 다른 점은 값에 이름(속성)이 있어 정보를 보기 편함
    gender : M, // 속성 이름이 그냥 문자열 일경우는 '',""가 필요 없다.
    month : 2, // '2ca', '2-a', 'a c' 이런 속성명에는 따옴표가 필요하다.
    day : 15,
}

// 속성 값 접근하는 법 2가지
const obj = {
    bc : 'hello',
    '2ca' : 'hello1',
    'c a' : 'hello2',
    '2-c' : 'hello3',
}

obj.bc // hello
obj['bc'] // hello
obj.2ca // 안됨 error
obj['2ca'] // hello1

// method 이해하기
// 객체 안에 들어있는 함수를 특별히 method로 부르는 거다.
const debug =  {
    log : function(value) {
        console.log(value);
    },
}
debug.log('Hello, Method') 

// 객체간의 비교
{} === {} // false 
// array도 이렇게 비교하면 false다.

// 순서도
/* 문법을 배워도 코드 한 줄 칠 수 없던 이유? 
머릿속으로 프로그램의 절차를 순서도로 그려보자
숙달되면 머리속으로 그릴 수 있음
그리고 이 절차들은 완벽해야만 한다.(사람이 하는 것이라 완전히 오류가 없을 수는 없지만 그것에 한없이 가까워야 함)
어떠한 상황에서든 고정된 개수의 절차로 돌아가야한다.
모든 가능성을 고려해야 한다.
예시는 절차를 검증하는데 사용한다.
*/