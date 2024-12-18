import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ResultsPage from './pages/ResultsPage';
import TastePage from './pages/TastePage';
import ValuesPage from './pages/ValuesPage';
import CharacterPage from './pages/CharacterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/character" element={<CharacterPage />} />
        <Route path="/values" element={<ValuesPage />} />
        <Route path="/taste" element={<TastePage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
