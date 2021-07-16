const mongoose = require('mongoose');
const loanSchema = mongoose.Schema({
    contactId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'contact',
    },
    // Loan Notification
    selectContact: {
        type: String,
        required:true
    },
    loanType: {
        type: String,
        required:true
    },
    loanAmount: {
        type: Number,
        required:true
    },

    // Special Considerations
    emiAmmount: {
        type: Number,
        required:true
    },
    repeatEvery: {
        type: Number,
        required:true
    },
    repeatEveryDay: {
        type: String,
        required:true
    },
    sendBefore: {
        type: Number,
        required:true
    },
    sendBeforeDay: {
        type: String,
        required:true
    },
    selectTemplate: {
        type: String,
        required:true
    },
    sendNotificationOn: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const Loan = mongoose.model("loan", loanSchema);
module.exports.Loan = Loan;
module.exports.loanSchema = loanSchema;