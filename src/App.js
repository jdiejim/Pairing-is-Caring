import React, { Component } from 'react';
import moment from 'moment';
import Aside from './components/AsideNav/AsideNav';
import StudentList from './components/StudentList/StudentList';
import Student from './model/Student';
import {getRandomNumber, getTags, getSlots, getSlackUsername, namesObjectGenerator} from './helpers/nameGenerator';
import names from './helpers/names';
import './helpers/dateHelpers';
import './App.css';

let namesObj = namesObjectGenerator(5, names);

let students = namesObj.map(e => {
  return new Student(e, getSlackUsername(e), getTags(), getSlots(), getRandomNumber(4));
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      today: moment(),
      todayStatic: moment(),
      daysArray: [],
      monthTitle: '',
      updateMonth: {next: this.nextMonth.bind(this), previous: this.previousMonth.bind(this), select: this.selectDate.bind(this)}
    }
  }

  componentDidMount() {
    this.setState({
      daysArray: this.getMonthDaysArray(),
      monthTitle: this.state.today.format('MMMM YYYY')
    })
  }

  getStartingDate() {
    const date = moment(`${this.state.today.format('YYYY/MMMM')}/01`);

    return date.subtract(date.format('e'), 'day');
  }

  getMonthDaysArray() {
    const currentMonth = this.state.today.format('M');
    const startingDate = this.getStartingDate();
    const array = [];

    for (let i = 0; i < 42; i++) {
      array.push({
        day: startingDate.format('D'),
        month: startingDate.format('M'),
        year: startingDate.format('YYYY'),
        date: startingDate.format('MM/DD/YYYY'),
        currentMonth: currentMonth,
        today: this.state.todayStatic.format('MM/DD/YYYY')
      });
      startingDate.add(1, 'day');
    }
    return array;
  }

  nextMonth(e) {
    let next = this.state.today.add(1, 'month');

    this.setState({
      today: next,
      daysArray: this.getMonthDaysArray(),
      monthTitle: this.state.today.format('MMMM YYYY')
    })
  }

  previousMonth(e) {
    let previous = this.state.today.subtract(1, 'month');

    this.setState({
      today: previous,
      daysArray: this.getMonthDaysArray(),
      monthTitle: this.state.today.format('MMMM YYYY')
    })
  }

  selectDate(e) {
    let selected = e.target.dataset.day;

    this.setState({
      todayStatic: moment(selected),
      daysArray: this.getMonthDaysArray(),
      monthTitle: this.state.today.format('MMMM YYYY')
    })
  }

  render() {
    return (
      <div className="App">
      <Aside calendar={this.state.daysArray} handlers={this.state.updateMonth} month={this.state.monthTitle} />
        <main className='main'>
          <header className='header'>
            <h1 className='day-title'>{this.state.todayStatic.format('dddd')}</h1>
            <p className='date-title'>{this.state.todayStatic.format('D MMMM YYYY')}</p>
          </header>
          <StudentList students={students} />
        </main>
      </div>
    );
  }
}

export default App;
