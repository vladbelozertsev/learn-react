import PT from "prop-types";
import React from "react";

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.message}</div>
      ))}
    </div>
  );
};

Posts.propTypes = {
  posts: PT.array.isRequired,
};

export default Posts;
