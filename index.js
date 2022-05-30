const express = require("express");
const mysql = require("mysql");
const app = express();

//Create db connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
});

//Conenct to db
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Yay, Connection established to DB!!!");
});

//Create database
app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE nodemysql";
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send("Database created!!!!");
  });
});

//Create table
app.get("/createemployee", (req, res) => {
  let sql =
    "CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id)";
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send("Emplyee table created");
  });
});
