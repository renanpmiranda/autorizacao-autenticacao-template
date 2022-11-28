import { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { navigateToAdmin } from "../routes/coordinator";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50vw;
  gap: 5px;
`;

function HomePage() {
  const navigate = useNavigate()

  const [form, setForm] = useState({ email: "", senha: "" });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(form);
    login()
  };

  const login = () => {
    const aluno = "darvas"
    const body = {
      email: form.email,
      password: form.senha
    }
    axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/login`, body)
      .then((response) => {
        console.log(response.data.token)
        localStorage.setItem("token", response.data.token)
        navigateToAdmin(navigate)        
      })
      .catch((error) => {
        console.log(error.response.status)
      })
  }

  return (
    <main>
      <Header />
      <h1>Página Inicial</h1>
      <Form onSubmit={submitForm}>
        <label htmlFor="email">Login</label>
        <input
          id="email"
          name="email"
          type="text"
          value={form.email}
          onChange={onChange}
          placeholder="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          name="senha"
          type="password"
          value={form.senha}
          onChange={onChange}
          placeholder="senha"
          required
        />
        <button>Login</button>
      </Form>
    </main>
  );
}

export default HomePage;
