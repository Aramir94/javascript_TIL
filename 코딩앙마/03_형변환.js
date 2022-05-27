// 형변환

// 자동 형변환
// 주의해야하는 문제
// "6"/"2" = 3 문자 6 나누기 문자 3은 3이 나옴 자동 형변환이 되어 버림
console.log("6"/"2") //자동 형변환 예시 --> 원인을 못찾는 에러가 발생 될 가능성 높음 그래서 명시적 형변환이 필요
 
// 명시적 형변환
//String
console.log(
    String(3),
    String(null)
)

//Number 숫자만 있을때 형변환이 되고, 
//문자열이 포함되어 있을 경우 null 값이 뜬다 
//true는 1 false는 0으로 변환된다
console.log(
    Number('123'),
    Number('a'),
    Number(true),
)

//Boolean 숫자 0, '', null, undefined, Nan 값들만 False로 변경
console.log(
    Boolean(0)
)

//주의 사항
// Number(null) --> 0이 됨
// Number(undefined) --> NaN 이 된다
// Boolean(0) --> False
// Boolean('0') --> True
// Boolean('') --> False
// Boolean(' ') --> True