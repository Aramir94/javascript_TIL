const express = require('express');
const app = express();
//npm install uuid-apikey
const uuidAPIKEY = require('uuid-apikey');

const server = app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

console.log(uuidAPIKEY.create());

const key = {
    apiKey: 'EP6WTD2-KZE461G-PS8QW0X-NJ2AZYG',
    uuid: '758dcd34-9fdc-4306-b651-7e03ac84affa'
}

app.get('/api/users/:apikey/:type', async (req, res) => {
    // :type -> 어떤값이든 들어올수 있다
    let {
        apikey, 
        type
    } = req.params;
    // {} : 객체 비구조화 객체 안에 있는 값을 추출 변수로 선언
   
    if(!uuidAPIKEY.isAPIKey(apikey) || !uuidAPIKEY.check(apikey, key.uuid)){
        res.send('apikey is not valid');
    } else{
 
    if(type=='seoul'){
        let data = [
            {name:"서울시", population:1000000}
        ];
        res.send(data)  
    }else if(type=='jeju'){
        let data = [
            {name:"제주시", population:500000}
        ]
    }else{
        res.send('Type is not correct');
    }
    console.log(type);

    }


});
