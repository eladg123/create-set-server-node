const express = require('express')
const {
  deletePantsById,
  fetchAvailablePants,
  createPants,
} = require('../controllers/pants')

const router = express.Router()

router.route('/').post(createPants)
router.route('/').get(fetchAvailablePants)
router.route('/:id').delete(deletePantsById)

module.exports = router
