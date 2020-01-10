import Axios from "axios"

export const setPosts=(posts)=>{
    return {
        type:'SET_POSTS',
        payload:posts
    }
}

export const startSetPosts=()=>{
    return (dispatch)=>{
        Axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response)=>{
            const posts=response.data
           return dispatch(setPosts(posts))
        })
        .catch((err2)=>{
            console.log(err2)
        })
    }
}