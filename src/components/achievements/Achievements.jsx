import "./achievements.css"
import aboutme from "../../img/achievements.png"

const Achievements = () => {
    return (
        <div className="ac">
            <div className="ac-left">
                <h1 className="ac-title">Achievements & Awards</h1>
                <p className="ac-desc-1">
                    <br></br><ul>Caritas Award for Volunteering <ul className="awardAgency">Scottish Catholic Education Service | 2021</ul></ul>
                            <ul>5th Place in the INF1A Haskell Art Programming Competition <ul className="awardAgency">Edinburgh University | 2021</ul></ul>
                            <ul>Scottish Power Award for Academic Achievement at National 5<ul className="awardAgency">Holyrood High School | 2020</ul></ul>
                            <ul>Award for Academic Achievement at Higher <ul className="awardAgency">Holyrood High School | 2021</ul></ul>
                            <ul>8A's at National 5 <ul className="awardAgency">SQA | 2019</ul></ul>
                            <ul>6A's and 1B at Higher <ul className="awardAgency">SQA | 2020</ul></ul>
                            <ul>2A's at Advanced Higher <ul className="awardAgency">SQA | 2021</ul></ul>
                </p>
                <h1 className="ac-title">Certifications</h1>
                <p className="ac-desc-2">
                    <br></br>Certificates available on linkedin
                        <ul>Data Scientist: Machine Learning Specialist Career Path | 35 weeks</ul>
                        <ul>Learn Data Structures and Algorithms with Python | 40 hours</ul>
                        <ul>Foundations of Cloud Computing | 4 hours</ul>
                        <ul>Learn Advanced Python 3 | 8 hours + 15 hours intermediate + 25 hours intro</ul>
                        <ul>Learn JavaScript | 20 hours</ul>
                        <ul>Software Engineering in Python I | 8 hours</ul>
                        <ul>Learn SQL | 8 hours</ul>
                        <ul>Learn the Basics of Blockchain with Python | 2 hours</ul>
                        <ul>Learn the Basics of AI with Minimax | 2 hours</ul>
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