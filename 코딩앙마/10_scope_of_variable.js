let msg = 'welcome'; //전역 변수

function sayHello(name){
    let msg = 'Hello' // 지역 변수 
    console.log(msg + ' ' + name);
}

sayHello('MIKE');
console.log(msg) // 전역 변수와 지역 변수는 서로 간섭은 안함

//default parameter 

function sayHello(name = 'friend'){
    let msg = `Hell, ${name}`
    console.log(msg)
}
sayHello()

// return
function sayHello(name = 'friend'){
    let msg = `Hell, ${name}`
    console.log(msg)
    return msg
}
const msg1 = sayHello()
console.log(msg1)
//return 만 존재 하거나 return 이 없을때는 undefined를 반환 