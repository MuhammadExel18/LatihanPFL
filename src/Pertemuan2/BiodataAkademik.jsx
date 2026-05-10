import React from 'react';

const BiodataAkademik = () => {
  // Data utama yang bisa Anda isi sendiri
  const data = {
    nama: "Nama Lengkap Anda",
    nim: "220101001",
    kelas: "IF-03",
    jurusan: "Teknik Informatika",
    hobi: ["Coding", "Bermain Game", "Mendengarkan Musik"]
  };

  // Gaya tampilan (CSS-in-JS)
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      padding: '40px 20px'
    },
    card: {
      width: '100%',
      maxWidth: '450px',
      backgroundColor: '#ffffff',
      border: '1px solid #e1e1e1',
      borderRadius: '12px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
      padding: '25px',
      fontFamily: '"Inter", "Segoe UI", sans-serif'
    },
    header: {
      textAlign: 'center',
      borderBottom: '2px solid #f0f0f0',
      marginBottom: '20px',
      paddingBottom: '10px'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse'
    },
    label: {
      fontWeight: '600',
      color: '#555',
      padding: '10px 0',
      width: '35%',
      verticalAlign: 'top'
    },
    value: {
      color: '#222',
      padding: '10px 0',
      paddingLeft: '10px'
    },
    hobiList: {
      margin: '0',
      paddingLeft: '20px',
      color: '#222'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={{ margin: 0, color: '#1a73e8' }}>Biodata Mahasiswa</h2>
        </div>

        <table style={styles.table}>
          <tbody>
            <tr>
              <td style={styles.label}>Nama</td>
              <td style={styles.value}>: {data.nama}</td>
            </tr>
            <tr>
              <td style={styles.label}>NIM</td>
              <td style={styles.value}>: {data.nim}</td>
            </tr>
            <tr>
              <td style={styles.label}>Kelas</td>
              <td style={styles.value}>: {data.kelas}</td>
            </tr>
            <tr>
              <td style={styles.label}>Jurusan</td>
              <td style={styles.value}>: {data.jurusan}</td>
            </tr>
            <tr>
              <td style={styles.label}>Hobi</td>
              <td style={styles.value}>:
                <ul style={styles.hobiList}>
                  {data.hobi.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BiodataAkademik;