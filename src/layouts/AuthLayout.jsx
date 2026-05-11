import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="auth-layout">

      <div className="auth-background-circle auth-circle-1"></div>
      <div className="auth-background-circle auth-circle-2"></div>

      <div className="auth-wrapper">

        <div className="auth-left">

          <div className="auth-badge">
            🦷 DentalCare Professional
          </div>

          <h1>
            Sistem Management
            <span>Klinik Gigi Modern</span>
          </h1>

          <p>
            Kelola pasien, dokter, jadwal, dan laporan klinik
            dengan tampilan modern dan profesional.
          </p>

          <div className="auth-stats">

            <div className="auth-stat-card">
              <h3>500+</h3>
              <p>Pasien Aktif</p>
            </div>

            <div className="auth-stat-card">
              <h3>12</h3>
              <p>Dokter Profesional</p>
            </div>

            <div className="auth-stat-card">
              <h3>98%</h3>
              <p>Kepuasan Pasien</p>
            </div>

          </div>

        </div>

        <div className="auth-right">
          <Outlet />
        </div>

      </div>

    </main>
  );
}