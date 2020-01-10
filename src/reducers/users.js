const users=[]
const usersReducer=(state=users, action)=>{
    switch(action.type){
        case 'SET_USERS':{
          //  console.log()
            return [...action.payload]
        }
        default:{
            return [...state]
        }
    }
}
export default usersReducer