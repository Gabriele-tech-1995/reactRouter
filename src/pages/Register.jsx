function Register() {
  return (
    <div className="auth-page">
      <h1>Register</h1>

      <form className="auth-form">
        <label htmlFor="register-name">Nome</label>
        <input type="text" id="register-name" placeholder="Inserisci nome" />

        <label htmlFor="register-email">Email</label>
        <input type="email" id="register-email" placeholder="Inserisci email" />

        <label htmlFor="register-password">Password</label>
        <input
          type="password"
          id="register-password"
          placeholder="Inserisci password"
        />

        <button type="submit">Registrati</button>
      </form>
    </div>
  );
}

export default Register;
