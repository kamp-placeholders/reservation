const express = require('express');
const path = require('path');
const dbQuery = require('../database/index.js');
const cors = require('cors');
const {connection} = require('../database/index.js');
const bodyParser = require('body-parser');
const compression = require('compression');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 3000;

app.use('/restaurants/:urlID', express.static(path.join(__dirname, '../public')));
app.use(compression());

// refactor when live-data is inputted
app.get('/times/restaurants/:urlID', (req, res) => {
  let restID = req.params.urlID;

  dbQuery.getTimes(restID)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    })
})

app.listen(port, console.log(`server is listening on port ${port}`));

