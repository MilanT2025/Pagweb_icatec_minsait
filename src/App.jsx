import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SIHCEPage from './pages/Sihce';
import Helpdesk from './pages/Helpdesk';
import Ipress from './pages/Ipress';
import Indicadores from './pages/Indicadores';
import HistorySihce from './pages/HistorySihce';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sihce" element={<SIHCEPage />} />
            <Route path="/Helpdesk" element={<Helpdesk />} />
            <Route path="/Ipress" element={<Ipress />} />
            <Route path="/Indicadores" element={<Indicadores />} />
            <Route path="/HistorySihce" element={<HistorySihce />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
