/* 자료형
1. 문자열(string)
string은 ',""로 감싸줘야 브라우저가 인식한다. `(백틱)도 가능한데 기존과의 차이점은
줄바꿈이 가능하다는 것 `을 안써도 \n으로 가능하다.

브라우저 콘솔에서 코드 줄바꿈하고 싶을때
단순 enter는 코드를 바로 실행하는데 shift + enter는 줄바꿈 함

NaN = Not a number 라는 뜻
typeof NaN // number  공식적으로는 숫자형 자료다

자료형을 다른 자료형으로 바꿔 주는 것을 형변환이라 한다. 그리고 형변환은 브라우저 내에서 자동으로 이뤄지는 것들이 있다.
parseInt(), Number() 숫자가 아닌 것을 숫자로 바꿔줌 
ex) parseInt('3월')
// 3
Number('3월')
// NaN

문자열 + 숫자 = 문자열 더하기빼고는 전부 숫자형으로 바뀜 감을 믿지 말고 typeof를 이용하여 알아보자
문자열 - 숫자 = 숫자

==, ===의 차이 : 값 뿐만 아니라 자료형까지 비교를 하느냐
NaN과 무엇을 비교해도 false다.

js에서 false로 형변환 되는 것들 
0, ''(빈 문자열), NaN, null, undefined, false

typeof !!0 // false 

> 1 + 4 명령
< 5 값 반환
컴퓨터는 대부분 명령을 실행하면 값을 반환한다.

> console.log('hi'); 명령
< hi 실행
< undefined 반환(return할게 없을 때 undefined를 반환한다.)

빈 값에는 undefined와 null이 있다.

console.log는 return 값이 없다. 그래서 undefined가 뜨는 거다.


switch 조건문 // 조건식과 비교조건식을 따져서 같으면 동작시키는 조건문
switch (조건식) {
    case 비교조건식
    동작식;
}

let value = 'A';
switch (value) {
    case 'A':
        console.log('A');
}

switch문의 특징 : 조건 맞는거 찾으면 아래 것 까지 다 실행함
let value = 'B';
switch (value) {
    case 'A':
        console.log('no');
    case 'B':
        console.log('yes');
    case 'C':
        console.log('no');
        break;
}

// B
   C 제거하고 싶다면 break를 써줄것

switch문에는 default라는 것도 있음 if문에서 else와 같은 역할
let value = 'F';
switch (value) {
    case 'A':
        console.log('no');
        break;
    case 'B':
        console.log('yes');
        break;
    case 'C':
        console.log('no');
        break;
    default:
        console.log('일치하는 것이 없음');
} 참고로 default는 else와 다르게 맨위나 어디에 가도 상관이 없다. 즉 위치 신경 안써도 되는 장점


조건부 연산자 // 코드를 간소화할 수 있어 매우 좋지만 이러한 종류의 식들은 가독성이 떨어지는 경우도 있으니 상황에 따라 쓰는 것
조건식 ? 참 일때 실행 : 거짓일 때 실행 ;

조건부 연산자 중첩

let value = conditional1 ? (conditional2 ? '둘 다 참' : 'conditional1만 참') : 'conditional1이 거짓';
잘 보기 어려우니 소괄호로 묶어주는 것도 한 방법
let value = conditional1 
    ? conditional2 ?
    ? '둘 다 참'
    : 'conditional1만 참'
: conditional1이 거짓;  
들여쓰기를 통해 가독성 높이는 것도 한 방법


let value = condition1 ? 'condition1 참' : conditon2 ? 'conditon2 참' : 'condition2 거짓';


반복문
while (시작문)
동작식

= 의미는 대입 i = i + 1 >> i += 1
=는 이 언어에서 거의 유일하게 오른쪽에서 왼쪽으로 실행하는 연산자나 로직이라고나 할까
즉 i에 1을 더하고 왼쪽 i에 넣어라(대입) 그것을 간단하게 줄이면 i += 1 (유사품 i++) 
i -= 1 // -1을 한 i
i *= 3 // 3곱한뒤의 i
i /= 2 // 2나눈뒤 i 
이런 것들은 반복문, 조건문에서 많이 나오니 알아두자

for (시작(1); 조건식(2); 종료식(3);)
동작문(4);

동작 순서는 1 > 2 > 4 > 3 > 2 > 4 > 3 > 2 > 4 > 3 > .....

zerocho tip 반복문의 조건식쪽에서 귀찮아도 절대 눈으로 보지 말고 실제로 행해라 나중에 후회한다.
for (i = 0; i < 100; i++) {
    console.log(i);
} 
i = 0, i = 1, i = 2, .... i = 99  100개원하니까


반복문 멈춰!
break와 continue
break는 반복을 그만두고 싶을 때 아예 반복을 멈추게 하는 역할
continue는 어느 한 구간의 반복을 멈추게하고 나머지는 반복하게 하고 싶을 때 쓰는 법

let i = 0;
while (true) { // 무한반복
    if (i == 5) break; i == 5 일때 멈춤
    i++; // 종료 후 1씩 더하는
}
console.log(i);
0일 때 false니까 실행안되고 1일때도 안되고 ... i가 5일때 break 밑에 i++ 당연히 안되고
그 i를 찍으라니까 답은 5
console.log 위치가 while 안의 i++ 위냐 아래냐에 따라 또 다른 결과가 나온다
위일 때 0, 1, 2, 3, 4
아래 일때 1. 2. 3. 4. 5

let i = 0;
while (i < 10) {
    i++;
    if (i % 2 === 0) {
        continue
    }
    console.log(i);
}
순서가 중요함
i = 0이면 i++에서 1이되고 짝수가 아니면 걸러지고 콘솔에서 출력 따라서 홀수만 출력되는 결과
그리고 반복문 아직 긴가민가 하니 zeracho의 반복문 순서(for문 말하는 거임)기억하고 손으로 써보는 작업 안되면 주석으로라도 


반복문 안의 반복문 (중첩 반복문) 매우 헷갈리니 써보고 숙달
for (i = 0; i < 10; i++) {
    for(j = 0; j < 10; j++) {
        console.log(i, j);
    }
}

for문의 순서를 보자면 1번 2번 4번(i++) 3번(첫 for문 안에 있는거) 순 & for j에서도 그 순서는 마찬가지
i = 0 j = 0 console.log(0, 0)
i = 0 j = 1 console.log(0, 1)
i = 0 j = 2 (0, 2)
i = 0 j = 9 (0, 9)
i = 1 j = 0 (1, 0) 여기서가 포인트 (0, 9)에서 for j는 끝나고 i = 1이되고 for j 반복
i = 1 j = 1 (1, 1)
i = 1 j = 2 (1, 2)
i = 9 j = 9 (9, 9)

for (let i = 0; i < 5; i++) {
    if (i % 2 === 0) continue; // 짝수일 때 continue라 아래것들 실행 안되는 것 명심
    for (let j = 0; j < 5; j++) {
        if (j % 2 === 0) continue;
        for (let k = 0; k < 5; k++) {
            if (k % 2 === 0) continue;
            console.log(i, j, k);
        }
    }
}

// 
i = 1 j = 1 k = 0
i = 1 j = 1 k = 2
i = 1 j = 1 k = 4
i = 1 j = 3 k = 0
i = 1 j = 3 k = 2
i = 1 j = 3 k = 4
i = 3 j = 1 k = 0
(3, 3, 4)


숙제임
역 별찍기
처음 생각해서 쓴 코드
for (let i = 5; i < 6; i--) {
    console.log('*'.repeat(i));
}
// 결과는 나왔다만 error 발생 / 이유는 i가 무한히 줄어드는데 repeat 함수에 0이나 -1등 유효하지 않은 값임 고로 안좋았다

for (let i = 5; i > 0; i--) {
    console.log('*'.repeat(i));
}

let i = 0 일때 같은 결과를 얻고 싶다면 어떻게 작성할까
my solution 1
for (let i = 0; i < 5; i--) {
    console.log('*'.repeat(i + 5));
} // 1번 같은 경우는 아까와 같은 에러 발생해서 탈락

solution2
for (let i = 0; i > -5; i--) {
    console.log('*'.repeat(i + 5));
} // 원하는 결과를 얻음

zerocho's solution
for (let i = 0; i < 5; i++) {
    console.log('*'.repeat(5 - i));
}
*/

