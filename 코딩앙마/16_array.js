// Array -> 순서가 잇는 리스트

let students = ['철수', '영희', '영수']
console.log(students[0])
students[0] = '정현'
console.log(students[0])

// 배열 숫자 객체 함수 등 도 표함 가능

let arr =[
    '민수',
    3,
    false, 
    {
        name : 'Mike',
        age : 30
    },
    function(){
        console.log("TEST")
    }
]
// console.log(arr[4]())
arr[4]()

// push() : 배열 끝에 요소 추가
let days = ['월', '화', '수', '목']
days.push('금')
console.log(days)

// pop() : 배열 끝 요소 제거
let day = ['월', '화', '수']
console.log(day.pop())
console.log(day)

// shiftm unshift 배열 앞에 제거/추가
day.unshift('일')
console.log(day)

day.shift();
console.log(day)