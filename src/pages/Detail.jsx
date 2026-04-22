import { useLoaderData } from "react-router-dom";

function Detail() {
  const post = useLoaderData();

  return (
    <div className="detail-page">
      <h1>Dettaglio Post</h1>

      <div className="post-card">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>ID Post: {post.id}</p>
      </div>
    </div>
  );
}

export default Detail;
