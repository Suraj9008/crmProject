const mongoose = require('mongoose');

const momentSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    moments : {
        type : [new mongoose.Schema({
            title : {
                type :String,
                required : true
            },
            tags : {
                type :[String],
                required : true
            },
            imageUrl : {
                type : String,
                required : true
            }
        })]
    }
});

const Moment = mongoose.model("moment",momentSchema);
module.exports.Moment = Moment;
module.exports.momentSchema = momentSchema;