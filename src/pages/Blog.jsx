import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddModal from "../components/Modal/AddModal";
import Mainpost from "../components/Blog/Mainpost";
import AddButton from "../components/Blog/AddButton";

const Blog = ({ data, setData }) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
    console.log(user);
  }, []);
  return (
    <main className="flex md:h-screen min-h-screen pb-4 flex-col bg-slate-500">
      <section className="flex justify-center w-full h-auto mt-20">
        <Mainpost data={data} setData={setData} setOpenModal={setOpenModal} />
      </section>
      <AddButton setOpenModal={setOpenModal} openModal={openModal} />
      {openModal && (
        <>
          <AddModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            data={data}
            setData={setData}
          />
          <div className="fixed top-0 left-0 bg-black/50 backdrop-blur-sm w-full h-screen"></div>
        </>
      )}
    </main>
  );
};

export default Blog;
