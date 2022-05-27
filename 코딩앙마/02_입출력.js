//alert 알려줌
//prompt 입력 받음
//confirm 확인 받음

const name = prompt("이름은 입력하세요.");
const name = prompt("이름은 입력하세요", "정현") //입력 받을 default 값을 미리 넣을수 있다 
//alert("환영합니다, " + name + "님");
alert(`안녕하세요, ${name} 님`)
// 입력창에서 그냥 취소값을 넣으면 null 값이 들어감

const isAdult = confirm("당신은 성인 입니까?");
console.log(isAdult) // prompt 와 다르게 yes or no로 선택할수 있고 --> return 값은 TRUE , Fasle 나옴

//단점 
//alert 창으로 하면 스크립트 일시 정지
//스타일링 x