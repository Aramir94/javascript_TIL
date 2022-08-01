const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "840839f70c24dc",
        pass: "05e66526cb4423"
    }
}

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (err, info) => {
        if (err) {
            console.log(err);
        }else
            console.log(info);
            return info.response;
    });
}

let email_data = {
    from : "jhs941222@naver.com",
    to : "jhs941222@naver.com",
    subject : "테스트입니다",
    text : "안녕하세요",
}

send(email_data)