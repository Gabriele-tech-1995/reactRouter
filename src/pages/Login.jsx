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
    <main className="min-h-screen flex justify-center items-center px-4">
      <form
        className="w-full max-w-md p-8 rounded-xl bg-base-100 shadow-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

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

        <label htmlFor="password" className="block mb-2 font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Inserisci password"
          className="input input-bordered w-full mb-2"
          {...register("password", {
            required: "La password è obbligatoria",
            maxLength: {
              value: 50,
              message: "La password può contenere al massimo 50 caratteri",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 mb-4">{errors.password.message}</p>
        )}

        <button type="submit" className="btn btn-primary w-full mt-2">
          Accedi
        </button>
      </form>
    </main>
  );
}

export default Login;
