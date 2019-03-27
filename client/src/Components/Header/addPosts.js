import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
class Addposts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            categories:'',
            comment:'',
            date:'',
            selectedFile:null,
            author:'',
        };
        // this.fileInput = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleCategories = this.handleCategories.bind(this);
        this.handleComment = this.handleComment.bind(this);
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
    
     handleComment(event) {
        this.setState({comment: event.target.value});
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
        formData.append('comment',this.state.comment);
        formData.append('createdAt',this.state.date);
        formData.append('blogImages',this.state.selectedFile);
         formData.append('author',this.state.author);
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
                                <option value="javascript">javascript</option>
                                <option value="angularjs">angularjs</option>
                                <option value="reactjs">reactjs</option>
                                <option value="nodejs">nodejs</option>
                                <option value="tutotial">tutotial</option>
                            </select>
                            
                        </div>
                        <div className="form-group titlewe">
                            <h1  style={{paddingTop:'10px',fontSize:'20px'}}>body : </h1>
                            <textarea className="form-control" rows="5" id="comment" placeholder="comment" 
                            value={this.state.comment} onChange={this.handleComment}></textarea>
                        </div>
                        <div className="form-group titlewe">
                            <h1  style={{paddingTop:'10px',fontSize:'20px'}}>Images : </h1>
                            <input type="file" className="form-control-file" name="blogImages"
                            onChange={this.fileSelectedHandler}/>
                        </div>
                        <div className="form-group titlewe">
                            <h1 style={{paddingTop:'10px',fontSize:'20px'}}>Select Date : </h1>
                            <input type="date" className="form-control-date" value={this.state.date} onChange={this.handleDate}></input>
                        </div>
                        <div className="form-group titlewe">
                            <h1 style={{paddingTop:'10px',fontSize:'20px'}}>Author : </h1>
                            <select  className="form-control" value={this.state.author} onChange={this.handleAuthor}>
                                <option value="select">Select an Option</option>
                                <option value="Abhinash">Abhinash</option>
                                <option value="Kumar">Kumar</option>
                            </select>
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