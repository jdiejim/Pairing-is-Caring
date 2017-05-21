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
