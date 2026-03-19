import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import AppShell from "../components/AppShell";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, subscriptionResponse] = await Promise.all([
        axiosClient.get("/api/user/me"),
        axiosClient.get("/api/subscription/me"),
      ]);

      setUser(userResponse.data);
      setSubscription(subscriptionResponse.data);
    };

    loadData().catch(() => {
      setSubscription(null);
    });
  }, []);

  return (
    <AppShell
      title="Dashboard"
      subtitle="Your current onboarding state, plan selection, and profile completeness all live here."
    >
      <div className="dashboard-grid">
        <section className="info-card">
          <p className="card-label">Worker</p>
          <h3>{user?.name || "Loading..."}</h3>
          <p>{user?.email}</p>
        </section>

        <section className="info-card">
          <p className="card-label">Profile status</p>
          <h3>{user?.profileCompleted ? "Completed" : "Pending"}</h3>
          <p>{user?.city || "Add city, phone, platform, and vehicle details."}</p>
        </section>

        <section className="info-card">
          <p className="card-label">Active subscription</p>
          <h3>{subscription?.planType || "No active plan"}</h3>
          <p>
            {subscription
              ? `Rs ${subscription.weeklyPrice}/week | Rs ${subscription.coverageAmount}/day coverage`
              : "Choose a plan to activate coverage."}
          </p>
        </section>
      </div>

      <div className="action-row">
        <Link className="primary-button inline-button" to="/profile">
          Update profile
        </Link>
        <Link className="secondary-button inline-button" to="/subscription">
          Subscribe plan
        </Link>
      </div>
    </AppShell>
  );
}

export default Dashboard;
