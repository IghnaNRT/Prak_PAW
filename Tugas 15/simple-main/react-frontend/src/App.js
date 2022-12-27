import { useEffect, useState } from "react";

const Konten = p => {

  const [bukuList, setBukuList] = useState([])
  const [bukuBaru, setBukuBaru] = useState({
    judul: "",
    nomor_isbn: "",
  })

  useEffect(() => {
    // Lakukan HTTP REQUEST - GET
    const urlMenampilkanBuku = "http://localhost:3100/buku"
    fetch(urlMenampilkanBuku) // Ngembaliin objek Promise
      .then(respon => {
        console.log("respon", respon) 

        return respon.json()
      }) 
      .then(responJSON => { // List buku
        console.log("respon JSON", responJSON)

        setBukuList(responJSON)
      })
  }, [])

  return (
    <div>
      <h2>{p.judul}</h2>
      <h4>Contoh GET</h4>
      <ol>
        {bukuList.map((buku, urutanKe) => {
          return (
            <li key={`buku-ke-${urutanKe}`}>{buku.judul} - ISBN {buku.nomor_isbn}</li>
          )
        })}
      </ol>
      <h4>Contoh POST</h4>
      <input
        placeholder="Judul buku"
        value={bukuBaru.judul}
        onChange={e => {
          const valueJudulBukuBaru = e.target.value
          console.log(valueJudulBukuBaru)
          setBukuBaru({...bukuBaru, judul: valueJudulBukuBaru})
        }}
      />
      <input
        placeholder="Nomor ISBN"
        value={bukuBaru.nomor_isbn}
        onChange={e => {
          const valueNomorISBNBukuBaru = e.target.value
          console.log(valueNomorISBNBukuBaru)
          setBukuBaru({...bukuBaru, nomor_isbn: valueNomorISBNBukuBaru})
        }}
      />
      <button
        onClick={() => {
          console.log("kirim data buku baru", bukuBaru)
          // Lakukan HTTP REQUEST - POST 
          const urlMenambahBuku = "http://localhost:3100/buku"
          fetch(urlMenambahBuku, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(bukuBaru),
          }) // Ngembaliin objek Promise
            .then(respon => {
              console.log("respon", respon) 

              return respon.json()
            }) 
            .then(responJSON => { // List buku
              console.log("respon JSON", responJSON)

              alert(`Buku ${bukuBaru.judul} Buku berhasil ditambahkan`)
            })
        }}
      >Tambah Buku</button>
    </div>
  );
}

const App = () => {


  return (
    <Konten judul="List Buku" />
  );
}

export default App;
