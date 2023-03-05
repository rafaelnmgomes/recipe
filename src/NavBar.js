import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "./api";
import { Container, NavButton } from "./NavBar.styled";

function NavBar() {
  const [user] = useAuthState(auth);

  return (
    <Container>
      <NavButton to={"/"}>Home</NavButton>
      {user ? (
        <NavButton onClick={logout}>Logout</NavButton>
      ) : (
        <NavButton to={"/login"}>Login</NavButton>
      )}
    </Container>
  );
}

export default NavBar;
