import React, { useEffect, useState } from "react";

function APIData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await fetch('https://dummyjson.com/posts');
            const result = await res.json();
            console.log(result)
            setData(result)
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }
    fetchData()
   
  }, [])
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>
  return (
    <>
        <h2>API Data</h2>
        {/* <h3>{data && data.posts && data.posts[0].title}</h3>
        <h3>{data?.posts[0].title}</h3> */}
        <h3>{data?.posts[0].title}</h3>
    </>
  );
}

export default APIData;
