const express = require('express')
require('dotenv').config()
require('./models/db')
const cors = require('cors')

// import routes
const fetchItemsRouter = require('./routes/fetchItems')
const setsRouter = require('./routes/sets')
const shirtsRouter = require('./routes/shirts')
const shoesRouter = require('./routes/shoes')
const pantsRouter = require('./routes/pants')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/fetch-items-to-db', fetchItemsRouter)
app.use('/', setsRouter)
app.use('/shirts', shirtsRouter)
app.use('/shoes', shoesRouter)
app.use('/pants', pantsRouter)

app.listen(8000, () => {
  console.log('Server is running')
})