// 객체는 자료형의 일종으로 다양한 값을 모아둔 또다른 값 
// 객체의 종류는 크게 배열, 함수, 앞의 둘이 아닌 객체

const fruits = ['사과', '오렌지', '배', '딸기'];
// 배열안의 요소(element)에 접근하기
fruits[0] = '사과'
fruits[1] = '오렌지'
//배열안에는 뭐든 넣을 수 있다.
//배열의 길이 구하기 
fruits.length // 4
// 배열의 마지막 요소 구하기
fruits[fruits.length - 1]

// 배열에 새 요소 추가하기 (길이를 알 때)
fruits[5] = '파인애플'

// 배열에 새 요소 추가하기 2
fruits[fruits.length] = '망고'

// 배열의 맨 앞에다 추가하는 법 unshift
fruits.unshift = '복숭아'

// 맨 뒤에다 추가하기
fruits.push = '귤'

// 여기서 const가 상수인데 어떻게 값을 바꾸는 지 의문이 들 수 있는데
// const 엄밀히 말하면 상수가 아님 특히 객체를 다룰 때
// const는 재할당 즉 = 을 다시 쓸 수 없음 
// 객체의 요소는 바꿀 수 있지만 fruits = ['a'] 이렇게 재할당 할 수는 없다.

// 배열 마지막 요소 제거하기 pop()
// 배열 인덱스0 제거하기 shift

