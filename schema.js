import {buildSchema} from 'graphql';

const schema = buildSchema(`
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
    emails:String 
    age:Int!
    gender : Gender
    items:[HackerNewsItem]
}
input UserInput{
    id:ID!
    firstName:String!
    lastName:String!
    email:String
    age:Int!
    gender : Gender
    items:[HackerNewsItemInput]


}
enum Gender{
    Male
    Female
    Other
}
type Email {
    email:String !
}
type Mutation {
    createUser(input:UserInput):User
}

type Query {
    item:HackerNewsItem
    getUser(id:ID):User
    users:[User]

}


`)
export default schema