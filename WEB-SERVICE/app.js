const express = require('express')
const cors = require ('cors')
const app = express()
const port = 3000

app.use(cors({
    origin: '*'
}));

// Lihat list buku
app.get('/buku', (req, res) => {
    res.json([
      {
        nama: "Harry Potter",
        halaman: 320,
      },
      {
        nama: "The Lord of The Rings",
        halaman: 532,
      }    
    ])
  })
  
  // Lihat detail buku
  app.get('/buku/:id', (req, res) => {
    res.json(
      {
        nama: "Harry Potter",
        halaman: 320,
      }
    )
  })
  
  // Tambah buku
  app.post('/buku', (req, res) => {
    res.json(
      {
        id: 32432,
        nama: "Harry Potter",
        halaman: 320,
      }
    )
  })
  
  // Hapus buku
  app.delete('/buku/:id', (req, res) => {
    res.json(
      {
        id: 32432,
        nama: "Harry Potter",
        halaman: 320,
      }
    )
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })