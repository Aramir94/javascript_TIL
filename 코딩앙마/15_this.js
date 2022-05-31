// method

let boy = {
    name : 'Mike',
    showName : function () {
        console.log(this.name)
    }
}

let man = boy;
boy = null;

man.showName()

// 화살표 함수로 this를 가리치면 전역개체(node.js) or
// 윈도우를 만들어 버림
// 객체의 매서드를 만들때는 화살표 함수는 사용하지 않아야함