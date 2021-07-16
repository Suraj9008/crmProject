const AWS = require('aws-sdk');
const fs = require('fs');
const { Moment } = require("../model/moment");
const isEmpty = require('../libs/checkLib');
const mongoose = require('mongoose');
const { ACCESS_KEY_ID, SECRET_ACCESS_KEY, REGION, BUCKET_NAME } = process.env;
AWS.config.update({
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
  region: REGION,
});0
const s3 = new AWS.S3();
module.exports = {
  fileupload: async (req, res, next) => {
    try {
      const params = {
        Bucket: BUCKET_NAME,
        Body: fs.createReadStream(req.file.path),
        Key: `file/${new Date().getTime()}-${req.file.originalname}`,
        ContentType: req.file.mimetype,
      };
      s3.upload(params,async (err, data) => {
        if (err) {
          console.log('Error occured while trying to upload to S3 bucket', err);
          fs.unlinkSync(req.file.path); // Empty temp folder
          res.status(404).send({ err });
        }
        if (data) {
          fs.unlinkSync(req.file.path); // Empty temp folder
          let moment = await Moment.findOne({ userId : req.userId });
          let tags = req.body.tag.split(",");
          if(isEmpty(moment)){
            let newMoment = new Moment({
                userId : req.userId,
                moments :[{
                    momentId :  mongoose.Types.ObjectId(),
                    tags,
                    title : req.body.title,
                    imageUrl : data.Location
                }]
            });

            await newMoment.save();
            return res.status(200).send({ newMoment });
          }else{
              moment.moments.push({
                momentId :  mongoose.Types.ObjectId(),
                tags,
                title : req.body.title,
                imageUrl : data.Location
              });
              
              await moment.save();
              moment = moment.toObject();
              return res.status(200).send({ moment });
          }
          
          
        }
      });
    } catch (err) {
      console.log('error', err);
      res.status(404).send({ err });
    }
  },
  listFiles: async (req, res, next) => {
    const params = {
      Bucket: BUCKET_NAME,
    };
    try {
      s3.listObjects(params, (err, data) => {
        if (err) {
          throw err;
        } else {
          res.status(200).send({ data });
        }
      });
    } catch (err) {
      console.log('error', err);
      res.status(404).send({ err });
    }
  },
  delete: async (req, res, next) => {
    console.log(req.query.momentId);
    let moment = await Moment.findOne({ userId : req.userId},{
        moments: {
           $filter: {
              input: "$moments",
              as: "item",
              cond:  { $eq : ["$$item._id",mongoose.Types.ObjectId(req.query.momentId)]}
           }
        }
    });
    console.log(req.params.momentId);
    
    
    let imageId = moment.moments[0].imageUrl.split("/");
    imageId = imageId[imageId.length-1];
    console.log("asdsads",imageId);
    const obj = 'file/' + imageId;
    console.log("----------",obj);
    const params = {
      Bucket: BUCKET_NAME,
      Key: obj,
    };
    try {
    
      s3.getObject(params,async (err, data) => {
        if (err) {
          res.status(404).send({ msg: err.message });
        } else {
          s3.deleteObject(params,async (err, data) => {
            if (err) {
              throw err;
            } else {
                let updatedMoment = await Moment.updateOne({ userId : req.userId},{ $pull : { moments  : { _id : req.query.momentId}}},{new : true});
                console.log(updatedMoment);
              res.status(200).send({ msg: 'File Deleted successfully' });
            }
          });
        }
      });
    } catch (err) {
      console.log('error', err);
      res.status(404).send({ err });
    }
  },
};
