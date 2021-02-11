import React, { Component } from 'react';
import {  
  BrowserRouter as Router,
  Route, 
  Switch,
} from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
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
