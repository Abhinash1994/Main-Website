import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
            <Grid item lg={2}></Grid>
            <Grid item lg={8}>
                <Paper>
                    hey
                </Paper>
            </Grid>
            <Grid item lg={2}></Grid>

       </Grid>
            
       
    );
  }
}

export default Details;