// 배열의 중간 인덱스 수정하기 splice
const target = ['가', '나', '다', '라', '마'];
target.splice(2, 1) // splice의 1번째 인덱스 선택 2 가져올 개수 ['다', '라']
target.splice(2, 0, '타', '파') // '다' 다음에 '타', '파' 추가
target.splice(1) // 인덱스1 빼고 다 지워짐

// 배열안에 그 요소가 있는지 아닌지 확인
const result = target.includes('다') // true
const result2 = target.includes('카') // false
// 이렇게 true / false로 나오는 것들은 조건문에서 보통 사용함

// 배열에서 요소의 값으로 인덱스 값 찾아내는 법
const target = ['라', '나', '다', '라', '다'];
const result = target.indexOf('다'); // 앞에서부터 '다'를 찾아 인덱스 값을 알려줌 result 값은 2
const result2 = target.lastIndexOf('라'); // 뒤에서부터 따라서 3
const result3 = target.indexOf('가'); // 없으면 -1이 나옴

// 배열을 이용하여 반복 for, while
const target = ['가', '나', '다', '라', '마'];
let i = 0
while (i < target.length) {
    console.log(target[i]);
    i++
}

for (let i = 0; i < target.length; i++) {
    console.log(target[i]);
}

// 라만 제거하는 반복문 만들기
const arr = ['가', '라', '다', '라', '마', '라'];
/*
arr.indexOf('라'); // 1
arr.splice(1, 1);
arr // ['가', '다', '라', '마', '라']
arr.indexOf('라'); // 2
arr.splice(2, 1);
arr.indexOf('라'); // 3
arr.splice(3, 1);
arr.indexOf('라') // -1
*/

while (arr.indexOf('라') > -1) {
    arr.splice(arr.indexOf('라'), 1);
}

let index = arr.indexOf('라');
while (index > -1) {
    arr.splice(index, 1);
    index = arr.indexOf('라'); // 이것을 넣을 때 안넣을 때 결과가 다르다. 이유는?
}
// index > -1 true > arr.splice(index, 1) '라' 제거 > 

// 함수 만드는 법
function() {} // 둘 다 쓰임
() => {} // 이게 요즘 방법

//함수에 이름 붙이기
function a() {} // 함수 선언문
const b = function() {} // 함수 표현식
const c = () => {} // 이건 무조건 변수로 이름 지어줘야한다.

// 함수의 return은 반환값 역할을 하면서 함수의 종료를 의미하기도 한다.
function b() {
    return 'hello';
    console.log('hi'); // hello를 리턴하면서 함수는 종료되기에 console.log는 실행되지 않는다.
}

function c() {
    if (false) {  // 조건부 리턴도 가능 true면 return false면 console.log 실행
        return;
    }
    console.log('hello');
}

// return 값을 여러개 받고 싶다? 배열(array)를 써서 배열로 return을 받아야한다.

// Parameter와 argument 함수 선언시는 Parameter, 함수 호출시는 Argument
function a(parameter) {
    console.log(parameter);
}
a('argument'); //argument

function a(w, x, y, z) {
    console.log(w, x, y, z);
    console.log(arguments);
}
a('hello', 'Parameter', 'Argument'); // hello Parameter Argument undefined / ['hello', 'Parameter', 'Argument']
// z가 없으니 undefined를 배출, function함수에서만 가능한 arguments라는 것이 있는데 이걸 쓰면 넣은 인자를 배열 형태로 나타내준다.

() => {} // 화살표함수에서 화살표 다음에 바로 return이 오면 {}, return 생략 가능
const c = (x, y) => x + y;