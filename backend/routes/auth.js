const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  db.query('INSERT INTO users (email, password, role) VALUES (?, ?, ?)', [email, hashedPassword, role], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'User registered' });
  });
});

// Login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err || results.length === 0) return res.status(401).json({ error: 'Invalid credentials' });
    const isMatch = await bcrypt.compare(password, results[0].password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });
    const token = jwt.sign({ id: results[0].id, role: results[0].role }, process.env.JWT_SECRET);
    res.json({ token });
  });
});

module.exports = router;
