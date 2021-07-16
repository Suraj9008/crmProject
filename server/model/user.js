const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const userSchema = mongoose.Schema({

    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'company',
    },
    imageUrl: {
        type: String,
        // required: true
    },

    userName: {
        type: String,
        required: true
    },

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    info: {
        type: String
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    mobile: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    securityQuestion: {
        type: [new mongoose.Schema({
            question: {
                type: String,
                required: true
            },
            ans: {
                type: String,
                required: true
            }
        })]
    },
    socilaMedia: {
        type: [new mongoose.Schema({
            socialMediaName: {
                type: String,
                required: true
            },
            Username: {
                type: String,
                required: true
            }
        })]
    },
    createdOn: {
        type: Date,
        default: Date.now()
    },
    updatedOn: {
        type: Date
    },
    Active: {
        type: Boolean,
        default: true
    }
});
userSchema.methods.generateAuthToken = function () {
    const info = {
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),  //1 day
        Data: {
            userId: this._id,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            mobile: this.mobile
        }
    }
    return jwt.sign(info, process.env.JWTSECRET);
}
const User = mongoose.model("user", userSchema);
module.exports.User = User;
module.exports.userSchema = userSchema;