const mongoose = require('mongoose');
const mailIntegrationSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    contactId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'contact',
    },
    // Loan Notification
    primarySMTPServer: {
        type: Number,
        required: true
    },
    backupSMTPServer: {
        type: Number,
        required: true
    },
    smtpPort: {
        type: Number,
        required: true
    },
    useSecureProtocol: {
        type: String,
        required: true
    },

    // SMTP AUTHENTICATION
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const mailIntegration = mongoose.model("mailintegration", mailIntegrationSchema);
module.exports.mailIntegration = mailIntegration;
module.exports.mailIntegrationSchema = mailIntegrationSchema;