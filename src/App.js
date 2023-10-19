import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { React } from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/HomePage/HomePage";
import ArticleListPage from "./pages/ArticleListPage/ArticleListPage";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/*" element={<Default />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

  function Default() {
    return (
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/topic/:topic" element={<ArticleListPage />} />
            <Route path="/articles" element={<HomePage />} />
            <Route path="/articles/:article_id" element={<ArticlePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
