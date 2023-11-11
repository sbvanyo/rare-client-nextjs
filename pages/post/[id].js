/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSinglePost } from '../../api/post';
// import getPostTags from '../../api/postTags';

export default function ViewPost() {
  const [postDetails, setPostDetails] = useState({});
  //   const [postTags, setPostTags] = useState([]);
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSinglePost(id).then(setPostDetails);
    // getPostTags(id).then(setPostTags);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  console.warn(postDetails);

  return (
    <>
      <div
        className="mt-5 d-flex flex-wrap"
        // style={{
        //   backgroundImage: 'url(https://img.freepik.com/free-photo/empty-blackboard_53876-16241.jpg)',
        //   backgroundSize: '100% 100%', // Stretch both horizontally and vertically
        //   backgroundPosition: 'center bottom', // Show the bottom edge
        //   padding: '30px', // Add padding for better spacing
        // }}
      >
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="single_img" src={postDetails.image_url} alt={postDetails.title} />
        </div>
        <div className="text-white ms-5 details">
          <h3>{postDetails.title}</h3>
          <p>{postDetails.content}</p>
          <div>
            Tags:
            <div className="tags">
              {postDetails.tags?.map((tag) => (
                <p className="card-text tag"><small className="text-body-secondary ">{tag.label}</small></p>
              ))}
            </div>
          </div>
          <br />
          <p className="card-text"><small className="text-body-secondary ">Published: {postDetails.publication_date}</small></p>
        </div>
      </div>
    </>
  );
}
