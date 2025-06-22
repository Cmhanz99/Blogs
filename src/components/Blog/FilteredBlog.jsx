import React from "react";
import Post from "../Post";

const FilteredBlog = ({data, setData, onEdit}) => {
  const handleDelete = (id) => {
    const deletePost = data.filter((data) => data.id !== id);
    setData(deletePost);
  };
  return (
    <>
      {data.length === 0 ? (
        <div className="text-2xl text-white w-full text-center animate-bounce col-span-3">
          No Post Available
        </div>
      ) : (
        <>
          {data.map((post) => (
            <Post
              title={post.title}
              description={post.description}
              key={post.id}
              id={post.id}
              handleDelete={handleDelete}
              handleEdit={onEdit}
            />
          ))}
        </>
      )}
    </>
  );
};

export default FilteredBlog;
