const express = require('express')
const app = express()
const port = 3001
const handlebars = require('./handlebars');
var path = require('path');

const defaultData = {
  foo: 'bar'
}

app.get('/', (req, res) => {
  const data = {
    ...defaultData,
    ...req.query
  };
  res.send(handlebars.template(data))
})

app.use(express.static(path.join(__dirname, 'assets')));

app.listen(port, () => {
  console.log(`Front end Developer app listening at http://localhost:${port}`)
})
