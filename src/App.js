import { React, useState, useEffect } from "react";
import About from "./components/about/About";
import Intro from "./components/intro/Intro"; 
import Achievements from "./components/achievements/Achievements";
import WorkExperience from "./components/workexperience/WorkExperience";
import Education from "./components/education/Education";
import LoadingScreen from "./components/loadingscreen/LoadingScreen";
import ProductList from "./components/productList/ProductList";


const App = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])


  return <div>
    {loading === false ?  (
      <div>
      <Intro></Intro>
      <About></About>
      <ProductList></ProductList>
      <Achievements></Achievements>
      <WorkExperience></WorkExperience>
      <Education></Education>
      </div>
    ) : (
      <LoadingScreen />
    )}
  </div>
};

export default App;