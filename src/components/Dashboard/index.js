import React from 'react';
import ScreenHeader from '../ScreenHeader';
import './Dashboard.css';
import logo from '../../cms-logo.png';

const Dashboard = ({details, demo}) => {
  return (
    <div className="Home">
      <div className="Background"></div>
      <div className="Home-text">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="Screen-title">Service for CMSSW Docker image building</h1>
        <p>Build your CMS docker images!</p>
      </div>
    </div>
  );
}

export default Dashboard;