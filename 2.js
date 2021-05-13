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
