import "./about.css"
import aboutme from "../../img/aboutme.png"
import HomeButton from "../homebutton/HomeButton";

const About = () => {
    return (
        <div className="a" id='about'>
            <div className="a-left">
                <div className="a-card">
                    <img 
                        src={aboutme} 
                        alt="" 
                        className="a-img" 
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me <HomeButton></HomeButton></h1>
                <p className="a-desc-1">
                    <br></br>I'm most used to Python, 
                    but I am also comfortable with Java, JavaScript, Haskell, SQL, HTML and CSS, as well as a little bit of C# (through Unity game development), Go, Assembly, C, LaTeX. I first gained
                    interest in programming around the age of 14, where I learned Visual Basic while
                    studying towards a National 5 qualification in Computer Science, and haven't stopped wanting to learn 
                    new programming skills since. I buy strongly into the idea self-study is crucial for a programmer, so I decided to branch out and create this site myself from
                    scratch using react.js to learn a new skill, which is a little bit out of my comfort zone - I am much more used to working on back-end projects. I have also 
                    completed a few hundred hours of certifications on Codecademy, which has really helped me develop self-learning and self-motivation skills on top of the
                    various programming concepts and standards I have learned along the way.
                </p>

                <p className="a-desc-2">
                    <br></br>I am also massively interested in machine learning and Data Science. I love to keep up to date with
                    new AI research - if you hadn't noticed yet, all the stickmen on this site are generated
                    by the DALL-E 2 image generation AI created by OpenAI! <a href="https://openai.com/dall-e-2/">(https://openai.com/dall-e-2/)</a>
                </p>
            </div>
        </div>
    )
}

export default About;