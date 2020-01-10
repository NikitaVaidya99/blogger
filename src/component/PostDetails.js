import React from 'react'
//import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function PostDetails(props){
   // componentDidMount(){
        
    //     axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
    //     .then((response)=>{
    //         const name=response.data.name
    //         this.setState({name})
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })

    //     axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
    //     .then((response)=>{
    //         console.log(this.props.match.params.id)
    //         const title=response.data.title
    //         const body=response.data.body
    //         this.setState({title,body})
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    //     axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.id}`)
    //     .then((response)=>{
    //         console.log(this.props.match.params.id)
    //         const comments=response.data
    //         console.log(comments)  
    //         this.setState({comments})
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // }

   // render(){
   // console.log('ji',props.post)
        return(
            
            <div>
                
                <h2>Comments</h2>
                <ul>
                {(props.comments) &&

                <div>
                   {(props.user) && <h2>Name-{props.user.name}</h2>}
                   {(props.post) && <h3><u>Title</u>-{props.post.title}</h3>}
                   {(props.post) && <h3><u>Body</u>-{props.post.body}</h3>}
                <hr/>
                   { props.comments.map((comment)=>{
                        return(
                            <li key={comment.id}>{comment.body}</li>
                        )
                    })}
                </div>
                }

                </ul>
                <hr/>
                {/* <Link to={`/users/${this.props.match.params.id}`}>More posts by {props.name}</Link> */}
            </div>
        )
    }
//}

const mapStateToProps=(state, props)=>{
   console.log('i',state)
    const id=props.match.params.id
    return {
       user:state.users.find(u=>u.id==id),
       post:state.posts.find(p=>p.id==id),
        comments:state.comments.filter(c=>c.postId==id)
    }
}

export default connect(mapStateToProps)(PostDetails)