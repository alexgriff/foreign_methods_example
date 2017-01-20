import React, { Component }  from 'react';
import LabButton from './LabButton';


class Student extends Component{
  render() {
    return (
      <li className={this.props.style}>
        <h2>{this.props.studentInfo.name}</h2>
        <h3>{this.props.labsCompleted}</h3>
        <LabButton
          studentIndex={this.props.studentIndex}
          onClick={this.props.onClick}
          numLabs={this.props.labsCompleted} />
      </li>
    )
  }
}

export default Student;
