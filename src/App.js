import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ErrorPage from './Component/ErrorPage';
import Home from './Component/Home';
import TextToSpeech from './Component/TextToSpeech';

const App = () => {
  return (
    <Router>
      <nav>
      <Link to="/"><button className="btn"> Text To Speech</button></Link>
      <Link to="/TextToSpeech"><button className="btn"> Speech To Text</button></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TextToSpeech" element={<TextToSpeech />} />
        <Route path="*" element={ <ErrorPage /> } />
       </Routes>
    </Router>
  );
};

export default App;
