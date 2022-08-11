const Shirt = require('../models/shirt')

const deleteShirtById = async (req, res) => {
  try {
    const shirt = await Shirt.findById(req.params.id)
    if (shirt) {
      await shirt.remove()
      res.status(200).json({ success: true, message: 'Shirt deleted' })
    } else {
      res
        .status(404)
        .json({ success: false, message: 'Shirt not found, bad ID' })
    }
  } catch (error) {
    res.status(404).json({ success: false, message: 'Shirt not found, bad ID' })
  }
}

const createShirt = async (req, res) => {
  try {
    const shirt = new Shirt({
      image: req.body.image,
      color: req.body.color,
      size: req.body.size,
      brand: req.body.brand,
      _id: req.body._id,
    })
    await shirt.save()
  } catch (error) {}
}

const fetchAvailableShirts = async (req, res) => {
  try {
    const shirts = await Shirt.find({})
    res.status(200).json(shirts)
  } catch (error) {
    res.status(500)
  }
}

module.exports = { deleteShirtById, fetchAvailableShirts, createShirt }
