import MainPage from "./Components/MainPage/Index";
import AboutPage from "./Components/About/Index";
import ProjectPage from "./Components/Project/Index";
import ArticlePage from "./Components/Article/Index";
import "./App.css";
import Navbar from "./Components/Navbar/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/AboutPage" exact element={<AboutPage />} />
          <Route path="/ProjectPage" exact element={<ProjectPage />} />
          <Route path="/ArticlePage" exact element={<ArticlePage />} />
        </Routes>
      </Router>
  );
}

export default App;
