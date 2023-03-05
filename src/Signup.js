import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { redirect } from "react-router-dom";
import { registerWithEmailAndPassword } from "./api";
import { Container, Button, Form, Input, Label, Title } from "./Login.styled";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required");
      return;
    }

    if (!password) {
      toast.error("Password is required");
      return;
    }

    registerWithEmailAndPassword(email, password);
    redirect("/");
  };

  return (
    <Container>
      <Form>
        <Title>Sign up</Title>
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
        <Button onClick={handleSubmit}>Sign Up</Button>
      </Form>
    </Container>
  );
}

export default Login;
