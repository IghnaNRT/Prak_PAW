const express = require('express')
const cors = require('cors')
const { Client } = require("pg")

const app = express()
const port = 4000

connectionSettings = {
    user: 'postgres',
    host: 'localhost',
    database: 'restapi',
    password: 'ighna',
    port: 5432,
}

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {

  const client = new Client(connectionSettings)
  
  client.connect(err => {
    if(err) throw err
    console.log("Connected !") 
  })
  
  client.query(`SELECT
    contoh_atribut1,
    contoh_atribut2,
    contoh_atribut3
    FROM 
      contoh_skema1.contoh_tabel1
  `, (erornyaDatabase, hasilDariDatabase) => {

      res.json({
        data: hasilDariDatabase.rows,
      })  
  })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})