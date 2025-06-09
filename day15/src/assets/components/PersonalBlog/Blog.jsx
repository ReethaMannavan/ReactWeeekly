import  { useEffect, useState } from "react";
import useLocalStorage from "../../Hooks/LocalStorage";
import { ThemeProvider,useTheme } from "./ThemeContext";

function Blog() {
  const [posts, setPosts] = useLocalStorage("blogPosts", []);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { theme, toggleTheme } = useTheme();


  useEffect(() => {
    if (posts.length > 0) {
      document.title = `Latest Post: ${posts[posts.length - 1].title}`;
    } else {
      document.title = "My Personal Blog";
    }
  }, [posts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newPost = {
      id: Date.now(),
      title,
      content,
    };
    setPosts([...posts, newPost]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="blog-container">
      <button onClick={toggleTheme} className="togglebtn"> 
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

      <h1 className="blogh1">1. My Blog</h1>

      <form onSubmit={handleSubmit} className="blog-form">
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit">Add Post</button>
      </form>

      <div className="posts-list">
        {posts.length === 0 ? (
          <p>No posts yet!</p>
        ) : (
          posts.map((post) => (
            <article key={post.id} className="post">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </article>
          ))
        )}
      </div>
    </div>
  );
}

export default Blog;
