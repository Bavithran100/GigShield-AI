import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8443/api/user", {
      withCredentials: true
    })
    .then(res => setUser(res.data))
    .catch((err) =>{ window.location.href = "/";
      console.log(err+"  Fuck login again");
    });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {user && (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
      )}
    </div>
  );
}

export default Dashboard;