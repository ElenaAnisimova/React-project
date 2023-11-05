import './App.css';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SearchPage from './pages/SearchPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/results/:page" element={<SearchPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
