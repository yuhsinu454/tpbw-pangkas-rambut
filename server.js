const express = require('express');
const cors = require('cors');
const path = require('path'); // Tambahan modul untuk mengelola alamat folder

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Memberitahu Express untuk menyajikan file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});