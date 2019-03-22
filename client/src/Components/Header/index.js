import React, { Component } from "react";
class Home extends Component {
  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Javascript</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Angularjs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Reactjs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Nodejs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Request Tutorial</a>
            </li>
          </ul>
        </div>
    </nav>
    );
  }
}

export default Home;