const mongoose = require('mongoose');
const TemplateSchema = mongoose.Schema({

    emailaddress: {
        type: String,
        required: true
    },
    uniqueKeyPattern: {
        type: String,
        required: true
    },
    To: {
        type: String,
        required: true
    },
    CC: {
        type: String,
    },
    BCC: {
        type: String,
    },
    fromName: {
        type: String,
        required: true
    },
    fromAddress: {
        type: String,
        required: true
    },
    replayToAddress: {
        type: String,
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const emailTemplates = mongoose.model("EmailTemplates", TemplateSchema);
module.exports.emailTemplates = emailTemplates;
module.exports.TemplateSchema = TemplateSchema;