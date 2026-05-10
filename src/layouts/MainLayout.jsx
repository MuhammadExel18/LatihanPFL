import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <nav>
        <h1>
          Dental<span>Care</span>
        </h1>

        <div>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
}