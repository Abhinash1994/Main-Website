import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';
import Grid from '@material-ui/core/Grid';
import Pagination from "react-js-pagination";
import axios from 'axios';
class Home extends Component {

  state = {
    postData: [],
    activePage: 15
  }
  componentDidMount() {
    axios.get('/api/blog/test')
      .then(res => {
        this.setState({
          isLoaded: true,
          postData: res.data.data
        });
        console.log("final data",this.state.postData)
      })
  }

 
  render() {

    return (
          
            <Grid container>
 
                 <Grid item lg={2}>
                  </Grid>
                  <Grid className="contentWrite" item xs={12} sm={12} md={8} lg={6} style={{borderRight: '1px solid #d86a6a',background:'#fff'}}>
                          
                        {this.state.postData.map(function(item, index) {
                               return (


                                             <div className="header" key={index}>
                                                <h3>{item.title}</h3>
                                                  <div className="socialmessage">
                                                      <ul>
                                                        <li className="message"><img src="./Images/comment.png"/></li>
                                                        <li>10 comments - Abhinash kumar</li>
                                                        <li><span className="linkdin">share</span></li>
                                                        <li>twiter</li>
                                                      </ul>
                                                  </div>


                                                    <div className="bigInt" itemprop="description">
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

                  <Grid className="profileSide" item xs={12} sm={12} md={4} lg={4}>

                         <div className="aboutme">
                                <img alt="myimage" className="face" src="./Images/profile.jpg" />
                                <h5>Abhinash kumar </h5>
                                <h6>Blogger ,Thinker, Coder</h6>
                                <h6>I love to JavaScript - <b>Nepal</b></h6>
                                <h6><b>Lives in Delhi , India</b> </h6>
                                <h6>pandit.bechu@gmail.com</h6>
                            </div>
                            <div className="widget"><a href="https://github.com/Abhinash1994" className="btn" aria-label="Follow @Abhinash1994 on GitHub"><svg version="1.1" width="14" height="14" viewBox="0 0 16 16" class="octicon octicon-mark-github" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg> <span>Follow Me on GitHub @Abhinash1994</span></a></div>
                            
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
                                    Socila Icons
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
            </Grid>

            
    );
  }
}

export default Home;