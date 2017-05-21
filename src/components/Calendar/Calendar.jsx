import React, {Component} from 'react';
import left from '../../assets/left-arrow.svg';
import right from '../../assets/right-arrow.svg';
import './Calendar.css'

class Calendar extends Component {
  render() {
    const leftArrow = {
      backgroundImage: `url(${left})`
    }

    const rightArrow = {
      backgroundImage: `url(${right})`
    }

    return (
      <table className='calendar'>
        <thead className='table-header'>
          <tr className='header-row'>
            <th className='calendar-header'>
              <div className='arrow' style={leftArrow}></div>
            </th>
            <th className='calendar-header' colSpan='5'>
              <h4 className='month'>May 2017</h4>
            </th>
            <th className='calendar-header'>
              <div className='arrow' style={rightArrow}></div>
            </th>
          </tr>
        </thead>
        <tr className='days-week'>
          <td className='day-name'>S</td>
          <td className='day-name'>M</td>
          <td className='day-name'>T</td>
          <td className='day-name'>W</td>
          <td className='day-name'>T</td>
          <td className='day-name'>F</td>
          <td className='day-name'>S</td>
        </tr>
        <tr className='days-week'>
          <td className='day out-of-range'>30</td>
          <td className='day'>1</td>
          <td className='day'>2</td>
          <td className='day'>3</td>
          <td className='day'>4</td>
          <td className='day'>5</td>
          <td className='day'>6</td>
        </tr>
        <tr className='days-week'>
          <td className='day'>7</td>
          <td className='day'>8</td>
          <td className='day'>9</td>
          <td className='day'>10</td>
          <td className='day'>11</td>
          <td className='day'>12</td>
          <td className='day'>13</td>
        </tr>
        <tr className='days-week'>
          <td className='day'>14</td>
          <td className='day'>15</td>
          <td className='day'>16</td>
          <td className='day'>17</td>
          <td className='day'>18</td>
          <td className='day'>19</td>
          <td className='day'>20</td>
        </tr>
        <tr className='days-week'>
          <td className='day'>21</td>
          <td className='day'>22</td>
          <td className='day'>23</td>
          <td className='day'>24</td>
          <td className='day'>25</td>
          <td className='day'>26</td>
          <td className='day'>27</td>
        </tr>
        <tr className='days-week'>
          <td className='day'>28</td>
          <td className='day'>29</td>
          <td className='day'>30</td>
          <td className='day'>31</td>
          <td className='day out-of-range'>1</td>
          <td className='day out-of-range'>2</td>
          <td className='day out-of-range'>3</td>
        </tr>
      </table>
    )
  }
}

export default Calendar;
