const router = require('express').Router();
const { sendMails } = require('../controllers/emailController')

router.post('/', async (req, res) => {
    try {
        let result = await sendMails(req.body.id, req.body.to, req.body.subject, req.body.text)
        
        if (result.error) {
            res.status(500).json({
                error: true,
                message: result.message,
            });
        } else {
            res.status(200).json({
                error: false,
                data: result.data,
                
            });
        }
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: 'Something Went Wrong!',
        });
    }
});


module.exports = router
