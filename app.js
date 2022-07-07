const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  let result = 'Hello World!'
  if(req.query.name){
    result += ", " + req.query.name
  }
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;