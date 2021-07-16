const mongoose = require('mongoose');
const fbpixelIntegration = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    // FB pixel Integration
    facebookPixelId: {
        type: Number,
        required: true
    },
    excludeUsers: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const fbIntegration = mongoose.model("fbintegration", fbpixelIntegration);
module.exports.fbIntegration = fbIntegration;
module.exports.fbpixelIntegration = fbpixelIntegration;