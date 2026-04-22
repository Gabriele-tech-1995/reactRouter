import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="auth-page">
      <h1>Login</h1>

      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Inserisci email"
          {...register("email", {
            required: "L'email è obbligatoria",
            maxLength: {
              value: 50,
              message: "L'email può contenere al massimo 50 caratteri",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Inserisci password"
          {...register("password", {
            required: "La password è obbligatoria",
            maxLength: {
              value: 50,
              message: "La password può contenere al massimo 50 caratteri",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Accedi</button>
      </form>
    </div>
  );
}

export default Login;
