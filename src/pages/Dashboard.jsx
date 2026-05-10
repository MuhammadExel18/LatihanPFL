import { useState } from "react";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("dashboard");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const [patients, setPatients] = useState([
    { id: "#PSN-001", name: "Muhammad Exel", treatment: "Scaling", status: "Selesai", email: "exel@gmail.com", phone: "0812-3456-7890", address: "Pekanbaru, Riau" },
    { id: "#PSN-002", name: "Aldi Saputra", treatment: "Tambal Gigi", status: "Proses", email: "aldi@gmail.com", phone: "0821-1111-2222", address: "Rumbai, Riau" },
  ]);

  const [doctors, setDoctors] = useState([
    { name: "Dr. Andini", specialist: "Ortodonti", status: "Aktif", email: "andini@dentalcare.com", phone: "0821-9988-7766" },
    { name: "Dr. Rizky", specialist: "Dokter Gigi Umum", status: "Aktif", email: "rizky@dentalcare.com", phone: "0813-2233-4455" },
  ]);

  const [appointments, setAppointments] = useState([
    { patient: "Muhammad Exel", doctor: "Dr. Andini", date: "12 Juni 2025", time: "10:00" },
  ]);

  const [treatments, setTreatments] = useState([
    { icon: "🦷", name: "Scaling", desc: "Pembersihan karang gigi" },
    { icon: "😁", name: "Whitening", desc: "Pemutihan gigi" },
  ]);

  const [medicines, setMedicines] = useState([
    { name: "Paracetamol", stock: "120", category: "Nyeri" },
    { name: "Mouthwash", stock: "75", category: "Perawatan Mulut" },
  ]);

  const [reports, setReports] = useState([
    { icon: "📄", title: "Laporan Harian" },
    { icon: "📊", title: "Laporan Bulanan" },
  ]);

  const menu = [
    { id: "dashboard", icon: "🏥", label: "Dashboard" },
    { id: "patients", icon: "📋", label: "Daftar Pasien" },
    { id: "doctors", icon: "👨‍⚕️", label: "Data Dokter" },
    { id: "appointments", icon: "📅", label: "Janji Temu" },
    { id: "treatment", icon: "🦷", label: "Perawatan" },
    { id: "medicine", icon: "💊", label: "Obat & Resep" },
    { id: "finance", icon: "💰", label: "Keuangan" },
    { id: "reports", icon: "📊", label: "Laporan Klinik" },
    { id: "settings", icon: "⚙️", label: "Pengaturan" },
    { id: "help", icon: "❓", label: "Bantuan" },
  ];

  return (
    <div className="sedap-dashboard">
      <aside className="sidebar">
        <h1 className="logo">
          Dental<span>Care</span>
        </h1>

        <nav className="side-menu">
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={activePage === item.id ? "active" : ""}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="topbar">
          <input type="text" placeholder="Cari pasien, dokter, jadwal..." />

          <div className="top-icons">
            <span>🔔</span>
            <span>🦷</span>
            <span>⚙️</span>

            <div className="profile">
              <p>Halo,</p>
              <b>Muhammad Exel</b>
            </div>
          </div>
        </header>

        {activePage === "dashboard" && (
          <DashboardHome patients={patients} doctors={doctors} appointments={appointments} />
        )}

        {activePage === "patients" && (
          <Patients
            patients={patients}
            setPatients={setPatients}
            setActivePage={setActivePage}
            setSelectedPatient={setSelectedPatient}
          />
        )}

        {activePage === "doctors" && (
          <Doctors
            doctors={doctors}
            setDoctors={setDoctors}
            setActivePage={setActivePage}
            setSelectedDoctor={setSelectedDoctor}
          />
        )}

        {activePage === "appointments" && (
          <Appointments appointments={appointments} setAppointments={setAppointments} />
        )}

        {activePage === "treatment" && (
          <Treatment treatments={treatments} setTreatments={setTreatments} />
        )}

        {activePage === "medicine" && (
          <Medicine medicines={medicines} setMedicines={setMedicines} />
        )}

        {activePage === "finance" && <Finance />}

        {activePage === "reports" && (
          <Reports reports={reports} setReports={setReports} />
        )}

        {activePage === "patientDetail" && (
          <PatientDetail patient={selectedPatient} setActivePage={setActivePage} />
        )}

        {activePage === "doctorDetail" && (
          <DoctorDetail doctor={selectedDoctor} setActivePage={setActivePage} />
        )}

        {activePage === "settings" && <Settings />}
        {activePage === "help" && <Help />}
      </main>
    </div>
  );
}

