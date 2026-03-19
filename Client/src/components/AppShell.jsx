import { Link, useLocation, useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";

const navItems = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/profile", label: "Profile" },
  { to: "/subscription", label: "Subscription" },
];

function AppShell({ title, subtitle, children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await axiosClient.post("/api/auth/logout");
    navigate("/login");
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div>
          <p className="eyebrow">GigShield AI</p>
          <h1>Gig worker insurance that starts with a secure session.</h1>
        </div>

        <nav className="nav-list">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={location.pathname === item.to ? "nav-link active" : "nav-link"}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button type="button" className="secondary-button" onClick={handleLogout}>
          Log out
        </button>
      </aside>

      <main className="page-panel">
        <div className="page-header">
          <div>
            <p className="eyebrow">Starter workflow</p>
            <h2>{title}</h2>
          </div>
          {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}
        </div>
        {children}
      </main>
    </div>
  );
}

export default AppShell;
