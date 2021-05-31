/* false로 나오는 값 6가지
숫자 0
빈 문자열 ''
false
NaN (Not a Number)
undefined
null

undefined 와 null 차이점 :
둘 다 값이 없다는 것이긴 하지만 null은 사용자가 의도적으로 값이 없다는 것을 표시하기 위한 것

자료형
문자열, 숫자형, 배열, boolean, 객체, 등

boolean
모든 것을 참 거짓으로 판단할 때
true, false
비교 연산자 ==, ===, <=, <, >, >=
논리 연산자 &&(and), ||(or)
&& 명제가 모두 참이어야 true
||(or) 명제가 하나라도 true면 true

data type이 헷갈리다 싶으면 typeof를 애용하자
+
어떤 값의 true false를 알고 싶다. 
!!data 를 사용하면 알 수 있다. ! 아니라는 연산자 두번 아니면 원래대로 
예를들어 문자열이 있는데 이것의 true/false다 궁금하다 !!apple // true 가 나온다. 
이것도 형변환 중 하나 

console 창에 
> 1 + 5
< 6
이렇게 6이 반환된다. 근데 console.log(1 + 5)를 하면?
6
<undefined 
< 이 기호가 반환된 값을 표현하는 것이기 때문에 반환된 값을 보면 undefined다.
console.log는 값을 콘솔 창에 그려주는 역할일 뿐 반환 값이 아니다.
브라우저는 반환값이 없을 때 기본적으로 undefined를 띄워준다.

[] {} function, method 형태는 다르지만 다 객체에 속한다.
*/

if (checkInput(value)) {
  // 입력값 문제 없음
  if (answer.join('') === value) {
    $logs.textContent = '홈런 !';
    return;
  }
  if (tries.length >=  9) {
    const message = document.createTextNode(`패배 ! 정답은 ${answer.join('')}`);
    $logs.appendChild(message);
    return;
  }
  // 몇 스트라이크 몇 볼인지 검사
} else {
  // 에러 있음
}
tries.push(value);
});

// 이거 코드 줄이기