const express = require('express');
const auth = require('../middleware/auth');
const multer = require('multer');
var upload = multer({ dest: 'uploads/' });
const { fileUpload, deleteFile } = require('../controllers/s3Controller');

const router = express.Router();

router.post("/upload",[auth,upload.single('file')],async (req,res)=>{
    try{
        fileUpload(req)
        .then((data)=>{
            return res.status(200).json({
                error : false,
                message : "File Uploaded Succesfully",
                data,
            });
        })
        .catch((error)=>{
            return res.status(500).json({
                error : true,
                message : "Failed To Upload File"
            });
        });
    }catch(error){
        return res.status(500).json({
            error : true,
            message : "Something Went Wrong!"
        });
    }
});

router.delete('/delete',auth,async (req,res)=>{
    try{
        deleteFile(req.body.fileName)
        .then((data)=>{
            return res.status(200).json({
                error : false,
                message : "File Deleted Succesfully",
            });
        })
        .catch((error)=>{
            return res.status(500).json({
                error : true,
                message : "Failed To Delete File"
            });
        });
    }catch(error){
        return res.status(500).json({
            error : true,
            message : "Something Went Wrong!"
        });
    }
});


// router.post('/upload',[auth,upload.single("file")],imageController.fileupload);
// router.delete('/delete',auth,imageController.delete);


module.exports = router;

