import React, { useState } from "react";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const buttonStyle = {
    padding: "20px",
    borderRadius: "10px",
    margin: "0px 20px",
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log("Logged in");
  };
  const handleLogOut = () => {
    setIsLoggedIn(false);
    console.log("Logged Out");
  };

  return (
    <div>
      <button style={buttonStyle} onClick={handleLogin}>
        Log In
      </button>
      <button style={buttonStyle} onClick={handleLogOut}>
        Log Out
      </button>
      <h5>User is {isLoggedIn ? "logged in" : "logged out"}</h5>
    </div>
  );
};

export default Login;
