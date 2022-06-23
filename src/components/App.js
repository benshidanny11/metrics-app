import '../assets/styles/main.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route exact="true" path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
