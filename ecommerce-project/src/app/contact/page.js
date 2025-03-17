import React from "react";

export default async function Contact() {
  const data = await fetch('https://dummyjson.com/products')
  const posts = await data.json()
  return (
    <ul>
      {posts?.products.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}


