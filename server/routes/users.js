const express = require('express');
const auth = require('../middleware/auth');
const authorize = require('../helper/authorize');
const Role = require('../helper/role');
const {
  createUser,
  login,
  getEmail,
} = require('../controllers/userController');
const role = require('../helper/role');
const router = express.Router();
// router.get('/', (req, res) => {
// })

router.post('/create', async (req, res) => {
  try {
    let result = await createUser(req.body);
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

router.post('/login', async (req, res) => {
  try {
    let result = await login(req.body.email, req.body.password);
    if (result.error) {
      return res.status(500).json({
        error: true,
        message: result.message,
      });
    } else {
      return res.status(200).json({
        error: false,
        message: result.message,
        data: result.data,
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: 'Something Went Wrong!' + error,
    });
  }
});
/**
 * It will trigger when /user/get-email/:email called
 * @param {*} req
 * @param {*} res
 */
router.get('/get-email/:email', async (req, res) => {
  const email = req.params.email;
  console.log(email);
  // Calling getEmailFromDB() service function to fetch email from DB
  getEmail(email, (error, users) => {
    if (error) {
      return res.status(404).json({ error: error });
    }
    return res.status(200).json({
      status: 'Successfully fetched Emails',
      users: users,
    });
  });
});

router.get('/role', authorize(role.Admin), async (req, res) => {
  res.send('responce from admin')
})

module.exports = router;