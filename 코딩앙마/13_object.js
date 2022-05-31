// object

const superman = {
    name : 'clark',
    age : 33,
}

superman.name
superman['age'] 

superman.gender = 'male';
superman['hair'] = 'black';

delete superman.hair

// 단축 프로퍼티
const name1 = 'clack';
const age2 = 33;

const superman1 = {
    name1, // name :name
    age2, //age :age
    gender:'male'
}

// property 존재 여부 확인
superman.birhDay; // 없는 값임으로 undefined 로 나옴

// 확인 방법
'birthDay' in superman;
// false
'age' in superman;
// true

// property를 돌아다니면서 값 뽑아내기
for (let key in superman){
    console.log(key)
    console.log(superman[key])
}