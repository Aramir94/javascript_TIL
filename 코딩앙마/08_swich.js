// if문과 성능은 같지만 코드 작성이 편함

let fruit = '멜론'

switch(fruit){
    case '사과':
        console.log('100원');
        break;
    case '바나나': // 일치하면 밑에문을 실행하기 때문에 .. 같은 가격이라면 이렇게 중첩해서 사용가능 
                // 깔끔하고 좋넹
    case '멜론':
        console.log('200원');
        break;
    default: // if문의 else 같은 개념
        console.log('돌아가');
}
// case는 break가 없다면 일치하는 케이스 밑에 모든 코드 실행해버림
// '사과'가 들어가면 100원 200원이 뜸
// break를 걸어야 원하는 값만 가져옴