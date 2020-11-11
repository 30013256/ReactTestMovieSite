import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Errorpage from './components/pages/Errorpage';
import Home from './components/pages/Home';
import About from './components/pages/About';
import MovieList from './components/pages/MovieList';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header/>                             
          <Switch>           
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/movielist" component={MovieList}/>
            <Route path="/" component={Errorpage}/>
          </Switch>
        </Router>
      </React.Fragment>     
    );
  }
}

export default App;
