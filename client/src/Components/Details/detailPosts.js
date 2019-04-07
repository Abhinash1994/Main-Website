import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
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
          
        });
        console.log("detail",this.state.postData)
      })
      .catch(function(err){
        console.log(err);
       });
  }
  render() {
    let data=this.state.postData;
    return (
       <Grid container className="homecontainer">

        
          <h1>{data.title}</h1>
          <h1>{data.author}</h1>

       </Grid>
            
       
    );
  }
}

export default Details;