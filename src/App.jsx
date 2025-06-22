import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import NewsFeed from "./pages/NewsFeed";
import { posts } from "./data/postdata";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(() => {
    const savedPosts = localStorage.getItem('posts');
    return savedPosts ? JSON.parse(savedPosts) : posts;
  });

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(data));
  }, [data]);

  return (
    <>
      <Nav setData={setData}/>
      <Routes>
        <Route path="/" element={<Blog data={data} setData={setData} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newsfeed" element={<NewsFeed data={data} />} />
      </Routes>
    </>
  );
}

export default App;
