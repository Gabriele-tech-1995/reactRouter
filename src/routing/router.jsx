import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Register from "../pages/Register";

export async function postsLoader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
}

export async function detailLoader({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
  );
  return response.json();
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts", element: <Posts />, loader: postsLoader },
      { path: "posts/:postId", element: <Detail />, loader: detailLoader },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

export default router;
