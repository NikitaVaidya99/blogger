import React from 'react';
import Home from './Home'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import UserList from './component/UserList'
import UserPosts from './component/UserPosts'
import AllPosts from './component/AllPosts'
import PostDetails from './component/PostDetails'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to='/home'>Home |</Link>
        <Link to="/UserList">Users |</Link>
        <Link to='/AllPosts'>Posts</Link>
        
      <Route path='/home' component={Home}/>
      <Route path="/UserList" component={UserList}/>
      <Route path="/users/:id" component={UserPosts}/>
      <Route path='/AllPosts' component={AllPosts}/>
      <Route path='/PostDetails/:id' component={PostDetails}/>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
