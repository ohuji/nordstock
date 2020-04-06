const mysql = require("mysql");
const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nordshop"
})

connection.connect(function(error){
    if (error) {
        console.log(error);
    }   else {
        console.log("connected");
    }      
})

app.post("/register", (req, response) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  bcrypt.hash(password, 10, (err, hash) => {
    connection.query("INSERT INTO users (username, password, email) VALUES (?,?,?)", 
    [username, password, email], (error, results, fields) => {
      if (error) throw error;
      response.end(JSON.stringify(results));
    })
  });
})

app.listen(port, () => console.log("portti 5000 toimii!"));