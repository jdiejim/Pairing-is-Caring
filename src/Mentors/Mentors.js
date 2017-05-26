import React, { Component } from 'react';
import moment from 'moment';
import { getStudentInfo, namesObjectGenerator } from '../helpers/nameGenerator';
import Mentor from '../model/Mentor';
import MENTORS from '../data/mentorsDB';
import Aside from './components/AsideNav/AsideNav';
import MentorsMain from './components/MentorsMain/MentorsMain';
import './Mentors.css';

class Mentors extends Component {
  constructor() {
    super();
    this.state = {
      today: moment(),
      todayStatic: moment(),
      daysArray: [],
      monthTitle: '',
      mentors: MENTORS.map(e => new Mentor(e))
    }
  }

  componentDidMount() {
    this.setState({
      daysArray: this.getMonthDaysArray(),
      monthTitle: this.state.today.format('MMMM YYYY'),
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

  render() {
    const {daysArray, monthTitle, todayStatic, mentors} = this.state;

    const handlers=  {
      next: this.nextMonth.bind(this),
      previous: this.previousMonth.bind(this),
    }

    return (
      <div className="Mentors">
        <Aside calendar={daysArray} handlers={handlers} month={monthTitle} />
        <MentorsMain today={todayStatic} mentors={mentors} />
      </div>
    );
  }
}

export default Mentors;
