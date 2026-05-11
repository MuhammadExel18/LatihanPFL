import { useState } from "react";

const initialData = {
  patients: [
    { id: 1, nama: "Andi Saputra", kategori: "Scaling", status: "Selesai", kontak: "0812-1111-2222" },
    { id: 2, nama: "Siti Aulia", kategori: "Whitening", status: "Proses", kontak: "0821-3333-4444" },
  ],
  doctors: [
    { id: 1, nama: "drg. Amanda", kategori: "Orthodontist", status: "Aktif", kontak: "amanda@clinic.com" },
    { id: 2, nama: "drg. Reza", kategori: "Dental Surgeon", status: "Aktif", kontak: "reza@clinic.com" },
  ],
  schedules: [
    { id: 1, nama: "Janji Andi", kategori: "12 Juni 2025", status: "10:00", kontak: "drg. Amanda" },
  ],
  finance: [
    { id: 1, nama: "Pendapatan Scaling", kategori: "Rp 500.000", status: "Masuk", kontak: "12 Juni 2025" },
  ],
  reports: [
    { id: 1, nama: "Laporan Harian", kategori: "Kunjungan Pasien", status: "Selesai", kontak: "Admin" },
  ],
};

const pageInfo = {
  patients: { title: "Data Pasien", add: "Tambah Pasien" },
  doctors: { title: "Data Dokter", add: "Tambah Dokter" },
  schedules: { title: "Data Jadwal", add: "Tambah Jadwal" },
  finance: { title: "Data Keuangan", add: "Tambah Keuangan" },
  reports: { title: "Data Laporan", add: "Tambah Laporan" },
};

