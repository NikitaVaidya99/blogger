const comments=[]

const commentsReducer=(state=comments, action)=>{
    switch(action.type){
        case 'SET_COMMENTS':{
           // console.log('111',action.payload)
            return [...action.payload]
        }
        default:{
            return state
        }
    }
}
export default commentsReducer