import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { getPosts } from '../api/post';
import PostCard from '../components/cards/PostCards';
import Sheep from '../components/Secret/Sheep';

function Home() {
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    getPosts().then(setPosts);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  console.warn(posts);

  return (
    <>
      <Sheep />

      <Button
        type="button"
        class="btn btn-primary"
        href="/post/new"
        style={{ marginTop: '25px' }}
      >
        Create New Post
      </Button>

      <div className="text-center my-4">
        <div className="d-flex flex-wrap">
          {posts.map((post) => (
            <PostCard key={post.id} postObj={post} onUpdate={getAllPosts} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
