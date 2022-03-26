var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
 
  type profile{
    name: String
    email:String
    age:Int
    weight:Float
    IsDeveloper:Boolean
    
  }
  type Query {
    Employee:profile,
  },

`);

var root = {
  Employee: () => {
    return {
      name: "asad",
      email: "asad@gmail.com",
      age: 25,
      weight: 80.5,
      isDeveloper: true
    }
  }
};
const app = express()
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('app is listing on localhost:4000/graphql');
})