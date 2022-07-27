import React from "react";
import MainPage from "./Pages/MainPage/Index";
import AboutPage from "./Pages/AboutPage/Index";
import ProjectPage from "./Pages/ProjectPage/Index";
import ArticlePage from "./Pages/ArticlePage/Store";
import Store from "./Pages/ArticlePage/Store";
import { List } from "./Pages/ArticlePage/Index";
import Navbar from "./Components/Navigation/DesktopNavigation/Index";
import Footer from "./Components/Footer/Index";
import "./App.css";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="container">
      <AnimateSharedLayout>
        <Router>
          <Navbar />
          <AnimatePresence>
            <Routes>
              <Route path={"/"} element={<MainPage />} />
              <Route path="/about-page" exact element={<AboutPage />} />
              <Route path="/project-page" exact element={<ProjectPage />} />
              <Route path="/article-page" exact element={<ArticlePage />} />
              <Route path={"/article-page/:id"} exact element={<Store />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </Router>
      </AnimateSharedLayout>
    </div>
  );
}

{
  /* <Router>
  <Navbar />
  <MobilNavigation />
  <Routes>
    <Route path="/" exact element={<MainPage />} />
    <Route path="/about-page" exact element={<AboutPage />} />
    <Route path="/project-page" exact element={<ProjectPage />} />
    <Route path="/article-page" exact element={<ArticlePage />} />
    <Route path="/learn-page" exact element={<LearnArea />} />

  </Routes>
  <Footer />
</Router> */
}

export default App;
