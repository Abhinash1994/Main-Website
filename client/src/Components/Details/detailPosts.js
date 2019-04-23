import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import axios from 'axios';

import MetaTags from 'react-meta-tags';

class Details extends Component {

	 constructor(props) {
      super(props);
          this.state = {
            id:null,
            name:'',
            gmail:'',
            comment:'',
            postData: [],
            loading:false
          };
          this.handleName = this.handleName.bind(this);
          this.handleGmail = this.handleGmail.bind(this);
          this.handleComment = this.handleComment.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
      } 

 handleNewComment(comment) {
    console.log(comment.text);
  }
  handleName(e){
      this.setState({name:e.target.value});
  }
  handleGmail(e){
      this.setState({gmail:e.target.value});
  }
  handleComment(e){
      this.setState({comment:e.target.value});
  }
  handleSubmit(e) {
        e.preventDefault();
        axios.post('/api/blog/comment-data',{
              name:this.state.name,
              gmail:this.state.gmail,
              comment:this.state.comment,

        }).then(function (response) {
            console.log(response)
            alert("successfull comment")
            
          })
         .catch(function (error) {
            console.log("error");
             alert('not Submitted, error');
          });

  }

  componentDidMount(pageNumber) {
    let id =this.props.match.params.post_id;
    axios.get('/api/blog/test/data/'+id)
      .then(res => {
        this.setState({
          isLoaded: true,
          postData: res.data.data,
          id:id
        });
        console.log("detail",this.state.postData)
      })
      .catch(function(err){
        console.log(err);
       });
  }
  render() {
   
     if(this.state.loading){
            return(
              
              <p>loading...</p>

              )
          }
  
    let data=this.state.postData;

    return (
       <Grid container>
        
            <Grid item lg={1}></Grid>
            <Grid item lg={8}  className="singlePost">
                <h5 className="entrycategories"> {data.categories}</h5>
                <header className="entry-header">
                <h1 className="entry-title" itemprop="headline">{data.title}</h1><p className="entry-meta"><span  itemprop="dateModified" className="entry-time"><Moment format="D MMM YYYY" withTitle>{data.createdAt}</Moment></span> <span className="entry-author" itemprop="author" itemscope="" itemtype="https://schema.org/Person"><span className="entry-author-name" itemprop="name">{data.author}</span></span> <span className="entry-comments-link">6 Comments</span></p>
                </header>

                <p>{data.body}</p>  
                <p> <img className="aligncenter wp-image-294851 size-full lazyloaded" title={data.title} src={data.blogImages} alt="blogimg"/> </p>

                 <div className="contentblock">
                    <p><EditorPreview paragraph={data.paragraph} /></p> 
                </div>
                
                
               
                <Grid container>

                  <Grid item xs={3} lg={2}>
                        <div className="commentbox">
                            <i className="material-icons person">
                                    person
                             </i>
                     
                        </div>
                  </Grid>
                  <Grid item xs={10} lg={10}>

                  <div className="right">
                      <div className="tcm-post-input-container thrive-comments">
                       
                        <textarea className="mainInput" id="tcm-post-content" name="tcm-post-content" placeholder="Enter your comment..." value={this.state.comment} onChange={this.handleComment}></textarea>
                      </div>
                        <div class="tcm-comment-additional-fields" style={{display: 'block'}}>
                          <div class="inner clear-this">
                            
                            <div class="thrive-comments">
                              
                                <p>Comment as a guest:</p>
                               
                                   <input id="tcm-guest-name" className="form-input" type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleName}/>
                                <div class="tcm-error-message"></div>
                                <input id="tcm-guest-email" className="form-input" type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleGmail}/>
                                
                              

                              <button className="save-btn tcm-truncate tcm-transparent tcm-border-color-ac-h" id="submit-comment" data-parent="0" data-level="0" type="submit" onClick={this.handleSubmit}>
                                Submit comment
                              </button>
                            </div>

                            
                          </div>
                        </div>
                      </div>

                  </Grid>

              </Grid>
      

            </Grid>
            <Grid item lg={2}></Grid>

            <MetaTags>
            <title>{data.title}</title>
            <meta name="description" content={data.body} />
            <meta name="keywords" content={data.tag}/>
            <meta property="og:title" content="website" />
        
          </MetaTags> 

       </Grid>
            
       
    );
  }
}
class EditorPreview extends Component {
    render() {
        return (
            <div className="editor-preview">
                
                <div dangerouslySetInnerHTML={ { __html: this.props.paragraph } }></div>
            </div>
        );
    }
}

EditorPreview.defaultProps = {
    paragraph: ''
};

EditorPreview.propTypes = {
    paragraph: PropTypes.string
};


export default Details;