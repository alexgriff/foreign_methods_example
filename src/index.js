import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const groupName = "Foriegn Methods"
const students = [
  {name: "Esmery", labsCompleted: 0},
  {name: "Hanna"},
  {name: "Bibi"},
  {name: "Sol"},
  {name: "Wendy"}
]

ReactDOM.render(
  <App cohortName={groupName} students={students} />,
  document.getElementById('root')
);
