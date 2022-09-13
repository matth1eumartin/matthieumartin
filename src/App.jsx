import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Achievements from "./components/achievements/Achievements";
import WorkExperience from "./components/workexperience/WorkExperience";
import Education from "./components/education/Education";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
      <Intro></Intro>
      <About></About>
      <ProductList></ProductList>
      <Achievements></Achievements>
      <WorkExperience></WorkExperience>
      <Education></Education>
  </div>
};

export default App;