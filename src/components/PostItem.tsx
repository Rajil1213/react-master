import React from "react";
import classes from "./PostItem.module.css";

export type Post = {
  id: string;
  title: string;
  body: string;
};

type PostItemProps = {
  post: Post;
};

function PostItem({ post }: PostItemProps) {
  return (
    <article className={classes.item}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}

export default PostItem;
