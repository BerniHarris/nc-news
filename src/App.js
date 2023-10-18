// style sheet
import "./App.css";
// router to create links to pages
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { React } from "react";
//imported components
import Footer from "./components/Footer";
import ArticleList from "./pages/ArticleList";
import Article from "./components/Article";
import Navbar from "./components/Navbar";
//imported pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound.jsx";
import Landing from "./pages/Landing/Landing";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/(landing)" element={<Frontpage />} />
          <Route path="/*" element={<Default />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
  function Frontpage() {
    return (
      <div className="background">
        <Routes>
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </div>
    );
  }
  function Default() {
    return (
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/topic/:topic" element={<ArticleList />} />
            <Route path="/articles" element={<Home />} />
            <Route path="/articles/:article_id" element={<Article />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
