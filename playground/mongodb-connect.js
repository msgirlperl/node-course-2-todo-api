//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // object desctructuring - pulls off MongoClient and ObjectID properties

// var obj = new ObjectID(); // lets us make new objectIds on the fly
// console.log(obj);

var user = {name:'Miriam', age: 25};
//var {name} = user; // object desctructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connectt o MongoDB server');
  }
  console.log('Connected to MongoDB server');

// db.collection('Todos').insertOne({
//   text:'Something to do',
//   completed: false
// }, (err, result) => {
//   if (err) {
//     return console.log('Unable to insert todo', err);
//   }
//   console.log(JSON.stringify(result.ops, undefined, 2));
// })

// db.collection('Users').insertOne({
//   name:'Mir',
//   age: '18',
//   location:'Boston'
// }, (err, result) =>{
//   if (err) {
//     return console.log('Unable to insert user', err);
//   }
//   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
// });

  db.close();
} );



// //for latest version of mongodb:
//
// const MongoClient = require('mongodb').MongoClient;
//
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//   if (err) {
//     return console.log('Unable to connectt o MongoDB server');
//   }
//   console.log('Connected to MongoDB server');
//   const db = client.db('TodoApp');
// //NEW
// db.collection('Todos').insertOne({
//
// }, (err, result) => {
//   if (err) {
//     return console.log('Unable to insert todo', err);
//   }
//   console.log(JSON.stringify(result.ops, undefined, 2));
// })
//
// //NEW
//   client.close();
// } );
