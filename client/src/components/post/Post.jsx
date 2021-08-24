import "./post.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Interweave from "interweave";

export default function Post() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/` + path, {
        data: {
          username: user.username,
        },
      });
      window.location.replace("/");
    } catch (e) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/` + path, {
        username: user.username,
        title,
        description,
      });
      setUpdateMode(false);
    } catch (e) {}
  };

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
    };
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.postImage && (
          <img src={PF + post.postImage} alt="" className="singlePostImage" />
        )}
        {updateMode ? (
          <input
            type="text"
            name="title"
            id="title"
            autoFocus={true}
            className="singlePostTitleInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                />
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                />
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            By
            <Link to={`/?user=${post.username}`} className="link">
              &nbsp;{post.username}
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={setDescription}
            />
            <button className="singlePostButton" onClick={handleUpdate}>
              Update
            </button>
          </>
        ) : (
          //<p className="singlePostDescription">{post.description}</p>
          <Interweave content={description} className="singlePostDescription" />
        )}
      </div>
    </div>
  );
}
