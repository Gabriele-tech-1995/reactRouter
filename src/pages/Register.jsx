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
    <main className="min-h-screen flex justify-center items-center px-4">
      <form
        className="w-full max-w-md p-8 rounded-xl bg-base-100 shadow-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl font-bold text-center mb-6">Register</h1>

        <label htmlFor="name" className="block mb-2 font-medium">
          Nome
        </label>
        <input
          type="text"
          id="name"
          placeholder="Inserisci nome"
          className="input input-bordered w-full mb-2"
          {...register("name", {
            required: "Il nome è obbligatorio",
            maxLength: {
              value: 50,
              message: "Il nome può contenere al massimo 50 caratteri",
            },
          })}
        />
        {errors.name && (
          <p className="text-red-500 mb-4">{errors.name.message}</p>
        )}

        <label htmlFor="email" className="block mb-2 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Inserisci email"
          className="input input-bordered w-full mb-2"
          {...register("email", {
            required: "L'email è obbligatoria",
            maxLength: {
              value: 50,
              message: "L'email può contenere al massimo 50 caratteri",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 mb-4">{errors.email.message}</p>
        )}

        <button type="submit" className="btn btn-secondary w-full mt-2">
          Registrati
        </button>
      </form>
    </main>
  );
}

export default Register;
