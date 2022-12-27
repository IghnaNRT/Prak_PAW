import { useState } from "react"

const MMBuatKas = wadahAtribut => {

  const [kasItem, setKasItem] = useState({
    tgl: "", 
    jumlah: 0,
    keterangan: "",
    kas: "keluar",
  })

  return (
    <div style={{
      display: `flex`,
      flexDirection: `column`,
      gap: 8,
      padding: 8,
      background: `#dddddd`,
    }}>
      <h2>Buat Kas</h2>
      <input 
        value={kasItem.tgl}
        type={`date`}
        onChange={objekEvent => {
          setKasItem(
            {...kasItem, tgl: objekEvent.target.value}
          )
        }}
      />
      <input
        value={kasItem.jumlah}
        placeholder={`jumlah`}
        type={`number`}
        onChange={objekEvent => {
          setKasItem(
            {...kasItem, jumlah: objekEvent.target.value}
          )
        }}
      />
      <input
        value={kasItem.keterangan}
        placeholder={`keterangan`}
        onChange={objekEvent => {
          setKasItem(
            {...kasItem, keterangan: objekEvent.target.value}
          )
        }}
      />
      <button
        onClick={() => {
          setKasItem(
            {...kasItem, kas: kasItem.kas === 'keluar' ? `masuk` : `keluar`}
          )
        }}
      >
        Kas : {kasItem.kas === 'keluar' ? `Keluar` : `Masuk`}
      </button>

      <button 
        onClick={() => {
          wadahAtribut.setKas(
            kasTerkini => ([
              ...kasTerkini,
              kasItem,
            ]) 
          )
        }}
      >
        Tambah
      </button>
    </div>
  )
}

const MMTabelKas = wadahAtribut => {
  return (
    <div>
      <table
        border={1}
        style={{
          borderCollapse: `collapse`,
          width: `100%`,
          marginTop: 16,
        }}>
        <thead>
          <tr>
            <th>Tgl</th>
            <th>Keterangan</th>
            <th>Jumlah</th>
            <th>Kas</th>
          </tr>
        </thead> 
        <tbody>
          {wadahAtribut.kas.map((itemKas, urutanKe) => (
            <tr key={urutanKe.toString()}>
              <td>{itemKas.tgl}</td>
              <td>{itemKas.keterangan}</td>
              <td>{itemKas.jumlah}</td>
              <td>{itemKas.kas}</td>
            </tr>
          ))}
          <tr>
            <td></td> 
            <td></td> 
            <td></td> 
            <td>
            </td> 
          </tr>
        </tbody>
      </table> 
    </div>
  )
}

const App = () => {

  const [showBuatKas, setShowBuatKas] = useState(false)
  const [kas, setKas] = useState([
    {
      tgl: "2022-09-10",
      jumlah: 0,
      keterangan: "Coba2",
      kas: "keluar",
    },
  ])

  return (
    <div className="App">
      <h1>MyMoney</h1>

      <button onClick={() => {
        setShowBuatKas(!showBuatKas)
      }}>
        {showBuatKas ? `- Sembunyikan Form` : `+ Buat Kas`} 
      </button>

      {showBuatKas &&
        <MMBuatKas setKas={setKas} />
      }

      <MMTabelKas kas={kas} />
    </div>
  )
}

export default App;
