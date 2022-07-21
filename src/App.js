import MainPage from "./Pages/MainPage/Index";
import AboutPage from "./Pages/AboutPage/Index";
import ProjectPage from "./Pages/ProjectPage/Index";
import ArticlePage from "./Pages/ArticlePage/Index";
import "./App.css";
// import { GlobalStyleComponent } from "styled-components";
import Navbar from "./Components/Navigation/Index";
import {Example} from "./Components/LearnNavigationAnimate/Index"
import Footer from "./Components/Footer/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Example/>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/about-page" exact element={<AboutPage />} />
        <Route path="/project-page" exact element={<ProjectPage />} />
        <Route path="/article-page" exact element={<ArticlePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
