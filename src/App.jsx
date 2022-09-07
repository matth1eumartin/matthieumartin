import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Achievements from "./components/achievements/Achievements";
import WorkExperience from "./components/workexperience/WorkExperience";

const App = () => {
  return <div>
      <Intro></Intro>
      <About></About>
      <ProductList></ProductList>
      <Achievements></Achievements>
      <WorkExperience></WorkExperience>
  </div>
};

export default App;