export default function Dashboard() {
  const [menu, setMenu] = useState("dashboard");
  const [data, setData] = useState(initialData);
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({
    nama: "",
    kategori: "",
    status: "",
    kontak: "",
  });

  function openAdd(type) {
    setForm({ nama: "", kategori: "", status: "", kontak: "" });
    setModal({ mode: "add", type });
  }

  function openDetail(type, item) {
    setModal({ mode: "detail", type, item });
  }

  function saveData(e) {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      ...form,
    };

    setData({
      ...data,
      [modal.type]: [...data[modal.type], newItem],
    });

    setModal(null);
  }

  function deleteData(type, id) {
    if (!confirm("Yakin ingin menghapus data ini?")) return;

    setData({
      ...data,
      [type]: data[type].filter((item) => item.id !== id),
    });
  }

  return (
    <div className="sedap-dashboard">
      <aside className="sidebar">
        <div className="logo">
          Dental<span>Care</span>
        </div>

        <div className="side-menu">
          <button className={menu === "dashboard" ? "active" : ""} onClick={() => setMenu("dashboard")}>
            <span>🏠</span> Dashboard
          </button>

          <button className={menu === "patients" ? "active" : ""} onClick={() => setMenu("patients")}>
            <span>🦷</span> Pasien
          </button>

          <button className={menu === "doctors" ? "active" : ""} onClick={() => setMenu("doctors")}>
            <span>👨‍⚕️</span> Dokter
          </button>

          <button className={menu === "schedules" ? "active" : ""} onClick={() => setMenu("schedules")}>
            <span>📅</span> Jadwal
          </button>

          <button className={menu === "finance" ? "active" : ""} onClick={() => setMenu("finance")}>
            <span>💰</span> Keuangan
          </button>

          <button className={menu === "reports" ? "active" : ""} onClick={() => setMenu("reports")}>
            <span>📊</span> Laporan
          </button>
        </div>
      </aside>

      <main className="dashboard-main">
        <div className="topbar">
          <input type="text" placeholder="Cari pasien, dokter, jadwal..." />

          <div className="top-icons">
            <span>🔔</span>
            <span>⚙️</span>

            <div className="profile">
              <h4>Muhammad Exel</h4>
              <p>DentalCare Clinic</p>
            </div>
          </div>
        </div>

        {menu === "dashboard" ? (
          <DashboardHome
            data={data}
            openAdd={openAdd}
            openDetail={openDetail}
            deleteData={deleteData}
          />
        ) : (
          <DataPage
            type={menu}
            items={data[menu]}
            openAdd={openAdd}
            openDetail={openDetail}
            deleteData={deleteData}
          />
        )}
      </main>

      {modal?.mode === "add" && (
        <div className="modal-overlay">
          <form className="modal-card" onSubmit={saveData}>
            <h2>{pageInfo[modal.type].add}</h2>
            <p>Isi data dengan lengkap dan benar.</p>

            <input
              type="text"
              placeholder="Nama / Judul"
              value={form.nama}
              onChange={(e) => setForm({ ...form, nama: e.target.value })}
              required
            />

            <input
              type="text"
              placeholder="Kategori / Layanan / Tanggal"
              value={form.kategori}
              onChange={(e) => setForm({ ...form, kategori: e.target.value })}
              required
            />

            <input
              type="text"
              placeholder="Status"
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              required
            />

            <input
              type="text"
              placeholder="Kontak / Keterangan"
              value={form.kontak}
              onChange={(e) => setForm({ ...form, kontak: e.target.value })}
              required
            />

            <div className="modal-actions">
              <button type="button" className="cancel-btn" onClick={() => setModal(null)}>
                Batal
              </button>

              <button type="submit" className="add-btn">
                Simpan
              </button>
            </div>
          </form>
        </div>
      )}

      {modal?.mode === "detail" && (
        <div className="modal-overlay">
          <div className="modal-card detail-modal">
            <div className="avatar">{modal.item.nama[0]}</div>

            <h2>{modal.item.nama}</h2>
            <p><b>Kategori:</b> {modal.item.kategori}</p>
            <p><b>Status:</b> {modal.item.status}</p>
            <p><b>Kontak/Keterangan:</b> {modal.item.kontak}</p>

            <button className="add-btn" onClick={() => setModal(null)}>
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function DashboardHome({ data, openAdd, openDetail, deleteData }) {
  return (
    <div className="content-card">
      <div className="page-header">
        <div>
          <h2>Dashboard Klinik Gigi</h2>
          <p className="breadcrumb">Semua data dapat ditambah, dilihat, dan dihapus.</p>
        </div>

        <button className="add-btn" onClick={() => openAdd("patients")}>
          + Tambah Pasien
        </button>
      </div>

      <div className="stat-cards">
        <Stat icon="🦷" value={data.patients.length} label="Total Pasien" />
        <Stat icon="👨‍⚕️" value={data.doctors.length} label="Total Dokter" />
        <Stat icon="📅" value={data.schedules.length} label="Total Jadwal" />
      </div>

      <DataPage
        type="patients"
        items={data.patients}
        openAdd={openAdd}
        openDetail={openDetail}
        deleteData={deleteData}
      />
    </div>
  );
}

function DataPage({ type, items, openAdd, openDetail, deleteData }) {
  return (
    <div className="table-card">
      <div className="page-header">
        <div>
          <h2>{pageInfo[type].title}</h2>
          <p className="breadcrumb">Kelola data {pageInfo[type].title.toLowerCase()}</p>
        </div>

        <button className="add-btn" onClick={() => openAdd(type)}>
          + {pageInfo[type].add}
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nama/Judul</th>
            <th>Kategori</th>
            <th>Status</th>
            <th>Kontak/Keterangan</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.nama}</td>
              <td>{item.kategori}</td>
              <td>
                <span className="badge selesai">{item.status}</span>
              </td>
              <td>{item.kontak}</td>
              <td>
                <div className="action-buttons">
                  <button className="detail-btn" onClick={() => openDetail(type, item)}>
                    Detail
                  </button>

                  <button className="delete-btn" onClick={() => deleteData(type, item.id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {items.length === 0 && (
            <tr>
              <td colSpan="5">Belum ada data.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="stat-box">
      <div className="circle">{icon}</div>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
}