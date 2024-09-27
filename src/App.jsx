import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './components/About';
import Player from './components/pages/Player';
import News from './components/pages/News';

function App() {
  return (
    <>
    <Navbar />
    <Router >
      <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/about' element={<About />}/>
       <Route path='/player' element={<Player />}/>
       <Route path='/news' element={<News />}/>
      </Routes>
    </Router>
    {/* <About /> */}
    <Footer />
    </>
  );
}

export default App;
