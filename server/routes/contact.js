const express = require('express');

const {
  createContacts,
} = require('../controllers/contactController');
const router = express.Router();
// router.get('/', (req, res) => {
// })

router.post('/createContact', async (req, res) => {
  try {
    let result = await createContacts(req.body);
    if (result.error) {
      res.status(500).json({
        error: true,
        message: result.message,
      });
    } else {
      res.status(200).json({
        error: false,
        data: result.data,
        message:result.message
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: 'Something Went Wrong!',
    });
  }
});

module.exports = router;