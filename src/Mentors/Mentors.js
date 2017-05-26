import React, { Component } from 'react';
import moment from 'moment';
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
      mentors: MENTORS.map(e => new Mentor(e)),
      search: ''
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

  searchMentor(event) {
    let value = event.target.value;
    let mentors = this.state.mentors.filter(e => {
      console.log(e.tags.map(t => t.toLowerCase()).join(' '));
      return e.name.toLowerCase().includes(value) ||
             e.location.toLowerCase().includes(value) ||
             e.tags.map(t => t.toLowerCase()).join(' ').includes(value);
    });

    if (value === '') {
      this.setState({
        mentors: MENTORS.map(e => new Mentor(e))
      })
    } else {
      this.setState({
        mentors: mentors
      })
    }
  }

  render() {
    const {daysArray, monthTitle, todayStatic, mentors} = this.state;

    const handlers=  {
      next: this.nextMonth.bind(this),
      previous: this.previousMonth.bind(this),
      searchMentor: this.searchMentor.bind(this)
    }

    return (
      <div className="Mentors">
        <Aside calendar={daysArray} handlers={handlers} month={monthTitle} />
        <MentorsMain today={todayStatic} handlers={handlers} mentors={mentors} />
      </div>
    );
  }
}

export default Mentors;
