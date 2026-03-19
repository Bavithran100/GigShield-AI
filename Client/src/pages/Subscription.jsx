import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import AppShell from "../components/AppShell";

function Subscription() {
  const [plans, setPlans] = useState([]);
  const [activeCode, setActiveCode] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axiosClient.get("/api/plans").then((response) => setPlans(response.data));
  }, []);

  const subscribe = async (planCode) => {
    await axiosClient.post("/api/subscription", {
      planCode,
      paymentReference: `mock-razorpay-${planCode.toLowerCase()}`,
    });

    setActiveCode(planCode);
    setMessage("Subscription activated with mock payment.");
    setTimeout(() => navigate("/dashboard"), 700);
  };

  return (
    <AppShell
      title="Insurance subscription"
      subtitle="These plans are seeded automatically in MySQL and activated through a mocked payment reference."
    >
      <div className="plan-grid">
        {plans.map((plan) => (
          <article key={plan.id} className="plan-card">
            <p className="card-label">{plan.code}</p>
            <h3>{plan.name}</h3>
            <p className="plan-price">Rs {plan.weeklyPrice}/week</p>
            <p>Coverage: Rs {plan.coverageAmount}/day</p>
            <button
              type="button"
              className="primary-button"
              onClick={() => subscribe(plan.code)}
            >
              {activeCode === plan.code ? "Processing..." : "Subscribe"}
            </button>
          </article>
        ))}
      </div>
      {message ? <p className="success-message">{message}</p> : null}
    </AppShell>
  );
}

export default Subscription;
