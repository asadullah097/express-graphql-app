var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(` 
  type Profile{
    name: String
    email:String
  }
  type Query {
    Employee(id:Int):Profile,
    IsDeveloper:Boolean
  },

`);

var root = {
  IsDeveloper: () => true,
  Employee: ({ id }) => {
    console.log(id);
    return {
      name: "asad",
      email: "asad@gmail.com",
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