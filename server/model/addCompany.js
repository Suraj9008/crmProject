const mongoose = require('mongoose');
const companySchema = mongoose.Schema({

    // Basic info
    organizationName: {
        type: String,
        required: true
    },
    legalName: {
        type: String,
        required: true
    },
    treadingName: {
        type: String,
        required: true
    },
    sicCode: {
        type: String,
        required: true
    },
    contactType: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    currentEmployer: {
        type: String,
        required: true
    },
    onHold: {
        type: String,
        required: true
    },
    bulkMailings: {
        type: String,
        required: true
    },
    primary: {
        type: String,
        required: true
    },
    phoneNo: {
        type: [new mongoose.Schema({
            phone: {
                type: Number,
                required: true
            },
            ext: {
                type: Number,
                required: true
            },
            phoneLocation: {
                type: String,
                required: true
            }
        })]
    },
    instantMessenger: {
        type: [new mongoose.Schema({
            instMessenger: {
                type: Number,
                required: true
            },
            imLocation: {
                type: string,
                required: true
            },
            imType: {
                type: String,
                required: true
            }
        })]
    },
    website: {
        type: String,
        required: true
    },
    websiteType: {
        type: String,
        required: true
    },
    ConatctScorce: {
        type: String,
        required: true
    },
    externalID: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },

    // Address
    addressLocationType: {
        type: String,
        required: true
    },
    primaryLocationForThisContact: {
        type: String
    },
    billingLocationForThisContact: {
        type: String
    },
    useAnotherContactsAddress: {
        type: String
    },
    streetAddress: {
        type: String,
        required: true
    },
    supplementalAddress1: {
        type: String
    },
    supplementalAddress2: {
        type: String
    },
    supplementalAddress3: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    Country: {
        type: String,
        required: true
    },
    stateOrProvince: {
        type: String,
        required: true
    },
    Latitude: {
        type: String,
        required: true
    },
    Longitude: {
        type: String,
        required: true
    },

    // Communication Preferences
    communicationStyle: {
        type: String,
        required: true
    },
    emailGreeting: {
        type: String,
        required: true
    },
    postalGreeting: {
        type: String,
        required: true
    },
    Addressee: {
        type: String,
        required: true
    },
    privacy: {
        type: [String],
        required: true
    },
    preferredCommunicationMethod: {
        type: [String],
        required: true
    },
    preferredLanguage: {
        type: [String],
        required: true
    },
    noBulkEmails: {
        type: String,
        required: true
    },
    emailFormat: {
        type: String,
        required: true
    },

    // Notes
    subject: {
        type: [String],
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    group: {
        type: String,
        required: true
    },
    referenceFrom: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const Company = mongoose.model("company", companySchema);
module.exports.Company = Company;
module.exports.companySchema = companySchema;