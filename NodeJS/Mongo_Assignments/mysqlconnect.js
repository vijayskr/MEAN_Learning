//Create Database in MySQL
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function(err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

//Create Table in MySQL
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

//Insert Data
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

//Select Data from MySQL
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function(err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});