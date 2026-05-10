import React, { useState } from 'react';
import { hitungPotongan, hitungGajiBersih, formatRupiah } from './GajiHelper';

const FormGaji = () => {
  // State untuk semua input
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [gajiInput, setGajiInput] = useState("");
  
  // State untuk hasil & error
  const [dataFinal, setDataFinal] = useState(null);
  const [pesanSalah, setPesanSalah] = useState("");

  const handleKirim = (e) => {
    e.preventDefault();
    
    // Fitur Validasi: Cek jika ada yang kosong
    if (!nama || !umur || !pekerjaan || !gajiInput) {
      setPesanSalah("⚠️ Mohon isi semua kolom (Nama, Umur, Pekerjaan, Gaji)!");
      setDataFinal(null);
      return;
    }

    // Jika benar, simpan data ke state final
    setPesanSalah("");
    setDataFinal({
      nama,
      umur,
      pekerjaan,
      gajiKotor: Number(gajiInput),
      potongan: hitungPotongan(Number(gajiInput)),
      gajiBersih: hitungGajiBersih(Number(gajiInput))
    });
  };

  const styles = {
    card: { backgroundColor: 'white', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', maxWidth: '400px', width: '100%' },
    label: { fontWeight: 'bold', fontSize: '14px', color: '#555' },
    input: { width: '100%', padding: '10px', margin: '8px 0 15px 0', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' },
    btn: { width: '100%', padding: '12px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' },
    hasil: { marginTop: '20px', padding: '15px', backgroundColor: '#f0fff4', borderRadius: '10px', border: '1px solid #c6f6d5' }
  };

  return (
    <div style={styles.card}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Form Gaji Pegawai</h2>
      
      {pesanSalah && <p style={{ color: 'red', fontSize: '13px', textAlign: 'center' }}>{pesanSalah}</p>}

      <form onSubmit={handleKirim}>
        <label style={styles.label}>Nama Pegawai</label>
        <input style={styles.input} type="text" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Masukkan Nama" />

        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>Umur</label>
            <input style={styles.input} type="number" value={umur} onChange={(e) => setUmur(e.target.value)} placeholder="Thn" />
          </div>
          <div style={{ flex: 2 }}>
            <label style={styles.label}>Pekerjaan</label>
            <input style={styles.input} type="text" value={pekerjaan} onChange={(e) => setPekerjaan(e.target.value)} placeholder="Contoh: Admin" />
          </div>
        </div>

        <label style={styles.label}>Gaji Pokok (Rp)</label>
        <input style={styles.input} type="number" value={gajiInput} onChange={(e) => setGajiInput(e.target.value)} placeholder="Contoh: 5000000" />

        <button type="submit" style={styles.btn}>Kirim & Hitung Gaji</button>
      </form>

      {dataFinal && (
        <div style={styles.hasil}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2f855a' }}>✅ Data Pegawai Tersimpan:</h4>
          <p style={{ margin: '5px 0' }}><strong>Nama:</strong> {dataFinal.nama} ({dataFinal.umur} Thn)</p>
          <p style={{ margin: '5px 0' }}><strong>Pekerjaan:</strong> {dataFinal.pekerjaan}</p>
          <p style={{ margin: '5px 0' }}><strong>Gaji Kotor:</strong> {formatRupiah(dataFinal.gajiKotor)}</p>
          <p style={{ margin: '5px 0', color: '#c53030' }}><strong>Potongan (5%):</strong> -{formatRupiah(dataFinal.potongan)}</p>
          <hr />
          <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Total Gaji Bersih:</p>
          <h3 style={{ margin: 0, color: '#2f855a' }}>{formatRupiah(dataFinal.gajiBersih)}</h3>
        </div>
      )}
    </div>
  );
};

export default FormGaji;