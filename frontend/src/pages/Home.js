import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import BookGrid from '../components/BookGrid';

function Home() {
  const [stats, setStats] = useState({});
  const [featuredBooks, setFeaturedBooks] = useState([]);

  useEffect(() => {
    axios.get('/api/stats').then(res => setStats(res.data));
    axios.get('/api/books/featured').then(res => setFeaturedBooks(res.data));
  }, []);

  return (
    <main>
      <Hero />
      <SearchBar />
      <section className="stats">
        <h2>Statistik</h2>
        <p>Jumlah Buku: {stats.books}</p>
        <p>Kategori: {stats.categories}</p>
        <p>Anggota: {stats.members}</p>
      </section>
      <BookGrid books={featuredBooks} title="Koleksi Unggulan" />
      {/* Tambahkan kategori populer dan berita */}
    </main>
  );
}

export default Home;
