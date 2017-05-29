import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostIndex from './components/posts_index';
import CreatePost from './components/posts_new';
import PostsShow from './components/posts_show';

// const Greeting = () =>{
//     return (
//         <div> Hello There!!</div>
//     )
// };

export default(
    // Nested Routing here
    <Route path ="/" component = {App}>
        <IndexRoute component = {PostIndex} />
        <Route path="posts/new" component = {CreatePost} />
        <Route path="posts/:id" component ={PostsShow} />
    </Route>
);