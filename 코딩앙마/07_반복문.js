// for 반복문
for (let i = 0; i<10; i++){
    console.log(i);
}

// while 반복문
let i = 0;
while (i<10){
    console.log('hi');
    i++;
}

// do while 반복문 
// 코드는 적어도 한번은 실행한다
i = 0
do{
    console.log(i);
    i++;
}while(i < 10)

// break : 멈추고 빠져나옴
// continue : 멈추고 다음 반복으로 진행 

for (let j = 0; j <10; j++){
    if(j%2){
        continue;
    }
    console.log(j)
}