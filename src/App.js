import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DashboardContainer from './container/DashboardContainer'
import RequestImageContainer from './container/RequestImageContainer'
import AvailableImageContainer from './container/AvailableImageContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="Content">
          <Switch>
            <Route exact path="/" component={DashboardContainer}/>
            <Route exact path="/request-an-image" component={RequestImageContainer}/>
            <Route exact path="/available-images" component={AvailableImageContainer}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
