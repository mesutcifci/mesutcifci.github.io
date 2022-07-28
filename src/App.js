import React, { useEffect, useState } from "react";
import MainPage from "./Pages/MainPage/Index";
import AboutPage from "./Pages/AboutPage/Index";
import ProjectPage from "./Pages/ProjectPage/Index";
import ArticlePage from "./Pages/ArticlePage/Store";
import Store from "./Pages/ArticlePage/Store";
import Navbar from "./Components/Navigation/DesktopNavigation/Index";
import { MobilNavigation } from "./Components/Navigation/MobilNavigation/Index";
import Footer from "./Components/Footer/Index";
import GlobalStyle, { devices } from "./styles/globalStyles";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [openMobilNavbar, setOpenMobilNavbar] = useState(true);
  // const [windowSize, setWindowSize] = useState(null);

  // function getWindowSize() {
  //   const { innerWidth } = window;

  //   if (innerWidth < 1024) {
  //     console.log("SCREEN SIZE: ", innerWidth);
  //     // setOpenMobilNavbar(true);
  //   } else {
  //     // setOpenMobilNavbar(false);
  //   }
  //   return { innerWidth };
  // }
  //   window.addEventListener("resize", getWindowSize);


  // useEffect(() => {

  //   if(window.innerWidth < devices.laptop){
  //     setOpenMobilNavbar(true)
  //   }
  //   else{
  //     setOpenMobilNavbar(false)
  //   }
  // })

  return (
    <div className="container">
      <GlobalStyle />
      <AnimateSharedLayout>
        <Router>
          {!openMobilNavbar && <Navbar />}
          {openMobilNavbar && <MobilNavigation />}
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
