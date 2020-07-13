/*
    User routes / Auth
    host + /api/auth
*/

const { Router } = require('express')
const { check } = require('express-validator')
const router = Router()
const { createUser, loginUser, renewToken } = require('../controllers/auth')
const { validateFields } = require('../middlewares/field-validator')
const { validateJWT } = require('../middlewares/jwt-validator')

router.post(
  '/new',
  [
    // middleware
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password should have at least 6 characters').isLength({
      min: 6,
    }),
    validateFields,
  ],
  createUser
)

router.post(
  '/',
  [
    // middleware
    check('email', 'Email is required').isEmail(),
    check('password', 'Password should have at least 6 characters').isLength({
      min: 6,
    }),
    validateFields,
  ],
  loginUser
)

router.get('/renew', validateJWT, renewToken)

module.exports = router
