import "./viewPost.css";
import SideBar from "../../components/sidebar/SideBar";
import Post from "../../components/post/Post";

export default function ViewPost() {
  return (
    <div className="single">
      <Post />
      <SideBar />
    </div>
  );
}
