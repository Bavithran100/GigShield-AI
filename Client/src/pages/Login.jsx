import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";

function Login() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    axiosClient
      .get("/api/user/me")
      .then(() => setAuthenticated(true))
      .catch(() => setAuthenticated(false));
  }, []);

  const handleGoogleLogin = async () => {
    const response = await axiosClient.get("/api/auth/login-url");
    window.location.href = response.data.url;
  };

  if (authenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="login-layout">
      <section className="hero-card">
        <p className="eyebrow">Task 1 starter</p>
        <h1>Session-based onboarding for gig worker insurance.</h1>
        <p className="hero-copy">
          Google OAuth signs the user in, Spring Security creates the server session,
          Redis stores it, and the React app keeps using the same cookie on every API call.
        </p>
        <button type="button" className="primary-button" onClick={handleGoogleLogin}>
          Login with Google
        </button>
        <div className="feature-grid">
          <article>
            <strong>Server sessions</strong>
            <span>No JWT anywhere in the flow.</span>
          </article>
          <article>
            <strong>Redis-backed auth</strong>
            <span>Session IDs persist across backend instances.</span>
          </article>
          <article>
            <strong>Profile and plan setup</strong>
            <span>Users can complete onboarding in one pass.</span>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Login;
