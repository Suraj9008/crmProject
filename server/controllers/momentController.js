const { Moment } = require("../model/moment");
const mongoose = require('mongoose');
const isEmpty = require('../libs/checkLib');

exports.createMoment = async(moment)=>{
    try{
        let oldMoment = await Moment.findOne({ userId : moment.userId });
        console.log(oldMoment);
        if(isEmpty(oldMoment)){
            let newMoment = new Moment({
                userId : moment.userId,
                moments :[{
                    tags : moment.tags,
                    title : moment.title,
                    imageUrl : moment.imageUrl
                }]
            });
            await newMoment.save();
            return {
                error: false,
                message : "Moment Created Successfully",
                data : newMoment
            }
        }else{
            oldMoment.moments.push({
                tags : moment.tags,
                title : moment.title,
                imageUrl : moment.imageUrl
            });
            
            await oldMoment.save();
            oldMoment = oldMoment.toObject();
            return {
                error : false,
                data : oldMoment,
                message : "Moment Created Successfully"
            }
        }
    }catch(error){
        return {
            error : true,
            message : "Something went Wrong!"
        }
    }
}


exports.deleteMoment = async(momentId,userId)=>{
    try{
        let moment = await Moment.updateOne({ userId : userId},
            { $pull : { moments  : { _id : momentId}}},
            {new : true}
        );
        if(moment.nModified == 1){
            return {
                error : false,
                message : "Moment Deleted Successfully"
            }
    }else{
            return {
                error: true,
                message : "Failed to Delete Moment"
            }
        }
    }catch(error){
        return {
            error: true,
            message : "Something Went Wrong"
        }
    }
}

exports.updateMoment = async(moment)=>{
    try{
        let result = await Moment.updateOne({ userId : moment.userId, "moments._id" : moment.momentId },
            { $set : { "moments.$.tags" : moment.tags,
                        "moments.$.title" : moment.title,
                        "moments.$.imageUrl" : moment.imageUrl
                    }
            },
            {new : true}
        );
        if(result.nModified==1){
            return  {
                error : false,
                Message : "Moment Updated"
            }
        }else{
            return {
                error: true,
                message : "Failed to Update"
            }
        }
        
    }catch(error){
        return {
            error: true,
            message : "Something Went Wrong"
        }
    }
}