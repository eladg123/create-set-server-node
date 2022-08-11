const mongoose = require('mongoose')
const shirtModel = require('../models/shirt')
const shoesModel = require('../models/shoes')
const pantsModel = require('../models/pants')

const setSchema = new mongoose.Schema(
  {
    shirt: shirtModel.schema,
    pants: pantsModel.schema,
    shoes: shoesModel.schema,
  },
  { timestamps: true },
)
module.exports = mongoose.model('sets', setSchema)
