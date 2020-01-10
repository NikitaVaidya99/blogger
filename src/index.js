import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import configStore from './store/configStore'
import {Provider} from 'react-redux'

import {startSetUsers} from './actions/users' 
import {startSetPosts} from './actions/posts' 
import {startSetComments} from './actions/comments'


const store=configStore()
console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(startSetUsers())

store.dispatch(startSetPosts())

store.dispatch(startSetComments())


const jsx=(
        <Provider store={store}>
        <App/>
        </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
