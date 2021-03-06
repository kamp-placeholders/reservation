const express = require('express');
const path = require('path');
const dbQuery = require('../database/index.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(morgan('dev'));
const port = process.env.port || 3000;

app.use('/:urlID', express.static(path.join(__dirname, '../public')));

// refactor when live-data is inputted
app.get('/times/:urlID', (req, res) => {
  let restID = req.params.urlID;

  dbQuery.getTimes(restID)
    .then((data) => {
      console.log(data)
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    })
})

app.listen(port, console.log(`server is listening on port ${port}`));

