CREATE DATABASE perpustakaan_digital;

USE perpustakaan_digital;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  role ENUM('admin', 'member') DEFAULT 'member',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  category_id INT,
  cover_url VARCHAR(255),
  description TEXT,
  is_digital BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE members (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  name VARCHAR(255),
  address TEXT,
  phone VARCHAR(20),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE loans (
  id INT AUTO_INCREMENT PRIMARY KEY,
  member_id INT,
  book_id INT,
  loan_date DATE,
  return_date DATE,
  status ENUM('active', 'returned') DEFAULT 'active',
  FOREIGN KEY (member_id) REFERENCES members(id),
  FOREIGN KEY (book_id) REFERENCES books(id)
);

CREATE TABLE news (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  content TEXT,
  category VARCHAR(255),
  thumbnail_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert data contoh
INSERT INTO categories (name) VALUES ('Fiksi'), ('Nonfiksi');
INSERT INTO books (title, author, category_id, cover_url) VALUES ('Buku A', 'Penulis A', 1, 'https://example.com/cover.jpg');
