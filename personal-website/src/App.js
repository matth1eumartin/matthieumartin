import './App.css';

import Typed from "typed.js";
import { useEffect, useRef } from "react";



function App() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" a student", "an award winner", "a problem solver", "a self-starter", "a Software Engineer", "a team player", "a contributor", "a Data Scientist", "the person you want to hire :)"],
      startDelay: 0,
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 700,
      smartBackspace: true,
      cursorChar: '_',
      loop: false
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div class="App">
      <p id = 'intro'>Hi, my name is <span id='Name'>Matthieu</span></p>
      <p id = 'scrolling-text'>I am <span ref = {el}></span></p>
      <br></br>
      <p id = 'description'>I'm currently a second year student at the University of Edinburgh studying 
      towards an MInf in Informatics from which I will be graduating in 2026.
      <br></br>I am a mostly back-end focused Engineer, with a strong grasp on Python and a good knowledge of a whole bunch of Data Structures and Algorithms. I'm also fascinated by machine learning and artificial intelligence which has made me familiarise myself with many common Data Science packages such as Pandas, Scikit and TensorFlow. I also made this site from scratch using ReactJS, just to try and pick something up on the side - I buy strongly into the idea that a programmer needs to be extremely multi-faceted and constantly hungry to learn more. </p>
      <p>On a more personal note, when I'm not working, I'm interested in road cycling and football, but I also enjoy a good book - my fluency in French as well as English means I am blessed with a large pool to choose from. </p>
    </div>
  );
}



export default App;
