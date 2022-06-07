// 다른 사람이 만들어둔 객체
const user = {
    name : 'Mike', 
    age : 30,
}
//user.showName = function() {} 이걸 바로 넣으면 유저한테 바로 보이게 됨 
// symbol 함수는 for in 함수에 안들어가지는 특성을 이용해서 임시적으로 수정할때 유용하게 쓰인다
const showName = Symbol('show name')

user[showName] = function(){
    console.log(this.name)
}

// 실행하기 위해서는 
user[showName]()

for (let key in user){
    console.log(`His ${key} is ${user[key]}`)
}