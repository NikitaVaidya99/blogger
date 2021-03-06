import axios from 'axios'

export const setUsers=(users)=>{
    // console.log(users)
    return {
        type:'SET_USERS',
        payload:users
    }
}

export const startSetUsers=()=>{
    return (dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{          
            const users=response.data          
           dispatch(setUsers(users))
        })
    }
}