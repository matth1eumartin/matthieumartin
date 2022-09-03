import './App.css';
import githubNormallogo from './githubNormal.png'
import githubMouseOverLogo from './gitHubMouseOver.png'
import linkedinNormalLogo from './linkedinNormal.png'
import linkedinMouseOver from './linkedinMouseOver.png'
import gmail from './gmail.png'
import gmailMouseOver from './gmailMouseOver.png'
import me from './realme.png'
import downarrow from './down-arrow.png'
import Typed from "typed.js";
import { useEffect, useRef } from "react";



function App() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" a student", "an award winner", "a problem solver", "a self-starter", "a Software Engineer", "a quick learner", "a team player", "a Data Scientist", "the person you want to hire :)"],
      startDelay: 1000,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      smartBackspace: false,
      cursorChar: '_',
      loop: true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div class="App">

      <div class = "pageIntro">
        <p id = 'intro'>Hi! My name is <br></br><span id='Name'>Matthieu</span></p>
        <img src={me} id='stickMan' alt='little doodle i made' width ="200" height="200"></img>
        <img src={downarrow} id='downarrow' alt='down arrow to indicate where to scroll' width="30" height="40"></img>
      </div>

      <p id = 'typing-text'>I am <span ref = {el}></span></p>
      <br></br>
      <p id = 'description'>I'm currently just about to go into my second year as a student at the University of Edinburgh. I'm enrolled in the 5 year integrated masters Informatics course (MInf), and will graduate in 2026.
      I am a mostly back-end focused Engineer, with a strong grasp on Python and a good knowledge of a whole bunch of Data Structures and Algorithms. I've also developed a good level in Java and Haskell thanks to University. I'm also fascinated by machine learning and artificial intelligence which has made me familiarise myself with many common Data Science packages such as Pandas, Scikit and TensorFlow. I also made this site from scratch using ReactJS, just to try and pick something up on the side - I buy strongly into the idea that a programmer needs to be extremely multi-faceted and constantly hungry to learn more. </p>
      <p>The links to my github and linkedin and sending me an email lie below, just click on the respective logos!</p>
      
      <div class='images'>
      <a href = "https://github.com/matth1eumartin">
      <img src={githubNormallogo} width="50px" height="50px" alt='github link' 
      onMouseOver={e => e.currentTarget.src=githubMouseOverLogo}
      onMouseOut={e => e.currentTarget.src=githubNormallogo}
      id = 'githubLogo'></img>
      </a>

      <a href = "https://www.linkedin.com/in/matthieu-martin-/">
        <img src={linkedinNormalLogo} width="50px" height="50px" alt='linkedin link' 
        onMouseOver={e => e.currentTarget.src=linkedinMouseOver}
        onMouseOut={e => e.currentTarget.src=linkedinNormalLogo}
        id = 'linkedinLogo'></img>
      </a>

      <a href = "mailto:matthieum2003@gmail.com">
        <img src={gmail} width="50px" height="50px" alt='mailto gmail link' 
        onMouseOver={e => e.currentTarget.src=gmailMouseOver}
        onMouseOut={e => e.currentTarget.src=gmail}
        id = 'linkedinLogo'></img>
      </a>
      </div>

    </div>
  );
}



export default App;
