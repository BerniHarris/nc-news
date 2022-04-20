// style sheet
import "./App.css";
// router to create links to pages
import { BrowserRouter, Route, Routes } from "react-router-dom";
//imported components
import Footer from "./components/Footer";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
import Navbar from "./components/Navbar";
//imported pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/*-----------------------Top of page----------------------- */}
        <Navbar />
        {/* <Banner /> --- dynamic pictre depending on route - figure out how to do! */}
        {/*-----------------------routes----------------------- */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/topic/:topic" element={<ArticleList />} />
            <Route path="/articles" element={<Home />} />
            <Route path="/articles/:article_id" element={<Article />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        {/*-----------------------Bottom of page----------------------- */}

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
