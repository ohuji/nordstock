const mysql = require("mysql");
const express = require("express");

const app = express();
const port = 5000;

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

app.get("/search", function(require, response){
    connection.query("SELECT * FROM technology UNION SELECT * FROM home", function(error, results){
    if(error) {
        response.send(error);
    } else {
        return response.json({
            data: results
        })
    }
   });
})

app.listen(port, () => console.log("portti 5000 toimii!"));