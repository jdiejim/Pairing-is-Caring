import React, { Component } from 'react';
import StudentList from './components/StudentList/StudentList';
import Student from './model/Student';
import {getTags, getSlots, getSlackUsername, namesObjectGenerator} from './helpers/nameGenerator';
import names from './helpers/names';
import './App.css';

let namesObj = namesObjectGenerator(5, names);

let students = namesObj.map(e => {
  return new Student(e, getSlackUsername(e), getTags(), getSlots());
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <StudentList students={students} />
      </div>
    );
  }
}

export default App;
