import React, { useEffect, useState } from 'react';
import getPosts from '../api/post';
import PostCard from '../components/cards/PostCards';

function Home() {
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    getPosts().then(setPosts);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {posts.map((post) => (
          <PostCard key={post.firebaseKey} postObj={post} onUpdate={getAllPosts} />
        ))}
      </div>
    </div>
  );
}

export default Home;
