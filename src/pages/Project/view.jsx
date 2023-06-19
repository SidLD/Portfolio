import React from 'react'

//Images
import mob from '../../asset/moborg.png'
import exam from '../../asset/exam.png'
import bmi from '../../asset/BMIAge.png'
import portfolio from '../../asset/portfolio.png'
import tracker from '../../asset/tracker.png'
import { ThemeContext } from '../../lib/ThemeContext'
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
    <ThemeContext.Consumer>{(context) => {
      // const {toogleTheme, isLightTheme, light, dark } = context
      // const theme = isLightTheme ? light: dark;
      return(
        <div id='project'>
      <h2 className='intro-title animate-charcter'>Projects</h2>
      <div className="skill-container">
            {data.map((project, index)=> 
              <div className=" project-box skill-box2" key={index}>
                <div className="skill-title">
                  <div className="project-img">
                    <img src={project.img} alt={project.title}/>
                  </div>
                  <h3 className="project-title"><span className=' hover-underline-animation'>{project.title}</span></h3>
                  <p className='project-title'>Technology: {project.technology}</p>
                  <p className='project-tech'><a href={project.github}> Go to Github <i className="fa-brands fa-github"></i></a></p>
                </div>
              </div>
            )}
            
        </div>
    </div>
      )
    }}

    </ThemeContext.Consumer>
  )
}

export default Project