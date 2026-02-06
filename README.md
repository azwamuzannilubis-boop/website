# Perpustakaan Umum Digital

Website perpustakaan digital modern dengan frontend React dan backend Node.js.

## Fitur
- Autentikasi (login/register)
- CRUD buku, kategori, berita
- Search & filter
- Dashboard admin/anggota
- Responsif

## Instalasi
1. Clone repo: `git clone https://github.com/username/perpustakaan-digital.git`
2. Install dependencies:
   - Frontend: `cd frontend && npm install`
   - Backend: `cd backend && npm install`
3. Setup database: Import `database/schema.sql` ke MySQL.
4. Konfigurasi: Copy `.env.example` ke `.env` dan isi DB_HOST, DB_USER, dll.
5. Jalankan:
   - Backend: `cd backend && npm start`
   - Frontend: `cd frontend && npm start`

## Deploy
- Frontend: Vercel
- Backend: Heroku
- Database: MySQL di cloud (e.g., PlanetScale)

## Kontribusi
Pull requests welcome!
