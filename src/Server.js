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

connection.connect(error => {
    if (error) {
        console.log(error);
    }   else {
        console.log("connected");
    }      
})

app.get("/nyse", function(req, response) {
   connection.query("SELECT * FROM nyse", function(error, results) {
     if (error) {
       response.send(error);
     } 
     else {
       return response.json({
         data: results
       })
     }
   })
})

app.get("/nasdaq", function(req, response) {
  connection.query("SELECT * FROM nasdaq", function(error, results) {
    if (error) {
      response.send(error);
    } 
    else {
      return response.json({
        data: results
      })
    }
  })
})

app.get("/currencies", function(req, response) {
  connection.query("SELECT * FROM currencies", function(error, results) {
    if (error) {
      response.send(error);
    } 
    else {
      return response.json({
        data: results
      })
    }
  })
})

app.get("/sse", function(req, response) {
  connection.query("SELECT * FROM sse", function(error, results) {
    if (error) {
      response.send(error);
    } 
    else {
      return response.json({
        data: results
      })
    }
  })
})

app.get("/lse", function(req, response) {
  connection.query("SELECT * FROM lse", function(error, results) {
    if (error) {
      response.send(error);
    } 
    else {
      return response.json({
        data: results
      })
    }
  })
})

app.get("/etf", function(req, response) {
  connection.query("SELECT * FROM etf", function(error, results) {
    if (error) {
      response.send(error);
    } 
    else {
      return response.json({
        data: results
      })
    }
  })
})

app.get("/crypto", function(req, response) {
  connection.query("SELECT * FROM crypto", function(error, results) {
    if (error) {
      response.send(error);
    } 
    else {
      return response.json({
        data: results
      })
    }
  })
})


app.listen(port, () => console.log("portti 5000 toimii!"));