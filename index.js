import express from 'express';
import graphHttp from 'express-graphql';
import schema from './schema.js';
import mongoose from 'mongoose';
const app = express()
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/graphqdb')
app.get('/',(req,res)=>{
    res.send("Welcome to graph api")
})


app.use('/graphql',graphHttp({
    schema:schema,

    graphiql:true
}))
app.listen(3000,()=>{
    console.log("App is running on port 3000")
})