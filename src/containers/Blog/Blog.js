import React, {Component} from 'react';
// import axios from 'axios';
import Posts from './Posts/Posts'
import './Blog.css';
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
// import NewPost from "./NewPost/NewPost";
import asyncComponent from "../../hoc/asyncComponent";

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
})

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" exact>Posts</NavLink></li>
                            {/*<li><Link to="/new-post">New Post</Link></li>*/}
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>


                {/*switch stopt bij 1 match*/}
                <Switch>
                    <Route path="/new-post" component={AsyncNewPost}/>
                    {/*<Route path="/:postId" exact component={FullPost}/>*/}
                    <Route path="/posts" component={Posts}/>
                    {/*<Route path="/" exact render={()=><Posts/>}/>*/}
                    <Redirect from="/" to="/posts"/>
                    {/*<Route render={()=><h1>Not found</h1>}/>*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;
