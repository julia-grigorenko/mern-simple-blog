import React, { Component } from 'react';
import {  
  BrowserRouter as Router,
  Route, 
  Switch,
} from 'react-router-dom';

import NavBar from './NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/"         component={HomePage}  exact />
              <Route path="/articles/:name"  component={ArticlePage}  />
              <Route path="/articles"     component={ArticlesListPage}  exact/>
              <Route path="/about"    component={AboutPage} exact />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
