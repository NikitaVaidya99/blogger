const posts=[]
const postsReducer=(state=posts, action)=>{
    switch(action.type){
        case 'SET_POSTS':{
            return [...action.payload]
        }
        default:{
            return [...state]
        }
    }
}
export default postsReducer