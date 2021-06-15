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


// if문 중첩을 최소화 하는 테크닉
// 1. if문 안의 공통된 절차를 각 분기점 내부에 넣는다.
// 2. 분기점에서 짧은 절차부터 실행하게 if문을 작성한다.
// 3. 짧은 절차가 끝나면 return(함수 내부의 경우)이나 break(for 문 내부의 경우)로 중단한다.
// 4. else를 제거한다. (이때 중첩 하나가 제거 된다.)


// addEventListner에서 주의할 점
// addEventListener('click', 함수자리)
// 자리와 호출을 착각하지 말자
/* function () {} 함수 선언식 즉 함수 그자체
const func = function () {} 함수를 변수에 저장한 함수 표현식 이것 역시 함수 그자체
다만 func / func()의 차이는 func() 함수가 실행됐을 때의 리턴값이다.
즉 addEventListener('click', func())에서 func()의 리턴값은 undefined이기 때문에 제대로 돌아가지 않음 */

Math.random() // 랜덤하게 숫자 줌

const answer = [3, 1, 4, 6];
const value = '3214';
let strike = 0;
let ball = 0;

for (let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]);
    if (index > -1) {
        if (index === i) {
            strike += 1;
        } else {
            ball += 1;
        }
    }
}

// 여기 반복문(for문)을 foreach를 통해서 바꿀 수 있다. foreach는 배열에 한해서 쓸 수 있음
// foreach(함수자리) foreach((element, index) => {})

answer.forEach((element, i) => {
    const index = value.indexOf(element);
    if (index > -1) {
        if (index === i) {
            strike += 1;
        } else {
            ball += 1;
        }
    }
});
// forEach는 요소하나에 이 함수를 실행 해줌;

const array = [1, 2, 3, 4];
const result = [];
for (let i = 0; i < 4; i++) {
    result.push(array[i] * 2);
};

array.map((element, i) => {
    return element * 2;
});

// array의 값이 바뀌는건 아님 map을 쓰면 새로운 배열이 생김
//  숫자 야구에서 

Array(9).fill().map((el, idx) => {
    return idx + 1;
}); 
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

setTimeout(함수자리, 밀리초); // 1초는 1000밀리초

let 아이디 = setTimeout(함수, 밀리초)
clearTimeout(아이디);
// setTimeout을 멈추는 함수
// 다만 setTimeout이 실행되기 전에 함수를 써야 멈춤 clearInterval과는 다르게

let 아이디 =  setInterval(함수, 밀리초);
clearInterval(아이디);
// setInterval을 멈추게 하는 함수

removeEventListener 사용시 주의점

const fun = (값) => () => {
    console.log('고차함수 입니다.', 값);
};

태그.addEventListener('click', fun(1));
// 태그.removeEventListener('click', fun(1)); 이건 틀린 답
// 이유는 함수도 객체다. 즉 addEvenetListener에서 함수와 removeEventListener에서의 함수가 서로 같아야만 한다.
// 그냥 하면 fun(1) === fun(1)은 서로 다른 객체이기 때문에

const fun(1) = fun(1);
fun(1) = fun(1);

태그.addEventListener('click', fun(1));
태그.removeEventListener('click', fun(1));


// 꿀팁
diff === '고양이' || diff === '사자' || diff === '강아지' || diff === '소'
['고양이', '사자', '강아지', '소'].includes(diff)
