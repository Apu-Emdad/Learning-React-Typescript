import React, { useContext } from "react";
import { buttonStyle } from "../components/Login";
import { UserContext } from "../components/UserContext/UserContext";
const User = () => {
  const { user, setUser } = useContext(UserContext);
  const handleLogin = () => {
    setUser({
      name: "mamun",
      email: "mamun@exmaple.com",
    });
  };
  const handleLogOut = () => {
    setUser(null);
    console.log("Logged Out");
  };
  return (
    <div>
      <h1>User Context</h1>
      <h4>User:{user?.name}</h4>
      <h4>Email:{user?.email}</h4>
      <button style={buttonStyle} onClick={handleLogin}>
        Login
      </button>
      <button style={buttonStyle} onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default User;
