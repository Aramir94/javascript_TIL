// || OR
// && AND
// ! NOT

const name = "MIKE";
const age = 30;

if(name === "Tom" || age > 19){
    console.log('통과')
}

if(name == "MIKE" && age > 19){
    console.log('통과')
}

// 우선순위
// and가 or 보다 높음

const gender = 'F';
const name1 = 'Jane';
const isAdult = true;

// 남자이면서 이름이 마이크이거나 성인이면 통과
if(gender === 'M' && name1 === 'MIKE' || isAdult){
    console.log('통과')
}else{
    console.log('돌아가')
}

// 남자이고 이름이 mike이거나 성인이면 통과
if(gender === 'M' && (name1 === 'MIKE' || isAdult)){
    console.log('통과')
}else{
    console.log('돌아가')
}