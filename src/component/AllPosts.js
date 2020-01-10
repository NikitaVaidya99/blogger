import React from 'react'
//import axios from 'axios'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'


function AllPosts(props){
    // constructor(){
    //     super()
    //     this.state={
    //         posts:[]

    //     }
    // }
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then((response)=>{
    //         //console.log('hii',response.data)
    //         const posts=response.data
    //         this.setState({posts})
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // }
        return(
            <div>
                <ul>
                <h2>All posts-{props.posts.length}</h2>
                {
                    (props.posts) &&
                    props.posts.map((post)=>{
                        return (
                            <div>
                                <li key={post.id}><Link to={`/PostDetails/${post.userId}`}>{post.title}</Link></li>
                            </div>
                        )
                    })
                }
            </ul>
            </div>
        )
    
}

const mapStateToProps=(state)=>{
    return {
        posts:state.posts
    }
}

export default connect(mapStateToProps)(AllPosts)