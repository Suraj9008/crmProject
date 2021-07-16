const joi = require('@hapi/joi');

// const registrationValidation = data =>{
//     const valiSchema = joi.object({
//         Name:joi.string().min(3).max(15).required(),
//         Email:joi.string().email().required(),
//         Password:joi.string().min(6).max(15).required(),
//         Phone:joi.number().integer().min(1000000000).max(9999999999).required(),
//         Address:joi.string().min(3).max(30).required()
//     });
//     return valiSchema.validate(data);
// }

const emailValidation = data=>{
    const loginSchema = joi.object({
        to:joi.string().email().required()
    })
    return loginSchema.validate(data);
}


module.exports= {
    emailValidation
}