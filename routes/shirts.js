const express = require('express')
const {
  deleteShirtById,
  fetchAvailableShirts,
  createShirt,
} = require('../controllers/shirts')

const router = express.Router()

router.route('/').post(createShirt)
router.route('/').get(fetchAvailableShirts)
router.route('/:id').delete(deleteShirtById)

module.exports = router
