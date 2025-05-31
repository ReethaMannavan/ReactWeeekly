import { useState } from "react";


const GithubProfile=()=> {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProfile = (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(null);
    setProfile(null);

    fetch(`https://api.github.com/users/${username.trim()}`)
      .then((res) => {
        if (res.status === 404) throw new Error("User not found");
        if (!res.ok) throw new Error("Failed to fetch profile");
        return res.json();
      })
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
      });
  };

  return (
    <div className="github-container">
      <h1>11.GitHub Profile Viewer</h1>
      <form onSubmit={fetchProfile} className="github-form">
        <input
          type="text"
          placeholder="Enter Github username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="github-input"
        />
        <button type="submit" className="github-btn">
          Search
        </button>
      </form>

      {loading && <p className="loading-text">Loading...</p>}
      {error && <p className="error-text">{error}</p>}

      {profile && (
        <div className="profile-card">
          <img
            src={profile.avatar_url}
            alt={profile.login}
            className="profile-avatar"
          />
          <h2>{profile.name || profile.login}</h2>
          {profile.bio && <p className="bio">{profile.bio}</p>}
          <p>
            <strong>Followers:</strong> {profile.followers} |{" "}
            <strong>Following:</strong> {profile.following}
          </p>
          <p>
            <strong>Public Repos:</strong> {profile.public_repos}
          </p>
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
}

export default GithubProfile;
