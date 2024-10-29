import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CharactersList from './components/Characters';
import CharacterDetail from './components/CharacterDetails';
import ComicsList from './components/ComicsList';
import ComicDetail from './components/ComicDetails';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<CharactersList />} />
            <Route path="/characters" element={<CharactersList />} />
            <Route path="/characters/:id" element={<CharacterDetail />} />
            <Route path="/comics" element={<ComicsList />} />
            <Route path="/comics/:id" element={<ComicDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;