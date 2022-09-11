import "./workexperience.css"
import workexperience from "../../img/workexperience.png"
import waiterwork from "../../img/waiterwork.png"
import education from "../../img/education.png"

const WorkExperience = () => {
    return (
        <div className="we">
            <div className="we-left">
                <div className="we-card">
                    <img 
                        src={workexperience}
                        alt="" 
                        className="we-img" 
                    />
                </div>
                <h2 className="we-subheading">Customer Assistant | May 2022 | Buzz Bingo</h2>
                <p className="we-desc-1">
                    <br></br>The role included waiting tables, working at the front of house to let prospective
                    members make their new accounts, providing float money to bingo players, cleaning the bingo floor and cleaning the dishes in the kitchen.
                </p>
                <h2 className="we-subheading">Volunteer Cashier | October 2020 - January 2022 | British Heart Foundation</h2>
                <p className="we-desc-2">
                    <br></br>This role included working on the till, tidying the shop floor, setting out new merchandise, processing donated stock and signing customers up
                    to the Gift Aid program (signing up to this program allows charity shops to make 25% more on each item they sell, I highly recommend signing up).
                </p>
            </div>
            <div className="we-right">
                <h1 className="we-title">Work Experience</h1>
                <h2 className="we-subheading">Volunteer Computer Science Tutor | 2020/21 Holy Rood High School</h2>
                <p className="we-desc-1">
                    <br></br>I provided support and taught small lessons to a group of 12 High School Students stuyding towards National 5 and Higher Computing Science.
                    During this time, I gave lessons on basic data structures and data types, different types of Software Development Methodologies and a high level explanation
                    of how a computer functions. I also provided 1-on-1 support to students that were just beginning to learn how to program in Python, SQL, HTML, CSS and JavaScript.
                </p>
                <h2 className="we-subheading">Maths Tutor | 2020</h2>
                <p className="we-desc-2">
                    <br></br>I tutored National 5 Maths to a boy with learning difficulties who required some extra support. Under my teaching, the boy went on to climb from failing to
                    a B. I provided explanations and support on basic algebra, fractions, indices, trigonometry and basic statistics.
                </p>
                <br></br>
                <br></br>
                <img 
                        src={waiterwork}
                        alt="" 
                        className="we-img-2" 
                    />
                
            </div>
        </div>
    )
}

export default WorkExperience