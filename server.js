const express = require('express');
const path = require('path');
const { Pool } = require('pg');

const app = express();
const PORT = 3000;

// Konfigurasi koneksi ke Database PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});

// Menyajikan file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Membuat Endpoint API untuk mengambil data lokasi cukur
app.get('/api/lokasi', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM lokasi_cukur');
        res.json(result.rows);
    } catch (err) {
        console.error('Error mengambil data dari database:', err.message);
        res.status(500).json({ error: 'Gagal mengambil data dari server' });
    }
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});