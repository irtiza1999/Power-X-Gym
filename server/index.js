const express = require('express')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 5000

app.use(bodyParser.json())
app.use(cors())
app.get('/', (req, res) => {
  res.send('Server on')
})

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gi4fd.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
client.connect((err) => {
  const trainingCollection = client
    .db('powerXGym')
    .collection('trainingClasses')
  const orderCollection = client.db('powerXGym').collection('orders')

  console.log('Database connected')
  app.get('/training', (req, res) => {
    trainingCollection.find({}).toArray((err, documents) => {
      res.send(documents)
    })
  })

  app.get('/detail/:key', (req, res) => {
    trainingCollection
      .find({ key: req.params.key })
      .toArray((err, documents) => {
        res.send(documents[0])
      })
  })

  app.get('/paypal', (req, res) => res.send(process.env.PAYPAL_ID))

  app.post('/addOrder', (req, res) => {
    const order = req.body
    orderCollection.insertOne(order).then((result) => {
      res.send(result.insertedCount > 0)
    })
  })
})

app.listen(process.env.PORT || port)
