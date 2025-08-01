const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const VISITOR_FILE = './visitors.json';

// Tambahan ini 👇
app.get('/', (req, res) => {
  res.send('Visitor Counter API is running');
});

// Load data IP dari file
let visitors = new Set();
if (fs.existsSync(VISITOR_FILE)) {
  const data = JSON.parse(fs.readFileSync(VISITOR_FILE, 'utf8'));
  visitors = new Set(data);
}

// Endpoint hitung IP unik
app.post('/track', (req, res) => {
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;

  visitors.add(ip);
  fs.writeFileSync(VISITOR_FILE, JSON.stringify([...visitors]));

  res.json({ count: visitors.size });
});

app.listen(PORT, () => {
  console.log(`✅ Server jalan di http://localhost:${PORT}`);
});
