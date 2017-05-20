import React, { Component } from 'react';
import StudentCard from './components/StudentCard/StudentCard';
import Student from './model/Student'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StudentCard
          student={new Student('Juan Diego Jimenez', '@jdiejim', ['React', 'JS', 'jQuery', 'CSS', 'SASS'])}
        />
      </div>
    );
  }
}

export default App;
