const mongoose = require('mongoose');
const TemplateSchema = mongoose.Schema({
    // Lable
    accountActivation: {
        type: String,
        required: true
    },
    uniqueKeyPattern: {
        type: String,
        required: true
    },

    // Recipients
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

    // Sender
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