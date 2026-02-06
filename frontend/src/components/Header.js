import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">Perpustakaan Umum Digital</Link>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <div className="dropdown">
              <Link to="/koleksi">Koleksi</Link>
              <div className="dropdown-content">
                <Link to="/koleksi">Semua Koleksi</Link>
                <Link to="/koleksi?filter=terbaru">Koleksi Terbaru</Link>
                <Link to="/koleksi?filter=terpopuler">Koleksi Terpopuler</Link>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <Link to="/kategori">Kategori</Link>
              <div className="dropdown-content">
                <Link to="/kategori/fiksi">Fiksi</Link>
                <Link to="/kategori/nonfiksi">Nonfiksi</Link>
                {/* Tambahkan lainnya */}
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <Link to="/layanan">Layanan</Link>
              <div className="dropdown-content">
                <Link to="/layanan/peminjaman">Peminjaman Buku</Link>
                {/* Tambahkan lainnya */}
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <Link to="/berita">Berita</Link>
              <div className="dropdown-content">
                <Link to="/berita/perpustakaan">Berita Perpustakaan</Link>
                {/* Tambahkan lainnya */}
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <Link to="/tentang">Tentang</Link>
              <div className="dropdown-content">
                <Link to="/tentang/profil">Profil</Link>
                {/* Tambahkan lainnya */}
              </div>
            </div>
          </li>
          <li><Link to="/kontak">Kontak</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