function DashboardHome({ patients, doctors, appointments }) {
  return (
    <section className="content-card">
      <h2>Dashboard Klinik Gigi</h2>
      <p className="breadcrumb">Dashboard / Overview</p>

      <div className="income-cards">
        <InfoCard title="Pendapatan Bulan Ini" value="Rp 12.500.000" color="green" />
        <InfoCard title="Pengeluaran Klinik" value="Rp 4.200.000" color="red" />
        <InfoCard title="Keuntungan Bersih" value="Rp 8.300.000" color="blue" />
      </div>

      <div className="stat-cards">
        <StatCard icon="🧑‍🤝‍🧑" color="green-bg" value={patients.length} label="Total Pasien" />
        <StatCard icon="📅" color="blue-bg" value={appointments.length} label="Janji Temu" />
        <StatCard icon="👨‍⚕️" color="purple-bg" value={doctors.length} label="Dokter Aktif" />
      </div>
    </section>
  );
}

function Patients({ patients, setPatients, setActivePage, setSelectedPatient }) {
  function addPatient() {
    const name = prompt("Masukkan nama pasien:");
    if (!name) return;

    const treatment = prompt("Masukkan jenis perawatan:");
    if (!treatment) return;

    setPatients([
      ...patients,
      {
        id: `#PSN-${String(patients.length + 1).padStart(3, "0")}`,
        name,
        treatment,
        status: "Terjadwal",
        email: `${name.toLowerCase().replaceAll(" ", "")}@gmail.com`,
        phone: "08xxxxxxxxxx",
        address: "Alamat belum diisi",
      },
    ]);
  }

  function deletePatient(index) {
    setPatients(patients.filter((_, i) => i !== index));
  }

  return (
    <section className="content-card">
      <PageHeader title="Daftar Pasien" subtitle="Dashboard / Pasien" button="+ Tambah Pasien" onClick={addPatient} />

      <DataTable
        headers={["ID", "Nama", "Perawatan", "Status", "Aksi"]}
        rows={patients.map((item, index) => [
          item.id,
          item.name,
          item.treatment,
          <span className={`badge ${item.status.toLowerCase()}`}>{item.status}</span>,
          <div className="action-buttons">
            <button
              className="detail-btn"
              onClick={() => {
                setSelectedPatient(item);
                setActivePage("patientDetail");
              }}
            >
              Detail
            </button>

            <button className="delete-btn" onClick={() => deletePatient(index)}>
              Hapus
            </button>
          </div>,
        ])}
      />
    </section>
  );
}

