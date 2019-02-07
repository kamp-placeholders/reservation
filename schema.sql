DROP DATABASE IF EXISTS reservations;
CREATE DATABASE reservations;

USE reservations;

CREATE TABLE restaurants (
  id INT AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE reserved (
  id INT AUTO_INCREMENT PRIMARY KEY,
  rest_id INT,
  date DATE,
  time TIME,
  FOREIGN KEY(rest_id) REFERENCES restaurants(id)
);
