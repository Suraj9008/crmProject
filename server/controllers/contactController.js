const contactModel = require('../model/addContact');
const isEmpty = require('../libs/checkLib');const winstonLogger = require('../libs/winstonLib');

exports.createContacts = async (contact) => {
  console.log(contact);
  try {
   const res = await contactModel.create(contact);
   console.log(res);
    return {
      error: false,
      data: res,
      message:'Contacts created Successfully',
    };
  } catch (error) {
    winstonLogger.error('Something went Wrong in Create Contacts');
    return {
      error: true,
      message: 'Something went Wrong in Create Contacts' + error,
    };
  }
};