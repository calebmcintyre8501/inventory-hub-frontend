import { useEffect, useState } from "react";
import * as api from "../api/inventoryApi";

// moved the login and registration functions out of App.jsx
// this also keeps track of the logged in user
function useAuth() {
  const [currentUser, setCurrentUser] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // checks if the user is already logged in
  useEffect(() => {
    async function checkLogin() {
      try {
        const response = await api.getCurrentUser();

        if (response.ok) {
          const data = await response.json();
          setCurrentUser(data);
        } else {
          setCurrentUser(null);
        }
      } catch (error) {
        console.log(error);
        setCurrentUser(null);
      }
    }

    checkLogin();
  }, []);

  // registers a new user
  async function handleRegister(e) {
    e.preventDefault();

    try {
      const response = await api.registerUser(username, email, password, firstName, lastName);
      const data = await response.json();

      if (response.ok) {
        setMessage("Account created! You're ready to get started.");
        setUsername("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
      } else {
        setMessage(data.error || "	Couldn't create your account. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setMessage("Could not connect to the server.");
    }
  }

  // logs the user in
  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.loginUser(loginEmail, loginPassword);
      const data = await response.json();

      if (response.ok) {
        setCurrentUser(data.user);
        setLoginEmail("");
        setLoginPassword("");
        setMessage("Welcome back!");
        return true;
      } else {
        setMessage(data.error || "Couldn't sign you in. Check your credentials and try again.");
        return false;
      }
    } catch (error) {
      console.log(error);
      setMessage("Could not connect to the server.");
      return false;
    }
  }

  // logs the user out
  async function handleLogout() {
    try {
      const response = await api.logoutUser();

      if (response.ok) {
        setCurrentUser(null);
        setMessage("You've been logged out. See you next time!");
        return true;
      } else {
        setMessage("Couldn't log you out. Please try again.");
        return false;
      }
    } catch (error) {
      console.log(error);
      setMessage("Could not connect to the server.");
      return false;
    }
  }

  return {
    currentUser,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    message,
    setMessage,
    handleRegister,
    handleLogin,
    handleLogout,
    firstName,
    setFirstName,
    lastName,
    setLastName
  };
}

export default useAuth;