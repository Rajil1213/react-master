import React, { useEffect, useState } from "react";

type Post = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

const Async = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post, index) => {
          return <li key={index}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Async;
