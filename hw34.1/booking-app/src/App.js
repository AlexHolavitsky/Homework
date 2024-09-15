import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import HotelsPage from './pages/HotelsPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
