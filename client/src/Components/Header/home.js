import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';
import Grid from '@material-ui/core/Grid';
import Pagination from "react-js-pagination";
import Moment from 'react-moment';
import axios from 'axios';
class Home extends Component {


   constructor(props) {
      super(props);
          this.state = {
            postData: [],
            activePage: 1,
            itemsCountPerPage:1,
            totalItemsCount:1,
            pageRangeDisplayed:4,
            loading:false
          };
          this.handlePageChange=this.handlePageChange.bind(this);

      }

  handlePageChange(pageNumber) {
    this.setState({
      postData:[],
      loading:true
    })
    axios.get('/api/blog/test?page='+pageNumber)
      .then(res => {
        this.setState({
          isLoaded: true,
          postData: res.data.data.docs,
          loading:false,
          itemsCountPerPage:res.data.data.limit,
          totalItemsCount:res.data.data.total,
          activePage:res.data.data.page
        });
        console.log("final data",this.state.postData)
      })
  }

  componentDidMount() {
    
    this.handlePageChange();
  }

  render() {

          if(this.state.loading){
            return(
              
              <p>loading...</p>

              )
          }


    return (
          
            <Grid container className="homecontainer">
 
                 <Grid item lg={2}>
                  </Grid>
                  <Grid className="contentWrite" item xs={12} sm={12} md={8} lg={7} style={{borderRight: '1px solid #deb88742'}}>
                          
                        {this.state.postData.map(function(item, index) {
                               return (


                                             <div className="header" key={index} style={index%2===0?{background:'#fffafa',marginTop:'15px'}:{background:'#f7f7f7',marginTop:'20px'}}>
                                                <h6 style={{color:'#aba9a9'}}><Moment format="D MMM YYYY" withTitle>{item.createdAt}</Moment></h6>


                                                <h3 className="titled">{item.title }</h3>
                                                  <div className="socialmessage">
                                                      <ul>
                                                        <li className="message"><img src="./Images/comment.png"/></li>
                                                        <li>10 comments - Abhinash kumar</li>
                                                        <li><span className="linkdin">

                                                                 <img src="https://res.cloudinary.com/ddkyepakx/image/upload/v1554063596/linkedIn_PNG32.png"style={{width:'3%'}}/><span style={{paddingLeft:'2.5px'}}>share</span>
                                                          </span>
                                                        </li>
                                                        <li>twiter</li>
                                                      </ul>
                                                  </div>


                                                    <div className="bigInt">
                                                      {item.comment}
                                                    </div>
                                                    <div className="cen">
                                                      <img alt="Angular  Route Guards with Child Components " className="bec650" itemprop="image" src={item.blogImages}/>
                                                    </div>
                                              </div>
                                            )
                                         })
                                      }


                  </Grid>

                  <Grid className="profileSide" item xs={12} sm={12} md={4} lg={3}>

                         <div className="aboutme">
                                <img alt="myimage" className="face" src="./Images/profile.jpg" />
                                <h5>Abhinash kumar </h5>
                                <h6>Blogger ,Thinker, Coder</h6>
                                <h6>I love to JavaScript - <b>Nepal</b></h6>
                                <h6><b>Lives in Delhi , India</b> </h6>
                                <h6>pandit.bechu@gmail.com</h6>
                            </div>
                           
                            
                            <div className="subscribe">
                                <div className="widget-title">
                                  <h3 className="title">
                                    Follow By Email
                                  </h3>
                                  </div>
                                   <input className="typeEmail" style={{padding:'2px'}} type="text" placeholder="Enter your email"/>
                                   <button className="subscriberbyemail" type="submit">Susbscribe</button>
                            </div>
                            {/* <hr style={{border:'0.3px solid burlywood',width:'90%'}} /> */}
                            <div className="subscribe">
                                <div className="widget-title">
                                  <h3 className="title">
                                    Social Icons
                                  </h3>
                                </div>
                                <div class="widget-content">
                                  <ul class="social-counter social social-color">
                                      <li className="facebook"><SocialIcon url="http://facebook.com/jaketrent" /></li>
                                      <li className="instagram"><SocialIcon url="http://instagram.com/jaketrent" /></li>
                                      <li className="pinterest"><SocialIcon url="http://twitter.com/jaketrent" /></li>
                                      <li className="reddit"><SocialIcon url="http://reddit.com/jaketrent" /></li>
                                  </ul> 
                                </div>
                            </div>
              
                          <div className="subscribe">
                              <div className="widget-title">
                                <h3 className="title">
                                 Recent post
                                </h3>
                                </div>
                          </div>

                  </Grid>
                    <Grid container>

                          <Grid item xs={4} lg={4}>

                          </Grid>

                          <Grid item xs={4} lg={4} style={{marginTop:'4%'}}>
                              <Pagination
                            hideFirstLastPages
                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.itemsCountPerPage}
                            totalItemsCount={this.state.totalItemsCount}
                            pageRangeDisplayed={this.state.pageRangeDisplayed}
                            itemClass='page-item'
                            linkClass='page-link'
                            onChange={this.handlePageChange}
                          />
                          </Grid>
                          <Grid item xs={4} lg={4}>

                          </Grid>

                    </Grid>
                           

                    
                     

            </Grid>

            
    );
  }
}

export default Home;