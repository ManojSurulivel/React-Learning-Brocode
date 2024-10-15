//props = read-only properties that are shared between components.
//        props is going to be a JavaScript Object.
//        A parent components can send data to a child components.
//        <Component key=value />

//propTypes = a mechanism that ensures that the passed value
//            is of the correct dataTypes.
//            age: PropTypes.number

//defaultProps = default values for props in case thay are not 
//               passed from parent component
//               name: "Guest"


import React from 'react';
import "./Student.css"
import PropTypes from 'prop-types'

const Student = (props) => {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>age: {props.age}</p>
      <p>Student: {props.isStudent ? "YES" : "NO"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
}

Student.defaultProps = {
  name: "Guest",
  age:0,
  isStudent: false,
}

export default Student;
