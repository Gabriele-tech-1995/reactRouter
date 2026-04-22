import useFetch from "../hooks/useFetch";

function Posts() {
  const posts = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div className="posts-page">
      <h1>Tutti i post</h1>

      {posts.map((post) => {
        return (
          <div className="post-card" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
