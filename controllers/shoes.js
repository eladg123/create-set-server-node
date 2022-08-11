const Shoes = require('../models/shoes')

const deleteShoesById = async (req, res) => {
  const shoes = await Shoes.findById(req.params.id)
  if (shoes) {
    await shoes.remove()
    res.status(200).json({ success: true, message: 'Shoes deleted' })
  } else {
    res.status(404).json({ success: false, message: 'Shoes not found, bad ID' })
  }
}

const fetchAvailableShoes = async (req, res) => {
  try {
    const shoes = await Shoes.find({})
    res.status(200).json(shoes)
  } catch (error) {
    res.status(500)
  }
}

const createShoes = async (req, res) => {
  try {
    const shoes = new Shoes({
      image: req.body.image,
      color: req.body.color,
      size: req.body.size,
      brand: req.body.brand,
      _id: req.body._id,
    })
    await shoes.save()
  } catch (error) {}
}

module.exports = { deleteShoesById, fetchAvailableShoes, createShoes }
