import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from './actions/index';
import { Link } from 'react-router';
import {Router, browserHistory} from 'react-router';
var Loader = require('react-loader');

class CreatePost extends Component{
    // static contexType = {
    //     router: PropTypes.object
    // };

    onSubmit(props){
        // here props are properties of form like title, content and categories
        this.props.createPost(props)
            .then(() =>{
             // blog post has been created, navigate the user to index
             // we will naivagte by calling this.context.router.push with the new
             // path to navigate
             browserHistory.push('/');    
            })
    }

    render(){
        // const handleSubmit = this.props.handleSubmit;
        // const title = this.props.fields.title;
        const {fields:{title, categories, content},handleSubmit} = this.props;
       
        return(
            <div>
            <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create a new post</h3>
                <div className= {`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>
                    <div className="text-help">
                        { title.touched ? error.title : ''}
                    </div>
                </div>

                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                    <div className="text-help">
                        {error.categories}
                    </div>
                </div>

                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <textarea className="form-control" {...content}/>
                    <div className="text-help">
                        {error.content}
                    </div>
                </div>
                <button type = "submit" className="btn btn-submit">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
                {/*<div>
                    <Loader ></Loader>
                </div>*/}
            </div>
        )
    }
}

const error = {};
function validate(values){

    !values.title ? error.title = "Enter The Title" : error.title="";
  
    !values.categories ? error.categories = "Enter The Category" : error.categories=""; 
    
    !values.content ? error.content = "Enter The Content" : error.content="";

    return error;
}

// connect: first argument is mapStateToProps, second argument is mapDispatchToProps
// reduxForm: first argument is form config, second argument is mapStateToProps, third argument is mapDispatchToProps
export default reduxForm({
    form: 'CreateNewForm',
    fields: ['title','categories','content'],
    validate
},null,{createPost})(CreatePost);

//{createPost:createPost} is same as {createPost} in es6 syntax



// manjeet: 9990587878, sector 4-5 market, fountain park