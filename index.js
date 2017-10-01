import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';
import promise from 'bluebird';

//import schema from '.graphql';

const app = express();

mongoose.connect('mongodb://Wuriyanto:1003040005Wuriyanto@localhost:27017/db_app2', {useMongoClient: true});
mongoose.Promise = promise;

const db = mongoose.connection;
db.on('error', () => console.log('Error connect to database'))
  .once('open', () => console.log('Successfully connect to database'));

app.get('/', (req, res, next) => {
  res.send('Hello graphql')
});

app.get('/graphql', graphqlHTTP(() => ({
//  schema,
  graphiql: true,
  pretty: true
})));

const PORT = 3000;

app.listen(PORT, () => {
  console.log('app running on port : '+PORT);
});
