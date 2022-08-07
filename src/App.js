import React from "react";
import Main from "./Pages/Main/Index";
import About from "./Pages/About/Index";
import Project from "./Pages/Project/Index";
import Article from "./Pages/Article/Index";
import OpenedCard from "./Pages/Article/OpenedCard";
import Navbar from "./Components/Navbar/Index";
import Footer from "./Components/Footer/Index";
import GlobalStyle from "./styles/globalStyles";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      {/* Common variables such as styles and color that apply to the entire project are in the global file. */}
      <GlobalStyle />
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
