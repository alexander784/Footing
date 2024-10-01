import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './components/About';
import Player from './pages/Player';
import News from './pages/News';
import Signings from './pages/Signings';
import Signin from './pages/Signin';
import Display from './pages/Display';
import Gallery from './components/Gallery';
import Showroom from './pages/Showroom';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Router>
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/player' element={<Player />} />
            <Route path='/news' element={<News />} />
            <Route path='/signings' element={<Signings />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/display' element={<Display />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/showroom' element={<Showroom />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
