/*
    Event routes / Events
    host + /api/events
*/

const { Router } = require('express')
const {
  getEvents,
  createEvents,
  updateEvent,
  deleteEvent,
} = require('../controllers/events')
const { validateFields } = require('../middlewares/field-validator')
const { validateJWT } = require('../middlewares/jwt-validator')
const { check } = require('express-validator')
const { isDate } = require('../helpers/isDate')

const router = Router()

router.use(validateJWT)

// get events
router.get('/', getEvents)

// create event
router.post(
  '/',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('start', 'Start date is required').custom(isDate),
    check('end', 'End date is required').custom(isDate),
    validateFields,
  ],
  createEvents
)

// update event
router.put('/:id', updateEvent)

// delete event
router.delete('/:id', deleteEvent)

module.exports = router
