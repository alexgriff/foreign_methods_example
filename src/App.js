import React, { Component } from 'react';
import logo from './logo.svg';
import Cohort from './Cohort';
import './App.css';


class App extends Component {
  render() {
    const { cohortName, students } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Cohort cohortName={cohortName} students={students} />
      </div>
    );
  }
}

export default App;
