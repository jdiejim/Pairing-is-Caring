import React, { Component } from 'react';
import Aside from './components/AsideNav/AsideNav';
import StudentList from './components/StudentList/StudentList';
import Student from './model/Student';
import {getRandomNumber, getTags, getSlots, getSlackUsername, namesObjectGenerator} from './helpers/nameGenerator';
import names from './helpers/names';
import './App.css';

let namesObj = namesObjectGenerator(5, names);

let students = namesObj.map(e => {
  return new Student(e, getSlackUsername(e), getTags(), getSlots(), getRandomNumber(4));
});

class App extends Component {
  render() {
    return (
      <div className="App">
      <Aside />
        <StudentList students={students} />
      </div>
    );
  }
}

export default App;
