import React, { Component } from 'react';
import Navmenu from './Components/Header/nav-menu'
import Main from './Components/Main';
import Footer from './Components/Footer/footer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navmenu />
         <Main className="marginTop" />
   			  <Footer />
      </div>
    );
  }
}

export default App;
