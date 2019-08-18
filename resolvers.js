const users = []
const root = {
    users:()=>{
        return users
    },
    item:()=>{
        return {
            id:"23231232112",
            text:"This is s s s anskjdcas",
            timeISO:"csadcsadcasdacsd",
            time:23232,
            title:"Learning",
            deleted:"false"

        }
    },
    getUser:({id})=>{
    let user = users.find(o=>o.id == id)
    return user
    },
    createUser:({input})=>{
        users.push(input)
        return input

    }

}
export default root