import React, { Component } from 'react';
import moment from 'moment';
import { getStudentInfo, namesObjectGenerator } from '../helpers/nameGenerator';
import Student from '../model/Student';
import names from '../data/names';
import Aside from './components/AsideNav/AsideNav';
import Schedule from './components/Schedule/Schedule';
import pic from '../assets/user2.svg';
import './App.css';

let user = 'Juan Jimenez'

class App extends Component {
  constructor() {
    super();
    this.state = {
      today: moment(),
      todayStatic: moment(),
      daysArray: [],
      monthTitle: '',
      students: [],
    }
  }

  componentDidMount() {
    this.setState({
      daysArray: this.getMonthDaysArray(),
      monthTitle: this.state.today.format('MMMM YYYY'),
      students: this.getStudents()
    })
  }

  getStartingDate() {
    const date = moment(`${this.state.today.format('YYYY/MMMM')}/01`);

    return date.subtract(date.format('e'), 'day');
  }

  getMonthDaysArray(today) {
    const currentMonth = this.state.today.format('M');
    const startingDate = this.getStartingDate();
    const array = [];

    for (let i = 0; i < 42; i++) {
      array.push({
        day: startingDate.format('D'),
        month: startingDate.format('M'),
        year: startingDate.format('YYYY'),
        date: startingDate.format('MM/DD/YYYY'),
        currentMonth,
        today: today ? today.format('MM/DD/YYYY') : this.state.todayStatic.format('MM/DD/YYYY')
      });
      startingDate.add(1, 'day');
    }
    return array;
  }

  nextMonth() {
    let next = this.state.today.add(1, 'month');

    this.setState({
      today: next,
      daysArray: this.getMonthDaysArray(),
      monthTitle: this.state.today.format('MMMM YYYY')
    })
  }

  previousMonth() {
    let previous = this.state.today.subtract(1, 'month');

    this.setState({
      today: previous,
      daysArray: this.getMonthDaysArray(),
      monthTitle: this.state.today.format('MMMM YYYY')
    })
  }

  selectDate(e) {
    let selected = e.target.dataset.day;
    console.log(selected);
    console.log(this.getMonthDaysArray());
    // let array = [...e.target.classList]

    this.setState({
      todayStatic: moment(selected),
      daysArray: this.getMonthDaysArray(moment(selected)),
      monthTitle: this.state.today.format('MMMM YYYY'),
      students: this.getStudents()
    })

    // if (!array.includes('now')) {
    //   e.target.classList.add('now')
    // }
  }

  getStudents() {
    let namesObj = namesObjectGenerator(names);

    let array = namesObj.map(e => new Student(...getStudentInfo(e)));

    return array;
  }

  reserveSlot(e) {
    let classList = e.target.classList;
    if (classList.contains('available')) {
      e.target.classList.add('clicked');
      e.target.classList.remove('available');
      e.target.innerHTML = `<h1>${user}</h1>`;
      e.target.style.backgroundImage = `url(${pic})`;
      // e.target.children[0].innerText = '';
      console.log(e.target.children);
      console.log(e.target.classList);
    }
  }

  render() {
    const {daysArray, monthTitle, todayStatic, students} = this.state;

    const handlers=  {
      next: this.nextMonth.bind(this),
      previous: this.previousMonth.bind(this),
      select: this.selectDate.bind(this),
      reserve: this.reserveSlot.bind(this)
    }

    return (
      <div className="App">
        <Aside calendar={daysArray} handlers={handlers} month={monthTitle} />
        <Schedule today={todayStatic} students={students} handlers={handlers} />
      </div>
    );
  }
}

export default App;
