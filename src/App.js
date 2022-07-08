import MainPage from "./pages/mainPage/Index";
import AboutPage from "./pages/aboutPage/Index";
import ProjectPage from "./pages/projectPage/Index";
import ArticlePage from "./pages/articlePage/Index";
import "./styles/App.css";
import Navbar from "./components/Navigation/Index";
import Footer from "./components/Footer";
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
      <Footer />
    </Router>
  );
}

export default App;
