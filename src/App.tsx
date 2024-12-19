import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PersonalityPage from './pages/PersonalityPage';
import ValuesPage from './pages/ValuesPage';
import PreferencesPage from './pages/PreferencesPage';
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/personality" element={<PersonalityPage />} />
        <Route path="/values" element={<ValuesPage />} />
        <Route path="/preferences" element={<PreferencesPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
