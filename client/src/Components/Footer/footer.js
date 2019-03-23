import React, { Component } from "react";
class Footer extends Component {
  render() {

    return (
 
       <section id="footer">
    <div class="container">
      <div class="row text-center text-xs-center text-sm-left text-md-left">
        <div class="col-xs-12 col-sm-4 col-md-4">
          <h5>Quick links</h5>
          <ul class="list-unstyled quick-links">
            <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Home</a></li>
            <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>About</a></li>
            <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>FAQ</a></li>
            <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Get Started</a></li>
            <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Videos</a></li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4">
          <h5>Categories</h5>
          <ul class="list-unstyled quick-links">
            <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Javascript</a></li>
            <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Angularjs</a>
            </li>
            <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Reactjs</a></li>
            <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Nodejs</a></li>
            <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Tutorial</a></li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4">
          <h5>Subscribe to Blog via Email</h5>
          <ul class="list-unstyled quick-links">
            <li style={{color:'#fff'}}>Want to Learn programming then follow us</li>
            <li style={{color:'#fff',textAlign:'justify'}}>Receive all our future posts instantly in your inbox. Enter your email to enroll.</li>

          </ul>
          <input type="email" name="email" required="required" className="subscribe-field-blog_subscription-4" placeholder="Email Address"/>
          <button type="submit" name="jetpack_subscriptions_widget" className="submitEmail"> Subscribe </button>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
          <ul class="list-unstyled list-inline social text-center">
            <li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-facebook"></i></a></li>
            <li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-google-plus"></i></a></li>
            <li class="list-inline-item"><a href="javascript:void();" target="_blank"><i class="fa fa-envelope"></i></a></li>
          </ul>
        </div>
        
      </div>  
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
          <p><u><a href="#">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
          <p class="h6">&copy All right Reversed.<a class="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Sunlimetech</a></p>
        </div>
        <hr/>
      </div>  
    </div>
  </section>

    );
  }
}

export default Footer;