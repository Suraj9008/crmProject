const express = require('express');
const auth = require('../middleware/auth');

const { createMoment, deleteMoment, updateMoment} = require('../controllers/momentController');

const router = express.Router();

router.post('/create',async (req,res)=>{
    try{
        let moment = {
            userId : req.body.userId,
            imageUrl : req.body.imageUrl,
            tags : req.body.tags,
            title : req.body.title
        }
        let result = await createMoment(moment);

        if(result.error){
            res.status(500).json({
                error: true,
                message : result.message
            });
        }else{
            res.status(200).json({
                error : false,
                data : result.data
            });
        }
    }catch(error){
        return res.status(500).json({
            error : true,
            message: "Something Went Wrong!"
        });
    }
});

router.delete('/delete',async(req,res)=>{
    try{
        let result = await deleteMoment(req.body.momentId,req.body.userId);

        if(result.error){
            res.status(500).json({
                error: true,
                message : result.message
            });
        }else{
            res.status(200).json({
                error : false,
                data : result.data,
                message : "Moment Deleted Successfully"
            });
        }
    }catch(error){
        return res.status(500).json({
            error : true,
            message : "Something Went Wrong!"
        });
    }
});

router.put("/update",async(req,res)=>{
    try{
        let moment = {
            userId : req.body.userId,
            tags : req.body.tags,
            momentId : req.body.momentId,
            title : req.body.title,
            imageUrl : req.body.imageUrl
        }
        console.log("here");
        let result = await updateMoment(moment);

        if(result.error){
            res.status(500).json({
                error: true,
                message : result.message
            });
        }else{
            res.status(200).json({
                error : false,
                message : "Moment Updated Successfully"
            });
        }
    }catch(error){
        return res.status(500).json({
            error : true,
            message : "Something Went Wrong!"
        });
    }
});


module.exports = router;

