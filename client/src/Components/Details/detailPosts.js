import React, { Component } from 'react';
import axios from 'axios';
class Details extends Component {

	 constructor(props) {
      super(props);
          this.state = {
            postData: [],
            
            loading:false
          };

      }

  

  componentDidMount() {
    axios.get('/api/blog/test?')
      .then(res => {
        this.setState({
          isLoaded: true,
          postData: res.data.data.docs,
          loading:false,
         
        });
        console.log("detaildata",this.state.postData)
      })
  }
  render() {
    return (
        <div className="container">
          <h1> details</h1>
        </div>
            
       
    );
  }
}

export default Details;