import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <nav className="main-navbar">

        <div className="nav-logo">
          <div className="logo-icon">🦷</div>

          <h1>
            Dental<span>Care</span>
          </h1>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login" className="login-nav-btn">
            Login
          </Link>
        </div>

      </nav>

      <Outlet />
    </>
  );
}