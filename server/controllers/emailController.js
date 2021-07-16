const { Email } = require("../model/email");
const SendMail = require('nodemailer');
const winstonLogger = require('../libs/winstonLib');
// const { emailValidation } = require('../validation/validator')
const validator = require("email-validator");
exports.sendMails = async (userId, to, subject, text) => {
    let email;
    let from = 'surajnarulesp108@gmail.com';
    let mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: text
    }
    let transport = SendMail.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'surajnarulesp108@gmail.com',
            pass: 'suri@9008$'
        }
    })

    const newmail = new Email({
        userId: userId,
        from: from,
        to: to,
        subject: subject,
        text: text
    })

    try {
        const { error } = validator.validate(Email.to);
        if (error) return {
            error: true,
            message: 'email not exist' + error,
        };
        let mail = await transport.sendMail(mailOptions);
        console.log(mail);
        email = await newmail.save();
        console.log(email);

        if(email && mail == !undefined) return {
            error: false,
            data: email,
            message: 'Email Send Successfully',
        }
       
    } catch (error) {
        winstonLogger.error('Something went Wrong in Send Mail');
        return {
            error: true,
            message: 'Something went Wrong in Send Mail ' + error,

        };
    }
}