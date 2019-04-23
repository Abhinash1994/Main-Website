import React, { Component } from "react";
class Footer extends Component {
  render() {

    return (
 
       <section id="footer">
    <div className="container">
      <div className="row text-center text-xs-center text-sm-left text-md-left">
        <div className="col-xs-12 col-sm-4 col-md-4">
          <h5>Quick links</h5>
          <ul className="list-unstyled quick-links">
            <li><a href="/"><i className="fa fa-angle-double-right"></i>Home</a></li>
            <li><a href="/"><i className="fa fa-angle-double-right"></i>About</a></li>
            <li><a href="/"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
            <li><a href="/"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
            <li><a href="/"><i className="fa fa-angle-double-right"></i>Videos</a></li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4">
          <h5>Categories</h5>
          <ul className="list-unstyled quick-links">
            <li><a href="/"><i className="fa fa-angle-double-right"></i>Javascript</a></li>
            <li><a href="/"><i className="fa fa-angle-double-right"></i>Angularjs</a>
            </li>
            <li><a href="/"><i className="fa fa-angle-double-right"></i>Reactjs</a></li>
            <li><a href="/"><i className="fa fa-angle-double-right"></i>Nodejs</a></li>
            <li><a href="#/"><i className="fa fa-angle-double-right"></i>Tutorial</a></li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4">
          <h5>Subscribe to Blog via Email</h5>
          <ul className="list-unstyled quick-links">
            <li style={{color:'#fff'}}>Want to Learn programming then follow us</li>
            <li style={{color:'#fff',textAlign:'justify'}}>Receive all our future posts instantly in your inbox. Enter your email to enroll.</li>

          </ul>
          <input type="email" name="email" required="required" className="subscribe-field-blog_subscription-4" placeholder="Email Address"/>
          <button type="submit" name="jetpack_subscriptions_widget" className="submitEmail"> Subscribe </button>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
          <ul className="list-unstyled list-inline social text-center">
            <li className="list-inline-item"><a href="/"><i className="fa fa-facebook"></i></a></li>
            <li className="list-inline-item"><a href="/"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="/"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="/"><i className="fa fa-google-plus"></i></a></li>
            <li className="list-inline-item"><a href="/" target="_blank"><i className="fa fa-envelope"></i></a></li>
          </ul>
        </div>
        
      </div>  
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
          <p> BeYondTechz @ 2019 <a href="/" className="linkwebsite">beyondtechz.com</a> Made in Nepal.</p>
          <p className="h6">@ All rights reserved the content is copyrighted to Abhinash kumar pandit </p>
        </div>
        <hr/>
      </div>  
    </div>
  </section>

    );
  }
}

export default Footer;