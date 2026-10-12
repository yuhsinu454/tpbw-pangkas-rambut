const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint untuk ngetes server
app.get('/', (req, res) => {
  res.send('Server Pangkas Rambut GIS Berjalan Mantap!');
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});