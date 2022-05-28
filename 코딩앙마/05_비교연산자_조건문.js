// 비교 연산자
console.log(10>5);
console.log(10 == 5);
console.log( 10 != 5)

// 주의할점 
const a = 1;
const b = 2;

console.log(a == b); //True가 나옴 동등 연산자에서는 형비교를 안함!_파이썬이랑 다르네
console.log(a === b); // False 일치 연산자 형타입도 비교
// 일치 연산자를 써야겠다

// 조건문
const age = 19;
if(age >19){
    console.log('환영합니다');
}
if(age <= 19){
    console.log('도망쳐!');
}

if(age > 19){
    console.log('환영합니다');
} else {
    console.log('도망쳐!!');
}

if(age > 19){
    console.log('환영합니다');
} else if(age === 19){
    console.log('머 임마!')
} else {
    console.log('도망쳐!!');
}