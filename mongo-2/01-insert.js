var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
// var url = 'mongodb://localhost:27017/myproject';
var url = 'mongodb://admin:password123@ds139884.mlab.com:39884/node-mongo'

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  if (err) throw err
  console.log("Connected successfully to server");

  const dbName = 'node-mongo';
  const db = client.db(dbName)
  const employees = [
    {
        "id": 1,
        "firstName": "Rajat1",
        "lastName": "Moury",
        "city": "Mumbai"
    },
    {
        "id": 2,
        "firstName": "Lionel1",
        "lastName": "Messi",
        "city": "Barca"
    },
    {
        "id": 3,
        "firstName": "Amy1",
        "lastName": "DX",
        "city": "HR"
    },
    {
        "id": 4,
        "firstName": "Edward1",
        "lastName": "Snowden",
        "city": "NalaSupara"
    }
]
// db.collection("employees").insertOne(employees, function(err,res) {
  db.collection("employees").insertMany(employees, function(err,res) {
      if (err)  throw err
      console.log(res.insertedCount)
      console.log(res.insertedIds)
      console.log("Inserted")
      client.close();
  })
});
