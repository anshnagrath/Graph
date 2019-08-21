
import item from './models/items'
import User from './models/user'
import Post from './sequelize/post';
const users = []
const root = {
    Query:{
        getPost:async ()=>{
            return await Post.findAll()
        } ,
        getUsers:async()=>{
            return await User.find({});
        },
        getItem:async (_,{id})=>{
        return await item.findOne({_id:id});
        },
        getUser:(_,{id},context,info)=>{
        let user = users.find(o=>o.id == id)
        return user
        }
      
    },
 Mutation:{
  
    createUser:async (_,{input},context,info)=>{
      
         const user = await User.create(input)
         return User.findOne({_id:user.id}).populate('items')

    },
    createItem:(_,{input}) => {
        return Promise.resolve(item.create(input))
    },
    updateUser:async (_,{input}) =>{
        return await User.findOne({_id:input.id},input,{new:true})
    },
    deleteUser:async(_,{id})=>{
        return await User.findByIdAndRemove({_id:id});
    },
    createPost:async(_,{input})=>{
        return await Post.create(input)
    }

 }
   
   

}
export default root