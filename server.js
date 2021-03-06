const express = require('express')
const request = require('request')
const serveStatic = require('serve-static')
const cors = require('cors');
const app = express()
app.use(cors({
    origin: '*'
}))
app.use(serveStatic(__dirname + "/dist"))
const port = process.env.PORT || 5000

app.get('/nearbysearch', async (req, res) => {
    await request('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-8.119213199999999,-35.093855&radius=5000&language=pt-BR&key='+ process.env.GOOGLE_KEY,
     { json: true }, function(error, response, body) {
        res.json(body)
      })
})

app.listen(port, () => {

  console.log(`Example app listening at http://localhost:${port}`)
})