import "./achievements.css";
import aboutme from "../../img/achievements.png";
import HomeButton from "../homebutton/HomeButton";

const Achievements = () => {
    return (
        <div className="ac">
            <div className="ac-left">
                <h1 className="ac-title" id="achievements">Achievements & Awards <HomeButton></HomeButton></h1>
                <p className="ac-desc-1">
                    <br></br><ul><li>Caritas Award for Volunteering </li><ul className="awardAgency">Scottish Catholic Education Service | 2021</ul></ul>
                            <ul><li>5th Place in the INF1A Haskell Art Programming Competition </li><ul className="awardAgency">Edinburgh University | 2021</ul></ul>
                            <ul><li>Scottish Power Award for Academic Achievement at National 5</li><ul className="awardAgency">Holyrood High School | 2020</ul></ul>
                            <ul><li>Award for Academic Achievement at Higher </li><ul className="awardAgency">Holyrood High School | 2021</ul></ul>
                            <ul><li>8A's at National 5 </li><ul className="awardAgency">SQA | 2019</ul></ul>
                            <ul><li>6A's and 1B at Higher </li><ul className="awardAgency">SQA | 2020</ul></ul>
                            <ul><li>2A's at Advanced Higher </li><ul className="awardAgency">SQA | 2021</ul></ul>
                </p>
                <h1 className="ac-title">Certifications</h1>
                <p className="ac-desc-2">
                    <br></br>Certificates available on linkedin
                        <ul><li>Data Scientist: Machine Learning Specialist Career Path | 35 weeks</li>
                        <li>Learn Data Structures and Algorithms with Python | 40 hours</li>
                        <li>Foundations of Cloud Computing | 4 hours</li>
                        <li>Learn Advanced Python 3 | 8 hours + 15 hours intermediate + 25 hours intro</li>
                        <li>Learn JavaScript | 20 hours</li>
                        <li>Software Engineering in Python I | 8 hours</li>
                        <li>Learn SQL | 8 hours</li>
                        <li>Learn the Basics of Blockchain with Python | 2 hours</li>
                        <li>Learn the Basics of AI with Minimax | 2 hours</li></ul>
                </p>
            </div>
            <div className="ac-right">
                <div className="ac-card">
                    <img 
                        src={aboutme} 
                        alt="" 
                        className="ac-img" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Achievements;