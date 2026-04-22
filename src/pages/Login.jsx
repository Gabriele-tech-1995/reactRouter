function Login() {
  return (
    <div className="auth-page">
      <h1>Login</h1>

      <form className="auth-form">
        <label htmlFor="login-email">Email</label>
        <input type="email" id="login-email" placeholder="Inserisci email" />

        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          id="login-password"
          placeholder="Inserisci password"
        />

        <button type="submit">Accedi</button>
      </form>
    </div>
  );
}

export default Login;
