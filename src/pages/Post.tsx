import React from "react";
import { LoaderFunction, useLoaderData } from "react-router-dom";

import PostItem from "../components/PostItem";

function PostPage() {
  const post = useLoaderData() as ReturnType<typeof loader>;

  return <PostItem post={post} />;
}

export default PostPage;

export const loader: LoaderFunction = ({ params }) => {
  const postId = params.id;
  return fetch("https://jsonplaceholder.typicode.com/posts/" + postId);
};
