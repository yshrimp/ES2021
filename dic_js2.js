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

/* prompt alert confrim
prompt 사용자에게 정보를 입력받는 함수
alert 사용자에게 경고창을 띄우는
confirm 사용자에게 확인(예/아니요)을 받는
*/

// HTML 태그 선택하기(querySelector)
document.querySelector('선택자')
// id선택자 = #id class선택자 = .class
document.querySelectorAll() // 태그를 여러 개 선택하고 싶을 때
/* Ex)
<button>입력<button>
<button>버튼 2<button>
<button>버튼 3<button>

document.querySelector('button'); // 버튼 3개가 다 선택됨
콘솔 창에 NodeList(3) [button.first, button, button] 이렇게 배열 유사품인 객체들이 뜬다.
function에서 argument를 뭘 넣었는지 볼때 arguments를 사용하면 배열 형식으로 떴는데 그것 역시 마친가지로 객체다.
array like object 유사배열인 객체들은 리터럴 객체나 다른 객체처럼 이용할 때 제한 사항이 생긴다.
*/

// 자식태그와 자손태그
/* <div><span></span><div> span은 div의 자식 태그
    <div><span><p></p></span></div> p는 div의 자손태그
    querySelector('div p') p태그를 찾음 공백
    querySelector('div>span') 자식인 span >
*/

// 이벤트 리스너
document.querySelector('button').addEventListener('clcik', function(){});
addEventListener('event', function) // function 자리에 ()을 넣는 실수를 하면 안됨
// 입력창에 입력을 한다던지 클릭을 한다던지 등을 이벤트가 발생했다고 하는데 이때 정해놓은 함수를 실행시킬 수 있게 함
// 이 function을 콜백함수, 리스너함수라 부른다.
document.querySelector('input').addEventListener('input', (event) => {
    console.log('글자 입력', event.target.value);
}) // 사용자가 input에 입력한 글자를 콘솔로그를 통해서 볼 수 있음

// 고차함수 (high order function) : 함수가 함수를 리턴하는 함수
() => {} // return 코드를 작성 안하면 기본 값인 undefined
() => {return console.log('hi')} // 화살표 함수는 {}뒤에 return이 바로 나오면 {}, return 생략 가능
() => console.log('hi')

const hof = (a) => (b) => c => {
    return a + (b * c);
};

const first = hof(3);
const second = first(5);
const third = second(4);

console.log(third); // 23

const func = (msg) => {
    return () => {
        console.log(msg);
    };
};

const func1 = func('hello'); // func1(); > hello
const func2 = func('javascript'); // func2(); > javascript

() => () => {}
// 풀어 써보면
() => { return () => {} }



