//method : 객체 property로 할당 된 함수

const superman = {
    name : 'clark',
    age : 33,
    fly : function()
    {console.log('날아갑니다')} 
    // 단축 구문으로 
    //fly(){console.log('날아갑니다')}
}

superman.fly() 

const user = {
    name : 'Mike',
    sayHello(){console.log(`Hello, I'm ${this.name}`)}
    // why user.name이 아니라 this.name을 하는 이유?
    // 변수 명이 틀려도 다 받아 주고 싶어서 
}
user.sayHello()

let boy = {
    name : 'Mike',
    sayHello,
}

let girl = {
    name : 'Jane',
    sayHello
}

function sayHello(){
    console.log(`Hello, I'm ${this.name}`)
}

boy.sayHello()
girl.sayHello() // this가 실행할때 결정 됨으로 

// 주의 화살표 함수는 일반 함수와 달리 자신만의 this 안 가짐
// 화살표 함수 내부에서 this 사용시, this는 외부에서 값을 가져옴

let boy1 = {
    name : 'Mike',
    sayHello: () => {
        console.log(this)
    }
}
boy1.sayHello()