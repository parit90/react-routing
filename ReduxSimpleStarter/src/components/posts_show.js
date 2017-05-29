import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSinglePost } from './actions/index';


class PostsShow extends Component{
    componentWillMount(){
        this.props.fetchSinglePost(this.props.params.id);
    }
    render(){
        if(!this.props.posts){
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Post Title: <strong> {this.props.posts.title} </strong></h3>
                <div className="category-div">
                    <h5>Post Category: <strong> {this.props.posts.categories}</strong></h5>
                </div>   
                <div className="post-content">
                     <strong>Content:</strong><h6>{this.props.posts.content}</h6>
                </div>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchSinglePost},dispatch);
}

function mapStateToProps(state){
    console.log("|||||||",state.post.post)
    return {posts: state.post.post}
}


export default connect(mapStateToProps,mapDispatchToProps)(PostsShow);