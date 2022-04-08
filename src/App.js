import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Three_Card_Poker from './pages/3 Card Poker';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Three_Card_Poker" exact element={<Three_Card_Poker />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
