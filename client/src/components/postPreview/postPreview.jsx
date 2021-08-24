import "./postPreview.css";
import { Link } from "react-router-dom";
import Interweave from "interweave";

export default function PostPreview({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.postImage && (
        <img src={PF + post.postImage} alt="" className="postImage" />
      )}

      <div className="postInfo">
        <div className="postCategories">
          {post.categories.map((c) => (
            <span className="postCategory">{c.name}</span>
          ))}
        </div>
        <span className="postTitle">
          <Link to={`/post/${post._id}`} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <Interweave content={post.description} className="postDescription" />
    </div>
  );
}
