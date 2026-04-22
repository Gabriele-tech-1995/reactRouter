import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";

function Register() {
  const context = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    context.setUser({
      name: data.name,
      email: data.email,
    });
  }

  return (
    <div className="auth-page">
      <h1>Register</h1>

      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          placeholder="Inserisci nome"
          {...register("name", {
            required: "Il nome è obbligatorio",
            maxLength: {
              value: 50,
              message: "Il nome può contenere al massimo 50 caratteri",
            },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}

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

        <button type="submit">Registrati</button>
      </form>
    </div>
  );
}

export default Register;
