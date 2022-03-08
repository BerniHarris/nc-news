// style sheet
import './App.css'; 
// router to create links to pages
import {BrowserRouter, Route,Routes} from 'react-router-dom'
//imported components
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleList from './components/ArticleList';
//imported pages
import Home from './pages/Home';
import Article from './pages/Article'
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Topics from './pages/Topics';
import AddArticle from './components/AddArticle';




  {/*-----------------------Page----------------------- */}
  function App() {
    return (
      <BrowserRouter>
    <div className="App">

    <Header />
  {/*-----------------------routes----------------------- */}
      <div className="content">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Article />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/topics" element={<Topics />} />
          <Route path='/addarticle' element={<AddArticle />} />
      </Routes>    
      </div>

    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
