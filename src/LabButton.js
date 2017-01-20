import React from 'react';

export default (props) => {

  const displayText = props.numLabs >= 5 ? "Wow so many labs" : "Do more labs"

  return (
    <button
      onClick={() => props.onClick(props.studentIndex)} >
      { displayText }
    </button>
  )
}
