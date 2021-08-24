import "./home.css";
import Header from "../../components/header/Header";
import PostsContainer from "../../components/postsContainer/PostsContainer";
import SideBar from "../../components/sidebar/SideBar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const user = useContext(Context);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <PostsContainer posts={posts} />
        <SideBar />
      </div>
    </>
  );
}
