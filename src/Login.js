import React, { useState } from "react";
import { signInWithGoogle, logInWithEmailAndPassword } from "./api";
import {
  Container,
  Button,
  Form,
  GoogleButton,
  Input,
  Label,
  Title,
} from "./Login.styled";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    logInWithEmailAndPassword(email, password);
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithGoogle();
  };

  return (
    <Container>
      <Form>
        <Title>Sign in</Title>
        <Label>Email</Label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button onClick={handleLogin}>Sign In</Button>
        <GoogleButton onClick={handleGoogleLogin}>
          Login with Google
        </GoogleButton>
      </Form>
    </Container>
  );
}

export default Login;
