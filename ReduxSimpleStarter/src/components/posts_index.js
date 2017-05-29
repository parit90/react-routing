import React, {Component} from 'react';
import { fetchPost } from './actions/index';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';

class PostIndex extends Component{
    componentWillMount(){
        this.props.fetchPost();
    }
    renderPost(){
        return this.props.posts.map((posts)=>{
            return (
                <li className="list-group-item" key={posts.id}>
                    <Link to={"posts/"+ posts.id}>
                        <span className="pull-xs-right">{posts.categories}</span>
                        <strong>{posts.title}</strong>
                    </Link>
                </li>
            )   
        })
    }
    render(){
        return(
            <div>
                <div className = "text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPost()}
                </ul>
                {/*{this.props.children}*/}
            </div>
        )
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchPost},dispatch);
}

function mapStateToProps(state){
    
    return {posts: state.post.all}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);

// shortcut for above mapDispatchToProps
// export default connect(null, {fetchPost:fetchPost})(PostIndex);

