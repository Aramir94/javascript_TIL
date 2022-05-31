let days = ['월', '화', '수' ]

// for 방법
for(let index = 0; index < days.length; index ++){
    console.log(days[index])
}

// for .. of 인덱스를 얻지는 못한다.
for (let day of days){
    console.log(day)
}