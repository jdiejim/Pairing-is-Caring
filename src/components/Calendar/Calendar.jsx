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
      <section className='calendar'>
        <header className='calendar-header'>
          <article className='arrow' style={leftArrow}></article>
          <h4 className='month'>May 2017</h4>
          <article className='arrow' style={rightArrow}></article>
        </header>
        <main>
          <section className='days-week'>
            <article className='day day-name'>S</article>
            <article className='day day-name'>M</article>
            <article className='day day-name'>T</article>
            <article className='day day-name'>W</article>
            <article className='day day-name'>T</article>
            <article className='day day-name'>F</article>
            <article className='day day-name'>S</article>
          </section>
          <section className='days-week'>
            <article className='day out'><p>30</p></article>
            <article className='day'><p>1</p></article>
            <article className='day'><p>2</p></article>
            <article className='day'><p>3</p></article>
            <article className='day'><p>4</p></article>
            <article className='day'><p>5</p></article>
            <article className='day'><p>6</p></article>
          </section>
          <section className='days-week'>
            <article className='day'><p>7</p></article>
            <article className='day'><p>8</p></article>
            <article className='day'><p>9</p></article>
            <article className='day'><p>10</p></article>
            <article className='day'><p>11</p></article>
            <article className='day'><p>12</p></article>
            <article className='day'><p>13</p></article>
          </section>
          <section className='days-week'>
            <article className='day'><p>14</p></article>
            <article className='day now'><p>15</p></article>
            <article className='day'><p>16</p></article>
            <article className='day'><p>17</p></article>
            <article className='day'><p>18</p></article>
            <article className='day'><p>19</p></article>
            <article className='day'><p>20</p></article>
          </section>
          <section className='days-week'>
            <article className='day'><p>21</p></article>
            <article className='day'><p>22</p></article>
            <article className='day'><p>23</p></article>
            <article className='day'><p>24</p></article>
            <article className='day'><p>25</p></article>
            <article className='day'><p>26</p></article>
            <article className='day'><p>27</p></article>
          </section>
          <section className='days-week'>
            <article className='day'><p>28</p></article>
            <article className='day'><p>29</p></article>
            <article className='day'><p>30</p></article>
            <article className='day'><p>31</p></article>
            <article className='day out'><p>1</p></article>
            <article className='day out'><p>2</p></article>
            <article className='day out'><p>3</p></article>
          </section>
        </main>
      </section>
    )
  }
}

export default Calendar;

// <table className='calendar'>
//   <thead className='table-header'>
//     <tr className='header-row'>
//       <th className='calendar-header'>
//         <div className='arrow' style={leftArrow}></div>
//       </th>
//       <th className='calendar-header' colSpan='5'>
//         <h4 className='month'>May 2017</h4>
//       </th>
//       <th className='calendar-header'>
//         <div className='arrow' style={rightArrow}></div>
//       </th>
//     </tr>
//   </thead>
//   <tr className='days-week'>
//     <td className='day-name'>S</td>
//     <td className='day-name'>M</td>
//     <td className='day-name'>T</td>
//     <td className='day-name'>W</td>
//     <td className='day-name'>T</td>
//     <td className='day-name'>F</td>
//     <td className='day-name'>S</td>
//   </tr>
//   <tr className='days-week'>
//     <td className='day out-of-range'>30</td>
//     <td className='day'>1</td>
//     <td className='day'>2</td>
//     <td className='day'>3</td>
//     <td className='day'>4</td>
//     <td className='day'>5</td>
//     <td className='day'>6</td>
//   </tr>
//   <tr className='days-week'>
//     <td className='day'>7</td>
//     <td className='day'>8</td>
//     <td className='day'>9</td>
//     <td className='day'>10</td>
//     <td className='day'>11</td>
//     <td className='day'>12</td>
//     <td className='day'>13</td>
//   </tr>
//   <tr className='days-week'>
//     <td className='day'>14</td>
//     <td className='day'>15</td>
//     <td className='day'>16</td>
//     <td className='day'>17</td>
//     <td className='day'>18</td>
//     <td className='day'>19</td>
//     <td className='day'>20</td>
//   </tr>
//   <tr className='days-week'>
//     <td className='day'>21</td>
//     <td className='day'>22</td>
//     <td className='day'>23</td>
//     <td className='day'>24</td>
//     <td className='day'>25</td>
//     <td className='day'>26</td>
//     <td className='day'>27</td>
//   </tr>
//   <tr className='days-week'>
//     <td className='day'>28</td>
//     <td className='day'>29</td>
//     <td className='day'>30</td>
//     <td className='day'>31</td>
//     <td className='day out-of-range'>1</td>
//     <td className='day out-of-range'>2</td>
//     <td className='day out-of-range'>3</td>
//   </tr>
// </table>
