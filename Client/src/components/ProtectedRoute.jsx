import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";

function ProtectedRoute({ children }) {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let mounted = true;

    axiosClient
      .get("/api/user/me")
      .then(() => {
        if (mounted) {
          setStatus("ready");
        }
      })
      .catch(() => {
        if (mounted) {
          setStatus("unauthorized");
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (status === "loading") {
    return <div className="loading-state">Checking your session...</div>;
  }

  if (status === "unauthorized") {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
