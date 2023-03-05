import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { redirect } from "react-router-dom";
import { auth, logout } from "./api";
import { Container, NavButton } from "./NavBar.styled";

function NavBar() {
  const [user] = useAuthState(auth);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    redirect("/");
  };

  return (
    <Container>
      <NavButton to={"/"}>Home</NavButton>
      {user ? (
        <NavButton onClick={handleLogout}>Logout</NavButton>
      ) : (
        <div>
          <NavButton to={"/login"}>Login</NavButton>
          <NavButton to={"/signup"}>Signup</NavButton>
        </div>
      )}
    </Container>
  );
}

export default NavBar;
