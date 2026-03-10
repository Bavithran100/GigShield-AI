function Landing() {
  const login = () => {
    window.location.href =
      "http://localhost:8443/oauth2/authorization/google";
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={login}>
        Login with Google
      </button>
    </div>
  );
}

export default Landing;