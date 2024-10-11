const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');


const schema = buildSchema(`
  type Query {
    hello: String
    listings: [Listing]
  }

  type Listing {
    id: ID
    title: String
    price: Int
    location: String
  }
`);

const root = {
  hello: () => 'Hello world!',
  listings: () => [
    { id: 1, title: "Luxury Villa", price: 500000, location: "New York" },
    { id: 2, title: "Beach House", price: 300000, location: "Miami" },
    { id: 3, title: "City Apartment", price: 200000, location: "San Francisco" },
    { id: 4, title: "Mountain Cabin", price: 150000, location: "Colorado" },
  ],
};

const app = express();

app.use(cors({
  origin: '*',
  credentials: true,
}));

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, 
  })
);

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000/graphql');
});
