import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Routes>
          <Route path='/' element={<HomeScreen />} exact />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
