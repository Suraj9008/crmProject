const express = require('express');
const auth = require('../middleware/auth');
const multer = require('multer');
var upload = multer({ dest: 'uploads/' });
const imageController = require('../controllers/imageController');

const router = express.Router();

router.post('/upload',[auth,upload.single("file")],imageController.fileupload);
router.get('/list',imageController.listFiles);
router.delete('/delete',auth,imageController.delete);

module.exports = router;