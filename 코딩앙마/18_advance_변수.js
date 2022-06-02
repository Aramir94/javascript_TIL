// var let const

// var는 선언하기 전에 사용할수 있다
var name; // name의 선언은 호이스팅이 됨, 할당은 호이스팅이 안됨
console.log(name); // undefined 
name = 'Mike'

// var는 함수 scope | let const block 스코프

const age = 30;
if (age > 19){
    var txt = '성인'
} // var는 중괄호 밖으로 나올수 있으나 let 과 const는 중괄호 밖으로 나오지 못함 => 블록 스코프
console.log(txt)

function add(num1, num2){
    var result = num1 + num2
}

add(2,3)
console.log(result); // result는 에러가 날꺼다 왜냐면 var는 함수 스코프이니깐

// 오늘의 팁
// var는 안쓰는게 상책이다!