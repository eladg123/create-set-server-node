const express = require('express')
const {
  deleteShoesById,
  fetchAvailableShoes,
  createShoes,
} = require('../controllers/shoes')

const router = express.Router()

router.route('/').post(createShoes)
router.route('/').get(fetchAvailableShoes)
router.route('/:id').delete(deleteShoesById)

module.exports = router
