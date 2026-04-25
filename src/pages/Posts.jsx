import { Link, useLoaderData } from "react-router-dom";

function Posts() {
  const posts = useLoaderData();

  return (
    <main className="mx-auto w-11/12 max-w-4xl py-10">
      <h1 className="mb-6 text-center text-4xl font-bold">Tutti i post</h1>

      <div className="grid gap-6">
        {posts.map((post) => {
          return (
            <div key={post.id} className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.body}</p>
                <div className="card-actions justify-end">
                  <Link to={`/posts/${post.id}`} className="btn btn-primary">
                    Vai al dettaglio
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Posts;
