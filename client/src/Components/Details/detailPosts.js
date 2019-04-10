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
            postData: [],
            loading:false
          };

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
    
    console.log(this.props)
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
                <p> <img className="aligncenter wp-image-294851 size-full lazyloaded" title={data.title} src={data.blogImages}/> </p>

                 <div className="contentblock">
                    <p><EditorPreview comment={data.comment} /></p> 
                </div>
                
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
                
                <div dangerouslySetInnerHTML={ { __html: this.props.comment } }></div>
            </div>
        );
    }
}

EditorPreview.defaultProps = {
    comment: ''
};

EditorPreview.propTypes = {
    comment: PropTypes.string
};


export default Details;