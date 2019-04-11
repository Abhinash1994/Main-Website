import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import CKEditor from 'ckeditor4-react';
class Addposts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            categories:'',
            body:'',
            content: '',
            date:'',
            selectedFile:null,
            author:'',
            slug:'',
            tag:''
        };
        // this.fileInput = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSlug = this.handleSlug.bind(this);
        this.handleTag = this.handleTag.bind(this);
         this.handleBody = this.handleBody.bind(this);
        this.handleCategories = this.handleCategories.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.onEditorChange = this.onEditorChange.bind(this);
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
        
      fileSelectedHandler = e =>{
       
        this.setState({
            selectedFile: e.target.files[0]
        });
      }  
      handleChange(event) {
        this.setState({title: event.target.value});
      }
      handleSlug(event) {
        this.setState({slug: event.target.value});
      }
      handleTag(event) {
        this.setState({tag: event.target.value});
      }
       handleBody(event) {
        this.setState({body: event.target.value});
      }
        
         updateContent(e) {
               this.setState( {
                   content: e.target.value
               } );
          }
            onEditorChange( evt ) {
                this.setState( {
                    content: evt.editor.getData()
                } );
            }





      handleDate(e) {
        this.setState({date: e.target.value});
      }  
      handleCategories(e){
            this.setState({categories: e.target.value});
      }
      handleAuthor(e){
            this.setState({author: e.target.value});
      }

      handleSubmit(e) {
         
        e.preventDefault();
      const formData = new FormData();
        formData.append('title',this.state.title);
        formData.append('categories',this.state.categories);
        formData.append('body',this.state.body);
        formData.append('paragraph',this.state.content);
        formData.append('createdAt',this.state.date);
        formData.append('blogImages',this.state.selectedFile);
        formData.append('author',this.state.author);
        formData.append('slug',this.state.slug);
        formData.append('tag',this.state.tag);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
   
        let instance = this;
       
        axios.post('/api/blog/checkpost',formData,config).then(function (response) {
            alert('Form Submitted, We will get in touch with you shortly!');
            instance.setState({formData});
                console.log(response)
            
          })
         .catch(function (error) {
            console.log("error");
             alert('not Submitted, error');
          });

     
      }

  render() {
    
    return (
        
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Paper className="addpostwe">
                    <form onSubmit={this.handleSubmit}>
                        <h1 style={{textAlign:'center',paddingTop:'20px'}}>Add Posts </h1>
                        <div className="form-group titlewe">
                            <h1 style={{paddingTop:'10px',fontSize:'20px'}}>Title : </h1>
                            <input type="text" className="form-control" name="title"
                            placeholder="title"
                            value={this.state.title} onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group titlewe">
                            <h1 style={{paddingTop:'10px',fontSize:'20px'}}>Categories : </h1>
                            <select  className="form-control" value={this.state.categories} onChange={this.handleCategories}>
                                <option value="select">Select an Option</option>
                                <option value="Javascript">Javascript</option>
                                <option value="Angularjs">Angularjs</option>
                                <option value="Reactjs">Reactjs</option>
                                <option value="Nodejs">Nodejs</option>
                                <option value="Tutotial">Tutotial</option>
                            </select>
                            
                        </div>
                        <div className="form-group titlewe">
                            <h1  style={{paddingTop:'10px',fontSize:'20px'}}>ContentPost : </h1>
                            <textarea className="form-control" rows="3" value={this.state.body} onChange={this.handleBody}></textarea>  
                            
                        </div>
                        <div className="form-group titlewe">
                            <h1  style={{paddingTop:'10px',fontSize:'20px'}}>body : </h1>
                              
                            <CKEditor
                            content={this.state.content}
                            onChange={this.onEditorChange} />
                            
                 
                        </div>
                        <div className="form-group titlewe">
                            <h1  style={{paddingTop:'10px',fontSize:'20px'}}>Images : </h1>
                            <input type="file" className="form-control-file" name="blogImages"
                            onChange={this.fileSelectedHandler} />
                        </div>
                        <div className="form-group titlewe">
                            <h1 style={{paddingTop:'10px',fontSize:'20px'}}>Select Date : </h1>
                            <input type="date" className="form-control-date" value={this.state.date} onChange={this.handleDate}></input>
                        </div>
                        <div className="form-group titlewe">
                            <h1 style={{paddingTop:'10px',fontSize:'20px'}}>Author : </h1>
                            <select  className="form-control" value={this.state.author} onChange={this.handleAuthor}>
                                <option value="select">Select an Option</option>
                                <option value="Abhinash">By Abhinash Kumar</option>
                                <option value="Kumar">Bechu Kumar</option>
                            </select>
                        </div>
                        <div className="form-group titlewe">
                            <h1 style={{paddingTop:'10px',fontSize:'20px'}}>URL/Slug : </h1>
                            <input type="text" className="form-control" name="title"
                            placeholder="slug"
                            value={this.state.slug} onChange={this.handleSlug}
                            />
                        </div>
                        <div className="form-group titlewe">
                            <h1  style={{paddingTop:'10px',fontSize:'20px'}}>Tags : </h1>
                            <textarea className="form-control" rows="3" value={this.state.tag} onChange={this.handleTag}></textarea>  
                        </div>
                        <button type="submit" className="btn btn-primary" style={{marginTop:'10px',marginBottom:'30px',marginLeft:'20px'}} value="Submit" >Send Data</button>
                        
                        </form>
                </Paper>
                </Grid>
            </Grid>
        
    );
  }
}



export default Addposts;