function Doctors({ doctors, setDoctors, setActivePage, setSelectedDoctor }) {
  function addDoctor() {
    const name = prompt("Masukkan nama dokter:");
    if (!name) return;

    const specialist = prompt("Masukkan spesialis:");
    if (!specialist) return;

    setDoctors([
      ...doctors,
      {
        name,
        specialist,
        status: "Aktif",
        email: `${name.toLowerCase().replaceAll(" ", "")}@dentalcare.com`,
        phone: "08xxxxxxxxxx",
      },
    ]);
  }

  function deleteDoctor(index) {
    setDoctors(doctors.filter((_, i) => i !== index));
  }

  return (
    <section className="content-card">
      <PageHeader title="Data Dokter" subtitle="Dashboard / Dokter" button="+ Tambah Dokter" onClick={addDoctor} />

      <div className="customer-grid">
        {doctors.map((item, index) => (
          <div className="customer-card" key={index}>
            <div className="avatar">{item.name[0]}</div>
            <h3>{item.name}</h3>
            <p>{item.specialist}</p>
            <span>{item.status}</span>

            <div className="action-buttons card-actions">
              <button
                className="detail-btn"
                onClick={() => {
                  setSelectedDoctor(item);
                  setActivePage("doctorDetail");
                }}
              >
                Detail
              </button>

              <button className="delete-btn" onClick={() => deleteDoctor(index)}>
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PatientDetail({ patient, setActivePage }) {
  if (!patient) {
    return (
      <section className="content-card">
        <h2>Detail Pasien</h2>
        <p className="breadcrumb">Data pasien belum dipilih.</p>
        <button className="add-btn" onClick={() => setActivePage("patients")}>
          Kembali ke Daftar Pasien
        </button>
      </section>
    );
  }

  return (
    <section className="content-card">
      <div className="page-header">
        <div>
          <h2>Detail Pasien</h2>
          <p className="breadcrumb">Dashboard / Pasien / Detail</p>
        </div>

        <button className="add-btn" onClick={() => setActivePage("patients")}>
          Kembali
        </button>
      </div>

      <div className="customer-card detail-card">
        <div className="avatar">{patient.name[0]}</div>
        <h3>{patient.name}</h3>
        <p>ID: {patient.id}</p>
        <p>Perawatan: {patient.treatment}</p>
        <p>Email: {patient.email}</p>
        <p>No HP: {patient.phone}</p>
        <p>Alamat: {patient.address}</p>
        <span>{patient.status}</span>
      </div>
    </section>
  );
}

function DoctorDetail({ doctor, setActivePage }) {
  if (!doctor) {
    return (
      <section className="content-card">
        <h2>Detail Dokter</h2>
        <p className="breadcrumb">Data dokter belum dipilih.</p>
        <button className="add-btn" onClick={() => setActivePage("doctors")}>
          Kembali ke Data Dokter
        </button>
      </section>
    );
  }

  return (
    <section className="content-card">
      <div className="page-header">
        <div>
          <h2>Detail Dokter</h2>
          <p className="breadcrumb">Dashboard / Dokter / Detail</p>
        </div>

        <button className="add-btn" onClick={() => setActivePage("doctors")}>
          Kembali
        </button>
      </div>

      <div className="customer-card detail-card">
        <div className="avatar">{doctor.name[0]}</div>
        <h3>{doctor.name}</h3>
        <p>Spesialis: {doctor.specialist}</p>
        <p>Email: {doctor.email}</p>
        <p>No HP: {doctor.phone}</p>
        <span>{doctor.status}</span>
      </div>
    </section>
  );
}

function Appointments({ appointments, setAppointments }) {
  function addAppointment() {
    const patient = prompt("Nama pasien:");
    if (!patient) return;

    const doctor = prompt("Nama dokter:");
    if (!doctor) return;

    const date = prompt("Tanggal:");
    if (!date) return;

    const time = prompt("Jam:");
    if (!time) return;

    setAppointments([...appointments, { patient, doctor, date, time }]);
  }

  function deleteAppointment(index) {
    setAppointments(appointments.filter((_, i) => i !== index));
  }

  return (
    <section className="content-card">
      <PageHeader title="Janji Temu" subtitle="Dashboard / Janji Temu" button="+ Tambah Janji" onClick={addAppointment} />

      <DataTable
        headers={["Pasien", "Dokter", "Tanggal", "Jam", "Aksi"]}
        rows={appointments.map((item, index) => [
          item.patient,
          item.doctor,
          item.date,
          item.time,
          <button className="delete-btn" onClick={() => deleteAppointment(index)}>Hapus</button>,
        ])}
      />
    </section>
  );
}

function Treatment({ treatments, setTreatments }) {
  function addTreatment() {
    const name = prompt("Nama perawatan:");
    if (!name) return;

    const desc = prompt("Deskripsi perawatan:");
    if (!desc) return;

    setTreatments([...treatments, { icon: "🦷", name, desc }]);
  }

  function deleteTreatment(index) {
    setTreatments(treatments.filter((_, i) => i !== index));
  }

  return (
    <section className="content-card">
      <PageHeader title="Perawatan" subtitle="Dashboard / Perawatan" button="+ Tambah Perawatan" onClick={addTreatment} />

      <div className="customer-grid">
        {treatments.map((item, index) => (
          <div className="customer-card" key={index}>
            <div className="avatar">{item.icon}</div>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <button className="delete-btn card-delete" onClick={() => deleteTreatment(index)}>
              Hapus
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Medicine({ medicines, setMedicines }) {
  function addMedicine() {
    const name = prompt("Nama obat:");
    if (!name) return;

    const stock = prompt("Jumlah stok:");
    if (!stock) return;

    const category = prompt("Kategori:");
    if (!category) return;

    setMedicines([...medicines, { name, stock, category }]);
  }

  function deleteMedicine(index) {
    setMedicines(medicines.filter((_, i) => i !== index));
  }

  return (
    <section className="content-card">
      <PageHeader title="Obat & Resep" subtitle="Dashboard / Obat" button="+ Tambah Obat" onClick={addMedicine} />

      <DataTable
        headers={["Nama Obat", "Stok", "Kategori", "Aksi"]}
        rows={medicines.map((item, index) => [
          item.name,
          item.stock,
          item.category,
          <button className="delete-btn" onClick={() => deleteMedicine(index)}>Hapus</button>,
        ])}
      />
    </section>
  );
}

function Reports({ reports, setReports }) {
  function addReport() {
    const title = prompt("Nama laporan:");
    if (!title) return;

    setReports([...reports, { icon: "📄", title }]);
  }

  function deleteReport(index) {
    setReports(reports.filter((_, i) => i !== index));
  }

  return (
    <section className="content-card">
      <PageHeader title="Laporan Klinik" subtitle="Dashboard / Laporan" button="+ Tambah Laporan" onClick={addReport} />

      <div className="customer-grid">
        {reports.map((item, index) => (
          <div className="customer-card" key={index}>
            <div className="avatar">{item.icon}</div>
            <h3>{item.title}</h3>
            <button className="delete-btn card-delete" onClick={() => deleteReport(index)}>
              Hapus
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Finance() {
  return (
    <section className="content-card">
      <h2>Keuangan</h2>
      <p className="breadcrumb">Dashboard / Keuangan</p>

      <div className="income-cards">
        <InfoCard title="Pendapatan" value="Rp 12.500.000" color="green" />
        <InfoCard title="Pengeluaran" value="Rp 4.200.000" color="red" />
        <InfoCard title="Profit" value="Rp 8.300.000" color="blue" />
      </div>
    </section>
  );
}

function Settings() {
  return (
    <section className="content-card">
      <h2>Pengaturan</h2>
      <p className="breadcrumb">Dashboard / Pengaturan</p>

      <div className="customer-card detail-card">
        <h3>Pengaturan Sistem Klinik</h3>
        <p>Kelola akun admin, keamanan, dan konfigurasi aplikasi.</p>
      </div>
    </section>
  );
}

function Help() {
  return (
    <section className="content-card">
      <h2>Bantuan</h2>
      <p className="breadcrumb">Dashboard / Bantuan</p>

      <div className="customer-card detail-card">
        <h3>Butuh Bantuan?</h3>
        <p>Hubungi admin DentalCare untuk bantuan teknis.</p>
      </div>
    </section>
  );
}

function PageHeader({ title, subtitle, button, onClick }) {
  return (
    <div className="page-header">
      <div>
        <h2>{title}</h2>
        <p className="breadcrumb">{subtitle}</p>
      </div>

      <button className="add-btn" onClick={onClick}>
        {button}
      </button>
    </div>
  );
}

function InfoCard({ title, value, color }) {
  return (
    <div className="info-card">
      <small>{title}</small>
      <h3>{value}</h3>
      <div className={`line ${color}`}></div>
    </div>
  );
}

function StatCard({ icon, color, value, label }) {
  return (
    <div className="stat-box">
      <div className={`circle ${color}`}>{icon}</div>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
}

function DataTable({ headers, rows }) {
  return (
    <div className="table-card">
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((col, colIndex) => (
                <td key={colIndex}>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}