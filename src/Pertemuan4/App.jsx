import React, { useState } from 'react';
import data from './courses.json';

const App = () => {
  const [role, setRole] = useState("guest");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const courses = data.courses;

  // ❌ ERROR 1: DATA KOSONG
  if (!courses || courses.length === 0) {
    return <h2 style={{ textAlign: 'center' }}>❌ Data course tidak tersedia</h2>;
  }

  // 🔍 FILTER GLOBAL
  const filteredCourses = courses.filter(c =>
    c.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || c.category === category)
  );

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f4f6f9', minHeight: '100vh' }}>

      {/* HEADER */}
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>🎓 E-Learning Platform</h1>
        <p>Login sebagai: <b>{role.toUpperCase()}</b></p>

        <button onClick={() => setRole("guest")} style={btnStyle}>Guest</button>
        <button onClick={() => setRole("admin")} style={{ ...btnStyle, background: '#e53935' }}>Admin</button>
      </div>

      {/* SEARCH & FILTER */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="🔍 Cari course..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={inputStyle}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)} style={inputStyle}>
          <option value="">Semua Kategori</option>
          {[...new Set(courses.map(c => c.category))].map((cat, i) => (
            <option key={i}>{cat}</option>
          ))}
        </select>
      </div>

      {/* ================= GUEST ================= */}
      {role === "guest" && (
        <div style={gridStyle}>

          {/* ❌ ERROR 2: DATA TIDAK DITEMUKAN */}
          {filteredCourses.length === 0 && (
            <p style={{ gridColumn: '1/-1', textAlign: 'center' }}>
              ❌ Course tidak ditemukan
            </p>
          )}

          {filteredCourses.map((course) => (
            <div key={course.id} style={cardStyle}>
              
              {/* ❌ ERROR 3: GAMBAR ERROR */}
              <img 
                src={course.thumbnail_url} 
                alt={course.title}
                style={imgStyle}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/300x180?text=No+Image";
                }}
              />

              <div style={{ padding: '15px' }}>
                <span style={badgeStyle}>{course.category}</span>

                <h3 style={{ margin: '10px 0' }}>{course.title}</h3>
                <p style={{ fontSize: '14px', color: '#666' }}>
                  {course.description}
                </p>

                <h4 style={{ color: '#2e7d32' }}>
                  Rp {course.price.toLocaleString('id-ID')}
                </h4>

                <div style={{ fontSize: '13px', marginTop: '10px' }}>
                  👨‍🏫 {course.instructor_detail.name}
                </div>

                <button style={buyBtn}>Ambil Course</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ================= ADMIN ================= */}
      {role === "admin" && (
        <div style={{ padding: '30px' }}>
          
          <h2 style={{ marginBottom: '20px' }}>📊 Admin Dashboard</h2>

          {/* STATS */}
          <div style={{ display: 'flex', gap: '20px', marginBottom: '25px' }}>
            <div style={statCard}>
              <h3>{filteredCourses.length}</h3>
              <p>Course Ditampilkan</p>
            </div>

            <div style={statCard}>
              <h3>
                Rp {filteredCourses.reduce((acc, c) => acc + c.price, 0).toLocaleString('id-ID')}
              </h3>
              <p>Total Value</p>
            </div>

            <div style={statCard}>
              <h3>
                {filteredCourses.length > 0 
                  ? Math.max(...filteredCourses.map(c => c.instructor_detail.rating)) 
                  : 0}
              </h3>
              <p>Top Rating</p>
            </div>
          </div>

          {/* TABLE */}
          <div style={{ overflowX: 'auto' }}>
            <table style={tableStyle}>
              <thead>
                <tr style={{ background: '#1976d2', color: 'white' }}>
                  <th>ID</th>
                  <th>Course</th>
                  <th>Kategori</th>
                  <th>Harga</th>
                  <th>Instructor</th>
                  <th>Rating</th>
                  <th>Aksi</th>
                </tr>
              </thead>

              <tbody>

                {/* ❌ ERROR 2: DATA TIDAK DITEMUKAN */}
                {filteredCourses.length === 0 && (
                  <tr>
                    <td colSpan="7" style={{ textAlign: 'center', padding: '20px' }}>
                      ❌ Data tidak ditemukan
                    </td>
                  </tr>
                )}

                {filteredCourses.map((course) => (
                  <tr key={course.id} style={rowStyle}>
                    <td>{course.id}</td>

                    <td style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <img 
                        src={course.thumbnail_url}
                        alt=""
                        style={{ width: '50px', borderRadius: '6px' }}
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/50?text=No+Image";
                        }}
                      />
                      {course.title}
                    </td>

                    <td>{course.category}</td>
                    <td>Rp {course.price.toLocaleString('id-ID')}</td>
                    <td>{course.instructor_detail.name}</td>
                    <td>⭐ {course.instructor_detail.rating}</td>

                    <td>
                      <button style={editBtn}>Edit</button>
                      <button style={deleteBtn}>Hapus</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;



// ================= STYLE =================

const btnStyle = {
  margin: '5px',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '6px',
  background: '#1976d2',
  color: 'white',
  cursor: 'pointer'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: '20px',
  padding: '20px'
};

const cardStyle = {
  background: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  overflow: 'hidden'
};

const imgStyle = {
  width: '100%',
  height: '180px',
  objectFit: 'cover'
};

const badgeStyle = {
  background: '#e3f2fd',
  color: '#1976d2',
  padding: '4px 10px',
  borderRadius: '20px',
  fontSize: '12px'
};

const buyBtn = {
  marginTop: '10px',
  width: '100%',
  padding: '8px',
  background: '#43a047',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
};

const statCard = {
  flex: 1,
  padding: '20px',
  background: '#fff',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  textAlign: 'center'
};

const inputStyle = {
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  minWidth: '200px'
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  background: '#fff'
};

const rowStyle = {
  borderBottom: '1px solid #eee'
};

const editBtn = {
  marginRight: '5px',
  padding: '5px 10px',
  background: '#fbc02d',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

const deleteBtn = {
  padding: '5px 10px',
  background: '#e53935',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};