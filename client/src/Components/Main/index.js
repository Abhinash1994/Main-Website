import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../Header/home'
import Angularjs from '../Header/angular'
import Javascript from '../Header/javasript'
import Reactjs from '../Header/reactjs'
import Nodejs from '../Header/nodejs'
import Tutorial from '../Header/tutorial'
import Addposts from '../Header/addPosts'
import Details from '../Details/detailPosts'
export default class Main extends Component {
  render() { 
    return (
    	<main>
		    <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/javascript' component={Javascript}/>
              <Route exact path='/angular' component={Angularjs}/>
              <Route exact path='/react' component={Reactjs}/>
              <Route exact path='/node' component={Nodejs}/>
              <Route exact path='/request/tutorial' component={Tutorial}/>
              <Route exact path='/add-post' component={Addposts}/>
              <Route exact path='/questions/:post_id/:title' component={Details}/>
		    </Switch>
  		</main>
    );
  }
}