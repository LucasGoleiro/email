// import nodemailer from 'nodemailer';

var nodemailer = require('nodemailer');

var remetente = nodemailer.createTransport({
    service: "gmail",
    auth:{
    user: "lucas.goleiro1995@gmail.com", 
    pass: "minha_senha" }
});

var emailASerEnviado = {
    from: "goleiro-lucas1@hotmail.com",
    to: "goleiro-lucas1@hotmail.com",
    subject: "Enviando Email com Node.js",
    text: "Estou te enviando este email com node.js",
};

remetente.sendMail(emailASerEnviado, function(error){
    if (error) {
    console.log(error);
    } else {
    console.log("Email enviado com sucesso.")
    }
});

// para funcionar no GMAIL é preciso ativar a opção "less secure" (https://myaccount.google.com/lesssecureapps)
