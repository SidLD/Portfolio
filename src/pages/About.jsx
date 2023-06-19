import React from 'react'
import {ThemeContext} from '../lib/ThemeContext'
function About() {
    const skills = [
        {
            title: "Full Stack Java & REST",
            icon: <i className="fa-brands fa-java fa-xl"></i>,
            description: " A full-stack Java developer is a web programmer who uses Java, a popular computer programming language. These professionals write code in all three layers of a web-based application: the front-end, the back-end and the database layer"
        },
        {
            title: "HTML",
            icon: <i className="fa-brands fa-html5 fa-xl"></i>,
            description: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
        },
        {
            title: "CSS",
            icon: <i className="fa-brands fa-css3-alt fa-xl"></i>,
            description: "Cascading Style Sheets (CSS) is a simple mechanism for adding style (e.g., fonts, colors, spacing) to Web documents. "
        },
        {
            title: "Javascript",
            icon: <i className="fa-brands fa-square-js fa-xl"></i>,
            description: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
        }, {
            title: "Reactjs",
            icon: <i className="fa-brands fa-react fa-xl"></i>,
            description: "The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript"
        }, {
            title: "Vuejs",
            icon: <i className="fa-brands fa-vuejs fa-xl"></i>,
            description: "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. "
        }, {
            title: "Expressjs",
            icon: <i className="fa-brands fa-node"></i>,
            description: "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License."
        }, {
            title: "PHP",
            icon: <i className="fa-brands fa-php fa-xl"></i>,
            description: "PHP is a server-side scripting language that is widely used for web development and business application. The open-source tools and high running speed make PHP one of the most preferred languages for creating interactive websites and web applications."
        }, {
            title: "LARAVEL",
            icon: <i className="fa-brands fa-laravel fa-xl"></i>,
            description: "Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as authentication, routing, sessions, and caching. Laravel aims to make the development process a pleasing one for the developer without sacrificing application functionality."
        }, {
            title: "Python",
            icon: <i className="fa-brands fa-python fa-xl"></i>,
            description: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation via the off-side rule. Python is dynamically typed and garbage-collected."
        }, {
            title: "Flask",
            icon: <i className="fa-solid fa-flask fa-xl"></i>,
            description: "Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions."
        }, {
            title: "MongoDB",
            icon: <i className="fa-solid fa-server fa-xl"></i>,
            description: "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. "
        }, {
            title: "SQL",
            icon: <i className="fa-solid fa-database fa-xl"></i>,
            description: "Structured Query Language, is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system."
        }, {
            title: "Postgressql",
            icon: <i className="fa-sharp fa-solid fa-database fa-xl"></i>,
            description: "It is a highly stable database management system, backed by more than 20 years of community development which has contributed to its high levels of resilience, integrity, and correctness."
        }, {
            title: "Photoshop",
            icon: <i className="fa-solid fa-photo-film-music fa-xl"></i>,
            description: "Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS."
        }, {
            title: "Illustrator",
            icon: <i className="fa-solid fa-photo-film-music fa-xl"></i>,
            description: "Adobe Illustrator is a vector graphics editor and design program developed and marketed by Adobe Inc."
        }, {
            title: "Microsoft Office Skills",
            icon: <i className="fa-brands fa-microsoft fa-xl"></i>,
            description: "Specific skills for programs like Excel or PowerPoint, especially for jobs that require sorting, analyzing and displaying data or creating and delivering presentations."
        },


    ]

    return (
        <ThemeContext.Consumer>{
            (context) => {
                const {isLightTheme, light, dark } = context
                const theme = isLightTheme ? light: dark;
                return (
                    <div className='about-me parallax' id='about'>
                        <h2 className='intro-title animate-charcter'>About Me</h2>
                        <div className='intro'>
                            <div className='card' style={{backgroundColor: theme.backgroundColor}}>
                                <div className="card-img">
                                    <img src={theme.cardBackgroundImg}
                                        alt='profile'/>
                                </div>
                                <div className="landing-page">
                                    <div className="profile-img ">
                                        <img src={theme.profile}
                                            alt='profile'
                                            className='hover-underline-animation'
                                            style={theme.profileDesign}
                                            />
                                    </div>
                                    <div className="card-content container">
                                        <h3 className='typed ' style={{color:theme.projectColor}}>
                                            Hi! I'm Cid Libril
                                            <i className="fa-solid fa-hand-wave"></i>
                                        </h3>
                                        <p className='typed'>I'm an aspiring web developer enthusiast.
                                        </p>
                                        <p className='typed'>As a Computer Science Graduate, I had many experience</p>
                                        <p className='typed'>in developing software usually at the backend</p>
                                        <p className='typed'>where business logic and algorithms usually happens.</p>
                                        <a href="./resume.pdf" className='resume' download>Download my Resume</a>
                                    </div>

                                </div>
                                <div className="skill">
                                    <div className="skill-header">
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>

                                        <h3 className='intro-title animate-charcter'>Skills & Experience in Programming</h3>
                                    </div>

                                    <div className="skill-container">

                                        {
                                        skills.map((skill, index) => 
                                        <div className="skill-box"
                                            id={index}
                                            key={index}
                                            style={{
                                                border: theme.skillBorder,}}
                                            >
                                            <div className="skill-title" >
                                                <div className="skill-img " style={{color: theme.color}}>
                                                    {skill.icon} </div>
                                                <h3 className='hover-underline-animation' style={{color:theme.color}}>
                                                    { skill.title }</h3>
                                            </div>
                                            <p className="skill-description" style={{color: theme.color}}>
                                                {skill.description}</p>
                                        </div>)
                                    } </div>
                                    <ul></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }</ThemeContext.Consumer>

    )
}

export default About
