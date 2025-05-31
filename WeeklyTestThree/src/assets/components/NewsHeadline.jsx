import { useEffect, useState } from "react";

const API_KEY = "c2231c16f4f04a89905a75faf1439f45"; 

const NewsHeadline = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=8&apiKey=${API_KEY}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch news");
        return res.json();
      })
      .then((data) => {
        if (data.status === "ok") {
          setNews(data.articles);
        } else {
          setError("API returned error");
        }
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="news-app">
      <header>
        <h1>📰 12.Latest News Headlines</h1>
      </header>
      <main className="news-container">
        {loading && <p>Loading news...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && news.length === 0 && <p>No news found.</p>}

        {!loading &&
          !error &&
          news.map((article, index) => (
            <article className="card" key={index}>
              <img
                src={
                  article.urlToImage ||
                  "https://via.placeholder.com/400x225?text=No+Image"
                }
                alt={article.title || "News Image"}
                loading="lazy"
              />
              <div className="card-content">
                <h2 className="card-title">{article.title}</h2>
                <p className="card-description">
                  {article.description || "No description available."}
                </p>
              </div>
            </article>
          ))}
      </main>
      <footer>
        <p>&copy; 2025 News App</p>
      </footer>
    </div>
  );
};

export default NewsHeadline;




