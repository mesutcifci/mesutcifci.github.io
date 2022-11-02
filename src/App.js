import React from "react";
import Main from "./pages/Main";
import About from "./pages/About";
import Project from "./pages/Project";
import Article from "./pages/Article";
import OpenedCard from "./pages/Article/OpenedCard";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/globalStyles";
import { AnimateSharedLayout } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Scroll from "./components/Scroll/index";

function App() {
  return (
    <div className="container">
      {/* Common variables such as styles and color that apply to the entire project are in the global file. */}
      <GlobalStyle />
      {/* The AnimateSharedLayout component enables you to perform layout animations between different components that share a layoutId as they're added/removed. */}
      <AnimateSharedLayout>
        <Router>
          <Navbar />
          <Scroll
            scrollPoint={66}
            ScrollIconAppearPoint={500}
            direction={"scrollUp"}
          />
          <Scroll
            scrollPoint={99999}
            ScrollIconAppearPoint={65}
            direction={"scrollDown"}
          />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about-page" exact element={<About />} />
            <Route path="/project-page" exact element={<Project />} />
            <Route path="/article-page" exact element={<Article />} />
            <Route path="/article-page/:id" exact element={<OpenedCard />} />
            <Route path="/404" element={<PageNotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
          <Footer />
        </Router>
      </AnimateSharedLayout>
    </div>
  );
}

export default App;
