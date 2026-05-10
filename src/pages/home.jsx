import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <div className="home-badge">🦷 Klinik Gigi Profesional</div>

        <h1>
          Senyum Sehat
          <span>Bersama DentalCare</span>
        </h1>

        <p>
          Kami membantu Anda mendapatkan perawatan gigi terbaik dengan dokter
          profesional, fasilitas modern, dan pelayanan yang nyaman.
        </p>

        <div className="home-actions">
          <Link to="/login" className="btn">
            Login Admin
          </Link>

          <Link to="/dashboard" className="btn-outline">
            Lihat Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}