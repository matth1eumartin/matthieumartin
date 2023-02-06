import Greeting from './components/MainPage/Greeting';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import ProjectList from './components/Projects/ProjectList';

function App() {
  return (
    <div className="">
      <div className=''>
        <NavBar />
      </div>
      <div id="home" className='items-center text-center py-[350px] h-[100vh]'>
        <Greeting />
      </div>
      <p id="about"></p>
      <div id="about">
        <AboutMe />
      </div>
      <p id="projects"></p>
      <div>
        <ProjectList />
      </div>
      
    </div>
  );
}

export default App;
