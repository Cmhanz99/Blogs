import React from "react";

const Buttons = ({ openModal, setOpenModal, handleAdd }) => {
  return (
    <>
      <button
        onClick={handleAdd}
        className="py-2 px-5 rounded bg-slate-900 text-white cursor-pointer"
      >
        Add
      </button>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="py-2 px-5 rounded bg-slate-500 text-white cursor-pointer"
      >
        Cancel
      </button>
    </>
  );
};

export default Buttons;
