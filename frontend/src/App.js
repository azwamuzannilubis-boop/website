import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Koleksi from './pages/Koleksi';
import Kategori from './pages/Kategori';
import Layanan from './pages/Layanan';
import Berita from './pages/Berita';
import Tentang from './pages/Tentang';
import Kontak from './pages/Kontak';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import './styles.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/koleksi" element={<Koleksi />} />
        <Route path="/kategori/:id" element={<Kategori />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
