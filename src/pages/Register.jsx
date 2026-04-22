import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { setUser } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();

    setUser({
      name,
      email,
    });

    setName("");
    setEmail("");
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="card-title text-2xl">Register</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Inserisci nome"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Inserisci email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit" className="btn btn-primary">
              Registrati
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
