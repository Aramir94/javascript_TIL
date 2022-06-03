// 유일한 식별자 symbol
const a = Symbol();
const b = Symbol();

console.log(a) // Symbol()
console.log(b) // Symbol()

console.log(a === b) // false
console.log(a == b) // false

// symbol 에 설명도 추가 가능
const id1 = Symbol('id'); //symbol에 const id 에 대한 설명을 추가한것  
const id2 = Symbol('id'); //
// id == id2

// property key : 심볼형
const id = Symbol('id');

// symbol을 객체에 사용해보자 
const user = {
    name : 'Mike',
    age : 30,
    [id] : 'myid'
}

console.log(user) // {name: "Mike", age:30, Symbol(id): 'myid'}
console.log(Object.keys(user)) // key가 심볼형인것은 건너뛰고 출력함 ["name", "age";]
                                // .values 도 동일 
                                // .entries 도 동일
console.log(Object.entries(user))

// Symbol.for() : 전역 심불
// Symbol 함수는 매번 다른 Symbol 값 생성하지만 
// Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol 공유

const id3 = Symbol.for('id');
const id4 = Symbol.for('id');
console.log(id3 == id4) // True

// 전역 심볼 이름 보는법
console.log(Symbol.keyFor(id3))

// 일반 심볼 이름 보는법
console.log(id.description)

// 숨겨진 symbol 보는법
console.log(Object.getOwnPropertySymbols(user)); // [symbol(id)] 심볼만 보여주는법
console.log(Reflect.ownKeys(user)) // symbol 포함 모든 키를 보여주는 법 

// 숨겨진 symbol 까지 거의 보지 않는다 객체를 몰래 추가하고싶을떄 symbol 써서 하자 
// KEY에 안잡히니깐 FOR문을 써도 안 잡힘