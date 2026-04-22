import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { setUser } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();

    setUser({
      name: name,
      email: email,
    });

    setName("");
    setEmail("");
  }

  return (
    <div className="auth-page">
      <h1>Register</h1>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="register-name">Nome</label>
        <input
          type="text"
          id="register-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Inserisci nome"
        />

        <label htmlFor="register-email">Email</label>
        <input
          type="email"
          id="register-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Inserisci email"
        />

        <button type="submit">Registrati</button>
      </form>
    </div>
  );
}

export default Register;
