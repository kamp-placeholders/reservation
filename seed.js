const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: 'rockets11',
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

function pad(n) {
    return n<10 ? '0'+n : n;
}

while(start <= end){
   // format the date for the query
   let day = start.getDate();
   let month = start.getMonth() + 1;
   let year = start.getFullYear();
   var formatDate = pad(year) + '-' + pad(month) + '-' + pad(day);
   
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
     connection.query(`INSERT INTO reserved(rest_id, date, time) values(${i}, "${formatDate}", "16:00:00")`, (err, results) => {
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