import express from 'express';
import graphHttp from 'express-graphql'
import schema from './schema.js'
import resolver from './resolvers.js';
const app = express()
app.get('/',(req,res)=>{
    res.send("Welcome to graph api")
})


app.use('/graphql',graphHttp({
    schema:schema,
    rootValue:resolver,
    graphiql:true
}))
app.listen(3000,()=>{
    console.log("App is running on port 3000")
})