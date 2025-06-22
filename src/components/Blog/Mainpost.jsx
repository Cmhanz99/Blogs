import React, { useState } from "react";
import FilteredBlog from "./FilteredBlog";

const MainPost = ({ data, setData, setOpenModal }) => {
  const [editPost, setEditPost] = useState(null);
  const userID = Number(localStorage.getItem("userID"));
  const filteredPosts = data.filter((post) => post.userID === userID);

  // Handler to set the post to edit
  const handleEdit = (id) => {
    const post = data.find((p) => p.id === id);
    setEditPost(post);
    localStorage.setItem("editPostId", id); // for modal access
    setOpenModal(true); // open modal for editing
  };

  return (
    <div className="w-[80%] h-auto grid md:grid-cols-3 grid-cols-1 gap-5">
      <FilteredBlog data={filteredPosts} setData={setData} onEdit={handleEdit} />
    </div>
  );
};

export default MainPost;
