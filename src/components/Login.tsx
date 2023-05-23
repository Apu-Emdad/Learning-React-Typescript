import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
export const buttonStyle = {
  padding: "20px",
  borderRadius: "10px",
  margin: "0px 20px",
  cursor: "pointer",
};

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);

  // type assertion
  // const [user, setUser] = useState<AuthUser | null>({} as AuthUser);

  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log("Logged in");
    setUser({
      name: "Vishwas",
      email: "vishwas@example.com",
    });
  };
  const handleLogOut = () => {
    setIsLoggedIn(false);
    console.log("Logged Out");
    setUser(null);
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
      <b>user name {user?.name}</b>
      <b>user email {user?.email}</b>
    </div>
  );
};

export default Login;
