import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import Input from "./Input";
import { posts } from "../../data/postdata";

const AddData = ({ data, setData, openModal, setOpenModal, editPostId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser);
    // If editing, prefill fields
    if (editPostId) {
      const postToEdit = data.find((p) => p.id === Number(editPostId));
      if (postToEdit) {
        setTitle(postToEdit.title);
        setDescription(postToEdit.description);
      }
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editPostId, data]);

  const handleAddOrEdit = () => {
    const userID = Number(localStorage.getItem("userID"));
    if (editPostId) {
      // Edit mode: update the post
      const updatedPosts = data.map((post) =>
        post.id === Number(editPostId)
          ? { ...post, title, description }
          : post
      );
      setData(updatedPosts);
      alert("Post updated!");
      localStorage.removeItem("editPostId");
    } else {
      // Add mode: add new post
      const newPost = {
        id: data.length + 1,
        userID: userID,
        author: user,
        title: title,
        description: description,
      };
      setData([...data, newPost]);
      alert("Posted!");
    }
    setTitle("");
    setDescription("");
    setOpenModal(!openModal);
  };

  return (
    <>
      <Input
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
      />
      <div className="flex gap-5">
        <Buttons
          openModal={openModal}
          setOpenModal={setOpenModal}
          handleAdd={handleAddOrEdit}
        />
      </div>
    </>
  );
};

export default AddData;
