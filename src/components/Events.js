import React from 'react'
import './Events.css'
import day_3 from '../assets/day_3.jpg'
import day_2 from '../assets/day_2.jpg'
import speaker_1 from '../assets/speaker_1.png'
import speaker_2 from '../assets/speaker_2.png'


const Events = () => {
  return (
    <div className='event'>
      <span className='title'>Event</span>
      <div className='event-content'>

        <span className='event-name'><h3>Day 3</h3></span>
        <div className='poster'>
          <img src={speaker_1} alt="speaker 1" />
          <img src={day_3} alt="day 3" />
          <img src={speaker_2} alt="speaker 2" />

        </div>
        <a className="reg-button" href="https://docs.google.com/forms/d/e/1FAIpQLSdq2EoDe8JRW5uBniYG9OPC3lGcQ3mXszfkGhdZ32cYTbhQsg/viewform" target="_blank">Register now</a>
      </div>
    </div>
  )
}

export default Events
