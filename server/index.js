const express = require('express');
const path = require('path');
const dbQuery = require('../database/index.js');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

// refactor when live-data is inputted
app.get('/api/reservations', (req, res) => {
  dbQuery.getTimes()
    .then((data) => {
      console.log(data)
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    })
})

app.listen(port, console.log(`server is listening on port ${port}`));

