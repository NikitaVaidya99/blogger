import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function UserPosts(props){
    // componentDidMount(){
    //     //${this.props.matches.params}
    //     //console.log(this.props.match.params.id)
    //     axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
    //     .then((response)=>{
    //         const name=response.data.name
    //         this.setState({name})
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })

    //     // axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`)
    //     // .then((response)=>{
    //     //     const posts=response.data
    //     //     this.setState({posts})
    //     // })
    //     // .catch((err2)=>{
    //     //     console.log(err2)
    //     // })

    // }
   
     //   console.log(this.props)
        return(
            <div>
              
               {(props.user) && <h2>Name of author- {props.user.name}</h2>}
                <h3>Posts written by user</h3>
                <ul>
                { (props.post) &&
                    props.post.map((post)=>{
                        return(
                            <div>
                                <li key={post.id}><Link to={`/PostDetails/${post.userId}`}>{post.title}</Link></li>
                            </div>
                        )
                    })
                }
            </ul>
            <Link to="/UserList">Back</Link>

            </div>
        )

    
}
const mapStateToProps=(state,props)=>{
    
    const id=props.match.params.id
    //console.log('hi',state.posts)
    return {
       user:state.users.find(u=>u.id==id),
        post:state.posts.filter(post=>post.userId==id)
    }
}
export default connect(mapStateToProps)(UserPosts)