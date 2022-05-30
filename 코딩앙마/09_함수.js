// 중복 코드 관리 툴
function showError(){
    console.log('다시 시도해주세요')
}
showError();

name = 'jh' // 전역 변수 (global varable)
function sayHello(name){
    const msg = `Hello ${name}`;
    console.log(msg);
}

sayHello(name);

function sayHello(name){
    let msg = `Hello`; // 지역 변수 (local varable)
    if(name){
        msg = `Hello, ${name}`;
    }
    console.log(msg);
}
sayHello() // 매개 변수가 없으면 undifiend 가 name에 들어가게 됨 --> False
sayHello('JHS') 