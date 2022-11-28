import axios from "axios";
import { useEffect } from "react";
import Header from "../components/Header";

function AdminPage() {

  const aluno = "darvas"
  const id = "3bUbdB1gvPzWrThpazVC"
  const headers = {
    headers: {
      auth: localStorage.getItem("token")
    }
  }
  useEffect(() => {
    axios
    .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trip/${id}`,
    headers)
    .then((response) => {
      console.log(response)
    })
    .catch(((error) => {
      console.log(error)
    }))
  }, [])

  return (
    <main>
      <Header />
      <h1>Página de Admin</h1>
    </main>
  );
}

export default AdminPage;
