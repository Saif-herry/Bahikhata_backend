const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

const connection = require('./config')
const NoticeRouter = require('./routes/Notice.routes')

app.get('/', (req, res) => {
  res.send('welcome in Bahikhata Notes !')
})

app.use('/note', NoticeRouter)

const PORT = process.env.PORT || 8000

app.listen(PORT, async () => {
  try {
    await connection
    console.log('db connected')
  } catch (err) {
    console.log('check config', err)
  }
  console.log(`Listening on port ${PORT}`)
})
