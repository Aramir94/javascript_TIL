names = "Mike";
age = 30;
// alert(names); // 콘솔창에 뛰워준다 node.js 서버 사이드에서는 alert이 없고 웹에는 존재
console.log(names); // consol log에 뛰워준다

// 변수 선언
// let 변할수 있는 값은 let으로 선언 
let grade = "F";
//let grade = "C"; 에러 발생 let으로 한번 호출한 변수는 또 다시 let으로 선언 불가
grade = "C"; //let을 버리면 바로 선언 가능하다
// const 절대로 바뀌지 않는 상수 입력시 수정 자체가 대문자로 선언을 함
const PI = 3.14;

// 변수형 
//string 선언 큰따옴표, 작은따옴표, 배틱 다 사용 가능
const name = "Mike";
const name1 = 'Mike1';
const name2 = `Mike2`;
const message = "I'm a boy.";
const message1 = 'I\'m a boy.'; // 작은 따옴표 안에 인식 시킬려면 \ 사용해야함
const message2 = `My name is ${name1}`; // 배틱은 문자열 내부에 변수를 사용할때 format 함수와 비슷
const message3 = `나는 ${30+1}살 입니다`;
console.log(message2);
console.log(message3);
 
//숫자형
// const Pi = 3.14;
console.log(1 + 2); 
console.log(10 - 3);
console.log(2 * 2); 
console.log(6 / 3); //나누기 
console.log(6 % 4); //나머지
const x= 1/0; // 숫자 나누기 0은 inf 값이 나옴
console.log(x)
const name4 = "Mike"; 
const y = name4/2; //string 나누기 숫자는 Nan값이 나옴
console.log(y)

//Boolean
const a = true;
const b = false;
//const name = "Mike"
//const age = 30;
console.log(name == 'Mike') 
console.log(age > 40)

//null, undefined
let love;
console.log(love) //변수를 선언만 하고 아무것도 값을 안 넣으면 undefined 
let happy = null; //존재 하지 않는다는것
console.log(happy)

//typeof 연산자 type 확인 연산자
console.log(typeof 3); //number
console.log(typeof "ZZZ") //string
console.log(typeof name)
console.log(typeof null) //object --> 객체형
//null 은 객체가 아닌데 잡힘... 이게 머람 오류
console.log(typeof undefined) //undefined

//str + str ==> str
//str + int ==> str
console.log('정현석' + '바보')
console.log('정현석은' + 39 + '살입니다')