import React, { Component } from "react";
class Navmenu extends Component {
  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/javascript">Javascript</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/angular">Angularjs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/react">Reactjs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/node">Nodejs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/request/tutorial">Request Tutorial</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/add-post">Add Posts</a>
            </li>
          </ul>
        </div>
    </nav>
    );
  }
}

export default Navmenu;