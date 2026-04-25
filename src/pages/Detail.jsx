import { useLoaderData } from "react-router-dom";

function Detail() {
  const post = useLoaderData();

  return (
    <main className="min-h-screen flex justify-center items-start px-4 py-10">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-8">Dettaglio Post</h1>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">{post.title}</h2>
            <p>{post.body}</p>
            <p className="font-semibold">ID Post: {post.id}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Detail;
