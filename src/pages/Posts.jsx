import { Link, useLoaderData } from "react-router-dom";

function Posts() {
  const posts = useLoaderData();

  return (
    <div className="posts-page">
      <h1>Tutti i post</h1>

      {posts.map((post) => {
        return (
          <div className="post-card" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`}>Vai al dettaglio</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
