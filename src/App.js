import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import THREE_CARD_POKER from './pages/3 Card Poker';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/THREE_CARD_POKER" exact element={<THREE_CARD_POKER />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
