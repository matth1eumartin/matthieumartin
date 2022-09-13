import React from 'react'
import './education.css'
import education from '../../img/education.png'

const Education = () => {
  return (
    <div className='ed' id="education">
        <div className="ed-left">
                <div className="ed-card">
                    <img 
                        src={education} 
                        alt="" 
                        className="ed-img" 
                    />
                </div>
            </div>
            <div className="ed-right">
                <h1 className="ed-title">Education</h1>
                <br></br>
                <h2 className='ed-subtitle'>The University of Edinburgh, Master of Informatics (mInf) | 2021 - 2026</h2>
                <div className="ed-desc-1">
                    <br></br>
                    <h3>Year 1 | 2021/22</h3>
                    <h4>Semester 1</h4>
                    <p>I took classes in Functional Programming & Computer Logic, Linear Algebra and Astronomy, and finished the 
                        semester with a 2:1, with a highlight being achieving a 1:1 in Functional Programming & Computer Logic thanks to 
                        a grade of 91% in Functional Programming, as well as achieving 88% in coursework for Astronomy.</p>
                    <br></br><h4>Semester 2</h4>
                    <p>I took classes in Object Oriented Programming, Calculus and Cognitive Science. I also finished this semester with a 2:1,
                        ultimately finishing the year with a 2:1 and being allowed to progress to Year 2.
                    </p>
                    <br></br><h3>Year 2 | 2022/23</h3>
                    <p>This year I will undertake courses in Algorithms and Data Structures, Data Science, Discrete Mathematics & Probability,
                        Computer Systems, Reasoning & Agents and Software Engineering & Professional Practice.
                    </p>
                    <br></br><br></br>
                </div>
                <h2 className='ed-subtitle'>Holy Rood RC Highschool | Class of 2021</h2>
                <p className="ed-desc-2">
                <br></br>
                    I attended my local State School, ranked 259th out of the 340 schools in Scotland for academic achievement (according to the Times
                    Scottish School Ranking). During my 6 years, I achieved:
                    <ul><li>8A's at National 5 in 2019</li>
                        <li>6A's and 1B at Higher in 2020 (two courses self studied during the pandemic)</li>
                        <li>2A's at Advanced Higher in 2021</li></ul>
                    <br></br>
                    This led me to being awarded the schools awards for academic achievement every year I was eligible. On top of this, during my time
                    at school I also attended the table tennis club, acted as a School Prefect and achieved the Caritas Award for Volunteering from the
                    Scottish Catholic Education Service. Having built good teaching skills tutoring maths, I helped out the sole Computing Science teacher for a school of
                    1100 students and helped tutor the National 5 and Higher Computer Science classes during my 6th year. Those classes went on to achieve one of the highest attainment records for Computer Science in the schools history.
                </p>
            </div>
    </div>
  )
}

export default Education;