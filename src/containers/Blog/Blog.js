import React, {Component} from 'react';
// import axios from 'axios';
import Posts from './Posts/Posts'
import './Blog.css';
import {Route, NavLink, Switch} from "react-router-dom";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            {/*<li><Link to="/new-post">New Post</Link></li>*/}
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                <Route path="/" exact component={Posts}/>
                {/*<Route path="/" exact render={()=><Posts/>}/>*/}
                {/*switch stopt bij 1 match*/}
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/:postId" exact component={FullPost}/>
                </Switch>
                {/*<section>*/}
                {/*    <FullPost id={this.state.selectedPostId}/>*/}
                {/*</section>*/}
            </div>
        );
    }
}

export default Blog;
