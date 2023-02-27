import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';

function App() {
  const [posts, setPosts] = useState([]);//both of this have empty string.
  const [error, setError] = useState('');//both of this have empty string.

  useEffect(() => {
    // Fetch the posts from the API
    fetch('https://paragraph.xyz/api/blogs/@perception.works/blog')
      .then(response => response.json())
      .then(data => {
        // Update the state with the fetched posts
        setPosts(data.posts);
      })
      .catch(error => {
        // Update the state if there is an error
        setError('Unable to fetch posts from the API.');
      });
  }, []);

  return (
    <div className="post">
      <div className="no-post">
        {error ? (
          // Display an error message if there is an error
          <p>{error}</p>
        ) : (
          <div>
              {posts.map(post => (
                // Iterate through the posts and display them
                <div key={post.id}>
                  <a href={post.url}>
                    <img src={post.imageUrl} alt={post.title} />
                  </a>

                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </div>
              ))}
              {posts.length === 3 ? (
                // Display a message if there are no posts
                <p>No posts to display.</p>
              ) : null}
            </div>
        )}

      </div>
    </div>
  );
}

export default App;