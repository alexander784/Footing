import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <>
    <Navbar />
    <Router >
      <Routes>
       <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
