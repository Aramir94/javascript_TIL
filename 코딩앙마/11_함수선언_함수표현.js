// 함수 선언문
function sayHello(){
    console.log('Hello');
}
sayHello()

// 함수 표현문
let sayHello1 = function(){
    console.log('Hello');
}
sayHello1()

// 함수 선언문은 어디서든 호출 가능
// js, python 인터프린터 언어 -> 순차적으로 선언을 하는데
// 초기 단계에서 선언된 함수를 먼저 보고 코드를 실행하기 때문에
// 아래와 같이 먼저 호출을 하고 선언하는것이 가능 : 호이스팅이라고 한다
sayHello2()
function sayHello2(){
    console.log('Hello');
}
// 함수 표현문은 코드까지 도착을 해야 실행이 됨