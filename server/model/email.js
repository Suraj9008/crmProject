const mongoose = require('mongoose');
const emailSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    subject: {
        type:String,
        required: true
    },
    content: {
        type: String,
        required: true
    },

    // Attachment
    attachFileurl: {
        type: String,
        required: true
    },

    // schedule follow-up 
    scheduleFollowupActivity: {
        type: String,
        required: true
    },
    scheduleDate: {
        type: String,
        required: true
    },
    scheduleTime: {
        type: String,
        required: true
    },
    assignedTo: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const Email = mongoose.model("Emails", emailSchema);
module.exports.Email = Email;
module.exports.emailSchema = emailSchema;