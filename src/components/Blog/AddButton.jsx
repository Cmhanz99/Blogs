import React from "react";

const AddButton = ({openModal, setOpenModal}) => {
  return (
    <button
      onClick={() => setOpenModal(!openModal)}
      className="fixed bottom-10 right-10 flex items-center justify-center
      bg-slate-900 text-white text-3xl px-4 py-1.5 cursor-pointer hover:scale-[1.1] duration-300 rounded-full"
    >
      +
    </button>
  );
};

export default AddButton;
