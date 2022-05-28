// 연산자 줄여서 쓰기
let num = 10;
//num = num +5;
num += 5;

// 증가 연사잔, 감소 연산자
num = 11;
let result = num++; //++, -- 가 뒤에 있으면 num는 증가하지만 
                    //result에는 원래 num값이 들어간다
                    //result = num and num ++ 연산
console.log(result);

let result1 = ++num; // ++, -- 가 앞에 있으면 num이 증가하고 result1에 들어감
                    // num ++ 연산 후 result1 = num
console.log(result1); 