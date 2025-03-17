"use client";

import { useState, useEffect } from "react";

function Client() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setPosts(data.products);
    }
    fetchPosts();
  }, []);

  if (!posts) return <div>Loading...</div>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default Client;
