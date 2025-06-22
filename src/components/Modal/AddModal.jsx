import React, { useState, useEffect } from "react";
import AddData from "./AddData";

const AddModal = ({ openModal, setOpenModal, data, setData }) => {
  return (
    <div className="md:w-100 h-auto bg-white rounded fixed top-30 md:right-110 right-15 shadow-[0px_0px_3px_rgba(0,0,0,0.5)] z-100 p-5">
      <div className="flex justify-between items-center">
        <h2 className="text-xl">Add post</h2>
        <p
          className="text-2xl cursor-pointer hover:text-slate-400"
          onClick={() => setOpenModal(!openModal)}
        >
          x
        </p>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <AddData
          data={data}
          setData={setData}
          openModal={openModal}
          setOpenModal={setOpenModal}
          editPostId={localStorage.getItem("editPostId")}
        />
      </div>
    </div>
  );
};

export default AddModal;
