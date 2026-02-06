const db = require('../config/db');

class Book {
  static getAll(callback) {
    db.query('SELECT * FROM books', callback);
  }
  static create(data, callback) {
    db.query('INSERT INTO books SET ?', data, callback);
  }
  // Tambahkan CRUD lainnya
}

module.exports = Book;
