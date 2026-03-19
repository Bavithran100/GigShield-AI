import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import AppShell from "../components/AppShell";

const initialForm = {
  name: "",
  phoneNumber: "",
  city: "",
  deliveryPlatform: "Swiggy",
  vehicleType: "Bike",
  aadhaarLast4: "",
};

function Profile() {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axiosClient.get("/api/user/me").then((response) => {
      const user = response.data;
      setForm({
        name: user.name || "",
        phoneNumber: user.phoneNumber || "",
        city: user.city || "",
        deliveryPlatform: user.deliveryPlatform || "Swiggy",
        vehicleType: user.vehicleType || "Bike",
        aadhaarLast4: user.aadhaarLast4 || "",
      });
    });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axiosClient.post("/api/user/profile", form);
    setMessage("Profile updated successfully.");
    setTimeout(() => navigate("/dashboard"), 700);
  };

  return (
    <AppShell
      title="Profile completion"
      subtitle="Collect the minimum worker data needed for Task 1 onboarding."
    >
      <form className="form-card" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>

        <label>
          Phone number
          <input
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            inputMode="numeric"
            pattern="[0-9]{10}"
            required
          />
        </label>

        <label>
          City
          <input name="city" value={form.city} onChange={handleChange} required />
        </label>

        <label>
          Delivery platform
          <select
            name="deliveryPlatform"
            value={form.deliveryPlatform}
            onChange={handleChange}
          >
            <option>Swiggy</option>
            <option>Zomato</option>
            <option>Amazon</option>
            <option>Other</option>
          </select>
        </label>

        <label>
          Vehicle type
          <select name="vehicleType" value={form.vehicleType} onChange={handleChange}>
            <option>Bike</option>
            <option>Scooter</option>
            <option>Bicycle</option>
            <option>Auto</option>
            <option>Other</option>
          </select>
        </label>

        <label>
          Aadhaar last 4
          <input
            name="aadhaarLast4"
            value={form.aadhaarLast4}
            onChange={handleChange}
            inputMode="numeric"
            pattern="[0-9]{4}"
            required
          />
        </label>

        <button type="submit" className="primary-button">
          Save profile
        </button>
        {message ? <p className="success-message">{message}</p> : null}
      </form>
    </AppShell>
  );
}

export default Profile;
