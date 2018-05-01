//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // object desctructuring - pulls off MongoClient and ObjectID properties

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connectt o MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
  //   console.log(result);
  // });
  //
  db.collection('Users').findOneAndDelete({_id: new ObjectID("5acd5fcb3d589c528c4967ae")}).then((results => {
    console.log(JSON.stringify(results, undefined, 2));
  }));

  // db.collection('Users').deleteMany({name:'Mir'}).then((result) => {
  //   console.log(result);
  // });

//  db.close();
} );


// challenge:

/*

1. Look for any dipliates that has a name set to the name of another doc
use deleteMany to target these docs and delete them

2. use findOneAndDelete to delete any other document
delete it by // ID



*/
