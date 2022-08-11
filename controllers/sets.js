const axios = require('axios')
const Set = require('../models/set')
const Shirt = require('../models/shirt')
const Shoes = require('../models/shoes')
const Pants = require('../models/pants')

const createNewSet = async (req, res) => {
  const newSet = req.body
  try {
    let setToSave = new Set({
      shirt: newSet.shirt,
      pants: newSet.pants,
      shoes: newSet.shoes,
    })
    await setToSave.save()
    // remove the chosen items from the db and create new set to avoid the user choose these items again
    await axios.delete(`http://localhost:8000/shirts/${newSet.shirt._id}`)
    await axios.delete(`http://localhost:8000/pants/${newSet.pants._id}`)
    await axios.delete(`http://localhost:8000/shoes/${newSet.shoes._id}`)
    res.json({ success: true, set: setToSave })
  } catch (error) {
    res.status(500)
  }
}

const deleteSetById = async (req, res) => {
  const setId = req.params.id
  try {
    const set = await Set.findById(setId)
    if (set) {
      await set.remove()
      let shirtToSave = new Shirt({
        brand: set.shirt.brand,
        _id: set.shirt._id,
        color: set.shirt.color,
        size: set.shirt.size,
      })
      let pantsToSave = new Pants({
        brand: set.pants.brand,
        _id: set.pants._id,
        color: set.pants.color,
        size: set.pants.size,
      })
      let shoesToSave = new Shoes({
        brand: set.shoes.brand,
        _id: set.shoes._id,
        color: set.shoes.color,
        size: set.shoes.size,
      })
      await shirtToSave.save()
      await shoesToSave.save()
      await pantsToSave.save()
      res.status(200).json({ message: 'Set removed' })
    } else {
      res.status(404).json({ message: 'Set not found, nothing to delete' })
    }
  } catch (error) {
    res.status(500)
  }
}

const fetchSets = async (req, res) => {
  try {
    const sets = await Set.find({})
    res.status(200).json(sets)
  } catch (error) {
    res.status(500)
  }
}

module.exports = { createNewSet, fetchSets, deleteSetById }
