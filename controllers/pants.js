const Pants = require('../models/pants')

const deletePantsById = async (req, res) => {
  const pants = await Pants.findById(req.params.id)
  if (pants) {
    await pants.remove()
    res.status(200).json({ success: true, message: 'Pants deleted' })
  } else {
    res.status(404).json({ success: false, message: 'Pants not found, bad ID' })
  }
}

const fetchAvailablePants = async (req, res) => {
  try {
    const pants = await Pants.find({})
    res.status(200).json(pants)
  } catch (error) {
    res.status(500)
  }
}

const createPants = async (req, res) => {
  try {
    const pants = new Pants({
      image: req.body.image,
      color: req.body.color,
      size: req.body.size,
      brand: req.body.brand,
      _id: req.body._id,
    })
    await pants.save()
  } catch (error) {}
}

module.exports = { deletePantsById, fetchAvailablePants, createPants }
