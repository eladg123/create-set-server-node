const express = require('express')
const {
  createNewSet,
  fetchSets,
  deleteSetById,
} = require('../controllers/sets')

const router = express.Router()

router.post('/create-set', createNewSet)
router.get('/sets', fetchSets)
router.delete('/sets/:id', deleteSetById)

module.exports = router
