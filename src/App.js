import React from "react";
import Main from "./Pages/Main";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Article from "./Pages/Article";
import OpenedCard from "./Pages/Article/OpenedCard";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import GlobalStyle from "./styles/globalStyles";
import { AnimateSharedLayout } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scroll from "./Components/Scroll/index";

function App() {
  return (
    <div className="container">
      {/* Common variables such as styles and color that apply to the entire project are in the global file. */}
      <GlobalStyle />
      <Scroll scrollPoint={66} ScrollIconAppearPoint={500} direction={"scrollUp"} />
      <Scroll scrollPoint={99999} ScrollIconAppearPoint={65} direction={"scrollDown"} />

      {/* The AnimateSharedLayout component enables you to perform layout animations between different components that share a layoutId as they're added/removed. */}
      <AnimateSharedLayout>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about-page" exact element={<About />} />
            <Route path="/project-page" exact element={<Project />} />
            <Route path="/article-page" exact element={<Article />} />
            <Route path="/article-page/:id" exact element={<OpenedCard />} />
          </Routes>
          <Footer />
        </Router>
      </AnimateSharedLayout>
    </div>
  );
}

export default App;
