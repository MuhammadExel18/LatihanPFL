import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">
      <section className="hero-section">
        <div className="hero-left">
          <span className="home-badge">🦷 Klinik Gigi Modern</span>

          <h1>
            Perawatan Gigi Terbaik Untuk Senyum Sehat Anda
          </h1>

          <p>
            DentalCare memberikan layanan pemeriksaan, scaling, tambal gigi,
            whitening, behel, dan konsultasi bersama dokter gigi profesional.
          </p>

          <div className="home-actions">
            <Link to="/login" className="btn">
              Login Admin
            </Link>

            <Link to="/dashboard" className="btn-outline">
              Lihat Dashboard
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <h3>8+</h3>
              <p>Dokter Ahli</p>
            </div>

            <div>
              <h3>500+</h3>
              <p>Pasien Puas</p>
            </div>

            <div>
              <h3>97%</h3>
              <p>Kepuasan</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="doctor-card">
            <div className="doctor-icon">👩‍⚕️</div>
            <h3>DentalCare Clinic</h3>
            <p>Professional Dental Service</p>
          </div>

          <div className="floating-card floating-top">
            ⭐ 97% Pasien Puas
          </div>

          <div className="floating-card floating-bottom">
            📅 Booking Mudah
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="section-title">
          <span>Layanan Kami</span>
          <h2>Perawatan Gigi Terlengkap</h2>
        </div>

        <div className="service-grid">
          <div className="service-card">
            <div>🦷</div>
            <h3>Scaling Gigi</h3>
            <p>Pembersihan karang gigi agar mulut lebih sehat dan segar.</p>
          </div>

          <div className="service-card">
            <div>😁</div>
            <h3>Whitening</h3>
            <p>Membantu membuat gigi tampak lebih cerah dan percaya diri.</p>
          </div>

          <div className="service-card">
            <div>😬</div>
            <h3>Behel Gigi</h3>
            <p>Perawatan ortodonti untuk merapikan susunan gigi.</p>
          </div>
        </div>
      </section>
    </main>
  );
}