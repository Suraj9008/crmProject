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
});
const s3 = new AWS.S3();

exports.fileUpload = async(req)=>{
  return new Promise((resolve,reject)=>{
    const params = {
      Bucket: BUCKET_NAME,
      Body: fs.createReadStream(req.file.path),
      Key: `file/${new Date().getTime()}-${req.file.originalname}`,
      ContentType: req.file.mimetype,
    }
    s3.upload(params,(error,data)=>{
      fs.unlinkSync(req.file.path);
      if(error){
        reject();
      }else{
        resolve(data.Location);
      }
    });
  });
}

exports.deleteFile = async (fileName)=>{
  new Promise((resolve,reject)=>{
    const params = {
      Bucket: BUCKET_NAME,
      Key: `file/${fileName}`,
    };
    s3.deleteObject(params,(error,data)=>{
      if(error){
        reject();
      }else{
        resolve(data);
      }
    });
  })
}
