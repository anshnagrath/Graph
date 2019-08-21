import root from './resolvers';
import {makeExecutableSchema} from 'graphql-tools'

const typeDef =`
type HackerNewsItem{
    id:String
    text:String
    timeISO:String
    time:Int
    title:String
    deleted:Boolean

}
input HackerNewsItemInput{
    id:String
    text:String
    timeISO:String
    time:Int
    title:String
    deleted:Boolean

}
type User{
    id:ID!
    firstName : String!
    lastName : String!
    email:String 
    age:Int!
    gender : Gender
    items:[HackerNewsItem]
}
input UserInput{
    id:ID
    firstName:String!
    lastName:String!
    email:String
    age:Int!
    gender : Gender
    items:[ID!]


}
enum Gender{
    Male
    Female
    Other
}
type Email {
    email:String !
}
input PostInput{
    title:String
    text:String
}
type Mutation {
    createUser(input:UserInput):User
    createItem(input:HackerNewsItemInput):HackerNewsItem
    updateUser(input:UserInput):User
    deleteUser(id:ID!):User
    createPost(input:PostInput):Post
}

type Post{
    id:ID
    title:String
    text:String
}
type Query {
    getItem(id:ID!):HackerNewsItem
    getUser(id:ID):User
    getUsers:[User]
    getPost:[Post]


}


`
const  schema = makeExecutableSchema({typeDefs:typeDef,resolvers:root})
export default schema