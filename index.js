import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';

//import schema from '.graphql';

const app = express();

app.get('/', (req, res, next) => {
  res.send("Hello graphql")
});

app.get("/graphql", graphqlHTTP(() => {
//  schema,
  graphiql: true,
  pretty: true
}));

const PORT = 3000;

app.listen(PORT, () => {
  console.log("app running on port : "+PORT);
});
