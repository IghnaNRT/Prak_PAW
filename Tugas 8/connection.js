const {Client} = require('pg')

conts client = new Client ({
    host : "localhost",
    user : "postgres",
    port : 5432,
    password : "ighna",
    database : "crud"
})

module.exports = client