// 객체 리터럴
let user = {
    name : 'Mike',
    age : 30,
}

// 생성자 함수 --> 비슷한 객체 예를 들어 유저 객체를 여러개 만들때 씀
// 생성자 함수는 첫글자를 대문자로
function User(name, age){
    this.name = name;
    this.age = age;
}

let user1 = new User('Mike', 30) // new 연산자로 생성자 함수 호출
let user2 = new User('Jane', 30)

//new 를 붙혀서 함수 실행하면 동작하는 원리
// new 를 넣으면 this와 리턴이 생긴다
function User(name, age){
    this = {}
    this.name = name
    this.age = age
    return this
} 