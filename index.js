const express = require("express");
const mysql = require("mysql");
const app = express();

//Create db connection
const db = mysql.createConnection({
  host: localhost,
  user: root,
  password: 1234,
});

//Conenct to db
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Yay, Connection established to DB!!!");
});