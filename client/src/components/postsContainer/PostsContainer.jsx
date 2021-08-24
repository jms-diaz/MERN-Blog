import "./postsContainer.css";
import PostPreview from "../postPreview/postPreview";

export default function PostsContainer({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <PostPreview post={p} />
      ))}
    </div>
  );
}
