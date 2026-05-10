import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleLogin}>
        <div className="login-icon">🦷</div>

        <h2>DentalCare Login</h2>
        <p>Masuk ke sistem klinik gigi</p>

        <input type="email" placeholder="Email admin" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Masuk Dashboard</button>
      </form>
    </div>
  );
}