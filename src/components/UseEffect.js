import React, { useState, useEffect } from "react";

function UseEffect() {
  const [resourseType, setResourseType] = useState("post");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourseType]);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setResourseType("post");
          }}
        >
          post
        </button>
        <button
          onClick={() => {
            setResourseType("user");
          }}
        >
          user
        </button>
        <button
          onClick={() => {
            setResourseType("comments");
          }}
        >
          Comment
        </button>
      </div>
      <h1>{resourseType}</h1>
      {items.map((i) => {
        return <pre>{JSON.stringify(i)}</pre>;
      })}
    </div>
  );
}

export default UseEffect;
