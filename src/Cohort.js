import React from 'react';
import Student from './Student';

class Cohort extends React.Component {
  constructor(props) {
    super();
    // [0,0,0,0,0]
    // this.state.labsCompleted = props.students.map(student => 0)
    this.state = {
      labsCompleted: props.students.map(student => 0)
    };
  }

  handleLabClick(index) {
    const newState = this.state.labsCompleted.slice();
    newState[index] += 1

    this.setState({
      labsCompleted: newState
    });
  }

  hasMostLabs(i) {
    const max = Math.max(...this.state.labsCompleted);
    const maxIndex = this.state.labsCompleted.indexOf(max);

    return maxIndex === i ? 'most-labs' : 'not-most-labs'
  }

  render() {
    const studentList = this.props.students.map( (studentInfo, i) => {
      return <Student
        key={i}
        style={this.hasMostLabs(i)}
        studentIndex={i}
        studentInfo={studentInfo}
        labsCompleted={this.state.labsCompleted[i]}
        onClick={this.handleLabClick.bind(this)}/>
    });

    return (
      <div className="Cohort">
        <h1>{this.props.cohortName}</h1>
        <ul>
          { studentList }
        </ul>
      </div>
    )
  }
}

export default Cohort
