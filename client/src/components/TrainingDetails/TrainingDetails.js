import React from 'react'
import './TrainingDetail.css'
import { Link } from 'react-router-dom'

const TrainingDetails = ({ trainingDetail }) => {
  const schedules = [
    {
      day: 'Monday',
      time: '7:00 AM - 8:00 AM',
    },
    {
      day: 'Tuesday',
      time: '8:00 AM - 9:00 AM',
    },
    {
      day: 'Wednesday',
      time: '10:00 AM - 11:00 AM',
    },
    {
      day: 'Thursday',
      time: '12:00 PM - 1:00 PM',
    },
    {
      day: 'Friday',
      time: '7:00 AM - 8:00 AM',
    },
    {
      day: 'Sunday',
      time: '7:00 AM - 8:00 AM',
    },
  ]

  return (
    <div className="container row">
      <div
        className="col-md-7 justify-content-center"
        style={{ padding: '50px' }}
      >
        <img
          style={{ height: '500px', width: '500px' }}
          src={trainingDetail.img}
          alt="img"
          fluid
        />
        <p style={{ marginTop: '15px' }}>{trainingDetail.detail}</p>
        <i style={{ color: 'orange' }} class="far fa-check-circle"></i>{' '}
        <small style={{ color: 'gray' }}>Having Slimmer Shapely Thighs</small>
        <br />
        <i style={{ color: 'orange' }} class="far fa-check-circle"></i>{' '}
        <small style={{ color: 'gray' }}>Getting Stronger Body</small> <br />
        <i style={{ color: 'orange' }} class="far fa-check-circle"></i>{' '}
        <small style={{ color: 'gray' }}>Increased Metabolism</small> <br />
        <i style={{ color: 'orange' }} class="far fa-check-circle"></i>{' '}
        <small style={{ color: 'gray' }}>Increased Muscular Endurance</small>{' '}
        <br />
        <i style={{ color: 'orange' }} class="far fa-check-circle"></i>{' '}
        <small style={{ color: 'gray' }}>Maximum Results i nLess Time</small>{' '}
        <br />
        <i style={{ color: 'orange' }} class="far fa-check-circle"></i>{' '}
        <small style={{ color: 'gray' }}>Firm Hips and Tummy</small> <br />
        <Link to="/pricing">
          <div className="joinBtn" id="joinBtn-7">
            <div id="joinBtn-arrow" style={{ color: 'black' }}>
              JOIN NOW
            </div>
            SEE OUR PLANS<i class="fas fa-arrow-right"></i>
          </div>
        </Link>
      </div>

      <div className="col-md-5" style={{ padding: '50px' }}>
        <h2>
          <span style={{ color: '#ffc800' }}>CLASS </span>SCHEDULE
          <hr />
        </h2>
        <div>
          <div className="row">
            {schedules.map((schedule) => (
              <div
                style={{ textAlign: 'center' }}
                className="col-md-5 card dCard dCard-2"
              >
                <h4 style={{ color: '#ffc800' }}>{schedule.day}</h4>
                <p>{schedule.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingDetails
