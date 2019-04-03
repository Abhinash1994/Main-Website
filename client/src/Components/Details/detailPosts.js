import React, { Component } from 'react';
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

  componentDidMount() {
    let id =this.props.match.params.post_id;
    this.setState({
      id:id
    })
    axios.get('/api/blog/test'+id)
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
          <h1> {this.state.id}</h1>
        </div>
            
       
    );
  }
}

export default Details;