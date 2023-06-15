import React from 'react'

//Images
import mob from '../../asset/moborg.png'
import exam from '../../asset/exam.png'
import bmi from '../../asset/BMIAge.png'
import portfolio from '../../asset/portfolio.png'
import tracker from '../../asset/tracker.png'
function Project() {
  const data = [
    {
      img:mob,
      title: 'Mob.org',
      technology: 'Python & Flask',
      github: 'https://github.com/SidLD/MOB'
    },{
      img:tracker,
      title: 'Student Tracker',
      technology: 'Java',
      github: 'https://github.com/SidLD/StudentTracker'
    },
    {
      img:portfolio,
      title: 'Portfolio',
      technology: 'React',
      github: 'https://github.com/SidLD/Portfolio'
    },
    {
      img:mob,
      title: 'Restaurant Management - BackOffice',
      technology: 'Linux, Apache, Mysql, PHP, Laravel, Vue',
      github: 'https://github.com/SidLD/RestaurantManagement'
    },
    {
      img:exam,
      title: 'Student Licensure Mock Exam Web App - Backend',
      technology: 'MongoDB, React, Expressjs',
      github: 'https://github.com/SidLD/moodlev2-backend'
    },
    {
      img:bmi,
      title: 'BMI Data Analysis using K-Means and Time Series Forecasting Algorithm',
      technology: 'Java',
      github: 'https://github.com/SidLD/BMIDataAnalysisUsingKmeans-TimeSeriesForecasting'
    },
    

  ]
  return (
    <div>
      <h2>Projects</h2>
      <div className="skill-container">
            {data.map((project, index)=> 
              <div className="skill-box" key={index}>
                <div className="skill-title">
                  <div className="project-img">
                    <img src={project.img} alt={project.title}/>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.technology}</p>
                  <p><a href={project.github}>Go to Github <i class="fa-brands fa-github"></i></a></p>
                </div>
              </div>
            )}
            
        </div>
    </div>
  )
}

export default Project