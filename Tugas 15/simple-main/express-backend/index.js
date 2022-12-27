const express = require('express')
const cors = require('cors')

const app = express()
const port = 3100

app.use(cors({
  origin: '*'
}))

// GET
app.get('/buku', (httpRequest, httpResponse) => {
  
  httpResponse.json([
    {
      judul: "Perkembangan Pohon",
      nomor_isbn: "32423324",
    },
    {
      judul: "Pembuatan Pesawat Terbang",
      nomor_isbn: "43423432340",
    },
  ])
})

// POST
app.post('/buku', (httpRequest, httpResponse) => {
  
  httpResponse.json(
    {
      inserted_id: "AF3423432",
    },
  )
})

app.listen(port, () => {
  console.log(`RESTful API berjalan di port ${port} `)
})

