import React, { useState } from "react";

const NewsFeed = ({ data }) => {
  return (
    <div className="flex flex-col items-center mt-20 pb-3">
      <h2 className="text-2xl font-bold mb-4">News Feed</h2>
      <div className="w-full max-w-xl flex flex-col gap-4">
        {data.map((post) => (
          <SimplePost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

const SimplePost = ({ post }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="font-semibold">{post.author || `User${post.userID}`}</span>
      </div>
      <div className="text-lg font-bold">{post.title}</div>
      <div className="text-gray-600">{post.description}</div>
      <button
        className="text-2xl mt-2 w-8 h-8 flex items-center justify-center"
        onClick={() => setLiked((prev) => !prev)}
        aria-label="Like"
      >
        {liked ? (
          <span style={{ color: 'red' }}>&#10084;&#65039;</span> // solid heart
        ) : (
          <span style={{ color: 'gray' }}>&#9825;</span> // outline heart
        )}
      </button>
    </div>
  );
};

export default NewsFeed;
