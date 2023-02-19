import React from "react";
import { LoaderFunction, useLoaderData } from "react-router-dom";

import PostList from "../components/PostList";

function BlogPage() {
  const posts = useLoaderData() as ReturnType<typeof loader>;
  return <PostList posts={posts} />;
}

export default BlogPage;

export const loader: LoaderFunction = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts");
};
