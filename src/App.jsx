import React from 'react';

// --- Komponen Utama Biodata (Paling Keren) ---
const KartuBiodataKeren = () => {
  // 1. DATA ANDA (Ubah di Sini)
  const dataMahasiswa = {
    nama: "Muhammad Exel", // Ganti dengan nama Anda
    nim: "2457301090",    // Ganti dengan NIM Anda
    kelas: "2 SIE",      // Ganti dengan Kelas Anda
    jurusan: "SISTEM INFORMASI", // Ganti dengan Jurusan Anda
    // Ganti URL ini dengan URL foto asli Anda (misal dari Google Drive/Github)
    // Atau simpan foto di folder 'public' dan panggil "/nama-foto.jpg"
    fotoUrl: "/profile.jpg",
    hobi: ["Coding 💻", "Gaming 🎮", "Music 🎧", "Traveling ✈️"]
  };

  // 2. STYLES (Modern & Responsif)
  const styles = {
    // Container untuk menengahkan kartu
    pageWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f4f8', // Warna background halaman yang lembut
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      padding: '20px'
    },
    // Kartu utama dengan efek transisi
    card: {
      backgroundColor: '#ffffff',
      width: '100%',
      maxWidth: '480px',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      overflow: 'hidden',
      transition: 'all 0.3s ease', // Efek transisi saat hover
      border: '1px solid #e1e8ed'
    },
    // Efek saat mouse diarahkan ke kartu
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 35px rgba(0,0,0,0.12)'
    },
    // Bagian atas kartu (biru)
    header: {
      background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
      padding: '40px 20px 30px 20px',
      textAlign: 'center',
      color: '#ffffff'
    },
    // Gaya foto profil bulat
    profileImg: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      border: '5px solid #ffffff',
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
      objectFit: 'cover',
      marginBottom: '15px'
    },
    titleName: {
      margin: '0',
      fontSize: '24px',
      fontWeight: '700',
      letterSpacing: '0.5px'
    },
    titleSub: {
      margin: '5px 0 0 0',
      fontSize: '14px',
      opacity: '0.8',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    // Bagian konten utama (putih)
    content: {
      padding: '30px',
      color: '#333'
    },
    infoTable: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: '0 12px', // Jarak antar baris
      marginBottom: '25px'
    },
    labelTd: {
      fontWeight: '600',
      color: '#5f6368', // Warna abu-abu Google
      width: '35%',
      verticalAlign: 'top',
      fontSize: '15px'
    },
    valueTd: {
      color: '#202124',
      fontWeight: '500',
      fontSize: '15px'
    },
    dotDot: {
      paddingRight: '8px',
      fontWeight: '700'
    },
    // Bagian Hobi (Badges)
    hobiContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px' // Jarak antar badge
    },
    hobiBadge: {
      backgroundColor: '#e8f0fe',
      color: '#1a73e8',
      padding: '6px 14px',
      borderRadius: '20px',
      fontSize: '13px',
      fontWeight: '600',
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
    }
  };

  // 3. LOGIKA UNTUK EFEK HOVER (Menggunakan State)
  const [isHovered, setIsHovered] = React.useState(false);

  // 4. STRUKTUR JSX
  return (
    <div style={styles.pageWrapper}>
      {/* Kartu Utama - Menambahkan event hover */}
      <div 
        style={{ ...styles.card, ...(isHovered ? styles.cardHover : {}) }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Header Biru + Foto */}
        <div style={styles.header}>
          <img 
            src={dataMahasiswa.fotoUrl} 
            alt="Foto Profil" 
            style={styles.profileImg} 
          />
          <h1 style={styles.titleName}>{dataMahasiswa.nama}</h1>
          <p style={styles.titleSub}>Mahasiswa Aktif</p>
        </div>

        {/* Konten Putih */}
        <div style={styles.content}>
          <table style={styles.infoTable}>
            <tbody>
              <tr>
                <td style={styles.labelTd}>NIM</td>
                <td style={styles.valueTd}><span style={styles.dotDot}>:</span>{dataMahasiswa.nim}</td>
              </tr>
              <tr>
                <td style={styles.labelTd}>Kelas</td>
                <td style={styles.valueTd}><span style={styles.dotDot}>:</span>{dataMahasiswa.kelas}</td>
              </tr>
              <tr>
                <td style={styles.labelTd}>Jurusan</td>
                <td style={styles.valueTd}><span style={styles.dotDot}>:</span>{dataMahasiswa.jurusan}</td>
              </tr>
            </tbody>
          </table>

          {/* Bagian Hobi dalam bentuk Badges */}
          <h3 style={{ fontSize: '16px', color: '#5f6368', marginBottom: '10px' }}>Minat & Hobi:</h3>
          <div style={styles.hobiContainer}>
            {dataMahasiswa.hobi.map((item, index) => (
              <span key={index} style={styles.hobiBadge}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Komponen Ekspor Utama ---
export default function App() {
  return (
    <div className="App">
      <KartuBiodataKeren />
    </div>
  );
}