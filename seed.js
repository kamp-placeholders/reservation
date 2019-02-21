const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'reservations.c5tscllfxdsf.us-east-2.rds.amazonaws.com',
  port: '3306',
  user: 'root',
  password: 'password',
  database: 'reservations'
});

// fill up the restaurants table to 100
for (let i = 0; i < 100; i++){
  connection.query('INSERT INTO restaurants(id) values(null)', (err, results) => {
    if(err){
      console.log(err);
    } else {
      console.log(results);
    }
  })
}


var start = new Date("02/10/2019");
var end = new Date("02/24/2019");

function zeroPadding(num) {
    return num < 10 ? '0' + num : num;
}

while(start <= end){
   // format the date for the query
   let day = start.getDate();
   let month = start.getMonth() + 1;
   let year = start.getFullYear();
   var formatDate = zeroPadding(year) + '-' + zeroPadding(month) + '-' + zeroPadding(day);
   
   // 200 queries each day, 2 queries for each restaurant
   for (let i = 1; i < 101; i++){
     // start date query
     connection.query(`INSERT INTO reserved(rest_id, date, time) values(${i}, "${formatDate}", "08:00:00")`, (err, results) => {
       if(err){
         console.log(err);
       } else {
         console.log(results);
       }
     });

     // end date query
     connection.query(`INSERT INTO reserved(rest_id, date, time) values(${i}, "${formatDate}", "20:00:00")`, (err, results) => {
      if(err){
        console.log(err);
      } else {
        console.log(results);
      }
    });
   }

   var newDate = start.setDate(start.getDate() + 1);
   start = new Date(newDate);
}