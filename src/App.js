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
import Login from './pages/Login';
import Menu from './pages/Menu';
import Article from './components/Article'


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
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path='/topic/:topic' element={<ArticleList />}/>
          <Route path='/articles/:article_id' element={<Article />}/>
      </Routes>    
      </div>

    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
