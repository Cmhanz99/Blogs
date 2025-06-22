import { SlHeart, SlNote, SlTrash } from "react-icons/sl";

const Post = ({ title, description, id, handleDelete, handleEdit }) => {
  return (
    <div className="bg-white shadow-xl p-4 rounded relative
    flex flex-col gap-5 hover:bg-slate-200 hover:scale-[1.05] transition-all duration-300">
      <div className="border-b pb-8">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="p-2 text-xl rounded flex justify-between cursor-pointer w-full px-6">
        <SlHeart />
        <SlNote onClick={() => handleEdit(id)} />
        <SlTrash onClick={() => handleDelete(id)}/>
      </div>
    </div>
  );
};


export default Post;
