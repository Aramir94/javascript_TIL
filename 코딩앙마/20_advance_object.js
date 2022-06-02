// computed property

let a = 'age'

const user = {
    name : 'Mike',
    [a] : 30 // age :30 이런 방식을 computed property라고 한다
}

const user1 = {
    [1 + 4] : 5,
    ['안녕' + '하세요'] :'Hi'
}

// 객체에서 사용하는 메서드들 
// object.assign() : 객체 복제
const newUser = Object.assign({}, user); // .copy 같은 느낌
                                        // {} : 초기값을 복제

const newnewUser = Object.assign({gender: 'male'}, user);
console.log(newnewUser)

// 초기값이 같은게 있다면? 
const newnewnewUser = Object.assign({name: 'male'}, user); // 덮어져서 쓰이게 됨 'male' -> 'Mike'로
console.log(newnewnewUser)

// 여러가지를 한번에 합치는 작업
const user2 = {
    name : "Mike"
}
const info1 = {
    age :30
}
const neW = Object.assign(user2, info1)
console.log(neW)

// object.keys() : 키 배열 반환
console.log(Object.keys(neW)) // ['name', 'age']

// object.values() : 값 배열 반환
console.log(Object.values(neW)) // ['Mike', '30']

// object.entries() : 키/값 배열 반환
console.log(Object.entries(neW)) // [ [ 'name', 'Mike' ], [ 'age', 30 ] ]
 
// object.fromEntries() : 키/값 배열을 객체로 변환
const arr = 
[
    ["name",'Mike'],
    ["age","30"]
]
console.log(Object.fromEntries(arr))  //{ name: 'Mike', age: '30' }

// 예제 
function makeObj(key, val){
    return{
        [key] : val
    }
}

const obj = makeObj("이름", 33) // 어떤게 키가 될지 모르는 function에서 유용
console.log(obj)