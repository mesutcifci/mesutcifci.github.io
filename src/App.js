import React, { useEffect } from "react";
import MainPage from "./Pages/MainPage/Index";
import AboutPage from "./Pages/AboutPage/Index";
import ProjectPage from "./Pages/ProjectPage/Index";
import ArticlePage from "./Pages/ArticlePage/Store";
import Store from "./Pages/ArticlePage/Store";
import Navbar from "./Components/Navbar/Index";
import Footer from "./Components/Footer/Index";
import GlobalStyle from "./styles/globalStyles";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="container">
      <GlobalStyle />
      <AnimateSharedLayout>
        <Router>
          <Navbar />
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/about-page" exact element={<AboutPage />} />
              <Route path="/project-page" exact element={<ProjectPage />} />
              <Route path="/article-page" exact element={<ArticlePage />} />
              <Route path="/article-page/:id" exact element={<Store />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </Router>
      </AnimateSharedLayout>
    </div>
  );
}

export default App;
