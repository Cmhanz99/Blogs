import React from "react";

const Input = ({ title, setTitle, description, setDescription }) => {
  return (
    <>
      <input
        type="text"
        className="border w-full border-gray-400 p-2 rounded-md"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border w-full border-gray-400 p-2 rounded-md resize-none"
        placeholder="Content"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
    </>
  );
};

export default Input;
